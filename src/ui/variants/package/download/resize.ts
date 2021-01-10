// TODO: FEATURE IMPROVE, READY TO GO: ENSURE DOWNLOADED SVG REFLECTS LINE HEIGHT AND SIZE
import {computeLineCount, Px} from "@sagittal/general"
//  I don't think size are affecting the SVG. line is I think.
import {Unicode} from "../../../../translate"

const HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT: Px = 57 as Px
const APPARENT_SCALING_EXPONENT = 1.16

const computeSvgHeight = (unicodeSentence: Unicode): Px =>
    HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT * (computeLineCount(unicodeSentence) ** APPARENT_SCALING_EXPONENT) as Px

const scaleSVGToFitContents = (svg: SVGGraphicsElement): void => {
    const bbox = svg.getBBox()

    svg.setAttribute("width", `${bbox.x + bbox.width + bbox.x}`)
    svg.setAttribute("height", `${bbox.y + bbox.height + bbox.y}`)
}

export {
    computeSvgHeight,
    scaleSVGToFitContents,
}
