import {Word} from "@sagittal/general"
import {CaseDesensitized, Code, Octals} from "../../codes"
import {CASE_DESENSITIZED_SPACING_CODES} from "./constants"

const computeSpacing = (caseDesensitizedCode: Code & CaseDesensitized & Word): Octals =>
    CASE_DESENSITIZED_SPACING_CODES.indexOf(caseDesensitizedCode) as Octals

export {
    computeSpacing,
}
