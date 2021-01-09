import {
    DeepPartial,
    Em,
    FontName, Io,
    Maybe,
    Multiplier,
    Sentence,
    setAllPropertiesOfObjectOnAnother,
} from "@sagittal/general"
import {DEFAULT_INITIAL_CODES, DEFAULT_INITIAL_LINE, DEFAULT_INITIAL_SIZE} from "../../constants"
import {buildDisplay} from "../../display"
import {DEFAULT_FONT} from "../../fonts"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeCallback, StaffCodeOptions} from "../../types"

const setupBBCodeRoot = (root: HTMLSpanElement, options: DeepPartial<StaffCodeOptions> = {}): void => {
    const {
        ui: {
            inline = false,
        } = {},
        initial: {
            codes = DEFAULT_INITIAL_CODES,
            size = DEFAULT_INITIAL_SIZE,
            line = DEFAULT_INITIAL_LINE,
        } = {},
        font = DEFAULT_FONT,
        callback,
    } = options

    if (root.classList.contains("processed")) return
    root.classList.add("processed")

    const input: HTMLTextAreaElement = root.querySelector(".input") as HTMLTextAreaElement
    if (codes) input.value = codes as Io & Sentence

    const display = buildDisplay({
        font: font as FontName,
        initialLine: line as Multiplier<Em>,
        initialSize: size as Multiplier<Em>,
        inline
    })
    root.appendChild(display)

    transferInputToDisplay(root, callback as Maybe<StaffCodeCallback>)
}

export {
    setupBBCodeRoot,
}
