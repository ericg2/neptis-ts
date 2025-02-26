# .DataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiDatasGet**](DataApi.md#apiDatasGet) | **GET** /api/datas | 
[**apiDatasPointUserPointNameDelete**](DataApi.md#apiDatasPointUserPointNameDelete) | **DELETE** /api/datas/{pointUser}/{pointName} | 
[**apiDatasPointUserPointNameGet**](DataApi.md#apiDatasPointUserPointNameGet) | **GET** /api/datas/{pointUser}/{pointName} | 
[**apiDatasPointUserPointNamePut**](DataApi.md#apiDatasPointUserPointNamePut) | **PUT** /api/datas/{pointUser}/{pointName} | 
[**apiDatasPointUserPointNameSharesDelete**](DataApi.md#apiDatasPointUserPointNameSharesDelete) | **DELETE** /api/datas/{pointUser}/{pointName}/shares | 
[**apiDatasPointUserPointNameSharesGet**](DataApi.md#apiDatasPointUserPointNameSharesGet) | **GET** /api/datas/{pointUser}/{pointName}/shares | 
[**apiDatasPointUserPointNameSharesPut**](DataApi.md#apiDatasPointUserPointNameSharesPut) | **PUT** /api/datas/{pointUser}/{pointName}/shares | 
[**apiDatasPost**](DataApi.md#apiDatasPost) | **POST** /api/datas | 
[**browseFilesForData**](DataApi.md#browseFilesForData) | **GET** /api/datas/files | 
[**deleteOneFileForData**](DataApi.md#deleteOneFileForData) | **DELETE** /api/datas/files | 
[**dumpOneFileForData**](DataApi.md#dumpOneFileForData) | **GET** /api/datas/dump | 
[**getAllJobsForData**](DataApi.md#getAllJobsForData) | **GET** /api/datas/{pointUser}/{pointName}/jobs | 
[**updateOneFileForData**](DataApi.md#updateOneFileForData) | **PUT** /api/datas/files | 


# **apiDatasGet**
> Array<DataPointDto> apiDatasGet()


### Example


```typescript
import { createConfiguration, DataApi } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request = {};

const data = await apiInstance.apiDatasGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<DataPointDto>**

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

# **apiDatasPointUserPointNameDelete**
> boolean apiDatasPointUserPointNameDelete()


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiApiDatasPointUserPointNameDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiApiDatasPointUserPointNameDeleteRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
};

const data = await apiInstance.apiDatasPointUserPointNameDelete(request);
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

# **apiDatasPointUserPointNameGet**
> DataPointDto apiDatasPointUserPointNameGet()


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiApiDatasPointUserPointNameGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiApiDatasPointUserPointNameGetRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
};

const data = await apiInstance.apiDatasPointUserPointNameGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointUser** | [**string**] |  | defaults to undefined
 **pointName** | [**string**] |  | defaults to undefined


### Return type

**DataPointDto**

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

# **apiDatasPointUserPointNamePut**
> DataPointDto apiDatasPointUserPointNamePut()


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiApiDatasPointUserPointNamePutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiApiDatasPointUserPointNamePutRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
  
  maxBytes: 1,
};

const data = await apiInstance.apiDatasPointUserPointNamePut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointUser** | [**string**] |  | defaults to undefined
 **pointName** | [**string**] |  | defaults to undefined
 **maxBytes** | [**number**] |  | (optional) defaults to undefined


### Return type

**DataPointDto**

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

# **apiDatasPointUserPointNameSharesDelete**
> boolean apiDatasPointUserPointNameSharesDelete()


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiApiDatasPointUserPointNameSharesDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiApiDatasPointUserPointNameSharesDeleteRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
  
  user: "user_example",
};

const data = await apiInstance.apiDatasPointUserPointNameSharesDelete(request);
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

# **apiDatasPointUserPointNameSharesGet**
> Array<DataPointShareDto> apiDatasPointUserPointNameSharesGet()


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiApiDatasPointUserPointNameSharesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiApiDatasPointUserPointNameSharesGetRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
  
  user: "user_example",
};

const data = await apiInstance.apiDatasPointUserPointNameSharesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointUser** | [**string**] |  | defaults to undefined
 **pointName** | [**string**] |  | defaults to undefined
 **user** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<DataPointShareDto>**

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

# **apiDatasPointUserPointNameSharesPut**
> DataPointShareDto apiDatasPointUserPointNameSharesPut()


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiApiDatasPointUserPointNameSharesPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiApiDatasPointUserPointNameSharesPutRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
  
  dataPointShareDto: {
    userName: "userName_example",
    canRead: true,
    canWrite: true,
    canShare: true,
    canManage: true,
  },
};

const data = await apiInstance.apiDatasPointUserPointNameSharesPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataPointShareDto** | **DataPointShareDto**|  |
 **pointUser** | [**string**] |  | defaults to undefined
 **pointName** | [**string**] |  | defaults to undefined


### Return type

**DataPointShareDto**

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

# **apiDatasPost**
> DataPointDto apiDatasPost()


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiApiDatasPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiApiDatasPostRequest = {
  
  name: "name_example",
  
  maxBytes: 1,
};

const data = await apiInstance.apiDatasPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | (optional) defaults to undefined
 **maxBytes** | [**number**] |  | (optional) defaults to undefined


### Return type

**DataPointDto**

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

# **browseFilesForData**
> Array<FileDto> browseFilesForData()


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiBrowseFilesForDataRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiBrowseFilesForDataRequest = {
  
  dataPointBrowseGetDto: {
    path: "path_example",
    depth: 1,
  },
};

const data = await apiInstance.browseFilesForData(request);
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

# **deleteOneFileForData**
> boolean deleteOneFileForData()


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiDeleteOneFileForDataRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiDeleteOneFileForDataRequest = {
  
  body: "body_example",
};

const data = await apiInstance.deleteOneFileForData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |


### Return type

**boolean**

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

# **dumpOneFileForData**
> FileOutputDto dumpOneFileForData()


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiDumpOneFileForDataRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiDumpOneFileForDataRequest = {
  
  body: "body_example",
};

const data = await apiInstance.dumpOneFileForData(request);
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

# **getAllJobsForData**
> Array<RepoDataJobDto> getAllJobsForData()


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiGetAllJobsForDataRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiGetAllJobsForDataRequest = {
  
  pointUser: "pointUser_example",
  
  pointName: "pointName_example",
};

const data = await apiInstance.getAllJobsForData(request);
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

# **updateOneFileForData**
> boolean updateOneFileForData()


### Example


```typescript
import { createConfiguration, DataApi } from '';
import type { DataApiUpdateOneFileForDataRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DataApi(configuration);

const request: DataApiUpdateOneFileForDataRequest = {
  
  filePutDto: {
    path: "path_example",
    newPath: "newPath_example",
    base64Content: "base64Content_example",
    isDirectory: true,
    copy: true,
  },
};

const data = await apiInstance.updateOneFileForData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePutDto** | **FilePutDto**|  |


### Return type

**boolean**

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


