import {Word} from "@sagittal/general"
import {Octels, Unicode} from "../../codes"
import {SPACING_UNICODES} from "./constants"

const computeSpacing = (unicode: Unicode & Word): Octels =>
    SPACING_UNICODES.indexOf(unicode) as Octels

export {
    computeSpacing,
}
