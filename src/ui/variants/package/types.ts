enum Initial {
    CODES = "codes",
    SIZE = "size",
    LINE = "line",
    REFERENCE_OPEN = "reference-open",
}

type EncodedCode = string & {_EncodedCode: boolean}

export {
    Initial,
    EncodedCode,
}
