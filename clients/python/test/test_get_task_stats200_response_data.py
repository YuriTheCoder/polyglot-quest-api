# coding: utf-8

"""
    Gamified Task Management API

    API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.get_task_stats200_response_data import GetTaskStats200ResponseData

class TestGetTaskStats200ResponseData(unittest.TestCase):
    """GetTaskStats200ResponseData unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> GetTaskStats200ResponseData:
        """Test GetTaskStats200ResponseData
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `GetTaskStats200ResponseData`
        """
        model = GetTaskStats200ResponseData()
        if include_optional:
            return GetTaskStats200ResponseData(
                stats = openapi_client.models.get_task_stats_200_response_data_stats.getTaskStats_200_response_data_stats(
                    total = 25, 
                    pending = 10, 
                    in_progress = 8, 
                    completed = 7, 
                    overdue = 3, 
                    completed_this_month = 5, ),
                overdue_tasks = [
                    openapi_client.models.task.Task(
                        id = '64a1b2c3d4e5f6789abcdef1', 
                        title = 'Implementar Story-Mode', 
                        status = 'pending', 
                        priority = 'low', 
                        user_id = '64a1b2c3d4e5f6789abcdef0', )
                    ]
            )
        else:
            return GetTaskStats200ResponseData(
        )
        """

    def testGetTaskStats200ResponseData(self):
        """Test GetTaskStats200ResponseData"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
