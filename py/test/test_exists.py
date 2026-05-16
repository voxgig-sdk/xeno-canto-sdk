# ProjectName SDK exists test

import pytest
from xenocanto_sdk import XenoCantoSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = XenoCantoSDK.test(None, None)
        assert testsdk is not None
