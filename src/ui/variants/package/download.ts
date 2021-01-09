import {BLANK, computeLineCount, Px, vectorizeText} from "@sagittal/general"
import {Unicode} from "../../../translate"
import {DEFAULT_FONT} from "../../fonts"

const HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT: Px = 57 as Px
const APPARENT_SCALING_EXPONENT = 1.16

const DOWNLOAD_FILENAME: string = "staffCode.svg"

// TODO: FEATURE IMPROVE, READY TO GO: ENSURE DOWNLOADED SVG REFLECTS LINE HEIGHT AND SIZE
//  I don't think size are affecting the SVG. line is I think.
const computeSvgHeight = (unicodeSentence: Unicode): Px =>
    HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT * (computeLineCount(unicodeSentence) ** APPARENT_SCALING_EXPONENT) as Px

const scaleSVGToFitContents = (svg: SVGGraphicsElement): void => {
    const bbox = svg.getBBox()

    svg.setAttribute("width", `${bbox.x + bbox.width + bbox.x}`)
    svg.setAttribute("height", `${bbox.y + bbox.height + bbox.y}`)
}

const buildHiddenButAddedToDOMSvgWhoseContentsSizeCanBeMeasuredInOrderToScaleItToFitThem = (): SVGGraphicsElement => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg") as Element as SVGGraphicsElement
    svg.style.position = "absolute"
    svg.style.top = "-9999px"
    svg.style.left = "-9999px"

    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink")

    document.body.appendChild(svg)

    return svg
}

const cloneANonHiddenSoItCanBeSeenButNotAddedToDOMSvgNowThatItHasBeenScaled = (
    svg: SVGGraphicsElement,
): SVGGraphicsElement => {
    const clonedSvg = svg.cloneNode(true) as SVGGraphicsElement
    clonedSvg.style.position = "relative"
    clonedSvg.style.top = "0"
    clonedSvg.style.left = "0"

    return clonedSvg
}

const buildDummyDownloadLinkAndClickIt = (svgBlobURL: string): void => {
    const a: HTMLAnchorElement = document.createElement("a")

    a.style.display = "none"
    a.href = svgBlobURL
    a.download = DOWNLOAD_FILENAME

    a.click()
    window.URL.revokeObjectURL(svgBlobURL)
}

const buildSvgBlobUrl = (clonedSvg: SVGGraphicsElement): string => {
    const outerHTML = clonedSvg.outerHTML
    const blob = new Blob([outerHTML], {type: "image/svg+xml;charset=utf-8"})
    const URL = window.URL || window.webkitURL || window

    return URL.createObjectURL(blob)
}

const downloadSvg = (display: HTMLElement): void => {
    const unicodeSentence: Unicode = (display.textContent || BLANK) as Unicode
    const options = {
        height: computeSvgHeight(unicodeSentence),
        font: DEFAULT_FONT,
        lineSpacing: parseFloat(display.style.lineHeight),
        styletags: {breaklines: true},
    }

    const svg = buildHiddenButAddedToDOMSvgWhoseContentsSizeCanBeMeasuredInOrderToScaleItToFitThem()
    svg.innerHTML = vectorizeText(unicodeSentence, options)
    scaleSVGToFitContents(svg)
    const clonedSvg = cloneANonHiddenSoItCanBeSeenButNotAddedToDOMSvgNowThatItHasBeenScaled(svg)

    const svgBlobUrl = buildSvgBlobUrl(clonedSvg)

    buildDummyDownloadLinkAndClickIt(svgBlobUrl)
}

export {
    downloadSvg,
}
