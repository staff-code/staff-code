// tslint:disable max-line-length

import {Io, Sentence} from "@sagittal/general"
import {computeInputSentenceUnicode, Unicode} from "../../../src"
import {Code} from "../../../src/translate/codes"
import {computeCodeSentenceFromUnicodeSentence} from "../../../src/translate/codes/code"

describe("computeInputSentenceUnicode", (): void => {
    it("basically works", (): void => {
        const inputSentence = "d5 /|\\ d5 nt" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "　 " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "up2 /|\\ up2 ntqrup 13;" as Code & Sentence
        expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
    })

    it("supports multiple staves with a break", (): void => {
        const inputSentence = "ston Gcl ; nt br; nt" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "      \n   " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "Gcl st16 16; st8 7; ntqrup 1; st8 8; st8 4; br; ntqrup st8 8; st8 5;" as Code & Sentence
        expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
    })

    it("adds a space at the end if the last word is a break", (): void => {
        const inputSentence = "ston Gcl ; nt br;" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "      \n " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "Gcl st16 16; st8 7; ntqrup 1; st8 8; st8 4; br; sp" as Code & Sentence
        expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
    })

    it("supports inline comments", (): void => {
        const inputSentence = "ston Gcl ; {check this out} { and you can do a 2nd comment in a row too } nt br; {comment} nt" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "      \n   " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "Gcl st16 16; st8 7; ntqrup 1; st8 8; st8 4; br; ntqrup st8 8; st8 5;" as Code & Sentence
        expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
    })

    it("includes a space after fallen back input words so that when you have multiple in a row you can distinguish them           ", (): void => {
        const inputSentence = "don't know what i'm doing" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "don't know what i'm doing  " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes =
            "?? ?? ?? ?? ?? sp ?? ?? ?? ?? sp ?? ?? ?? ?? sp ?? ?? ?? sp ?? ?? ?? ?? ?? sp 2;" as Code & Sentence
        expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
    })

    it("still supports symbols with curlies, despite those being comment chars", (): void => {
        const inputSentence = "Gcl ; .{ ; nt ; .} ; nt" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "    　  　 " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "Gcl 23; .{ 6; ntqrup 13; .} 6; ntqrup 13;" as Code & Sentence
        expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
    })

    it("is whitespace agnostic", (): void => {
        const inputSentence = "d5           /|\\     \n  d5    \t     nt" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "　 " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "up2 /|\\ up2 ntqrup 13;" as Code & Sentence
        expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
    })

    describe("Smart Position", (): void => {
        it("the most recently used position is automatically applied if none is specified", (): void => {
            const inputSentence = "d5 /|\\ nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up2 /|\\ up2 ntqrup 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("don't manifest until they are needed (only apply to symbols with ligatures to be vertically shifted by them)", (): void => {
            const inputSentence = "d5 ston /|\\ ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "       " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up2 /|\\ st8 8; st8 5; up2 ntqrup 3; st8 8; st8 2;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("persists until a new position is used (is 'sticky')", (): void => {
            const inputSentence = "d5 ston /|\\ ; nt ; g4 \\! ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "            " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up2 /|\\ st8 8; st8 5; up2 ntqrup 3; st8 8; st8 2; dn2 \\! 6; st8 1; dn2 ntqrup 7; st8 6;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("does not actually put the middle position on the stave; there is no zero position glyph in SMuFL, so we temporarily use a code point from the Sagittal range, but it has no actual effect so it shouldn't be emitted", (): void => {
            const inputSentence = "d5 nt ; b4 /|\\ nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　 　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up2 ntqrup 13; /|\\ ntqrup 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("works for the supplemental positions", (): void => {
            const inputSentence = "c7 /|\\ nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up15 /|\\ up15 ntqrup 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })
    })

    describe("Smart Clef", (): void => {
        it("assume treble clef even if no clef has been provided", (): void => {
            const inputSentence = "d4 nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "dn5 ntqrup 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("change depending on the clef", (): void => {
            const inputSentence = "Fcl ; d4 nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Fcl 24; up7 ntqrup 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("clefs are smart and they stick until you change them (you can change from one to the other)", (): void => {
            const inputSentence = "Fcl ; d4 nt ; c4 nt ; Gcl ; d4 nt ; c4 nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  　 　    　 　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Fcl 24; up7 ntqrup 13; up6 ntqrup 13; Gcl 23; dn5 ntqrup 13; dn6 ntqrup 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })
    })

    describe("Smart Advance", (): void => {
        it("advances by the width computed for each glyph from the Bravura font", (): void => {
            let actual
            let expectedUnicode
            let expectedCodes

            actual = computeInputSentenceUnicode("lgln" as Io & Sentence)
            expectedUnicode = "　  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "lgln 15;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("Gcl" as Io & Sentence)
            expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "Gcl 23;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("ntdbwh" as Io & Sentence)
            expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "ntdbwh 23;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("ntwh" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "ntwh 17;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("nt2" as Io & Sentence)
            expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nthfup 13;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("nt4" as Io & Sentence)
            expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "ntqrup 13;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("nt8up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nt8up 20;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("nt16up" as Io & Sentence)
            expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nt16up 21;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("nthfdn" as Io & Sentence)
            expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nthfdn 13;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("ntqrdn" as Io & Sentence)
            expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "ntqrdn 13;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("nt8dn" as Io & Sentence)
            expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nt8dn 13;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("nt16dn" as Io & Sentence)
            expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nt16dn 13;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("gives a default width of 0 to unknown codes", (): void => {
            const inputSentence = "U+5E78" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "幸 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "?? 2;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("accepts unknown codes in other reasonable formats", (): void => {
            expect(computeInputSentenceUnicode("U+5E78" as Io & Sentence)).toBe("幸 " as Unicode & Sentence)
            expect(computeInputSentenceUnicode("u+5e78" as Io & Sentence)).toBe("幸 " as Unicode & Sentence)
            expect(computeInputSentenceUnicode("U5E78" as Io & Sentence)).toBe("幸 " as Unicode & Sentence)
            expect(computeInputSentenceUnicode("u5e78" as Io & Sentence)).toBe("幸 " as Unicode & Sentence)
            expect(computeInputSentenceUnicode("\\u+5E78" as Io & Sentence)).toBe("幸 " as Unicode & Sentence)
            expect(computeInputSentenceUnicode("\\u+5e78" as Io & Sentence)).toBe("幸 " as Unicode & Sentence)
        })

        it("if more than one unicode has occurred since the previous advance, uses the width of the unicode with the max width", (): void => {
            const inputSentence = "lgln nt16up" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "lgln nt16up 21;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("resets the advance amount after each application", (): void => {
            const inputSentence = "lgln nt16up ; nt4" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "lgln nt16up 21; ntqrup 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("can have the spacing adjusted from the default of 2", (): void => {
            const inputSentence = "sp7 nt16up" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "nt16up 24; 2;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("supports manual advance amounts", (): void => {
            const inputSentence = "ston d5 /|\\ 14; nt 17;" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "      " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up2 /|\\ st8 8; st8 6; up2 ntqrup 2; st8 8; st8 7;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })
    })

    describe("Smart Stave", (): void => {
        it("automatically adds stave lines as needed, if smart stave has been asked for", (): void => {
            const inputSentence = "ston nt8up ; nt4" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "     " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "nt8up st16 16; st8 4; ntqrup 4; st8 8; st8 1;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("does not add additional lines as needed, if only a manual stave has been asked for", (): void => {
            const inputSentence = "st24 nt8up ; nt4" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "st24 nt8up 20; ntqrup 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("can be turned off and on", (): void => {
            const inputSentence = "ston Gcl ; nt ; stof nt ; nt ; ston nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "      　 　    " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Gcl st16 16; st8 7; ntqrup 1; st8 8; st8 4; ntqrup 13; ntqrup 13; ntqrup st8 8; st8 5;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("provides leger lines automatically for notes and noteheads beyond ±5 staff positions", (): void => {
            const inputSentence = "ston a5 /|\\ ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "       " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up6 /|\\ st8 8; st8 5; up6 lgln up6 ntqrup 3; st8 8; st8 4;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("only puts leger lines on every other position (the ones that would have been lines)", (): void => {
            const inputSentence = "ston b5 nt ;" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up6 lgln up7 ntqrup st8 8; st8 7;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("provides multiple leger lines if the note is very beyond the staff", (): void => {
            const inputSentence = "ston a3 nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "dn8 lgln dn6 lgln dn8 ntqrup st8 8; st8 7;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("turns off leger lines when smart stave is off", (): void => {
            const inputSentence = "stof st8 dn6 nt ston ; dn6 nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "       " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "st8 dn6 ntqrup st8 8; st8 5; dn6 lgln dn6 ntqrup 3; st8 8; st8 4;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("should not display anything when you've only entered 'ston'", (): void => {
            const inputSentence = "ston" as Io & Sentence

            // todo: still a bug with ston, Regarding the changes of staff when auto-staff is on: I don't think the translated staff piece codes should be passed through to the output. They should only set what staff pieces will be used when they are next required by the auto-staff algorithm. e.g. "ston st5ln" should have exactly the same effect as "ston" alone, namely nothing visible.
            // That was my understanding and my intention, but I see it is not the case. A very similar bug to the one I just extinguished earlier yesterday. Probably again to do with the spacing. That was the fiddliest part of my work yesterday. Spent probably an hour agonizing over the exact conditions here are there for when to treat a symbol as real for what and when not to. I'll add a test or two more to make it right.

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("can be configured to automate different types of staves, by providing one stave of that kind", (): void => {
            const inputSentence = "ston st4ln nt8up ; nt4" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "     " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "nt8up st4ln 16; st4lnnr 4; ntqrup 4; st4lnnr 8; st4lnnr 1;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("manual stave of the same type as the automated type has no effect (including if it's the default type)", (): void => {
            const inputSentence = "ston st5ln nt8up ; nt4" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "     " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "nt8up st16 16; st8 4; ntqrup 4; st8 8; st8 1;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("can be configured to automate different widths of leger lines, by providing one of that kind", (): void => {
            const inputSentence = "ston lglnwd a5 /|\\ ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "        " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up6 /|\\ st8 8; st8 5; up6 lglnwd up6 ntqrup 3; st16 16; st8 3;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })
    })
})
