import {Em, FontName, Io, Multiplier, Sentence} from "@sagittal/general"
import {Unicode} from "../translate"

type StaffCodeCallback = (inputSentence: Io & Sentence, unicodeSentence: Unicode & Sentence) => any

type StaffCodeOptions = Partial<{
    ui: Partial<UiOptions>,
    initial: Partial<InitialOptions>,
    font: FontName,
    callback: StaffCodeCallback,
}>

interface UiOptions {
    interactive: boolean,
    inline: boolean,
    downloadButton: boolean,
    copyLinkButton: boolean,
    sizeSpinner: boolean,
    lineSpinner: boolean,
    reference: boolean,
}

interface InitialOptions {
    codes: Io & Sentence,
    size: Multiplier<Em>,
    line: Multiplier<Em>,
    referenceOpen: boolean,
}

interface DisplayOptions {
    inline: boolean,
    font: FontName,
    initialSize: Multiplier<Em>,
    initialLine: Multiplier<Em>,
}

interface InputOptions {
    interactive: boolean,
    initialCodes: Io & Sentence,
    callback?: StaffCodeCallback,
}

interface Components {
    input: HTMLTextAreaElement,
    display: HTMLElement,
    root: HTMLSpanElement,
    reference: HTMLDivElement,
    toc: HTMLUListElement,
    sizeSpinner: HTMLInputElement,
    lineSpinner: HTMLInputElement,
    referenceLink: HTMLDetailsElement, // todo better name please?
}

export {
    StaffCodeOptions,
    StaffCodeCallback,
    DisplayOptions,
    UiOptions,
    InitialOptions,
    InputOptions,
    Components,
}
