import {BLANK, Sentence} from "@sagittal/general"
import * as FileSaver from "file-saver"
import {Unicode} from "../../../../translate"
import {components} from "../globals"
import {computeSvgFromInput} from "./textToSvg"

const DOWNLOAD_FILENAME: string = "staffCode.svg"
const TYPE = "image/svg+xml;charset=utf-8"

const cloneANonHiddenSoItCanBeSeenButNotAddedToDOMSvgNowThatItHasBeenScaled = (
    svg: SVGGraphicsElement,
): SVGGraphicsElement => {
    const clonedSvg = svg.cloneNode(true) as SVGGraphicsElement
    clonedSvg.classList.add("sc-cloned-svg")

    return clonedSvg
}

const buildBlobAndSaveIt = (svg: SVGGraphicsElement): void => {
    const outerHTML = svg.outerHTML
    const blob = new Blob([outerHTML], {type: TYPE})

    FileSaver.saveAs(blob, DOWNLOAD_FILENAME)
}

const downloadSvg = async (): Promise<void> => {
    const {display} = components
    const unicodeSentence: Unicode & Sentence = (display.textContent || BLANK) as Unicode & Sentence

    const svg = await computeSvgFromInput(unicodeSentence)

    const clonedSvg = cloneANonHiddenSoItCanBeSeenButNotAddedToDOMSvgNowThatItHasBeenScaled(svg)

    buildBlobAndSaveIt(clonedSvg)
}

export {
    downloadSvg,
}
