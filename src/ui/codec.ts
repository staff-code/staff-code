import {Io, Sentence, SPACE} from "@sagittal/general"
import {EncodedCode} from "./types"

// TODO, FEATURE IMPROVE, READY TO GO: RENAME PARAM ENCODING TO BE SOMETHING MORE TO DO WITH HUMAN READABILITY

const encodeCodes = (inputSentence: Io & Sentence): EncodedCode & Sentence =>
    inputSentence
        .replace(/ /g, "-")
        .replace(/q/g, "qq")
        .replace(/;+/g, "q") as EncodedCode & Sentence

const decodeCodes = (encodedSentence: EncodedCode & Sentence): Io & Sentence =>
    encodedSentence
        .replace(/-/g, SPACE)
        .replace(/([^q])q([^q])/g, "$1;$2")
        .replace(/qq/g, "q") as Io & Sentence

export {
    encodeCodes,
    decodeCodes,
}
