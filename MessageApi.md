# .MessageApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOneMessage**](MessageApi.md#deleteOneMessage) | **DELETE** /api/messages/{id} | 
[**getAllMessages**](MessageApi.md#getAllMessages) | **GET** /api/messages | 
[**getOneMessage**](MessageApi.md#getOneMessage) | **GET** /api/messages/{id} | 
[**postOneMessage**](MessageApi.md#postOneMessage) | **POST** /api/messages | 


# **deleteOneMessage**
> boolean deleteOneMessage()


### Example


```typescript
import { createConfiguration, MessageApi } from '';
import type { MessageApiDeleteOneMessageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MessageApi(configuration);

const request: MessageApiDeleteOneMessageRequest = {
  
  id: "id_example",
};

const data = await apiInstance.deleteOneMessage(request);
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

# **getAllMessages**
> Array<MessageItemDto> getAllMessages()


### Example


```typescript
import { createConfiguration, MessageApi } from '';

const configuration = createConfiguration();
const apiInstance = new MessageApi(configuration);

const request = {};

const data = await apiInstance.getAllMessages(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<MessageItemDto>**

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

# **getOneMessage**
> MessageItemDto getOneMessage()


### Example


```typescript
import { createConfiguration, MessageApi } from '';
import type { MessageApiGetOneMessageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MessageApi(configuration);

const request: MessageApiGetOneMessageRequest = {
  
  id: "id_example",
};

const data = await apiInstance.getOneMessage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**MessageItemDto**

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

# **postOneMessage**
> boolean postOneMessage()


### Example


```typescript
import { createConfiguration, MessageApi } from '';
import type { MessageApiPostOneMessageRequest } from '';

const configuration = createConfiguration();
const apiInstance = new MessageApi(configuration);

const request: MessageApiPostOneMessageRequest = {
  
  messagePostDto: {
    toUsers: [
      "toUsers_example",
    ],
    subject: "subject_example",
    text: "text_example",
    highPriority: true,
  },
};

const data = await apiInstance.postOneMessage(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messagePostDto** | **MessagePostDto**|  |


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


