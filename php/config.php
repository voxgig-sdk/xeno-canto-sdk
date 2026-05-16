<?php
declare(strict_types=1);

// XenoCanto SDK configuration

class XenoCantoConfig
{
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
                    "prefix" => "Bearer",
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
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'alt',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'animal_seen',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'auto',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'cnt',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'date',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'dvc',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'en',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'file',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'file_name',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'gen',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'grp',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 11,
            ],
            [
              'name' => 'id',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 12,
            ],
            [
              'name' => 'lat',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 13,
            ],
            [
              'name' => 'length',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 14,
            ],
            [
              'name' => 'lic',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 15,
            ],
            [
              'name' => 'loc',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 16,
            ],
            [
              'name' => 'lon',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 17,
            ],
            [
              'name' => 'method',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 18,
            ],
            [
              'name' => 'mic',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 19,
            ],
            [
              'name' => 'osci',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 20,
            ],
            [
              'name' => 'playback_used',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 21,
            ],
            [
              'name' => 'q',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 22,
            ],
            [
              'name' => 'rec',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 23,
            ],
            [
              'name' => 'regnr',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 24,
            ],
            [
              'name' => 'rmk',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 25,
            ],
            [
              'name' => 'sex',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 26,
            ],
            [
              'name' => 'smp',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 27,
            ],
            [
              'name' => 'sono',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 28,
            ],
            [
              'name' => 'sp',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 29,
            ],
            [
              'name' => 'ssp',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 30,
            ],
            [
              'name' => 'stage',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 31,
            ],
            [
              'name' => 'temp',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 32,
            ],
            [
              'name' => 'time',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 33,
            ],
            [
              'name' => 'type',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 34,
            ],
            [
              'name' => 'uploaded',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 35,
            ],
            [
              'name' => 'url',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 36,
            ],
          ],
          'name' => 'recording',
          'op' => [
            'list' => [
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
                        'active' => true,
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'example' => 'sp:"larus fuscus"',
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
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
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
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
