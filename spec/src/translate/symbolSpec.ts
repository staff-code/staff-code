import {Io, Word} from "@sagittal/general"
import {
    BASS_POSITION_ALIASES_MAP,
    CODE_MAP,
    Octels,
    Symbol,
    TREBLE_POSITION_ALIASES_MAP,
    Unicode,
} from "../../../src/translate/codes"
import {smarts} from "../../../src/translate/smarts"
import {computeSymbol} from "../../../src/translate/symbol"
import {UnicodeLiteral} from "../../../src/translate/types"

describe("computeSymbol", (): void => {
    it("gets you the symbol (unicode and width) for a given base word", (): void => {
        const inputWord = "ntqrup" as Io & Word

        const actual = computeSymbol(inputWord)

        const expected = CODE_MAP["ntqrup"]
        expect(actual).toEqual(expected)
    })

    it("gets you the symbol (unicode and width) for a given alias word", (): void => {
        const inputWord = "nt4" as Io & Word

        const actual = computeSymbol(inputWord)

        const expected = CODE_MAP["nt4"]
        expect(actual).toEqual(expected)
    })

    it("works for different clefs", (): void => {
        smarts.codeMap = TREBLE_POSITION_ALIASES_MAP
        expect(computeSymbol("d4" as Io & Word)).toEqual(CODE_MAP["dn5"])
        smarts.codeMap = BASS_POSITION_ALIASES_MAP
        expect(computeSymbol("d4" as Io & Word)).toEqual(CODE_MAP["up7"])
    })

    it("can handle uppercase codes", (): void => {
        expect(computeSymbol("/X" as Io & Word)).toEqual(CODE_MAP["/X"])
        expect(computeSymbol(".LL" as Io & Word)).toEqual(CODE_MAP[".LL"])
    })

    it("takes a symbol in its Unicode literal form and converts it to Unicode, and assumes its width is 0                   ", (): void => {
        const unicodeLiteral: UnicodeLiteral & Word = "u+5e78" as UnicodeLiteral & Word

        const actual = computeSymbol(unicodeLiteral)

        const expected = {unicode: "幸" as Unicode, width: 0 as Octels} as Symbol
        expect(actual).toEqual(expected)
    })

    it("let's do a realistic, known example", (): void => {
        const unicodeLiteral: UnicodeLiteral & Word = "u+e3f0" as UnicodeLiteral & Word

        const actual = computeSymbol(unicodeLiteral)

        const expected = {unicode: "" as Unicode, width: 0 as Octels} as Symbol
        expect(actual).toEqual(expected)
    })
})
