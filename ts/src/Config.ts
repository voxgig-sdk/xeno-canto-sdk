
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'XenoCanto',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://xeno-canto.org/api/3",

    auth: {
      prefix: '',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      recording: {
      },

    }
  }


  entity = {
    "recording": {
      "fields": [
        {
          "name": "also",
          "type": "`$ARRAY`"
        },
        {
          "name": "alt",
          "type": "`$STRING`"
        },
        {
          "name": "animalseen",
          "type": "`$STRING`"
        },
        {
          "name": "auto",
          "type": "`$STRING`"
        },
        {
          "name": "cnt",
          "type": "`$STRING`"
        },
        {
          "name": "date",
          "type": "`$STRING`"
        },
        {
          "name": "dvc",
          "type": "`$STRING`"
        },
        {
          "name": "en",
          "type": "`$STRING`"
        },
        {
          "name": "file",
          "type": "`$STRING`"
        },
        {
          "name": "filename",
          "type": "`$STRING`"
        },
        {
          "name": "gen",
          "type": "`$STRING`"
        },
        {
          "name": "grp",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "lat",
          "type": "`$STRING`"
        },
        {
          "name": "length",
          "type": "`$STRING`"
        },
        {
          "name": "lic",
          "type": "`$STRING`"
        },
        {
          "name": "loc",
          "type": "`$STRING`"
        },
        {
          "name": "lon",
          "type": "`$STRING`"
        },
        {
          "name": "method",
          "type": "`$STRING`"
        },
        {
          "name": "mic",
          "type": "`$STRING`"
        },
        {
          "name": "osci",
          "type": "`$OBJECT`"
        },
        {
          "name": "playbackused",
          "type": "`$STRING`"
        },
        {
          "name": "q",
          "type": "`$STRING`"
        },
        {
          "name": "rec",
          "type": "`$STRING`"
        },
        {
          "name": "regnr",
          "type": "`$STRING`"
        },
        {
          "name": "rmk",
          "type": "`$STRING`"
        },
        {
          "name": "sex",
          "type": "`$STRING`"
        },
        {
          "name": "smp",
          "type": "`$STRING`"
        },
        {
          "name": "sono",
          "type": "`$OBJECT`"
        },
        {
          "name": "sp",
          "type": "`$STRING`"
        },
        {
          "name": "ssp",
          "type": "`$STRING`"
        },
        {
          "name": "stage",
          "type": "`$STRING`"
        },
        {
          "name": "temp",
          "type": "`$STRING`"
        },
        {
          "name": "time",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "type": "`$STRING`"
        },
        {
          "name": "uploaded",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "type": "`$STRING`"
        }
      ],
      "name": "recording",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "key",
                    "orig": "key",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 100,
                    "kind": "query",
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "sp:\"larus fuscus\"",
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/recordings",
              "parts": [
                "recordings"
              ],
              "select": {
                "exist": [
                  "key",
                  "page",
                  "per_page",
                  "query"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.recordings`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

