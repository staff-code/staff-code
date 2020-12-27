import {isUndefined, RecordKey, stringify, Word} from "@sagittal/general"
import {Code, Symbol} from "./types"

const mergeMaps = (...maps: Array<Record<RecordKey<Code & Word>, Symbol>>): Record<RecordKey<Code & Word>, Symbol> => {
    const mergedMaps = {} as Record<RecordKey<Code & Word>, Symbol>

    maps.forEach((map: Record<RecordKey<Code & Word>, Symbol>): void => {
        const mapEntries = Object.entries(map) as Array<[unknown, Symbol]> as Array<[Code & Word, Symbol]>

        mapEntries.forEach(([code, symbol]: [Code & Word, Symbol]): void => {
            if (!isUndefined(mergedMaps[code])) {
                throw new Error(`duplicate code: ${code} maps to both ${stringify(mergedMaps[code])} and ${stringify(symbol)}.`)
            }
            mergedMaps[code] = symbol
        })
    })

    return mergedMaps
}

export {
    mergeMaps,
}
