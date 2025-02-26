# .LogApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOneLog**](LogApi.md#deleteOneLog) | **DELETE** /api/logs/{id} | 
[**getAllLogs**](LogApi.md#getAllLogs) | **GET** /api/logs | 
[**getOneLog**](LogApi.md#getOneLog) | **GET** /api/logs/{id} | 


# **deleteOneLog**
> boolean deleteOneLog()


### Example


```typescript
import { createConfiguration, LogApi } from '';
import type { LogApiDeleteOneLogRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LogApi(configuration);

const request: LogApiDeleteOneLogRequest = {
  
  id: 1,
};

const data = await apiInstance.deleteOneLog(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


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

# **getAllLogs**
> Array<LogItemDto> getAllLogs()


### Example


```typescript
import { createConfiguration, LogApi } from '';

const configuration = createConfiguration();
const apiInstance = new LogApi(configuration);

const request = {};

const data = await apiInstance.getAllLogs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<LogItemDto>**

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

# **getOneLog**
> LogItemDto getOneLog()


### Example


```typescript
import { createConfiguration, LogApi } from '';
import type { LogApiGetOneLogRequest } from '';

const configuration = createConfiguration();
const apiInstance = new LogApi(configuration);

const request: LogApiGetOneLogRequest = {
  
  id: 1,
};

const data = await apiInstance.getOneLog(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**LogItemDto**

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


