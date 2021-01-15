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
    toc: HTMLUListElement,
    sizeSpinner: HTMLInputElement,
    lineSpinner: HTMLInputElement,
    reference: HTMLDivElement,
    referenceWrapper: HTMLDivElement,
    referenceExpander: HTMLSpanElement,
    referenceBanner: HTMLSpanElement,
    copyLinkMessage: HTMLDivElement,
}

export {
    Initial,
    EncodedCode,
    Components,
}
