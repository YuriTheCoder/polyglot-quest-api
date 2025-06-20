# coding: utf-8

"""
    Gamified Task Management API

    API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.api_tasks_id_delete200_response import ApiTasksIdDelete200Response

class TestApiTasksIdDelete200Response(unittest.TestCase):
    """ApiTasksIdDelete200Response unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ApiTasksIdDelete200Response:
        """Test ApiTasksIdDelete200Response
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ApiTasksIdDelete200Response`
        """
        model = ApiTasksIdDelete200Response()
        if include_optional:
            return ApiTasksIdDelete200Response(
                success = True,
                message = 'Tarefa deletada com sucesso'
            )
        else:
            return ApiTasksIdDelete200Response(
        )
        """

    def testApiTasksIdDelete200Response(self):
        """Test ApiTasksIdDelete200Response"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
