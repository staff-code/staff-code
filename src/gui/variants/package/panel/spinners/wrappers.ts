import {Em, Max, Multiplier} from "@sagittal/general"
import {Initial} from "../../types"
import {handleLineSpinnerChange, handleSizeSpinnerChange} from "./handlers"
import {buildSpinnerWrapper} from "./spinners"

const buildSizeSpinnerWrapper = (): HTMLSpanElement =>
    buildSpinnerWrapper(Initial.SIZE, handleSizeSpinnerChange, 10 as Max<Multiplier<Em>>)

const buildLineSpinnerWrapper = (): HTMLSpanElement =>
    buildSpinnerWrapper(Initial.LINE, handleLineSpinnerChange, 20 as Max<Multiplier<Em>>)

export {
    buildSizeSpinnerWrapper,
    buildLineSpinnerWrapper,
}
