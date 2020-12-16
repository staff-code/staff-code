import {Io, SPACE} from "@sagittal/general"
import {computeInputUnicode} from "../../src/input"
import {Unicode} from "../../src/symbols"
import {computeCodewordsFromUnicode} from "../../src/utility/codeword"

const codewordFailMessage = (actualUnicodeSentence: Unicode, expectedUnicodeSentence: Unicode): Io => {
    const actualCodewords = computeCodewordsFromUnicode(actualUnicodeSentence)
    const expectedCodewords = computeCodewordsFromUnicode(expectedUnicodeSentence)

    return `expected "${actualCodewords.join(SPACE)}" to be "${expectedCodewords.join(SPACE)}"`
}

describe("computeInputUnicode", (): void => {
    it("basically works", (): void => {
        const inputSentence = "d5 /|\\ d5 nt" as Io

        const actual = computeInputUnicode(inputSentence)

        // Codewords: d5 /|\ d5 nt ad13
        const expected = "　 " as Unicode
        expect(actual).toBe(expected, codewordFailMessage(actual, expected))
    })

    describe("Smart Position", (): void => {
        it("the most recently used position is automatically applied if none is specified", (): void => {
            const inputSentence = "d5 /|\\ nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: d5 /|\ d5 nt ad13
            const expected = "　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("don't manifest until they are needed (only apply to symbols with ligatures to be vertically shifted by them)", (): void => {
            const inputSentence = "d5 st /|\\ ad13 nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: d5 /|\ st24 ad13 d5 nt ad11 st24 ad2
            const expected = "　    " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("persist until a new one is used", (): void => {
            const inputSentence = "d5 st /|\\ ad13 nt ad13 g4 \\! ad7 nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: d5 /|\ st24 ad13 d5 nt ad11 st24 ad2 g4 \! ad7 g4 nt ad13
            const expected = "　      　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("does not actually put the middle position on the stave, because it is a temporary / made up unicode since no zero position glyph is in SMuFL", (): void => {
            const inputSentence = "d5 nt ; b4 /|\\ nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: d5 nt ; /|\ nt ad13
            const expected = "　 　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })
    })

    describe("Smart Clef", (): void => {
        it("assume treble clef even if no clef has been provided", (): void => {
            const inputSentence = "d4 nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: trd4 nt ad13
            const expected = "　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("change depending on the clef", (): void => {
            const inputSentence = "bscf ; d4 nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: bscf ad16 ad8 b5 nt4 ad13
            const expected = "  　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("clefs are smart and they stick until you change them (you can change from one to the other)", (): void => {
            const inputSentence = "bscf ; d4 nt ; c4 nt ; tbcf ; d4 nt ; c4 nt" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: bscf ad16 ad8 bsd4 nt ad13 bsc4 nt ad13 tbcf ad16 ad8 tbd4 nt ad13 tbc4 nt ad13
            const expected = "  　 　   　 　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })
    })

    describe("Smart Advance", (): void => {
        it("advances by the width given by each symbol", (): void => {
            let actual
            let expected

            actual = computeInputUnicode("lgln" as Io)
            expected = "　 " as Unicode     // Codewords: lgln ad13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("tbcf" as Io)
            expected = "  " as Unicode     // Codewords: tbcf ad16 ad8
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("ntdb" as Io)
            expected = "   " as Unicode    // Codewords: ntdb ad16 ad7
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt1" as Io)
            expected = "　 " as Unicode     // Codewords: nt1 ad13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt2" as Io)
            expected = "　 " as Unicode     // Codewords: nt2 ad13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt4" as Io)
            expected = "　 " as Unicode     // Codewords: nt4 ad13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt8" as Io)
            expected = "   " as Unicode    // Codewords: nt8 ad16 ad5
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt16" as Io)
            expected = "   " as Unicode    // Codewords: nt16 ad16 ad5
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt2dn" as Io)
            expected = "　 " as Unicode     // Codewords: nt2dn ad13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt4dn" as Io)
            expected = "　 " as Unicode     // Codewords: nt4dn ad13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt8dn" as Io)
            expected = "　 " as Unicode     // Codewords: nt8dn ad13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))

            actual = computeInputUnicode("nt16dn" as Io)
            expected = "　 " as Unicode     // Codewords: nt16dn ad13
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("if more than one symbol has occurred since the previous advance, uses the width of the symbol with the max width", (): void => {
            const inputSentence = "lgln nt16" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: lgln nt16 ad16 ad5
            const expected = "   " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("resets the advance amount after each application", (): void => {
            const inputSentence = "lgln nt16 ; nt4" as Io

            const actual = computeInputUnicode(inputSentence)

            // Codewords: lgln nt16 ad16 ad5 nt4 ad13
            const expected = "   　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })
    })

    describe("Smart Stave", (): void => {
        it("automatically adds stave lines as needed, if smart stave has been asked for", (): void => {
            const inputSentence = "st nt8 ; nt4"

            const actual = computeInputUnicode(inputSentence)

            // Codewords: st24 nt8 ad16 ad5 nt4 ad3 st24 ad10
            const expected = "      " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("does not adds additional lines as needed, if only a manual stave has been asked for", (): void => {
            const inputSentence = "st24 nt8 ; nt4"

            const actual = computeInputUnicode(inputSentence)

            // Codewords: st24 nt8 ad16 ad5 nt4 ad12 ad1
            const expected = "   　 " as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })

        it("can be turned off and on", (): void => {
            const inputSentence = "st tbcf ; nt ; stof nt ; nt ; st nt"

            const actual = computeInputUnicode(inputSentence)

            // Codewords: tbcf st24 ad16 ad8 nt4 st24 ad12 ad1 nt4 ad12 ad1 nt4 ad12 ad1 nt4 st24 ad16 ad12
            const expected = "  　 　 　  　" as Unicode
            expect(actual).toBe(expected, codewordFailMessage(actual, expected))
        })
    })
})
