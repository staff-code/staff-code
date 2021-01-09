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
    referenceExpander: HTMLDetailsElement,
}

export {
    Initial,
    EncodedCode,
    Components,
}
