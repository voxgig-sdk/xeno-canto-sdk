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
| `also` | `any[]` | No | Identified background species in the recording |
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
| `osci` | `Record<string, any>` | No | URLs to the three versions of oscillograms |
| `playbackused` | `string` | No | Was playback used to lure the animal? |
| `q` | `string` | No | Current quality rating for the recording |
| `rec` | `string` | No | Name of the recordist |
| `regnr` | `string` | No | Registration number of specimen (when collected) |
| `rmk` | `string` | No | Additional remarks by the recordist |
| `sex` | `string` | No | Sex of the animal |
| `smp` | `string` | No | Sample rate |
| `sono` | `Record<string, any>` | No | URLs to the four versions of sonograms |
| `sp` | `string` | No | Specific name (epithet) of the species |
| `ssp` | `string` | No | Subspecies name (subspecific epithet) |
| `stage` | `string` | No | Life stage of the animal (adult, juvenile, etc.) |
| `temp` | `string` | No | Temperature during recording (applicable to specific groups only) |
| `time` | `string` | No | Time of day that the recording was made |
| `type` | `string` | No | Sound type of the recording (e.g., call, song) |
| `uploaded` | `string` | No | Date that the recording was uploaded to xeno-canto |
| `url` | `string` | No | URL specifying the details of this recording |

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

