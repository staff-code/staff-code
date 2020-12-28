import {Px} from "@sagittal/general"

type Unicode = string & {_UniBrand: boolean}

type Octels = Px & {_OctelsBrand: boolean}

type Code = string & {_CodeBrand: boolean}

type LowercasedCode = Code & {_LowercasedCodeBrand: boolean}

type UnicodeLiteral = string & {_UnicodeLiteralBrand: boolean}

export {
    Unicode,
    Octels,
    Code,
    LowercasedCode,
    UnicodeLiteral,
}
