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

// TODO: FEATURE IMPROVE, TOUGH AND LOW PRIORITY: PROGRAMMATICALLY DETERMINE WIDTH OF UNICODE LITERAL SYMBOLS
//  Dave suggests use JS to calculate width of char to estimate its width
//  Preliminary research suggests there is a way to do it, but it's likely pretty tricky
//  A problem is that we'd need to pull Bravura Text in to do it, since it doesn't have everything's advances 0'ed out
//  To solve the missing zero CSP bug in Bravura Text.
//  See: http://forum.sagittal.org/viewtopic.php?p=3172#p3172
//  - In the end, the widths should not be mixed up with the mapping of code to unicode. Different width per font!
//  Have a different config file for each font, and just do the computation once all up front, instead of on the fly.
//  See: http://forum.sagittal.org/viewtopic.php?p=3181#p3181
//  - Good news. The advance width info for Bravura already exists in JSON,
//  As part of this file: https://github.com/steinbergmedia/bravura/blob/master/redist/bravura_metadata.json
//  Its structure is described here: https://w3c.github.io/smufl/gitbook/specification/glyphadvancewidths.html
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
