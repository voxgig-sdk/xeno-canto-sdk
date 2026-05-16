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

#### `sdk.test(testopts, sdkopts)`

Create a test client with mock features active. Both arguments may be `nil`.

```lua
local client = sdk.test(nil, nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Recording(nil):list(nil, nil)
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

