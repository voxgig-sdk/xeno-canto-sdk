<?php
declare(strict_types=1);

// XenoCanto SDK configuration

class XenoCantoConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "XenoCanto",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://xeno-canto.org/api/3",
                "auth" => [
                    "prefix" => "",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "recording" => [],
                ],
            ],
            "entity" => [
        'recording' => [
          'fields' => [
            [
              'name' => 'also',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'alt',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'animalseen',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'auto',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'cnt',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'date',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'dvc',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'en',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'file',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'filename',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'gen',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'grp',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lat',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'length',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lic',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'loc',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lon',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'method',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mic',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'osci',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'playbackused',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'q',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rec',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'regnr',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rmk',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'sex',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'smp',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'sono',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'sp',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ssp',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'stage',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'temp',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'time',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'uploaded',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'recording',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'key',
                        'orig' => 'key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'sp:"larus fuscus"',
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/recordings',
                  'parts' => [
                    'recordings',
                  ],
                  'select' => [
                    'exist' => [
                      'key',
                      'page',
                      'per_page',
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.recordings`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return XenoCantoFeatures::make_feature($name);
    }
}
