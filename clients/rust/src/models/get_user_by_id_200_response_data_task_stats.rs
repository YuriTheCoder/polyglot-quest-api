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
pub struct GetUserById200ResponseDataTaskStats {
    #[serde(rename = "total", skip_serializing_if = "Option::is_none")]
    pub total: Option<i32>,
    #[serde(rename = "pending", skip_serializing_if = "Option::is_none")]
    pub pending: Option<i32>,
    #[serde(rename = "in_progress", skip_serializing_if = "Option::is_none")]
    pub in_progress: Option<i32>,
    #[serde(rename = "completed", skip_serializing_if = "Option::is_none")]
    pub completed: Option<i32>,
}

impl GetUserById200ResponseDataTaskStats {
    pub fn new() -> GetUserById200ResponseDataTaskStats {
        GetUserById200ResponseDataTaskStats {
            total: None,
            pending: None,
            in_progress: None,
            completed: None,
        }
    }
}

