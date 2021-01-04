import {Decimal, FontName, Io, Sentence} from "@sagittal/general"
import {Unicode} from "../translate"

type StaffCodeCallback = (inputSentence: Io & Sentence, unicodeSentence: Unicode & Sentence) => any

type StaffCodeOptions = Partial<{
    interactive: boolean,
    download: boolean,
    inline: boolean,
    initialText: Io,
    font: FontName,
    // TODO: FEATURE ADJUST, BLOCKED: SIZE VS LINE HEIGHT
    //  Size should no longer be a percentage; SIMPLETEXT not number (wait on Dave to rename to "scale" potentially)
    size: Decimal<{integer: true}>,
    lineHeight: number,
    callback: StaffCodeCallback,
}>

export {
    StaffCodeOptions,
    StaffCodeCallback,
}

// TODO: remote hosted fonts and staffCode.js so we could use it anywhere

// TODO: an expandable resource of all the codes you can click into and copy
