# .InfoApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemSummary**](InfoApi.md#getSystemSummary) | **GET** /api/infos/summary | 
[**getValidNotifyMethods**](InfoApi.md#getValidNotifyMethods) | **GET** /api/infos/validnotifymethods | 
[**getValidNotifySubscriptions**](InfoApi.md#getValidNotifySubscriptions) | **GET** /api/infos/validsubscriptions | 
[**getValidPermissions**](InfoApi.md#getValidPermissions) | **GET** /api/infos/validperms | 


# **getSystemSummary**
> SystemStatusDto getSystemSummary()


### Example


```typescript
import { createConfiguration, InfoApi } from '';

const configuration = createConfiguration();
const apiInstance = new InfoApi(configuration);

const request = {};

const data = await apiInstance.getSystemSummary(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SystemStatusDto**

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

# **getValidNotifyMethods**
> Array<string> getValidNotifyMethods()


### Example


```typescript
import { createConfiguration, InfoApi } from '';

const configuration = createConfiguration();
const apiInstance = new InfoApi(configuration);

const request = {};

const data = await apiInstance.getValidNotifyMethods(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<string>**

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

# **getValidNotifySubscriptions**
> Array<string> getValidNotifySubscriptions()


### Example


```typescript
import { createConfiguration, InfoApi } from '';

const configuration = createConfiguration();
const apiInstance = new InfoApi(configuration);

const request = {};

const data = await apiInstance.getValidNotifySubscriptions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<string>**

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

# **getValidPermissions**
> Array<string> getValidPermissions()


### Example


```typescript
import { createConfiguration, InfoApi } from '';

const configuration = createConfiguration();
const apiInstance = new InfoApi(configuration);

const request = {};

const data = await apiInstance.getValidPermissions(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<string>**

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


