import {BLANK, Link, Sentence, vectorizeText} from "@sagittal/general"
import {smarts, Unicode} from "../../../../translate"
import {DEFAULT_FONT} from "../../../fonts"
import {components} from "../globals"
import {
    buildHiddenButAddedToDOMSvgWhoseContentsSizeCanBeMeasuredInOrderToScaleItToFitThem,
    computeSvgHeight,
    cropSvgToFitContents,
} from "./resize"

const DOWNLOAD_FILENAME: string = "staffCode.svg"

const cloneANonHiddenSoItCanBeSeenButNotAddedToDOMSvgNowThatItHasBeenScaled = (
    svg: SVGGraphicsElement,
): SVGGraphicsElement => {
    const clonedSvg = svg.cloneNode(true) as SVGGraphicsElement
    clonedSvg.classList.add("sc-cloned-svg")

    return clonedSvg
}

const buildDummyDownloadLinkAndClickIt = (svgBlobURL: Link): void => {
    const a: HTMLAnchorElement = document.createElement("a")

    a.style.display = "none"
    a.href = svgBlobURL
    a.download = DOWNLOAD_FILENAME

    a.click()
    window.URL.revokeObjectURL(svgBlobURL)
}

const buildSvgBlobUrl = (clonedSvg: SVGGraphicsElement): Link => {
    const outerHTML = clonedSvg.outerHTML
    const blob = new Blob([outerHTML], {type: "image/svg+xml;charset=utf-8"})
    const URL = window.URL || window.webkitURL || window

    return URL.createObjectURL(blob) as Link
}

const downloadSvg = (): void => {
    const {display} = components
    const unicodeSentence: Unicode & Sentence = (display.textContent || BLANK) as Unicode & Sentence

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

    const clonedSvg = cloneANonHiddenSoItCanBeSeenButNotAddedToDOMSvgNowThatItHasBeenScaled(svg)

    const svgBlobUrl = buildSvgBlobUrl(clonedSvg)

    buildDummyDownloadLinkAndClickIt(svgBlobUrl)
}

export {
    downloadSvg,
}
