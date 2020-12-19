import {BLANK, FontName, vectorizeText} from "@sagittal/general"
import {HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT} from "./constants"

const DOWNLOAD_FILENAME: string = "staffCode.svg"

// TODO: BUG, LOW PRIORITY: BOUNDING BOXES IN SVG IF DOWNLOAD RIGHT AWAY
//  It doesn't affect Dave's needs for EDO staff notation; but important to solve before unveiling to wide audience

// TODO: FEATURE IMPROVE, LOW PRIORITY: SVG WIDTH
//  Do whatever it takes to make the SVGs width match its contents
//  Which may be intertwined with the other to-do re: line breaks, since you'll need to add a layer between what
//  Displays on the DOM and what vectorize-text renders

const downloadSvg = (display: HTMLDivElement, svg: SVGElement): void => {
    const unicodeSentence = display.textContent || BLANK
    svg.innerHTML = vectorizeText(unicodeSentence, {height: HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT, font: "Bravura Text BB" as FontName})

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
