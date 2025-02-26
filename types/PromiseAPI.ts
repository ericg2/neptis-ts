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
    public authenticateWithHttpInfo(authInputDto?: AuthInputDto, _options?: Configuration): Promise<HttpInfo<AuthOutputDto>> {
        const result = this.api.authenticateWithHttpInfo(authInputDto, _options);
        return result.toPromise();
    }

    /**
     * @param [authInputDto]
     */
    public authenticate(authInputDto?: AuthInputDto, _options?: Configuration): Promise<AuthOutputDto> {
        const result = this.api.authenticate(authInputDto, _options);
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
    public deleteOneAutoJobWithHttpInfo(autoJobGetDto?: AutoJobGetDto, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.deleteOneAutoJobWithHttpInfo(autoJobGetDto, _options);
        return result.toPromise();
    }

    /**
     * @param [autoJobGetDto]
     */
    public deleteOneAutoJob(autoJobGetDto?: AutoJobGetDto, _options?: Configuration): Promise<boolean> {
        const result = this.api.deleteOneAutoJob(autoJobGetDto, _options);
        return result.toPromise();
    }

    /**
     */
    public getAllAutoJobsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<AutoJobConfigDto>>> {
        const result = this.api.getAllAutoJobsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getAllAutoJobs(_options?: Configuration): Promise<Array<AutoJobConfigDto>> {
        const result = this.api.getAllAutoJobs(_options);
        return result.toPromise();
    }

    /**
     * @param [autoJobPutDto]
     */
    public updateOneAutoJobWithHttpInfo(autoJobPutDto?: AutoJobPutDto, _options?: Configuration): Promise<HttpInfo<AutoJobConfigDto>> {
        const result = this.api.updateOneAutoJobWithHttpInfo(autoJobPutDto, _options);
        return result.toPromise();
    }

    /**
     * @param [autoJobPutDto]
     */
    public updateOneAutoJob(autoJobPutDto?: AutoJobPutDto, _options?: Configuration): Promise<AutoJobConfigDto> {
        const result = this.api.updateOneAutoJob(autoJobPutDto, _options);
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
    public getGlobalConfigWithHttpInfo(_options?: Configuration): Promise<HttpInfo<DynamicConfigDto>> {
        const result = this.api.getGlobalConfigWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getGlobalConfig(_options?: Configuration): Promise<DynamicConfigDto> {
        const result = this.api.getGlobalConfig(_options);
        return result.toPromise();
    }

    /**
     * @param [globalConfigPutDto]
     */
    public updateGlobalConfigWithHttpInfo(globalConfigPutDto?: GlobalConfigPutDto, _options?: Configuration): Promise<HttpInfo<DynamicConfigDto>> {
        const result = this.api.updateGlobalConfigWithHttpInfo(globalConfigPutDto, _options);
        return result.toPromise();
    }

    /**
     * @param [globalConfigPutDto]
     */
    public updateGlobalConfig(globalConfigPutDto?: GlobalConfigPutDto, _options?: Configuration): Promise<DynamicConfigDto> {
        const result = this.api.updateGlobalConfig(globalConfigPutDto, _options);
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
    public apiDatasGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<DataPointDto>>> {
        const result = this.api.apiDatasGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiDatasGet(_options?: Configuration): Promise<Array<DataPointDto>> {
        const result = this.api.apiDatasGet(_options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiDatasPointUserPointNameDeleteWithHttpInfo(pointUser: string, pointName: string, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.apiDatasPointUserPointNameDeleteWithHttpInfo(pointUser, pointName, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiDatasPointUserPointNameDelete(pointUser: string, pointName: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.apiDatasPointUserPointNameDelete(pointUser, pointName, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiDatasPointUserPointNameGetWithHttpInfo(pointUser: string, pointName: string, _options?: Configuration): Promise<HttpInfo<DataPointDto>> {
        const result = this.api.apiDatasPointUserPointNameGetWithHttpInfo(pointUser, pointName, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiDatasPointUserPointNameGet(pointUser: string, pointName: string, _options?: Configuration): Promise<DataPointDto> {
        const result = this.api.apiDatasPointUserPointNameGet(pointUser, pointName, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [maxBytes]
     */
    public apiDatasPointUserPointNamePutWithHttpInfo(pointUser: string, pointName: string, maxBytes?: number, _options?: Configuration): Promise<HttpInfo<DataPointDto>> {
        const result = this.api.apiDatasPointUserPointNamePutWithHttpInfo(pointUser, pointName, maxBytes, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [maxBytes]
     */
    public apiDatasPointUserPointNamePut(pointUser: string, pointName: string, maxBytes?: number, _options?: Configuration): Promise<DataPointDto> {
        const result = this.api.apiDatasPointUserPointNamePut(pointUser, pointName, maxBytes, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiDatasPointUserPointNameSharesDeleteWithHttpInfo(pointUser: string, pointName: string, user?: string, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.apiDatasPointUserPointNameSharesDeleteWithHttpInfo(pointUser, pointName, user, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiDatasPointUserPointNameSharesDelete(pointUser: string, pointName: string, user?: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.apiDatasPointUserPointNameSharesDelete(pointUser, pointName, user, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiDatasPointUserPointNameSharesGetWithHttpInfo(pointUser: string, pointName: string, user?: string, _options?: Configuration): Promise<HttpInfo<Array<DataPointShareDto>>> {
        const result = this.api.apiDatasPointUserPointNameSharesGetWithHttpInfo(pointUser, pointName, user, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiDatasPointUserPointNameSharesGet(pointUser: string, pointName: string, user?: string, _options?: Configuration): Promise<Array<DataPointShareDto>> {
        const result = this.api.apiDatasPointUserPointNameSharesGet(pointUser, pointName, user, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [dataPointShareDto]
     */
    public apiDatasPointUserPointNameSharesPutWithHttpInfo(pointUser: string, pointName: string, dataPointShareDto?: DataPointShareDto, _options?: Configuration): Promise<HttpInfo<DataPointShareDto>> {
        const result = this.api.apiDatasPointUserPointNameSharesPutWithHttpInfo(pointUser, pointName, dataPointShareDto, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [dataPointShareDto]
     */
    public apiDatasPointUserPointNameSharesPut(pointUser: string, pointName: string, dataPointShareDto?: DataPointShareDto, _options?: Configuration): Promise<DataPointShareDto> {
        const result = this.api.apiDatasPointUserPointNameSharesPut(pointUser, pointName, dataPointShareDto, _options);
        return result.toPromise();
    }

    /**
     * @param [name]
     * @param [maxBytes]
     */
    public apiDatasPostWithHttpInfo(name?: string, maxBytes?: number, _options?: Configuration): Promise<HttpInfo<DataPointDto>> {
        const result = this.api.apiDatasPostWithHttpInfo(name, maxBytes, _options);
        return result.toPromise();
    }

    /**
     * @param [name]
     * @param [maxBytes]
     */
    public apiDatasPost(name?: string, maxBytes?: number, _options?: Configuration): Promise<DataPointDto> {
        const result = this.api.apiDatasPost(name, maxBytes, _options);
        return result.toPromise();
    }

    /**
     * @param [dataPointBrowseGetDto]
     */
    public browseFilesForDataWithHttpInfo(dataPointBrowseGetDto?: DataPointBrowseGetDto, _options?: Configuration): Promise<HttpInfo<Array<FileDto>>> {
        const result = this.api.browseFilesForDataWithHttpInfo(dataPointBrowseGetDto, _options);
        return result.toPromise();
    }

    /**
     * @param [dataPointBrowseGetDto]
     */
    public browseFilesForData(dataPointBrowseGetDto?: DataPointBrowseGetDto, _options?: Configuration): Promise<Array<FileDto>> {
        const result = this.api.browseFilesForData(dataPointBrowseGetDto, _options);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public deleteOneFileForDataWithHttpInfo(body?: string, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.deleteOneFileForDataWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public deleteOneFileForData(body?: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.deleteOneFileForData(body, _options);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public dumpOneFileForDataWithHttpInfo(body?: string, _options?: Configuration): Promise<HttpInfo<FileOutputDto>> {
        const result = this.api.dumpOneFileForDataWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public dumpOneFileForData(body?: string, _options?: Configuration): Promise<FileOutputDto> {
        const result = this.api.dumpOneFileForData(body, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllJobsForDataWithHttpInfo(pointUser: string, pointName: string, _options?: Configuration): Promise<HttpInfo<Array<RepoDataJobDto>>> {
        const result = this.api.getAllJobsForDataWithHttpInfo(pointUser, pointName, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllJobsForData(pointUser: string, pointName: string, _options?: Configuration): Promise<Array<RepoDataJobDto>> {
        const result = this.api.getAllJobsForData(pointUser, pointName, _options);
        return result.toPromise();
    }

    /**
     * @param [filePutDto]
     */
    public updateOneFileForDataWithHttpInfo(filePutDto?: FilePutDto, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.updateOneFileForDataWithHttpInfo(filePutDto, _options);
        return result.toPromise();
    }

    /**
     * @param [filePutDto]
     */
    public updateOneFileForData(filePutDto?: FilePutDto, _options?: Configuration): Promise<boolean> {
        const result = this.api.updateOneFileForData(filePutDto, _options);
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
    public getSystemSummaryWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SystemStatusDto>> {
        const result = this.api.getSystemSummaryWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getSystemSummary(_options?: Configuration): Promise<SystemStatusDto> {
        const result = this.api.getSystemSummary(_options);
        return result.toPromise();
    }

    /**
     */
    public getValidNotifyMethodsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.getValidNotifyMethodsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getValidNotifyMethods(_options?: Configuration): Promise<Array<string>> {
        const result = this.api.getValidNotifyMethods(_options);
        return result.toPromise();
    }

    /**
     */
    public getValidNotifySubscriptionsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.getValidNotifySubscriptionsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getValidNotifySubscriptions(_options?: Configuration): Promise<Array<string>> {
        const result = this.api.getValidNotifySubscriptions(_options);
        return result.toPromise();
    }

    /**
     */
    public getValidPermissionsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.getValidPermissionsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getValidPermissions(_options?: Configuration): Promise<Array<string>> {
        const result = this.api.getValidPermissions(_options);
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
    public cancelOneJobWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.cancelOneJobWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public cancelOneJob(id: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.cancelOneJob(id, _options);
        return result.toPromise();
    }

    /**
     */
    public getAllJobsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<RepoDataJobDto>>> {
        const result = this.api.getAllJobsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getAllJobs(_options?: Configuration): Promise<Array<RepoDataJobDto>> {
        const result = this.api.getAllJobs(_options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneJobWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<RepoDataJobDto>> {
        const result = this.api.getOneJobWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneJob(id: string, _options?: Configuration): Promise<RepoDataJobDto> {
        const result = this.api.getOneJob(id, _options);
        return result.toPromise();
    }

    /**
     * @param [jobBackupDto]
     */
    public startOneBackupWithHttpInfo(jobBackupDto?: JobBackupDto, _options?: Configuration): Promise<HttpInfo<RepoDataJobDto>> {
        const result = this.api.startOneBackupWithHttpInfo(jobBackupDto, _options);
        return result.toPromise();
    }

    /**
     * @param [jobBackupDto]
     */
    public startOneBackup(jobBackupDto?: JobBackupDto, _options?: Configuration): Promise<RepoDataJobDto> {
        const result = this.api.startOneBackup(jobBackupDto, _options);
        return result.toPromise();
    }

    /**
     * @param [jobRestoreDto]
     */
    public startOneRestoreWithHttpInfo(jobRestoreDto?: JobRestoreDto, _options?: Configuration): Promise<HttpInfo<RepoDataJobDto>> {
        const result = this.api.startOneRestoreWithHttpInfo(jobRestoreDto, _options);
        return result.toPromise();
    }

    /**
     * @param [jobRestoreDto]
     */
    public startOneRestore(jobRestoreDto?: JobRestoreDto, _options?: Configuration): Promise<RepoDataJobDto> {
        const result = this.api.startOneRestore(jobRestoreDto, _options);
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
    public deleteOneLogWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.deleteOneLogWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deleteOneLog(id: number, _options?: Configuration): Promise<boolean> {
        const result = this.api.deleteOneLog(id, _options);
        return result.toPromise();
    }

    /**
     */
    public getAllLogsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<LogItemDto>>> {
        const result = this.api.getAllLogsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getAllLogs(_options?: Configuration): Promise<Array<LogItemDto>> {
        const result = this.api.getAllLogs(_options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneLogWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<LogItemDto>> {
        const result = this.api.getOneLogWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneLog(id: number, _options?: Configuration): Promise<LogItemDto> {
        const result = this.api.getOneLog(id, _options);
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
    public deleteOneMessageWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.deleteOneMessageWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deleteOneMessage(id: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.deleteOneMessage(id, _options);
        return result.toPromise();
    }

    /**
     */
    public getAllMessagesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<MessageItemDto>>> {
        const result = this.api.getAllMessagesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getAllMessages(_options?: Configuration): Promise<Array<MessageItemDto>> {
        const result = this.api.getAllMessages(_options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneMessageWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<MessageItemDto>> {
        const result = this.api.getOneMessageWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneMessage(id: string, _options?: Configuration): Promise<MessageItemDto> {
        const result = this.api.getOneMessage(id, _options);
        return result.toPromise();
    }

    /**
     * @param [messagePostDto]
     */
    public postOneMessageWithHttpInfo(messagePostDto?: MessagePostDto, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.postOneMessageWithHttpInfo(messagePostDto, _options);
        return result.toPromise();
    }

    /**
     * @param [messagePostDto]
     */
    public postOneMessage(messagePostDto?: MessagePostDto, _options?: Configuration): Promise<boolean> {
        const result = this.api.postOneMessage(messagePostDto, _options);
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
    public deleteOneNotificationWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.deleteOneNotificationWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deleteOneNotification(id: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.deleteOneNotification(id, _options);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public deleteOneNotificationConfigWithHttpInfo(body?: string, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.deleteOneNotificationConfigWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public deleteOneNotificationConfig(body?: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.deleteOneNotificationConfig(body, _options);
        return result.toPromise();
    }

    /**
     */
    public getAllNotificationConfigsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<WSConfigItemDto>>> {
        const result = this.api.getAllNotificationConfigsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getAllNotificationConfigs(_options?: Configuration): Promise<Array<WSConfigItemDto>> {
        const result = this.api.getAllNotificationConfigs(_options);
        return result.toPromise();
    }

    /**
     * @param [unreadOnly]
     */
    public getAllNotificationsWithHttpInfo(unreadOnly?: boolean, _options?: Configuration): Promise<HttpInfo<Array<WSNotificationDto>>> {
        const result = this.api.getAllNotificationsWithHttpInfo(unreadOnly, _options);
        return result.toPromise();
    }

    /**
     * @param [unreadOnly]
     */
    public getAllNotifications(unreadOnly?: boolean, _options?: Configuration): Promise<Array<WSNotificationDto>> {
        const result = this.api.getAllNotifications(unreadOnly, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneNotificationWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<WSNotificationDto>> {
        const result = this.api.getOneNotificationWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getOneNotification(id: string, _options?: Configuration): Promise<WSNotificationDto> {
        const result = this.api.getOneNotification(id, _options);
        return result.toPromise();
    }

    /**
     * @param [wSConfigPutDto]
     */
    public updateOneNotificationConfigWithHttpInfo(wSConfigPutDto?: WSConfigPutDto, _options?: Configuration): Promise<HttpInfo<WSConfigItemDto>> {
        const result = this.api.updateOneNotificationConfigWithHttpInfo(wSConfigPutDto, _options);
        return result.toPromise();
    }

    /**
     * @param [wSConfigPutDto]
     */
    public updateOneNotificationConfig(wSConfigPutDto?: WSConfigPutDto, _options?: Configuration): Promise<WSConfigItemDto> {
        const result = this.api.updateOneNotificationConfig(wSConfigPutDto, _options);
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
    public apiReposGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<RepoPointDto>>> {
        const result = this.api.apiReposGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public apiReposGet(_options?: Configuration): Promise<Array<RepoPointDto>> {
        const result = this.api.apiReposGet(_options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiReposPointUserPointNameDeleteWithHttpInfo(pointUser: string, pointName: string, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.apiReposPointUserPointNameDeleteWithHttpInfo(pointUser, pointName, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiReposPointUserPointNameDelete(pointUser: string, pointName: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.apiReposPointUserPointNameDelete(pointUser, pointName, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiReposPointUserPointNameGetWithHttpInfo(pointUser: string, pointName: string, _options?: Configuration): Promise<HttpInfo<RepoPointDto>> {
        const result = this.api.apiReposPointUserPointNameGetWithHttpInfo(pointUser, pointName, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiReposPointUserPointNameGet(pointUser: string, pointName: string, _options?: Configuration): Promise<RepoPointDto> {
        const result = this.api.apiReposPointUserPointNameGet(pointUser, pointName, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [maxBytes]
     */
    public apiReposPointUserPointNamePutWithHttpInfo(pointUser: string, pointName: string, maxBytes?: number, _options?: Configuration): Promise<HttpInfo<RepoPointDto>> {
        const result = this.api.apiReposPointUserPointNamePutWithHttpInfo(pointUser, pointName, maxBytes, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [maxBytes]
     */
    public apiReposPointUserPointNamePut(pointUser: string, pointName: string, maxBytes?: number, _options?: Configuration): Promise<RepoPointDto> {
        const result = this.api.apiReposPointUserPointNamePut(pointUser, pointName, maxBytes, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiReposPointUserPointNameSharesDeleteWithHttpInfo(pointUser: string, pointName: string, user?: string, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.apiReposPointUserPointNameSharesDeleteWithHttpInfo(pointUser, pointName, user, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiReposPointUserPointNameSharesDelete(pointUser: string, pointName: string, user?: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.apiReposPointUserPointNameSharesDelete(pointUser, pointName, user, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiReposPointUserPointNameSharesGetWithHttpInfo(pointUser: string, pointName: string, user?: string, _options?: Configuration): Promise<HttpInfo<Array<RepoPointShareDto>>> {
        const result = this.api.apiReposPointUserPointNameSharesGetWithHttpInfo(pointUser, pointName, user, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiReposPointUserPointNameSharesGet(pointUser: string, pointName: string, user?: string, _options?: Configuration): Promise<Array<RepoPointShareDto>> {
        const result = this.api.apiReposPointUserPointNameSharesGet(pointUser, pointName, user, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [repoPointShareDto]
     */
    public apiReposPointUserPointNameSharesPutWithHttpInfo(pointUser: string, pointName: string, repoPointShareDto?: RepoPointShareDto, _options?: Configuration): Promise<HttpInfo<RepoPointShareDto>> {
        const result = this.api.apiReposPointUserPointNameSharesPutWithHttpInfo(pointUser, pointName, repoPointShareDto, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [repoPointShareDto]
     */
    public apiReposPointUserPointNameSharesPut(pointUser: string, pointName: string, repoPointShareDto?: RepoPointShareDto, _options?: Configuration): Promise<RepoPointShareDto> {
        const result = this.api.apiReposPointUserPointNameSharesPut(pointUser, pointName, repoPointShareDto, _options);
        return result.toPromise();
    }

    /**
     * @param [name]
     * @param [maxBytes]
     */
    public apiReposPostWithHttpInfo(name?: string, maxBytes?: number, _options?: Configuration): Promise<HttpInfo<RepoPointDto>> {
        const result = this.api.apiReposPostWithHttpInfo(name, maxBytes, _options);
        return result.toPromise();
    }

    /**
     * @param [name]
     * @param [maxBytes]
     */
    public apiReposPost(name?: string, maxBytes?: number, _options?: Configuration): Promise<RepoPointDto> {
        const result = this.api.apiReposPost(name, maxBytes, _options);
        return result.toPromise();
    }

    /**
     * @param [dataPointBrowseGetDto]
     */
    public browseFilesForRepoWithHttpInfo(dataPointBrowseGetDto?: DataPointBrowseGetDto, _options?: Configuration): Promise<HttpInfo<Array<FileDto>>> {
        const result = this.api.browseFilesForRepoWithHttpInfo(dataPointBrowseGetDto, _options);
        return result.toPromise();
    }

    /**
     * @param [dataPointBrowseGetDto]
     */
    public browseFilesForRepo(dataPointBrowseGetDto?: DataPointBrowseGetDto, _options?: Configuration): Promise<Array<FileDto>> {
        const result = this.api.browseFilesForRepo(dataPointBrowseGetDto, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param id
     */
    public deleteOneSnapshotForRepoWithHttpInfo(pointUser: string, pointName: string, id: string, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.deleteOneSnapshotForRepoWithHttpInfo(pointUser, pointName, id, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param id
     */
    public deleteOneSnapshotForRepo(pointUser: string, pointName: string, id: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.deleteOneSnapshotForRepo(pointUser, pointName, id, _options);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public dumpFileForRepoWithHttpInfo(body?: string, _options?: Configuration): Promise<HttpInfo<FileOutputDto>> {
        const result = this.api.dumpFileForRepoWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param [body]
     */
    public dumpFileForRepo(body?: string, _options?: Configuration): Promise<FileOutputDto> {
        const result = this.api.dumpFileForRepo(body, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllJobsForRepoWithHttpInfo(pointUser: string, pointName: string, _options?: Configuration): Promise<HttpInfo<Array<RepoDataJobDto>>> {
        const result = this.api.getAllJobsForRepoWithHttpInfo(pointUser, pointName, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllJobsForRepo(pointUser: string, pointName: string, _options?: Configuration): Promise<Array<RepoDataJobDto>> {
        const result = this.api.getAllJobsForRepo(pointUser, pointName, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllSnapshotsForRepoWithHttpInfo(pointUser: string, pointName: string, _options?: Configuration): Promise<HttpInfo<Array<SnapshotDto>>> {
        const result = this.api.getAllSnapshotsForRepoWithHttpInfo(pointUser, pointName, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllSnapshotsForRepo(pointUser: string, pointName: string, _options?: Configuration): Promise<Array<SnapshotDto>> {
        const result = this.api.getAllSnapshotsForRepo(pointUser, pointName, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param id
     */
    public getOneSnapshotForRepoWithHttpInfo(pointUser: string, pointName: string, id: string, _options?: Configuration): Promise<HttpInfo<SnapshotDto>> {
        const result = this.api.getOneSnapshotForRepoWithHttpInfo(pointUser, pointName, id, _options);
        return result.toPromise();
    }

    /**
     * @param pointUser
     * @param pointName
     * @param id
     */
    public getOneSnapshotForRepo(pointUser: string, pointName: string, id: string, _options?: Configuration): Promise<SnapshotDto> {
        const result = this.api.getOneSnapshotForRepo(pointUser, pointName, id, _options);
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
    public createOneUserWithHttpInfo(userCreateDto?: UserCreateDto, _options?: Configuration): Promise<HttpInfo<UserSummaryDto>> {
        const result = this.api.createOneUserWithHttpInfo(userCreateDto, _options);
        return result.toPromise();
    }

    /**
     * @param [userCreateDto]
     */
    public createOneUser(userCreateDto?: UserCreateDto, _options?: Configuration): Promise<UserSummaryDto> {
        const result = this.api.createOneUser(userCreateDto, _options);
        return result.toPromise();
    }

    /**
     * @param [userName]
     */
    public deleteOneUserWithHttpInfo(userName?: string, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.deleteOneUserWithHttpInfo(userName, _options);
        return result.toPromise();
    }

    /**
     * @param [userName]
     */
    public deleteOneUser(userName?: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.deleteOneUser(userName, _options);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param permissionName
     */
    public disableOnePermissionForUserWithHttpInfo(userName: string, permissionName: string, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.disableOnePermissionForUserWithHttpInfo(userName, permissionName, _options);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param permissionName
     */
    public disableOnePermissionForUser(userName: string, permissionName: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.disableOnePermissionForUser(userName, permissionName, _options);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param permissionName
     */
    public enableOnePermissionForUserWithHttpInfo(userName: string, permissionName: string, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.enableOnePermissionForUserWithHttpInfo(userName, permissionName, _options);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param permissionName
     */
    public enableOnePermissionForUser(userName: string, permissionName: string, _options?: Configuration): Promise<boolean> {
        const result = this.api.enableOnePermissionForUser(userName, permissionName, _options);
        return result.toPromise();
    }

    /**
     * @param userName
     */
    public getAllPermissionsForUserWithHttpInfo(userName: string, _options?: Configuration): Promise<HttpInfo<Array<UserPermission>>> {
        const result = this.api.getAllPermissionsForUserWithHttpInfo(userName, _options);
        return result.toPromise();
    }

    /**
     * @param userName
     */
    public getAllPermissionsForUser(userName: string, _options?: Configuration): Promise<Array<UserPermission>> {
        const result = this.api.getAllPermissionsForUser(userName, _options);
        return result.toPromise();
    }

    /**
     */
    public getAllUsersWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<UserSummaryDto>>> {
        const result = this.api.getAllUsersWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getAllUsers(_options?: Configuration): Promise<Array<UserSummaryDto>> {
        const result = this.api.getAllUsers(_options);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param permissionName
     */
    public getOnePermissionForUserWithHttpInfo(userName: string, permissionName: string, _options?: Configuration): Promise<HttpInfo<UserPermission>> {
        const result = this.api.getOnePermissionForUserWithHttpInfo(userName, permissionName, _options);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param permissionName
     */
    public getOnePermissionForUser(userName: string, permissionName: string, _options?: Configuration): Promise<UserPermission> {
        const result = this.api.getOnePermissionForUser(userName, permissionName, _options);
        return result.toPromise();
    }

    /**
     * @param userName
     */
    public getOneUserWithHttpInfo(userName: string, _options?: Configuration): Promise<HttpInfo<UserSummaryDto>> {
        const result = this.api.getOneUserWithHttpInfo(userName, _options);
        return result.toPromise();
    }

    /**
     * @param userName
     */
    public getOneUser(userName: string, _options?: Configuration): Promise<UserSummaryDto> {
        const result = this.api.getOneUser(userName, _options);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param [userPermissionDto]
     */
    public updateAllPermissionsForUserWithHttpInfo(userName: string, userPermissionDto?: Array<UserPermissionDto>, _options?: Configuration): Promise<HttpInfo<Array<UserPermission>>> {
        const result = this.api.updateAllPermissionsForUserWithHttpInfo(userName, userPermissionDto, _options);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param [userPermissionDto]
     */
    public updateAllPermissionsForUser(userName: string, userPermissionDto?: Array<UserPermissionDto>, _options?: Configuration): Promise<Array<UserPermission>> {
        const result = this.api.updateAllPermissionsForUser(userName, userPermissionDto, _options);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param [userPutDto]
     */
    public updateOneUserWithHttpInfo(userName: string, userPutDto?: UserPutDto, _options?: Configuration): Promise<HttpInfo<UserSummaryDto>> {
        const result = this.api.updateOneUserWithHttpInfo(userName, userPutDto, _options);
        return result.toPromise();
    }

    /**
     * @param userName
     * @param [userPutDto]
     */
    public updateOneUser(userName: string, userPutDto?: UserPutDto, _options?: Configuration): Promise<UserSummaryDto> {
        const result = this.api.updateOneUser(userName, userPutDto, _options);
        return result.toPromise();
    }


}



