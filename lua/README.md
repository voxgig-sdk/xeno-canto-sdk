# XenoCanto Lua SDK



The Lua SDK for the XenoCanto API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Recording()` — each with the same small set of operations (`list`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/xeno-canto-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("xeno-canto_sdk")

local client = sdk.new({
  apikey = os.getenv("XENO_CANTO_APIKEY"),
})
```

### 2. List recording records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local recordings, err = client:Recording():list()
if err then error(err) end

for _, item in ipairs(recordings) do
  print(item["id"], item["alt"])
end
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local recordings, err = client:Recording():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Recording():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### XenoCantoSDK

```lua
local sdk = require("xeno-canto_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### XenoCantoSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Recording` | `(data) -> RecordingEntity` | Create a Recording entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local recording, err = client:Recording():list()
    if err then error(err) end
    -- recording is the record list

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local recording = client:Recording(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `also` | `table` | Identified background species in the recording |
| `alt` | `string` | Altitude at which the recording was made |
| `animalseen` | `string` | Was the recorded animal seen? |
| `auto` | `string` | Automatic (non-supervised) recording? |
| `cnt` | `string` | Country where the recording was made |
| `date` | `string` | Date that the recording was made |
| `dvc` | `string` | Recording device used |
| `en` | `string` | English name of the species |
| `file` | `string` | URL to the audio file |
| `filename` | `string` | Original file name of the audio file |
| `gen` | `string` | Generic name of the species |
| `grp` | `string` | Group to which the species belongs |
| `id` | `string` | Catalogue number of the recording on xeno-canto |
| `lat` | `string` | Latitude of the recording in decimal coordinates |
| `length` | `string` | Length of the recording in minutes |
| `lic` | `string` | URL describing the license of this recording |
| `loc` | `string` | Name of the locality |
| `lon` | `string` | Longitude of the recording in decimal coordinates |
| `method` | `string` | Recording method (field recording, in the hand, etc.) |
| `mic` | `string` | Microphone used |
| `osci` | `table` | URLs to the three versions of oscillograms |
| `playbackused` | `string` | Was playback used to lure the animal? |
| `q` | `string` | Current quality rating for the recording |
| `rec` | `string` | Name of the recordist |
| `regnr` | `string` | Registration number of specimen (when collected) |
| `rmk` | `string` | Additional remarks by the recordist |
| `sex` | `string` | Sex of the animal |
| `smp` | `string` | Sample rate |
| `sono` | `table` | URLs to the four versions of sonograms |
| `sp` | `string` | Specific name (epithet) of the species |
| `ssp` | `string` | Subspecies name (subspecific epithet) |
| `stage` | `string` | Life stage of the animal (adult, juvenile, etc.) |
| `temp` | `string` | Temperature during recording (applicable to specific groups only) |
| `time` | `string` | Time of day that the recording was made |
| `type` | `string` | Sound type of the recording (e.g., call, song) |
| `uploaded` | `string` | Date that the recording was uploaded to xeno-canto |
| `url` | `string` | URL specifying the details of this recording |

#### Example: List

```lua
local recordings, err = client:Recording():list()
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── xeno-canto_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`xeno-canto_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local recording = client:Recording()
recording:list()

-- recording:data_get() now returns the recording data from the last list
-- recording:match_get() returns the last match criteria
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
