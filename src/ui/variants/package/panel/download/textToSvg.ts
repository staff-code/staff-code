import {Em, Multiplier, Px, Sentence, textToSvg, TextToSvgOptions} from "@sagittal/general"
import {smarts, Unicode} from "../../../../../translate"
import {BRAVURA_TEXT_BB_OTF} from "../../../../constants"
import {computeFontSize} from "../../font"
import {components} from "../../globals"

const emToPx = (em: Em): Px =>
    em * 16 as Px

const computeSvgFromInput = async (unicodeSentence: Unicode & Sentence): Promise<SVGGraphicsElement> => {
    const line = parseFloat(components.lineSpinner.value) as Multiplier<Px>
    const fontSize = emToPx(computeFontSize(parseFloat(components.sizeSpinner.value) as Multiplier<Em>))
    const options = {
        font: BRAVURA_TEXT_BB_OTF,
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
