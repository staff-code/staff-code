import {BLANK, FontName, vectorizeText} from "@sagittal/general"
import {Unicode} from "../translate"
import {DEFAULT_LINE_HEIGHT_MULTIPLIER} from "./display"
import {computeSvgHeight} from "./svgHeight"

const DOWNLOAD_FILENAME: string = "staffCode.svg"

// TODO: FEATURE IMPROVE, TOUGH AND LOW PRIORITY: SVG SIZE
//  - programmatically determine its total width, whatever needed to match contents, not just safe but huge
//  - if you have a very low leger note, it gets cut off in the SVG
//  - adjustable line height (give users control of the vertical spacing between staves,
//  And hence (after adding some constant) the height of the output field when it consists of a single staff,
//  Then the units should be staff-spaces, not octels.
//  The minimum would normally be 2 spaces.
//  That's enough room for one leger line between the staves.
//  You currently have 6 spaces between staves — enough for 5 leger lines.
//  That seems like the most anyone should want. But I suppose we could allow from 1 to 8.
//  The codes could be of the form "stsp<n>".
//  But then I thort maybe the space above the staff should be settable independently of the space below.
//  Sometimes you may want more leger lines for one than the other.
//  Each of those could be adjustable from 0 to 7 spaces. "spup<n>" and "spdn<n>".
//  (Me: this could be related to the DEFAULT_LINE_HEIGHT_MULTIPLIER)

const downloadSvg = (display: HTMLElement, svg: SVGElement): void => {
    const unicodeSentence: Unicode = (display.textContent || BLANK) as Unicode

    const height = computeSvgHeight(unicodeSentence)
    svg.setAttribute("height", `${height}`)

    const options = {
        height,
        font: "Bravura Text BB" as FontName,
        lineSpacing: DEFAULT_LINE_HEIGHT_MULTIPLIER,
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
