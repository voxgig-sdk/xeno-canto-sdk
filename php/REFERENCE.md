# XenoCanto PHP SDK Reference

Complete API reference for the XenoCanto PHP SDK.


## XenoCantoSDK

### Constructor

```php
require_once __DIR__ . '/xeno-canto_sdk.php';

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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

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
$recording = $client->recording();
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

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->recording()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): RecordingEntity`

Create a new `RecordingEntity` instance with the same client and
options.

#### `getName(): string`

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

