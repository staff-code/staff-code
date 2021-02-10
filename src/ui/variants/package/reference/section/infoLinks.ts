import {BLANK, Id, isUndefined, Link, Name, RecordKey, sentenceCaseToKebabCase} from "@sagittal/general"
import {Section} from "../../../../../../bin"
import {
    BASICS_NOT_SMuFL_SECTION_ID,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION_ID,
    INTRODUCTION_TO_STAFF_CODE_LINK,
    LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_ID,
} from "./constants"
import {LinkedText} from "./types"

const INFO_LINKS: Record<RecordKey<Id<Section>>, LinkedText> = {
    [BASICS_NOT_SMuFL_SECTION_ID]: {link: INTRODUCTION_TO_STAFF_CODE_LINK, text: "Introduction to StaffCode"},
    [COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION_ID]: {link: BLANK as Link, text: BLANK},
    [LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_ID]: {link: BLANK as Link, text: BLANK},
}

const replaceDiacriticizedCharsWithUndiacriticizedCounterparts = (str: string): string =>
    str.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")

const computeSectionInfoLinkAndTextContent = (
    sectionId: Id<Section>, sectionName: Name<Section>,
): LinkedText => {
    const exceptionInfoLink = INFO_LINKS[sectionId]
    if (!isUndefined(exceptionInfoLink)) return exceptionInfoLink

    const processedSectionName = replaceDiacriticizedCharsWithUndiacriticizedCounterparts(
        sentenceCaseToKebabCase(sectionName),
    )
        .replace(/[()]/g, "")

    return {
        link: `https://w3c.github.io/smufl/latest/tables/${processedSectionName}` as Link,
        text: "SMuFL reference",
    }
}

export {
    computeSectionInfoLinkAndTextContent,
}
