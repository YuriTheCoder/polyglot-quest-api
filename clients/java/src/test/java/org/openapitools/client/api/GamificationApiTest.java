/*
 * Gamified Task Management API
 * API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.ApiGamificationBadgesGet200Response;
import org.openapitools.client.model.ApiGamificationDashboardGet200Response;
import org.openapitools.client.model.ApiGamificationGlobalStatsGet200Response;
import org.openapitools.client.model.ApiGamificationPreferencesPut200Response;
import org.openapitools.client.model.ApiGamificationPreferencesPutRequest;
import org.openapitools.client.model.ApiGamificationSharePost200Response;
import org.openapitools.client.model.ApiGamificationSharePostRequest;
import org.openapitools.client.model.ApiLeaderboardGet200Response;
import org.openapitools.client.model.ApiTasksIdCompleteQuestPost200Response;
import org.openapitools.client.model.ApiTasksIdCompleteQuestPostRequest;
import org.openapitools.client.model.ApiTasksStoriesGet200Response;
import org.openapitools.client.model.ApiTasksStoriesIdGet200Response;
import org.openapitools.client.model.ApiTasksStoryPost201Response;
import org.openapitools.client.model.ApiTasksStoryPostRequest;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for GamificationApi
 */
@Disabled
public class GamificationApiTest {

    private final GamificationApi api = new GamificationApi();

    /**
     * Listar badges disponíveis e conquistados
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void apiGamificationBadgesGetTest() throws ApiException {
        ApiGamificationBadgesGet200Response response = api.apiGamificationBadgesGet();
        // TODO: test validations
    }

    /**
     * Dashboard de gamificação do usuário
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void apiGamificationDashboardGetTest() throws ApiException {
        ApiGamificationDashboardGet200Response response = api.apiGamificationDashboardGet();
        // TODO: test validations
    }

    /**
     * Estatísticas globais da plataforma
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void apiGamificationGlobalStatsGetTest() throws ApiException {
        ApiGamificationGlobalStatsGet200Response response = api.apiGamificationGlobalStatsGet();
        // TODO: test validations
    }

    /**
     * Atualizar preferências de gamificação
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void apiGamificationPreferencesPutTest() throws ApiException {
        ApiGamificationPreferencesPutRequest apiGamificationPreferencesPutRequest = null;
        ApiGamificationPreferencesPut200Response response = api.apiGamificationPreferencesPut(apiGamificationPreferencesPutRequest);
        // TODO: test validations
    }

    /**
     * Compartilhar conquista manualmente
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void apiGamificationSharePostTest() throws ApiException {
        ApiGamificationSharePostRequest apiGamificationSharePostRequest = null;
        ApiGamificationSharePost200Response response = api.apiGamificationSharePost(apiGamificationSharePostRequest);
        // TODO: test validations
    }

    /**
     * Obter leaderboard público
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void apiLeaderboardGetTest() throws ApiException {
        Integer limit = null;
        String period = null;
        ApiLeaderboardGet200Response response = api.apiLeaderboardGet(limit, period);
        // TODO: test validations
    }

    /**
     * Completar quest e ganhar XP
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void apiTasksIdCompleteQuestPostTest() throws ApiException {
        String id = null;
        ApiTasksIdCompleteQuestPostRequest apiTasksIdCompleteQuestPostRequest = null;
        ApiTasksIdCompleteQuestPost200Response response = api.apiTasksIdCompleteQuestPost(id, apiTasksIdCompleteQuestPostRequest);
        // TODO: test validations
    }

    /**
     * Buscar histórias do usuário
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void apiTasksStoriesGetTest() throws ApiException {
        String active = null;
        Integer limit = null;
        Integer page = null;
        ApiTasksStoriesGet200Response response = api.apiTasksStoriesGet(active, limit, page);
        // TODO: test validations
    }

    /**
     * Buscar história específica
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void apiTasksStoriesIdGetTest() throws ApiException {
        String id = null;
        ApiTasksStoriesIdGet200Response response = api.apiTasksStoriesIdGet(id);
        // TODO: test validations
    }

    /**
     * Gerar história RPG com IA
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void apiTasksStoryPostTest() throws ApiException {
        ApiTasksStoryPostRequest apiTasksStoryPostRequest = null;
        ApiTasksStoryPost201Response response = api.apiTasksStoryPost(apiTasksStoryPostRequest);
        // TODO: test validations
    }

}
