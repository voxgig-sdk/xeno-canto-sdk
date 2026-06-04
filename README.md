# XenoCanto SDK

Search a community-curated collection of bird and wildlife sound recordings from around the world

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Xeno-canto API

[Xeno-canto](https://xeno-canto.org/) is a collaborative project that collects, shares, and archives wildlife sound recordings, with a primary focus on bird vocalizations contributed by recordists worldwide. The API at `https://xeno-canto.org/api/3` exposes the catalogue programmatically as JSON.

What you get from the API:

- Search recordings by species, family, country, year, and other taxonomic or location filters
- Recording metadata such as species name, recordist, location, date, and audio file URLs
- Paginated JSON responses suitable for use in research, apps, and citizen-science tools

The v3 API requires a per-request API key parameter. CORS is enabled, so the endpoint can be called directly from browser-based applications. Most recordings are contributed under Creative Commons licences chosen by each recordist, so attribution and licence terms should be checked per recording.

## Try it

**TypeScript**
```bash
npm install xeno-canto
```

**Python**
```bash
pip install xeno-canto-sdk
```

**PHP**
```bash
composer require voxgig/xeno-canto-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/xeno-canto-sdk/go
```

**Ruby**
```bash
gem install xeno-canto-sdk
```

**Lua**
```bash
luarocks install xeno-canto-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { XenoCantoSDK } from 'xeno-canto'

const client = new XenoCantoSDK({})

// List all recordings
const recordings = await client.Recording().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o xeno-canto-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "xeno-canto": {
      "command": "/abs/path/to/xeno-canto-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Recording** | A single wildlife sound recording with metadata (species, recordist, location, date, audio URL) retrieved from the recordings query endpoint. | `/recordings` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from xenocanto_sdk import XenoCantoSDK

client = XenoCantoSDK({})

# List all recordings
recordings, err = client.Recording(None).list(None, None)
```

### PHP

```php
<?php
require_once 'xenocanto_sdk.php';

$client = new XenoCantoSDK([]);

// List all recordings
[$recordings, $err] = $client->Recording(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/xeno-canto-sdk/go"

client := sdk.NewXenoCantoSDK(map[string]any{})

// List all recordings
recordings, err := client.Recording(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "XenoCanto_sdk"

client = XenoCantoSDK.new({})

# List all recordings
recordings, err = client.Recording(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("xeno-canto_sdk")

local client = sdk.new({})

-- List all recordings
local recordings, err = client:Recording(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = XenoCantoSDK.test()
const result = await client.Recording().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = XenoCantoSDK.test(None, None)
result, err = client.Recording(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = XenoCantoSDK::test(null, null);
[$result, $err] = $client->Recording(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Recording(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = XenoCantoSDK.test(nil, nil)
result, err = client.Recording(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Recording(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Xeno-canto API

- Upstream: [https://xeno-canto.org/](https://xeno-canto.org/)
- API docs: [https://xeno-canto.org/explore/api](https://xeno-canto.org/explore/api)

---

Generated from the Xeno-canto API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
