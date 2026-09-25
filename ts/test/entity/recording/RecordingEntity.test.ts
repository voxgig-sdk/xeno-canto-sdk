

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { XenoCantoSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('RecordingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when XENO_CANTO_TEST_LIVE=TRUE.
  afterEach(liveDelay('XENO_CANTO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = XenoCantoSDK.test()
    const ent = testsdk.Recording()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.XENO_CANTO_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'recording.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"also":{"a":true,"h":"Also","n":"also","r":false,"sh":"Identified background species in the recording","t":"`$ARRAY`","key$":"also","index$":0},"alt":{"a":true,"h":"Alt","n":"alt","r":false,"sh":"Altitude at which the recording was made","t":"`$STRING`","key$":"alt","index$":1},"animalseen":{"a":true,"h":"Animalseen","n":"animalseen","r":false,"sh":"Was the recorded animal seen?","t":"`$STRING`","key$":"animalseen","index$":2},"auto":{"a":true,"h":"Auto","n":"auto","r":false,"sh":"Automatic (non-supervised) recording?","t":"`$STRING`","key$":"auto","index$":3},"cnt":{"a":true,"h":"Cnt","n":"cnt","r":false,"sh":"Country where the recording was made","t":"`$STRING`","key$":"cnt","index$":4},"date":{"a":true,"h":"Date","n":"date","r":false,"sh":"Date that the recording was made","t":"`$STRING`","key$":"date","index$":5},"dvc":{"a":true,"h":"Dvc","n":"dvc","r":false,"sh":"Recording device used","t":"`$STRING`","key$":"dvc","index$":6},"en":{"a":true,"h":"En","n":"en","r":false,"sh":"English name of the species","t":"`$STRING`","key$":"en","index$":7},"file":{"a":true,"h":"File","n":"file","r":false,"sh":"URL to the audio file","t":"`$STRING`","key$":"file","index$":8},"filename":{"a":true,"h":"Filename","n":"filename","r":false,"sh":"Original file name of the audio file","t":"`$STRING`","key$":"filename","index$":9},"gen":{"a":true,"h":"Gen","n":"gen","r":false,"sh":"Generic name of the species","t":"`$STRING`","key$":"gen","index$":10},"grp":{"a":true,"h":"Grp","n":"grp","r":false,"sh":"Group to which the species belongs","t":"`$STRING`","key$":"grp","index$":11},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Catalogue number of the recording on xeno-canto","t":"`$STRING`","key$":"id","index$":12},"lat":{"a":true,"h":"Lat","n":"lat","r":false,"sh":"Latitude of the recording in decimal coordinates","t":"`$STRING`","key$":"lat","index$":13},"length":{"a":true,"h":"Length","n":"length","r":false,"sh":"Length of the recording in minutes","t":"`$STRING`","key$":"length","index$":14},"lic":{"a":true,"h":"Lic","n":"lic","r":false,"sh":"URL describing the license of this recording","t":"`$STRING`","key$":"lic","index$":15},"loc":{"a":true,"h":"Loc","n":"loc","r":false,"sh":"Name of the locality","t":"`$STRING`","key$":"loc","index$":16},"lon":{"a":true,"h":"Lon","n":"lon","r":false,"sh":"Longitude of the recording in decimal coordinates","t":"`$STRING`","key$":"lon","index$":17},"method":{"a":true,"h":"Method","n":"method","r":false,"sh":"Recording method (field recording, in the hand, etc.)","t":"`$STRING`","key$":"method","index$":18},"mic":{"a":true,"h":"Mic","n":"mic","r":false,"sh":"Microphone used","t":"`$STRING`","key$":"mic","index$":19},"osci":{"a":true,"h":"Osci","n":"osci","r":false,"sh":"URLs to the three versions of oscillograms","t":"`$OBJECT`","key$":"osci","index$":20},"playbackused":{"a":true,"h":"Playbackused","n":"playbackused","r":false,"sh":"Was playback used to lure the animal?","t":"`$STRING`","key$":"playbackused","index$":21},"q":{"a":true,"h":"Q","n":"q","r":false,"sh":"Current quality rating for the recording","t":"`$STRING`","key$":"q","index$":22},"rec":{"a":true,"h":"Rec","n":"rec","r":false,"sh":"Name of the recordist","t":"`$STRING`","key$":"rec","index$":23},"regnr":{"a":true,"h":"Regnr","n":"regnr","r":false,"sh":"Registration number of specimen (when collected)","t":"`$STRING`","key$":"regnr","index$":24},"rmk":{"a":true,"h":"Rmk","n":"rmk","r":false,"sh":"Additional remarks by the recordist","t":"`$STRING`","key$":"rmk","index$":25},"sex":{"a":true,"h":"Sex","n":"sex","r":false,"sh":"Sex of the animal","t":"`$STRING`","key$":"sex","index$":26},"smp":{"a":true,"h":"Smp","n":"smp","r":false,"sh":"Sample rate","t":"`$STRING`","key$":"smp","index$":27},"sono":{"a":true,"h":"Sono","n":"sono","r":false,"sh":"URLs to the four versions of sonograms","t":"`$OBJECT`","key$":"sono","index$":28},"sp":{"a":true,"h":"Sp","n":"sp","r":false,"sh":"Specific name (epithet) of the species","t":"`$STRING`","key$":"sp","index$":29},"ssp":{"a":true,"h":"Ssp","n":"ssp","r":false,"sh":"Subspecies name (subspecific epithet)","t":"`$STRING`","key$":"ssp","index$":30},"stage":{"a":true,"h":"Stage","n":"stage","r":false,"sh":"Life stage of the animal (adult, juvenile, etc.)","t":"`$STRING`","key$":"stage","index$":31},"temp":{"a":true,"h":"Temp","n":"temp","r":false,"sh":"Temperature during recording (applicable to specific groups only)","t":"`$STRING`","key$":"temp","index$":32},"time":{"a":true,"h":"Time","n":"time","r":false,"sh":"Time of day that the recording was made","t":"`$STRING`","key$":"time","index$":33},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Sound type of the recording (e.g., call, song)","t":"`$STRING`","key$":"type","index$":34},"uploaded":{"a":true,"h":"Uploaded","n":"uploaded","r":false,"sh":"Date that the recording was uploaded to xeno-canto","t":"`$STRING`","key$":"uploaded","index$":35},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"URL specifying the details of this recording","t":"`$STRING`","key$":"url","index$":36}},"id":{"field":"id","name":"id"},"name":"recording","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /recordings","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"key","or":"key","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":100,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"sp:\"larus fuscus\"","k":"query","n":"query","or":"query","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/recordings","q":{"exist":["key","page","per_page","query"]},"r":{},"s":[{"lit":"recordings"}],"t":{"req":"`reqdata`","res":"`body.recordings`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"recording","name__orig":"recording","Name":"Recording","name_":"recording","name-":"recording","NAME":"RECORDING","index$":0}, {"active":true,"entity":"recording","key$":"BasicRecordingFlow","kind":"basic","name":"BasicRecordingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"recording_ref01"}}],"index$":0}]}, 'Recording', {"GET /recordings":{"protocol":"http","operationId":"searchRecordings","responses":{"200":{"description":"Successful query returning recordings","content":{"application/json":{"schema":{"type":"object","properties":{"numRecordings":{"description":"Total number of recordings found for this query","key$":"numRecordings","type":"string"},"numSpecies":{"description":"Total number of species found for this query","key$":"numSpecies","type":"string"},"page":{"description":"Current page number of results being displayed","key$":"page","type":"integer"},"numPages":{"description":"Total number of pages available for this query","key$":"numPages","type":"integer"},"recordings":{"description":"Array of recording objects matching the query","items":{"properties":{"also":{"description":"Identified background species in the recording","items":{"type":"string"},"type":"array","key$":"also"},"alt":{"description":"Altitude at which the recording was made","type":"string","key$":"alt"},"animal-seen":{"description":"Was the recorded animal seen?","type":"string","key$":"animal-seen"},"auto":{"description":"Automatic (non-supervised) recording?","type":"string","key$":"auto"},"cnt":{"description":"Country where the recording was made","type":"string","key$":"cnt"},"date":{"description":"Date that the recording was made","type":"string","key$":"date"},"dvc":{"description":"Recording device used","type":"string","key$":"dvc"},"en":{"description":"English name of the species","type":"string","key$":"en"},"file":{"description":"URL to the audio file","type":"string","key$":"file"},"file-name":{"description":"Original file name of the audio file","type":"string","key$":"file-name"},"gen":{"description":"Generic name of the species","type":"string","key$":"gen"},"grp":{"description":"Group to which the species belongs","enum":["birds","grasshoppers","bats"],"type":"string","key$":"grp"},"id":{"description":"Catalogue number of the recording on xeno-canto","type":"string","key$":"id"},"lat":{"description":"Latitude of the recording in decimal coordinates","type":"string","key$":"lat"},"length":{"description":"Length of the recording in minutes","type":"string","key$":"length"},"lic":{"description":"URL describing the license of this recording","type":"string","key$":"lic"},"loc":{"description":"Name of the locality","type":"string","key$":"loc"},"lon":{"description":"Longitude of the recording in decimal coordinates","type":"string","key$":"lon"},"method":{"description":"Recording method (field recording, in the hand, etc.)","type":"string","key$":"method"},"mic":{"description":"Microphone used","type":"string","key$":"mic"},"osci":{"description":"URLs to the three versions of oscillograms","properties":{"large":{"type":"string"},"med":{"type":"string"},"small":{"type":"string"}},"type":"object","key$":"osci"},"playback-used":{"description":"Was playback used to lure the animal?","type":"string","key$":"playback-used"},"q":{"description":"Current quality rating for the recording","type":"string","key$":"q"},"rec":{"description":"Name of the recordist","type":"string","key$":"rec"},"regnr":{"description":"Registration number of specimen (when collected)","type":"string","key$":"regnr"},"rmk":{"description":"Additional remarks by the recordist","type":"string","key$":"rmk"},"sex":{"description":"Sex of the animal","type":"string","key$":"sex"},"smp":{"description":"Sample rate","type":"string","key$":"smp"},"sono":{"description":"URLs to the four versions of sonograms","properties":{"full":{"type":"string"},"large":{"type":"string"},"med":{"type":"string"},"small":{"type":"string"}},"type":"object","key$":"sono"},"sp":{"description":"Specific name (epithet) of the species","type":"string","key$":"sp"},"ssp":{"description":"Subspecies name (subspecific epithet)","type":"string","key$":"ssp"},"stage":{"description":"Life stage of the animal (adult, juvenile, etc.)","type":"string","key$":"stage"},"temp":{"description":"Temperature during recording (applicable to specific groups only)","type":"string","key$":"temp"},"time":{"description":"Time of day that the recording was made","type":"string","key$":"time"},"type":{"description":"Sound type of the recording (e.g., call, song)","type":"string","key$":"type"},"uploaded":{"description":"Date that the recording was uploaded to xeno-canto","type":"string","key$":"uploaded"},"url":{"description":"URL specifying the details of this recording","type":"string","key$":"url"}},"type":"object","x-ref":"#/components/schemas/Recording","index$":0},"key$":"recordings","type":"array"}},"required":["numRecordings","numSpecies","page","numPages","recordings"],"x-ref":"#/components/schemas/RecordingsResponse"}}}},"400":{"description":"Client error - invalid request parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"object","properties":{"code":{"type":"string","description":"Identifier for the error"},"message":{"type":"string","description":"Additional explanatory details about the error"}},"required":["code","message"]}},"required":["error"],"x-ref":"#/components/schemas/ErrorResponse"}}}},"500":{"description":"Server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"object","properties":{"code":{"type":"string","description":"Identifier for the error"},"message":{"type":"string","description":"Additional explanatory details about the error"}},"required":["code","message"]}},"required":["error"],"x-ref":"#/components/schemas/ErrorResponse"}}}}},"parameters":[{"name":"query","in":"query","description":"Search query string using search tags (e.g., sp:\"larus fuscus\", gen:turdus, cnt:spain). Must be non-empty. See documentation for available search tags.","required":true,"schema":{"type":"string"},"example":"sp:\"larus fuscus\"","index$":0},{"name":"key","in":"query","description":"API key for authentication. Available to all registered XC members with verified email addresses. Required for all API v3 requests.","required":true,"schema":{"type":"string"},"index$":1},{"name":"per_page","in":"query","description":"Number of results per page. Valid values range from 50 to 500. Default is 100.","required":false,"schema":{"type":"integer","minimum":50,"maximum":500,"default":100},"index$":2},{"name":"page","in":"query","description":"Page number for paginated results. Must be between 1 and numPages from the response.","required":false,"schema":{"type":"integer","minimum":1,"default":1},"index$":3}],"security":[{"ApiKeyAuth":[]}],"securitySource":"definition","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"query","name":"key","description":"API key available to all registered XC members with verified email addresses"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let recording_ref01_data = Object.values(setup.data.existing.recording)[0] as any

    // LIST
    const recording_ref01_ent = client.Recording()
    const recording_ref01_match: any = {}

    const recording_ref01_list = (await recording_ref01_ent.list(recording_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/recording/RecordingTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = XenoCantoSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['recording01','recording02','recording03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'XENO_CANTO_TEST_RECORDING_ENTID': idmap,
    'XENO_CANTO_TEST_LIVE': 'FALSE',
    'XENO_CANTO_TEST_EXPLAIN': 'FALSE',
    'XENO_CANTO_APIKEY': '',
  })

  idmap = env['XENO_CANTO_TEST_RECORDING_ENTID']

  const live = 'TRUE' === env.XENO_CANTO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['XENO_CANTO_TEST_RECORDING_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new XenoCantoSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.XENO_CANTO_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.XENO_CANTO_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
