import {BLANK, Io, setAllPropertiesOfObjectOnAnother, SPACE} from "@sagittal/general"
import {INITIAL_SMARTS, smarts} from "./smarts"
import {Code, Unicode} from "./symbols"
import {computeInputWordUnicode} from "./word"

// TODO: NEW FEATURE, READY TO GO: INLINE COMMENTS
//  Use { }. ready to go
//  Details here, bottom of this post: http://forum.sagittal.org/viewtopic.php?p=3100#p3100

// TODO: NEW FEATURE, READY TO GO: DON'T RENDER CODES UNTIL SPACE IS TYPED
//  - But then you have to remember to add a space to the BBCode variant at the end or it won't render the last codeword
//  But make sure that plays well with the terminal Smart Advance `inputWords.push(Code[Code[`;`]])` below

// TODO: FEATURE IMPROVE, READY TO GO: MAKE INPUT TALL AND SKINNY TO THE LEFT OF THE DISPLAY
//  Thanks to vertical scrolling, it doesn't really need to be tall and skinny, just not so short as it is now.
//  I suggest the input field initially be 32 to 40 characters wide and 20 to 30 lines high.
//  And I wasn't thinking about phone screens when I suggested putting the staff and download button to the right.
//  I think they are fine where they are now.

const collapseAllWhitespacesToSingleSpaces = (inputSentence: Io): Io =>
    inputSentence
        .replace(/<br>/g, SPACE)
        .replace(/\n/g, SPACE)
        .replace(/\t/g, SPACE)

const computeInputSentenceUnicode = (inputSentence: Io): Unicode => {
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
