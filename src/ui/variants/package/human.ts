import {Io, Sentence} from "@sagittal/general"
import {EncodedCode} from "./types"

const prepareCodesToBeHumanReadableAsEncodedQueryParams = (
    inputSentence: Io & Sentence,
): EncodedCode & Sentence =>
    inputSentence
        .replace(/-/g, "--")
        .replace(/([^ \-]) (?=[^ \-]|$)/g, "$1-")
        .replace(/z/g, "zz")
        .replace(/br;/g, "\n")
        .replace(/([^\nz])\n(?=[^\n]|$)/g, "$1z")
        .replace(/q/g, "qq")
        .replace(/([^;q]);(?=[^;q]|$)/g, "$1q") as EncodedCode & Sentence

const undoPreparationOfCodesToBeHumanReadableAsEncodedQueryParams = (
    encodedSentence: EncodedCode & Sentence,
): Io & Sentence =>
    encodedSentence
        .replace(/([^q])q(?=[^q]|$)/g, "$1;")
        .replace(/qq/g, "q")
        .replace(/([^z])z(?=[^z]|$)/g, "$1br;")
        .replace(/zz/g, "z")
        .replace(/([^\-])-(?=[^\-]|$)/g, "$1 ")
        .replace(/--/g, "-") as Io & Sentence

export {
    prepareCodesToBeHumanReadableAsEncodedQueryParams,
    undoPreparationOfCodesToBeHumanReadableAsEncodedQueryParams,
}
