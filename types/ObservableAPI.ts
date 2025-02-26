import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
    }

    /**
     * @param [authInputDto]
     */
    public authenticateWithHttpInfo(authInputDto?: AuthInputDto, _options?: Configuration): Observable<HttpInfo<AuthOutputDto>> {
        const requestContextPromise = this.requestFactory.authenticate(authInputDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authenticateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [authInputDto]
     */
    public authenticate(authInputDto?: AuthInputDto, _options?: Configuration): Observable<AuthOutputDto> {
        return this.authenticateWithHttpInfo(authInputDto, _options).pipe(map((apiResponse: HttpInfo<AuthOutputDto>) => apiResponse.data));
    }

}

import { AutoJobApiRequestFactory, AutoJobApiResponseProcessor} from "../apis/AutoJobApi";
export class ObservableAutoJobApi {
    private requestFactory: AutoJobApiRequestFactory;
    private responseProcessor: AutoJobApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AutoJobApiRequestFactory,
        responseProcessor?: AutoJobApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AutoJobApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AutoJobApiResponseProcessor();
    }

    /**
     * @param [autoJobGetDto]
     */
    public deleteOneAutoJobWithHttpInfo(autoJobGetDto?: AutoJobGetDto, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.deleteOneAutoJob(autoJobGetDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOneAutoJobWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [autoJobGetDto]
     */
    public deleteOneAutoJob(autoJobGetDto?: AutoJobGetDto, _options?: Configuration): Observable<boolean> {
        return this.deleteOneAutoJobWithHttpInfo(autoJobGetDto, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     */
    public getAllAutoJobsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<AutoJobConfigDto>>> {
        const requestContextPromise = this.requestFactory.getAllAutoJobs(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllAutoJobsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getAllAutoJobs(_options?: Configuration): Observable<Array<AutoJobConfigDto>> {
        return this.getAllAutoJobsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<AutoJobConfigDto>>) => apiResponse.data));
    }

    /**
     * @param [autoJobPutDto]
     */
    public updateOneAutoJobWithHttpInfo(autoJobPutDto?: AutoJobPutDto, _options?: Configuration): Observable<HttpInfo<AutoJobConfigDto>> {
        const requestContextPromise = this.requestFactory.updateOneAutoJob(autoJobPutDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOneAutoJobWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [autoJobPutDto]
     */
    public updateOneAutoJob(autoJobPutDto?: AutoJobPutDto, _options?: Configuration): Observable<AutoJobConfigDto> {
        return this.updateOneAutoJobWithHttpInfo(autoJobPutDto, _options).pipe(map((apiResponse: HttpInfo<AutoJobConfigDto>) => apiResponse.data));
    }

}

import { ConfigApiRequestFactory, ConfigApiResponseProcessor} from "../apis/ConfigApi";
export class ObservableConfigApi {
    private requestFactory: ConfigApiRequestFactory;
    private responseProcessor: ConfigApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfigApiRequestFactory,
        responseProcessor?: ConfigApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConfigApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConfigApiResponseProcessor();
    }

    /**
     */
    public getGlobalConfigWithHttpInfo(_options?: Configuration): Observable<HttpInfo<DynamicConfigDto>> {
        const requestContextPromise = this.requestFactory.getGlobalConfig(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGlobalConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getGlobalConfig(_options?: Configuration): Observable<DynamicConfigDto> {
        return this.getGlobalConfigWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<DynamicConfigDto>) => apiResponse.data));
    }

    /**
     * @param [globalConfigPutDto]
     */
    public updateGlobalConfigWithHttpInfo(globalConfigPutDto?: GlobalConfigPutDto, _options?: Configuration): Observable<HttpInfo<DynamicConfigDto>> {
        const requestContextPromise = this.requestFactory.updateGlobalConfig(globalConfigPutDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateGlobalConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [globalConfigPutDto]
     */
    public updateGlobalConfig(globalConfigPutDto?: GlobalConfigPutDto, _options?: Configuration): Observable<DynamicConfigDto> {
        return this.updateGlobalConfigWithHttpInfo(globalConfigPutDto, _options).pipe(map((apiResponse: HttpInfo<DynamicConfigDto>) => apiResponse.data));
    }

}

import { DataApiRequestFactory, DataApiResponseProcessor} from "../apis/DataApi";
export class ObservableDataApi {
    private requestFactory: DataApiRequestFactory;
    private responseProcessor: DataApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DataApiRequestFactory,
        responseProcessor?: DataApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DataApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DataApiResponseProcessor();
    }

    /**
     */
    public apiDatasGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<DataPointDto>>> {
        const requestContextPromise = this.requestFactory.apiDatasGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiDatasGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiDatasGet(_options?: Configuration): Observable<Array<DataPointDto>> {
        return this.apiDatasGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<DataPointDto>>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiDatasPointUserPointNameDeleteWithHttpInfo(pointUser: string, pointName: string, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.apiDatasPointUserPointNameDelete(pointUser, pointName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiDatasPointUserPointNameDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiDatasPointUserPointNameDelete(pointUser: string, pointName: string, _options?: Configuration): Observable<boolean> {
        return this.apiDatasPointUserPointNameDeleteWithHttpInfo(pointUser, pointName, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiDatasPointUserPointNameGetWithHttpInfo(pointUser: string, pointName: string, _options?: Configuration): Observable<HttpInfo<DataPointDto>> {
        const requestContextPromise = this.requestFactory.apiDatasPointUserPointNameGet(pointUser, pointName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiDatasPointUserPointNameGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiDatasPointUserPointNameGet(pointUser: string, pointName: string, _options?: Configuration): Observable<DataPointDto> {
        return this.apiDatasPointUserPointNameGetWithHttpInfo(pointUser, pointName, _options).pipe(map((apiResponse: HttpInfo<DataPointDto>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [maxBytes]
     */
    public apiDatasPointUserPointNamePutWithHttpInfo(pointUser: string, pointName: string, maxBytes?: number, _options?: Configuration): Observable<HttpInfo<DataPointDto>> {
        const requestContextPromise = this.requestFactory.apiDatasPointUserPointNamePut(pointUser, pointName, maxBytes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiDatasPointUserPointNamePutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [maxBytes]
     */
    public apiDatasPointUserPointNamePut(pointUser: string, pointName: string, maxBytes?: number, _options?: Configuration): Observable<DataPointDto> {
        return this.apiDatasPointUserPointNamePutWithHttpInfo(pointUser, pointName, maxBytes, _options).pipe(map((apiResponse: HttpInfo<DataPointDto>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiDatasPointUserPointNameSharesDeleteWithHttpInfo(pointUser: string, pointName: string, user?: string, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.apiDatasPointUserPointNameSharesDelete(pointUser, pointName, user, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiDatasPointUserPointNameSharesDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiDatasPointUserPointNameSharesDelete(pointUser: string, pointName: string, user?: string, _options?: Configuration): Observable<boolean> {
        return this.apiDatasPointUserPointNameSharesDeleteWithHttpInfo(pointUser, pointName, user, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiDatasPointUserPointNameSharesGetWithHttpInfo(pointUser: string, pointName: string, user?: string, _options?: Configuration): Observable<HttpInfo<Array<DataPointShareDto>>> {
        const requestContextPromise = this.requestFactory.apiDatasPointUserPointNameSharesGet(pointUser, pointName, user, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiDatasPointUserPointNameSharesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiDatasPointUserPointNameSharesGet(pointUser: string, pointName: string, user?: string, _options?: Configuration): Observable<Array<DataPointShareDto>> {
        return this.apiDatasPointUserPointNameSharesGetWithHttpInfo(pointUser, pointName, user, _options).pipe(map((apiResponse: HttpInfo<Array<DataPointShareDto>>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [dataPointShareDto]
     */
    public apiDatasPointUserPointNameSharesPutWithHttpInfo(pointUser: string, pointName: string, dataPointShareDto?: DataPointShareDto, _options?: Configuration): Observable<HttpInfo<DataPointShareDto>> {
        const requestContextPromise = this.requestFactory.apiDatasPointUserPointNameSharesPut(pointUser, pointName, dataPointShareDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiDatasPointUserPointNameSharesPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [dataPointShareDto]
     */
    public apiDatasPointUserPointNameSharesPut(pointUser: string, pointName: string, dataPointShareDto?: DataPointShareDto, _options?: Configuration): Observable<DataPointShareDto> {
        return this.apiDatasPointUserPointNameSharesPutWithHttpInfo(pointUser, pointName, dataPointShareDto, _options).pipe(map((apiResponse: HttpInfo<DataPointShareDto>) => apiResponse.data));
    }

    /**
     * @param [name]
     * @param [maxBytes]
     */
    public apiDatasPostWithHttpInfo(name?: string, maxBytes?: number, _options?: Configuration): Observable<HttpInfo<DataPointDto>> {
        const requestContextPromise = this.requestFactory.apiDatasPost(name, maxBytes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiDatasPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [name]
     * @param [maxBytes]
     */
    public apiDatasPost(name?: string, maxBytes?: number, _options?: Configuration): Observable<DataPointDto> {
        return this.apiDatasPostWithHttpInfo(name, maxBytes, _options).pipe(map((apiResponse: HttpInfo<DataPointDto>) => apiResponse.data));
    }

    /**
     * @param [dataPointBrowseGetDto]
     */
    public browseFilesForDataWithHttpInfo(dataPointBrowseGetDto?: DataPointBrowseGetDto, _options?: Configuration): Observable<HttpInfo<Array<FileDto>>> {
        const requestContextPromise = this.requestFactory.browseFilesForData(dataPointBrowseGetDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.browseFilesForDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [dataPointBrowseGetDto]
     */
    public browseFilesForData(dataPointBrowseGetDto?: DataPointBrowseGetDto, _options?: Configuration): Observable<Array<FileDto>> {
        return this.browseFilesForDataWithHttpInfo(dataPointBrowseGetDto, _options).pipe(map((apiResponse: HttpInfo<Array<FileDto>>) => apiResponse.data));
    }

    /**
     * @param [body]
     */
    public deleteOneFileForDataWithHttpInfo(body?: string, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.deleteOneFileForData(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOneFileForDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [body]
     */
    public deleteOneFileForData(body?: string, _options?: Configuration): Observable<boolean> {
        return this.deleteOneFileForDataWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * @param [body]
     */
    public dumpOneFileForDataWithHttpInfo(body?: string, _options?: Configuration): Observable<HttpInfo<FileOutputDto>> {
        const requestContextPromise = this.requestFactory.dumpOneFileForData(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dumpOneFileForDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [body]
     */
    public dumpOneFileForData(body?: string, _options?: Configuration): Observable<FileOutputDto> {
        return this.dumpOneFileForDataWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<FileOutputDto>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllJobsForDataWithHttpInfo(pointUser: string, pointName: string, _options?: Configuration): Observable<HttpInfo<Array<RepoDataJobDto>>> {
        const requestContextPromise = this.requestFactory.getAllJobsForData(pointUser, pointName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllJobsForDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllJobsForData(pointUser: string, pointName: string, _options?: Configuration): Observable<Array<RepoDataJobDto>> {
        return this.getAllJobsForDataWithHttpInfo(pointUser, pointName, _options).pipe(map((apiResponse: HttpInfo<Array<RepoDataJobDto>>) => apiResponse.data));
    }

    /**
     * @param [filePutDto]
     */
    public updateOneFileForDataWithHttpInfo(filePutDto?: FilePutDto, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.updateOneFileForData(filePutDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOneFileForDataWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [filePutDto]
     */
    public updateOneFileForData(filePutDto?: FilePutDto, _options?: Configuration): Observable<boolean> {
        return this.updateOneFileForDataWithHttpInfo(filePutDto, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

}

import { InfoApiRequestFactory, InfoApiResponseProcessor} from "../apis/InfoApi";
export class ObservableInfoApi {
    private requestFactory: InfoApiRequestFactory;
    private responseProcessor: InfoApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InfoApiRequestFactory,
        responseProcessor?: InfoApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InfoApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InfoApiResponseProcessor();
    }

    /**
     */
    public getSystemSummaryWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SystemStatusDto>> {
        const requestContextPromise = this.requestFactory.getSystemSummary(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystemSummaryWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getSystemSummary(_options?: Configuration): Observable<SystemStatusDto> {
        return this.getSystemSummaryWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SystemStatusDto>) => apiResponse.data));
    }

    /**
     */
    public getValidNotifyMethodsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.getValidNotifyMethods(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidNotifyMethodsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getValidNotifyMethods(_options?: Configuration): Observable<Array<string>> {
        return this.getValidNotifyMethodsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     */
    public getValidNotifySubscriptionsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.getValidNotifySubscriptions(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidNotifySubscriptionsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getValidNotifySubscriptions(_options?: Configuration): Observable<Array<string>> {
        return this.getValidNotifySubscriptionsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     */
    public getValidPermissionsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.getValidPermissions(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidPermissionsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getValidPermissions(_options?: Configuration): Observable<Array<string>> {
        return this.getValidPermissionsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

}

import { JobApiRequestFactory, JobApiResponseProcessor} from "../apis/JobApi";
export class ObservableJobApi {
    private requestFactory: JobApiRequestFactory;
    private responseProcessor: JobApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: JobApiRequestFactory,
        responseProcessor?: JobApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new JobApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new JobApiResponseProcessor();
    }

    /**
     * @param id
     */
    public cancelOneJobWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.cancelOneJob(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelOneJobWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public cancelOneJob(id: string, _options?: Configuration): Observable<boolean> {
        return this.cancelOneJobWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     */
    public getAllJobsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<RepoDataJobDto>>> {
        const requestContextPromise = this.requestFactory.getAllJobs(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllJobsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getAllJobs(_options?: Configuration): Observable<Array<RepoDataJobDto>> {
        return this.getAllJobsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<RepoDataJobDto>>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public getOneJobWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<RepoDataJobDto>> {
        const requestContextPromise = this.requestFactory.getOneJob(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOneJobWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public getOneJob(id: string, _options?: Configuration): Observable<RepoDataJobDto> {
        return this.getOneJobWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<RepoDataJobDto>) => apiResponse.data));
    }

    /**
     * @param [jobBackupDto]
     */
    public startOneBackupWithHttpInfo(jobBackupDto?: JobBackupDto, _options?: Configuration): Observable<HttpInfo<RepoDataJobDto>> {
        const requestContextPromise = this.requestFactory.startOneBackup(jobBackupDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startOneBackupWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [jobBackupDto]
     */
    public startOneBackup(jobBackupDto?: JobBackupDto, _options?: Configuration): Observable<RepoDataJobDto> {
        return this.startOneBackupWithHttpInfo(jobBackupDto, _options).pipe(map((apiResponse: HttpInfo<RepoDataJobDto>) => apiResponse.data));
    }

    /**
     * @param [jobRestoreDto]
     */
    public startOneRestoreWithHttpInfo(jobRestoreDto?: JobRestoreDto, _options?: Configuration): Observable<HttpInfo<RepoDataJobDto>> {
        const requestContextPromise = this.requestFactory.startOneRestore(jobRestoreDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startOneRestoreWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [jobRestoreDto]
     */
    public startOneRestore(jobRestoreDto?: JobRestoreDto, _options?: Configuration): Observable<RepoDataJobDto> {
        return this.startOneRestoreWithHttpInfo(jobRestoreDto, _options).pipe(map((apiResponse: HttpInfo<RepoDataJobDto>) => apiResponse.data));
    }

}

import { LogApiRequestFactory, LogApiResponseProcessor} from "../apis/LogApi";
export class ObservableLogApi {
    private requestFactory: LogApiRequestFactory;
    private responseProcessor: LogApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LogApiRequestFactory,
        responseProcessor?: LogApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LogApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LogApiResponseProcessor();
    }

    /**
     * @param id
     */
    public deleteOneLogWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.deleteOneLog(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOneLogWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public deleteOneLog(id: number, _options?: Configuration): Observable<boolean> {
        return this.deleteOneLogWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     */
    public getAllLogsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<LogItemDto>>> {
        const requestContextPromise = this.requestFactory.getAllLogs(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllLogsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getAllLogs(_options?: Configuration): Observable<Array<LogItemDto>> {
        return this.getAllLogsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<LogItemDto>>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public getOneLogWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<LogItemDto>> {
        const requestContextPromise = this.requestFactory.getOneLog(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOneLogWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public getOneLog(id: number, _options?: Configuration): Observable<LogItemDto> {
        return this.getOneLogWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<LogItemDto>) => apiResponse.data));
    }

}

import { MessageApiRequestFactory, MessageApiResponseProcessor} from "../apis/MessageApi";
export class ObservableMessageApi {
    private requestFactory: MessageApiRequestFactory;
    private responseProcessor: MessageApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MessageApiRequestFactory,
        responseProcessor?: MessageApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MessageApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MessageApiResponseProcessor();
    }

    /**
     * @param id
     */
    public deleteOneMessageWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.deleteOneMessage(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOneMessageWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public deleteOneMessage(id: string, _options?: Configuration): Observable<boolean> {
        return this.deleteOneMessageWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     */
    public getAllMessagesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<MessageItemDto>>> {
        const requestContextPromise = this.requestFactory.getAllMessages(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllMessagesWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getAllMessages(_options?: Configuration): Observable<Array<MessageItemDto>> {
        return this.getAllMessagesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<MessageItemDto>>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public getOneMessageWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<MessageItemDto>> {
        const requestContextPromise = this.requestFactory.getOneMessage(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOneMessageWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public getOneMessage(id: string, _options?: Configuration): Observable<MessageItemDto> {
        return this.getOneMessageWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<MessageItemDto>) => apiResponse.data));
    }

    /**
     * @param [messagePostDto]
     */
    public postOneMessageWithHttpInfo(messagePostDto?: MessagePostDto, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.postOneMessage(messagePostDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postOneMessageWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [messagePostDto]
     */
    public postOneMessage(messagePostDto?: MessagePostDto, _options?: Configuration): Observable<boolean> {
        return this.postOneMessageWithHttpInfo(messagePostDto, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

}

import { NotificationApiRequestFactory, NotificationApiResponseProcessor} from "../apis/NotificationApi";
export class ObservableNotificationApi {
    private requestFactory: NotificationApiRequestFactory;
    private responseProcessor: NotificationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NotificationApiRequestFactory,
        responseProcessor?: NotificationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NotificationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NotificationApiResponseProcessor();
    }

    /**
     * @param id
     */
    public deleteOneNotificationWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.deleteOneNotification(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOneNotificationWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public deleteOneNotification(id: string, _options?: Configuration): Observable<boolean> {
        return this.deleteOneNotificationWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * @param [body]
     */
    public deleteOneNotificationConfigWithHttpInfo(body?: string, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.deleteOneNotificationConfig(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOneNotificationConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [body]
     */
    public deleteOneNotificationConfig(body?: string, _options?: Configuration): Observable<boolean> {
        return this.deleteOneNotificationConfigWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     */
    public getAllNotificationConfigsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<WSConfigItemDto>>> {
        const requestContextPromise = this.requestFactory.getAllNotificationConfigs(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllNotificationConfigsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getAllNotificationConfigs(_options?: Configuration): Observable<Array<WSConfigItemDto>> {
        return this.getAllNotificationConfigsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<WSConfigItemDto>>) => apiResponse.data));
    }

    /**
     * @param [unreadOnly]
     */
    public getAllNotificationsWithHttpInfo(unreadOnly?: boolean, _options?: Configuration): Observable<HttpInfo<Array<WSNotificationDto>>> {
        const requestContextPromise = this.requestFactory.getAllNotifications(unreadOnly, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllNotificationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [unreadOnly]
     */
    public getAllNotifications(unreadOnly?: boolean, _options?: Configuration): Observable<Array<WSNotificationDto>> {
        return this.getAllNotificationsWithHttpInfo(unreadOnly, _options).pipe(map((apiResponse: HttpInfo<Array<WSNotificationDto>>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public getOneNotificationWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<WSNotificationDto>> {
        const requestContextPromise = this.requestFactory.getOneNotification(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOneNotificationWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public getOneNotification(id: string, _options?: Configuration): Observable<WSNotificationDto> {
        return this.getOneNotificationWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<WSNotificationDto>) => apiResponse.data));
    }

    /**
     * @param [wSConfigPutDto]
     */
    public updateOneNotificationConfigWithHttpInfo(wSConfigPutDto?: WSConfigPutDto, _options?: Configuration): Observable<HttpInfo<WSConfigItemDto>> {
        const requestContextPromise = this.requestFactory.updateOneNotificationConfig(wSConfigPutDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOneNotificationConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [wSConfigPutDto]
     */
    public updateOneNotificationConfig(wSConfigPutDto?: WSConfigPutDto, _options?: Configuration): Observable<WSConfigItemDto> {
        return this.updateOneNotificationConfigWithHttpInfo(wSConfigPutDto, _options).pipe(map((apiResponse: HttpInfo<WSConfigItemDto>) => apiResponse.data));
    }

}

import { RepoApiRequestFactory, RepoApiResponseProcessor} from "../apis/RepoApi";
export class ObservableRepoApi {
    private requestFactory: RepoApiRequestFactory;
    private responseProcessor: RepoApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RepoApiRequestFactory,
        responseProcessor?: RepoApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RepoApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RepoApiResponseProcessor();
    }

    /**
     */
    public apiReposGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<RepoPointDto>>> {
        const requestContextPromise = this.requestFactory.apiReposGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiReposGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public apiReposGet(_options?: Configuration): Observable<Array<RepoPointDto>> {
        return this.apiReposGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<RepoPointDto>>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiReposPointUserPointNameDeleteWithHttpInfo(pointUser: string, pointName: string, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.apiReposPointUserPointNameDelete(pointUser, pointName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiReposPointUserPointNameDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiReposPointUserPointNameDelete(pointUser: string, pointName: string, _options?: Configuration): Observable<boolean> {
        return this.apiReposPointUserPointNameDeleteWithHttpInfo(pointUser, pointName, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiReposPointUserPointNameGetWithHttpInfo(pointUser: string, pointName: string, _options?: Configuration): Observable<HttpInfo<RepoPointDto>> {
        const requestContextPromise = this.requestFactory.apiReposPointUserPointNameGet(pointUser, pointName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiReposPointUserPointNameGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public apiReposPointUserPointNameGet(pointUser: string, pointName: string, _options?: Configuration): Observable<RepoPointDto> {
        return this.apiReposPointUserPointNameGetWithHttpInfo(pointUser, pointName, _options).pipe(map((apiResponse: HttpInfo<RepoPointDto>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [maxBytes]
     */
    public apiReposPointUserPointNamePutWithHttpInfo(pointUser: string, pointName: string, maxBytes?: number, _options?: Configuration): Observable<HttpInfo<RepoPointDto>> {
        const requestContextPromise = this.requestFactory.apiReposPointUserPointNamePut(pointUser, pointName, maxBytes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiReposPointUserPointNamePutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [maxBytes]
     */
    public apiReposPointUserPointNamePut(pointUser: string, pointName: string, maxBytes?: number, _options?: Configuration): Observable<RepoPointDto> {
        return this.apiReposPointUserPointNamePutWithHttpInfo(pointUser, pointName, maxBytes, _options).pipe(map((apiResponse: HttpInfo<RepoPointDto>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiReposPointUserPointNameSharesDeleteWithHttpInfo(pointUser: string, pointName: string, user?: string, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.apiReposPointUserPointNameSharesDelete(pointUser, pointName, user, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiReposPointUserPointNameSharesDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiReposPointUserPointNameSharesDelete(pointUser: string, pointName: string, user?: string, _options?: Configuration): Observable<boolean> {
        return this.apiReposPointUserPointNameSharesDeleteWithHttpInfo(pointUser, pointName, user, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiReposPointUserPointNameSharesGetWithHttpInfo(pointUser: string, pointName: string, user?: string, _options?: Configuration): Observable<HttpInfo<Array<RepoPointShareDto>>> {
        const requestContextPromise = this.requestFactory.apiReposPointUserPointNameSharesGet(pointUser, pointName, user, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiReposPointUserPointNameSharesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [user]
     */
    public apiReposPointUserPointNameSharesGet(pointUser: string, pointName: string, user?: string, _options?: Configuration): Observable<Array<RepoPointShareDto>> {
        return this.apiReposPointUserPointNameSharesGetWithHttpInfo(pointUser, pointName, user, _options).pipe(map((apiResponse: HttpInfo<Array<RepoPointShareDto>>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [repoPointShareDto]
     */
    public apiReposPointUserPointNameSharesPutWithHttpInfo(pointUser: string, pointName: string, repoPointShareDto?: RepoPointShareDto, _options?: Configuration): Observable<HttpInfo<RepoPointShareDto>> {
        const requestContextPromise = this.requestFactory.apiReposPointUserPointNameSharesPut(pointUser, pointName, repoPointShareDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiReposPointUserPointNameSharesPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param [repoPointShareDto]
     */
    public apiReposPointUserPointNameSharesPut(pointUser: string, pointName: string, repoPointShareDto?: RepoPointShareDto, _options?: Configuration): Observable<RepoPointShareDto> {
        return this.apiReposPointUserPointNameSharesPutWithHttpInfo(pointUser, pointName, repoPointShareDto, _options).pipe(map((apiResponse: HttpInfo<RepoPointShareDto>) => apiResponse.data));
    }

    /**
     * @param [name]
     * @param [maxBytes]
     */
    public apiReposPostWithHttpInfo(name?: string, maxBytes?: number, _options?: Configuration): Observable<HttpInfo<RepoPointDto>> {
        const requestContextPromise = this.requestFactory.apiReposPost(name, maxBytes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiReposPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [name]
     * @param [maxBytes]
     */
    public apiReposPost(name?: string, maxBytes?: number, _options?: Configuration): Observable<RepoPointDto> {
        return this.apiReposPostWithHttpInfo(name, maxBytes, _options).pipe(map((apiResponse: HttpInfo<RepoPointDto>) => apiResponse.data));
    }

    /**
     * @param [dataPointBrowseGetDto]
     */
    public browseFilesForRepoWithHttpInfo(dataPointBrowseGetDto?: DataPointBrowseGetDto, _options?: Configuration): Observable<HttpInfo<Array<FileDto>>> {
        const requestContextPromise = this.requestFactory.browseFilesForRepo(dataPointBrowseGetDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.browseFilesForRepoWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [dataPointBrowseGetDto]
     */
    public browseFilesForRepo(dataPointBrowseGetDto?: DataPointBrowseGetDto, _options?: Configuration): Observable<Array<FileDto>> {
        return this.browseFilesForRepoWithHttpInfo(dataPointBrowseGetDto, _options).pipe(map((apiResponse: HttpInfo<Array<FileDto>>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param id
     */
    public deleteOneSnapshotForRepoWithHttpInfo(pointUser: string, pointName: string, id: string, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.deleteOneSnapshotForRepo(pointUser, pointName, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOneSnapshotForRepoWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param id
     */
    public deleteOneSnapshotForRepo(pointUser: string, pointName: string, id: string, _options?: Configuration): Observable<boolean> {
        return this.deleteOneSnapshotForRepoWithHttpInfo(pointUser, pointName, id, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * @param [body]
     */
    public dumpFileForRepoWithHttpInfo(body?: string, _options?: Configuration): Observable<HttpInfo<FileOutputDto>> {
        const requestContextPromise = this.requestFactory.dumpFileForRepo(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dumpFileForRepoWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [body]
     */
    public dumpFileForRepo(body?: string, _options?: Configuration): Observable<FileOutputDto> {
        return this.dumpFileForRepoWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<FileOutputDto>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllJobsForRepoWithHttpInfo(pointUser: string, pointName: string, _options?: Configuration): Observable<HttpInfo<Array<RepoDataJobDto>>> {
        const requestContextPromise = this.requestFactory.getAllJobsForRepo(pointUser, pointName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllJobsForRepoWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllJobsForRepo(pointUser: string, pointName: string, _options?: Configuration): Observable<Array<RepoDataJobDto>> {
        return this.getAllJobsForRepoWithHttpInfo(pointUser, pointName, _options).pipe(map((apiResponse: HttpInfo<Array<RepoDataJobDto>>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllSnapshotsForRepoWithHttpInfo(pointUser: string, pointName: string, _options?: Configuration): Observable<HttpInfo<Array<SnapshotDto>>> {
        const requestContextPromise = this.requestFactory.getAllSnapshotsForRepo(pointUser, pointName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllSnapshotsForRepoWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     */
    public getAllSnapshotsForRepo(pointUser: string, pointName: string, _options?: Configuration): Observable<Array<SnapshotDto>> {
        return this.getAllSnapshotsForRepoWithHttpInfo(pointUser, pointName, _options).pipe(map((apiResponse: HttpInfo<Array<SnapshotDto>>) => apiResponse.data));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param id
     */
    public getOneSnapshotForRepoWithHttpInfo(pointUser: string, pointName: string, id: string, _options?: Configuration): Observable<HttpInfo<SnapshotDto>> {
        const requestContextPromise = this.requestFactory.getOneSnapshotForRepo(pointUser, pointName, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOneSnapshotForRepoWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pointUser
     * @param pointName
     * @param id
     */
    public getOneSnapshotForRepo(pointUser: string, pointName: string, id: string, _options?: Configuration): Observable<SnapshotDto> {
        return this.getOneSnapshotForRepoWithHttpInfo(pointUser, pointName, id, _options).pipe(map((apiResponse: HttpInfo<SnapshotDto>) => apiResponse.data));
    }

}

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class ObservableUserApi {
    private requestFactory: UserApiRequestFactory;
    private responseProcessor: UserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserApiResponseProcessor();
    }

    /**
     * @param [userCreateDto]
     */
    public createOneUserWithHttpInfo(userCreateDto?: UserCreateDto, _options?: Configuration): Observable<HttpInfo<UserSummaryDto>> {
        const requestContextPromise = this.requestFactory.createOneUser(userCreateDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOneUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [userCreateDto]
     */
    public createOneUser(userCreateDto?: UserCreateDto, _options?: Configuration): Observable<UserSummaryDto> {
        return this.createOneUserWithHttpInfo(userCreateDto, _options).pipe(map((apiResponse: HttpInfo<UserSummaryDto>) => apiResponse.data));
    }

    /**
     * @param [userName]
     */
    public deleteOneUserWithHttpInfo(userName?: string, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.deleteOneUser(userName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOneUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [userName]
     */
    public deleteOneUser(userName?: string, _options?: Configuration): Observable<boolean> {
        return this.deleteOneUserWithHttpInfo(userName, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * @param userName
     * @param permissionName
     */
    public disableOnePermissionForUserWithHttpInfo(userName: string, permissionName: string, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.disableOnePermissionForUser(userName, permissionName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.disableOnePermissionForUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userName
     * @param permissionName
     */
    public disableOnePermissionForUser(userName: string, permissionName: string, _options?: Configuration): Observable<boolean> {
        return this.disableOnePermissionForUserWithHttpInfo(userName, permissionName, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * @param userName
     * @param permissionName
     */
    public enableOnePermissionForUserWithHttpInfo(userName: string, permissionName: string, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.enableOnePermissionForUser(userName, permissionName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enableOnePermissionForUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userName
     * @param permissionName
     */
    public enableOnePermissionForUser(userName: string, permissionName: string, _options?: Configuration): Observable<boolean> {
        return this.enableOnePermissionForUserWithHttpInfo(userName, permissionName, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * @param userName
     */
    public getAllPermissionsForUserWithHttpInfo(userName: string, _options?: Configuration): Observable<HttpInfo<Array<UserPermission>>> {
        const requestContextPromise = this.requestFactory.getAllPermissionsForUser(userName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllPermissionsForUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userName
     */
    public getAllPermissionsForUser(userName: string, _options?: Configuration): Observable<Array<UserPermission>> {
        return this.getAllPermissionsForUserWithHttpInfo(userName, _options).pipe(map((apiResponse: HttpInfo<Array<UserPermission>>) => apiResponse.data));
    }

    /**
     */
    public getAllUsersWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<UserSummaryDto>>> {
        const requestContextPromise = this.requestFactory.getAllUsers(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllUsersWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getAllUsers(_options?: Configuration): Observable<Array<UserSummaryDto>> {
        return this.getAllUsersWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<UserSummaryDto>>) => apiResponse.data));
    }

    /**
     * @param userName
     * @param permissionName
     */
    public getOnePermissionForUserWithHttpInfo(userName: string, permissionName: string, _options?: Configuration): Observable<HttpInfo<UserPermission>> {
        const requestContextPromise = this.requestFactory.getOnePermissionForUser(userName, permissionName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOnePermissionForUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userName
     * @param permissionName
     */
    public getOnePermissionForUser(userName: string, permissionName: string, _options?: Configuration): Observable<UserPermission> {
        return this.getOnePermissionForUserWithHttpInfo(userName, permissionName, _options).pipe(map((apiResponse: HttpInfo<UserPermission>) => apiResponse.data));
    }

    /**
     * @param userName
     */
    public getOneUserWithHttpInfo(userName: string, _options?: Configuration): Observable<HttpInfo<UserSummaryDto>> {
        const requestContextPromise = this.requestFactory.getOneUser(userName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOneUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userName
     */
    public getOneUser(userName: string, _options?: Configuration): Observable<UserSummaryDto> {
        return this.getOneUserWithHttpInfo(userName, _options).pipe(map((apiResponse: HttpInfo<UserSummaryDto>) => apiResponse.data));
    }

    /**
     * @param userName
     * @param [userPermissionDto]
     */
    public updateAllPermissionsForUserWithHttpInfo(userName: string, userPermissionDto?: Array<UserPermissionDto>, _options?: Configuration): Observable<HttpInfo<Array<UserPermission>>> {
        const requestContextPromise = this.requestFactory.updateAllPermissionsForUser(userName, userPermissionDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAllPermissionsForUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userName
     * @param [userPermissionDto]
     */
    public updateAllPermissionsForUser(userName: string, userPermissionDto?: Array<UserPermissionDto>, _options?: Configuration): Observable<Array<UserPermission>> {
        return this.updateAllPermissionsForUserWithHttpInfo(userName, userPermissionDto, _options).pipe(map((apiResponse: HttpInfo<Array<UserPermission>>) => apiResponse.data));
    }

    /**
     * @param userName
     * @param [userPutDto]
     */
    public updateOneUserWithHttpInfo(userName: string, userPutDto?: UserPutDto, _options?: Configuration): Observable<HttpInfo<UserSummaryDto>> {
        const requestContextPromise = this.requestFactory.updateOneUser(userName, userPutDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOneUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userName
     * @param [userPutDto]
     */
    public updateOneUser(userName: string, userPutDto?: UserPutDto, _options?: Configuration): Observable<UserSummaryDto> {
        return this.updateOneUserWithHttpInfo(userName, userPutDto, _options).pipe(map((apiResponse: HttpInfo<UserSummaryDto>) => apiResponse.data));
    }

}
