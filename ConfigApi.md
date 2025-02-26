# .ConfigApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGlobalConfig**](ConfigApi.md#getGlobalConfig) | **GET** /api/configs | 
[**updateGlobalConfig**](ConfigApi.md#updateGlobalConfig) | **PUT** /api/configs | 


# **getGlobalConfig**
> DynamicConfigDto getGlobalConfig()


### Example


```typescript
import { createConfiguration, ConfigApi } from '';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request = {};

const data = await apiInstance.getGlobalConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**DynamicConfigDto**

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

# **updateGlobalConfig**
> DynamicConfigDto updateGlobalConfig()


### Example


```typescript
import { createConfiguration, ConfigApi } from '';
import type { ConfigApiUpdateGlobalConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ConfigApi(configuration);

const request: ConfigApiUpdateGlobalConfigRequest = {
  
  globalConfigPutDto: {
    repoBaseDirectory: "repoBaseDirectory_example",
    dataBaseDirectory: "dataBaseDirectory_example",
    logBaseDirectory: "logBaseDirectory_example",
    mountBaseDirectory: "mountBaseDirectory_example",
    serverSmtpUrl: "serverSmtpUrl_example",
    serverEmailAddress: "serverEmailAddress_example",
    serverEmailPassword: "serverEmailPassword_example",
    authMins: 1,
    maxBytesPerUser: 1,
    maxRequestsPerUser: 1,
    rateLimitResetMins: 1,
    overwriteNulls: true,
  },
};

const data = await apiInstance.updateGlobalConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **globalConfigPutDto** | **GlobalConfigPutDto**|  |


### Return type

**DynamicConfigDto**

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


