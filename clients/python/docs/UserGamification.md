# UserGamification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **float** |  | [optional] 
**total_xp** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.user_gamification import UserGamification

# TODO update the JSON string below
json = "{}"
# create an instance of UserGamification from a JSON string
user_gamification_instance = UserGamification.from_json(json)
# print the JSON string representation of the object
print(UserGamification.to_json())

# convert the object into a dict
user_gamification_dict = user_gamification_instance.to_dict()
# create an instance of UserGamification from a dict
user_gamification_from_dict = UserGamification.from_dict(user_gamification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


