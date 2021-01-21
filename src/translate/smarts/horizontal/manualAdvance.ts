import {Word} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {WIDTH_TO_ADVANCE_UNICODE_ARRAY} from "./constants"

const computeManualAdvanceWidth = (unicode: Unicode & Word): Octals =>
    WIDTH_TO_ADVANCE_UNICODE_ARRAY.indexOf(unicode) as Octals

export {
    computeManualAdvanceWidth,
}
