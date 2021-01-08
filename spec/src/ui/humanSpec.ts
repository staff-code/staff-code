import {Io, Sentence} from "@sagittal/general"
import {
    prepareCodesToBeHumanReadableAsEncodedQueryParams,
    undoPreparationOfCodesToBeHumanReadableAsEncodedQueryParams,
} from "../../../src/ui/human"
import {EncodedCode} from "../../../src/ui/types"

const inputSentence = "ston nt ; nt8  ; cdsq - br; ;;  -  - -  .-  .- .-  .- ; - ;" as Io & Sentence
const encodedSentence = "ston-nt-q-nt8  q-cdsqq-j-brq-;;  j  j-j  .j  .j-.j  .j-q-j-q" as EncodedCode & Sentence

describe("prepareCodesToBeHumanReadableAsEncodedQueryParams", (): void => {
    fit("prepares the codes to be readable when used as query params", (): void => {
        const actual = prepareCodesToBeHumanReadableAsEncodedQueryParams(inputSentence)

        expect(actual).toBe(encodedSentence)
    })
})

describe("undoPreparationOfCodesToBeHumanReadableAsEncodedQueryParams", (): void => {
    fit("undoes what was done to make the codes readable when used as query params", (): void => {
        const actual = undoPreparationOfCodesToBeHumanReadableAsEncodedQueryParams(encodedSentence)

        expect(actual).toBe(inputSentence)
    })
})
