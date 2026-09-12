import { Context } from './Context';
declare class XenoCantoError extends Error {
    isXenoCantoError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { XenoCantoError };
