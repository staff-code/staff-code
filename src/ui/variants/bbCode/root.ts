import {buildDisplay} from "../../display"
import {setupInput} from "../../input"
import {transferInputToDisplay} from "../../transfer"

const setupBBCodeRoot = (root: Element): void => {
    if (root.classList.contains("processed")) return
    root.classList.add("processed")

    const display = buildDisplay()
    root.appendChild(display)

    const input: HTMLTextAreaElement = root.querySelector("textarea")!
    setupInput(input)

    transferInputToDisplay(root)
}

export {
    setupBBCodeRoot,
}
