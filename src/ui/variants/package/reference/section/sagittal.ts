import {cleanArray, shallowClone, Word} from "@sagittal/general"
import {
    ALIASES_MAP,
    Code,
    SAGITTAL_COMMA_NAME_ALIASES_MAP,
    SAGITTAL_SECONDARY_SAGISPEAK_ALIASES_MAP,
    Unicode,
} from "../../../../../translate"

const ALIASES_FOR_REFERENCE_MAP = JSON.parse(JSON.stringify(ALIASES_MAP))

const SAGITTAL_SECONDARY_SAGISPEAK_ALIAS_CODES =
    Object.keys(SAGITTAL_SECONDARY_SAGISPEAK_ALIASES_MAP) as Array<Code & Word>

SAGITTAL_SECONDARY_SAGISPEAK_ALIAS_CODES.forEach((key: Code & Word): void => {
    delete ALIASES_FOR_REFERENCE_MAP[key]
})

const SAGITTAL_ASCII_PRIORITY_EXCEPTIONS = [
    "/||\\",
    "\\!!/",
    "@.",
    "l.",
]

const ALIASES_ENTRIES = Object.entries(ALIASES_FOR_REFERENCE_MAP) as Array<[Code & Word, Unicode & Word]>

const reorderAliasesSuchThatSagittalAsciiAliasesComeFirst = (unicodeAliases: Array<Code & Word>): void => {
    const indexOfCodeWithSagittalAsciiChars = unicodeAliases.findIndex((unicodeAlias: Code & Word): boolean => {
        return SAGITTAL_ASCII_PRIORITY_EXCEPTIONS.includes(unicodeAlias)
    })
    if (indexOfCodeWithSagittalAsciiChars !== -1) {
        const originalUnicodeAliases = shallowClone(unicodeAliases)
        cleanArray(unicodeAliases)
        const aliasesOriginallyBeforeAliasWithNonAlphabeticalChars =
            originalUnicodeAliases.slice(0, indexOfCodeWithSagittalAsciiChars)
        const aliasesOriginallyAfterAliasWithNonAlphabeticalChars =
            originalUnicodeAliases.slice(indexOfCodeWithSagittalAsciiChars + 1)
        const unicodeAliasWithNonAlphabeticalChars = originalUnicodeAliases[indexOfCodeWithSagittalAsciiChars]
        unicodeAliases.push(
            unicodeAliasWithNonAlphabeticalChars,
            ...aliasesOriginallyBeforeAliasWithNonAlphabeticalChars,
            ...aliasesOriginallyAfterAliasWithNonAlphabeticalChars,
        )
    }
}

const reorderAliasesSuchThatSagittalCommaNameAliasesComeFinal = (unicodeAliases: Array<Code & Word>): void => {
    const indexOfSagittalCommaNameAlias =
        unicodeAliases.findIndex((unicodeAlias: Code & Word): boolean => {
            return Object.keys(SAGITTAL_COMMA_NAME_ALIASES_MAP).includes(unicodeAlias)
        })
    if (indexOfSagittalCommaNameAlias !== -1) {
        const originalUnicodeAliases = shallowClone(unicodeAliases)
        cleanArray(unicodeAliases)
        const aliasesBeforeSagittalCommaNameAlias =
            originalUnicodeAliases.slice(0, indexOfSagittalCommaNameAlias)
        const aliasesAfterSagittalCommaNameAlias =
            originalUnicodeAliases.slice(indexOfSagittalCommaNameAlias + 1)
        const sagittalCommaNameAlias = originalUnicodeAliases[indexOfSagittalCommaNameAlias]

        unicodeAliases.push(
            ...aliasesBeforeSagittalCommaNameAlias,
            ...aliasesAfterSagittalCommaNameAlias,
            sagittalCommaNameAlias,
        )
    }
}

export {
    reorderAliasesSuchThatSagittalAsciiAliasesComeFirst,
    reorderAliasesSuchThatSagittalCommaNameAliasesComeFinal,
    ALIASES_ENTRIES,
}
