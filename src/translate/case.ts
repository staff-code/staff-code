import {caseDesensitize, CaseDesensitized, Unicode, Word} from "@sagittal/general"
import {Code} from "../../bin"

const computeCaseDesensitizedCodes = (
    map: Record<Code & Word, Unicode & Word>,
): Array<Code & CaseDesensitized & Word> =>
    (Object.keys(map) as Array<Code & Word>).map(caseDesensitize)

export {
    computeCaseDesensitizedCodes,
}
