# XenoCanto Python SDK Reference

Complete API reference for the XenoCanto Python SDK.


## XenoCantoSDK

### Constructor

```python
from xeno-canto_sdk import XenoCantoSDK

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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.Recording().list({})
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

