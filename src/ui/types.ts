import {Decimal, FontName, Io, Sentence} from "@sagittal/general"
import {Unicode} from "../translate"

type StaffCodeCallback = (inputSentence: Io & Sentence, unicodeSentence: Unicode & Sentence) => any

type StaffCodeOptions = Partial<{
    interactive: boolean,
    download: boolean,
    inline: boolean,
    initialText: Io,
    font: FontName,
    // TODO: FEATURE ADJUST, READY TO GO: SIZE VS LINE HEIGHT
    //  Size should no longer be a percentage; SIMPLETEXT not number (but still called "size")
    size: Decimal<{integer: true}>,
    lineHeight: number,
    callback: StaffCodeCallback,
}>

export {
    StaffCodeOptions,
    StaffCodeCallback,
}



