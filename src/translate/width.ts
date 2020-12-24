import {add, isUndefined} from "@sagittal/general"
import {smarts} from "./smarts"
import {Symbol, Width} from "./codes"

const DEFAULT_SYMBOL_WIDTH = 10 as Width

const computeSymbolWidth = ({width}: Symbol): Width =>
    add(isUndefined(width) ? DEFAULT_SYMBOL_WIDTH : width, smarts.spacing)

export {
    computeSymbolWidth,
}
