import {Px, Sentence, vectorizeText} from "@sagittal/general"
import {smarts, Unicode} from "../../../../translate"
import {DEFAULT_FONT} from "../../../fonts"
import {components} from "../globals"

const ABSOLUTE_WIDTH_TO_BASE_RELATIVE_HEIGHT_AGAINST = 1000 as Px
const UNKNOWN_FACTOR = 2 / 3

const buildHiddenButAddedToDOMSvgWhoseContentsSizeCanBeMeasuredInOrderToScaleItToFitThem = (): SVGGraphicsElement => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg") as Element as SVGGraphicsElement
    svg.classList.add("sc-svg")

    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink")

    components.root.appendChild(svg)

    return svg
}

const computeSvgHeight = (unicodeSentence: Unicode & Sentence): Px => {
    const {display} = components

    const optionsForInitialVectorizationToDetermineHeight = {
        width: ABSOLUTE_WIDTH_TO_BASE_RELATIVE_HEIGHT_AGAINST,
        font: DEFAULT_FONT,
        lineSpacing: parseFloat(display.style.lineHeight),
    }
    const initialSvgForDeterminingRelativeHeight =
        buildHiddenButAddedToDOMSvgWhoseContentsSizeCanBeMeasuredInOrderToScaleItToFitThem()
    initialSvgForDeterminingRelativeHeight.innerHTML =
        vectorizeText(unicodeSentence, optionsForInitialVectorizationToDetermineHeight)
    const relativeHeight = getSvgHeight(initialSvgForDeterminingRelativeHeight)

    const actualWidth = display.offsetWidth

    return relativeHeight * (actualWidth / ABSOLUTE_WIDTH_TO_BASE_RELATIVE_HEIGHT_AGAINST) * UNKNOWN_FACTOR as Px
}

const cropSvgToFitContents = (svg: SVGGraphicsElement): void => {
    const bbox = svg.getBBox()

    svg.setAttribute("width", `${bbox.x + bbox.width + bbox.x}`)
    svg.setAttribute("height", `${bbox.y + bbox.height + bbox.y}`)
}

const getSvgHeight = (svg: SVGGraphicsElement): Px => {
    const bbox = svg.getBBox()

    return bbox.y + bbox.height + bbox.y as Px
}

const computeSvgFromInputUsingVectorizeTextLibrary = (unicodeSentence: Unicode & Sentence): SVGGraphicsElement => {
    const {display} = components

    const options = {
        height: computeSvgHeight(unicodeSentence),
        font: DEFAULT_FONT,
        lineSpacing: parseFloat(display.style.lineHeight),
    }
    const svg = buildHiddenButAddedToDOMSvgWhoseContentsSizeCanBeMeasuredInOrderToScaleItToFitThem()
    svg.innerHTML = vectorizeText(unicodeSentence, options)
    cropSvgToFitContents(svg)
    svg.style.padding = `${smarts.spacing}px`

    // TODO: BUG, READY TO GO: VECTORIZE-TEXT MANGLING ON REPEAT DOWNLOADS WITH CHANGES
    //  Going to have to deal with this crazy garbled nonsense you get seemingly
    //  If you ever try to download the SVG more than once without refreshing the page

    // TODO: BUG, READY TO GO: VECTORIZE-TEXT IS CUTTING OFF THE BOTTOM OF MULTI-LINE DISPLAYS

    return svg
}

export {
    computeSvgFromInputUsingVectorizeTextLibrary,
}
