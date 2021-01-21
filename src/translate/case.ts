import {Word} from "@sagittal/general"
import {CaseDesensitized, Code, Unicode} from "./codes"

const caseDesensitize = <T extends Code>(code: T): T & CaseDesensitized =>
    code.toLowerCase() as T & CaseDesensitized

const computeCaseDesensitizedCodes = (
    map: Record<Code & Word, Unicode & Word>
): Array<Code & CaseDesensitized & Word> =>
    (Object.keys(map) as Array<Code & Word>).map(caseDesensitize)

export {
    caseDesensitize,
    computeCaseDesensitizedCodes,
}
