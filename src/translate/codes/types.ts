import {Px} from "@sagittal/general"

type Unicode = string & {_UniBrand: boolean}

type Octels = Px & {_OctelsBrand: boolean}

interface Symbol {
    unicode: Unicode,
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
