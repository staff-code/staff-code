// tslint:disable max-line-length

import {BLANK, Io, NEWLINE, Sentence} from "@sagittal/general"
import * as fs from "fs"
import {Code, computeInputSentenceUnicode, EMPTY_UNICODE, Unicode} from "../../../src/translate"
import {debugCodeSentence} from "../../../src/translate/codes"
import {BRAVURA_TEXT_SC, BRAVURA_TEXT_SC_OTF} from "../../../src/ui/constants"
import CustomReporterResult = jasmine.CustomReporterResult

const thisJasmine = jasmine as unknown as {currentTest: jasmine.CustomReporterResult}

const SENTENCE_VISUAL_SPEC_DIR = "spec/visual/sentence"
const SENTENCE_VISUAL_SPEC_INDEX = `${SENTENCE_VISUAL_SPEC_DIR}/index.html`

let currentDescribe = ""

const saveVisualRegressionSpecSvg = (actual: Unicode & Sentence, currentTest: CustomReporterResult, subTest: string = BLANK): void => {
    const fullName = `${currentTest.fullName} ${subTest}`.replace(/computeInputSentenceUnicode /, BLANK)
    const describe = fullName.match(/\*\*\* (.*) \*\*\*/)
    if (describe && describe[1] !== currentDescribe) {
        currentDescribe = describe[1]
        fs.appendFileSync(SENTENCE_VISUAL_SPEC_INDEX, `<h1>${currentDescribe}</h1>` + NEWLINE)
    }
    const testName = fullName.replace(`*** ${currentDescribe} *** `, BLANK)

    fs.appendFileSync(SENTENCE_VISUAL_SPEC_INDEX, `<div>${testName}</div>` + NEWLINE)
    fs.appendFileSync(SENTENCE_VISUAL_SPEC_INDEX, `<div style="font-family: ${BRAVURA_TEXT_SC}; font-size: 2.5em; line-height: 2; white-space: pre;">${actual}</div>` + NEWLINE)
}

describe("computeInputSentenceUnicode", (): void => {
    beforeAll((): void => {
        fs.rmdirSync(SENTENCE_VISUAL_SPEC_DIR, {recursive: true})
        fs.mkdirSync(SENTENCE_VISUAL_SPEC_DIR)
        fs.writeFileSync(SENTENCE_VISUAL_SPEC_INDEX, `<head><style>@font-face{font-family: ${BRAVURA_TEXT_SC}; src: url('../../../${BRAVURA_TEXT_SC_OTF}')}</style></head><body>` + NEWLINE)
    })

    afterAll((): void => {
        fs.appendFileSync(SENTENCE_VISUAL_SPEC_INDEX, "</body>" + NEWLINE)
    })

    it("basically works", (): void => {
        const inputSentence = "D5 /|\\ D5 nt" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = " " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "up2 /|\\ up2 ntqrdn 11;" as Code & Sentence
        expect(debugCodeSentence(actual)).toBe(expectedCodes)
        saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
    })

    it("is whitespace agnostic", (): void => {
        const inputSentence = "D5           /|\\     \n  D5    \t     nt" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = " " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "up2 /|\\ up2 ntqrdn 11;" as Code & Sentence
        expect(debugCodeSentence(actual)).toBe(expectedCodes)
        saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
    })

    it("supports multiple staves with a break", (): void => {
        const inputSentence = "ston Gcl ; nt br; nt" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "   　\n　" as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "Gcl st24 23; ntqrdn 1; st16 16; br; ntqrdn st16 16;" as Code & Sentence
        expect(debugCodeSentence(actual)).toBe(expectedCodes)
        saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
    })

    it("adds a space at the end if the last word is a break (so that the break immediately indicates that it has occurred, by taking up space in the display)", (): void => {
        const inputSentence = "ston Gcl ; nt br;" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "   　\n " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "Gcl st24 23; ntqrdn 1; st16 16; br; 1;" as Code & Sentence
        expect(debugCodeSentence(actual)).toBe(expectedCodes)
        saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
    })

    describe("*** Macros ***", (): void => {
        it("converts clef macros correctly", (): void => {
            const inputSentence = "trcl" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Gcl 21;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })
    })

    describe("*** Comments ***", (): void => {
        it("supports inline comments", (): void => {
            const inputSentence = "ston Gcl ; {check this out} { and you can do a 2nd comment in a row too } nt br; {comment} nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   　\n　" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Gcl st24 23; ntqrdn 1; st16 16; br; ntqrdn st16 16;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("still supports codes with curlies, despite those being comment chars, and can even include them inside of comments as long as they aren't the first or last characters of a whitespace-separated word", (): void => {
            const inputSentence = "Gcl ; .{ ; nt ; .} ; nt { lala '{' la '.}' lalala }" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "        " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Gcl 23; .{ 6; ntqrdn 13; .} 6; ntqrdn 11;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })
    })

    describe("*** Unrecognized codes ***", (): void => {
        it("includes a space after unrecognized codes so that when you have multiple in a row you can distinguish them           ", (): void => {
            const inputSentence = "don't know what i'm doing" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  d  o n  ' t k  n  o w w h  a t i  ' m　d  o i  n  g " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "2; ¿¿d?? 8; ¿¿o?? 7; ¿¿n?? 8; ¿¿'?? 3; ¿¿t?? 9; ¿¿k?? 8; ¿¿n?? 8; ¿¿o?? 7; ¿¿w?? 14; ¿¿w?? 10; ¿¿h?? 8; ¿¿a?? 7; ¿¿t?? 9; ¿¿i?? 4; ¿¿'?? 3; ¿¿m?? 16; ¿¿d?? 8; ¿¿o?? 7; ¿¿i?? 4; ¿¿n?? 8; ¿¿g?? 9;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("accepts unrecognized codes in other reasonable formats", (): void => {
            expect(computeInputSentenceUnicode("U+5E78" as Io & Sentence)).toBe("幸" as Unicode & Sentence)
            expect(computeInputSentenceUnicode("u+5e78" as Io & Sentence)).toBe("幸" as Unicode & Sentence)
            expect(computeInputSentenceUnicode("U5E78" as Io & Sentence)).toBe("幸" as Unicode & Sentence)
            expect(computeInputSentenceUnicode("u5e78" as Io & Sentence)).toBe("幸" as Unicode & Sentence)
            expect(computeInputSentenceUnicode("\\u+5E78" as Io & Sentence)).toBe("幸" as Unicode & Sentence)
            expect(computeInputSentenceUnicode("\\u+5e78" as Io & Sentence)).toBe("幸" as Unicode & Sentence)
        })

        it("accepts unrecognized codes with code points greater than 65535 (0xFFFF)", (): void => {
            const inputSentence = "U+1D10B" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "𝄋" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "¿¿𝄋??" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
        })

        it("well, this is really a regression test, but: it doesn't mysteriously throw away the first unrecognized code", (): void => {
            const inputSentence = "ston Fcl fnord ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  f  n  o r  d 　" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Fcl st24 26; ¿¿f?? 4; ¿¿n?? 8; ¿¿o?? 7; ¿¿r?? 6; ¿¿d?? 10; ntqrdn st16 16;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("spaces unrecognized codes away from recognized codes even when Smart Stave is off", (): void => {
            const inputSentence = "nt unrec ntup" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = " u  n  r  e c   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "ntqrdn 13; ¿¿u?? 8; ¿¿n?? 8; ¿¿r?? 6; ¿¿e?? 7; ¿¿c?? 8; ntqrup 11;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })
    })

    describe("*** Smart Position ***", (): void => {
        it("the most recently used position is automatically applied if none is specified", (): void => {
            const inputSentence = "D5 /|\\ nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = " " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up2 /|\\ up2 ntqrdn 11;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("don't manifest until they are needed (only apply to glyphs with ligatures to be vertically shifted by them)", (): void => {
            const inputSentence = "D5 ston /|\\ ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "    " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up2 /|\\ st16 13; up2 ntqrdn 3; st8 8;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("persists until a new position is used (is 'sticky')", (): void => {
            const inputSentence = "D5 ston /|\\ ; nt ; G4 \\! ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "         " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up2 /|\\ st16 13; up2 ntqrdn 3; st16 10; dn2 \\! 6; st8 1; dn2 ntqrup 7; st8 8;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("does not actually put the middle position on the stave; there is no zero position glyph in SMuFL, so we temporarily use a code point from the Sagittal range, but it has no actual effect so it shouldn't be emitted", (): void => {
            const inputSentence = "D5 nt ; B4 /|\\ nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up2 ntqrdn 13; /|\\ ntqrdn 11;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("works for the positions supplement", (): void => {
            const inputSentence = "C7 /|\\ nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = " " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up15 /|\\ up15 ntqrdn 11;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })
    })

    describe("*** Smart Clef ***", (): void => {
        it("assume treble clef even if no clef has been provided", (): void => {
            const inputSentence = "D4 nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = " " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "dn5 ntqrup 11;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("change depending on the clef", (): void => {
            const inputSentence = "Fcl ; D4 nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Fcl 24; up7 ntqrdn 11;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("clefs are smart and they stick until you change them (you can change from one to the other)", (): void => {
            const inputSentence = "Fcl ; D4 nt ; C4 nt ; Gcl ; D4 nt ; C4 nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "        " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Fcl 24; up7 ntqrdn 13; up6 ntqrdn 13; Gcl 23; dn5 ntqrup 13; dn6 ntqrup 11;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("when a pitch code (e.g. C4) is used, position sticks based on the pitch, not the vertical offset; if you set a pitch like C4 and then change clefs, it should still be C4 in the new clef, not whichever note is at the same position as the previous clef's C4", (): void => {
            const inputSentence = "Fcl ; C4 nt ; Gcl ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "      " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Fcl 24; up6 ntqrdn 13; Gcl 23; dn6 ntqrup 11;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("in contrast, when a position code (e.g. up3) is used, position sticks based on the position offset, not the pitch", (): void => {
            const inputSentence = "Fcl ; up6 nt ; Gcl ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "      " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Fcl 24; up6 ntqrdn 13; Gcl 23; up6 ntqrdn 11;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("the autogenerated SMuFL codes for combining staff positions (stpsrs<n> & stpslr<n>) work exactly the same as up<n> and dn<n> (the latter are simply aliases for them)", (): void => {
            const inputSentence = "Fcl ; stpsrs6 nt ; Gcl ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "      " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Fcl 24; up6 ntqrdn 13; Gcl 23; up6 ntqrdn 11;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })
    })

    describe("*** Smart Advance ***", (): void => {
        it("advances by the width computed for each glyph from the Bravura font", (): void => {
            let actual
            let expectedUnicode
            let expectedCodes

            // These tests are taking advantage of the fact that there is a secret smart advance character
            // Appended to the end of each input sentence.

            actual = computeInputSentenceUnicode("lgln" as Io & Sentence)
            expectedUnicode = " " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "lgln 13;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "lgln")

            actual = computeInputSentenceUnicode("Gcl" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "Gcl 21;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "Gcl")

            actual = computeInputSentenceUnicode("ntdbwh" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "ntdbwh 21;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "ntdbwh")

            actual = computeInputSentenceUnicode("ntwh" as Io & Sentence)
            expectedUnicode = " " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "ntwh 15;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "ntwh")

            actual = computeInputSentenceUnicode("nt2up" as Io & Sentence)
            expectedUnicode = " " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nthfup 11;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "nt2up")

            actual = computeInputSentenceUnicode("ntup" as Io & Sentence)
            expectedUnicode = " " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "ntqrup 11;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "ntup")

            actual = computeInputSentenceUnicode("nt8up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nt8up 18;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "nt8up")

            actual = computeInputSentenceUnicode("nt16up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nt16up 19;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "nt16up")

            actual = computeInputSentenceUnicode("nthfdn" as Io & Sentence)
            expectedUnicode = " " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nthfdn 11;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "nthfdn")

            actual = computeInputSentenceUnicode("ntqrdn" as Io & Sentence)
            expectedUnicode = " " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "ntqrdn 11;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "ntqrdn")

            actual = computeInputSentenceUnicode("nt8dn" as Io & Sentence)
            expectedUnicode = " " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nt8dn 11;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "nt8dn")

            actual = computeInputSentenceUnicode("nt16dn" as Io & Sentence)
            expectedUnicode = " " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nt16dn 11;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "nt16dn")
        })

        it("does not repeatedly advance if multiple smart advance codes are provided (besides adding the default 2 spacing, in preparation for if you were to provide an actual next glyph)", (): void => {
            const inputSentence = "ntup ; ; ; ; ; ;" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = " " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "ntqrup 13;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("gives a default width of 0 to unrecognized codes (given as unicode literals)", (): void => {
            const inputSentence = "U+5E78" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "幸" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "¿¿幸??" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
        })

        it("if more than one unicode has occurred since the previous advance, uses the width of the unicode with the max width", (): void => {
            const inputSentence = "lgln nt16up" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "lgln nt16up 19;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("resets the advance amount after each application", (): void => {
            const inputSentence = "lgln nt16up ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "lgln nt16up 21; ntqrdn 11;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("can have the spacing adjusted from the default of 2", (): void => {
            const inputSentence = "sp7 nt16up ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "nt16up 26; ntqrdn 11;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("supports manual advance amounts", (): void => {
            const inputSentence = "ston D5 /|\\ 14; nt 17;" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   　　" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up2 /|\\ st16 14; up2 ntqrdn 2; st16 16; st16 16;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("supports positioning the next glyph with its right edge against the right edge of the current line with the advance-to-end code", (): void => {
            const inputSentence = `ston \
nt en; bl br; \
nt ; nt en; bl br; \
nt ; nt ; nt en; bl br; \
nt ; nt ; nt ; nt en; bl br; \
nt ; nt ; nt ; nt ; nt en; bl br; \
nt ; nt ; nt ; nt ; nt ; nt en; bl br; \
nt ; nt ; nt ; nt ; nt ; nt ; nt en; bl br; \
nt ; nt ; nt ; nt ; nt ; nt ; nt ; nt en; bl` as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = `\
  
    
       
         
            
              
                  
                      ` as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = `\
ntqrdn st16 15; blsn 1; br; \
ntqrdn st16 13; ntqrdn 3; st16 15; blsn 1; br; \
ntqrdn st16 13; ntqrdn 3; st16 10; ntqrdn 6; st8 7; blsn 1; br; \
ntqrdn st16 13; ntqrdn 3; st16 10; ntqrdn 6; st8 7; ntqrdn 1; st16 15; blsn 1; br; \
ntqrdn st16 13; ntqrdn 3; st16 10; ntqrdn 6; st8 7; ntqrdn 1; st16 12; ntqrdn 4; st16 15; blsn 1; br; \
ntqrdn st16 13; ntqrdn 3; st16 10; ntqrdn 6; st8 7; ntqrdn 1; st16 12; ntqrdn 4; st16 9; ntqrdn 7; st8 7; blsn 1; br; \
ntqrdn st16 13; ntqrdn 3; st16 10; ntqrdn 6; st8 7; ntqrdn 1; st16 12; ntqrdn 4; st16 9; ntqrdn 7; st8 6; ntqrdn 2; st16 15; blsn 1; br; \
ntqrdn st16 13; ntqrdn 3; st16 10; ntqrdn 6; st8 7; ntqrdn 1; st16 12; ntqrdn 4; st16 9; ntqrdn 7; st8 6; ntqrdn 2; st16 11; ntqrdn 5; st8 8; st8 7; blsn 1;` as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("the advance-to-end code also works for the double barline", (): void => {
            const inputSentence = `ston \
nt en; bldb br; \
nt ; nt en; bldb br; \
nt ; nt ; nt en; bldb br; \
nt ; nt ; nt ; nt en; bldb br; \
nt ; nt ; nt ; nt ; nt en; bldb br; \
nt ; nt ; nt ; nt ; nt ; nt en; bldb br; \
nt ; nt ; nt ; nt ; nt ; nt ; nt en; bldb br; \
nt ; nt ; nt ; nt ; nt ; nt ; nt ; nt en; bldb` as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = `\
　    
     
           
          
             
                  
                   
                        ` as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = `\
ntqrdn st16 16; st8 4; bldb 4; br; \
ntqrdn st16 13; ntqrdn 3; st16 12; bldb 4; br; \
ntqrdn st16 13; ntqrdn 3; st16 10; ntqrdn 6; st8 8; st8 4; bldb 4; br; \
ntqrdn st16 13; ntqrdn 3; st16 10; ntqrdn 6; st8 7; ntqrdn 1; st16 12; bldb 4; br; \
ntqrdn st16 13; ntqrdn 3; st16 10; ntqrdn 6; st8 7; ntqrdn 1; st16 12; ntqrdn 4; st16 12; bldb 4; br; \
ntqrdn st16 13; ntqrdn 3; st16 10; ntqrdn 6; st8 7; ntqrdn 1; st16 12; ntqrdn 4; st16 9; ntqrdn 7; st8 8; st8 4; bldb 4; br; \
ntqrdn st16 13; ntqrdn 3; st16 10; ntqrdn 6; st8 7; ntqrdn 1; st16 12; ntqrdn 4; st16 9; ntqrdn 7; st8 6; ntqrdn 2; st16 12; bldb 4; br; \
ntqrdn st16 13; ntqrdn 3; st16 10; ntqrdn 6; st8 7; ntqrdn 1; st16 12; ntqrdn 4; st16 9; ntqrdn 7; st8 6; ntqrdn 2; st16 11; ntqrdn 5; st8 8; st8 4; bldb 4;` as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("the advance-to-end code behaves like a normal smart advance when smart staff is not on (so that if the user deletes the ston code from their sentence, things look basically the same, just without the staff)", (): void => {
            const inputSentence = "nt en; bl" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "ntqrdn 13; blsn 1;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("the advance-to-end code works for glyphs with widths between 1 and 8", (): void => {
            const inputSentence = "ston en; chcrab" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "st8 5; chcrab 3;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("the advance-to-end code works for glyphs with widths of exactly 8", (): void => {
            const inputSentence = "ston en; brmrup" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "st8 brmrup 8;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("the advance-to-end code works for glyphs with widths between 8 and 16", (): void => {
            const inputSentence = "ston en; bk" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "st16 1; bk 15;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("the advance-to-end code works for glyphs with widths of exactly 16", (): void => {
            const inputSentence = "ston en; acsm4dn" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "st16 acsm4dn 16;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("the advance-to-end code works for glyphs with widths between 16 and 24", (): void => {
            const inputSentence = "ston en; accmLH3rnemsq" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "    " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "st24 4; accmLH3rnemsq 20;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("the advance-to-end code works for glyphs with widths of exactly 24", (): void => {
            const inputSentence = "ston en; wgcrlrst" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "st24 wgcrlrst 24;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("you can continue the same line after using an advance-to-end code, and it will include the proper spacing for the character which used to be up against the exact right edge of the line", (): void => {
            const inputSentence = "ston nt en; nt ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　        " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "ntqrdn st16 16; st16 5; ntqrdn 11; st8 2; ntqrdn 6; st8 8;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("the advance-to-end code is canceled by a line break", (): void => {
            const inputSentence = "ston nt en; br; bl ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)
            const expectedUnicode = "　\n    "
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "ntqrdn st16 16; br; blsn st8 3; ntqrdn 5; st8 8;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("the advance-to-end code can be adjusted with manual advance", (): void => {
            const inputSentence = "ston nt en; 1; bl" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)
            const expectedUnicode = "　  "
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "ntqrdn st16 16; blsn st8 8;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("the advance-to-end code can be adjusted with manual advance, when the manual advance amount is greater than the difference between the width of the glyph and the remaining stave", (): void => {
            const inputSentence = "ston nt en; 13; bl" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)
            const expectedUnicode = "　   "
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "ntqrdn st16 16; st16 12; blsn 4;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })
    })

    describe("*** Smart Stave ***", (): void => {
        it("automatically adds stave lines as needed, if smart stave has been asked for", (): void => {
            const inputSentence = "ston nt8up ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "      " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "nt8up st24 20; ntqrdn 4; st8 8;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("does not add additional lines as needed, if only a manual stave has been asked for", (): void => {
            const inputSentence = "st5lnwd nt8up ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "st24 nt8up 20; ntqrdn 11;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("can be turned off and on, and upon turning it off, it advances you to the end of the stave it has already laid down", (): void => {
            const inputSentence = "ston Gcl ; nt ; stof nt ; nt ; ston nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   　  　" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Gcl st24 23; ntqrdn 1; st16 16; ntqrdn 13; ntqrdn 13; ntqrdn st16 16;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("provides leger lines automatically for notes and noteheads beyond ±5 staff positions", (): void => {
            const inputSentence = "ston A5 /|\\ ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "    " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up6 /|\\ st16 13; up6 lgln up6 ntqrdn 3; st8 8;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("only puts leger lines on every other position (the ones that would have been lines)", (): void => {
            const inputSentence = "ston B5 nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up6 lgln up7 ntqrdn st16 16;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("provides multiple leger lines if the note is very beyond the staff", (): void => {
            const inputSentence = "ston A3 nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "dn8 lgln dn6 lgln dn8 ntqrup st16 16;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("turns off leger lines when smart stave is off", (): void => {
            const inputSentence = "stof st5lnnr dn6 nt ston ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "    " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "st8 dn6 ntqrup st16 13; dn6 lgln dn6 ntqrup 3; st8 8;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("provides leger lines of the smallest size which is wider than the glyph they are for", (): void => {
            let actual
            let expectedUnicode
            let expectedCodes

            // Width 6; gets leger line with width 7
            actual = computeInputSentenceUnicode("ston A5 nhslvrensm" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lglnnr up6 nhslvrensm st8 8;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "lglnnr")

            // Width 11; gets leger line with width 13
            actual = computeInputSentenceUnicode("ston A5 nt8dn" as Io & Sentence)
            expectedUnicode = "　" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lgln up6 nt8dn st16 16;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "lgln")

            // Width 15; gets leger line with width 20 (note that leger line width is not factored into smart advance)
            actual = computeInputSentenceUnicode("ston A5 ntshqrmndbwh" as Io & Sentence)
            expectedUnicode = "　" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lglnwd up6 ntshqrmndbwh st16 16;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "lglnwd")

            // Width 21; gets leger line with width 20, because that's as wide as we can go
            actual = computeInputSentenceUnicode("ston A5 ntdbwh" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lglnwd up6 ntdbwh st24 24;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "beyond lglnwd")
        })

        /*
        makes exceptions for upward notes with flags,
        since their flags contribute to width which is irrelevant to the leger line
        (because the stem is on the right, and flags always go to the right,
        so that width is not part of the notehead, which the leger line is really for),
        treating them as if they were just as wide as a quarter note
         */
        it("makes exceptions for upward notes with flags, ignoring the width the flags contribute", (): void => {
            let actual
            let expectedUnicode
            let expectedCodes

            //  has width 11, so it should receive a 13-wide medium leger line

            actual = computeInputSentenceUnicode("ston C4 nt8up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "dn6 lgln dn6 nt8up st24 24;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "nt8up")

            actual = computeInputSentenceUnicode("ston C4 nt16up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "dn6 lgln dn6 nt16up st24 24;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "nt16up")

            actual = computeInputSentenceUnicode("ston C4 nt32up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "dn6 lgln dn6 nt32up st24 24;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "nt32up")

            actual = computeInputSentenceUnicode("ston C4 nt64up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "dn6 lgln dn6 nt64up st24 24;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "nt64up")

            actual = computeInputSentenceUnicode("ston C4 nt128up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "dn6 lgln dn6 nt128up st24 24;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "nt128up")

            actual = computeInputSentenceUnicode("ston C4 nt256up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "dn6 lgln dn6 nt256up st24 24;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "nt256up")

            actual = computeInputSentenceUnicode("ston C4 nt512up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "dn6 lgln dn6 nt512up st24 24;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "nt512up")

            actual = computeInputSentenceUnicode("ston C4 nt1024up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "dn6 lgln dn6 nt1024up st24 24;"
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest, "nt1024up")
        })

        it("should not display anything when you've only entered 'ston'", (): void => {
            const inputSentence = "ston" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = EMPTY_UNICODE as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = BLANK as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("should not display anything when you've only entered 'ston' and an example of the type of staff you want to automate", (): void => {
            const inputSentence = "ston st5ln" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = EMPTY_UNICODE as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = BLANK as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("can be configured to automate different types of staves, by providing one stave of that kind", (): void => {
            const inputSentence = "ston st4ln nt8up ; nt4" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "      " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "nt8up st4lnwd 20; ntqrdn 4; st4lnnr 8;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("manual stave of the same type as the automated type has no effect (including if it's the default type)", (): void => {
            const inputSentence = "ston st5ln nt8up ; nt4" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "      " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "nt8up st24 20; ntqrdn 4; st8 8;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("when smart stave is on, and a code is unrecognized, it first finishes the smart stave, and then for that final space (the one for separating it from other unrecognized codes, but nice to have regardless) it turns smart stave back on, to ensure the next code appears on top of stave", (): void => {
            const inputSentence = "ston nt ; nt; nt; nt ;" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  n  t ;  n  t ;  　" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "ntqrdn st16 18; ¿¿n?? 8; ¿¿t?? 5; ¿¿;?? 8; ¿¿n?? 8; ¿¿t?? 5; ¿¿;?? 6; ntqrdn st16 16;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("when smart stave is off, and a code is unrecognized, it behaves otherwise the same, with the same amount of spacing that is, but just no stave", (): void => {
            const inputSentence = "nt ; nt; nt; nt ;" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = " n  t ;  n  t ;   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "ntqrdn 15; ¿¿n?? 8; ¿¿t?? 5; ¿¿;?? 8; ¿¿n?? 8; ¿¿t?? 5; ¿¿;?? 6; ntqrdn 13;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })

        it("the stof command is a noop when Smart Stave is not on", (): void => {
            const inputSentence = "nt stof nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = " " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "ntqrdn ntqrdn 11;" as Code & Sentence
            expect(debugCodeSentence(actual)).toBe(expectedCodes)
            saveVisualRegressionSpecSvg(actual, thisJasmine.currentTest)
        })
    })
})
