import {BLANK, Sentence} from "@sagittal/general"
import {Unicode} from "../../../../../translate"
import {translateInputToDisplay} from "../../../../translate"
import {components, staffCodeConfig} from "../../globals"
import {setPreviousInputState} from "../input"
import {computeSvgFromInput} from "./vectorize"

const DOWNLOAD_FILENAME: string = "staffCode.svg"
const TYPE = "image/svg+xml;charset=utf-8"

const buildBlobAndSaveIt = (svg: SVGGraphicsElement): void => {
    const outerHTML = svg.outerHTML
    const blob = new Blob([outerHTML], {type: TYPE})

    const a = document.createElement("a")
    a.href = URL.createObjectURL(blob)
    a.target = "_blank"
    a.download = DOWNLOAD_FILENAME
    a.click()
}

const downloadSvg = async (): Promise<void> => {
    const {display, root} = components

    translateInputToDisplay(root, staffCodeConfig.callback)
    setPreviousInputState()

    const unicodeSentence: Unicode & Sentence = (display.textContent || BLANK) as Unicode & Sentence

    if (process?.env?.TEST_MODE) return

    const svg = await computeSvgFromInput(unicodeSentence)

    buildBlobAndSaveIt(svg)
}

export {
    downloadSvg,
}
