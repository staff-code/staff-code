import {Io, Sentence} from "@sagittal/general"
import {EncodedCode} from "./types"

const prepareCodesToBeHumanReadableAsEncodedQueryParams = (
    inputSentence: Io & Sentence,
): EncodedCode & Sentence =>
    inputSentence
        .replace(/j/g, "jj")
        .replace(/-/g, "j")
        .replace(/([^ ]) (?=[^ ]|$)/g, "$1-")
        .replace(/q/g, "qq")
        .replace(/([^;]);(?=[^;]|$)/g, "$1q") as EncodedCode & Sentence

const undoPreparationOfCodesToBeHumanReadableAsEncodedQueryParams = (
    encodedSentence: EncodedCode & Sentence,
): Io & Sentence =>
    encodedSentence
        .replace(/([^q])q(?=[^q]|$)/g, "$1;")
        .replace(/qq/g, "q")
        .replace(/([^\-])-(?=[^\-]|$)/g, "$1 ")
        .replace(/jj/g, "j")
        .replace(/j/g, "-") as Io & Sentence

export {
    prepareCodesToBeHumanReadableAsEncodedQueryParams,
    undoPreparationOfCodesToBeHumanReadableAsEncodedQueryParams,
}
