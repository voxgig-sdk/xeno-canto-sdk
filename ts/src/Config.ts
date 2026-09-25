
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


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
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
      in: 'query',
      name: 'key',
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
          "title": "Also",
          "type": "`$ARRAY`",
          "short": "Identified background species in the recording"
        },
        {
          "name": "alt",
          "title": "Alt",
          "type": "`$STRING`",
          "short": "Altitude at which the recording was made"
        },
        {
          "name": "animalseen",
          "title": "Animalseen",
          "type": "`$STRING`",
          "short": "Was the recorded animal seen?"
        },
        {
          "name": "auto",
          "title": "Auto",
          "type": "`$STRING`",
          "short": "Automatic (non-supervised) recording?"
        },
        {
          "name": "cnt",
          "title": "Cnt",
          "type": "`$STRING`",
          "short": "Country where the recording was made"
        },
        {
          "name": "date",
          "title": "Date",
          "type": "`$STRING`",
          "short": "Date that the recording was made"
        },
        {
          "name": "dvc",
          "title": "Dvc",
          "type": "`$STRING`",
          "short": "Recording device used"
        },
        {
          "name": "en",
          "title": "En",
          "type": "`$STRING`",
          "short": "English name of the species"
        },
        {
          "name": "file",
          "title": "File",
          "type": "`$STRING`",
          "short": "URL to the audio file"
        },
        {
          "name": "filename",
          "title": "Filename",
          "type": "`$STRING`",
          "short": "Original file name of the audio file"
        },
        {
          "name": "gen",
          "title": "Gen",
          "type": "`$STRING`",
          "short": "Generic name of the species"
        },
        {
          "name": "grp",
          "title": "Grp",
          "type": "`$STRING`",
          "short": "Group to which the species belongs"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Catalogue number of the recording on xeno-canto"
        },
        {
          "name": "lat",
          "title": "Lat",
          "type": "`$STRING`",
          "short": "Latitude of the recording in decimal coordinates"
        },
        {
          "name": "length",
          "title": "Length",
          "type": "`$STRING`",
          "short": "Length of the recording in minutes"
        },
        {
          "name": "lic",
          "title": "Lic",
          "type": "`$STRING`",
          "short": "URL describing the license of this recording"
        },
        {
          "name": "loc",
          "title": "Loc",
          "type": "`$STRING`",
          "short": "Name of the locality"
        },
        {
          "name": "lon",
          "title": "Lon",
          "type": "`$STRING`",
          "short": "Longitude of the recording in decimal coordinates"
        },
        {
          "name": "method",
          "title": "Method",
          "type": "`$STRING`",
          "short": "Recording method (field recording, in the hand, etc.)"
        },
        {
          "name": "mic",
          "title": "Mic",
          "type": "`$STRING`",
          "short": "Microphone used"
        },
        {
          "name": "osci",
          "title": "Osci",
          "type": "`$OBJECT`",
          "short": "URLs to the three versions of oscillograms"
        },
        {
          "name": "playbackused",
          "title": "Playbackused",
          "type": "`$STRING`",
          "short": "Was playback used to lure the animal?"
        },
        {
          "name": "q",
          "title": "Q",
          "type": "`$STRING`",
          "short": "Current quality rating for the recording"
        },
        {
          "name": "rec",
          "title": "Rec",
          "type": "`$STRING`",
          "short": "Name of the recordist"
        },
        {
          "name": "regnr",
          "title": "Regnr",
          "type": "`$STRING`",
          "short": "Registration number of specimen (when collected)"
        },
        {
          "name": "rmk",
          "title": "Rmk",
          "type": "`$STRING`",
          "short": "Additional remarks by the recordist"
        },
        {
          "name": "sex",
          "title": "Sex",
          "type": "`$STRING`",
          "short": "Sex of the animal"
        },
        {
          "name": "smp",
          "title": "Smp",
          "type": "`$STRING`",
          "short": "Sample rate"
        },
        {
          "name": "sono",
          "title": "Sono",
          "type": "`$OBJECT`",
          "short": "URLs to the four versions of sonograms"
        },
        {
          "name": "sp",
          "title": "Sp",
          "type": "`$STRING`",
          "short": "Specific name (epithet) of the species"
        },
        {
          "name": "ssp",
          "title": "Ssp",
          "type": "`$STRING`",
          "short": "Subspecies name (subspecific epithet)"
        },
        {
          "name": "stage",
          "title": "Stage",
          "type": "`$STRING`",
          "short": "Life stage of the animal (adult, juvenile, etc.)"
        },
        {
          "name": "temp",
          "title": "Temp",
          "type": "`$STRING`",
          "short": "Temperature during recording (applicable to specific groups only)"
        },
        {
          "name": "time",
          "title": "Time",
          "type": "`$STRING`",
          "short": "Time of day that the recording was made"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "short": "Sound type of the recording (e.g., call, song)"
        },
        {
          "name": "uploaded",
          "title": "Uploaded",
          "type": "`$STRING`",
          "short": "Date that the recording was uploaded to xeno-canto"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "URL specifying the details of this recording"
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
              "kind": "http",
              "method": "GET",
              "orig": "/recordings",
              "segments": [
                {
                  "lit": "recordings"
                }
              ],
              "parts": [
                "recordings"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.recordings`"
              },
              "args": {
                "query": [
                  {
                    "name": "key",
                    "orig": "key",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 100
                  },
                  {
                    "name": "query",
                    "orig": "query",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "sp:\"larus fuscus\""
                  }
                ]
              },
              "select": {
                "exist": [
                  "key",
                  "page",
                  "per_page",
                  "query"
                ]
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
  config,
  FEATURE_PLUGINS,
}

