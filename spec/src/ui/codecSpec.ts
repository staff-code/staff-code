import {Io, Sentence} from "@sagittal/general"
import {decodeCodes, encodeCodes} from "../../../src/ui/codec"
import {EncodedCode} from "../../../src/ui/types"

describe("encodeCodes", (): void => {
    it("prepares the codes to be readable when used as query params", (): void => {
        const inputSentence = "ston nt ; nt8 ; cdsq" as Io & Sentence

        const actual = encodeCodes(inputSentence)

        const expected = "ston-nt-q-nt8-q-cdsqq" as EncodedCode & Sentence
        expect(actual).toBe(expected)
    })
})

describe("decodeCodes", (): void => {
    it("undoes what was done to make the codes readable when used as query params", (): void => {
        const encodedSentence = "ston-nt-q-nt8-q-cdsqq" as EncodedCode & Sentence

        const actual = decodeCodes(encodedSentence)

        const expected = "ston nt ; nt8 ; cdsq" as Io & Sentence
        expect(actual).toBe(expected)
    })
})
