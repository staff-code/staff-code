import {buildDisplay} from "../../display"
import {transferInputToDisplay} from "../../transfer"

const setupBBCodeRoot = (root: Element): void => {
    if (root.classList.contains("processed")) return
    root.classList.add("processed")

    const display = buildDisplay()
    root.appendChild(display)

    transferInputToDisplay(root)
}

export {
    setupBBCodeRoot,
}
