import {BLANK, Link, Px, vectorizeText} from "@sagittal/general"
import {Unicode} from "../../../../translate"
import {DEFAULT_FONT} from "../../../fonts"
import {components} from "../globals"
import {cropSVGToFitContents, getDummyHeight} from "./resize"

const DOWNLOAD_FILENAME: string = "staffCode.svg"

const buildHiddenButAddedToDOMSvgWhoseContentsSizeCanBeMeasuredInOrderToScaleItToFitThem = (): SVGGraphicsElement => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg") as Element as SVGGraphicsElement
    svg.classList.add("sc-svg")

    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink")

    components.root.appendChild(svg)

    return svg
}

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

const DUMMY_WIDTH = 1000 as Px

const downloadSvg = (): void => {
    const {display} = components
    const unicodeSentence: Unicode = (display.textContent || BLANK) as Unicode

    const dummyOptions = {
        width: DUMMY_WIDTH,
        font: DEFAULT_FONT,
        lineSpacing: parseFloat(display.style.lineHeight),
    }
    const dummySvg = buildHiddenButAddedToDOMSvgWhoseContentsSizeCanBeMeasuredInOrderToScaleItToFitThem()
    dummySvg.innerHTML = vectorizeText(unicodeSentence, dummyOptions)
    const dummyHeight = getDummyHeight(dummySvg) // todo relative to 1000 width

    const actualWidth = display.offsetWidth
    const options = {
        height: dummyHeight * (actualWidth / DUMMY_WIDTH) * (2/3) as Px, // todo dunno why the 2/3 is importatn
        font: DEFAULT_FONT,
        lineSpacing: parseFloat(display.style.lineHeight),
    }
    const svg = buildHiddenButAddedToDOMSvgWhoseContentsSizeCanBeMeasuredInOrderToScaleItToFitThem()

    svg.innerHTML = vectorizeText(unicodeSentence, options)
    cropSVGToFitContents(svg)

    // todo also going to have to deal with this crazy garbled nonsense you get seemingly
    //  if you ever try to download the SVG more than once without refreshing the page

    const clonedSvg = cloneANonHiddenSoItCanBeSeenButNotAddedToDOMSvgNowThatItHasBeenScaled(svg)

    const svgBlobUrl = buildSvgBlobUrl(clonedSvg)

    buildDummyDownloadLinkAndClickIt(svgBlobUrl)
}

export {
    downloadSvg,
}
