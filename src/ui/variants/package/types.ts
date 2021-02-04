enum Initial {
    CODES = "codes",
    SIZE = "size",
    LINE = "line",
    REFERENCE_OPEN = "reference-open",
    IMAGE_TYPE = "image-type",
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
    imageSelect?: HTMLSelectElement,
}

export {
    Initial,
    EncodedCode,
    Components,
}
