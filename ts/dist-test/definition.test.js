"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "recording",
        "accessor": "Recording",
        "op": "list",
        "method": "GET",
        "path": "/recordings",
        "args": [],
        "select": {
            "key": "v1",
            "query": "sp:\"larus fuscus\"",
            "page": 1,
            "per_page": 100
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "query",
            "key",
            "per_page",
            "page"
        ],
        "queryArgs": [
            {
                "name": "key",
                "wire": "key"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "per_page",
                "wire": "per_page"
            },
            {
                "name": "query",
                "wire": "query"
            }
        ],
        "auth": [
            [
                {
                    "in": "query",
                    "name": "key"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "numRecordings": "x",
            "numSpecies": "x",
            "page": 1,
            "numPages": 1,
            "recordings": [
                {
                    "id": "x",
                    "gen": "x",
                    "sp": "x",
                    "ssp": "x",
                    "grp": "birds",
                    "en": "x",
                    "rec": "x",
                    "cnt": "x",
                    "loc": "x",
                    "lat": "x",
                    "lon": "x",
                    "alt": "x",
                    "type": "x",
                    "sex": "x",
                    "stage": "x",
                    "method": "x",
                    "url": "x",
                    "file": "x",
                    "file-name": "x",
                    "sono": {
                        "small": "x",
                        "med": "x",
                        "large": "x",
                        "full": "x"
                    },
                    "osci": {
                        "small": "x",
                        "med": "x",
                        "large": "x"
                    },
                    "lic": "x",
                    "q": "x",
                    "length": "x",
                    "time": "x",
                    "date": "x",
                    "uploaded": "x",
                    "also": [
                        "x"
                    ],
                    "rmk": "x",
                    "animal-seen": "x",
                    "playback-used": "x",
                    "temp": "x",
                    "regnr": "x",
                    "auto": "x",
                    "dvc": "x",
                    "mic": "x",
                    "smp": "x"
                }
            ]
        },
        "idField": "id",
        "ownQuery": "key"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map