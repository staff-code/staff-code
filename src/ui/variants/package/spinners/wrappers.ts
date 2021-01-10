import {Initial} from "../types"
import {handleLineSpinnerChange, handleSizeSpinnerChange} from "./handlers"
import {buildSpinnerWrapper} from "./spinners"

const buildSizeSpinnerWrapper = (): HTMLSpanElement =>
    buildSpinnerWrapper(Initial.SIZE, handleSizeSpinnerChange)

const buildLineSpinnerWrapper = (): HTMLSpanElement =>
    buildSpinnerWrapper(Initial.LINE, handleLineSpinnerChange)

export {
    buildSizeSpinnerWrapper,
    buildLineSpinnerWrapper,
}
