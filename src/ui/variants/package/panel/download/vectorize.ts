import {Html, Multiplier, Px, Sentence, textToSvg, TextToSvgOptions} from "@sagittal/general"
// tslint:disable no-reaching-imports
// @ts-ignore
import bravuraTextScOtf from "../../../../../../assets/fonts/BravuraTextSC.otf"
import {smarts, Unicode} from "../../../../../translate"
import {getLine} from "../spinners"
import {computeFontSizeForTextToSvg} from "./font"

const EXTRA_SVG_WIDTH_TO_COMPENSATE_FOR_FLOORED_WIDTH_GLYPHS = 1 as Px // 1 Octal ≈ 1 Pixel

const computeSvgStringFromInput = (unicodeSentence: Unicode & Sentence): Promise<Html> => {
    const line = getLine() as Multiplier as Multiplier<Px>
    const fontSize = computeFontSizeForTextToSvg()
    const options = {
        font: bravuraTextScOtf,
        line,
        fontSize,
        padding: smarts.spacing,
        extraWidth: EXTRA_SVG_WIDTH_TO_COMPENSATE_FOR_FLOORED_WIDTH_GLYPHS,
    } as TextToSvgOptions

    return textToSvg(unicodeSentence, options)
}

const parseSvgFromSvgString = (svgString: Html): SVGGraphicsElement => {
    const svgParser = new DOMParser()
    const svgDocument = svgParser.parseFromString(svgString, "text/html")

    return svgDocument.firstChild as SVGGraphicsElement
}

const computeSvgFromInput = async (unicodeSentence: Unicode & Sentence): Promise<SVGGraphicsElement> => {
    const svgString = await computeSvgStringFromInput(unicodeSentence)

    return parseSvgFromSvgString(svgString)
}

export {
    computeSvgStringFromInput,
    computeSvgFromInput,
}
