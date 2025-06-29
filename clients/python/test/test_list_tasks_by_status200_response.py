# coding: utf-8

"""
    Gamified Task Management API

    API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.list_tasks_by_status200_response import ListTasksByStatus200Response

class TestListTasksByStatus200Response(unittest.TestCase):
    """ListTasksByStatus200Response unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ListTasksByStatus200Response:
        """Test ListTasksByStatus200Response
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ListTasksByStatus200Response`
        """
        model = ListTasksByStatus200Response()
        if include_optional:
            return ListTasksByStatus200Response(
                success = True,
                data = openapi_client.models.list_tasks_by_status_200_response_data.listTasksByStatus_200_response_data(
                    tasks = [
                        openapi_client.models.task.Task(
                            id = '64a1b2c3d4e5f6789abcdef1', 
                            title = 'Implementar Story-Mode', 
                            status = 'pending', 
                            priority = 'low', 
                            user_id = '64a1b2c3d4e5f6789abcdef0', )
                        ], 
                    pagination = openapi_client.models.list_tasks_by_status_200_response_data_pagination.listTasksByStatus_200_response_data_pagination(
                        current = 56, 
                        pages = 56, 
                        total = 56, 
                        limit = 56, ), )
            )
        else:
            return ListTasksByStatus200Response(
        )
        """

    def testListTasksByStatus200Response(self):
        """Test ListTasksByStatus200Response"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
