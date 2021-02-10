import {
    caseDesensitize,
    CaseDesensitized,
    computeUnicodeLiteralFromUnicode,
    isUndefined,
    RecordKey,
    Unicode,
    Word,
} from "@sagittal/general"
import {Code} from "../../../bin"
import {EMPTY_UNICODE} from "../constants"

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
                throw new Error(`duplicate code: ${code} maps to both code point ${computeUnicodeLiteralFromUnicode(mergedAndCaseDesensitizedMaps[caseDesensitizedCode])} and code point ${computeUnicodeLiteralFromUnicode(unicode)}. If ${computeUnicodeLiteralFromUnicode(EMPTY_UNICODE as Unicode & Word)}, it is probably used for a StaffCode command.`)
            }
            mergedAndCaseDesensitizedMaps[caseDesensitizedCode] = unicode
        })
    })

    return mergedAndCaseDesensitizedMaps
}

const mergeCodeMapsCheckingForCaseDesensitizedConflictsButWithoutCaseDesensitizing = (
    ...maps: Array<Record<RecordKey<Code & Word>, Unicode & Word>>
): Record<RecordKey<Code & Word>, Unicode & Word> => {
    const mergedMaps = {} as Record<RecordKey<Code & Word>, Unicode & Word>

    maps.forEach((map: Record<RecordKey<Code & Word>, Unicode & Word>): void => {
        const mapEntries = Object.entries(map) as Array<[unknown, Unicode & Word]> as
            Array<[Code & Word, Unicode & Word]>

        mapEntries.forEach(([code, unicode]: [Code & Word, Unicode & Word]): void => {
            const caseDesensitizedCode = caseDesensitize(code)
            if (!isUndefined(mergedMaps[caseDesensitizedCode])) {
                throw new Error(`duplicate code: ${code} maps to both code point ${computeUnicodeLiteralFromUnicode(mergedMaps[caseDesensitizedCode])} and code point ${computeUnicodeLiteralFromUnicode(unicode)}. If ${computeUnicodeLiteralFromUnicode(EMPTY_UNICODE as Unicode & Word)}, it is probably used for a StaffCode command.`)
            }
            mergedMaps[code] = unicode
        })
    })

    return mergedMaps
}

export {
    mergeAllCodeMapsIntoCaseDesensitizedCodeMap,
    mergeCodeMapsCheckingForCaseDesensitizedConflictsButWithoutCaseDesensitizing,
}
