# XenoCanto SDK exists test

require "minitest/autorun"
require_relative "../XenoCanto_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = XenoCantoSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
