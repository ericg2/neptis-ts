# .UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOneUser**](UserApi.md#createOneUser) | **POST** /api/users | 
[**deleteOneUser**](UserApi.md#deleteOneUser) | **DELETE** /api/users | 
[**disableOnePermissionForUser**](UserApi.md#disableOnePermissionForUser) | **DELETE** /api/users/{userName}/perms/{permissionName} | 
[**enableOnePermissionForUser**](UserApi.md#enableOnePermissionForUser) | **POST** /api/users/{userName}/perms/{permissionName} | 
[**getAllPermissionsForUser**](UserApi.md#getAllPermissionsForUser) | **GET** /api/users/{userName}/perms | 
[**getAllUsers**](UserApi.md#getAllUsers) | **GET** /api/users | 
[**getOnePermissionForUser**](UserApi.md#getOnePermissionForUser) | **GET** /api/users/{userName}/perms/{permissionName} | 
[**getOneUser**](UserApi.md#getOneUser) | **GET** /api/users/{userName} | 
[**updateAllPermissionsForUser**](UserApi.md#updateAllPermissionsForUser) | **PUT** /api/users/{userName}/perms | 
[**updateOneUser**](UserApi.md#updateOneUser) | **PUT** /api/users/{userName} | 


# **createOneUser**
> UserSummaryDto createOneUser()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiCreateOneUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiCreateOneUserRequest = {
  
  userCreateDto: {
    userName: "awat5ikwowtta-3mh2lcafqw3zhes",
    password: "password_example",
    emailAddress: "emailAddress_example",
    isPrivate: true,
    maxDataBytes: 1,
    maxRepoBytes: 1,
    permissions: [
      "permissions_example",
    ],
  },
};

const data = await apiInstance.createOneUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateDto** | **UserCreateDto**|  |


### Return type

**UserSummaryDto**

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

# **deleteOneUser**
> boolean deleteOneUser()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiDeleteOneUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiDeleteOneUserRequest = {
  
  userName: "userName_example",
};

const data = await apiInstance.deleteOneUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userName** | [**string**] |  | (optional) defaults to undefined


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

# **disableOnePermissionForUser**
> boolean disableOnePermissionForUser()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiDisableOnePermissionForUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiDisableOnePermissionForUserRequest = {
  
  userName: "userName_example",
  
  permissionName: "permissionName_example",
};

const data = await apiInstance.disableOnePermissionForUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userName** | [**string**] |  | defaults to undefined
 **permissionName** | [**string**] |  | defaults to undefined


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

# **enableOnePermissionForUser**
> boolean enableOnePermissionForUser()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiEnableOnePermissionForUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiEnableOnePermissionForUserRequest = {
  
  userName: "userName_example",
  
  permissionName: "permissionName_example",
};

const data = await apiInstance.enableOnePermissionForUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userName** | [**string**] |  | defaults to undefined
 **permissionName** | [**string**] |  | defaults to undefined


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

# **getAllPermissionsForUser**
> Array<UserPermission> getAllPermissionsForUser()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiGetAllPermissionsForUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiGetAllPermissionsForUserRequest = {
  
  userName: "userName_example",
};

const data = await apiInstance.getAllPermissionsForUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userName** | [**string**] |  | defaults to undefined


### Return type

**Array<UserPermission>**

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

# **getAllUsers**
> Array<UserSummaryDto> getAllUsers()


### Example


```typescript
import { createConfiguration, UserApi } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request = {};

const data = await apiInstance.getAllUsers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<UserSummaryDto>**

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

# **getOnePermissionForUser**
> UserPermission getOnePermissionForUser()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiGetOnePermissionForUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiGetOnePermissionForUserRequest = {
  
  userName: "userName_example",
  
  permissionName: "permissionName_example",
};

const data = await apiInstance.getOnePermissionForUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userName** | [**string**] |  | defaults to undefined
 **permissionName** | [**string**] |  | defaults to undefined


### Return type

**UserPermission**

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

# **getOneUser**
> UserSummaryDto getOneUser()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiGetOneUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiGetOneUserRequest = {
  
  userName: "userName_example",
};

const data = await apiInstance.getOneUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userName** | [**string**] |  | defaults to undefined


### Return type

**UserSummaryDto**

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

# **updateAllPermissionsForUser**
> Array<UserPermission> updateAllPermissionsForUser()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiUpdateAllPermissionsForUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiUpdateAllPermissionsForUserRequest = {
  
  userName: "userName_example",
  
  userPermissionDto: [
    {
      permission: "permission_example",
      allowed: true,
    },
  ],
};

const data = await apiInstance.updateAllPermissionsForUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userPermissionDto** | **Array<UserPermissionDto>**|  |
 **userName** | [**string**] |  | defaults to undefined


### Return type

**Array<UserPermission>**

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

# **updateOneUser**
> UserSummaryDto updateOneUser()


### Example


```typescript
import { createConfiguration, UserApi } from '';
import type { UserApiUpdateOneUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserApi(configuration);

const request: UserApiUpdateOneUserRequest = {
  
  userName: "userName_example",
  
  userPutDto: {
    emailAddress: "emailAddress_example",
    isPrivate: true,
    maxDataBytes: 1,
    maxRepoBytes: 1,
    password: "password_example",
  },
};

const data = await apiInstance.updateOneUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userPutDto** | **UserPutDto**|  |
 **userName** | [**string**] |  | defaults to undefined


### Return type

**UserSummaryDto**

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


