import {Unicode, Word} from "@sagittal/general"
import {WIDTH_TO_ADVANCE_UNICODE_ARRAY} from "./constants"
import {Octals} from "./types"

const computeManualAdvanceWidth = (unicode: Unicode & Word): Octals =>
    WIDTH_TO_ADVANCE_UNICODE_ARRAY.indexOf(unicode) as Octals

export {
    computeManualAdvanceWidth,
}
