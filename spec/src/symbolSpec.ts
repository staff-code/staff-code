import {Io} from "@sagittal/general"
import {smarts} from "../../src/smarts"
import {computeSymbol} from "../../src/symbol"
import {
    BASS_POSITION_MAP,
    Code,
    CODE_MAP,
    Symbol,
    TREBLE_POSITION_MAP,
    Unicode,
    Width,
} from "../../src/symbols"
import {UnicodeLiteral} from "../../src/types"

describe("computeSymbol", (): void => {
    it("gets you the symbol (unicode, width, and description) for the given word", (): void => {
        const inputWord = "nt4" as Io

        const actual = computeSymbol(inputWord)

        const expected = CODE_MAP[Code["nt4"]]
        expect(actual).toEqual(expected)
    })

    it("works for different clefs", (): void => {
        smarts.codeMap = TREBLE_POSITION_MAP
        expect(computeSymbol("d4" as Io)).toEqual(CODE_MAP[Code["tbd4"]])
        smarts.codeMap = BASS_POSITION_MAP
        expect(computeSymbol("d4" as Io)).toEqual(CODE_MAP[Code["bsd4"]])
    })

    it("can handle uppercase codes", (): void => {
        expect(computeSymbol("/X" as Io)).toEqual(CODE_MAP[Code["/X"]])
        expect(computeSymbol(".LL" as Io)).toEqual(CODE_MAP[Code[".LL"]])
    })

    it("takes a symbol in its Unicode literal form and converts it to Unicode, and assumes its width is 0                   ", (): void => {
        const unicodeLiteral: UnicodeLiteral = "u+5e78" as UnicodeLiteral

        const actual = computeSymbol(unicodeLiteral)

        const expected = {unicode: "幸" as Unicode, width: 0 as Width} as Symbol
        expect(actual).toEqual(expected)
    })

    it("let's do a realistic, known example", (): void => {
        const unicodeLiteral: UnicodeLiteral = "u+e3f0" as UnicodeLiteral

        const actual = computeSymbol(unicodeLiteral)

        const expected = {unicode: "" as Unicode, width: 0 as Width} as Symbol
        expect(actual).toEqual(expected)
    })
})
