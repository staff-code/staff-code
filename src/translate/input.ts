import {BLANK, Io, setAllPropertiesOfObjectOnAnother, SPACE, sumTexts} from "@sagittal/general"
import {
    computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmarts,
    computeSmartPositionAndSmartClefPrefixUnicodeAndUpdateSmarts,
    INITIAL_SMARTS,
    smarts,
} from "./smarts"
import {computeSymbol} from "./symbol"
import {Code, Unicode} from "./symbols"
import {computeUnicode} from "./unicode"

// TODO: NEW FEATURE, READY TO GO: INLINE COMMENTS
//  Use { }. ready to go
//  Details here, bottom of this post: http://forum.sagittal.org/viewtopic.php?p=3100#p3100

// TODO: NEW FEATURE, READY TO GO: COPY IMAGE BUTTON
//  This will be intertwined with the to-do re: improving the interface for the package variant

// TODO: NEW FEATURE, LOW PRIORITY: MULTI-LINE STAVES
//  I've already implemented the "br" code which causes the display to work
//  - But it doesn't play well with Smart Stave or Smart Advance. waiting on Dave's research on how it could work
//  - And it may relate to SVG WIDTH determination, insofar as it's related to things we need to compute when handing
//  What displays in the DOM to what vectorize-text needs to render
//  See: http://forum.sagittal.org/viewtopic.php?p=3122#p3122

// TODO: NEW FEATURE, BLOCKED: CUSTOM CODEWORDS / HUMAN READABLE BUNDLE
//  - User can provide a tsv with custom codes
//  - It should support arbitrary whitespace between each field on each line
//  - I'm not quite sure yet how this is going to work w/r/t clefs and positions, if they'll be able to modify those
//  Per Dave's concerns that all mappings are based on final unicodes, not the codewords, to support other languages
//  - We're still sorting out how this relates to providing of custom font potentially via the same single config file
//  As well as whether we can have the examples in the README or if he wants me to pull out all the built-in codes from
//  TypeScript modules and into some flat config file and lose typing and all that jazz
//  - I considered pulling these unicodes in from @sagittal/system, but decided not to bloat it for the forum
//  Probably revisit this decision after extracting staffCode to its own repo
//  Now I've got tree-shaking working, so I could pull in @sagittal/system without bloating the bundled file much
//  Now I'm just waiting on Dave's reaction to whether we should try to have the bundle be human readable or not
//  That will relate to result of the custom codeword config file
//  Whether to format the codes in a more human-readable way or not, or just turn minification back on
//  - Either put the codes back in hexadecimal, or turn off removeComments
//  Unless Dave says to completely forget about making the bundle human-readable

// TODO: NEW FEATURE, BLOCKED: SMART CHORDS, OR RIGHT ALIGNMENT FOR CHORDS
//  See: http://forum.sagittal.org/viewtopic.php?p=3117#p3117
//  Blocked because it's still in development.

// TODO: NEW FEATURE, BLOCKED: DON'T RENDER CODES UNTIL SPACE IS TYPED
//  Blocked because we're still discussing on the forum
//  - But then you have to remember to add a space to the BBCode variant at the end or it won't render the last codeword
//  But make sure that plays well with the terminal Smart Advance `inputWords.push(Code[Code[`;`]])` below

// TODO: NEW FEATURE, BLOCKED: SMART BARLINES
//  It's currently not possible to end with a barline
//  This might be related to the terminal Smart Advance `inputWords.push(Code[Code[`;`]])` below
//  Blocked because waiting on Dave's thoughts about how much work to put into it
//  Latest thoughts here: http://forum.sagittal.org/viewtopic.php?p=3131#p3131
//  - We do at least know that we can change Smart Stave to do only st8 at a time, not st24, for finer resolution

// TODO: PERFORMANCE, BLOCKED: DON'T RE-RUN ON CODES YOU ALREADY CONVERTED, ONLY NEW STUFF
//  Check the diff with the previous sentence
//  Just waiting cuz I'm curious what Dave thinks
//  He says don't spend time on it, but I can definitely see it slowing down as it gets longer...
//  Then he says it is getting slow for him now.
//  That or only compile the word once you type a space
//  Let's see what he says. Yes this is different and totally complimentary to the don't render codes until space typed
//  - But this will conflict with Smart Chords / Right Alignment: http://forum.sagittal.org/viewtopic.php?p=3134#p3134

const collapseAllWhitespacesToSingleSpaces = (inputSentence: Io): Io =>
    inputSentence
        .replace(/<br>/g, SPACE)
        .replace(/\n/g, SPACE)
        .replace(/\t/g, SPACE)

const computeInputUnicode = (inputSentence: Io): Unicode => {
    setAllPropertiesOfObjectOnAnother({objectToChange: smarts, objectWithProperties: INITIAL_SMARTS})

    const inputWords = collapseAllWhitespacesToSingleSpaces(inputSentence).split(SPACE)
    inputWords.push(Code[Code[`;`]])

    return inputWords
        .map((inputWord: Io): Unicode => {
            const symbol = computeSymbol(inputWord)

            const smartAdvanceAndSmartStavePrefixUnicode =
                computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmarts(symbol)
            const smartPositionAndSmartClefPrefixUnicode =
                computeSmartPositionAndSmartClefPrefixUnicodeAndUpdateSmarts(symbol)
            const unicode = computeUnicode(symbol)

            return sumTexts(smartAdvanceAndSmartStavePrefixUnicode, smartPositionAndSmartClefPrefixUnicode, unicode)
        })
        .join(BLANK) as Unicode
}

export {
    computeInputUnicode,
}
