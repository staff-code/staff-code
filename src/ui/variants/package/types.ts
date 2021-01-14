enum Initial {
    CODES = "codes",
    SIZE = "size",
    LINE = "line",
    REFERENCE_OPEN = "reference-open",
}

type EncodedCode = string & {_EncodedCode: boolean}

interface Components {
    input: HTMLTextAreaElement,
    display: HTMLElement,
    root: HTMLSpanElement,
    reference: HTMLDivElement,
    toc: HTMLUListElement,
    sizeSpinner: HTMLInputElement,
    lineSpinner: HTMLInputElement,
    referenceWrapper: HTMLDivElement,
    referenceExpander: HTMLSpanElement,
    copyLinkMessage: HTMLDivElement,
}

export {
    Initial,
    EncodedCode,
    Components,
}
