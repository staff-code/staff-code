import {RecordKey, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../../bin"
import smuflJson from "./smufl.json"

const SMuFL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = smuflJson as Record<string, string> as
    Record<RecordKey<Code & Word>, Unicode & Word>

export {
    SMuFL_MAP,
}
