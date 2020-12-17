import {HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT} from "../constants"

const svg = document.createElement("svg") as Element as SVGElement
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink")
svg.setAttribute("height", `${HEIGHT_WHICH_CAUSES_SVG_TO_MATCH_TEXT}`)

export {
    svg,
}
