import {isUndefined, RecordKey, stringify} from "@sagittal/general"
import {Codeword, Symbol} from "./types"

const mergeMaps = (...maps: Array<Record<RecordKey<Codeword>, Symbol>>): Record<RecordKey<Codeword>, Symbol> => {
    const mergedMaps = {} as Record<RecordKey<Codeword>, Symbol>

    maps.forEach((map: Record<RecordKey<Codeword>, Symbol>): void => {
        const mapEntries = Object.entries(map) as Array<[unknown, Symbol]> as Array<[Codeword, Symbol]>

        mapEntries.forEach(([codeword, symbol]: [Codeword, Symbol]): void => {
            if (!isUndefined(mergedMaps[codeword])) {
                throw new Error(`duplicate codeword: ${codeword} maps to both ${stringify(mergedMaps[codeword])} and ${stringify(symbol)}.`)
            }
            mergedMaps[codeword] = symbol
        })
    })

    return mergedMaps
}

export {
    mergeMaps,
}
