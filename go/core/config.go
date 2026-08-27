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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://xeno-canto.org/api/3",
			"auth": map[string]any{
				"prefix": "",
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
						"short": "Identified background species in the recording",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "alt",
						"short": "Altitude at which the recording was made",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "animalseen",
						"short": "Was the recorded animal seen?",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auto",
						"short": "Automatic (non-supervised) recording?",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cnt",
						"short": "Country where the recording was made",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "date",
						"short": "Date that the recording was made",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dvc",
						"short": "Recording device used",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "en",
						"short": "English name of the species",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "file",
						"short": "URL to the audio file",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "filename",
						"short": "Original file name of the audio file",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gen",
						"short": "Generic name of the species",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "grp",
						"short": "Group to which the species belongs",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Catalogue number of the recording on xeno-canto",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lat",
						"short": "Latitude of the recording in decimal coordinates",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "length",
						"short": "Length of the recording in minutes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lic",
						"short": "URL describing the license of this recording",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "loc",
						"short": "Name of the locality",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lon",
						"short": "Longitude of the recording in decimal coordinates",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "method",
						"short": "Recording method (field recording, in the hand, etc.)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mic",
						"short": "Microphone used",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "osci",
						"short": "URLs to the three versions of oscillograms",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "playbackused",
						"short": "Was playback used to lure the animal?",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "q",
						"short": "Current quality rating for the recording",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rec",
						"short": "Name of the recordist",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "regnr",
						"short": "Registration number of specimen (when collected)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rmk",
						"short": "Additional remarks by the recordist",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sex",
						"short": "Sex of the animal",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "smp",
						"short": "Sample rate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sono",
						"short": "URLs to the four versions of sonograms",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sp",
						"short": "Specific name (epithet) of the species",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ssp",
						"short": "Subspecies name (subspecific epithet)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stage",
						"short": "Life stage of the animal (adult, juvenile, etc.)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "temp",
						"short": "Temperature during recording (applicable to specific groups only)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "time",
						"short": "Time of day that the recording was made",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Sound type of the recording (e.g., call, song)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uploaded",
						"short": "Date that the recording was uploaded to xeno-canto",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "URL specifying the details of this recording",
						"type": "`$STRING`",
					},
				},
				"name": "recording",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "key",
											"orig": "key",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "sp:\"larus fuscus\"",
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/recordings",
								"parts": []any{
									"recordings",
								},
								"select": map[string]any{
									"exist": []any{
										"key",
										"page",
										"per_page",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.recordings`",
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
