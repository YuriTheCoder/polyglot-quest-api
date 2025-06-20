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

import org.openapitools.client.ApiCallback;
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.ApiResponse;
import org.openapitools.client.Configuration;
import org.openapitools.client.Pair;
import org.openapitools.client.ProgressRequestBody;
import org.openapitools.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import org.openapitools.client.model.ProcessShareWebhook200Response;
import org.openapitools.client.model.ProcessShareWebhookRequest;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class WebhooksApi {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public WebhooksApi() {
        this(Configuration.getDefaultApiClient());
    }

    public WebhooksApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public int getHostIndex() {
        return localHostIndex;
    }

    public void setHostIndex(int hostIndex) {
        this.localHostIndex = hostIndex;
    }

    public String getCustomBaseUrl() {
        return localCustomBaseUrl;
    }

    public void setCustomBaseUrl(String customBaseUrl) {
        this.localCustomBaseUrl = customBaseUrl;
    }

    /**
     * Build call for processShareWebhook
     * @param processShareWebhookRequest  (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Webhook processado </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call processShareWebhookCall(@javax.annotation.Nullable ProcessShareWebhookRequest processShareWebhookRequest, final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = processShareWebhookRequest;

        // create path and map variables
        String localVarPath = "/api/webhooks/share";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "bearerAuth" };
        return localVarApiClient.buildCall(basePath, localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call processShareWebhookValidateBeforeCall(@javax.annotation.Nullable ProcessShareWebhookRequest processShareWebhookRequest, final ApiCallback _callback) throws ApiException {
        return processShareWebhookCall(processShareWebhookRequest, _callback);

    }

    /**
     * Webhook para processar compartilhamentos
     * 
     * @param processShareWebhookRequest  (optional)
     * @return ProcessShareWebhook200Response
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Webhook processado </td><td>  -  </td></tr>
     </table>
     */
    public ProcessShareWebhook200Response processShareWebhook(@javax.annotation.Nullable ProcessShareWebhookRequest processShareWebhookRequest) throws ApiException {
        ApiResponse<ProcessShareWebhook200Response> localVarResp = processShareWebhookWithHttpInfo(processShareWebhookRequest);
        return localVarResp.getData();
    }

    /**
     * Webhook para processar compartilhamentos
     * 
     * @param processShareWebhookRequest  (optional)
     * @return ApiResponse&lt;ProcessShareWebhook200Response&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Webhook processado </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<ProcessShareWebhook200Response> processShareWebhookWithHttpInfo(@javax.annotation.Nullable ProcessShareWebhookRequest processShareWebhookRequest) throws ApiException {
        okhttp3.Call localVarCall = processShareWebhookValidateBeforeCall(processShareWebhookRequest, null);
        Type localVarReturnType = new TypeToken<ProcessShareWebhook200Response>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Webhook para processar compartilhamentos (asynchronously)
     * 
     * @param processShareWebhookRequest  (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Webhook processado </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call processShareWebhookAsync(@javax.annotation.Nullable ProcessShareWebhookRequest processShareWebhookRequest, final ApiCallback<ProcessShareWebhook200Response> _callback) throws ApiException {

        okhttp3.Call localVarCall = processShareWebhookValidateBeforeCall(processShareWebhookRequest, _callback);
        Type localVarReturnType = new TypeToken<ProcessShareWebhook200Response>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
