import {BLANK, FontName, vectorizeText} from "@sagittal/general"
import {Unicode} from "../translate"
import {LINE_HEIGHT_MULTIPLIER} from "./display"
import {computeSvgHeight} from "./svgHeight"

const DOWNLOAD_FILENAME: string = "staffCode.svg"

// TODO: FEATURE IMPROVE, TOUGH AND LOW PRIORITY: PROGRAMMATICALLY DETERMINE WIDTH OF SVG
//  - Do whatever it takes to make the SVGs width match its contents, rather than just be something safe but huge

// TODO: BUG: SVG VERTICAL OUT OF BOUNDS HIGH AND LOW NOTES
//  If you have a very low leger note, it gets cut off in the SVG

const downloadSvg = (display: HTMLElement, svg: SVGElement): void => {
    const unicodeSentence: Unicode = (display.textContent || BLANK) as Unicode

    const height = computeSvgHeight(unicodeSentence)
    svg.setAttribute("height", `${height}`)

    const options = {
        height,
        font: "Bravura Text BB" as FontName,
        lineSpacing: LINE_HEIGHT_MULTIPLIER,
        styletags: {breaklines: true},
    }
    svg.innerHTML = vectorizeText(unicodeSentence, options)

    const outerHTML = svg.outerHTML
    const blob = new Blob([outerHTML], {type: "image/svg+xml;charset=utf-8"})
    const URL = window.URL || window.webkitURL || window
    const blobURL = URL.createObjectURL(blob)
    const a: HTMLAnchorElement = document.createElement("a")

    a.style.display = "none"
    a.href = blobURL
    a.download = DOWNLOAD_FILENAME

    a.click()
    window.URL.revokeObjectURL(blobURL)
}

export {
    downloadSvg,
}
