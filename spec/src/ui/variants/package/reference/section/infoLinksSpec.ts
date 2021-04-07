import {Id, Link, Name} from "@sagittal/general"
import {Section} from "../../../../../../../bin"
import {BASICS_NOT_SMuFL_SECTION_ID} from "../../../../../../../src/ui/variants/package/reference/section"
import {
    BASICS_NOT_SMuFL_SECTION_NAME,
    LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_ID,
    LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_NAME,
} from "../../../../../../../src/ui/variants/package/reference/section/constants"
import {computeSectionInfoLinkAndTextContent} from "../../../../../../../src/ui/variants/package/reference/section/title"

describe("computeSectionInfoLinkAndTextContent", (): void => {
    it("gives the correct link for special sections which specify their own info link", (): void => {
        const sectionId = BASICS_NOT_SMuFL_SECTION_ID
        const sectionName = BASICS_NOT_SMuFL_SECTION_NAME

        const actual = computeSectionInfoLinkAndTextContent(sectionId, sectionName)

        const expected = {
            link: "https://forum.sagittal.org/viewtopic.php?f=23&t=519" as Link,
            text: "Introduction to StaffCode",
        }
        expect(actual).toEqual(expected)
    })

    it("gives blank links for special sections without any info link", (): void => {
        const sectionId = LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_ID
        const sectionName = LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_NAME

        const actual = computeSectionInfoLinkAndTextContent(sectionId, sectionName)

        const expected = {link: "" as Link, text: ""}
        expect(actual).toEqual(expected)
    })

    describe("otherwise, it bases the link on the section name", (): void => {
        it("gives the correct link for sections with diacriticized chars", (): void => {
            const sectionId = "Some other section" as Id<Section>
            const sectionName = "Kodály hand signs" as Name<Section>

            const actual = computeSectionInfoLinkAndTextContent(sectionId, sectionName)

            const expected = {
                link: "https://w3c.github.io/smufl/latest/tables/kodaly-hand-signs" as Link,
                text: "SMuFL reference",
            }
            expect(actual).toEqual(expected)
        })

        it("gives the correct link for sections with parenthesis in them", (): void => {
            const sectionId = "Some other section" as Id<Section>
            const sectionName = "Arel-Ezgi-Uzdilek (AEU) accidentals" as Name<Section>

            const actual = computeSectionInfoLinkAndTextContent(sectionId, sectionName)

            const expected = {
                link: "https://w3c.github.io/smufl/latest/tables/arel-ezgi-uzdilek-aeu-accidentals" as Link,
                text: "SMuFL reference",
            }
            expect(actual).toEqual(expected)
        })

        it("gives the correct link for sections with numbers in them", (): void => {
            const sectionId = "Some other section" as Id<Section>
            const sectionName = "Trojan Sagittal extension (12-EDO relative) accidentals" as Name<Section>

            const actual = computeSectionInfoLinkAndTextContent(sectionId, sectionName)

            const expected = {
                // tslint:disable-next-line max-line-length
                link: "https://w3c.github.io/smufl/latest/tables/trojan-sagittal-extension-12-edo-relative-accidentals" as Link,
                text: "SMuFL reference",
            }
            expect(actual).toEqual(expected)
        })
    })
})
