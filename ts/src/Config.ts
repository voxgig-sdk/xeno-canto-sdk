
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'XenoCanto',
        slug: "xeno-canto",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
          "short": "Identified background species in the recording",
          "type": "`$ARRAY`"
        },
        {
          "name": "alt",
          "short": "Altitude at which the recording was made",
          "type": "`$STRING`"
        },
        {
          "name": "animalseen",
          "short": "Was the recorded animal seen?",
          "type": "`$STRING`"
        },
        {
          "name": "auto",
          "short": "Automatic (non-supervised) recording?",
          "type": "`$STRING`"
        },
        {
          "name": "cnt",
          "short": "Country where the recording was made",
          "type": "`$STRING`"
        },
        {
          "name": "date",
          "short": "Date that the recording was made",
          "type": "`$STRING`"
        },
        {
          "name": "dvc",
          "short": "Recording device used",
          "type": "`$STRING`"
        },
        {
          "name": "en",
          "short": "English name of the species",
          "type": "`$STRING`"
        },
        {
          "name": "file",
          "short": "URL to the audio file",
          "type": "`$STRING`"
        },
        {
          "name": "filename",
          "short": "Original file name of the audio file",
          "type": "`$STRING`"
        },
        {
          "name": "gen",
          "short": "Generic name of the species",
          "type": "`$STRING`"
        },
        {
          "name": "grp",
          "short": "Group to which the species belongs",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Catalogue number of the recording on xeno-canto",
          "type": "`$STRING`"
        },
        {
          "name": "lat",
          "short": "Latitude of the recording in decimal coordinates",
          "type": "`$STRING`"
        },
        {
          "name": "length",
          "short": "Length of the recording in minutes",
          "type": "`$STRING`"
        },
        {
          "name": "lic",
          "short": "URL describing the license of this recording",
          "type": "`$STRING`"
        },
        {
          "name": "loc",
          "short": "Name of the locality",
          "type": "`$STRING`"
        },
        {
          "name": "lon",
          "short": "Longitude of the recording in decimal coordinates",
          "type": "`$STRING`"
        },
        {
          "name": "method",
          "short": "Recording method (field recording, in the hand, etc.)",
          "type": "`$STRING`"
        },
        {
          "name": "mic",
          "short": "Microphone used",
          "type": "`$STRING`"
        },
        {
          "name": "osci",
          "short": "URLs to the three versions of oscillograms",
          "type": "`$OBJECT`"
        },
        {
          "name": "playbackused",
          "short": "Was playback used to lure the animal?",
          "type": "`$STRING`"
        },
        {
          "name": "q",
          "short": "Current quality rating for the recording",
          "type": "`$STRING`"
        },
        {
          "name": "rec",
          "short": "Name of the recordist",
          "type": "`$STRING`"
        },
        {
          "name": "regnr",
          "short": "Registration number of specimen (when collected)",
          "type": "`$STRING`"
        },
        {
          "name": "rmk",
          "short": "Additional remarks by the recordist",
          "type": "`$STRING`"
        },
        {
          "name": "sex",
          "short": "Sex of the animal",
          "type": "`$STRING`"
        },
        {
          "name": "smp",
          "short": "Sample rate",
          "type": "`$STRING`"
        },
        {
          "name": "sono",
          "short": "URLs to the four versions of sonograms",
          "type": "`$OBJECT`"
        },
        {
          "name": "sp",
          "short": "Specific name (epithet) of the species",
          "type": "`$STRING`"
        },
        {
          "name": "ssp",
          "short": "Subspecies name (subspecific epithet)",
          "type": "`$STRING`"
        },
        {
          "name": "stage",
          "short": "Life stage of the animal (adult, juvenile, etc.)",
          "type": "`$STRING`"
        },
        {
          "name": "temp",
          "short": "Temperature during recording (applicable to specific groups only)",
          "type": "`$STRING`"
        },
        {
          "name": "time",
          "short": "Time of day that the recording was made",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Sound type of the recording (e.g., call, song)",
          "type": "`$STRING`"
        },
        {
          "name": "uploaded",
          "short": "Date that the recording was uploaded to xeno-canto",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "URL specifying the details of this recording",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "recordings"
                }
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
              },
              "parts": [
                "recordings"
              ]
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
  config,
  FEATURE_PLUGINS,
}

