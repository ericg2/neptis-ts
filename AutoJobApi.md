# .AutoJobApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOneAutoJob**](AutoJobApi.md#deleteOneAutoJob) | **DELETE** /api/autojobs | 
[**getAllAutoJobs**](AutoJobApi.md#getAllAutoJobs) | **GET** /api/autojobs | 
[**updateOneAutoJob**](AutoJobApi.md#updateOneAutoJob) | **PUT** /api/autojobs | 


# **deleteOneAutoJob**
> boolean deleteOneAutoJob()


### Example


```typescript
import { createConfiguration, AutoJobApi } from '';
import type { AutoJobApiDeleteOneAutoJobRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutoJobApi(configuration);

const request: AutoJobApiDeleteOneAutoJobRequest = {
  
  autoJobGetDto: {
    name: "name_example",
    dataPoint: {
      userName: "awat5ikwowtta-3mh2lcafqw3zhes",
      pointName: "awat5ikwowtta-3mh2lcafqw3zhes",
    },
    repoPoint: {
      userName: "awat5ikwowtta-3mh2lcafqw3zhes",
      pointName: "awat5ikwowtta-3mh2lcafqw3zhes",
    },
  },
};

const data = await apiInstance.deleteOneAutoJob(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autoJobGetDto** | **AutoJobGetDto**|  |


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

# **getAllAutoJobs**
> Array<AutoJobConfigDto> getAllAutoJobs()


### Example


```typescript
import { createConfiguration, AutoJobApi } from '';

const configuration = createConfiguration();
const apiInstance = new AutoJobApi(configuration);

const request = {};

const data = await apiInstance.getAllAutoJobs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<AutoJobConfigDto>**

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

# **updateOneAutoJob**
> AutoJobConfigDto updateOneAutoJob()


### Example


```typescript
import { createConfiguration, AutoJobApi } from '';
import type { AutoJobApiUpdateOneAutoJobRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AutoJobApi(configuration);

const request: AutoJobApiUpdateOneAutoJobRequest = {
  
  autoJobPutDto: {
    name: "name_example",
    dataPoint: {
      userName: "awat5ikwowtta-3mh2lcafqw3zhes",
      pointName: "awat5ikwowtta-3mh2lcafqw3zhes",
    },
    repoPoint: {
      userName: "awat5ikwowtta-3mh2lcafqw3zhes",
      pointName: "awat5ikwowtta-3mh2lcafqw3zhes",
    },
    schedule: "schedule_example",
    newName: "newName_example",
    backupPath: "backupPath_example",
  },
};

const data = await apiInstance.updateOneAutoJob(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autoJobPutDto** | **AutoJobPutDto**|  |


### Return type

**AutoJobConfigDto**

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


