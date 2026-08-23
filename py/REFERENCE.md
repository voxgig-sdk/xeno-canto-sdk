# XenoCanto Python SDK Reference

Complete API reference for the XenoCanto Python SDK.


## XenoCantoSDK

### Constructor

```python
from xenocanto_sdk import XenoCantoSDK

client = XenoCantoSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `XenoCantoSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = XenoCantoSDK.test()
```


### Instance Methods

#### `Recording(data=None)`

Create a new `RecordingEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## RecordingEntity

```python
recording = client.Recording()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `also` | `list` | No | Identified background species in the recording |
| `alt` | `str` | No | Altitude at which the recording was made |
| `animalseen` | `str` | No | Was the recorded animal seen? |
| `auto` | `str` | No | Automatic (non-supervised) recording? |
| `cnt` | `str` | No | Country where the recording was made |
| `date` | `str` | No | Date that the recording was made |
| `dvc` | `str` | No | Recording device used |
| `en` | `str` | No | English name of the species |
| `file` | `str` | No | URL to the audio file |
| `filename` | `str` | No | Original file name of the audio file |
| `gen` | `str` | No | Generic name of the species |
| `grp` | `str` | No | Group to which the species belongs |
| `id` | `str` | No | Catalogue number of the recording on xeno-canto |
| `lat` | `str` | No | Latitude of the recording in decimal coordinates |
| `length` | `str` | No | Length of the recording in minutes |
| `lic` | `str` | No | URL describing the license of this recording |
| `loc` | `str` | No | Name of the locality |
| `lon` | `str` | No | Longitude of the recording in decimal coordinates |
| `method` | `str` | No | Recording method (field recording, in the hand, etc.) |
| `mic` | `str` | No | Microphone used |
| `osci` | `dict` | No | URLs to the three versions of oscillograms |
| `playbackused` | `str` | No | Was playback used to lure the animal? |
| `q` | `str` | No | Current quality rating for the recording |
| `rec` | `str` | No | Name of the recordist |
| `regnr` | `str` | No | Registration number of specimen (when collected) |
| `rmk` | `str` | No | Additional remarks by the recordist |
| `sex` | `str` | No | Sex of the animal |
| `smp` | `str` | No | Sample rate |
| `sono` | `dict` | No | URLs to the four versions of sonograms |
| `sp` | `str` | No | Specific name (epithet) of the species |
| `ssp` | `str` | No | Subspecies name (subspecific epithet) |
| `stage` | `str` | No | Life stage of the animal (adult, juvenile, etc.) |
| `temp` | `str` | No | Temperature during recording (applicable to specific groups only) |
| `time` | `str` | No | Time of day that the recording was made |
| `type` | `str` | No | Sound type of the recording (e.g., call, song) |
| `uploaded` | `str` | No | Date that the recording was uploaded to xeno-canto |
| `url` | `str` | No | URL specifying the details of this recording |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Recording().list()
for recording in results:
    print(recording)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RecordingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = XenoCantoSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

