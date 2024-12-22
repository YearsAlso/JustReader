use sea_orm::{Database, DatabaseConnection, EntityTrait, Set, ActiveModelTrait};
use crate::models::user;

pub struct UserService {
    db: DatabaseConnection,
}

impl UserService {
    pub async fn new(db_url: &str) -> Result<Self, String> {
        let db = Database::connect(db_url).await.map_err(|e| e.to_string())?;
        Ok(Self { db })
    }

    #[tauri::command]
    pub async fn register_user(&self, name: &str) -> Result<(), String> {
        let user = user::ActiveModel {
            name: Set(name.to_string()),
            ..Default::default()
        };

        user.insert(&self.db).await.map_err(|e| e.to_string())?;
        Ok(())
    }

    #[tauri::command]
    pub async fn get_user_by_id(&self, id: i32) -> Result<Option<user::Model>, String> {
        let user = user::Entity::find_by_id(id).one(&self.db).await.map_err(|e| e.to_string())?;
        Ok(user)
    }
}
