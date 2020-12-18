import {buildDisplay} from "../../display"
import {processStaffCode} from "./process"

// TODO: weirdly similar to package/dom#buildStaffCode
const setupRoot = (root: Element): void => {
    const display = buildDisplay()
    root.appendChild(display)

    // TODO: could offer download button on forum. increases bundle to 500 KB. and of course impacts human-readability
    // const svg = buildSvg()
    // root.appendChild(buildDownloadButton(display, svg))

    processStaffCode(root)
}

export {
    setupRoot,
}
