import {Filename, Html, Multiplier, Px, Sentence, textToSvg, TextToSvgOptions} from "@sagittal/general"
import {smarts, Unicode} from "../../../../../translate"
import {BRAVURA_TEXT_SC_OTF} from "../../../../constants"
import {getLine} from "../spinners"
import {computeFontSizeForTextToSvg} from "./font"

const EXTRA_SVG_WIDTH_TO_COMPENSATE_FOR_FLOORED_WIDTH_GLYPHS = 1 as Px // 1 Octal ≈ 1 Pixel

const loadBravuraTextScFont = async (): Promise<Filename> => {
    let bravuraTextScOtf
    if (!process?.env?.TEST_MODE) {
        // @ts-ignore
        // tslint:disable-next-line:no-reaching-imports
        bravuraTextScOtf = await import("../../../../../../assets/fonts/BravuraTextSC.otf")
        bravuraTextScOtf = bravuraTextScOtf.default
    } else {
        bravuraTextScOtf = BRAVURA_TEXT_SC_OTF
    }

    return bravuraTextScOtf
}

const computeSvgStringFromInput = async (unicodeSentence: Unicode & Sentence): Promise<Html> => {
    const font = await loadBravuraTextScFont()

    const line = getLine() as Multiplier as Multiplier<Px>
    const fontSize = computeFontSizeForTextToSvg()
    const options = {
        font,
        line,
        fontSize,
        padding: smarts.spacing,
        extraWidth: EXTRA_SVG_WIDTH_TO_COMPENSATE_FOR_FLOORED_WIDTH_GLYPHS,
    } as TextToSvgOptions

    return textToSvg(unicodeSentence, options)
}

export {
    computeSvgStringFromInput,
}
