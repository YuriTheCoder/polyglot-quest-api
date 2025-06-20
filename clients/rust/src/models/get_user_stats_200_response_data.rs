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
pub struct GetUserStats200ResponseData {
    #[serde(rename = "users", skip_serializing_if = "Option::is_none")]
    pub users: Option<Box<models::GetUserStats200ResponseDataUsers>>,
    #[serde(rename = "tasks", skip_serializing_if = "Option::is_none")]
    pub tasks: Option<Box<models::GetUserStats200ResponseDataTasks>>,
    #[serde(rename = "mostActiveUsers", skip_serializing_if = "Option::is_none")]
    pub most_active_users: Option<Vec<models::GetUserStats200ResponseDataMostActiveUsersInner>>,
}

impl GetUserStats200ResponseData {
    pub fn new() -> GetUserStats200ResponseData {
        GetUserStats200ResponseData {
            users: None,
            tasks: None,
            most_active_users: None,
        }
    }
}

