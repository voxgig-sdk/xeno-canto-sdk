"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('RecordingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when XENO_CANTO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('XENO_CANTO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.XenoCantoSDK.test();
        const ent = testsdk.Recording();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.XENO_CANTO_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'recording.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "also", "req": false, "short": "Identified background species in the recording", "type": "`$ARRAY`", "index$": 0 }, { "active": true, "name": "alt", "req": false, "short": "Altitude at which the recording was made", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "animalseen", "req": false, "short": "Was the recorded animal seen?", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "auto", "req": false, "short": "Automatic (non-supervised) recording?", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "cnt", "req": false, "short": "Country where the recording was made", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "date", "req": false, "short": "Date that the recording was made", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "dvc", "req": false, "short": "Recording device used", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "en", "req": false, "short": "English name of the species", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "file", "req": false, "short": "URL to the audio file", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "filename", "req": false, "short": "Original file name of the audio file", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "gen", "req": false, "short": "Generic name of the species", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "grp", "req": false, "short": "Group to which the species belongs", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "id", "req": false, "short": "Catalogue number of the recording on xeno-canto", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "lat", "req": false, "short": "Latitude of the recording in decimal coordinates", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "length", "req": false, "short": "Length of the recording in minutes", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "lic", "req": false, "short": "URL describing the license of this recording", "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "loc", "req": false, "short": "Name of the locality", "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "lon", "req": false, "short": "Longitude of the recording in decimal coordinates", "type": "`$STRING`", "index$": 17 }, { "active": true, "name": "method", "req": false, "short": "Recording method (field recording, in the hand, etc.)", "type": "`$STRING`", "index$": 18 }, { "active": true, "name": "mic", "req": false, "short": "Microphone used", "type": "`$STRING`", "index$": 19 }, { "active": true, "name": "osci", "req": false, "short": "URLs to the three versions of oscillograms", "type": "`$OBJECT`", "index$": 20 }, { "active": true, "name": "playbackused", "req": false, "short": "Was playback used to lure the animal?", "type": "`$STRING`", "index$": 21 }, { "active": true, "name": "q", "req": false, "short": "Current quality rating for the recording", "type": "`$STRING`", "index$": 22 }, { "active": true, "name": "rec", "req": false, "short": "Name of the recordist", "type": "`$STRING`", "index$": 23 }, { "active": true, "name": "regnr", "req": false, "short": "Registration number of specimen (when collected)", "type": "`$STRING`", "index$": 24 }, { "active": true, "name": "rmk", "req": false, "short": "Additional remarks by the recordist", "type": "`$STRING`", "index$": 25 }, { "active": true, "name": "sex", "req": false, "short": "Sex of the animal", "type": "`$STRING`", "index$": 26 }, { "active": true, "name": "smp", "req": false, "short": "Sample rate", "type": "`$STRING`", "index$": 27 }, { "active": true, "name": "sono", "req": false, "short": "URLs to the four versions of sonograms", "type": "`$OBJECT`", "index$": 28 }, { "active": true, "name": "sp", "req": false, "short": "Specific name (epithet) of the species", "type": "`$STRING`", "index$": 29 }, { "active": true, "name": "ssp", "req": false, "short": "Subspecies name (subspecific epithet)", "type": "`$STRING`", "index$": 30 }, { "active": true, "name": "stage", "req": false, "short": "Life stage of the animal (adult, juvenile, etc.)", "type": "`$STRING`", "index$": 31 }, { "active": true, "name": "temp", "req": false, "short": "Temperature during recording (applicable to specific groups only)", "type": "`$STRING`", "index$": 32 }, { "active": true, "name": "time", "req": false, "short": "Time of day that the recording was made", "type": "`$STRING`", "index$": 33 }, { "active": true, "name": "type", "req": false, "short": "Sound type of the recording (e.g., call, song)", "type": "`$STRING`", "index$": 34 }, { "active": true, "name": "uploaded", "req": false, "short": "Date that the recording was uploaded to xeno-canto", "type": "`$STRING`", "index$": 35 }, { "active": true, "name": "url", "req": false, "short": "URL specifying the details of this recording", "type": "`$STRING`", "index$": 36 }], "id": { "field": "id", "name": "id" }, "name": "recording", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "key", "orig": "key", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": 100, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "example": "sp:\"larus fuscus\"", "kind": "query", "name": "query", "orig": "query", "reqd": true, "type": "`$STRING`", "index$": 3 }] }, "contract": { "id": "GET /recordings", "json": "{\"operationId\":\"searchRecordings\",\"parameters\":[{\"description\":\"Search query string using search tags (e.g., sp:\\\"larus fuscus\\\", gen:turdus, cnt:spain). Must be non-empty. See documentation for available search tags.\",\"example\":\"sp:\\\"larus fuscus\\\"\",\"in\":\"query\",\"name\":\"query\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"API key for authentication. Available to all registered XC members with verified email addresses. Required for all API v3 requests.\",\"in\":\"query\",\"name\":\"key\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of results per page. Valid values range from 50 to 500. Default is 100.\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"schema\":{\"default\":100,\"maximum\":500,\"minimum\":50,\"type\":\"integer\"}},{\"description\":\"Page number for paginated results. Must be between 1 and numPages from the response.\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"numPages\":{\"description\":\"Total number of pages available for this query\",\"type\":\"integer\"},\"numRecordings\":{\"description\":\"Total number of recordings found for this query\",\"type\":\"string\"},\"numSpecies\":{\"description\":\"Total number of species found for this query\",\"type\":\"string\"},\"page\":{\"description\":\"Current page number of results being displayed\",\"type\":\"integer\"},\"recordings\":{\"description\":\"Array of recording objects matching the query\",\"items\":{\"properties\":{\"also\":{\"description\":\"Identified background species in the recording\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"alt\":{\"description\":\"Altitude at which the recording was made\",\"type\":\"string\"},\"animal-seen\":{\"description\":\"Was the recorded animal seen?\",\"type\":\"string\"},\"auto\":{\"description\":\"Automatic (non-supervised) recording?\",\"type\":\"string\"},\"cnt\":{\"description\":\"Country where the recording was made\",\"type\":\"string\"},\"date\":{\"description\":\"Date that the recording was made\",\"type\":\"string\"},\"dvc\":{\"description\":\"Recording device used\",\"type\":\"string\"},\"en\":{\"description\":\"English name of the species\",\"type\":\"string\"},\"file\":{\"description\":\"URL to the audio file\",\"type\":\"string\"},\"file-name\":{\"description\":\"Original file name of the audio file\",\"type\":\"string\"},\"gen\":{\"description\":\"Generic name of the species\",\"type\":\"string\"},\"grp\":{\"description\":\"Group to which the species belongs\",\"enum\":[\"birds\",\"grasshoppers\",\"bats\"],\"type\":\"string\"},\"id\":{\"description\":\"Catalogue number of the recording on xeno-canto\",\"type\":\"string\"},\"lat\":{\"description\":\"Latitude of the recording in decimal coordinates\",\"type\":\"string\"},\"length\":{\"description\":\"Length of the recording in minutes\",\"type\":\"string\"},\"lic\":{\"description\":\"URL describing the license of this recording\",\"type\":\"string\"},\"loc\":{\"description\":\"Name of the locality\",\"type\":\"string\"},\"lon\":{\"description\":\"Longitude of the recording in decimal coordinates\",\"type\":\"string\"},\"method\":{\"description\":\"Recording method (field recording, in the hand, etc.)\",\"type\":\"string\"},\"mic\":{\"description\":\"Microphone used\",\"type\":\"string\"},\"osci\":{\"description\":\"URLs to the three versions of oscillograms\",\"properties\":{\"large\":{\"type\":\"string\"},\"med\":{\"type\":\"string\"},\"small\":{\"type\":\"string\"}},\"type\":\"object\"},\"playback-used\":{\"description\":\"Was playback used to lure the animal?\",\"type\":\"string\"},\"q\":{\"description\":\"Current quality rating for the recording\",\"type\":\"string\"},\"rec\":{\"description\":\"Name of the recordist\",\"type\":\"string\"},\"regnr\":{\"description\":\"Registration number of specimen (when collected)\",\"type\":\"string\"},\"rmk\":{\"description\":\"Additional remarks by the recordist\",\"type\":\"string\"},\"sex\":{\"description\":\"Sex of the animal\",\"type\":\"string\"},\"smp\":{\"description\":\"Sample rate\",\"type\":\"string\"},\"sono\":{\"description\":\"URLs to the four versions of sonograms\",\"properties\":{\"full\":{\"type\":\"string\"},\"large\":{\"type\":\"string\"},\"med\":{\"type\":\"string\"},\"small\":{\"type\":\"string\"}},\"type\":\"object\"},\"sp\":{\"description\":\"Specific name (epithet) of the species\",\"type\":\"string\"},\"ssp\":{\"description\":\"Subspecies name (subspecific epithet)\",\"type\":\"string\"},\"stage\":{\"description\":\"Life stage of the animal (adult, juvenile, etc.)\",\"type\":\"string\"},\"temp\":{\"description\":\"Temperature during recording (applicable to specific groups only)\",\"type\":\"string\"},\"time\":{\"description\":\"Time of day that the recording was made\",\"type\":\"string\"},\"type\":{\"description\":\"Sound type of the recording (e.g., call, song)\",\"type\":\"string\"},\"uploaded\":{\"description\":\"Date that the recording was uploaded to xeno-canto\",\"type\":\"string\"},\"url\":{\"description\":\"URL specifying the details of this recording\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"numRecordings\",\"numSpecies\",\"page\",\"numPages\",\"recordings\"],\"type\":\"object\"}}},\"description\":\"Successful query returning recordings\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Identifier for the error\",\"type\":\"string\"},\"message\":{\"description\":\"Additional explanatory details about the error\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Client error - invalid request parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Identifier for the error\",\"type\":\"string\"},\"message\":{\"description\":\"Additional explanatory details about the error\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Server error\"}},\"security\":[{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key available to all registered XC members with verified email addresses\",\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/recordings", "segments": [{ "lit": "recordings" }], "select": { "exist": ["key", "page", "per_page", "query"] }, "transform": { "req": "`reqdata`", "res": "`body.recordings`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "recording", "name__orig": "recording", "Name": "Recording", "name_": "recording", "name-": "recording", "NAME": "RECORDING", "index$": 0 }, { "active": true, "entity": "recording", "key$": "BasicRecordingFlow", "kind": "basic", "name": "BasicRecordingFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "recording_ref01" } }], "index$": 0 }] }, 'Recording');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let recording_ref01_data = Object.values(setup.data.existing.recording)[0];
        // LIST
        const recording_ref01_ent = client.Recording();
        const recording_ref01_match = {};
        const recording_ref01_list = (await recording_ref01_ent.list(recording_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/recording/RecordingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.XenoCantoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['recording01', 'recording02', 'recording03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'XENO_CANTO_TEST_RECORDING_ENTID': idmap,
        'XENO_CANTO_TEST_LIVE': 'FALSE',
        'XENO_CANTO_TEST_EXPLAIN': 'FALSE',
        'XENO_CANTO_APIKEY': '',
    });
    idmap = env['XENO_CANTO_TEST_RECORDING_ENTID'];
    const live = 'TRUE' === env.XENO_CANTO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['XENO_CANTO_TEST_RECORDING_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.XenoCantoSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=RecordingEntity.test.js.map