import {Io, Sentence} from "@sagittal/general"
import {components} from "../../globals"
import {INPUT_PREVIOUS_POSITION_DATA_ATTRIBUTE, INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE} from "./constants"

const setPreviousInputState = (): void => {
    const {input} = components

    input.setAttribute(INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE, input.value)
    input.setAttribute(INPUT_PREVIOUS_POSITION_DATA_ATTRIBUTE, JSON.stringify(input.selectionStart))
}

const getPreviousInputState = (): {value: Io & Sentence, position: number} => {
    const {input} = components

    const value = input.getAttribute(INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE) as Io & Sentence
    const position = parseInt(input.getAttribute(INPUT_PREVIOUS_POSITION_DATA_ATTRIBUTE) as string)

    return {value, position}
}

export {
    setPreviousInputState,
    getPreviousInputState,
}
