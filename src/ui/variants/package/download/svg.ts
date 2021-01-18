import {BLANK, Link, Sentence} from "@sagittal/general"
import {Unicode} from "../../../../translate"
import {components} from "../globals"
import {computeSvgFromInputUsingVectorizeTextLibrary} from "./vectorizeText"

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

const downloadSvg = async (): Promise<void> => {
    const {display} = components
    const unicodeSentence: Unicode & Sentence = (display.textContent || BLANK) as Unicode & Sentence

    const svg = computeSvgFromInputUsingVectorizeTextLibrary(unicodeSentence)
    // TODO: Finish this
    // const svg = await computeSvgFromInputUsingTextToSvgLibrary(unicodeSentence)

    const clonedSvg = cloneANonHiddenSoItCanBeSeenButNotAddedToDOMSvgNowThatItHasBeenScaled(svg)

    const svgBlobUrl = buildSvgBlobUrl(clonedSvg)

    buildDummyDownloadLinkAndClickIt(svgBlobUrl)
}

export {
    downloadSvg,
}
