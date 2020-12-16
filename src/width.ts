import {Symbol, Width} from "./symbols"

const DEFAULT_SYMBOL_WIDTH = 11 as Width

const computeSymbolWidth = ({width}: Symbol): Width =>
    width === undefined ? DEFAULT_SYMBOL_WIDTH : width

export {
    computeSymbolWidth,
}
