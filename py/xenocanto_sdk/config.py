# XenoCanto SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "XenoCanto",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://xeno-canto.org/api/3",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "recording": {},
            },
        },
        "entity": {
      "recording": {
        "fields": [
          {
            "name": "also",
            "type": "`$ARRAY`",
          },
          {
            "name": "alt",
            "type": "`$STRING`",
          },
          {
            "name": "animalseen",
            "type": "`$STRING`",
          },
          {
            "name": "auto",
            "type": "`$STRING`",
          },
          {
            "name": "cnt",
            "type": "`$STRING`",
          },
          {
            "name": "date",
            "type": "`$STRING`",
          },
          {
            "name": "dvc",
            "type": "`$STRING`",
          },
          {
            "name": "en",
            "type": "`$STRING`",
          },
          {
            "name": "file",
            "type": "`$STRING`",
          },
          {
            "name": "filename",
            "type": "`$STRING`",
          },
          {
            "name": "gen",
            "type": "`$STRING`",
          },
          {
            "name": "grp",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "lat",
            "type": "`$STRING`",
          },
          {
            "name": "length",
            "type": "`$STRING`",
          },
          {
            "name": "lic",
            "type": "`$STRING`",
          },
          {
            "name": "loc",
            "type": "`$STRING`",
          },
          {
            "name": "lon",
            "type": "`$STRING`",
          },
          {
            "name": "method",
            "type": "`$STRING`",
          },
          {
            "name": "mic",
            "type": "`$STRING`",
          },
          {
            "name": "osci",
            "type": "`$OBJECT`",
          },
          {
            "name": "playbackused",
            "type": "`$STRING`",
          },
          {
            "name": "q",
            "type": "`$STRING`",
          },
          {
            "name": "rec",
            "type": "`$STRING`",
          },
          {
            "name": "regnr",
            "type": "`$STRING`",
          },
          {
            "name": "rmk",
            "type": "`$STRING`",
          },
          {
            "name": "sex",
            "type": "`$STRING`",
          },
          {
            "name": "smp",
            "type": "`$STRING`",
          },
          {
            "name": "sono",
            "type": "`$OBJECT`",
          },
          {
            "name": "sp",
            "type": "`$STRING`",
          },
          {
            "name": "ssp",
            "type": "`$STRING`",
          },
          {
            "name": "stage",
            "type": "`$STRING`",
          },
          {
            "name": "temp",
            "type": "`$STRING`",
          },
          {
            "name": "time",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "type": "`$STRING`",
          },
          {
            "name": "uploaded",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 100,
                      "kind": "query",
                      "name": "per_page",
                      "orig": "per_page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "sp:\"larus fuscus\"",
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/recordings",
                "parts": [
                  "recordings",
                ],
                "select": {
                  "exist": [
                    "key",
                    "page",
                    "per_page",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.recordings`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
