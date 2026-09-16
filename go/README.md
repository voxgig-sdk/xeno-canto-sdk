# XenoCanto Golang SDK



The Golang SDK for the XenoCanto API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Recording(nil)` — each with the same small set of operations (`List`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/xeno-canto-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/xeno-canto-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/xeno-canto-sdk/go=../xeno-canto-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/xeno-canto-sdk/go"
)

func main() {
    client := sdk.NewXenoCantoSDK(map[string]any{
        "apikey": os.Getenv("XENO_CANTO_APIKEY"),
    })

    // List recording records — the value is the array of records itself.
    recordings, err := client.Recording(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range recordings.([]any) {
        fmt.Println(item)
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
recordings, err := client.Recording(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = recordings
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

recording, err := client.Recording(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(recording) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewXenoCantoSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewXenoCantoSDK

```go
func NewXenoCantoSDK(options map[string]any) *XenoCantoSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *XenoCantoSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### XenoCantoSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Recording` | `(data map[string]any) XenoCantoEntity` | Create a Recording entity instance. |

### Entity interface (XenoCantoEntity)

All entities implement the `XenoCantoEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    recording, err := client.Recording(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // recording is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Recording

| Field | Description |
| --- | --- |
| `"also"` | Identified background species in the recording |
| `"alt"` | Altitude at which the recording was made |
| `"animalseen"` | Was the recorded animal seen? |
| `"auto"` | Automatic (non-supervised) recording? |
| `"cnt"` | Country where the recording was made |
| `"date"` | Date that the recording was made |
| `"dvc"` | Recording device used |
| `"en"` | English name of the species |
| `"file"` | URL to the audio file |
| `"filename"` | Original file name of the audio file |
| `"gen"` | Generic name of the species |
| `"grp"` | Group to which the species belongs |
| `"id"` | Catalogue number of the recording on xeno-canto |
| `"lat"` | Latitude of the recording in decimal coordinates |
| `"length"` | Length of the recording in minutes |
| `"lic"` | URL describing the license of this recording |
| `"loc"` | Name of the locality |
| `"lon"` | Longitude of the recording in decimal coordinates |
| `"method"` | Recording method (field recording, in the hand, etc.) |
| `"mic"` | Microphone used |
| `"osci"` | URLs to the three versions of oscillograms |
| `"playbackused"` | Was playback used to lure the animal? |
| `"q"` | Current quality rating for the recording |
| `"rec"` | Name of the recordist |
| `"regnr"` | Registration number of specimen (when collected) |
| `"rmk"` | Additional remarks by the recordist |
| `"sex"` | Sex of the animal |
| `"smp"` | Sample rate |
| `"sono"` | URLs to the four versions of sonograms |
| `"sp"` | Specific name (epithet) of the species |
| `"ssp"` | Subspecies name (subspecific epithet) |
| `"stage"` | Life stage of the animal (adult, juvenile, etc.) |
| `"temp"` | Temperature during recording (applicable to specific groups only) |
| `"time"` | Time of day that the recording was made |
| `"type"` | Sound type of the recording (e.g., call, song) |
| `"uploaded"` | Date that the recording was uploaded to xeno-canto |
| `"url"` | URL specifying the details of this recording |

Operations: List.

API path: `/recordings`



## Entities


### Recording

Create an instance: `recording := client.Recording(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `also` | `[]any` | Identified background species in the recording |
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
| `osci` | `map[string]any` | URLs to the three versions of oscillograms |
| `playbackused` | `string` | Was playback used to lure the animal? |
| `q` | `string` | Current quality rating for the recording |
| `rec` | `string` | Name of the recordist |
| `regnr` | `string` | Registration number of specimen (when collected) |
| `rmk` | `string` | Additional remarks by the recordist |
| `sex` | `string` | Sex of the animal |
| `smp` | `string` | Sample rate |
| `sono` | `map[string]any` | URLs to the four versions of sonograms |
| `sp` | `string` | Specific name (epithet) of the species |
| `ssp` | `string` | Subspecies name (subspecific epithet) |
| `stage` | `string` | Life stage of the animal (adult, juvenile, etc.) |
| `temp` | `string` | Temperature during recording (applicable to specific groups only) |
| `time` | `string` | Time of day that the recording was made |
| `type` | `string` | Sound type of the recording (e.g., call, song) |
| `uploaded` | `string` | Date that the recording was uploaded to xeno-canto |
| `url` | `string` | URL specifying the details of this recording |

#### Example: List

```go
recordings, err := client.Recording(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(recordings) // the array of records
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/xeno-canto-sdk/go/
├── xeno-canto.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/xeno-canto-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
recording := client.Recording(nil)
recording.List(nil, nil)

// recording.Data() now returns the recording data from the last list
// recording.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
