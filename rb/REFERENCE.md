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
| `also` | `Array` | No | Identified background species in the recording |
| `alt` | `String` | No | Altitude at which the recording was made |
| `animalseen` | `String` | No | Was the recorded animal seen? |
| `auto` | `String` | No | Automatic (non-supervised) recording? |
| `cnt` | `String` | No | Country where the recording was made |
| `date` | `String` | No | Date that the recording was made |
| `dvc` | `String` | No | Recording device used |
| `en` | `String` | No | English name of the species |
| `file` | `String` | No | URL to the audio file |
| `filename` | `String` | No | Original file name of the audio file |
| `gen` | `String` | No | Generic name of the species |
| `grp` | `String` | No | Group to which the species belongs |
| `id` | `String` | No | Catalogue number of the recording on xeno-canto |
| `lat` | `String` | No | Latitude of the recording in decimal coordinates |
| `length` | `String` | No | Length of the recording in minutes |
| `lic` | `String` | No | URL describing the license of this recording |
| `loc` | `String` | No | Name of the locality |
| `lon` | `String` | No | Longitude of the recording in decimal coordinates |
| `method` | `String` | No | Recording method (field recording, in the hand, etc.) |
| `mic` | `String` | No | Microphone used |
| `osci` | `Hash` | No | URLs to the three versions of oscillograms |
| `playbackused` | `String` | No | Was playback used to lure the animal? |
| `q` | `String` | No | Current quality rating for the recording |
| `rec` | `String` | No | Name of the recordist |
| `regnr` | `String` | No | Registration number of specimen (when collected) |
| `rmk` | `String` | No | Additional remarks by the recordist |
| `sex` | `String` | No | Sex of the animal |
| `smp` | `String` | No | Sample rate |
| `sono` | `Hash` | No | URLs to the four versions of sonograms |
| `sp` | `String` | No | Specific name (epithet) of the species |
| `ssp` | `String` | No | Subspecies name (subspecific epithet) |
| `stage` | `String` | No | Life stage of the animal (adult, juvenile, etc.) |
| `temp` | `String` | No | Temperature during recording (applicable to specific groups only) |
| `time` | `String` | No | Time of day that the recording was made |
| `type` | `String` | No | Sound type of the recording (e.g., call, song) |
| `uploaded` | `String` | No | Date that the recording was uploaded to xeno-canto |
| `url` | `String` | No | URL specifying the details of this recording |

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

