import {buildDisplay} from "../../display"
import {setupInput} from "../../input"
import {transferInputToDisplay} from "../../transfer"

const setupBBCodeRoot = (root: Element): void => {
    if (root.classList.contains("processed")) return
    root.classList.add("processed")

    const inline = root.classList.contains("inline")

    const display = buildDisplay(inline)
    root.appendChild(display)

    const input: HTMLTextAreaElement = root.querySelector(".input") as HTMLTextAreaElement
    setupInput(input)

    transferInputToDisplay(root)
}

export {
    setupBBCodeRoot,
}
