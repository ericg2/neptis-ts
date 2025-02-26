# .RepoApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiReposGet**](RepoApi.md#apiReposGet) | **GET** /api/repos | 
[**apiReposPointUserPointNameDelete**](RepoApi.md#apiReposPointUserPointNameDelete) | **DELETE** /api/repos/{pointUser}/{pointName} | 
[**apiReposPointUserPointNameGet**](RepoApi.md#apiReposPointUserPointNameGet) | **GET** /api/repos/{pointUser}/{pointName} | 
[**apiReposPointUserPointNamePut**](RepoApi.md#apiReposPointUserPointNamePut) | **PUT** /api/repos/{pointUser}/{pointName} | 
[**apiReposPointUserPointNameSharesDelete**](RepoApi.md#apiReposPointUserPointNameSharesDelete) | **DELETE** /api/repos/{pointUser}/{pointName}/shares | 
[**apiReposPointUserPointNameSharesGet**](RepoApi.md#apiReposPointUserPointNameSharesGet) | **GET** /api/repos/{pointUser}/{pointName}/shares | 
[**apiReposPointUserPointNameSharesPut**](RepoApi.md#apiReposPointUserPointNameSharesPut) | **PUT** /api/repos/{pointUser}/{pointName}/shares | 
[**apiReposPost**](RepoApi.md#apiReposPost) | **POST** /api/repos | 
[**browseFilesForRepo**](RepoApi.md#browseFilesForRepo) | **GET** /api/repos/files | 
[**deleteOneSnapshotForRepo**](RepoApi.md#deleteOneSnapshotForRepo) | **DELETE** /api/repos/{pointUser}/{pointName}/snapshots/{id} | 
[**dumpFileForRepo**](RepoApi.md#dumpFileForRepo) | **GET** /api/repos/dump | 
[**getAllJobsForRepo**](RepoApi.md#getAllJobsForRepo) | **GET** /api/repos/{pointUser}/{pointName}/jobs | 
[**getAllSnapshotsForRepo**](RepoApi.md#getAllSnapshotsForRepo) | **GET** /api/repos/{pointUser}/{pointName}/snapshots | 
[**getOneSnapshotForRepo**](RepoApi.md#getOneSnapshotForRepo) | **GET** /api/repos/{pointUser}/{pointName}/snapshots/{id} | 


# **apiReposGet**
> Array<RepoPointDto> apiReposGet()


### Example


```typescript
import { createConfiguration, RepoApi } from '';

const configuration = createConfiguration();
const apiInstance = new RepoApi(configuration);

const request = {};

const data = await apiInstance.apiReposGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<RepoPointDto>**

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

# **apiReposPointUserPointNameDelete**
> boolean apiReposPointUserPointNameDelete()


### Example


```typescript
import { createConfiguration, RepoApi } from '';
import type { RepoApiApiReposPointUserPointNameDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RepoApi(configuration);

const request: RepoApiApiReposPointUserPointNameDeleteRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
};

const data = await apiInstance.apiReposPointUserPointNameDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointUser** | [**string**] |  | defaults to undefined
 **pointName** | [**string**] |  | defaults to undefined


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

# **apiReposPointUserPointNameGet**
> RepoPointDto apiReposPointUserPointNameGet()


### Example


```typescript
import { createConfiguration, RepoApi } from '';
import type { RepoApiApiReposPointUserPointNameGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RepoApi(configuration);

const request: RepoApiApiReposPointUserPointNameGetRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
};

const data = await apiInstance.apiReposPointUserPointNameGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointUser** | [**string**] |  | defaults to undefined
 **pointName** | [**string**] |  | defaults to undefined


### Return type

**RepoPointDto**

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

# **apiReposPointUserPointNamePut**
> RepoPointDto apiReposPointUserPointNamePut()


### Example


```typescript
import { createConfiguration, RepoApi } from '';
import type { RepoApiApiReposPointUserPointNamePutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RepoApi(configuration);

const request: RepoApiApiReposPointUserPointNamePutRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
  
  maxBytes: 1,
};

const data = await apiInstance.apiReposPointUserPointNamePut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointUser** | [**string**] |  | defaults to undefined
 **pointName** | [**string**] |  | defaults to undefined
 **maxBytes** | [**number**] |  | (optional) defaults to undefined


### Return type

**RepoPointDto**

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

# **apiReposPointUserPointNameSharesDelete**
> boolean apiReposPointUserPointNameSharesDelete()


### Example


```typescript
import { createConfiguration, RepoApi } from '';
import type { RepoApiApiReposPointUserPointNameSharesDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RepoApi(configuration);

const request: RepoApiApiReposPointUserPointNameSharesDeleteRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
  
  user: "user_example",
};

const data = await apiInstance.apiReposPointUserPointNameSharesDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointUser** | [**string**] |  | defaults to undefined
 **pointName** | [**string**] |  | defaults to undefined
 **user** | [**string**] |  | (optional) defaults to undefined


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

# **apiReposPointUserPointNameSharesGet**
> Array<RepoPointShareDto> apiReposPointUserPointNameSharesGet()


### Example


```typescript
import { createConfiguration, RepoApi } from '';
import type { RepoApiApiReposPointUserPointNameSharesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RepoApi(configuration);

const request: RepoApiApiReposPointUserPointNameSharesGetRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
  
  user: "user_example",
};

const data = await apiInstance.apiReposPointUserPointNameSharesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointUser** | [**string**] |  | defaults to undefined
 **pointName** | [**string**] |  | defaults to undefined
 **user** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<RepoPointShareDto>**

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

# **apiReposPointUserPointNameSharesPut**
> RepoPointShareDto apiReposPointUserPointNameSharesPut()


### Example


```typescript
import { createConfiguration, RepoApi } from '';
import type { RepoApiApiReposPointUserPointNameSharesPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RepoApi(configuration);

const request: RepoApiApiReposPointUserPointNameSharesPutRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
  
  repoPointShareDto: {
    userName: "userName_example",
    canRead: true,
    canWrite: true,
    canShare: true,
    canManage: true,
  },
};

const data = await apiInstance.apiReposPointUserPointNameSharesPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repoPointShareDto** | **RepoPointShareDto**|  |
 **pointUser** | [**string**] |  | defaults to undefined
 **pointName** | [**string**] |  | defaults to undefined


### Return type

**RepoPointShareDto**

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

# **apiReposPost**
> RepoPointDto apiReposPost()


### Example


```typescript
import { createConfiguration, RepoApi } from '';
import type { RepoApiApiReposPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RepoApi(configuration);

const request: RepoApiApiReposPostRequest = {
  
  name: "name_example",
  
  maxBytes: 1,
};

const data = await apiInstance.apiReposPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | (optional) defaults to undefined
 **maxBytes** | [**number**] |  | (optional) defaults to undefined


### Return type

**RepoPointDto**

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

# **browseFilesForRepo**
> Array<FileDto> browseFilesForRepo()


### Example


```typescript
import { createConfiguration, RepoApi } from '';
import type { RepoApiBrowseFilesForRepoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RepoApi(configuration);

const request: RepoApiBrowseFilesForRepoRequest = {
  
  dataPointBrowseGetDto: {
    path: "path_example",
    depth: 1,
  },
};

const data = await apiInstance.browseFilesForRepo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataPointBrowseGetDto** | **DataPointBrowseGetDto**|  |


### Return type

**Array<FileDto>**

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

# **deleteOneSnapshotForRepo**
> boolean deleteOneSnapshotForRepo()


### Example


```typescript
import { createConfiguration, RepoApi } from '';
import type { RepoApiDeleteOneSnapshotForRepoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RepoApi(configuration);

const request: RepoApiDeleteOneSnapshotForRepoRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
  
  id: "id_example",
};

const data = await apiInstance.deleteOneSnapshotForRepo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointUser** | [**string**] |  | defaults to undefined
 **pointName** | [**string**] |  | defaults to undefined
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

# **dumpFileForRepo**
> FileOutputDto dumpFileForRepo()


### Example


```typescript
import { createConfiguration, RepoApi } from '';
import type { RepoApiDumpFileForRepoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RepoApi(configuration);

const request: RepoApiDumpFileForRepoRequest = {
  
  body: "body_example",
};

const data = await apiInstance.dumpFileForRepo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |


### Return type

**FileOutputDto**

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

# **getAllJobsForRepo**
> Array<RepoDataJobDto> getAllJobsForRepo()


### Example


```typescript
import { createConfiguration, RepoApi } from '';
import type { RepoApiGetAllJobsForRepoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RepoApi(configuration);

const request: RepoApiGetAllJobsForRepoRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
};

const data = await apiInstance.getAllJobsForRepo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointUser** | [**string**] |  | defaults to undefined
 **pointName** | [**string**] |  | defaults to undefined


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

# **getAllSnapshotsForRepo**
> Array<SnapshotDto> getAllSnapshotsForRepo()


### Example


```typescript
import { createConfiguration, RepoApi } from '';
import type { RepoApiGetAllSnapshotsForRepoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RepoApi(configuration);

const request: RepoApiGetAllSnapshotsForRepoRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
};

const data = await apiInstance.getAllSnapshotsForRepo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointUser** | [**string**] |  | defaults to undefined
 **pointName** | [**string**] |  | defaults to undefined


### Return type

**Array<SnapshotDto>**

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

# **getOneSnapshotForRepo**
> SnapshotDto getOneSnapshotForRepo()


### Example


```typescript
import { createConfiguration, RepoApi } from '';
import type { RepoApiGetOneSnapshotForRepoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RepoApi(configuration);

const request: RepoApiGetOneSnapshotForRepoRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
  
  id: "id_example",
};

const data = await apiInstance.getOneSnapshotForRepo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointUser** | [**string**] |  | defaults to undefined
 **pointName** | [**string**] |  | defaults to undefined
 **id** | [**string**] |  | defaults to undefined


### Return type

**SnapshotDto**

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


