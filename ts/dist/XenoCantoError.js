"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XenoCantoError = void 0;
class XenoCantoError extends Error {
    isXenoCantoError = true;
    sdk = 'XenoCanto';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.XenoCantoError = XenoCantoError;
//# sourceMappingURL=XenoCantoError.js.map