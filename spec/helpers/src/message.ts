import {Io, SPACE} from "@sagittal/general"
import {Unicode} from "../../../src/translate/symbols"
import {computeCodewordsFromUnicode} from "../../../src/translate/utility"

const codewordFailMessage = (actualUnicodeSentence: Unicode, expectedUnicodeSentence: Unicode): Io => {
    const actualCodewords = computeCodewordsFromUnicode(actualUnicodeSentence)
    const expectedCodewords = computeCodewordsFromUnicode(expectedUnicodeSentence)

    return `expected "${actualCodewords}" to be "${expectedCodewords}"`
}

export {
    codewordFailMessage,
}
