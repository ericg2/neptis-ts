# .JobApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelOneJob**](JobApi.md#cancelOneJob) | **DELETE** /api/jobs/{id} | 
[**getAllJobs**](JobApi.md#getAllJobs) | **GET** /api/jobs | 
[**getOneJob**](JobApi.md#getOneJob) | **GET** /api/jobs/{id} | 
[**startOneBackup**](JobApi.md#startOneBackup) | **POST** /api/jobs/backup | 
[**startOneRestore**](JobApi.md#startOneRestore) | **POST** /api/jobs/restore | 


# **cancelOneJob**
> boolean cancelOneJob()


### Example


```typescript
import { createConfiguration, JobApi } from '';
import type { JobApiCancelOneJobRequest } from '';

const configuration = createConfiguration();
const apiInstance = new JobApi(configuration);

const request: JobApiCancelOneJobRequest = {
  
  id: "id_example",
};

const data = await apiInstance.cancelOneJob(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**boolean**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllJobs**
> Array<RepoDataJobDto> getAllJobs()


### Example


```typescript
import { createConfiguration, JobApi } from '';

const configuration = createConfiguration();
const apiInstance = new JobApi(configuration);

const request = {};

const data = await apiInstance.getAllJobs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<RepoDataJobDto>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOneJob**
> RepoDataJobDto getOneJob()


### Example


```typescript
import { createConfiguration, JobApi } from '';
import type { JobApiGetOneJobRequest } from '';

const configuration = createConfiguration();
const apiInstance = new JobApi(configuration);

const request: JobApiGetOneJobRequest = {
  
  id: "id_example",
};

const data = await apiInstance.getOneJob(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**RepoDataJobDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **startOneBackup**
> RepoDataJobDto startOneBackup()


### Example


```typescript
import { createConfiguration, JobApi } from '';
import type { JobApiStartOneBackupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new JobApi(configuration);

const request: JobApiStartOneBackupRequest = {
  
  jobBackupDto: {
    path: "path_example",
    repoPoint: {
      userName: "awat5ikwowtta-3mh2lcafqw3zhes",
      pointName: "awat5ikwowtta-3mh2lcafqw3zhes",
    },
  },
};

const data = await apiInstance.startOneBackup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobBackupDto** | **JobBackupDto**|  |


### Return type

**RepoDataJobDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **startOneRestore**
> RepoDataJobDto startOneRestore()


### Example


```typescript
import { createConfiguration, JobApi } from '';
import type { JobApiStartOneRestoreRequest } from '';

const configuration = createConfiguration();
const apiInstance = new JobApi(configuration);

const request: JobApiStartOneRestoreRequest = {
  
  jobRestoreDto: {
    fromRepo: "fromRepo_example",
    toData: "toData_example",
  },
};

const data = await apiInstance.startOneRestore(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobRestoreDto** | **JobRestoreDto**|  |


### Return type

**RepoDataJobDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


