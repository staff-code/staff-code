import {BLANK, Io, setAllPropertiesOfObjectOnAnother, SPACE} from "@sagittal/general"
import {INITIAL_SMARTS, smarts} from "./smarts"
import {Code, Unicode} from "./symbols"
import {computeInputWordUnicode} from "./word"

// TODO: NEW FEATURE, READY TO GO: INLINE COMMENTS
//  Use { }. ready to go
//  Details here, bottom of this post: http://forum.sagittal.org/viewtopic.php?p=3100#p3100

// TODO: NEW FEATURE, LOW PRIORITY: MULTI-LINE STAVES
//  I've already implemented the "br" code which causes the display to work
//  - But it doesn't play well with Smart Stave or Smart Advance. waiting on Dave's research on how it could work
//  - And it may relate to SVG WIDTH determination, insofar as it's related to things we need to compute when handing
//  What displays in the DOM to what vectorize-text needs to render
//  See: http://forum.sagittal.org/viewtopic.php?p=3122#p3122
//  There has been more discussion about this since though
//  And figure out why br looks wrong on the forum but okay in the app

// TODO: NEW FEATURE, BLOCKED: DON'T RENDER CODES UNTIL SPACE IS TYPED
//  Blocked because I didn't hear back a response from Dave
//  - But then you have to remember to add a space to the BBCode variant at the end or it won't render the last codeword
//  But make sure that plays well with the terminal Smart Advance `inputWords.push(Code[Code[`;`]])` below

// TODO: FEATURE IMPROVE, BLOCKED: MAKE INPUT TALL AND SKINNY TO THE LEFT OF THE DISPLAY
//  Waiting to see what is thought of the wild proposition to not be whitespace agnostic and each line has own CSP
//  Or even crazier, input becomes a table

// TODO: NEW FEATURE, PROBABLY DON'T DO THIS ITERATION: RIGHT & CENTER ALIGNMENT (rt; ct;)
//  See: http://forum.sagittal.org/viewtopic.php?p=3117#p3117
//  Blocked because it's still in development. And maybe won't even do it until much later.

// TODO: NEW FEATURE, PROBABLY DON'T DO THIS ITERATION: SMART BARLINES (en;)
//  It's currently not possible to end with a barline
//  This might be related to the terminal Smart Advance `inputWords.push(Code[Code[`;`]])` below
//  Latest thoughts here: http://forum.sagittal.org/viewtopic.php?p=3131#p3131
//  Blocked because it's still in development. And maybe won't even do it until much later.

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
