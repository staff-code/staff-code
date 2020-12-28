import {isUndefined, RecordKey, Word} from "@sagittal/general"
import {computeUnicodeLiteral} from "./literal"
import {Code, LowercasedCode, Unicode} from "./types"

const mergeAllCodeMapsIntoLowercasedCodeMap = (
    ...maps: Array<Record<RecordKey<Code & Word>, Unicode & Word>>
): Record<RecordKey<LowercasedCode & Word>, Unicode & Word> => {
    const mergedAndLowercasedMaps = {} as Record<RecordKey<LowercasedCode & Word>, Unicode & Word>

    maps.forEach((map: Record<RecordKey<Code & Word>, Unicode & Word>): void => {
        const mapEntries = Object.entries(map) as Array<[unknown, Unicode & Word]> as
            Array<[Code & Word, Unicode & Word]>

        mapEntries.forEach(([code, unicode]: [Code & Word, Unicode & Word]): void => {
            const lowercasedCode = code.toLowerCase() as LowercasedCode & Word
            if (!isUndefined(mergedAndLowercasedMaps[lowercasedCode])) {
                throw new Error(`duplicate code: ${code} maps to both code point ${computeUnicodeLiteral(mergedAndLowercasedMaps[lowercasedCode])} and code point ${computeUnicodeLiteral(unicode)}.`)
            }
            mergedAndLowercasedMaps[lowercasedCode] = unicode
        })
    })

    return mergedAndLowercasedMaps
}

export {
    mergeAllCodeMapsIntoLowercasedCodeMap,
}
