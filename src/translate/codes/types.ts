import {Px} from "@sagittal/general"

type Unicode = string & {_UniBrand: boolean}

type Octels = Px & {_OctelsBrand: boolean}

interface Symbol {
    unicode: Unicode,
    width?: Octels,
}

type Codeword = string & {_CodewordBrand: boolean}

type LowercaseCodeword = string & {_LowercaseCodewordBrand: boolean}

export {
    Unicode,
    Octels,
    Symbol,
    Codeword,
    LowercaseCodeword,
}
