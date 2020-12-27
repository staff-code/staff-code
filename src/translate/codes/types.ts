import {Px, Word} from "@sagittal/general"

type Unicode = string & {_UniBrand: boolean}

type Octels = Px & {_OctelsBrand: boolean}

interface Symbol {
    unicode: Unicode & Word,
    width?: Octels,
}

type Code = string & {_CodeBrand: boolean}

type LowercaseCode = string & {_LowercaseCodeBrand: boolean}

export {
    Unicode,
    Octels,
    Symbol,
    Code,
    LowercaseCode,
}
