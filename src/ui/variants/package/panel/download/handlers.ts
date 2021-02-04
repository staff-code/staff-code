import {BLANK, Filename, Html, Link, Sentence} from "@sagittal/general"
import {Unicode} from "../../../../../translate"
import {translateInputToDisplay} from "../../../../translate"
import {ImageType} from "../../../../types"
import {components, staffCodeConfig} from "../../globals"
import {setPreviousInputState} from "../input"
import {convertSvgToPng} from "./rasterize"
import {getImageType} from "./value"
import {computeSvgStringFromInput} from "./vectorize"

const SVG_TYPE = "image/svg+xml;charset=utf-8"

const SVG_DOWNLOAD_FILENAME: Filename = "staffCode.svg" as Filename
const PNG_DOWNLOAD_FILENAME: Filename = "staffCode.png" as Filename

const buildSvgDataUrl = (svgString: Html): Link => {
    const blob = new Blob([svgString], {type: SVG_TYPE})

    return URL.createObjectURL(blob) as Link
}

const saveDataUrl = (url: Link, filename: Filename): void => {
    const a = document.createElement("a")
    a.href = url
    a.target = "_blank"
    a.download = filename
    a.click()
}

const downloadImage = async (imageType: ImageType = getImageType()): Promise<void> => {
    const {display, root} = components

    translateInputToDisplay(root, staffCodeConfig.callback)
    setPreviousInputState()

    const unicodeSentence: Unicode & Sentence = (display.textContent || BLANK) as Unicode & Sentence

    if (process?.env?.TEST_MODE) return

    const svgString = await computeSvgStringFromInput(unicodeSentence)
    const svgDataUrl = buildSvgDataUrl(svgString)

    if (imageType === ImageType.PNG) {
        const pngDataUrl = await convertSvgToPng(svgString, svgDataUrl)

        saveDataUrl(pngDataUrl, PNG_DOWNLOAD_FILENAME)
    } else {
        saveDataUrl(svgDataUrl, SVG_DOWNLOAD_FILENAME)
    }
}

export {
    downloadImage,
}
