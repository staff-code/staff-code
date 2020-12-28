import {Word} from "@sagittal/general"
import {Octels, Unicode} from "../../codes"
import {WIDTH_TO_ADVANCE_UNICODE_ARRAY} from "./constants"

const computeManualAdvanceWidth = (unicode: Unicode & Word): Octels =>
    WIDTH_TO_ADVANCE_UNICODE_ARRAY.indexOf(unicode) as Octels

export {
    computeManualAdvanceWidth,
}
