use sea_orm::sea_query::{
    MysqlQueryBuilder, PostgresQueryBuilder, SqliteQueryBuilder, TableCreateStatement,
};
use sea_orm::{ConnectionTrait, Database, DatabaseConnection, Schema, Statement};
use tauri::{AppHandle, Manager};
mod models; // 引入models模块
mod services; // 引入services模块

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn init_database(db_type: &str, config: serde_json::Value) -> Result<(), String> {
    let db_url = match db_type {
        "sqlite" => config["dbPath"]
            .as_str()
            .unwrap_or("sqlite:just-reader.db")
            .to_string(),
        "mysql" => format!(
            "mysql://{}:{}@{}/{}",
            config["user"].as_str().unwrap_or("root"),
            config["password"].as_str().unwrap_or(""),
            config["host"].as_str().unwrap_or("localhost"),
            config["database"].as_str().unwrap_or("just-reader")
        ),
        "postgresql" => format!(
            "postgres://{}:{}@{}/{}",
            config["user"].as_str().unwrap_or("postgres"),
            config["password"].as_str().unwrap_or(""),
            config["host"].as_str().unwrap_or("localhost"),
            config["database"].as_str().unwrap_or("just-reader")
        ),
        _ => return Err("Unsupported database type".into()),
    };

    let db: DatabaseConnection = Database::connect(&db_url)
        .await
        .map_err(|e| e.to_string())?;

    let schema = Schema::new(db.get_database_backend());
    let create_table_stmt: TableCreateStatement =
        schema.create_table_from_entity(models::user::Entity);

    let query_builder_str = if db_type == "sqlite" {
        create_table_stmt.to_string(SqliteQueryBuilder)
    } else if db_type == "mysql" {
        create_table_stmt.to_string(MysqlQueryBuilder)
    } else if db_type == "postgresql" {
        create_table_stmt.to_string(PostgresQueryBuilder)
    } else {
        return Err("Unsupported database type".into());
    }; 

    db.execute(Statement::from_string(
        db.get_database_backend(),
        query_builder_str,
    ))
    .await
    .map_err(|e| e.to_string())?;

    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_store::Builder::new().build())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, init_database])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

fn show_window(app: &AppHandle) {
    let windows = app.webview_windows();

    windows
        .values()
        .next()
        .expect("Sorry, no window found")
        .set_focus()
        .expect("Can't Bring Window to Focus");
}
