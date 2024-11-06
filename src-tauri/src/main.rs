// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::generate_context;
use tauri_plugin_sql::{Builder, Migration, MigrationKind};

fn main() {
    let migrations = vec![
        // Define your migrations here
        Migration {
            version: 1,
            description: "create_initial_tables",
            sql: "CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);",
            kind: MigrationKind::Up,
        }
    ];

    tauri::Builder::default()
        .plugin(tauri_plugin_sql::Builder::default().build())
        .run(generate_context!())
        .expect("error while running tauri application");
    just_reader_lib::run()
}
