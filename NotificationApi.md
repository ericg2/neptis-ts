# .NotificationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOneNotification**](NotificationApi.md#deleteOneNotification) | **DELETE** /api/notifications/{id} | 
[**deleteOneNotificationConfig**](NotificationApi.md#deleteOneNotificationConfig) | **DELETE** /api/notifications/configs | 
[**getAllNotificationConfigs**](NotificationApi.md#getAllNotificationConfigs) | **GET** /api/notifications/configs | 
[**getAllNotifications**](NotificationApi.md#getAllNotifications) | **GET** /api/notifications | 
[**getOneNotification**](NotificationApi.md#getOneNotification) | **GET** /api/notifications/{id} | 
[**updateOneNotificationConfig**](NotificationApi.md#updateOneNotificationConfig) | **PUT** /api/notifications/configs | 


# **deleteOneNotification**
> boolean deleteOneNotification()


### Example


```typescript
import { createConfiguration, NotificationApi } from '';
import type { NotificationApiDeleteOneNotificationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NotificationApi(configuration);

const request: NotificationApiDeleteOneNotificationRequest = {
  
  id: "id_example",
};

const data = await apiInstance.deleteOneNotification(request);
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

# **deleteOneNotificationConfig**
> boolean deleteOneNotificationConfig()


### Example


```typescript
import { createConfiguration, NotificationApi } from '';
import type { NotificationApiDeleteOneNotificationConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NotificationApi(configuration);

const request: NotificationApiDeleteOneNotificationConfigRequest = {
  
  body: "body_example",
};

const data = await apiInstance.deleteOneNotificationConfig(request);
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

# **getAllNotificationConfigs**
> Array<WSConfigItemDto> getAllNotificationConfigs()


### Example


```typescript
import { createConfiguration, NotificationApi } from '';

const configuration = createConfiguration();
const apiInstance = new NotificationApi(configuration);

const request = {};

const data = await apiInstance.getAllNotificationConfigs(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<WSConfigItemDto>**

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

# **getAllNotifications**
> Array<WSNotificationDto> getAllNotifications()


### Example


```typescript
import { createConfiguration, NotificationApi } from '';
import type { NotificationApiGetAllNotificationsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NotificationApi(configuration);

const request: NotificationApiGetAllNotificationsRequest = {
  
  unreadOnly: false,
};

const data = await apiInstance.getAllNotifications(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unreadOnly** | [**boolean**] |  | (optional) defaults to false


### Return type

**Array<WSNotificationDto>**

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

# **getOneNotification**
> WSNotificationDto getOneNotification()


### Example


```typescript
import { createConfiguration, NotificationApi } from '';
import type { NotificationApiGetOneNotificationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NotificationApi(configuration);

const request: NotificationApiGetOneNotificationRequest = {
  
  id: "id_example",
};

const data = await apiInstance.getOneNotification(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**WSNotificationDto**

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

# **updateOneNotificationConfig**
> WSConfigItemDto updateOneNotificationConfig()


### Example


```typescript
import { createConfiguration, NotificationApi } from '';
import type { NotificationApiUpdateOneNotificationConfigRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NotificationApi(configuration);

const request: NotificationApiUpdateOneNotificationConfigRequest = {
  
  wSConfigPutDto: {
    uri: "uri_example",
    method: "method_example",
    subscriptions: [
      "subscriptions_example",
    ],
  },
};

const data = await apiInstance.updateOneNotificationConfig(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wSConfigPutDto** | **WSConfigPutDto**|  |


### Return type

**WSConfigItemDto**

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


