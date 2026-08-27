-- XenoCanto SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "XenoCanto",
      slug = "xeno-canto",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://xeno-canto.org/api/3",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["recording"] = {},
      },
    },
    entity = {
      ["recording"] = {
        ["fields"] = {
          {
            ["name"] = "also",
            ["short"] = "Identified background species in the recording",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "alt",
            ["short"] = "Altitude at which the recording was made",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "animalseen",
            ["short"] = "Was the recorded animal seen?",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "auto",
            ["short"] = "Automatic (non-supervised) recording?",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "cnt",
            ["short"] = "Country where the recording was made",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "date",
            ["short"] = "Date that the recording was made",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dvc",
            ["short"] = "Recording device used",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "en",
            ["short"] = "English name of the species",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "file",
            ["short"] = "URL to the audio file",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "filename",
            ["short"] = "Original file name of the audio file",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "gen",
            ["short"] = "Generic name of the species",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "grp",
            ["short"] = "Group to which the species belongs",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Catalogue number of the recording on xeno-canto",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lat",
            ["short"] = "Latitude of the recording in decimal coordinates",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "length",
            ["short"] = "Length of the recording in minutes",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lic",
            ["short"] = "URL describing the license of this recording",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "loc",
            ["short"] = "Name of the locality",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lon",
            ["short"] = "Longitude of the recording in decimal coordinates",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "method",
            ["short"] = "Recording method (field recording, in the hand, etc.)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "mic",
            ["short"] = "Microphone used",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "osci",
            ["short"] = "URLs to the three versions of oscillograms",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "playbackused",
            ["short"] = "Was playback used to lure the animal?",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "q",
            ["short"] = "Current quality rating for the recording",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rec",
            ["short"] = "Name of the recordist",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "regnr",
            ["short"] = "Registration number of specimen (when collected)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rmk",
            ["short"] = "Additional remarks by the recordist",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sex",
            ["short"] = "Sex of the animal",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "smp",
            ["short"] = "Sample rate",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sono",
            ["short"] = "URLs to the four versions of sonograms",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "sp",
            ["short"] = "Specific name (epithet) of the species",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ssp",
            ["short"] = "Subspecies name (subspecific epithet)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stage",
            ["short"] = "Life stage of the animal (adult, juvenile, etc.)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "temp",
            ["short"] = "Temperature during recording (applicable to specific groups only)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "time",
            ["short"] = "Time of day that the recording was made",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["short"] = "Sound type of the recording (e.g., call, song)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "uploaded",
            ["short"] = "Date that the recording was uploaded to xeno-canto",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "URL specifying the details of this recording",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "recording",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "key",
                      ["orig"] = "key",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 100,
                      ["kind"] = "query",
                      ["name"] = "per_page",
                      ["orig"] = "per_page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "sp:\"larus fuscus\"",
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/recordings",
                ["parts"] = {
                  "recordings",
                },
                ["select"] = {
                  ["exist"] = {
                    "key",
                    "page",
                    "per_page",
                    "query",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.recordings`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
