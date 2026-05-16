-- XenoCanto SDK error

local XenoCantoError = {}
XenoCantoError.__index = XenoCantoError


function XenoCantoError.new(code, msg, ctx)
  local self = setmetatable({}, XenoCantoError)
  self.is_sdk_error = true
  self.sdk = "XenoCanto"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function XenoCantoError:error()
  return self.msg
end


function XenoCantoError:__tostring()
  return self.msg
end


return XenoCantoError
