# XenoCanto TypeScript SDK Reference

Complete API reference for the XenoCanto TypeScript SDK.


## XenoCantoSDK

### Constructor

```ts
new XenoCantoSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `XenoCantoSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = XenoCantoSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `XenoCantoSDK` instance in test mode.


### Instance Methods

#### `Recording(data?: object)`

Create a new `Recording` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RecordingEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `XenoCantoSDK.test()`.

**Returns:** `XenoCantoSDK` instance in test mode.


---

## RecordingEntity

```ts
const recording = client.Recording()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Recording().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RecordingEntity` instance with the same client and
options.

#### `client()`

Return the parent `XenoCantoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new XenoCantoSDK({
  feature: {
    test: { active: true },
  }
})
```

