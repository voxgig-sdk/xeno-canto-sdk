package voxgigxenocantosdk

import (
	"github.com/voxgig-sdk/xeno-canto-sdk/go/core"
	"github.com/voxgig-sdk/xeno-canto-sdk/go/entity"
	"github.com/voxgig-sdk/xeno-canto-sdk/go/feature"
	_ "github.com/voxgig-sdk/xeno-canto-sdk/go/utility"
)

// Type aliases preserve external API.
type XenoCantoSDK = core.XenoCantoSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type XenoCantoEntity = core.XenoCantoEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type XenoCantoError = core.XenoCantoError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewRecordingEntityFunc = func(client *core.XenoCantoSDK, entopts map[string]any) core.XenoCantoEntity {
		return entity.NewRecordingEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewXenoCantoSDK = core.NewXenoCantoSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewXenoCantoSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *XenoCantoSDK  { return NewXenoCantoSDK(nil) }
func Test() *XenoCantoSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
