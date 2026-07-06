# XenoCanto Ruby SDK Reference

Complete API reference for the XenoCanto Ruby SDK.


## XenoCantoSDK

### Constructor

```ruby
require_relative 'XenoCanto_sdk'

client = XenoCantoSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `XenoCantoSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = XenoCantoSDK.test
```


### Instance Methods

#### `Recording(data = nil)`

Create a new `Recording` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## RecordingEntity

```ruby
recording = client.Recording
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `also` | `Array` | No |  |
| `alt` | `String` | No |  |
| `animal_seen` | `String` | No |  |
| `auto` | `String` | No |  |
| `cnt` | `String` | No |  |
| `date` | `String` | No |  |
| `dvc` | `String` | No |  |
| `en` | `String` | No |  |
| `file` | `String` | No |  |
| `file_name` | `String` | No |  |
| `gen` | `String` | No |  |
| `grp` | `String` | No |  |
| `id` | `String` | No |  |
| `lat` | `String` | No |  |
| `length` | `String` | No |  |
| `lic` | `String` | No |  |
| `loc` | `String` | No |  |
| `lon` | `String` | No |  |
| `method` | `String` | No |  |
| `mic` | `String` | No |  |
| `osci` | `Hash` | No |  |
| `playback_used` | `String` | No |  |
| `q` | `String` | No |  |
| `rec` | `String` | No |  |
| `regnr` | `String` | No |  |
| `rmk` | `String` | No |  |
| `sex` | `String` | No |  |
| `smp` | `String` | No |  |
| `sono` | `Hash` | No |  |
| `sp` | `String` | No |  |
| `ssp` | `String` | No |  |
| `stage` | `String` | No |  |
| `temp` | `String` | No |  |
| `time` | `String` | No |  |
| `type` | `String` | No |  |
| `uploaded` | `String` | No |  |
| `url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Recording.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RecordingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = XenoCantoSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

