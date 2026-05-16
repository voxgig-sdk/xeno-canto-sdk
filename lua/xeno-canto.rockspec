package = "voxgig-sdk-xeno-canto"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/xeno-canto-sdk.git"
}
description = {
  summary = "XenoCanto SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["xeno-canto_sdk"] = "xeno-canto_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
