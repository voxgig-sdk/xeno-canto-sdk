# XenoCanto PHP SDK Reference

Complete API reference for the XenoCanto PHP SDK.


## XenoCantoSDK

### Constructor

```php
require_once __DIR__ . '/xenocanto_sdk.php';

$client = new XenoCantoSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `XenoCantoSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = XenoCantoSDK::test();
```


### Instance Methods

#### `Recording($data = null)`

Create a new `RecordingEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): XenoCantoUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## RecordingEntity

```php
$recording = $client->Recording();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `also` | `array` | No | Identified background species in the recording |
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
| `osci` | `array` | No | URLs to the three versions of oscillograms |
| `playbackused` | `string` | No | Was playback used to lure the animal? |
| `q` | `string` | No | Current quality rating for the recording |
| `rec` | `string` | No | Name of the recordist |
| `regnr` | `string` | No | Registration number of specimen (when collected) |
| `rmk` | `string` | No | Additional remarks by the recordist |
| `sex` | `string` | No | Sex of the animal |
| `smp` | `string` | No | Sample rate |
| `sono` | `array` | No | URLs to the four versions of sonograms |
| `sp` | `string` | No | Specific name (epithet) of the species |
| `ssp` | `string` | No | Subspecies name (subspecific epithet) |
| `stage` | `string` | No | Life stage of the animal (adult, juvenile, etc.) |
| `temp` | `string` | No | Temperature during recording (applicable to specific groups only) |
| `time` | `string` | No | Time of day that the recording was made |
| `type` | `string` | No | Sound type of the recording (e.g., call, song) |
| `uploaded` | `string` | No | Date that the recording was uploaded to xeno-canto |
| `url` | `string` | No | URL specifying the details of this recording |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Recording()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RecordingEntity`

Create a new `RecordingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new XenoCantoSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

