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
| `also` | `array` | No |  |
| `alt` | `string` | No |  |
| `animal_seen` | `string` | No |  |
| `auto` | `string` | No |  |
| `cnt` | `string` | No |  |
| `date` | `string` | No |  |
| `dvc` | `string` | No |  |
| `en` | `string` | No |  |
| `file` | `string` | No |  |
| `file_name` | `string` | No |  |
| `gen` | `string` | No |  |
| `grp` | `string` | No |  |
| `id` | `string` | No |  |
| `lat` | `string` | No |  |
| `length` | `string` | No |  |
| `lic` | `string` | No |  |
| `loc` | `string` | No |  |
| `lon` | `string` | No |  |
| `method` | `string` | No |  |
| `mic` | `string` | No |  |
| `osci` | `array` | No |  |
| `playback_used` | `string` | No |  |
| `q` | `string` | No |  |
| `rec` | `string` | No |  |
| `regnr` | `string` | No |  |
| `rmk` | `string` | No |  |
| `sex` | `string` | No |  |
| `smp` | `string` | No |  |
| `sono` | `array` | No |  |
| `sp` | `string` | No |  |
| `ssp` | `string` | No |  |
| `stage` | `string` | No |  |
| `temp` | `string` | No |  |
| `time` | `string` | No |  |
| `type` | `string` | No |  |
| `uploaded` | `string` | No |  |
| `url` | `string` | No |  |

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

