import {Io, Word} from "@sagittal/general"
import {
    BASS_POSITION_ALIASES_MAP,
    LOWERCASED_CODE_MAP,
    TREBLE_POSITION_ALIASES_MAP,
    Unicode,
} from "../../../src/translate/codes"
import {UnicodeLiteral} from "../../../src/translate/codes/types"
import {smarts} from "../../../src/translate/smarts"
import {getUnicode} from "../../../src/translate/unicode"

describe("getUnicode", (): void => {
    it("gets you the unicode for a given base word", (): void => {
        const inputWord = "ntqrup" as Io & Word

        const actual = getUnicode(inputWord)

        const expected = LOWERCASED_CODE_MAP["ntqrup"]
        expect(actual).toEqual(expected)
    })

    it("gets you the unicode for a given alias word", (): void => {
        const inputWord = "nt4" as Io & Word

        const actual = getUnicode(inputWord)

        const expected = LOWERCASED_CODE_MAP["nt4"]
        expect(actual).toEqual(expected)
    })

    it("works for different clefs", (): void => {
        smarts.lowercasedCodeMap = TREBLE_POSITION_ALIASES_MAP
        expect(getUnicode("d4" as Io & Word)).toEqual(LOWERCASED_CODE_MAP["dn5"])
        smarts.lowercasedCodeMap = BASS_POSITION_ALIASES_MAP
        expect(getUnicode("d4" as Io & Word)).toEqual(LOWERCASED_CODE_MAP["up7"])
    })

    it("can handle uppercase codes", (): void => {
        expect(getUnicode("/X" as Io & Word)).toEqual(LOWERCASED_CODE_MAP["/x"])
        expect(getUnicode(".LL" as Io & Word)).toEqual(LOWERCASED_CODE_MAP[".ll"])
    })

    it("takes a a Unicode literal and converts it to Unicode", (): void => {
        const unicodeLiteral: UnicodeLiteral & Word = "U+5E78" as UnicodeLiteral & Word

        const actual = getUnicode(unicodeLiteral)

        const expected = "幸" as Unicode & Word
        expect(actual).toEqual(expected)
    })

    it("let's do a realistic, known example", (): void => {
        const unicodeLiteral: UnicodeLiteral & Word = "U+E3F0" as UnicodeLiteral & Word

        const actual = getUnicode(unicodeLiteral)

        const expected = "" as Unicode & Word
        expect(actual).toEqual(expected)
    })
})