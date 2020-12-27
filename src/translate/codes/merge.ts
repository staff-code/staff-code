import {isUndefined, RecordKey, stringify, Word} from "@sagittal/general"
import {Code, LowercasedCode, Symbol} from "./types"

const mergeAllCodeMapsIntoLowercasedCodeMap = (
    ...maps: Array<Record<RecordKey<Code & Word>, Symbol>>
): Record<RecordKey<LowercasedCode & Word>, Symbol> => {
    const mergedAndLowercasedMaps = {} as Record<RecordKey<LowercasedCode & Word>, Symbol>

    maps.forEach((map: Record<RecordKey<Code & Word>, Symbol>): void => {
        const mapEntries = Object.entries(map) as Array<[unknown, Symbol]> as Array<[Code & Word, Symbol]>

        mapEntries.forEach(([code, symbol]: [Code & Word, Symbol]): void => {
            const lowercasedCode = code.toLowerCase() as LowercasedCode
            if (!isUndefined(mergedAndLowercasedMaps[lowercasedCode])) {
                throw new Error(`duplicate code: ${code} maps to both ${stringify(mergedAndLowercasedMaps[lowercasedCode])} and ${stringify(symbol)}.`)
            }
            mergedAndLowercasedMaps[lowercasedCode] = symbol
        })
    })

    return mergedAndLowercasedMaps
}

export {
    mergeAllCodeMapsIntoLowercasedCodeMap,
}
