import {Io, isNumber, isUndefined, RecordKey} from "@sagittal/general"
import {smarts} from "./smarts"
import {Code, Codeword, LowercaseCodeword, Symbol, Unicode, Width} from "./symbols"
import {isUnicodeLiteral} from "./utility"

const computeLowercaseCodewordFromInput = (inputWord: Io): LowercaseCodeword =>
    inputWord.toLowerCase() as LowercaseCodeword

const computeLowercaseCodewordFromCodeword = (codeword: Codeword): LowercaseCodeword =>
    codeword.toLowerCase() as LowercaseCodeword

const LOWERCASE_CODEWORD_TO_CODE_MAP: Record<RecordKey<LowercaseCodeword>, Code> =
    (Object.entries(Code) as Array<[Codeword, Code]>).reduce(
        (
            codes: Record<LowercaseCodeword, Code>,
            [codeword, code]: [Codeword, Code],
        ): Record<LowercaseCodeword, Code> => {
            // Object.entries returns, for an enum, both its string keys to its numeric indices *and* vice versa!
            if (!isNumber(code)) return codes

            return ({
                [computeLowercaseCodewordFromCodeword(codeword)]: code,
                ...codes,
            })
        },
        {} as Record<LowercaseCodeword, Symbol>,
    )

// TODO: FEATURE IMPROVE, LOW PRIORITY: PROGRAMMATICALLY DETERMINE WIDTH FOR UNICODE LITERAL SYMBOLS
//  Dave suggests use JS to calculate width of character to estimate its width
//  Preliminary research suggests there is a way to do it, but it's likely pretty tricky
const computeUnicodeLiteralSymbol = (inputWord: Io): Symbol =>
    ({
        unicode: String.fromCharCode(parseInt(inputWord.replace(/^u\+(.*)/, "0x$1"))) as Unicode,
        width: 0 as Width,
    })

const computeFallbackToInputAsFailedSymbol = (inputWord: Io): Symbol =>
    ({
        unicode: inputWord as Unicode,
        width: 0 as Width,
    })

const computeSymbol = (inputWord: Io): Symbol => {
    const lowercaseCodeword: LowercaseCodeword = computeLowercaseCodewordFromInput(inputWord)
    const code: Code = LOWERCASE_CODEWORD_TO_CODE_MAP[lowercaseCodeword]
    const symbol = smarts.codeMap[code]

    if (!isUndefined(symbol)) return symbol

    if (isUnicodeLiteral(inputWord)) return computeUnicodeLiteralSymbol(inputWord)

    return computeFallbackToInputAsFailedSymbol(inputWord)
}

export {
    computeSymbol,
}
