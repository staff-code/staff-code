import {BLANK, Link, Name} from "@sagittal/general"
import {Section} from "../../../../../../../bin"
import {computeSectionInfoLink} from "../../../../../../../src/ui/variants/package/reference/section/title"

describe("computeSectionInfoLink", (): void => {
    it("gives the correct link for special sections which specify their own info link", (): void => {
        const sectionInfoLink = "https://forum.sagittal.org/viewtopic.php?p=3192#p3192" as Link
        const sectionName = "StaffCode basics" as Name<Section>

        const actual = computeSectionInfoLink(sectionInfoLink, sectionName)

        const expected = "https://forum.sagittal.org/viewtopic.php?p=3192#p3192" as Link
        expect(actual).toBe(expected)
    })

    describe("otherwise, it bases the link on the section name", (): void => {
        it("gives the correct link for sections with diacriticized chars", (): void => {
            const sectionInfoLink = BLANK as Link
            const sectionName = "Kodály hand signs" as Name<Section>

            const actual = computeSectionInfoLink(sectionInfoLink, sectionName)

            const expected = "https://w3c.github.io/smufl/latest/tables/kodaly-hand-signs" as Link
            expect(actual).toBe(expected)
        })

        it("gives the correct link for sections with parenthesis in them", (): void => {
            const sectionInfoLink = BLANK as Link
            const sectionName = "Arel-Ezgi-Uzdilek (AEU) accidentals" as Name<Section>

            const actual = computeSectionInfoLink(sectionInfoLink, sectionName)

            const expected = "https://w3c.github.io/smufl/latest/tables/arel-ezgi-uzdilek-aeu-accidentals" as Link
            expect(actual).toBe(expected)
        })

        it("gives the correct link for sections with numbers in them", (): void => {
            const sectionInfoLink = BLANK as Link
            const sectionName = "Trojan Sagittal extension (12-EDO relative) accidentals" as Name<Section>

            const actual = computeSectionInfoLink(sectionInfoLink, sectionName)

            const expected = "https://w3c.github.io/smufl/latest/tables/trojan-sagittal-extension-12-edo-relative-accidentals" as Link
            expect(actual).toBe(expected)
        })
    })
})
