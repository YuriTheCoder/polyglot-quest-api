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
pub struct GetUserStats200ResponseDataUsers {
    #[serde(rename = "total", skip_serializing_if = "Option::is_none")]
    pub total: Option<i32>,
    #[serde(rename = "active", skip_serializing_if = "Option::is_none")]
    pub active: Option<i32>,
    #[serde(rename = "inactive", skip_serializing_if = "Option::is_none")]
    pub inactive: Option<i32>,
    #[serde(rename = "admins", skip_serializing_if = "Option::is_none")]
    pub admins: Option<i32>,
}

impl GetUserStats200ResponseDataUsers {
    pub fn new() -> GetUserStats200ResponseDataUsers {
        GetUserStats200ResponseDataUsers {
            total: None,
            active: None,
            inactive: None,
            admins: None,
        }
    }
}

