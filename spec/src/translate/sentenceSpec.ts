import {Io} from "@sagittal/general"
import {computeInputSentenceUnicode} from "../../../src"
import {Unicode} from "../../../src/translate/symbols"
import {computeCodewordsFromUnicode} from "../../../src/translate/utility"

describe("computeInputSentenceUnicode", (): void => {
    it("basically works", (): void => {
        const inputSentence = "d5 /|\\ d5 nt" as Io

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "　 " as Unicode
        expect(actual).toBe(expectedUnicode)
        const expectedCodewords = "up2 /|\\ up2 nt4 13;"
        expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
    })

    it("supports multiple staves with a newline", (): void => {
        const inputSentence = "ston tbcf ; nt br; nt" as Io

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "     \n   " as Unicode
        expect(actual).toBe(expectedUnicode)
        const expectedCodewords = "tbcf st16 16; st8 8; nt4 st8 8; st8 5; br; nt4 st8 8; st8 5;"
        expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
    })

    it("supports inline comments", (): void => {
        const inputSentence = "ston tbcf ; {check this out} { and you can do a 2nd comment in a row too } nt zj}xv; br; {comment} nt" as Io

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "  zj}xv;   \n   " as Unicode
        expect(actual).toBe(expectedUnicode)
        const expectedCodewords = "tbcf st16 16; st8 8; nt4 (unknown) (unknown) (unknown) (unknown) (unknown) (unknown) st8 8; st8 5; br; nt4 st8 8; st8 5;"
        expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
    })

    it("still supports symbols with curlies, despite those being comment characters", (): void => {
        const inputSentence = "tbcf ; .{ ; nt ; .} ; nt" as Io

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "  　　 　　 " as Unicode
        expect(actual).toBe(expectedUnicode)
        const expectedCodewords = "tbcf 24; .{ 12; nt4 13; .} 12; nt4 13;"
        expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
    })

    describe("Smart Position", (): void => {
        it("the most recently used position is automatically applied if none is specified", (): void => {
            const inputSentence = "d5 /|\\ nt" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "up2 /|\\ up2 nt4 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("don't manifest until they are needed (only apply to symbols with ligatures to be vertically shifted by them)", (): void => {
            const inputSentence = "d5 ston /|\\ 13; nt" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "       " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "up2 /|\\ st8 8; st8 5; up2 nt4 3; st8 8; st8 2;"
            // TODO: CLEAN, READY TO GO: SYMBOL CODES AND SMART CODES
            //  Add a type to the above line as CodewordSentence?
            //  Or is this just Codeword just like Unicode is for both the sentence and the word
            //  There's definitely some concept we haven't totally got here about the difference between input words
            //  And codewords
            //  I think maybe we just want two enums, and they go back to being string enums
            //  One for symbol codewords and one for smart codewords, which together are just codewords
            //  And input words get mapped to lowercase codewords so they can match to codewords, then mapped to unicode
            //  But when debugging and we pull back out of unicode, we can only go to symbol codewords, unambiguously
            //  - Dave also suggests that it should be two words "code word", which might connect with my desire to have
            //  A matrix with one dimension for word/clause/sentence/doc and one for input/code/lowercasecode/etc.
            //  Some stuff here: http://forum.sagittal.org/viewtopic.php?p=3172#p3172
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("persist until a new one is used", (): void => {
            const inputSentence = "d5 ston /|\\ 13; nt 13; g4 \\! 7; nt" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "            " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "up2 /|\\ st8 8; st8 5; up2 nt4 3; st8 8; st8 2; dn2 \\! 6; st8 1; dn2 nt4 7; st8 6;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("does not actually put the middle position on the stave, because it is a temporary / made up unicode since no zero position glyph is in SMuFL", (): void => {
            const inputSentence = "d5 nt ; b4 /|\\ nt" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　 　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "up2 nt4 13; /|\\ nt4 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })
    })

    describe("Smart Clef", (): void => {
        it("assume treble clef even if no clef has been provided", (): void => {
            const inputSentence = "d4 nt" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "dn5 nt4 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("change depending on the clef", (): void => {
            const inputSentence = "bscf ; d4 nt" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "bscf 24; up7 nt4 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("clefs are smart and they stick until you change them (you can change from one to the other)", (): void => {
            const inputSentence = "bscf ; d4 nt ; c4 nt ; tbcf ; d4 nt ; c4 nt" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  　 　   　 　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "bscf 24; up7 nt4 13; up6 nt4 13; tbcf 24; dn5 nt4 13; dn6 nt4 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })
    })

    describe("Smart Advance", (): void => {
        it("advances by the width given by each symbol", (): void => {
            let actual
            let expectedUnicode
            let expectedCodewords

            actual = computeInputSentenceUnicode("lgln" as Io)
            expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "lgln 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("tbcf" as Io)
            expectedUnicode = "  " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "tbcf 24;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("ntdb" as Io)
            expectedUnicode = "   " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "ntdb 23;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("nt1" as Io)
            expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "nt1 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("nt2" as Io)
            expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "nt2 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("nt4" as Io)
            expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "nt4 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("nt8" as Io)
            expectedUnicode = "   " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "nt8 21;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("nt16" as Io)
            expectedUnicode = "   " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "nt16 21;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("nt2dn" as Io)
            expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "nt2dn 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("nt4dn" as Io)
            expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "nt4dn 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("nt8dn" as Io)
            expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "nt8dn 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("nt16dn" as Io)
            expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "nt16dn 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("gives a default width of 12 to known codes with undefined widths", (): void => {
            const inputSentence = "^" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　" as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "^ 12;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("gives a default width of 0 to unknown codes", (): void => {
            const inputSentence = "u+5e78" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "幸 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "(unknown) 2;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("if more than one symbol has occurred since the previous advance, uses the width of the symbol with the max width", (): void => {
            const inputSentence = "lgln nt16" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "lgln nt16 21;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("resets the advance amount after each application", (): void => {
            const inputSentence = "lgln nt16 ; nt4" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "lgln nt16 21; nt4 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("can have the spacing adjusted from the default of 2", (): void => {
            const inputSentence = "sp7 nt16" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "nt16 24; 2;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })
    })

    describe("Smart Stave", (): void => {
        it("automatically adds stave lines as needed, if smart stave has been asked for", (): void => {
            const inputSentence = "ston nt8 ; nt4"

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "       " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "nt8 st16 16; st8 5; nt4 3; st8 8; st8 2;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("does not adds additional lines as needed, if only a manual stave has been asked for", (): void => {
            const inputSentence = "st24 nt8 ; nt4"

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "st24 nt8 21; nt4 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("can be turned off and on", (): void => {
            const inputSentence = "ston tbcf ; nt ; stof nt ; nt ; ston nt"

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "     　 　    " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "tbcf st16 16; st8 8; nt4 st8 8; st8 5; nt4 13; nt4 13; nt4 st8 8; st8 5;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })
    })
})
