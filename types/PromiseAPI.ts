import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { AuthInputDto } from '../models/AuthInputDto';
import { AuthOutputDto } from '../models/AuthOutputDto';
import { AutoJobConfigDto } from '../models/AutoJobConfigDto';
import { AutoJobGetDto } from '../models/AutoJobGetDto';
import { AutoJobPutDto } from '../models/AutoJobPutDto';
import { BasePointIdentifyDto } from '../models/BasePointIdentifyDto';
import { CPUItemDto } from '../models/CPUItemDto';
import { DataPointBrowseGetDto } from '../models/DataPointBrowseGetDto';
import { DataPointDto } from '../models/DataPointDto';
import { DataPointShareDto } from '../models/DataPointShareDto';
import { DynamicConfigDto } from '../models/DynamicConfigDto';
import { FileDto } from '../models/FileDto';
import { FileOutputDto } from '../models/FileOutputDto';
import { FilePutDto } from '../models/FilePutDto';
import { GlobalConfigPutDto } from '../models/GlobalConfigPutDto';
import { JobBackupDto } from '../models/JobBackupDto';
import { JobErrorDto } from '../models/JobErrorDto';
import { JobRestoreDto } from '../models/JobRestoreDto';
import { LogItemDto } from '../models/LogItemDto';
import { MessageItemDto } from '../models/MessageItemDto';
import { MessagePostDto } from '../models/MessagePostDto';
import { MessageReadItem } from '../models/MessageReadItem';
import { RepoDataJobDto } from '../models/RepoDataJobDto';
import { RepoDataJobStatusDto } from '../models/RepoDataJobStatusDto';
import { RepoDataJobSummaryDto } from '../models/RepoDataJobSummaryDto';
import { RepoPointDto } from '../models/RepoPointDto';
import { RepoPointShareDto } from '../models/RepoPointShareDto';
import { SnapshotDto } from '../models/SnapshotDto';
import { SnapshotResultDto } from '../models/SnapshotResultDto';
import { SystemStatusDto } from '../models/SystemStatusDto';
import { UserCreateDto } from '../models/UserCreateDto';
import { UserPermission } from '../models/UserPermission';
import { UserPermissionDto } from '../models/UserPermissionDto';
import { UserPutDto } from '../models/UserPutDto';
import { UserSummaryDto } from '../models/UserSummaryDto';
import { WSConfigItemDto } from '../models/WSConfigItemDto';
import { WSConfigPutDto } from '../models/WSConfigPutDto';
import { WSNotificationDto } from '../models/WSNotificationDto';
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [authInputDto]
     */
    public authenticateWithHttpInfo(authInputDto?: AuthInputDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AuthOutputDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authenticateWithHttpInfo(authInputDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [authInputDto]
     */
    public authenticate(authInputDto?: AuthInputDto, _options?: PromiseConfigurationOptions): Promise<AuthOutputDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.authenticate(authInputDto, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAutoJobApi } from './ObservableAPI';

import { AutoJobApiRequestFactory, AutoJobApiResponseProcessor} from "../apis/AutoJobApi";
export class PromiseAutoJobApi {
    private api: ObservableAutoJobApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AutoJobApiRequestFactory,
        responseProcessor?: AutoJobApiResponseProcessor
    ) {
        this.api = new ObservableAutoJobApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [autoJobGetDto]
     */
    public deleteOneAutoJobWithHttpInfo(autoJobGetDto?: AutoJobGetDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneAutoJobWithHttpInfo(autoJobGetDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [autoJobGetDto]
     */
    public deleteOneAutoJob(autoJobGetDto?: AutoJobGetDto, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneAutoJob(autoJobGetDto, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getAllAutoJobsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<AutoJobConfigDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllAutoJobsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getAllAutoJobs(_options?: PromiseConfigurationOptions): Promise<Array<AutoJobConfigDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllAutoJobs(observableOptions);
        return result.toPromise();
    }

    /**
     * @param [autoJobPutDto]
     */
    public updateOneAutoJobWithHttpInfo(autoJobPutDto?: AutoJobPutDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AutoJobConfigDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateOneAutoJobWithHttpInfo(autoJobPutDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [autoJobPutDto]
     */
    public updateOneAutoJob(autoJobPutDto?: AutoJobPutDto, _options?: PromiseConfigurationOptions): Promise<AutoJobConfigDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateOneAutoJob(autoJobPutDto, observableOptions);
        return result.toPromise();
    }


}



import { ObservableConfigApi } from './ObservableAPI';

import { ConfigApiRequestFactory, ConfigApiResponseProcessor} from "../apis/ConfigApi";
export class PromiseConfigApi {
    private api: ObservableConfigApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfigApiRequestFactory,
        responseProcessor?: ConfigApiResponseProcessor
    ) {
        this.api = new ObservableConfigApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public getGlobalConfigWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<DynamicConfigDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getGlobalConfigWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getGlobalConfig(_options?: PromiseConfigurationOptions): Promise<DynamicConfigDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getGlobalConfig(observableOptions);
        return result.toPromise();
    }

    /**
     * @param [globalConfigPutDto]
     */
    public updateGlobalConfigWithHttpInfo(globalConfigPutDto?: GlobalConfigPutDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DynamicConfigDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateGlobalConfigWithHttpInfo(globalConfigPutDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [globalConfigPutDto]
     */
    public updateGlobalConfig(globalConfigPutDto?: GlobalConfigPutDto, _options?: PromiseConfigurationOptions): Promise<DynamicConfigDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateGlobalConfig(globalConfigPutDto, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDataApi } from './ObservableAPI';

import { DataApiRequestFactory, DataApiResponseProcessor} from "../apis/DataApi";
export class PromiseDataApi {
    private api: ObservableDataApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataApiRequestFactory,
        responseProcessor?: DataApiResponseProcessor
    ) {
        this.api = new ObservableDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public apiDatasGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<DataPointDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiDatasGet(_options?: PromiseConfigurationOptions): Promise<Array<DataPointDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasGet(observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiDatasPointUserPointNameDeleteWithHttpInfo(pointUser: string, pointName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasPointUserPointNameDeleteWithHttpInfo(pointUser, pointName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiDatasPointUserPointNameDelete(pointUser: string, pointName: string, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasPointUserPointNameDelete(pointUser, pointName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiDatasPointUserPointNameGetWithHttpInfo(pointUser: string, pointName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DataPointDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasPointUserPointNameGetWithHttpInfo(pointUser, pointName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiDatasPointUserPointNameGet(pointUser: string, pointName: string, _options?: PromiseConfigurationOptions): Promise<DataPointDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasPointUserPointNameGet(pointUser, pointName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [maxBytes]
     */
    public apiDatasPointUserPointNamePutWithHttpInfo(pointUser: string, pointName: string, maxBytes?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DataPointDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasPointUserPointNamePutWithHttpInfo(pointUser, pointName, maxBytes, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [maxBytes]
     */
    public apiDatasPointUserPointNamePut(pointUser: string, pointName: string, maxBytes?: number, _options?: PromiseConfigurationOptions): Promise<DataPointDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasPointUserPointNamePut(pointUser, pointName, maxBytes, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiDatasPointUserPointNameSharesDeleteWithHttpInfo(pointUser: string, pointName: string, user?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasPointUserPointNameSharesDeleteWithHttpInfo(pointUser, pointName, user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiDatasPointUserPointNameSharesDelete(pointUser: string, pointName: string, user?: string, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasPointUserPointNameSharesDelete(pointUser, pointName, user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiDatasPointUserPointNameSharesGetWithHttpInfo(pointUser: string, pointName: string, user?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<DataPointShareDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasPointUserPointNameSharesGetWithHttpInfo(pointUser, pointName, user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiDatasPointUserPointNameSharesGet(pointUser: string, pointName: string, user?: string, _options?: PromiseConfigurationOptions): Promise<Array<DataPointShareDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasPointUserPointNameSharesGet(pointUser, pointName, user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [dataPointShareDto]
     */
    public apiDatasPointUserPointNameSharesPutWithHttpInfo(pointUser: string, pointName: string, dataPointShareDto?: DataPointShareDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DataPointShareDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasPointUserPointNameSharesPutWithHttpInfo(pointUser, pointName, dataPointShareDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [dataPointShareDto]
     */
    public apiDatasPointUserPointNameSharesPut(pointUser: string, pointName: string, dataPointShareDto?: DataPointShareDto, _options?: PromiseConfigurationOptions): Promise<DataPointShareDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasPointUserPointNameSharesPut(pointUser, pointName, dataPointShareDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [name]
     * @param [maxBytes]
     */
    public apiDatasPostWithHttpInfo(name?: string, maxBytes?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DataPointDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasPostWithHttpInfo(name, maxBytes, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [name]
     * @param [maxBytes]
     */
    public apiDatasPost(name?: string, maxBytes?: number, _options?: PromiseConfigurationOptions): Promise<DataPointDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiDatasPost(name, maxBytes, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [dataPointBrowseGetDto]
     */
    public browseFilesForDataWithHttpInfo(dataPointBrowseGetDto?: DataPointBrowseGetDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<FileDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.browseFilesForDataWithHttpInfo(dataPointBrowseGetDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [dataPointBrowseGetDto]
     */
    public browseFilesForData(dataPointBrowseGetDto?: DataPointBrowseGetDto, _options?: PromiseConfigurationOptions): Promise<Array<FileDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.browseFilesForData(dataPointBrowseGetDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public deleteOneFileForDataWithHttpInfo(body?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneFileForDataWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public deleteOneFileForData(body?: string, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneFileForData(body, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public dumpOneFileForDataWithHttpInfo(body?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FileOutputDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.dumpOneFileForDataWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public dumpOneFileForData(body?: string, _options?: PromiseConfigurationOptions): Promise<FileOutputDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.dumpOneFileForData(body, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllJobsForDataWithHttpInfo(pointUser: string, pointName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<RepoDataJobDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllJobsForDataWithHttpInfo(pointUser, pointName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllJobsForData(pointUser: string, pointName: string, _options?: PromiseConfigurationOptions): Promise<Array<RepoDataJobDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllJobsForData(pointUser, pointName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [filePutDto]
     */
    public updateOneFileForDataWithHttpInfo(filePutDto?: FilePutDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateOneFileForDataWithHttpInfo(filePutDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [filePutDto]
     */
    public updateOneFileForData(filePutDto?: FilePutDto, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateOneFileForData(filePutDto, observableOptions);
        return result.toPromise();
    }


}



import { ObservableInfoApi } from './ObservableAPI';

import { InfoApiRequestFactory, InfoApiResponseProcessor} from "../apis/InfoApi";
export class PromiseInfoApi {
    private api: ObservableInfoApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InfoApiRequestFactory,
        responseProcessor?: InfoApiResponseProcessor
    ) {
        this.api = new ObservableInfoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public getSystemSummaryWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<SystemStatusDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSystemSummaryWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getSystemSummary(_options?: PromiseConfigurationOptions): Promise<SystemStatusDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSystemSummary(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getValidNotifyMethodsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getValidNotifyMethodsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getValidNotifyMethods(_options?: PromiseConfigurationOptions): Promise<Array<string>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getValidNotifyMethods(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getValidNotifySubscriptionsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getValidNotifySubscriptionsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getValidNotifySubscriptions(_options?: PromiseConfigurationOptions): Promise<Array<string>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getValidNotifySubscriptions(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getValidPermissionsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<string>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getValidPermissionsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getValidPermissions(_options?: PromiseConfigurationOptions): Promise<Array<string>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getValidPermissions(observableOptions);
        return result.toPromise();
    }


}



import { ObservableJobApi } from './ObservableAPI';

import { JobApiRequestFactory, JobApiResponseProcessor} from "../apis/JobApi";
export class PromiseJobApi {
    private api: ObservableJobApi

    public constructor(
        configuration: Configuration,
        requestFactory?: JobApiRequestFactory,
        responseProcessor?: JobApiResponseProcessor
    ) {
        this.api = new ObservableJobApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id
     */
    public cancelOneJobWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.cancelOneJobWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public cancelOneJob(id: string, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.cancelOneJob(id, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getAllJobsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<RepoDataJobDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllJobsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getAllJobs(_options?: PromiseConfigurationOptions): Promise<Array<RepoDataJobDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllJobs(observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneJobWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RepoDataJobDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getOneJobWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneJob(id: string, _options?: PromiseConfigurationOptions): Promise<RepoDataJobDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getOneJob(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [jobBackupDto]
     */
    public startOneBackupWithHttpInfo(jobBackupDto?: JobBackupDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RepoDataJobDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.startOneBackupWithHttpInfo(jobBackupDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [jobBackupDto]
     */
    public startOneBackup(jobBackupDto?: JobBackupDto, _options?: PromiseConfigurationOptions): Promise<RepoDataJobDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.startOneBackup(jobBackupDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [jobRestoreDto]
     */
    public startOneRestoreWithHttpInfo(jobRestoreDto?: JobRestoreDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RepoDataJobDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.startOneRestoreWithHttpInfo(jobRestoreDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [jobRestoreDto]
     */
    public startOneRestore(jobRestoreDto?: JobRestoreDto, _options?: PromiseConfigurationOptions): Promise<RepoDataJobDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.startOneRestore(jobRestoreDto, observableOptions);
        return result.toPromise();
    }


}



import { ObservableLogApi } from './ObservableAPI';

import { LogApiRequestFactory, LogApiResponseProcessor} from "../apis/LogApi";
export class PromiseLogApi {
    private api: ObservableLogApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LogApiRequestFactory,
        responseProcessor?: LogApiResponseProcessor
    ) {
        this.api = new ObservableLogApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id
     */
    public deleteOneLogWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneLogWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deleteOneLog(id: number, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneLog(id, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getAllLogsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<LogItemDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllLogsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getAllLogs(_options?: PromiseConfigurationOptions): Promise<Array<LogItemDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllLogs(observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneLogWithHttpInfo(id: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LogItemDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getOneLogWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneLog(id: number, _options?: PromiseConfigurationOptions): Promise<LogItemDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getOneLog(id, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMessageApi } from './ObservableAPI';

import { MessageApiRequestFactory, MessageApiResponseProcessor} from "../apis/MessageApi";
export class PromiseMessageApi {
    private api: ObservableMessageApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MessageApiRequestFactory,
        responseProcessor?: MessageApiResponseProcessor
    ) {
        this.api = new ObservableMessageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id
     */
    public deleteOneMessageWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneMessageWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deleteOneMessage(id: string, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneMessage(id, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getAllMessagesWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<MessageItemDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllMessagesWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getAllMessages(_options?: PromiseConfigurationOptions): Promise<Array<MessageItemDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllMessages(observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneMessageWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MessageItemDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getOneMessageWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneMessage(id: string, _options?: PromiseConfigurationOptions): Promise<MessageItemDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getOneMessage(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [messagePostDto]
     */
    public postOneMessageWithHttpInfo(messagePostDto?: MessagePostDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.postOneMessageWithHttpInfo(messagePostDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [messagePostDto]
     */
    public postOneMessage(messagePostDto?: MessagePostDto, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.postOneMessage(messagePostDto, observableOptions);
        return result.toPromise();
    }


}



import { ObservableNotificationApi } from './ObservableAPI';

import { NotificationApiRequestFactory, NotificationApiResponseProcessor} from "../apis/NotificationApi";
export class PromiseNotificationApi {
    private api: ObservableNotificationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NotificationApiRequestFactory,
        responseProcessor?: NotificationApiResponseProcessor
    ) {
        this.api = new ObservableNotificationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id
     */
    public deleteOneNotificationWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneNotificationWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deleteOneNotification(id: string, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneNotification(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public deleteOneNotificationConfigWithHttpInfo(body?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneNotificationConfigWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public deleteOneNotificationConfig(body?: string, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneNotificationConfig(body, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getAllNotificationConfigsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<WSConfigItemDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllNotificationConfigsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getAllNotificationConfigs(_options?: PromiseConfigurationOptions): Promise<Array<WSConfigItemDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllNotificationConfigs(observableOptions);
        return result.toPromise();
    }

    /**
     * @param [unreadOnly]
     */
    public getAllNotificationsWithHttpInfo(unreadOnly?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<WSNotificationDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllNotificationsWithHttpInfo(unreadOnly, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [unreadOnly]
     */
    public getAllNotifications(unreadOnly?: boolean, _options?: PromiseConfigurationOptions): Promise<Array<WSNotificationDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllNotifications(unreadOnly, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneNotificationWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WSNotificationDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getOneNotificationWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneNotification(id: string, _options?: PromiseConfigurationOptions): Promise<WSNotificationDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getOneNotification(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [wSConfigPutDto]
     */
    public updateOneNotificationConfigWithHttpInfo(wSConfigPutDto?: WSConfigPutDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WSConfigItemDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateOneNotificationConfigWithHttpInfo(wSConfigPutDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [wSConfigPutDto]
     */
    public updateOneNotificationConfig(wSConfigPutDto?: WSConfigPutDto, _options?: PromiseConfigurationOptions): Promise<WSConfigItemDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateOneNotificationConfig(wSConfigPutDto, observableOptions);
        return result.toPromise();
    }


}



import { ObservableRepoApi } from './ObservableAPI';

import { RepoApiRequestFactory, RepoApiResponseProcessor} from "../apis/RepoApi";
export class PromiseRepoApi {
    private api: ObservableRepoApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RepoApiRequestFactory,
        responseProcessor?: RepoApiResponseProcessor
    ) {
        this.api = new ObservableRepoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public apiReposGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<RepoPointDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public apiReposGet(_options?: PromiseConfigurationOptions): Promise<Array<RepoPointDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposGet(observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiReposPointUserPointNameDeleteWithHttpInfo(pointUser: string, pointName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposPointUserPointNameDeleteWithHttpInfo(pointUser, pointName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiReposPointUserPointNameDelete(pointUser: string, pointName: string, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposPointUserPointNameDelete(pointUser, pointName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiReposPointUserPointNameGetWithHttpInfo(pointUser: string, pointName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RepoPointDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposPointUserPointNameGetWithHttpInfo(pointUser, pointName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiReposPointUserPointNameGet(pointUser: string, pointName: string, _options?: PromiseConfigurationOptions): Promise<RepoPointDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposPointUserPointNameGet(pointUser, pointName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [maxBytes]
     */
    public apiReposPointUserPointNamePutWithHttpInfo(pointUser: string, pointName: string, maxBytes?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RepoPointDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposPointUserPointNamePutWithHttpInfo(pointUser, pointName, maxBytes, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [maxBytes]
     */
    public apiReposPointUserPointNamePut(pointUser: string, pointName: string, maxBytes?: number, _options?: PromiseConfigurationOptions): Promise<RepoPointDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposPointUserPointNamePut(pointUser, pointName, maxBytes, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiReposPointUserPointNameSharesDeleteWithHttpInfo(pointUser: string, pointName: string, user?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposPointUserPointNameSharesDeleteWithHttpInfo(pointUser, pointName, user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiReposPointUserPointNameSharesDelete(pointUser: string, pointName: string, user?: string, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposPointUserPointNameSharesDelete(pointUser, pointName, user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiReposPointUserPointNameSharesGetWithHttpInfo(pointUser: string, pointName: string, user?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<RepoPointShareDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposPointUserPointNameSharesGetWithHttpInfo(pointUser, pointName, user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiReposPointUserPointNameSharesGet(pointUser: string, pointName: string, user?: string, _options?: PromiseConfigurationOptions): Promise<Array<RepoPointShareDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposPointUserPointNameSharesGet(pointUser, pointName, user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [repoPointShareDto]
     */
    public apiReposPointUserPointNameSharesPutWithHttpInfo(pointUser: string, pointName: string, repoPointShareDto?: RepoPointShareDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RepoPointShareDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposPointUserPointNameSharesPutWithHttpInfo(pointUser, pointName, repoPointShareDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [repoPointShareDto]
     */
    public apiReposPointUserPointNameSharesPut(pointUser: string, pointName: string, repoPointShareDto?: RepoPointShareDto, _options?: PromiseConfigurationOptions): Promise<RepoPointShareDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposPointUserPointNameSharesPut(pointUser, pointName, repoPointShareDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [name]
     * @param [maxBytes]
     */
    public apiReposPostWithHttpInfo(name?: string, maxBytes?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RepoPointDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposPostWithHttpInfo(name, maxBytes, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [name]
     * @param [maxBytes]
     */
    public apiReposPost(name?: string, maxBytes?: number, _options?: PromiseConfigurationOptions): Promise<RepoPointDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.apiReposPost(name, maxBytes, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [dataPointBrowseGetDto]
     */
    public browseFilesForRepoWithHttpInfo(dataPointBrowseGetDto?: DataPointBrowseGetDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<FileDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.browseFilesForRepoWithHttpInfo(dataPointBrowseGetDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [dataPointBrowseGetDto]
     */
    public browseFilesForRepo(dataPointBrowseGetDto?: DataPointBrowseGetDto, _options?: PromiseConfigurationOptions): Promise<Array<FileDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.browseFilesForRepo(dataPointBrowseGetDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param id
     */
    public deleteOneSnapshotForRepoWithHttpInfo(pointUser: string, pointName: string, id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneSnapshotForRepoWithHttpInfo(pointUser, pointName, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param id
     */
    public deleteOneSnapshotForRepo(pointUser: string, pointName: string, id: string, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneSnapshotForRepo(pointUser, pointName, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public dumpFileForRepoWithHttpInfo(body?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FileOutputDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.dumpFileForRepoWithHttpInfo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public dumpFileForRepo(body?: string, _options?: PromiseConfigurationOptions): Promise<FileOutputDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.dumpFileForRepo(body, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllJobsForRepoWithHttpInfo(pointUser: string, pointName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<RepoDataJobDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllJobsForRepoWithHttpInfo(pointUser, pointName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllJobsForRepo(pointUser: string, pointName: string, _options?: PromiseConfigurationOptions): Promise<Array<RepoDataJobDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllJobsForRepo(pointUser, pointName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllSnapshotsForRepoWithHttpInfo(pointUser: string, pointName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<SnapshotDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllSnapshotsForRepoWithHttpInfo(pointUser, pointName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllSnapshotsForRepo(pointUser: string, pointName: string, _options?: PromiseConfigurationOptions): Promise<Array<SnapshotDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllSnapshotsForRepo(pointUser, pointName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param id
     */
    public getOneSnapshotForRepoWithHttpInfo(pointUser: string, pointName: string, id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SnapshotDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getOneSnapshotForRepoWithHttpInfo(pointUser, pointName, id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param id
     */
    public getOneSnapshotForRepo(pointUser: string, pointName: string, id: string, _options?: PromiseConfigurationOptions): Promise<SnapshotDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getOneSnapshotForRepo(pointUser, pointName, id, observableOptions);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [userCreateDto]
     */
    public createOneUserWithHttpInfo(userCreateDto?: UserCreateDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserSummaryDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createOneUserWithHttpInfo(userCreateDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [userCreateDto]
     */
    public createOneUser(userCreateDto?: UserCreateDto, _options?: PromiseConfigurationOptions): Promise<UserSummaryDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createOneUser(userCreateDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     */
    public deleteOneUserWithHttpInfo(userName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneUserWithHttpInfo(userName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     */
    public deleteOneUser(userName: string, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteOneUser(userName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param permissionName
     */
    public disableOnePermissionForUserWithHttpInfo(userName: string, permissionName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.disableOnePermissionForUserWithHttpInfo(userName, permissionName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param permissionName
     */
    public disableOnePermissionForUser(userName: string, permissionName: string, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.disableOnePermissionForUser(userName, permissionName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param permissionName
     */
    public enableOnePermissionForUserWithHttpInfo(userName: string, permissionName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<boolean>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.enableOnePermissionForUserWithHttpInfo(userName, permissionName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param permissionName
     */
    public enableOnePermissionForUser(userName: string, permissionName: string, _options?: PromiseConfigurationOptions): Promise<boolean> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.enableOnePermissionForUser(userName, permissionName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     */
    public getAllPermissionsForUserWithHttpInfo(userName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<UserPermission>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllPermissionsForUserWithHttpInfo(userName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     */
    public getAllPermissionsForUser(userName: string, _options?: PromiseConfigurationOptions): Promise<Array<UserPermission>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllPermissionsForUser(userName, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getAllUsersWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<UserSummaryDto>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllUsersWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public getAllUsers(_options?: PromiseConfigurationOptions): Promise<Array<UserSummaryDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllUsers(observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param permissionName
     */
    public getOnePermissionForUserWithHttpInfo(userName: string, permissionName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserPermission>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getOnePermissionForUserWithHttpInfo(userName, permissionName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param permissionName
     */
    public getOnePermissionForUser(userName: string, permissionName: string, _options?: PromiseConfigurationOptions): Promise<UserPermission> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getOnePermissionForUser(userName, permissionName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     */
    public getOneUserWithHttpInfo(userName: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserSummaryDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getOneUserWithHttpInfo(userName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     */
    public getOneUser(userName: string, _options?: PromiseConfigurationOptions): Promise<UserSummaryDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getOneUser(userName, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param [userPermissionDto]
     */
    public updateAllPermissionsForUserWithHttpInfo(userName: string, userPermissionDto?: Array<UserPermissionDto>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<UserPermission>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateAllPermissionsForUserWithHttpInfo(userName, userPermissionDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param [userPermissionDto]
     */
    public updateAllPermissionsForUser(userName: string, userPermissionDto?: Array<UserPermissionDto>, _options?: PromiseConfigurationOptions): Promise<Array<UserPermission>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateAllPermissionsForUser(userName, userPermissionDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param [userPutDto]
     */
    public updateOneUserWithHttpInfo(userName: string, userPutDto?: UserPutDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserSummaryDto>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateOneUserWithHttpInfo(userName, userPutDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param [userPutDto]
     */
    public updateOneUser(userName: string, userPutDto?: UserPutDto, _options?: PromiseConfigurationOptions): Promise<UserSummaryDto> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateOneUser(userName, userPutDto, observableOptions);
        return result.toPromise();
    }


}



