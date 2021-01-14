import {Px} from "@sagittal/general"

type Unicode = string & {_UniBrand: boolean}

type Octals = Px & {_OctalsBrand: boolean}

type Code = string & {_CodeBrand: boolean}

type CaseDesensitized = string & {_CaseDesensitizedBrand: boolean}

type UnicodeLiteral = string & {_UnicodeLiteralBrand: boolean}

export {
    Unicode,
    Octals,
    Code,
    CaseDesensitized,
    UnicodeLiteral,
}
