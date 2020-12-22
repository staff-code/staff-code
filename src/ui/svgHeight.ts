import {computeLineCount, Px} from "@sagittal/general"
import {Unicode} from "../translate"

const HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT: Px = 57 as Px
const APPARENT_SCALING_EXPONENT = 1.16

const computeSvgHeight = (unicodeSentence: Unicode): Px =>
    HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT * (computeLineCount(unicodeSentence) ** APPARENT_SCALING_EXPONENT) as Px

export {
    computeSvgHeight,
}
