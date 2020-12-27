import {add, isUndefined} from "@sagittal/general"
import {Octels, Symbol} from "./codes"
import {smarts} from "./smarts"

const DEFAULT_SYMBOL_WIDTH = 10 as Octels

const computeSymbolWidth = ({width}: Symbol): Octels =>
    add(isUndefined(width) ? DEFAULT_SYMBOL_WIDTH : width, smarts.spacing)

export {
    computeSymbolWidth,
}
