import {components} from "../../globals"
import {INPUT_PREVIOUS_POSITION_DATA_ATTRIBUTE, INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE} from "./constants"

const handleReferenceTableUndo = (event: KeyboardEvent): void => {
    if (event.code === "KeyZ" && event.ctrlKey) {
        let previousValue = components.reference.getAttribute(INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE)
        if (previousValue) {
            let previousPosition = parseInt(
                components.reference.getAttribute(INPUT_PREVIOUS_POSITION_DATA_ATTRIBUTE) as string,
            )
            components.input.value = previousValue
            components.input.selectionStart = previousPosition
            components.input.selectionEnd = previousPosition
            components.reference.removeAttribute(INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE)
            components.reference.removeAttribute(INPUT_PREVIOUS_POSITION_DATA_ATTRIBUTE)
        }
    }
}

export {
    handleReferenceTableUndo,
}
