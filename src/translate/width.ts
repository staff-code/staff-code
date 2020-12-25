import {add, isUndefined} from "@sagittal/general"
import {smarts} from "./smarts"
import {Symbol, Octels} from "./codes"

const DEFAULT_SYMBOL_WIDTH = 10 as Octels

const computeSymbolWidth = ({width}: Symbol): Octels =>
    add(isUndefined(width) ? DEFAULT_SYMBOL_WIDTH : width, smarts.spacing)

export {
    computeSymbolWidth,
}
