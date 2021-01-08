import {Em, FontName, Io, Multiplier, Name, Sentence} from "@sagittal/general"
import {Unicode, UnicodeLiteral} from "../translate"

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
}

interface InitialOptions {
    codes: Io & Sentence,
    size: Multiplier<Em>,
    line: Multiplier<Em>,
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

interface RootOptions {
    copyLinkButton: boolean,
    sizeSpinner: boolean,
    lineSpinner: boolean,
    initialSize: Multiplier<Em>,
    initialLine: Multiplier<Em>,
}

enum Initial {
    CODES = "codes",
    SIZE = "size",
    LINE = "line",
}

type EncodedCode = string & {_EncodedCode: boolean}

interface RangeData {
    description: string,
    glyphs: Array<Name<Unicode>>,
    range_end: UnicodeLiteral,
    range_start: UnicodeLiteral,
}

export {
    StaffCodeOptions,
    StaffCodeCallback,
    Initial,
    DisplayOptions,
    UiOptions,
    InitialOptions,
    InputOptions,
    RootOptions,
    EncodedCode,
    RangeData,
}
