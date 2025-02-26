import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthenticateRequest {
    /**
     * 
     * @type AuthInputDto
     * @memberof AuthApiauthenticate
     */
    authInputDto?: AuthInputDto
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public authenticateWithHttpInfo(param: AuthApiAuthenticateRequest = {}, options?: Configuration): Promise<HttpInfo<AuthOutputDto>> {
        return this.api.authenticateWithHttpInfo(param.authInputDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authenticate(param: AuthApiAuthenticateRequest = {}, options?: Configuration): Promise<AuthOutputDto> {
        return this.api.authenticate(param.authInputDto,  options).toPromise();
    }

}

import { ObservableAutoJobApi } from "./ObservableAPI";
import { AutoJobApiRequestFactory, AutoJobApiResponseProcessor} from "../apis/AutoJobApi";

export interface AutoJobApiDeleteOneAutoJobRequest {
    /**
     * 
     * @type AutoJobGetDto
     * @memberof AutoJobApideleteOneAutoJob
     */
    autoJobGetDto?: AutoJobGetDto
}

export interface AutoJobApiGetAllAutoJobsRequest {
}

export interface AutoJobApiUpdateOneAutoJobRequest {
    /**
     * 
     * @type AutoJobPutDto
     * @memberof AutoJobApiupdateOneAutoJob
     */
    autoJobPutDto?: AutoJobPutDto
}

export class ObjectAutoJobApi {
    private api: ObservableAutoJobApi

    public constructor(configuration: Configuration, requestFactory?: AutoJobApiRequestFactory, responseProcessor?: AutoJobApiResponseProcessor) {
        this.api = new ObservableAutoJobApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public deleteOneAutoJobWithHttpInfo(param: AutoJobApiDeleteOneAutoJobRequest = {}, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.deleteOneAutoJobWithHttpInfo(param.autoJobGetDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteOneAutoJob(param: AutoJobApiDeleteOneAutoJobRequest = {}, options?: Configuration): Promise<boolean> {
        return this.api.deleteOneAutoJob(param.autoJobGetDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllAutoJobsWithHttpInfo(param: AutoJobApiGetAllAutoJobsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<AutoJobConfigDto>>> {
        return this.api.getAllAutoJobsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllAutoJobs(param: AutoJobApiGetAllAutoJobsRequest = {}, options?: Configuration): Promise<Array<AutoJobConfigDto>> {
        return this.api.getAllAutoJobs( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateOneAutoJobWithHttpInfo(param: AutoJobApiUpdateOneAutoJobRequest = {}, options?: Configuration): Promise<HttpInfo<AutoJobConfigDto>> {
        return this.api.updateOneAutoJobWithHttpInfo(param.autoJobPutDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateOneAutoJob(param: AutoJobApiUpdateOneAutoJobRequest = {}, options?: Configuration): Promise<AutoJobConfigDto> {
        return this.api.updateOneAutoJob(param.autoJobPutDto,  options).toPromise();
    }

}

import { ObservableConfigApi } from "./ObservableAPI";
import { ConfigApiRequestFactory, ConfigApiResponseProcessor} from "../apis/ConfigApi";

export interface ConfigApiGetGlobalConfigRequest {
}

export interface ConfigApiUpdateGlobalConfigRequest {
    /**
     * 
     * @type GlobalConfigPutDto
     * @memberof ConfigApiupdateGlobalConfig
     */
    globalConfigPutDto?: GlobalConfigPutDto
}

export class ObjectConfigApi {
    private api: ObservableConfigApi

    public constructor(configuration: Configuration, requestFactory?: ConfigApiRequestFactory, responseProcessor?: ConfigApiResponseProcessor) {
        this.api = new ObservableConfigApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getGlobalConfigWithHttpInfo(param: ConfigApiGetGlobalConfigRequest = {}, options?: Configuration): Promise<HttpInfo<DynamicConfigDto>> {
        return this.api.getGlobalConfigWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getGlobalConfig(param: ConfigApiGetGlobalConfigRequest = {}, options?: Configuration): Promise<DynamicConfigDto> {
        return this.api.getGlobalConfig( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateGlobalConfigWithHttpInfo(param: ConfigApiUpdateGlobalConfigRequest = {}, options?: Configuration): Promise<HttpInfo<DynamicConfigDto>> {
        return this.api.updateGlobalConfigWithHttpInfo(param.globalConfigPutDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateGlobalConfig(param: ConfigApiUpdateGlobalConfigRequest = {}, options?: Configuration): Promise<DynamicConfigDto> {
        return this.api.updateGlobalConfig(param.globalConfigPutDto,  options).toPromise();
    }

}

import { ObservableDataApi } from "./ObservableAPI";
import { DataApiRequestFactory, DataApiResponseProcessor} from "../apis/DataApi";

export interface DataApiApiDatasGetRequest {
}

export interface DataApiApiDatasPointUserPointNameDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiapiDatasPointUserPointNameDelete
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiapiDatasPointUserPointNameDelete
     */
    pointName: string
}

export interface DataApiApiDatasPointUserPointNameGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiapiDatasPointUserPointNameGet
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiapiDatasPointUserPointNameGet
     */
    pointName: string
}

export interface DataApiApiDatasPointUserPointNamePutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiapiDatasPointUserPointNamePut
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiapiDatasPointUserPointNamePut
     */
    pointName: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DataApiapiDatasPointUserPointNamePut
     */
    maxBytes?: number
}

export interface DataApiApiDatasPointUserPointNameSharesDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiapiDatasPointUserPointNameSharesDelete
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiapiDatasPointUserPointNameSharesDelete
     */
    pointName: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiapiDatasPointUserPointNameSharesDelete
     */
    user?: string
}

export interface DataApiApiDatasPointUserPointNameSharesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiapiDatasPointUserPointNameSharesGet
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiapiDatasPointUserPointNameSharesGet
     */
    pointName: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiapiDatasPointUserPointNameSharesGet
     */
    user?: string
}

export interface DataApiApiDatasPointUserPointNameSharesPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiapiDatasPointUserPointNameSharesPut
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiapiDatasPointUserPointNameSharesPut
     */
    pointName: string
    /**
     * 
     * @type DataPointShareDto
     * @memberof DataApiapiDatasPointUserPointNameSharesPut
     */
    dataPointShareDto?: DataPointShareDto
}

export interface DataApiApiDatasPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApiapiDatasPost
     */
    name?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof DataApiapiDatasPost
     */
    maxBytes?: number
}

export interface DataApiBrowseFilesForDataRequest {
    /**
     * 
     * @type DataPointBrowseGetDto
     * @memberof DataApibrowseFilesForData
     */
    dataPointBrowseGetDto?: DataPointBrowseGetDto
}

export interface DataApiDeleteOneFileForDataRequest {
    /**
     * 
     * @type string
     * @memberof DataApideleteOneFileForData
     */
    body?: string
}

export interface DataApiDumpOneFileForDataRequest {
    /**
     * 
     * @type string
     * @memberof DataApidumpOneFileForData
     */
    body?: string
}

export interface DataApiGetAllJobsForDataRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApigetAllJobsForData
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof DataApigetAllJobsForData
     */
    pointName: string
}

export interface DataApiUpdateOneFileForDataRequest {
    /**
     * 
     * @type FilePutDto
     * @memberof DataApiupdateOneFileForData
     */
    filePutDto?: FilePutDto
}

export class ObjectDataApi {
    private api: ObservableDataApi

    public constructor(configuration: Configuration, requestFactory?: DataApiRequestFactory, responseProcessor?: DataApiResponseProcessor) {
        this.api = new ObservableDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiDatasGetWithHttpInfo(param: DataApiApiDatasGetRequest = {}, options?: Configuration): Promise<HttpInfo<Array<DataPointDto>>> {
        return this.api.apiDatasGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDatasGet(param: DataApiApiDatasGetRequest = {}, options?: Configuration): Promise<Array<DataPointDto>> {
        return this.api.apiDatasGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDatasPointUserPointNameDeleteWithHttpInfo(param: DataApiApiDatasPointUserPointNameDeleteRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.apiDatasPointUserPointNameDeleteWithHttpInfo(param.pointUser, param.pointName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDatasPointUserPointNameDelete(param: DataApiApiDatasPointUserPointNameDeleteRequest, options?: Configuration): Promise<boolean> {
        return this.api.apiDatasPointUserPointNameDelete(param.pointUser, param.pointName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDatasPointUserPointNameGetWithHttpInfo(param: DataApiApiDatasPointUserPointNameGetRequest, options?: Configuration): Promise<HttpInfo<DataPointDto>> {
        return this.api.apiDatasPointUserPointNameGetWithHttpInfo(param.pointUser, param.pointName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDatasPointUserPointNameGet(param: DataApiApiDatasPointUserPointNameGetRequest, options?: Configuration): Promise<DataPointDto> {
        return this.api.apiDatasPointUserPointNameGet(param.pointUser, param.pointName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDatasPointUserPointNamePutWithHttpInfo(param: DataApiApiDatasPointUserPointNamePutRequest, options?: Configuration): Promise<HttpInfo<DataPointDto>> {
        return this.api.apiDatasPointUserPointNamePutWithHttpInfo(param.pointUser, param.pointName, param.maxBytes,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDatasPointUserPointNamePut(param: DataApiApiDatasPointUserPointNamePutRequest, options?: Configuration): Promise<DataPointDto> {
        return this.api.apiDatasPointUserPointNamePut(param.pointUser, param.pointName, param.maxBytes,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDatasPointUserPointNameSharesDeleteWithHttpInfo(param: DataApiApiDatasPointUserPointNameSharesDeleteRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.apiDatasPointUserPointNameSharesDeleteWithHttpInfo(param.pointUser, param.pointName, param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDatasPointUserPointNameSharesDelete(param: DataApiApiDatasPointUserPointNameSharesDeleteRequest, options?: Configuration): Promise<boolean> {
        return this.api.apiDatasPointUserPointNameSharesDelete(param.pointUser, param.pointName, param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDatasPointUserPointNameSharesGetWithHttpInfo(param: DataApiApiDatasPointUserPointNameSharesGetRequest, options?: Configuration): Promise<HttpInfo<Array<DataPointShareDto>>> {
        return this.api.apiDatasPointUserPointNameSharesGetWithHttpInfo(param.pointUser, param.pointName, param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDatasPointUserPointNameSharesGet(param: DataApiApiDatasPointUserPointNameSharesGetRequest, options?: Configuration): Promise<Array<DataPointShareDto>> {
        return this.api.apiDatasPointUserPointNameSharesGet(param.pointUser, param.pointName, param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDatasPointUserPointNameSharesPutWithHttpInfo(param: DataApiApiDatasPointUserPointNameSharesPutRequest, options?: Configuration): Promise<HttpInfo<DataPointShareDto>> {
        return this.api.apiDatasPointUserPointNameSharesPutWithHttpInfo(param.pointUser, param.pointName, param.dataPointShareDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDatasPointUserPointNameSharesPut(param: DataApiApiDatasPointUserPointNameSharesPutRequest, options?: Configuration): Promise<DataPointShareDto> {
        return this.api.apiDatasPointUserPointNameSharesPut(param.pointUser, param.pointName, param.dataPointShareDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDatasPostWithHttpInfo(param: DataApiApiDatasPostRequest = {}, options?: Configuration): Promise<HttpInfo<DataPointDto>> {
        return this.api.apiDatasPostWithHttpInfo(param.name, param.maxBytes,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiDatasPost(param: DataApiApiDatasPostRequest = {}, options?: Configuration): Promise<DataPointDto> {
        return this.api.apiDatasPost(param.name, param.maxBytes,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public browseFilesForDataWithHttpInfo(param: DataApiBrowseFilesForDataRequest = {}, options?: Configuration): Promise<HttpInfo<Array<FileDto>>> {
        return this.api.browseFilesForDataWithHttpInfo(param.dataPointBrowseGetDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public browseFilesForData(param: DataApiBrowseFilesForDataRequest = {}, options?: Configuration): Promise<Array<FileDto>> {
        return this.api.browseFilesForData(param.dataPointBrowseGetDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteOneFileForDataWithHttpInfo(param: DataApiDeleteOneFileForDataRequest = {}, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.deleteOneFileForDataWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteOneFileForData(param: DataApiDeleteOneFileForDataRequest = {}, options?: Configuration): Promise<boolean> {
        return this.api.deleteOneFileForData(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dumpOneFileForDataWithHttpInfo(param: DataApiDumpOneFileForDataRequest = {}, options?: Configuration): Promise<HttpInfo<FileOutputDto>> {
        return this.api.dumpOneFileForDataWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dumpOneFileForData(param: DataApiDumpOneFileForDataRequest = {}, options?: Configuration): Promise<FileOutputDto> {
        return this.api.dumpOneFileForData(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllJobsForDataWithHttpInfo(param: DataApiGetAllJobsForDataRequest, options?: Configuration): Promise<HttpInfo<Array<RepoDataJobDto>>> {
        return this.api.getAllJobsForDataWithHttpInfo(param.pointUser, param.pointName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllJobsForData(param: DataApiGetAllJobsForDataRequest, options?: Configuration): Promise<Array<RepoDataJobDto>> {
        return this.api.getAllJobsForData(param.pointUser, param.pointName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateOneFileForDataWithHttpInfo(param: DataApiUpdateOneFileForDataRequest = {}, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.updateOneFileForDataWithHttpInfo(param.filePutDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateOneFileForData(param: DataApiUpdateOneFileForDataRequest = {}, options?: Configuration): Promise<boolean> {
        return this.api.updateOneFileForData(param.filePutDto,  options).toPromise();
    }

}

import { ObservableInfoApi } from "./ObservableAPI";
import { InfoApiRequestFactory, InfoApiResponseProcessor} from "../apis/InfoApi";

export interface InfoApiGetSystemSummaryRequest {
}

export interface InfoApiGetValidNotifyMethodsRequest {
}

export interface InfoApiGetValidNotifySubscriptionsRequest {
}

export interface InfoApiGetValidPermissionsRequest {
}

export class ObjectInfoApi {
    private api: ObservableInfoApi

    public constructor(configuration: Configuration, requestFactory?: InfoApiRequestFactory, responseProcessor?: InfoApiResponseProcessor) {
        this.api = new ObservableInfoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getSystemSummaryWithHttpInfo(param: InfoApiGetSystemSummaryRequest = {}, options?: Configuration): Promise<HttpInfo<SystemStatusDto>> {
        return this.api.getSystemSummaryWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getSystemSummary(param: InfoApiGetSystemSummaryRequest = {}, options?: Configuration): Promise<SystemStatusDto> {
        return this.api.getSystemSummary( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getValidNotifyMethodsWithHttpInfo(param: InfoApiGetValidNotifyMethodsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.getValidNotifyMethodsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getValidNotifyMethods(param: InfoApiGetValidNotifyMethodsRequest = {}, options?: Configuration): Promise<Array<string>> {
        return this.api.getValidNotifyMethods( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getValidNotifySubscriptionsWithHttpInfo(param: InfoApiGetValidNotifySubscriptionsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.getValidNotifySubscriptionsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getValidNotifySubscriptions(param: InfoApiGetValidNotifySubscriptionsRequest = {}, options?: Configuration): Promise<Array<string>> {
        return this.api.getValidNotifySubscriptions( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getValidPermissionsWithHttpInfo(param: InfoApiGetValidPermissionsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.getValidPermissionsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getValidPermissions(param: InfoApiGetValidPermissionsRequest = {}, options?: Configuration): Promise<Array<string>> {
        return this.api.getValidPermissions( options).toPromise();
    }

}

import { ObservableJobApi } from "./ObservableAPI";
import { JobApiRequestFactory, JobApiResponseProcessor} from "../apis/JobApi";

export interface JobApiCancelOneJobRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof JobApicancelOneJob
     */
    id: string
}

export interface JobApiGetAllJobsRequest {
}

export interface JobApiGetOneJobRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof JobApigetOneJob
     */
    id: string
}

export interface JobApiStartOneBackupRequest {
    /**
     * 
     * @type JobBackupDto
     * @memberof JobApistartOneBackup
     */
    jobBackupDto?: JobBackupDto
}

export interface JobApiStartOneRestoreRequest {
    /**
     * 
     * @type JobRestoreDto
     * @memberof JobApistartOneRestore
     */
    jobRestoreDto?: JobRestoreDto
}

export class ObjectJobApi {
    private api: ObservableJobApi

    public constructor(configuration: Configuration, requestFactory?: JobApiRequestFactory, responseProcessor?: JobApiResponseProcessor) {
        this.api = new ObservableJobApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public cancelOneJobWithHttpInfo(param: JobApiCancelOneJobRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.cancelOneJobWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cancelOneJob(param: JobApiCancelOneJobRequest, options?: Configuration): Promise<boolean> {
        return this.api.cancelOneJob(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllJobsWithHttpInfo(param: JobApiGetAllJobsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<RepoDataJobDto>>> {
        return this.api.getAllJobsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllJobs(param: JobApiGetAllJobsRequest = {}, options?: Configuration): Promise<Array<RepoDataJobDto>> {
        return this.api.getAllJobs( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getOneJobWithHttpInfo(param: JobApiGetOneJobRequest, options?: Configuration): Promise<HttpInfo<RepoDataJobDto>> {
        return this.api.getOneJobWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getOneJob(param: JobApiGetOneJobRequest, options?: Configuration): Promise<RepoDataJobDto> {
        return this.api.getOneJob(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public startOneBackupWithHttpInfo(param: JobApiStartOneBackupRequest = {}, options?: Configuration): Promise<HttpInfo<RepoDataJobDto>> {
        return this.api.startOneBackupWithHttpInfo(param.jobBackupDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public startOneBackup(param: JobApiStartOneBackupRequest = {}, options?: Configuration): Promise<RepoDataJobDto> {
        return this.api.startOneBackup(param.jobBackupDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public startOneRestoreWithHttpInfo(param: JobApiStartOneRestoreRequest = {}, options?: Configuration): Promise<HttpInfo<RepoDataJobDto>> {
        return this.api.startOneRestoreWithHttpInfo(param.jobRestoreDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public startOneRestore(param: JobApiStartOneRestoreRequest = {}, options?: Configuration): Promise<RepoDataJobDto> {
        return this.api.startOneRestore(param.jobRestoreDto,  options).toPromise();
    }

}

import { ObservableLogApi } from "./ObservableAPI";
import { LogApiRequestFactory, LogApiResponseProcessor} from "../apis/LogApi";

export interface LogApiDeleteOneLogRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof LogApideleteOneLog
     */
    id: number
}

export interface LogApiGetAllLogsRequest {
}

export interface LogApiGetOneLogRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof LogApigetOneLog
     */
    id: number
}

export class ObjectLogApi {
    private api: ObservableLogApi

    public constructor(configuration: Configuration, requestFactory?: LogApiRequestFactory, responseProcessor?: LogApiResponseProcessor) {
        this.api = new ObservableLogApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public deleteOneLogWithHttpInfo(param: LogApiDeleteOneLogRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.deleteOneLogWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteOneLog(param: LogApiDeleteOneLogRequest, options?: Configuration): Promise<boolean> {
        return this.api.deleteOneLog(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllLogsWithHttpInfo(param: LogApiGetAllLogsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<LogItemDto>>> {
        return this.api.getAllLogsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllLogs(param: LogApiGetAllLogsRequest = {}, options?: Configuration): Promise<Array<LogItemDto>> {
        return this.api.getAllLogs( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getOneLogWithHttpInfo(param: LogApiGetOneLogRequest, options?: Configuration): Promise<HttpInfo<LogItemDto>> {
        return this.api.getOneLogWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getOneLog(param: LogApiGetOneLogRequest, options?: Configuration): Promise<LogItemDto> {
        return this.api.getOneLog(param.id,  options).toPromise();
    }

}

import { ObservableMessageApi } from "./ObservableAPI";
import { MessageApiRequestFactory, MessageApiResponseProcessor} from "../apis/MessageApi";

export interface MessageApiDeleteOneMessageRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MessageApideleteOneMessage
     */
    id: string
}

export interface MessageApiGetAllMessagesRequest {
}

export interface MessageApiGetOneMessageRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MessageApigetOneMessage
     */
    id: string
}

export interface MessageApiPostOneMessageRequest {
    /**
     * 
     * @type MessagePostDto
     * @memberof MessageApipostOneMessage
     */
    messagePostDto?: MessagePostDto
}

export class ObjectMessageApi {
    private api: ObservableMessageApi

    public constructor(configuration: Configuration, requestFactory?: MessageApiRequestFactory, responseProcessor?: MessageApiResponseProcessor) {
        this.api = new ObservableMessageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public deleteOneMessageWithHttpInfo(param: MessageApiDeleteOneMessageRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.deleteOneMessageWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteOneMessage(param: MessageApiDeleteOneMessageRequest, options?: Configuration): Promise<boolean> {
        return this.api.deleteOneMessage(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllMessagesWithHttpInfo(param: MessageApiGetAllMessagesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<MessageItemDto>>> {
        return this.api.getAllMessagesWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllMessages(param: MessageApiGetAllMessagesRequest = {}, options?: Configuration): Promise<Array<MessageItemDto>> {
        return this.api.getAllMessages( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getOneMessageWithHttpInfo(param: MessageApiGetOneMessageRequest, options?: Configuration): Promise<HttpInfo<MessageItemDto>> {
        return this.api.getOneMessageWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getOneMessage(param: MessageApiGetOneMessageRequest, options?: Configuration): Promise<MessageItemDto> {
        return this.api.getOneMessage(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postOneMessageWithHttpInfo(param: MessageApiPostOneMessageRequest = {}, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.postOneMessageWithHttpInfo(param.messagePostDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postOneMessage(param: MessageApiPostOneMessageRequest = {}, options?: Configuration): Promise<boolean> {
        return this.api.postOneMessage(param.messagePostDto,  options).toPromise();
    }

}

import { ObservableNotificationApi } from "./ObservableAPI";
import { NotificationApiRequestFactory, NotificationApiResponseProcessor} from "../apis/NotificationApi";

export interface NotificationApiDeleteOneNotificationRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NotificationApideleteOneNotification
     */
    id: string
}

export interface NotificationApiDeleteOneNotificationConfigRequest {
    /**
     * 
     * @type string
     * @memberof NotificationApideleteOneNotificationConfig
     */
    body?: string
}

export interface NotificationApiGetAllNotificationConfigsRequest {
}

export interface NotificationApiGetAllNotificationsRequest {
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof NotificationApigetAllNotifications
     */
    unreadOnly?: boolean
}

export interface NotificationApiGetOneNotificationRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NotificationApigetOneNotification
     */
    id: string
}

export interface NotificationApiUpdateOneNotificationConfigRequest {
    /**
     * 
     * @type WSConfigPutDto
     * @memberof NotificationApiupdateOneNotificationConfig
     */
    wSConfigPutDto?: WSConfigPutDto
}

export class ObjectNotificationApi {
    private api: ObservableNotificationApi

    public constructor(configuration: Configuration, requestFactory?: NotificationApiRequestFactory, responseProcessor?: NotificationApiResponseProcessor) {
        this.api = new ObservableNotificationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public deleteOneNotificationWithHttpInfo(param: NotificationApiDeleteOneNotificationRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.deleteOneNotificationWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteOneNotification(param: NotificationApiDeleteOneNotificationRequest, options?: Configuration): Promise<boolean> {
        return this.api.deleteOneNotification(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteOneNotificationConfigWithHttpInfo(param: NotificationApiDeleteOneNotificationConfigRequest = {}, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.deleteOneNotificationConfigWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteOneNotificationConfig(param: NotificationApiDeleteOneNotificationConfigRequest = {}, options?: Configuration): Promise<boolean> {
        return this.api.deleteOneNotificationConfig(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllNotificationConfigsWithHttpInfo(param: NotificationApiGetAllNotificationConfigsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<WSConfigItemDto>>> {
        return this.api.getAllNotificationConfigsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllNotificationConfigs(param: NotificationApiGetAllNotificationConfigsRequest = {}, options?: Configuration): Promise<Array<WSConfigItemDto>> {
        return this.api.getAllNotificationConfigs( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllNotificationsWithHttpInfo(param: NotificationApiGetAllNotificationsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<WSNotificationDto>>> {
        return this.api.getAllNotificationsWithHttpInfo(param.unreadOnly,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllNotifications(param: NotificationApiGetAllNotificationsRequest = {}, options?: Configuration): Promise<Array<WSNotificationDto>> {
        return this.api.getAllNotifications(param.unreadOnly,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getOneNotificationWithHttpInfo(param: NotificationApiGetOneNotificationRequest, options?: Configuration): Promise<HttpInfo<WSNotificationDto>> {
        return this.api.getOneNotificationWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getOneNotification(param: NotificationApiGetOneNotificationRequest, options?: Configuration): Promise<WSNotificationDto> {
        return this.api.getOneNotification(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateOneNotificationConfigWithHttpInfo(param: NotificationApiUpdateOneNotificationConfigRequest = {}, options?: Configuration): Promise<HttpInfo<WSConfigItemDto>> {
        return this.api.updateOneNotificationConfigWithHttpInfo(param.wSConfigPutDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateOneNotificationConfig(param: NotificationApiUpdateOneNotificationConfigRequest = {}, options?: Configuration): Promise<WSConfigItemDto> {
        return this.api.updateOneNotificationConfig(param.wSConfigPutDto,  options).toPromise();
    }

}

import { ObservableRepoApi } from "./ObservableAPI";
import { RepoApiRequestFactory, RepoApiResponseProcessor} from "../apis/RepoApi";

export interface RepoApiApiReposGetRequest {
}

export interface RepoApiApiReposPointUserPointNameDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApiapiReposPointUserPointNameDelete
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApiapiReposPointUserPointNameDelete
     */
    pointName: string
}

export interface RepoApiApiReposPointUserPointNameGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApiapiReposPointUserPointNameGet
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApiapiReposPointUserPointNameGet
     */
    pointName: string
}

export interface RepoApiApiReposPointUserPointNamePutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApiapiReposPointUserPointNamePut
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApiapiReposPointUserPointNamePut
     */
    pointName: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RepoApiapiReposPointUserPointNamePut
     */
    maxBytes?: number
}

export interface RepoApiApiReposPointUserPointNameSharesDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApiapiReposPointUserPointNameSharesDelete
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApiapiReposPointUserPointNameSharesDelete
     */
    pointName: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApiapiReposPointUserPointNameSharesDelete
     */
    user?: string
}

export interface RepoApiApiReposPointUserPointNameSharesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApiapiReposPointUserPointNameSharesGet
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApiapiReposPointUserPointNameSharesGet
     */
    pointName: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApiapiReposPointUserPointNameSharesGet
     */
    user?: string
}

export interface RepoApiApiReposPointUserPointNameSharesPutRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApiapiReposPointUserPointNameSharesPut
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApiapiReposPointUserPointNameSharesPut
     */
    pointName: string
    /**
     * 
     * @type RepoPointShareDto
     * @memberof RepoApiapiReposPointUserPointNameSharesPut
     */
    repoPointShareDto?: RepoPointShareDto
}

export interface RepoApiApiReposPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApiapiReposPost
     */
    name?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RepoApiapiReposPost
     */
    maxBytes?: number
}

export interface RepoApiBrowseFilesForRepoRequest {
    /**
     * 
     * @type DataPointBrowseGetDto
     * @memberof RepoApibrowseFilesForRepo
     */
    dataPointBrowseGetDto?: DataPointBrowseGetDto
}

export interface RepoApiDeleteOneSnapshotForRepoRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApideleteOneSnapshotForRepo
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApideleteOneSnapshotForRepo
     */
    pointName: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApideleteOneSnapshotForRepo
     */
    id: string
}

export interface RepoApiDumpFileForRepoRequest {
    /**
     * 
     * @type string
     * @memberof RepoApidumpFileForRepo
     */
    body?: string
}

export interface RepoApiGetAllJobsForRepoRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApigetAllJobsForRepo
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApigetAllJobsForRepo
     */
    pointName: string
}

export interface RepoApiGetAllSnapshotsForRepoRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApigetAllSnapshotsForRepo
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApigetAllSnapshotsForRepo
     */
    pointName: string
}

export interface RepoApiGetOneSnapshotForRepoRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApigetOneSnapshotForRepo
     */
    pointUser: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApigetOneSnapshotForRepo
     */
    pointName: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof RepoApigetOneSnapshotForRepo
     */
    id: string
}

export class ObjectRepoApi {
    private api: ObservableRepoApi

    public constructor(configuration: Configuration, requestFactory?: RepoApiRequestFactory, responseProcessor?: RepoApiResponseProcessor) {
        this.api = new ObservableRepoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiReposGetWithHttpInfo(param: RepoApiApiReposGetRequest = {}, options?: Configuration): Promise<HttpInfo<Array<RepoPointDto>>> {
        return this.api.apiReposGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiReposGet(param: RepoApiApiReposGetRequest = {}, options?: Configuration): Promise<Array<RepoPointDto>> {
        return this.api.apiReposGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiReposPointUserPointNameDeleteWithHttpInfo(param: RepoApiApiReposPointUserPointNameDeleteRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.apiReposPointUserPointNameDeleteWithHttpInfo(param.pointUser, param.pointName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiReposPointUserPointNameDelete(param: RepoApiApiReposPointUserPointNameDeleteRequest, options?: Configuration): Promise<boolean> {
        return this.api.apiReposPointUserPointNameDelete(param.pointUser, param.pointName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiReposPointUserPointNameGetWithHttpInfo(param: RepoApiApiReposPointUserPointNameGetRequest, options?: Configuration): Promise<HttpInfo<RepoPointDto>> {
        return this.api.apiReposPointUserPointNameGetWithHttpInfo(param.pointUser, param.pointName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiReposPointUserPointNameGet(param: RepoApiApiReposPointUserPointNameGetRequest, options?: Configuration): Promise<RepoPointDto> {
        return this.api.apiReposPointUserPointNameGet(param.pointUser, param.pointName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiReposPointUserPointNamePutWithHttpInfo(param: RepoApiApiReposPointUserPointNamePutRequest, options?: Configuration): Promise<HttpInfo<RepoPointDto>> {
        return this.api.apiReposPointUserPointNamePutWithHttpInfo(param.pointUser, param.pointName, param.maxBytes,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiReposPointUserPointNamePut(param: RepoApiApiReposPointUserPointNamePutRequest, options?: Configuration): Promise<RepoPointDto> {
        return this.api.apiReposPointUserPointNamePut(param.pointUser, param.pointName, param.maxBytes,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiReposPointUserPointNameSharesDeleteWithHttpInfo(param: RepoApiApiReposPointUserPointNameSharesDeleteRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.apiReposPointUserPointNameSharesDeleteWithHttpInfo(param.pointUser, param.pointName, param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiReposPointUserPointNameSharesDelete(param: RepoApiApiReposPointUserPointNameSharesDeleteRequest, options?: Configuration): Promise<boolean> {
        return this.api.apiReposPointUserPointNameSharesDelete(param.pointUser, param.pointName, param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiReposPointUserPointNameSharesGetWithHttpInfo(param: RepoApiApiReposPointUserPointNameSharesGetRequest, options?: Configuration): Promise<HttpInfo<Array<RepoPointShareDto>>> {
        return this.api.apiReposPointUserPointNameSharesGetWithHttpInfo(param.pointUser, param.pointName, param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiReposPointUserPointNameSharesGet(param: RepoApiApiReposPointUserPointNameSharesGetRequest, options?: Configuration): Promise<Array<RepoPointShareDto>> {
        return this.api.apiReposPointUserPointNameSharesGet(param.pointUser, param.pointName, param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiReposPointUserPointNameSharesPutWithHttpInfo(param: RepoApiApiReposPointUserPointNameSharesPutRequest, options?: Configuration): Promise<HttpInfo<RepoPointShareDto>> {
        return this.api.apiReposPointUserPointNameSharesPutWithHttpInfo(param.pointUser, param.pointName, param.repoPointShareDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiReposPointUserPointNameSharesPut(param: RepoApiApiReposPointUserPointNameSharesPutRequest, options?: Configuration): Promise<RepoPointShareDto> {
        return this.api.apiReposPointUserPointNameSharesPut(param.pointUser, param.pointName, param.repoPointShareDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiReposPostWithHttpInfo(param: RepoApiApiReposPostRequest = {}, options?: Configuration): Promise<HttpInfo<RepoPointDto>> {
        return this.api.apiReposPostWithHttpInfo(param.name, param.maxBytes,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiReposPost(param: RepoApiApiReposPostRequest = {}, options?: Configuration): Promise<RepoPointDto> {
        return this.api.apiReposPost(param.name, param.maxBytes,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public browseFilesForRepoWithHttpInfo(param: RepoApiBrowseFilesForRepoRequest = {}, options?: Configuration): Promise<HttpInfo<Array<FileDto>>> {
        return this.api.browseFilesForRepoWithHttpInfo(param.dataPointBrowseGetDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public browseFilesForRepo(param: RepoApiBrowseFilesForRepoRequest = {}, options?: Configuration): Promise<Array<FileDto>> {
        return this.api.browseFilesForRepo(param.dataPointBrowseGetDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteOneSnapshotForRepoWithHttpInfo(param: RepoApiDeleteOneSnapshotForRepoRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.deleteOneSnapshotForRepoWithHttpInfo(param.pointUser, param.pointName, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteOneSnapshotForRepo(param: RepoApiDeleteOneSnapshotForRepoRequest, options?: Configuration): Promise<boolean> {
        return this.api.deleteOneSnapshotForRepo(param.pointUser, param.pointName, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dumpFileForRepoWithHttpInfo(param: RepoApiDumpFileForRepoRequest = {}, options?: Configuration): Promise<HttpInfo<FileOutputDto>> {
        return this.api.dumpFileForRepoWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dumpFileForRepo(param: RepoApiDumpFileForRepoRequest = {}, options?: Configuration): Promise<FileOutputDto> {
        return this.api.dumpFileForRepo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllJobsForRepoWithHttpInfo(param: RepoApiGetAllJobsForRepoRequest, options?: Configuration): Promise<HttpInfo<Array<RepoDataJobDto>>> {
        return this.api.getAllJobsForRepoWithHttpInfo(param.pointUser, param.pointName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllJobsForRepo(param: RepoApiGetAllJobsForRepoRequest, options?: Configuration): Promise<Array<RepoDataJobDto>> {
        return this.api.getAllJobsForRepo(param.pointUser, param.pointName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllSnapshotsForRepoWithHttpInfo(param: RepoApiGetAllSnapshotsForRepoRequest, options?: Configuration): Promise<HttpInfo<Array<SnapshotDto>>> {
        return this.api.getAllSnapshotsForRepoWithHttpInfo(param.pointUser, param.pointName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllSnapshotsForRepo(param: RepoApiGetAllSnapshotsForRepoRequest, options?: Configuration): Promise<Array<SnapshotDto>> {
        return this.api.getAllSnapshotsForRepo(param.pointUser, param.pointName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getOneSnapshotForRepoWithHttpInfo(param: RepoApiGetOneSnapshotForRepoRequest, options?: Configuration): Promise<HttpInfo<SnapshotDto>> {
        return this.api.getOneSnapshotForRepoWithHttpInfo(param.pointUser, param.pointName, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getOneSnapshotForRepo(param: RepoApiGetOneSnapshotForRepoRequest, options?: Configuration): Promise<SnapshotDto> {
        return this.api.getOneSnapshotForRepo(param.pointUser, param.pointName, param.id,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiCreateOneUserRequest {
    /**
     * 
     * @type UserCreateDto
     * @memberof UserApicreateOneUser
     */
    userCreateDto?: UserCreateDto
}

export interface UserApiDeleteOneUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApideleteOneUser
     */
    userName?: string
}

export interface UserApiDisableOnePermissionForUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApidisableOnePermissionForUser
     */
    userName: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApidisableOnePermissionForUser
     */
    permissionName: string
}

export interface UserApiEnableOnePermissionForUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApienableOnePermissionForUser
     */
    userName: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApienableOnePermissionForUser
     */
    permissionName: string
}

export interface UserApiGetAllPermissionsForUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApigetAllPermissionsForUser
     */
    userName: string
}

export interface UserApiGetAllUsersRequest {
}

export interface UserApiGetOnePermissionForUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApigetOnePermissionForUser
     */
    userName: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApigetOnePermissionForUser
     */
    permissionName: string
}

export interface UserApiGetOneUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApigetOneUser
     */
    userName: string
}

export interface UserApiUpdateAllPermissionsForUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApiupdateAllPermissionsForUser
     */
    userName: string
    /**
     * 
     * @type Array&lt;UserPermissionDto&gt;
     * @memberof UserApiupdateAllPermissionsForUser
     */
    userPermissionDto?: Array<UserPermissionDto>
}

export interface UserApiUpdateOneUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserApiupdateOneUser
     */
    userName: string
    /**
     * 
     * @type UserPutDto
     * @memberof UserApiupdateOneUser
     */
    userPutDto?: UserPutDto
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createOneUserWithHttpInfo(param: UserApiCreateOneUserRequest = {}, options?: Configuration): Promise<HttpInfo<UserSummaryDto>> {
        return this.api.createOneUserWithHttpInfo(param.userCreateDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createOneUser(param: UserApiCreateOneUserRequest = {}, options?: Configuration): Promise<UserSummaryDto> {
        return this.api.createOneUser(param.userCreateDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteOneUserWithHttpInfo(param: UserApiDeleteOneUserRequest = {}, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.deleteOneUserWithHttpInfo(param.userName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteOneUser(param: UserApiDeleteOneUserRequest = {}, options?: Configuration): Promise<boolean> {
        return this.api.deleteOneUser(param.userName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public disableOnePermissionForUserWithHttpInfo(param: UserApiDisableOnePermissionForUserRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.disableOnePermissionForUserWithHttpInfo(param.userName, param.permissionName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public disableOnePermissionForUser(param: UserApiDisableOnePermissionForUserRequest, options?: Configuration): Promise<boolean> {
        return this.api.disableOnePermissionForUser(param.userName, param.permissionName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public enableOnePermissionForUserWithHttpInfo(param: UserApiEnableOnePermissionForUserRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.enableOnePermissionForUserWithHttpInfo(param.userName, param.permissionName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public enableOnePermissionForUser(param: UserApiEnableOnePermissionForUserRequest, options?: Configuration): Promise<boolean> {
        return this.api.enableOnePermissionForUser(param.userName, param.permissionName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllPermissionsForUserWithHttpInfo(param: UserApiGetAllPermissionsForUserRequest, options?: Configuration): Promise<HttpInfo<Array<UserPermission>>> {
        return this.api.getAllPermissionsForUserWithHttpInfo(param.userName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllPermissionsForUser(param: UserApiGetAllPermissionsForUserRequest, options?: Configuration): Promise<Array<UserPermission>> {
        return this.api.getAllPermissionsForUser(param.userName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllUsersWithHttpInfo(param: UserApiGetAllUsersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<UserSummaryDto>>> {
        return this.api.getAllUsersWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllUsers(param: UserApiGetAllUsersRequest = {}, options?: Configuration): Promise<Array<UserSummaryDto>> {
        return this.api.getAllUsers( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getOnePermissionForUserWithHttpInfo(param: UserApiGetOnePermissionForUserRequest, options?: Configuration): Promise<HttpInfo<UserPermission>> {
        return this.api.getOnePermissionForUserWithHttpInfo(param.userName, param.permissionName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getOnePermissionForUser(param: UserApiGetOnePermissionForUserRequest, options?: Configuration): Promise<UserPermission> {
        return this.api.getOnePermissionForUser(param.userName, param.permissionName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getOneUserWithHttpInfo(param: UserApiGetOneUserRequest, options?: Configuration): Promise<HttpInfo<UserSummaryDto>> {
        return this.api.getOneUserWithHttpInfo(param.userName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getOneUser(param: UserApiGetOneUserRequest, options?: Configuration): Promise<UserSummaryDto> {
        return this.api.getOneUser(param.userName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateAllPermissionsForUserWithHttpInfo(param: UserApiUpdateAllPermissionsForUserRequest, options?: Configuration): Promise<HttpInfo<Array<UserPermission>>> {
        return this.api.updateAllPermissionsForUserWithHttpInfo(param.userName, param.userPermissionDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateAllPermissionsForUser(param: UserApiUpdateAllPermissionsForUserRequest, options?: Configuration): Promise<Array<UserPermission>> {
        return this.api.updateAllPermissionsForUser(param.userName, param.userPermissionDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateOneUserWithHttpInfo(param: UserApiUpdateOneUserRequest, options?: Configuration): Promise<HttpInfo<UserSummaryDto>> {
        return this.api.updateOneUserWithHttpInfo(param.userName, param.userPutDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateOneUser(param: UserApiUpdateOneUserRequest, options?: Configuration): Promise<UserSummaryDto> {
        return this.api.updateOneUser(param.userName, param.userPutDto,  options).toPromise();
    }

}
