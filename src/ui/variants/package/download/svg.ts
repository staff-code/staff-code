import {BLANK, vectorizeText} from "@sagittal/general"
import {Unicode} from "../../../../translate"
import {DEFAULT_FONT} from "../../../fonts"
import {components} from "../globals"
import {computeSvgHeight, scaleSVGToFitContents} from "./resize"

const DOWNLOAD_FILENAME: string = "staffCode.svg"

const buildHiddenButAddedToDOMSvgWhoseContentsSizeCanBeMeasuredInOrderToScaleItToFitThem = (): SVGGraphicsElement => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg") as Element as SVGGraphicsElement
    svg.classList.add("sc-svg")

    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink")

    document.body.appendChild(svg)

    return svg
}

const cloneANonHiddenSoItCanBeSeenButNotAddedToDOMSvgNowThatItHasBeenScaled = (
    svg: SVGGraphicsElement,
): SVGGraphicsElement => {
    const clonedSvg = svg.cloneNode(true) as SVGGraphicsElement
    clonedSvg.classList.add("sc-cloned-svg")

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

const downloadSvg = (): void => {
    const {display} = components
    const unicodeSentence: Unicode = (display.textContent || BLANK) as Unicode
    const options = {
        height: computeSvgHeight(unicodeSentence),
        font: DEFAULT_FONT,
        lineSpacing: parseFloat(display.style.lineHeight),
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
