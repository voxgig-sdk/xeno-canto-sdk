package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewRecordingEntityFunc func(client *XenoCantoSDK, entopts map[string]any) XenoCantoEntity

