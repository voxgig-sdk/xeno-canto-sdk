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
| `also` | `[]any` | No | Identified background species in the recording |
| `alt` | `string` | No | Altitude at which the recording was made |
| `animalseen` | `string` | No | Was the recorded animal seen? |
| `auto` | `string` | No | Automatic (non-supervised) recording? |
| `cnt` | `string` | No | Country where the recording was made |
| `date` | `string` | No | Date that the recording was made |
| `dvc` | `string` | No | Recording device used |
| `en` | `string` | No | English name of the species |
| `file` | `string` | No | URL to the audio file |
| `filename` | `string` | No | Original file name of the audio file |
| `gen` | `string` | No | Generic name of the species |
| `grp` | `string` | No | Group to which the species belongs |
| `id` | `string` | No | Catalogue number of the recording on xeno-canto |
| `lat` | `string` | No | Latitude of the recording in decimal coordinates |
| `length` | `string` | No | Length of the recording in minutes |
| `lic` | `string` | No | URL describing the license of this recording |
| `loc` | `string` | No | Name of the locality |
| `lon` | `string` | No | Longitude of the recording in decimal coordinates |
| `method` | `string` | No | Recording method (field recording, in the hand, etc.) |
| `mic` | `string` | No | Microphone used |
| `osci` | `map[string]any` | No | URLs to the three versions of oscillograms |
| `playbackused` | `string` | No | Was playback used to lure the animal? |
| `q` | `string` | No | Current quality rating for the recording |
| `rec` | `string` | No | Name of the recordist |
| `regnr` | `string` | No | Registration number of specimen (when collected) |
| `rmk` | `string` | No | Additional remarks by the recordist |
| `sex` | `string` | No | Sex of the animal |
| `smp` | `string` | No | Sample rate |
| `sono` | `map[string]any` | No | URLs to the four versions of sonograms |
| `sp` | `string` | No | Specific name (epithet) of the species |
| `ssp` | `string` | No | Subspecies name (subspecific epithet) |
| `stage` | `string` | No | Life stage of the animal (adult, juvenile, etc.) |
| `temp` | `string` | No | Temperature during recording (applicable to specific groups only) |
| `time` | `string` | No | Time of day that the recording was made |
| `type` | `string` | No | Sound type of the recording (e.g., call, song) |
| `uploaded` | `string` | No | Date that the recording was uploaded to xeno-canto |
| `url` | `string` | No | URL specifying the details of this recording |

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

