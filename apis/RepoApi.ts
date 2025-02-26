// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { DataPointBrowseGetDto } from '../models/DataPointBrowseGetDto';
import { FileDto } from '../models/FileDto';
import { FileOutputDto } from '../models/FileOutputDto';
import { RepoDataJobDto } from '../models/RepoDataJobDto';
import { RepoPointDto } from '../models/RepoPointDto';
import { RepoPointShareDto } from '../models/RepoPointShareDto';
import { SnapshotDto } from '../models/SnapshotDto';

/**
 * no description
 */
export class RepoApiRequestFactory extends BaseAPIRequestFactory {

    /**
     */
    public async apiReposGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/repos';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param pointUser 
     * @param pointName 
     */
    public async apiReposPointUserPointNameDelete(pointUser: string, pointName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pointUser' is not null or undefined
        if (pointUser === null || pointUser === undefined) {
            throw new RequiredError("RepoApi", "apiReposPointUserPointNameDelete", "pointUser");
        }


        // verify required parameter 'pointName' is not null or undefined
        if (pointName === null || pointName === undefined) {
            throw new RequiredError("RepoApi", "apiReposPointUserPointNameDelete", "pointName");
        }


        // Path Params
        const localVarPath = '/api/repos/{pointUser}/{pointName}'
            .replace('{' + 'pointUser' + '}', encodeURIComponent(String(pointUser)))
            .replace('{' + 'pointName' + '}', encodeURIComponent(String(pointName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param pointUser 
     * @param pointName 
     */
    public async apiReposPointUserPointNameGet(pointUser: string, pointName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pointUser' is not null or undefined
        if (pointUser === null || pointUser === undefined) {
            throw new RequiredError("RepoApi", "apiReposPointUserPointNameGet", "pointUser");
        }


        // verify required parameter 'pointName' is not null or undefined
        if (pointName === null || pointName === undefined) {
            throw new RequiredError("RepoApi", "apiReposPointUserPointNameGet", "pointName");
        }


        // Path Params
        const localVarPath = '/api/repos/{pointUser}/{pointName}'
            .replace('{' + 'pointUser' + '}', encodeURIComponent(String(pointUser)))
            .replace('{' + 'pointName' + '}', encodeURIComponent(String(pointName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param pointUser 
     * @param pointName 
     * @param maxBytes 
     */
    public async apiReposPointUserPointNamePut(pointUser: string, pointName: string, maxBytes?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pointUser' is not null or undefined
        if (pointUser === null || pointUser === undefined) {
            throw new RequiredError("RepoApi", "apiReposPointUserPointNamePut", "pointUser");
        }


        // verify required parameter 'pointName' is not null or undefined
        if (pointName === null || pointName === undefined) {
            throw new RequiredError("RepoApi", "apiReposPointUserPointNamePut", "pointName");
        }



        // Path Params
        const localVarPath = '/api/repos/{pointUser}/{pointName}'
            .replace('{' + 'pointUser' + '}', encodeURIComponent(String(pointUser)))
            .replace('{' + 'pointName' + '}', encodeURIComponent(String(pointName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxBytes !== undefined) {
            requestContext.setQueryParam("maxBytes", ObjectSerializer.serialize(maxBytes, "number", "int64"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param pointUser 
     * @param pointName 
     * @param user 
     */
    public async apiReposPointUserPointNameSharesDelete(pointUser: string, pointName: string, user?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pointUser' is not null or undefined
        if (pointUser === null || pointUser === undefined) {
            throw new RequiredError("RepoApi", "apiReposPointUserPointNameSharesDelete", "pointUser");
        }


        // verify required parameter 'pointName' is not null or undefined
        if (pointName === null || pointName === undefined) {
            throw new RequiredError("RepoApi", "apiReposPointUserPointNameSharesDelete", "pointName");
        }



        // Path Params
        const localVarPath = '/api/repos/{pointUser}/{pointName}/shares'
            .replace('{' + 'pointUser' + '}', encodeURIComponent(String(pointUser)))
            .replace('{' + 'pointName' + '}', encodeURIComponent(String(pointName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (user !== undefined) {
            requestContext.setQueryParam("user", ObjectSerializer.serialize(user, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param pointUser 
     * @param pointName 
     * @param user 
     */
    public async apiReposPointUserPointNameSharesGet(pointUser: string, pointName: string, user?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pointUser' is not null or undefined
        if (pointUser === null || pointUser === undefined) {
            throw new RequiredError("RepoApi", "apiReposPointUserPointNameSharesGet", "pointUser");
        }


        // verify required parameter 'pointName' is not null or undefined
        if (pointName === null || pointName === undefined) {
            throw new RequiredError("RepoApi", "apiReposPointUserPointNameSharesGet", "pointName");
        }



        // Path Params
        const localVarPath = '/api/repos/{pointUser}/{pointName}/shares'
            .replace('{' + 'pointUser' + '}', encodeURIComponent(String(pointUser)))
            .replace('{' + 'pointName' + '}', encodeURIComponent(String(pointName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (user !== undefined) {
            requestContext.setQueryParam("user", ObjectSerializer.serialize(user, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param pointUser 
     * @param pointName 
     * @param repoPointShareDto 
     */
    public async apiReposPointUserPointNameSharesPut(pointUser: string, pointName: string, repoPointShareDto?: RepoPointShareDto, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pointUser' is not null or undefined
        if (pointUser === null || pointUser === undefined) {
            throw new RequiredError("RepoApi", "apiReposPointUserPointNameSharesPut", "pointUser");
        }


        // verify required parameter 'pointName' is not null or undefined
        if (pointName === null || pointName === undefined) {
            throw new RequiredError("RepoApi", "apiReposPointUserPointNameSharesPut", "pointName");
        }



        // Path Params
        const localVarPath = '/api/repos/{pointUser}/{pointName}/shares'
            .replace('{' + 'pointUser' + '}', encodeURIComponent(String(pointUser)))
            .replace('{' + 'pointName' + '}', encodeURIComponent(String(pointName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json",
        
            "application/*+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(repoPointShareDto, "RepoPointShareDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param name 
     * @param maxBytes 
     */
    public async apiReposPost(name?: string, maxBytes?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/api/repos';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (maxBytes !== undefined) {
            requestContext.setQueryParam("maxBytes", ObjectSerializer.serialize(maxBytes, "number", "int64"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param dataPointBrowseGetDto 
     */
    public async browseFilesForRepo(dataPointBrowseGetDto?: DataPointBrowseGetDto, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/api/repos/files';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json",
        
            "application/*+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(dataPointBrowseGetDto, "DataPointBrowseGetDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param pointUser 
     * @param pointName 
     * @param id 
     */
    public async deleteOneSnapshotForRepo(pointUser: string, pointName: string, id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pointUser' is not null or undefined
        if (pointUser === null || pointUser === undefined) {
            throw new RequiredError("RepoApi", "deleteOneSnapshotForRepo", "pointUser");
        }


        // verify required parameter 'pointName' is not null or undefined
        if (pointName === null || pointName === undefined) {
            throw new RequiredError("RepoApi", "deleteOneSnapshotForRepo", "pointName");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("RepoApi", "deleteOneSnapshotForRepo", "id");
        }


        // Path Params
        const localVarPath = '/api/repos/{pointUser}/{pointName}/snapshots/{id}'
            .replace('{' + 'pointUser' + '}', encodeURIComponent(String(pointUser)))
            .replace('{' + 'pointName' + '}', encodeURIComponent(String(pointName)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param body 
     */
    public async dumpFileForRepo(body?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/api/repos/dump';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json",
        
            "application/*+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "string", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param pointUser 
     * @param pointName 
     */
    public async getAllJobsForRepo(pointUser: string, pointName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pointUser' is not null or undefined
        if (pointUser === null || pointUser === undefined) {
            throw new RequiredError("RepoApi", "getAllJobsForRepo", "pointUser");
        }


        // verify required parameter 'pointName' is not null or undefined
        if (pointName === null || pointName === undefined) {
            throw new RequiredError("RepoApi", "getAllJobsForRepo", "pointName");
        }


        // Path Params
        const localVarPath = '/api/repos/{pointUser}/{pointName}/jobs'
            .replace('{' + 'pointUser' + '}', encodeURIComponent(String(pointUser)))
            .replace('{' + 'pointName' + '}', encodeURIComponent(String(pointName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param pointUser 
     * @param pointName 
     */
    public async getAllSnapshotsForRepo(pointUser: string, pointName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pointUser' is not null or undefined
        if (pointUser === null || pointUser === undefined) {
            throw new RequiredError("RepoApi", "getAllSnapshotsForRepo", "pointUser");
        }


        // verify required parameter 'pointName' is not null or undefined
        if (pointName === null || pointName === undefined) {
            throw new RequiredError("RepoApi", "getAllSnapshotsForRepo", "pointName");
        }


        // Path Params
        const localVarPath = '/api/repos/{pointUser}/{pointName}/snapshots'
            .replace('{' + 'pointUser' + '}', encodeURIComponent(String(pointUser)))
            .replace('{' + 'pointName' + '}', encodeURIComponent(String(pointName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param pointUser 
     * @param pointName 
     * @param id 
     */
    public async getOneSnapshotForRepo(pointUser: string, pointName: string, id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pointUser' is not null or undefined
        if (pointUser === null || pointUser === undefined) {
            throw new RequiredError("RepoApi", "getOneSnapshotForRepo", "pointUser");
        }


        // verify required parameter 'pointName' is not null or undefined
        if (pointName === null || pointName === undefined) {
            throw new RequiredError("RepoApi", "getOneSnapshotForRepo", "pointName");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("RepoApi", "getOneSnapshotForRepo", "id");
        }


        // Path Params
        const localVarPath = '/api/repos/{pointUser}/{pointName}/snapshots/{id}'
            .replace('{' + 'pointUser' + '}', encodeURIComponent(String(pointUser)))
            .replace('{' + 'pointName' + '}', encodeURIComponent(String(pointName)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class RepoApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiReposGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiReposGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<RepoPointDto> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<RepoPointDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RepoPointDto>", ""
            ) as Array<RepoPointDto>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<RepoPointDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RepoPointDto>", ""
            ) as Array<RepoPointDto>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiReposPointUserPointNameDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiReposPointUserPointNameDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<boolean >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiReposPointUserPointNameGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiReposPointUserPointNameGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RepoPointDto >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RepoPointDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RepoPointDto", ""
            ) as RepoPointDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RepoPointDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RepoPointDto", ""
            ) as RepoPointDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiReposPointUserPointNamePut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiReposPointUserPointNamePutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RepoPointDto >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RepoPointDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RepoPointDto", ""
            ) as RepoPointDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RepoPointDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RepoPointDto", ""
            ) as RepoPointDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiReposPointUserPointNameSharesDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiReposPointUserPointNameSharesDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<boolean >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiReposPointUserPointNameSharesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiReposPointUserPointNameSharesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<RepoPointShareDto> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<RepoPointShareDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RepoPointShareDto>", ""
            ) as Array<RepoPointShareDto>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<RepoPointShareDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RepoPointShareDto>", ""
            ) as Array<RepoPointShareDto>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiReposPointUserPointNameSharesPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiReposPointUserPointNameSharesPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RepoPointShareDto >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RepoPointShareDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RepoPointShareDto", ""
            ) as RepoPointShareDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RepoPointShareDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RepoPointShareDto", ""
            ) as RepoPointShareDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to apiReposPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async apiReposPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RepoPointDto >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RepoPointDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RepoPointDto", ""
            ) as RepoPointDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RepoPointDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RepoPointDto", ""
            ) as RepoPointDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to browseFilesForRepo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async browseFilesForRepoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<FileDto> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<FileDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<FileDto>", ""
            ) as Array<FileDto>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<FileDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<FileDto>", ""
            ) as Array<FileDto>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteOneSnapshotForRepo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteOneSnapshotForRepoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<boolean >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dumpFileForRepo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dumpFileForRepoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FileOutputDto >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FileOutputDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FileOutputDto", ""
            ) as FileOutputDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: FileOutputDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FileOutputDto", ""
            ) as FileOutputDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllJobsForRepo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllJobsForRepoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<RepoDataJobDto> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<RepoDataJobDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RepoDataJobDto>", ""
            ) as Array<RepoDataJobDto>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<RepoDataJobDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<RepoDataJobDto>", ""
            ) as Array<RepoDataJobDto>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllSnapshotsForRepo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllSnapshotsForRepoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<SnapshotDto> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<SnapshotDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SnapshotDto>", ""
            ) as Array<SnapshotDto>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<SnapshotDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SnapshotDto>", ""
            ) as Array<SnapshotDto>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOneSnapshotForRepo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOneSnapshotForRepoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SnapshotDto >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SnapshotDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SnapshotDto", ""
            ) as SnapshotDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SnapshotDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SnapshotDto", ""
            ) as SnapshotDto;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
