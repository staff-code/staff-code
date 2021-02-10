import {Em, Multiplier} from "@sagittal/general"
import {components} from "../../globals"
import {computeInitialLine, computeInitialSize} from "../../initial"

const getSize = (): Multiplier<Em> =>
    !components.sizeSpinner ?
        computeInitialSize() :
        parseFloat(components.sizeSpinner.value) as Multiplier<Em>

const getLine = (): Multiplier<Em> =>
    !components.lineSpinner ?
        computeInitialLine() :
        parseFloat(components.lineSpinner.value) as Multiplier<Em>

export {
    getSize,
    getLine,
}
