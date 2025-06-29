# coding: utf-8

"""
    Gamified Task Management API

    API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.update_user_profile200_response import UpdateUserProfile200Response

class TestUpdateUserProfile200Response(unittest.TestCase):
    """UpdateUserProfile200Response unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> UpdateUserProfile200Response:
        """Test UpdateUserProfile200Response
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `UpdateUserProfile200Response`
        """
        model = UpdateUserProfile200Response()
        if include_optional:
            return UpdateUserProfile200Response(
                success = True,
                message = 'Perfil atualizado com sucesso',
                data = openapi_client.models.get_user_profile_200_response_data.getUserProfile_200_response_data(
                    user = openapi_client.models.user.User(
                        id = '64a1b2c3d4e5f6789abcdef0', 
                        name = 'Yuri Dev', 
                        email = 'yuri.dev@example.com', 
                        role = 'user', 
                        is_active = True, 
                        last_login = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                        gamification = openapi_client.models.user_gamification.User_gamification(
                            level = 5, 
                            total_xp = 450, ), ), )
            )
        else:
            return UpdateUserProfile200Response(
        )
        """

    def testUpdateUserProfile200Response(self):
        """Test UpdateUserProfile200Response"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
