import {BLANK, Sentence} from "@sagittal/general"
import {Unicode} from "../../../../../translate"
import {components} from "../../globals"
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

    const reader = new FileReader()
    reader.onload = (): void => {
        window.location.href = reader.result as string
    }
    reader.readAsDataURL(blob)

    const fileURL = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = fileURL
    a.target = "_blank"
    a.download = DOWNLOAD_FILENAME
    document.body.appendChild(a)
    a.click()
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
