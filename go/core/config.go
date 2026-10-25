package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "XenoCanto",
			"slug": "xeno-canto",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"now": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://xeno-canto.org/api/3",
			"auth": map[string]any{
				"prefix": "",
				"in": "query",
				"name": "key",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"recording": map[string]any{},
			},
		},
		"entity": map[string]any{
			"recording": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "also",
						"title": "Also",
						"type": "`$ARRAY`",
						"short": "Identified background species in the recording",
					},
					map[string]any{
						"name": "alt",
						"title": "Alt",
						"type": "`$STRING`",
						"short": "Altitude at which the recording was made",
					},
					map[string]any{
						"name": "animalseen",
						"title": "Animalseen",
						"type": "`$STRING`",
						"short": "Was the recorded animal seen?",
					},
					map[string]any{
						"name": "auto",
						"title": "Auto",
						"type": "`$STRING`",
						"short": "Automatic (non-supervised) recording?",
					},
					map[string]any{
						"name": "cnt",
						"title": "Cnt",
						"type": "`$STRING`",
						"short": "Country where the recording was made",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"short": "Date that the recording was made",
					},
					map[string]any{
						"name": "dvc",
						"title": "Dvc",
						"type": "`$STRING`",
						"short": "Recording device used",
					},
					map[string]any{
						"name": "en",
						"title": "En",
						"type": "`$STRING`",
						"short": "English name of the species",
					},
					map[string]any{
						"name": "file",
						"title": "File",
						"type": "`$STRING`",
						"short": "URL to the audio file",
					},
					map[string]any{
						"name": "filename",
						"title": "Filename",
						"type": "`$STRING`",
						"short": "Original file name of the audio file",
					},
					map[string]any{
						"name": "gen",
						"title": "Gen",
						"type": "`$STRING`",
						"short": "Generic name of the species",
					},
					map[string]any{
						"name": "grp",
						"title": "Grp",
						"type": "`$STRING`",
						"short": "Group to which the species belongs",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Catalogue number of the recording on xeno-canto",
					},
					map[string]any{
						"name": "lat",
						"title": "Lat",
						"type": "`$STRING`",
						"short": "Latitude of the recording in decimal coordinates",
					},
					map[string]any{
						"name": "length",
						"title": "Length",
						"type": "`$STRING`",
						"short": "Length of the recording in minutes",
					},
					map[string]any{
						"name": "lic",
						"title": "Lic",
						"type": "`$STRING`",
						"short": "URL describing the license of this recording",
					},
					map[string]any{
						"name": "loc",
						"title": "Loc",
						"type": "`$STRING`",
						"short": "Name of the locality",
					},
					map[string]any{
						"name": "lon",
						"title": "Lon",
						"type": "`$STRING`",
						"short": "Longitude of the recording in decimal coordinates",
					},
					map[string]any{
						"name": "method",
						"title": "Method",
						"type": "`$STRING`",
						"short": "Recording method (field recording, in the hand, etc.)",
					},
					map[string]any{
						"name": "mic",
						"title": "Mic",
						"type": "`$STRING`",
						"short": "Microphone used",
					},
					map[string]any{
						"name": "osci",
						"title": "Osci",
						"type": "`$OBJECT`",
						"short": "URLs to the three versions of oscillograms",
					},
					map[string]any{
						"name": "playbackused",
						"title": "Playbackused",
						"type": "`$STRING`",
						"short": "Was playback used to lure the animal?",
					},
					map[string]any{
						"name": "q",
						"title": "Q",
						"type": "`$STRING`",
						"short": "Current quality rating for the recording",
					},
					map[string]any{
						"name": "rec",
						"title": "Rec",
						"type": "`$STRING`",
						"short": "Name of the recordist",
					},
					map[string]any{
						"name": "regnr",
						"title": "Regnr",
						"type": "`$STRING`",
						"short": "Registration number of specimen (when collected)",
					},
					map[string]any{
						"name": "rmk",
						"title": "Rmk",
						"type": "`$STRING`",
						"short": "Additional remarks by the recordist",
					},
					map[string]any{
						"name": "sex",
						"title": "Sex",
						"type": "`$STRING`",
						"short": "Sex of the animal",
					},
					map[string]any{
						"name": "smp",
						"title": "Smp",
						"type": "`$STRING`",
						"short": "Sample rate",
					},
					map[string]any{
						"name": "sono",
						"title": "Sono",
						"type": "`$OBJECT`",
						"short": "URLs to the four versions of sonograms",
					},
					map[string]any{
						"name": "sp",
						"title": "Sp",
						"type": "`$STRING`",
						"short": "Specific name (epithet) of the species",
					},
					map[string]any{
						"name": "ssp",
						"title": "Ssp",
						"type": "`$STRING`",
						"short": "Subspecies name (subspecific epithet)",
					},
					map[string]any{
						"name": "stage",
						"title": "Stage",
						"type": "`$STRING`",
						"short": "Life stage of the animal (adult, juvenile, etc.)",
					},
					map[string]any{
						"name": "temp",
						"title": "Temp",
						"type": "`$STRING`",
						"short": "Temperature during recording (applicable to specific groups only)",
					},
					map[string]any{
						"name": "time",
						"title": "Time",
						"type": "`$STRING`",
						"short": "Time of day that the recording was made",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "Sound type of the recording (e.g., call, song)",
					},
					map[string]any{
						"name": "uploaded",
						"title": "Uploaded",
						"type": "`$STRING`",
						"short": "Date that the recording was uploaded to xeno-canto",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "URL specifying the details of this recording",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "recording",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/recordings",
								"segments": []any{
									map[string]any{
										"lit": "recordings",
									},
								},
								"parts": []any{
									"recordings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.recordings`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "key",
											"orig": "key",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "sp:\"larus fuscus\"",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"key",
										"query",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
