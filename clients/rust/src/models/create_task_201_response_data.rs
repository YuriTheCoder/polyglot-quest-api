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
pub struct CreateTask201ResponseData {
    #[serde(rename = "task", skip_serializing_if = "Option::is_none")]
    pub task: Option<Box<models::Task>>,
}

impl CreateTask201ResponseData {
    pub fn new() -> CreateTask201ResponseData {
        CreateTask201ResponseData {
            task: None,
        }
    }
}

