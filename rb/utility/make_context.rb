# XenoCanto SDK utility: make_context
require_relative '../core/context'
module XenoCantoUtilities
  MakeContext = ->(ctxmap, basectx) {
    XenoCantoContext.new(ctxmap, basectx)
  }
end
