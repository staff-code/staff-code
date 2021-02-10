import {Em, FontName, Io, Multiplier, Sentence, Unicode} from "@sagittal/general"

type StaffCodeCallback = (inputSentence: Io & Sentence, unicodeSentence: Unicode & Sentence) => any

interface StaffCodeConfig {
    gui: GuiOptions,
    initial: InitialOptions,
    font: FontName,
    callback?: StaffCodeCallback,
}

type StaffCodeOptions = Partial<{
    gui: Partial<GuiOptions>,
    initial: Partial<InitialOptions>,
    font: FontName,
    callback: StaffCodeCallback,
}>

interface GuiOptions {
    interactive: boolean,
    inline: boolean,
    downloadButton: boolean,
    copyLinkButton: boolean,
    sizeSpinner: boolean,
    lineSpinner: boolean,
    reference: boolean,
    imageSelect: boolean,
}

interface InitialOptions {
    codes: Io & Sentence,
    size: Multiplier<Em>,
    line: Multiplier<Em>,
    referenceOpen: boolean,
    imageType: ImageType,
}

enum ImageType {
    SVG = "svg",
    PNG = "png",
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
    GuiOptions,
    ImageType,
    DisplayOptions,
    InitialFontSizeOptions,
}
