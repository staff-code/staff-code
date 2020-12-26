import {Io} from "@sagittal/general"
import {computeInputSentenceUnicode} from "../../../src"
import {Unicode} from "../../../src/translate"
import {computeCodewordsFromUnicode} from "../../../src/translate/utility"

describe("computeInputSentenceUnicode", (): void => {
    it("basically works", (): void => {
        const inputSentence = "d5 /|\\ d5 nt" as Io

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "　 " as Unicode
        expect(actual).toBe(expectedUnicode)
        const expectedCodewords = "up2 /|\\ up2 ntqrup 13;"
        expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
    })

    it("supports multiple staves with a break", (): void => {
        const inputSentence = "ston Gcl ; nt br; nt" as Io

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "     \n   " as Unicode
        expect(actual).toBe(expectedUnicode)
        const expectedCodewords = "Gcl st16 16; st8 8; ntqrup st8 8; st8 5; br; ntqrup st8 8; st8 5;"
        expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
    })

    it("adds a space at the end if the last word is a break", (): void => {
        const inputSentence = "ston Gcl ; nt br;" as Io

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "     \n " as Unicode
        expect(actual).toBe(expectedUnicode)
        const expectedCodewords = "Gcl st16 16; st8 8; ntqrup st8 8; st8 5; br; sp"
        expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
    })

    it("supports inline comments", (): void => {
        const inputSentence = "ston Gcl ; {check this out} { and you can do a 2nd comment in a row too } nt br; {comment} nt" as Io

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "     \n   " as Unicode
        expect(actual).toBe(expectedUnicode)
        const expectedCodewords = "Gcl st16 16; st8 8; ntqrup st8 8; st8 5; br; ntqrup st8 8; st8 5;"
        expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
    })

    it("includes a space after fallen back input words so that when you have multiple in a row you can distinguish them           ", (): void => {
        const inputSentence = "don't know what i'm doing" as Io

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "don't know what i'm doing  " as Unicode
        expect(actual).toBe(expectedUnicode)
        const expectedCodewords = "?? ?? ?? ?? ?? sp ?? ?? ?? ?? sp ?? ?? ?? ?? sp ?? ?? ?? sp ?? ?? ?? ?? ?? sp 2;"
        expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
    })

    it("still supports symbols with curlies, despite those being comment chars", (): void => {
        const inputSentence = "Gcl ; .{ ; nt ; .} ; nt" as Io

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "  　　 　　 " as Unicode
        expect(actual).toBe(expectedUnicode)
        const expectedCodewords = "Gcl 24; .{ 12; ntqrup 13; .} 12; ntqrup 13;"
        expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
    })

    describe("Smart Position", (): void => {
        it("the most recently used position is automatically applied if none is specified", (): void => {
            const inputSentence = "d5 /|\\ nt" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "up2 /|\\ up2 ntqrup 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("don't manifest until they are needed (only apply to symbols with ligatures to be vertically shifted by them)", (): void => {
            const inputSentence = "d5 ston /|\\ 13; nt" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "       " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "up2 /|\\ st8 8; st8 5; up2 ntqrup 3; st8 8; st8 2;"
            // TODO: CODES, VS WORD CLAUSE SLICE SENTENCE
            //  Add a type to the above line as CodewordSentence?
            //  Or is this just Codeword just like Unicode is for both the sentence and the word
            //  - Dave also suggests that it should be two words "code word", which might connect with my desire to have
            //  A matrix with one dimension for word/clause/sentence/doc and one for input/code/lowercasecode/etc.
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("persist until a new one is used", (): void => {
            const inputSentence = "d5 ston /|\\ 13; nt 13; g4 \\! 7; nt" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "            " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "up2 /|\\ st8 8; st8 5; up2 ntqrup 3; st8 8; st8 2; dn2 \\! 6; st8 1; dn2 ntqrup 7; st8 6;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("does not actually put the middle position on the stave; there is no zero position glyph in SMuFL, so we temporarily use a code point from the Sagittal range, but it has no actual effect so it shouldn't be emitted", (): void => {
            const inputSentence = "d5 nt ; b4 /|\\ nt" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　 　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "up2 ntqrup 13; /|\\ ntqrup 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })
    })

    describe("Smart Clef", (): void => {
        it("assume treble clef even if no clef has been provided", (): void => {
            const inputSentence = "d4 nt" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "dn5 ntqrup 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("change depending on the clef", (): void => {
            const inputSentence = "Fcl ; d4 nt" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "Fcl 24; up7 ntqrup 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("clefs are smart and they stick until you change them (you can change from one to the other)", (): void => {
            const inputSentence = "Fcl ; d4 nt ; c4 nt ; Gcl ; d4 nt ; c4 nt" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  　 　   　 　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "Fcl 24; up7 ntqrup 13; up6 ntqrup 13; Gcl 24; dn5 ntqrup 13; dn6 ntqrup 13;"
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

            actual = computeInputSentenceUnicode("Gcl" as Io)
            expectedUnicode = "  " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "Gcl 24;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("ntdbwh" as Io)
            expectedUnicode = "   " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "ntdbwh 23;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("ntwh" as Io)
            expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "ntwh 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("nt2" as Io)
            expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "nthfup 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("nt4" as Io)
            expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "ntqrup 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("nt8up" as Io)
            expectedUnicode = "   " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "nt8up 21;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("nt16up" as Io)
            expectedUnicode = "   " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "nt16up 21;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("nthfdn" as Io)
            expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "nthfdn 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)

            actual = computeInputSentenceUnicode("ntqrdn" as Io)
            expectedUnicode = "　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            expectedCodewords = "ntqrdn 13;"
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

            const expectedUnicode = "　" as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "^ 12;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("gives a default width of 0 to unknown codes", (): void => {
            const inputSentence = "u+5e78" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "幸 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "?? 2;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("if more than one symbol has occurred since the previous advance, uses the width of the symbol with the max width", (): void => {
            const inputSentence = "lgln nt16up" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "lgln nt16up 21;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("resets the advance amount after each application", (): void => {
            const inputSentence = "lgln nt16up ; nt4" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "lgln nt16up 21; ntqrup 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("can have the spacing adjusted from the default of 2", (): void => {
            const inputSentence = "sp7 nt16up" as Io

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "nt16up 24; 2;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })
    })

    describe("Smart Stave", (): void => {
        it("automatically adds stave lines as needed, if smart stave has been asked for", (): void => {
            const inputSentence = "ston nt8up ; nt4"

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "       " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "nt8up st16 16; st8 5; ntqrup 3; st8 8; st8 2;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("does not add additional lines as needed, if only a manual stave has been asked for", (): void => {
            const inputSentence = "st24 nt8up ; nt4"

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   　 " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "st24 nt8up 21; ntqrup 13;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })

        it("can be turned off and on", (): void => {
            const inputSentence = "ston Gcl ; nt ; stof nt ; nt ; ston nt"

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "     　 　    " as Unicode
            expect(actual).toBe(expectedUnicode)
            const expectedCodewords = "Gcl st16 16; st8 8; ntqrup st8 8; st8 5; ntqrup 13; ntqrup 13; ntqrup st8 8; st8 5;"
            expect(computeCodewordsFromUnicode(actual)).toBe(expectedCodewords)
        })
    })
})
