import {Word} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {SPACING_UNICODES} from "./constants"

const computeSpacing = (unicode: Unicode & Word): Octals =>
    SPACING_UNICODES.indexOf(unicode) as Octals

export {
    computeSpacing,
}
