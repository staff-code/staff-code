import {isUndefined, RecordKey, stringify} from "@sagittal/general"
import {Code, Symbol} from "./types"

const mergeMaps = (...maps: Array<Record<RecordKey<Code>, Symbol>>): Record<RecordKey<Code>, Symbol> => {
    const mergedMaps = {} as Record<RecordKey<Code>, Symbol>

    maps.forEach((map: Record<RecordKey<Code>, Symbol>): void => {
        const mapEntries = Object.entries(map) as Array<[unknown, Symbol]> as Array<[Code, Symbol]>

        mapEntries.forEach(([code, symbol]: [Code, Symbol]): void => {
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
