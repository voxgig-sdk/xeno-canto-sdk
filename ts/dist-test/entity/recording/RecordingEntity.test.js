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
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('recording hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.XenoCantoSDK.test(offline).Recording().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.XenoCantoSDK.test(offline).Recording()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.XenoCantoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Recording().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.XenoCantoSDK.test().Recording().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.XenoCantoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Recording().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Recording().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.XenoCantoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Recording().list({ "key": 1, "query": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.XENO_CANTO_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'recording.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "also": { "a": true, "h": "Also", "n": "also", "r": false, "sh": "Identified background species in the recording", "t": "`$ARRAY`", "key$": "also", "index$": 0 }, "alt": { "a": true, "h": "Alt", "n": "alt", "r": false, "sh": "Altitude at which the recording was made", "t": "`$STRING`", "key$": "alt", "index$": 1 }, "animalseen": { "a": true, "h": "Animalseen", "n": "animalseen", "r": false, "sh": "Was the recorded animal seen?", "t": "`$STRING`", "key$": "animalseen", "index$": 2 }, "auto": { "a": true, "h": "Auto", "n": "auto", "r": false, "sh": "Automatic (non-supervised) recording?", "t": "`$STRING`", "key$": "auto", "index$": 3 }, "cnt": { "a": true, "h": "Cnt", "n": "cnt", "r": false, "sh": "Country where the recording was made", "t": "`$STRING`", "key$": "cnt", "index$": 4 }, "date": { "a": true, "h": "Date", "n": "date", "r": false, "sh": "Date that the recording was made", "t": "`$STRING`", "key$": "date", "index$": 5 }, "dvc": { "a": true, "h": "Dvc", "n": "dvc", "r": false, "sh": "Recording device used", "t": "`$STRING`", "key$": "dvc", "index$": 6 }, "en": { "a": true, "h": "En", "n": "en", "r": false, "sh": "English name of the species", "t": "`$STRING`", "key$": "en", "index$": 7 }, "file": { "a": true, "h": "File", "n": "file", "r": false, "sh": "URL to the audio file", "t": "`$STRING`", "key$": "file", "index$": 8 }, "filename": { "a": true, "h": "Filename", "n": "filename", "r": false, "sh": "Original file name of the audio file", "t": "`$STRING`", "key$": "filename", "index$": 9 }, "gen": { "a": true, "h": "Gen", "n": "gen", "r": false, "sh": "Generic name of the species", "t": "`$STRING`", "key$": "gen", "index$": 10 }, "grp": { "a": true, "h": "Grp", "n": "grp", "r": false, "sh": "Group to which the species belongs", "t": "`$STRING`", "key$": "grp", "index$": 11 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Catalogue number of the recording on xeno-canto", "t": "`$STRING`", "key$": "id", "index$": 12 }, "lat": { "a": true, "h": "Lat", "n": "lat", "r": false, "sh": "Latitude of the recording in decimal coordinates", "t": "`$STRING`", "key$": "lat", "index$": 13 }, "length": { "a": true, "h": "Length", "n": "length", "r": false, "sh": "Length of the recording in minutes", "t": "`$STRING`", "key$": "length", "index$": 14 }, "lic": { "a": true, "h": "Lic", "n": "lic", "r": false, "sh": "URL describing the license of this recording", "t": "`$STRING`", "key$": "lic", "index$": 15 }, "loc": { "a": true, "h": "Loc", "n": "loc", "r": false, "sh": "Name of the locality", "t": "`$STRING`", "key$": "loc", "index$": 16 }, "lon": { "a": true, "h": "Lon", "n": "lon", "r": false, "sh": "Longitude of the recording in decimal coordinates", "t": "`$STRING`", "key$": "lon", "index$": 17 }, "method": { "a": true, "h": "Method", "n": "method", "r": false, "sh": "Recording method (field recording, in the hand, etc.)", "t": "`$STRING`", "key$": "method", "index$": 18 }, "mic": { "a": true, "h": "Mic", "n": "mic", "r": false, "sh": "Microphone used", "t": "`$STRING`", "key$": "mic", "index$": 19 }, "osci": { "a": true, "h": "Osci", "n": "osci", "r": false, "sh": "URLs to the three versions of oscillograms", "t": "`$OBJECT`", "key$": "osci", "index$": 20 }, "playbackused": { "a": true, "h": "Playbackused", "n": "playbackused", "r": false, "sh": "Was playback used to lure the animal?", "t": "`$STRING`", "key$": "playbackused", "index$": 21 }, "q": { "a": true, "h": "Q", "n": "q", "r": false, "sh": "Current quality rating for the recording", "t": "`$STRING`", "key$": "q", "index$": 22 }, "rec": { "a": true, "h": "Rec", "n": "rec", "r": false, "sh": "Name of the recordist", "t": "`$STRING`", "key$": "rec", "index$": 23 }, "regnr": { "a": true, "h": "Regnr", "n": "regnr", "r": false, "sh": "Registration number of specimen (when collected)", "t": "`$STRING`", "key$": "regnr", "index$": 24 }, "rmk": { "a": true, "h": "Rmk", "n": "rmk", "r": false, "sh": "Additional remarks by the recordist", "t": "`$STRING`", "key$": "rmk", "index$": 25 }, "sex": { "a": true, "h": "Sex", "n": "sex", "r": false, "sh": "Sex of the animal", "t": "`$STRING`", "key$": "sex", "index$": 26 }, "smp": { "a": true, "h": "Smp", "n": "smp", "r": false, "sh": "Sample rate", "t": "`$STRING`", "key$": "smp", "index$": 27 }, "sono": { "a": true, "h": "Sono", "n": "sono", "r": false, "sh": "URLs to the four versions of sonograms", "t": "`$OBJECT`", "key$": "sono", "index$": 28 }, "sp": { "a": true, "h": "Sp", "n": "sp", "r": false, "sh": "Specific name (epithet) of the species", "t": "`$STRING`", "key$": "sp", "index$": 29 }, "ssp": { "a": true, "h": "Ssp", "n": "ssp", "r": false, "sh": "Subspecies name (subspecific epithet)", "t": "`$STRING`", "key$": "ssp", "index$": 30 }, "stage": { "a": true, "h": "Stage", "n": "stage", "r": false, "sh": "Life stage of the animal (adult, juvenile, etc.)", "t": "`$STRING`", "key$": "stage", "index$": 31 }, "temp": { "a": true, "h": "Temp", "n": "temp", "r": false, "sh": "Temperature during recording (applicable to specific groups only)", "t": "`$STRING`", "key$": "temp", "index$": 32 }, "time": { "a": true, "h": "Time", "n": "time", "r": false, "sh": "Time of day that the recording was made", "t": "`$STRING`", "key$": "time", "index$": 33 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "Sound type of the recording (e.g., call, song)", "t": "`$STRING`", "key$": "type", "index$": 34 }, "uploaded": { "a": true, "h": "Uploaded", "n": "uploaded", "r": false, "sh": "Date that the recording was uploaded to xeno-canto", "t": "`$STRING`", "key$": "uploaded", "index$": 35 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "sh": "URL specifying the details of this recording", "t": "`$STRING`", "key$": "url", "index$": 36 } }, "id": { "field": "id", "name": "id" }, "name": "recording", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /recordings", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "key", "or": "key", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 100, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": "sp:\"larus fuscus\"", "k": "query", "n": "query", "or": "query", "r": true, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/recordings", "q": { "exist": ["key", "query"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "recordings" }], "t": { "req": "`reqdata`", "res": "`body.recordings`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "recording", "name__orig": "recording", "Name": "Recording", "name_": "recording", "name-": "recording", "NAME": "RECORDING", "index$": 0 }, { "active": true, "entity": "recording", "key$": "BasicRecordingFlow", "kind": "basic", "name": "BasicRecordingFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "recording_ref01" } }], "index$": 0 }] }, 'Recording', { "GET /recordings": { "protocol": "http", "parameters": [{ "name": "query", "in": "query", "description": "Search query string using search tags (e.g., sp:\"larus fuscus\", gen:turdus, cnt:spain). Must be non-empty. See documentation for available search tags.", "required": true, "schema": { "type": "string" }, "example": "sp:\"larus fuscus\"", "index$": 0 }, { "name": "key", "in": "query", "description": "API key for authentication. Available to all registered XC members with verified email addresses. Required for all API v3 requests.", "required": true, "schema": { "type": "string" }, "index$": 1 }, { "name": "per_page", "in": "query", "description": "Number of results per page. Valid values range from 50 to 500. Default is 100.", "required": false, "schema": { "type": "integer", "minimum": 50, "maximum": 500, "default": 100 }, "index$": 2 }, { "name": "page", "in": "query", "description": "Page number for paginated results. Must be between 1 and numPages from the response.", "required": false, "schema": { "type": "integer", "minimum": 1, "default": 1 }, "index$": 3 }] } }, { strict: LIVE_STRICT, t });
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
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
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