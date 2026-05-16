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

#### `TestSDK(testopts, sdkopts map[string]any) *XenoCantoSDK`

Create a test client with mock features active. Both arguments may be `nil`.

```go
client := sdk.TestSDK(nil, nil)
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
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `also` | ``$ARRAY`` | No |  |
| `alt` | ``$STRING`` | No |  |
| `animal_seen` | ``$STRING`` | No |  |
| `auto` | ``$STRING`` | No |  |
| `cnt` | ``$STRING`` | No |  |
| `date` | ``$STRING`` | No |  |
| `dvc` | ``$STRING`` | No |  |
| `en` | ``$STRING`` | No |  |
| `file` | ``$STRING`` | No |  |
| `file_name` | ``$STRING`` | No |  |
| `gen` | ``$STRING`` | No |  |
| `grp` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `lat` | ``$STRING`` | No |  |
| `length` | ``$STRING`` | No |  |
| `lic` | ``$STRING`` | No |  |
| `loc` | ``$STRING`` | No |  |
| `lon` | ``$STRING`` | No |  |
| `method` | ``$STRING`` | No |  |
| `mic` | ``$STRING`` | No |  |
| `osci` | ``$OBJECT`` | No |  |
| `playback_used` | ``$STRING`` | No |  |
| `q` | ``$STRING`` | No |  |
| `rec` | ``$STRING`` | No |  |
| `regnr` | ``$STRING`` | No |  |
| `rmk` | ``$STRING`` | No |  |
| `sex` | ``$STRING`` | No |  |
| `smp` | ``$STRING`` | No |  |
| `sono` | ``$OBJECT`` | No |  |
| `sp` | ``$STRING`` | No |  |
| `ssp` | ``$STRING`` | No |  |
| `stage` | ``$STRING`` | No |  |
| `temp` | ``$STRING`` | No |  |
| `time` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |
| `uploaded` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Recording(nil).List(nil, nil)
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

