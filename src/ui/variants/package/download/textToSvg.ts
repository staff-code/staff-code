import {Em, FontName, Multiplier, Px, Sentence, textToSvg} from "@sagittal/general"
import {smarts, Unicode} from "../../../../translate"
import {computeFontSize} from "../font"
import {components} from "../globals"

const emToPx = (em: Em): Px =>
    em * 16 as Px

const computeSvgFromInput = async (unicodeSentence: Unicode & Sentence): Promise<SVGGraphicsElement> => {
    const line = parseFloat(components.lineSpinner.value) as Multiplier<Px>
    const fontSize = emToPx(computeFontSize(parseFloat(components.sizeSpinner.value) as Multiplier<Em>))
    const options = {font: "assets/fonts/BravuraTextBB.otf" as FontName, line, fontSize}
    const svgString = await textToSvg(unicodeSentence, options)

    // I'm not worrying about minding the line count because ultimately @sagittal/general will handle this for you
    const height = line * fontSize
    const heightAndMarginAdjustedSvg = svgString.replace(/height="(\d+)"/, `height="${height}" style="padding: ${smarts.spacing}px"`)

    const svgParser = new DOMParser()
    const svgDocument = svgParser.parseFromString(heightAndMarginAdjustedSvg, "text/html")

    const svg = svgDocument.firstChild as SVGGraphicsElement

    svg.style.padding = `${smarts.spacing}px`

    return svg
}

export {
    computeSvgFromInput,
}
