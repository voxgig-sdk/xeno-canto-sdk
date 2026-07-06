# XenoCanto Lua SDK Reference

Complete API reference for the XenoCanto Lua SDK.


## XenoCantoSDK

### Constructor

```lua
local sdk = require("xeno-canto_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Recording(data)`

Create a new `Recording` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## RecordingEntity

```lua
local recording = client:Recording(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `also` | `table` | No |  |
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
| `osci` | `table` | No |  |
| `playback_used` | `string` | No |  |
| `q` | `string` | No |  |
| `rec` | `string` | No |  |
| `regnr` | `string` | No |  |
| `rmk` | `string` | No |  |
| `sex` | `string` | No |  |
| `smp` | `string` | No |  |
| `sono` | `table` | No |  |
| `sp` | `string` | No |  |
| `ssp` | `string` | No |  |
| `stage` | `string` | No |  |
| `temp` | `string` | No |  |
| `time` | `string` | No |  |
| `type` | `string` | No |  |
| `uploaded` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Recording():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RecordingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

