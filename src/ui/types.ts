import {Em, FontName, Io, Multiplier, Sentence} from "@sagittal/general"
import {Unicode} from "../translate"

type StaffCodeCallback = (inputSentence: Io & Sentence, unicodeSentence: Unicode & Sentence) => any

interface StaffCodeConfig {
    ui: UiOptions,
    initial: InitialOptions,
    font: FontName,
    callback: StaffCodeCallback,
}

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

interface InitialFontSizeOptions {
    inline: boolean,
    initialSize: Multiplier<Em>,
}

export {
    StaffCodeConfig,
    StaffCodeOptions,
    StaffCodeCallback,
    UiOptions,
    InitialOptions,
    DisplayOptions,
    InitialFontSizeOptions,
}
