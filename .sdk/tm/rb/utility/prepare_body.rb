# XenoCanto SDK utility: prepare_body
require_relative 'media'
module XenoCantoUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return XenoCantoUtilities.raw_body(ctx.reqdata) if XenoCantoUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
