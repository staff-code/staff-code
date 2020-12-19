import {Io, SPACE} from "@sagittal/general"
import {computeInputUnicode} from "../../../src"
import {Unicode} from "../../../src/translate/symbols"
import {codewordFailMessage} from "../../helpers/src/message"

describe("computeInputUnicode", (): void => {
    it("basically works", (): void => {
        const inputSentence = "d5 /|\\ d5 nt" as Io

        const actual = computeInputUnicode(inputSentence)

        // Codewords: d5 /|\ d5 nt 13;
        const expected = "　 " as Unicode
        expect(actual).toBe(expected, codewordFailMessage(actual, expected))
    })

    it("supports multiple staves with a newline", (): void => {
        const inputSentence = "st tbcf ; nt br; nt" as Io

        const actual = computeInputUnicode(inputSentence)

        // Codewords: tbcf st24 16; 8; nt4 br nt4 st24 12; 1;
        const expected = "  \n　 " as Unicode
        expect(actual).toBe(expected, codewordFailMessage(actual, expected))
    })

    describe("Smart Position", (): void => {
        it("the most recently used position is automatically applied if none is specified", (): void => {
            const inputSentence = "d5 /|\\ nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: d5 /|\ d5 nt 13;
            const expected = "　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("don't manifest until they are needed (only apply to symbols with ligatures to be vertically shifted by them)", (): void => {
            const inputSentence = "d5 st /|\\ 13; nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: d5 /|\ st24 13; d5 nt 11; st24 2;
            const expected = "　    " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("persist until a new one is used", (): void => {
            const inputSentence = "d5 st /|\\ 13; nt 13; g4 \\! 7; nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: d5 /|\ st24 13; d5 nt 11; st24 2; g4 \! 7; g4 nt 13;
            const expected = "　      　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("does not actually put the middle position on the stave, because it is a temporary / made up unicode since no zero position glyph is in SMuFL", (): void => {
            const inputSentence = "d5 nt ; b4 /|\\ nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: d5 nt ; /|\ nt 13;
            const expected = "　 　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })
    })

    describe("Smart Clef", (): void => {
        it("assume treble clef even if no clef has been provided", (): void => {
            const inputSentence = "d4 nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: trd4 nt 13;
            const expected = "　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("change depending on the clef", (): void => {
            const inputSentence = "bscf ; d4 nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: bscf 16; 8; b5 nt4 13;
            const expected = "  　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("clefs are smart and they stick until you change them (you can change from one to the other)", (): void => {
            const inputSentence = "bscf ; d4 nt ; c4 nt ; tbcf ; d4 nt ; c4 nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: bscf 16; 8; bsd4 nt 13; bsc4 nt 13; tbcf 16; 8; tbd4 nt 13; tbc4 nt 13;
            const expected = "  　 　   　 　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })
    })

    describe("Smart Advance", (): void => {
        it("advances by the width given by each symbol", (): void => {
            let actual
            let expected

            actual = computeInputUnicode("lgln" as Io)
            expected = "　 " as Unicode     // Codewords: lgln 13;
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("tbcf" as Io)
            expected = "  " as Unicode     // Codewords: tbcf 16; 8;
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("ntdb" as Io)
            expected = "   " as Unicode    // Codewords: ntdb 16; 7;
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt1" as Io)
            expected = "　 " as Unicode     // Codewords: nt1 13;
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt2" as Io)
            expected = "　 " as Unicode     // Codewords: nt2 13;
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt4" as Io)
            expected = "　 " as Unicode     // Codewords: nt4 13;
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt8" as Io)
            expected = "   " as Unicode    // Codewords: nt8 16; 5;
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt16" as Io)
            expected = "   " as Unicode    // Codewords: nt16 16; 5;
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt2dn" as Io)
            expected = "　 " as Unicode     // Codewords: nt2dn 13;
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt4dn" as Io)
            expected = "　 " as Unicode     // Codewords: nt4dn 13;
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt8dn" as Io)
            expected = "　 " as Unicode     // Codewords: nt8dn 13;
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt16dn" as Io)
            expected = "　 " as Unicode     // Codewords: nt16dn 13;
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("gives a default width of 12 to known codes with undefined widths", (): void => {
            const inputSentence = "^" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: ^ 12;
            const expected = "　" as Unicode
            expect(actual).toBe(expected)
        })

        it("gives a default width of 0 to unknown codes", (): void => {
            const inputSentence = "u+5e78" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: (unknown)
            const expected = "幸" as Unicode
            expect(actual).toBe(expected)
        })

        it("if more than one symbol has occurred since the previous advance, uses the width of the symbol with the max width", (): void => {
            const inputSentence = "lgln nt16" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: lgln nt16 16; 5;
            const expected = "   " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("resets the advance amount after each application", (): void => {
            const inputSentence = "lgln nt16 ; nt4" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: lgln nt16 16; 5; nt4 13;
            const expected = "   　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })
    })

    describe("Smart Stave", (): void => {
        it("automatically adds stave lines as needed, if smart stave has been asked for", (): void => {
            const inputSentence = "st nt8 ; nt4"

            const actual = computeInputUnicode(inputSentence)

            // Codewords: st24 nt8 16; 5; nt4 3; st24 10;
            const expected = "      " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("does not adds additional lines as needed, if only a manual stave has been asked for", (): void => {
            const inputSentence = "st24 nt8 ; nt4"

            const actual = computeInputUnicode(inputSentence)

            // Codewords: st24 nt8 16; 5; nt4 12; 1;
            const expected = "   　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("can be turned off and on", (): void => {
            const inputSentence = "st tbcf ; nt ; stof nt ; nt ; st nt"

            const actual = computeInputUnicode(inputSentence)

            // Codewords: tbcf st24 16; 8; nt4 st24 12; 1; nt4 12; 1; nt4 12; 1; nt4 st24 16; 12;
            const expected = "  　 　 　  　" as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })
    })
})
