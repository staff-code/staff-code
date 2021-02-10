import {CaseDesensitized, Word} from "@sagittal/general"
import {Code} from "../../../../bin"
import {CASE_DESENSITIZED_SPACING_CODES} from "./constants"
import {Octals} from "./types"

const computeSpacing = (caseDesensitizedCode: Code & CaseDesensitized & Word): Octals =>
    CASE_DESENSITIZED_SPACING_CODES.indexOf(caseDesensitizedCode) as Octals

export {
    computeSpacing,
}
