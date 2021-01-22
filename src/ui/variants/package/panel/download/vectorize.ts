import {Multiplier, Px, Sentence, textToSvg, TextToSvgOptions} from "@sagittal/general"
import {smarts, Unicode} from "../../../../../translate"
import {BRAVURA_TEXT_SC_OTF} from "../../../../constants"
import {getLine} from "../spinners"
import {computeFontSizeForTextToSvg} from "./font"

const computeSvgFromInput = async (unicodeSentence: Unicode & Sentence): Promise<SVGGraphicsElement> => {
    const line = getLine() as Multiplier as Multiplier<Px>
    const fontSize = computeFontSizeForTextToSvg()
    const options = {
        font: BRAVURA_TEXT_SC_OTF,
        line,
        fontSize,
        padding: smarts.spacing,
    } as TextToSvgOptions
    const svgString = await textToSvg(unicodeSentence, options)

    const svgParser = new DOMParser()
    const svgDocument = svgParser.parseFromString(svgString, "text/html")

    return svgDocument.firstChild as SVGGraphicsElement
}

export {
    computeSvgFromInput,
}
