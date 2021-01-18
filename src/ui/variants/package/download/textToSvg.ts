import {FontName, Sentence, textToSvg} from "@sagittal/general"
import {Unicode} from "../../../../translate"

const computeSvgFromInputUsingTextToSvgLibrary = async (
    unicodeSentence: Unicode & Sentence
): Promise<SVGGraphicsElement> => {
    const svgString = await textToSvg(unicodeSentence, {font: "assets/fonts/BravuraTextBB.otf" as FontName})

    const svgParser = new DOMParser()
    const svgDocument = svgParser.parseFromString(svgString, "text/html")

    return svgDocument.firstChild as SVGGraphicsElement
}

export {
    computeSvgFromInputUsingTextToSvgLibrary,
}
