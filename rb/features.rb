# XenoCanto SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module XenoCantoFeatures
  def self.make_feature(name)
    case name
    when "base"
      XenoCantoBaseFeature.new
    when "ratelimit"
      XenoCantoRatelimitFeature.new
    when "retry"
      XenoCantoRetryFeature.new
    when "test"
      XenoCantoTestFeature.new
    when "timeout"
      XenoCantoTimeoutFeature.new
    else
      XenoCantoBaseFeature.new
    end
  end
end
