import {FontName, Io, Sentence} from "@sagittal/general"
import {Unicode} from "../translate"

type StaffCodeCallback = (inputSentence: Io & Sentence, unicodeSentence: Unicode & Sentence) => any

type StaffCodeOptions = Partial<{
    interactive: boolean,
    download: boolean,
    inline: boolean,
    initialText: Io,
    font: FontName,
    lineHeight: number,
    callback: StaffCodeCallback,
}>

export {
    StaffCodeOptions,
    StaffCodeCallback,
}
