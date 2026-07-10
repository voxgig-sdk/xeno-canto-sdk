# XenoCanto Golang SDK Reference

Complete API reference for the XenoCanto Golang SDK.


## XenoCantoSDK

### Constructor

```go
func NewXenoCantoSDK(options map[string]any) *XenoCantoSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *XenoCantoSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *XenoCantoSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Recording(data map[string]any) XenoCantoEntity`

Create a new `Recording` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## RecordingEntity

```go
recording := client.Recording(nil)
fmt.Println(recording.GetName()) // "recording"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `also` | `[]any` | No |  |
| `alt` | `string` | No |  |
| `animal_seen` | `string` | No |  |
| `auto` | `string` | No |  |
| `cnt` | `string` | No |  |
| `date` | `string` | No |  |
| `dvc` | `string` | No |  |
| `en` | `string` | No |  |
| `file` | `string` | No |  |
| `file_name` | `string` | No |  |
| `gen` | `string` | No |  |
| `grp` | `string` | No |  |
| `id` | `string` | No |  |
| `lat` | `string` | No |  |
| `length` | `string` | No |  |
| `lic` | `string` | No |  |
| `loc` | `string` | No |  |
| `lon` | `string` | No |  |
| `method` | `string` | No |  |
| `mic` | `string` | No |  |
| `osci` | `map[string]any` | No |  |
| `playback_used` | `string` | No |  |
| `q` | `string` | No |  |
| `rec` | `string` | No |  |
| `regnr` | `string` | No |  |
| `rmk` | `string` | No |  |
| `sex` | `string` | No |  |
| `smp` | `string` | No |  |
| `sono` | `map[string]any` | No |  |
| `sp` | `string` | No |  |
| `ssp` | `string` | No |  |
| `stage` | `string` | No |  |
| `temp` | `string` | No |  |
| `time` | `string` | No |  |
| `type` | `string` | No |  |
| `uploaded` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Recording(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RecordingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewXenoCantoSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

