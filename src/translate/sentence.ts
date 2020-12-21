import {BLANK, Io, setAllPropertiesOfObjectOnAnother, SPACE} from "@sagittal/general"
import {INITIAL_SMARTS, smarts} from "./smarts"
import {Code, Unicode} from "./symbols"
import {computeInputWordUnicode} from "./word"

// TODO: NEW FEATURE, READY TO GO: INLINE COMMENTS
//  Use { }. ready to go
//  Details here, bottom of this post: http://forum.sagittal.org/viewtopic.php?p=3100#p3100
//  Also { and } can be considered aliases for cmon and cmof (commentOn and commentOff)

const collapseAllWhitespacesToSingleSpaces = (inputSentence: Io): Io =>
    inputSentence
        .replace(/<br>/g, SPACE)
        .replace(/\n/g, SPACE)
        .replace(/\t/g, SPACE)

const computeInputSentenceUnicode = (inputSentence: Io): Unicode => {
    // tslint:disable-next-line
    // console.warn("NEW SENTENCE -----------------------------------------------------")

    setAllPropertiesOfObjectOnAnother({objectToChange: smarts, objectWithProperties: INITIAL_SMARTS})

    const inputWords = collapseAllWhitespacesToSingleSpaces(inputSentence).split(SPACE)
    inputWords.push(Code[Code[`;`]])

    return inputWords
        .map(computeInputWordUnicode)
        .join(BLANK) as Unicode
}

export {
    computeInputSentenceUnicode,
}
