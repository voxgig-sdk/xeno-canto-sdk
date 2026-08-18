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
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "alt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "animalseen",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auto",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cnt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dvc",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "en",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "file",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "filename",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gen",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "grp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lat",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "length",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lic",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "loc",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "method",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mic",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "osci",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "playbackused",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "q",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rec",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "regnr",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rmk",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sex",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "smp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sono",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ssp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "temp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "time",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uploaded",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
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
