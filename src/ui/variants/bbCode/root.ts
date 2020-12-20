import {buildDisplay} from "../../display"
import {transferInputToDisplay} from "../../transfer"

const setupBBCodeRoot = (root: Element): void => {
    if (root.classList.contains("processed")) return
    root.classList.add("processed")

    const display = buildDisplay()
    root.appendChild(display)

    // TODO: FEATURE IMPROVE, BLOCKED: DOWNLOAD BUTTON FOR BBCODE TOO
    //  Could offer download button on forum. increases bundle to 500 KB. and of course impacts human-readability
    //  Blocked because waiting for Dave's response on whether to keep it
    // const svg = buildSvg()
    // root.appendChild(buildDownloadButton(display, svg))

    transferInputToDisplay(root)
}

export {
    setupBBCodeRoot,
}
