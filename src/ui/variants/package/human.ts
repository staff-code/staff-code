import {Io, Sentence} from "@sagittal/general"
import {EncodedCode} from "./types"

const prepareCodesToBeHumanReadableAsEncodedQueryParams = (
    inputSentence: Io & Sentence,
): EncodedCode & Sentence =>
    inputSentence
        .replace(/-/g, "--")
        .replace(/([^ \-]) (?=[^ \-]|$)/g, "$1-")
        .replace(/q/g, "qq")
        .replace(/([^;q]);(?=[^;q]|$)/g, "$1q") as EncodedCode & Sentence

const undoPreparationOfCodesToBeHumanReadableAsEncodedQueryParams = (
    encodedSentence: EncodedCode & Sentence,
): Io & Sentence =>
    encodedSentence
        .replace(/([^q])q(?=[^q]|$)/g, "$1;")
        .replace(/qq/g, "q")
        .replace(/([^\-])-(?=[^\-]|$)/g, "$1 ")
        .replace(/--/g, "-") as Io & Sentence

// TODO: FEATURE IMPROVE, HUMAN CODES
//  We could further prettify the "codes=" part of the URLs by:
//  Replace all "z"s with "zz".
//  Replace all newlines that are not preceded or followed by either a newline or a "z", with "z".
//  To reverse:
//  Replace all "z"s that are not preceded or followed by a "z", with newline.
//  Replace all "zz"s with "z"

export {
    prepareCodesToBeHumanReadableAsEncodedQueryParams,
    undoPreparationOfCodesToBeHumanReadableAsEncodedQueryParams,
}
