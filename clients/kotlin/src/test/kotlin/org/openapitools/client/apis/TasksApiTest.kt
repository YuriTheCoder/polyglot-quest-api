/**
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 *
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package org.openapitools.client.apis

import io.kotlintest.shouldBe
import io.kotlintest.specs.ShouldSpec

import org.openapitools.client.apis.TasksApi
import org.openapitools.client.models.CompleteTask200Response
import org.openapitools.client.models.CreateTask201Response
import org.openapitools.client.models.CreateTaskRequest
import org.openapitools.client.models.DeleteTask200Response
import org.openapitools.client.models.Error
import org.openapitools.client.models.GetTaskById200Response
import org.openapitools.client.models.GetTaskStats200Response
import org.openapitools.client.models.ListTasks200Response
import org.openapitools.client.models.ListTasksByStatus200Response
import org.openapitools.client.models.UpdateTask200Response
import org.openapitools.client.models.UpdateTaskRequest

class TasksApiTest : ShouldSpec() {
    init {
        // uncomment below to create an instance of TasksApi
        //val apiInstance = TasksApi()

        // to test completeTask
        should("test completeTask") {
            // uncomment below to test completeTask
            //val id : kotlin.String = id_example // kotlin.String | ID da tarefa
            //val result : CompleteTask200Response = apiInstance.completeTask(id)
            //result shouldBe ("TODO")
        }

        // to test createTask
        should("test createTask") {
            // uncomment below to test createTask
            //val createTaskRequest : CreateTaskRequest =  // CreateTaskRequest | 
            //val result : CreateTask201Response = apiInstance.createTask(createTaskRequest)
            //result shouldBe ("TODO")
        }

        // to test deleteTask
        should("test deleteTask") {
            // uncomment below to test deleteTask
            //val id : kotlin.String = id_example // kotlin.String | ID da tarefa
            //val result : DeleteTask200Response = apiInstance.deleteTask(id)
            //result shouldBe ("TODO")
        }

        // to test getTaskById
        should("test getTaskById") {
            // uncomment below to test getTaskById
            //val id : kotlin.String = id_example // kotlin.String | ID da tarefa
            //val result : GetTaskById200Response = apiInstance.getTaskById(id)
            //result shouldBe ("TODO")
        }

        // to test getTaskStats
        should("test getTaskStats") {
            // uncomment below to test getTaskStats
            //val result : GetTaskStats200Response = apiInstance.getTaskStats()
            //result shouldBe ("TODO")
        }

        // to test listTasks
        should("test listTasks") {
            // uncomment below to test listTasks
            //val status : kotlin.String = status_example // kotlin.String | Filtrar por status
            //val priority : kotlin.String = priority_example // kotlin.String | Filtrar por prioridade
            //val page : kotlin.Int = 56 // kotlin.Int | Número da página
            //val limit : kotlin.Int = 56 // kotlin.Int | Itens por página
            //val sortBy : kotlin.String = sortBy_example // kotlin.String | Campo para ordenação
            //val sortOrder : kotlin.String = sortOrder_example // kotlin.String | Ordem da classificação
            //val search : kotlin.String = search_example // kotlin.String | Buscar no título e descrição
            //val result : ListTasks200Response = apiInstance.listTasks(status, priority, page, limit, sortBy, sortOrder, search)
            //result shouldBe ("TODO")
        }

        // to test listTasksByStatus
        should("test listTasksByStatus") {
            // uncomment below to test listTasksByStatus
            //val status : kotlin.String = status_example // kotlin.String | Status das tarefas
            //val page : kotlin.Int = 56 // kotlin.Int | Número da página
            //val limit : kotlin.Int = 56 // kotlin.Int | Itens por página
            //val result : ListTasksByStatus200Response = apiInstance.listTasksByStatus(status, page, limit)
            //result shouldBe ("TODO")
        }

        // to test updateTask
        should("test updateTask") {
            // uncomment below to test updateTask
            //val id : kotlin.String = id_example // kotlin.String | ID da tarefa
            //val updateTaskRequest : UpdateTaskRequest =  // UpdateTaskRequest | 
            //val result : UpdateTask200Response = apiInstance.updateTask(id, updateTaskRequest)
            //result shouldBe ("TODO")
        }

    }
}
