import {RecordKey, Word} from "@sagittal/general"
import {Code, Unicode} from "../types"
import smuflJson from "./smufl.json"

const SMuFL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = smuflJson as Record<string, string> as
    Record<RecordKey<Code & Word>, Unicode & Word>

export {
    SMuFL_MAP,
}
