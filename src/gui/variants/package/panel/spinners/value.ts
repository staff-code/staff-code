import {Em, Multiplier} from "@sagittal/general"
import {DEFAULT_INITIAL_LINE, DEFAULT_INITIAL_SIZE} from "../../../../constants"
import {components} from "../../globals"

const getLine = (): Multiplier<Em> =>
    !components.lineSpinner ?
        DEFAULT_INITIAL_LINE :
        parseFloat(components.lineSpinner.value) as Multiplier<Em>

const getSize = (): Multiplier<Em> =>
    !components.sizeSpinner ?
        DEFAULT_INITIAL_SIZE :
        parseFloat(components.sizeSpinner.value) as Multiplier<Em>

export {
    getLine,
    getSize,
}
