import {Io, Maybe, Sentence} from "@sagittal/general"
import {BRAVURA_TEXT_SC, DEFAULT_INITIAL_LINE, DEFAULT_INITIAL_SIZE} from "../../constants"
import {buildDisplay} from "../../display"
import {translateInputToDisplay} from "../../translate"
import {StaffCodeCallback, StaffCodeOptions} from "../../types"

const setupBBCodeRoot = (root: HTMLSpanElement, options: StaffCodeOptions = {}): void => {
    const {
        gui: {
            inline = false,
        } = {},
        initial: {
            codes: initialCodes,
            size: initialSize = DEFAULT_INITIAL_SIZE,
            line: initialLine = DEFAULT_INITIAL_LINE,
        } = {},
        font = BRAVURA_TEXT_SC,
        callback,
    } = options

    if (root.classList.contains("processed")) return
    root.classList.add("processed")
    if (!inline) root.style.display = "inline-block"

    const input: HTMLTextAreaElement = root.querySelector(".sc-input") as HTMLTextAreaElement
    if (initialCodes) input.value = initialCodes as Io & Sentence

    const display = buildDisplay({font, initialLine, initialSize, inline})
    root.appendChild(display)

    translateInputToDisplay(root, callback as Maybe<StaffCodeCallback>)
}

export {
    setupBBCodeRoot,
}
