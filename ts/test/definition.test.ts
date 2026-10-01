import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "recording",
    "accessor": "Recording",
    "op": "list",
    "method": "GET",
    "path": "/recordings",
    "args": [],
    "select": {
      "key": "v1",
      "page": "v1",
      "per_page": "v1",
      "query": "sp:\"larus fuscus\""
    },
    "headers": [],
    "query": [
      "query",
      "key",
      "per_page",
      "page"
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
          "also": [
            "x"
          ],
          "alt": "x",
          "animal-seen": "x",
          "auto": "x",
          "cnt": "x",
          "date": "x",
          "dvc": "x",
          "en": "x",
          "file": "x",
          "file-name": "x",
          "gen": "x",
          "grp": "birds",
          "id": "x",
          "lat": "x",
          "length": "x",
          "lic": "x",
          "loc": "x",
          "lon": "x",
          "method": "x",
          "mic": "x",
          "osci": {
            "large": "x",
            "med": "x",
            "small": "x"
          },
          "playback-used": "x",
          "q": "x",
          "rec": "x",
          "regnr": "x",
          "rmk": "x",
          "sex": "x",
          "smp": "x",
          "sono": {
            "full": "x",
            "large": "x",
            "med": "x",
            "small": "x"
          },
          "sp": "x",
          "ssp": "x",
          "stage": "x",
          "temp": "x",
          "time": "x",
          "type": "x",
          "uploaded": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
