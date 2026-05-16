# XenoCanto SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module XenoCantoFeatures
  def self.make_feature(name)
    case name
    when "base"
      XenoCantoBaseFeature.new
    when "test"
      XenoCantoTestFeature.new
    else
      XenoCantoBaseFeature.new
    end
  end
end
