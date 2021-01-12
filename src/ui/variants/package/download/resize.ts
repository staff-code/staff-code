import {computeLineCount, Px} from "@sagittal/general"
import {Unicode} from "../../../../translate"
import {DEFAULT_BLOCK_MODE_FONT_SIZE} from "../../../display"
import {components} from "../globals"

const DEFAULT_EM_SIZE: Px = 16 as Px
const FIRST_LINE = 1

// TODO: CLEAN, READY TO GO: TEST MORE UI HELPER METHODS
//  E.g. this one could and should be tested. Should be easy.
//  But you should just go through everything that looks unit testable and backfill them
const computeSvgHeight = (unicodeSentence: Unicode): Px => {
    const {lineSpinner, sizeSpinner} = components

    const lineCount = computeLineCount(unicodeSentence)
    const lineHeight = parseFloat(lineSpinner.value)
    const heightFromAdditionalLines = (lineCount - FIRST_LINE) * lineHeight

    const size = parseFloat(sizeSpinner.value)

    return DEFAULT_BLOCK_MODE_FONT_SIZE * DEFAULT_EM_SIZE * size * (FIRST_LINE + heightFromAdditionalLines) as Px
}

const scaleSVGToFitContents = (svg: SVGGraphicsElement): void => {
    const bbox = svg.getBBox()

    svg.setAttribute("width", `${bbox.x + bbox.width + bbox.x}`)
    svg.setAttribute("height", `${bbox.y + bbox.height + bbox.y}`)
}

export {
    computeSvgHeight,
    scaleSVGToFitContents,
}
