import {Px} from "@sagittal/general"

type Unicode = string & {_UniBrand: boolean}

type Octals = Px & {_OctalsBrand: boolean}

type Code = string & {_CodeBrand: boolean}

type LowercasedCode = Code & {_LowercasedCodeBrand: boolean}

type UnicodeLiteral = string & {_UnicodeLiteralBrand: boolean}

export {
    Unicode,
    Octals,
    Code,
    LowercasedCode,
    UnicodeLiteral,
}
