import {Io, Sentence} from "@sagittal/general"
import {
    prepareCodesToBeHumanReadableAsEncodedQueryParams,
    undoPreparationOfCodesToBeHumanReadableAsEncodedQueryParams,
} from "../../../src/ui/human"
import {EncodedCode} from "../../../src/ui/types"

describe("prepareCodesToBeHumanReadableAsEncodedQueryParams", (): void => {
    it("prepares the codes to be readable when used as query params", (): void => {
        const inputSentence = "ston nt ; nt8 ; cdsq" as Io & Sentence

        const actual = prepareCodesToBeHumanReadableAsEncodedQueryParams(inputSentence)

        const expected = "ston-nt-q-nt8-q-cdsqq" as EncodedCode & Sentence
        expect(actual).toBe(expected)
    })
})

describe("undoPreparationOfCodesToBeHumanReadableAsEncodedQueryParams", (): void => {
    it("undoes what was done to make the codes readable when used as query params", (): void => {
        const encodedSentence = "ston-nt-q-nt8-q-cdsqq" as EncodedCode & Sentence

        const actual = undoPreparationOfCodesToBeHumanReadableAsEncodedQueryParams(encodedSentence)

        const expected = "ston nt ; nt8 ; cdsq" as Io & Sentence
        expect(actual).toBe(expected)
    })
})
