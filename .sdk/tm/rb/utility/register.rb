# XenoCanto SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

XenoCantoUtility.registrar = ->(u) {
  u.clean = XenoCantoUtilities::Clean
  u.done = XenoCantoUtilities::Done
  u.make_error = XenoCantoUtilities::MakeError
  u.feature_add = XenoCantoUtilities::FeatureAdd
  u.feature_hook = XenoCantoUtilities::FeatureHook
  u.feature_init = XenoCantoUtilities::FeatureInit
  u.fetcher = XenoCantoUtilities::Fetcher
  u.make_fetch_def = XenoCantoUtilities::MakeFetchDef
  u.make_context = XenoCantoUtilities::MakeContext
  u.make_options = XenoCantoUtilities::MakeOptions
  u.make_request = XenoCantoUtilities::MakeRequest
  u.make_response = XenoCantoUtilities::MakeResponse
  u.make_result = XenoCantoUtilities::MakeResult
  u.make_point = XenoCantoUtilities::MakePoint
  u.make_spec = XenoCantoUtilities::MakeSpec
  u.make_url = XenoCantoUtilities::MakeUrl
  u.param = XenoCantoUtilities::Param
  u.prepare_auth = XenoCantoUtilities::PrepareAuth
  u.prepare_body = XenoCantoUtilities::PrepareBody
  u.prepare_headers = XenoCantoUtilities::PrepareHeaders
  u.prepare_method = XenoCantoUtilities::PrepareMethod
  u.prepare_params = XenoCantoUtilities::PrepareParams
  u.prepare_path = XenoCantoUtilities::PreparePath
  u.prepare_query = XenoCantoUtilities::PrepareQuery
  u.result_basic = XenoCantoUtilities::ResultBasic
  u.result_body = XenoCantoUtilities::ResultBody
  u.result_headers = XenoCantoUtilities::ResultHeaders
  u.transform_request = XenoCantoUtilities::TransformRequest
  u.transform_response = XenoCantoUtilities::TransformResponse
}
