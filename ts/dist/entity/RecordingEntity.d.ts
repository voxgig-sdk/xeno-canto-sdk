import { XenoCantoEntityBase } from '../XenoCantoEntityBase';
import type { XenoCantoSDK } from '../XenoCantoSDK';
import type { Control } from '../types';
import type { Recording, RecordingListMatch } from '../XenoCantoTypes';
declare class RecordingEntity extends XenoCantoEntityBase<Recording> {
    constructor(client: XenoCantoSDK, entopts: any);
    make(this: RecordingEntity): RecordingEntity;
    list(this: any, reqmatch?: RecordingListMatch, ctrl?: Control): Promise<RecordingEntity[]>;
}
export { RecordingEntity };
