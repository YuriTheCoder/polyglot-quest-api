/*
 * Gamified Task Management API
 *
 * API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://openapi-generator.tech
 */

use crate::models;
use serde::{Deserialize, Serialize};

#[derive(Clone, Default, Debug, PartialEq, Serialize, Deserialize)]
pub struct GetUserById200ResponseData {
    #[serde(rename = "user", skip_serializing_if = "Option::is_none")]
    pub user: Option<Box<models::User>>,
    #[serde(rename = "taskStats", skip_serializing_if = "Option::is_none")]
    pub task_stats: Option<Box<models::GetUserById200ResponseDataTaskStats>>,
}

impl GetUserById200ResponseData {
    pub fn new() -> GetUserById200ResponseData {
        GetUserById200ResponseData {
            user: None,
            task_stats: None,
        }
    }
}

