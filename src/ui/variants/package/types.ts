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
    sizeSpinner?: HTMLInputElement,
    lineSpinner?: HTMLInputElement,
    reference?: HTMLDivElement,
    referenceToc?: HTMLUListElement,
    referenceWrapper?: HTMLDivElement,
    referenceExpander?: HTMLSpanElement,
    referenceExpanderToolip?: HTMLSpanElement,
    referenceBanner?: HTMLSpanElement,
    copyLinkMessage?: HTMLDivElement,
}

export {
    Initial,
    EncodedCode,
    Components,
}
