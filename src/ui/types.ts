import {FontName, Io, Sentence} from "@sagittal/general"
import {Unicode} from "../translate"

type StaffCodeCallback = (inputSentence: Io & Sentence, unicodeSentence: Unicode & Sentence) => any

type StaffCodeOptions = Partial<{
    interactive: boolean,
    download: boolean,
    copyLink: boolean,
    inline: boolean,
    initialText: Io,
    font: FontName,
    initialSize: number,
    initialLineHeight: number,
    callback: StaffCodeCallback,
    sizeSpinner: boolean,
    lineHeightSpinner: boolean,
}>

export {
    StaffCodeOptions,
    StaffCodeCallback,
}
