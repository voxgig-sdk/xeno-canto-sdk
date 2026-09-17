# XenoCanto Python SDK



The Python SDK for the XenoCanto API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Recording()` — each
carrying a small, uniform set of operations (`list`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/xeno-canto-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from xenocanto_sdk import XenoCantoSDK

client = XenoCantoSDK({
    "apikey": os.environ.get("XENO_CANTO_APIKEY"),
})
```

### 2. List recording records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    recordings = client.Recording().list({"key": "example", "query": "example"})
    for recording in recordings:
        print(recording)
except Exception as err:
    print(f"list failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    recordings = client.Recording().list()
    print(recordings)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = XenoCantoSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
recording = client.Recording().list()
# recording contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = XenoCantoSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
XENO_CANTO_TEST_LIVE=TRUE
XENO_CANTO_APIKEY=<your-key>
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### XenoCantoSDK

```python
from xenocanto_sdk import XenoCantoSDK

client = XenoCantoSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = XenoCantoSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### XenoCantoSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Recording` | `(data) -> RecordingEntity` | Create a Recording entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### Recording

| Field | Description |
| --- | --- |
| `also` | Identified background species in the recording |
| `alt` | Altitude at which the recording was made |
| `animalseen` | Was the recorded animal seen? |
| `auto` | Automatic (non-supervised) recording? |
| `cnt` | Country where the recording was made |
| `date` | Date that the recording was made |
| `dvc` | Recording device used |
| `en` | English name of the species |
| `file` | URL to the audio file |
| `filename` | Original file name of the audio file |
| `gen` | Generic name of the species |
| `grp` | Group to which the species belongs |
| `id` | Catalogue number of the recording on xeno-canto |
| `lat` | Latitude of the recording in decimal coordinates |
| `length` | Length of the recording in minutes |
| `lic` | URL describing the license of this recording |
| `loc` | Name of the locality |
| `lon` | Longitude of the recording in decimal coordinates |
| `method` | Recording method (field recording, in the hand, etc.) |
| `mic` | Microphone used |
| `osci` | URLs to the three versions of oscillograms |
| `playbackused` | Was playback used to lure the animal? |
| `q` | Current quality rating for the recording |
| `rec` | Name of the recordist |
| `regnr` | Registration number of specimen (when collected) |
| `rmk` | Additional remarks by the recordist |
| `sex` | Sex of the animal |
| `smp` | Sample rate |
| `sono` | URLs to the four versions of sonograms |
| `sp` | Specific name (epithet) of the species |
| `ssp` | Subspecies name (subspecific epithet) |
| `stage` | Life stage of the animal (adult, juvenile, etc.) |
| `temp` | Temperature during recording (applicable to specific groups only) |
| `time` | Time of day that the recording was made |
| `type` | Sound type of the recording (e.g., call, song) |
| `uploaded` | Date that the recording was uploaded to xeno-canto |
| `url` | URL specifying the details of this recording |

Operations: List.

API path: `/recordings`



## Entities


### Recording

Create an instance: `recording = client.Recording()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `also` | `list` | Identified background species in the recording |
| `alt` | `str` | Altitude at which the recording was made |
| `animalseen` | `str` | Was the recorded animal seen? |
| `auto` | `str` | Automatic (non-supervised) recording? |
| `cnt` | `str` | Country where the recording was made |
| `date` | `str` | Date that the recording was made |
| `dvc` | `str` | Recording device used |
| `en` | `str` | English name of the species |
| `file` | `str` | URL to the audio file |
| `filename` | `str` | Original file name of the audio file |
| `gen` | `str` | Generic name of the species |
| `grp` | `str` | Group to which the species belongs |
| `id` | `str` | Catalogue number of the recording on xeno-canto |
| `lat` | `str` | Latitude of the recording in decimal coordinates |
| `length` | `str` | Length of the recording in minutes |
| `lic` | `str` | URL describing the license of this recording |
| `loc` | `str` | Name of the locality |
| `lon` | `str` | Longitude of the recording in decimal coordinates |
| `method` | `str` | Recording method (field recording, in the hand, etc.) |
| `mic` | `str` | Microphone used |
| `osci` | `dict` | URLs to the three versions of oscillograms |
| `playbackused` | `str` | Was playback used to lure the animal? |
| `q` | `str` | Current quality rating for the recording |
| `rec` | `str` | Name of the recordist |
| `regnr` | `str` | Registration number of specimen (when collected) |
| `rmk` | `str` | Additional remarks by the recordist |
| `sex` | `str` | Sex of the animal |
| `smp` | `str` | Sample rate |
| `sono` | `dict` | URLs to the four versions of sonograms |
| `sp` | `str` | Specific name (epithet) of the species |
| `ssp` | `str` | Subspecies name (subspecific epithet) |
| `stage` | `str` | Life stage of the animal (adult, juvenile, etc.) |
| `temp` | `str` | Temperature during recording (applicable to specific groups only) |
| `time` | `str` | Time of day that the recording was made |
| `type` | `str` | Sound type of the recording (e.g., call, song) |
| `uploaded` | `str` | Date that the recording was uploaded to xeno-canto |
| `url` | `str` | URL specifying the details of this recording |

#### Example: List

```python
recordings = client.Recording().list({"key": "example", "query": "example"})
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── xenocanto_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`xenocanto_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
recording = client.Recording()
recording.list()

# recording.data_get() now returns the recording data from the last list
# recording.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
