# coding: utf-8

"""
    Gamified Task Management API

    API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.list_stories200_response import ListStories200Response

class TestListStories200Response(unittest.TestCase):
    """ListStories200Response unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ListStories200Response:
        """Test ListStories200Response
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ListStories200Response`
        """
        model = ListStories200Response()
        if include_optional:
            return ListStories200Response(
                success = True,
                data = openapi_client.models.list_stories_200_response_data.listStories_200_response_data(
                    stories = [
                        openapi_client.models.story.Story(
                            id = '64a1b2c3d4e5f6789abcdef2', 
                            title = 'A Batalha contra o Bug Monstruoso', 
                            story = 'Nas profundezas do código, um bug terrível despertou...', 
                            theme = 'medieval', 
                            progress = 50, )
                        ], 
                    pagination = openapi_client.models.pagination.pagination(), )
            )
        else:
            return ListStories200Response(
        )
        """

    def testListStories200Response(self):
        """Test ListStories200Response"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
