import {Io, SPACE} from "@sagittal/general"
import {Unicode} from "../../../src/translate/symbols"
import {computeCodewordsFromUnicode} from "../../../src/translate/utility/codeword"

const codewordFailMessage = (actualUnicodeSentence: Unicode, expectedUnicodeSentence: Unicode): Io => {
    const actualCodewords = computeCodewordsFromUnicode(actualUnicodeSentence)
    const expectedCodewords = computeCodewordsFromUnicode(expectedUnicodeSentence)

    return `expected "${actualCodewords.join(SPACE)}" to be "${expectedCodewords.join(SPACE)}"`
}

export {
    codewordFailMessage,
}
