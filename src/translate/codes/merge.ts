import {isUndefined, RecordKey, Word} from "@sagittal/general"
import {caseDesensitize} from "../case"
import {EMPTY_UNICODE} from "../constants"
import {computeUnicodeLiteral} from "./literal"
import {CaseDesensitized, Code, Unicode} from "./types"

const mergeAllCodeMapsIntoCaseDesensitizedCodeMap = (
    ...maps: Array<Record<RecordKey<Code & Word>, Unicode & Word>>
): Record<RecordKey<Code & CaseDesensitized & Word>, Unicode & Word> => {
    const mergedAndCaseDesensitizedMaps = {} as Record<RecordKey<Code & CaseDesensitized & Word>, Unicode & Word>

    maps.forEach((map: Record<RecordKey<Code & Word>, Unicode & Word>): void => {
        const mapEntries = Object.entries(map) as Array<[unknown, Unicode & Word]> as
            Array<[Code & Word, Unicode & Word]>

        mapEntries.forEach(([code, unicode]: [Code & Word, Unicode & Word]): void => {
            const caseDesensitizedCode = caseDesensitize(code)
            if (!isUndefined(mergedAndCaseDesensitizedMaps[caseDesensitizedCode])) {
                throw new Error(`duplicate code: ${code} maps to both code point ${computeUnicodeLiteral(mergedAndCaseDesensitizedMaps[caseDesensitizedCode])} and code point ${computeUnicodeLiteral(unicode)}. If ${computeUnicodeLiteral(EMPTY_UNICODE as Unicode & Word)}, it is probably used for a StaffCode command.`)
            }
            mergedAndCaseDesensitizedMaps[caseDesensitizedCode] = unicode
        })
    })

    return mergedAndCaseDesensitizedMaps
}

export {
    mergeAllCodeMapsIntoCaseDesensitizedCodeMap,
}
