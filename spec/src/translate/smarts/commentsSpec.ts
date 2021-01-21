import {Io, Word} from "@sagittal/general"
import {computeIsCommentingAndUpdateSmarts, smarts} from "../../../../src/translate/smarts"

describe("computeIsCommentingAndUpdateSmarts", (): void => {
    describe("when commenting is true", (): void => {
        beforeEach((): void => {
            smarts.commenting = true
        })

        it("and word ends with a }, returns true for this last comment word, but sets commenting to false                ", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("comment}" as Io & Word)

            expect(actual).toBeTruthy()
            expect(smarts.commenting).toBeFalsy()
        })

        it("and word is a }, returns true for this last comment word, but sets commenting to false", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("}" as Io & Word)

            expect(actual).toBeTruthy()
            expect(smarts.commenting).toBeFalsy()
        })

        it("and word does not contain { or }, keeps commenting true", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("comment" as Io & Word)

            expect(actual).toBeTruthy()
            expect(smarts.commenting).toBeTruthy()
        })

        it("and word contains {, keeps commenting true", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("com{ment" as Io & Word)

            expect(actual).toBeTruthy()
            expect(smarts.commenting).toBeTruthy()
        })

        it("and word contains }, keeps commenting true", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("com}ment" as Io & Word)

            expect(actual).toBeTruthy()
            expect(smarts.commenting).toBeTruthy()
        })

        it("and word contains { and }, keeps commenting true", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("co{mm}ent" as Io & Word)

            expect(actual).toBeTruthy()
            expect(smarts.commenting).toBeTruthy()
        })

        it("and word starts with { and ends with }, keeps commenting true", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("{comment}" as Io & Word)

            expect(actual).toBeTruthy()
            expect(smarts.commenting).toBeTruthy()
        })

        it("and word starts with {, keeps commenting true", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("{comment" as Io & Word)

            expect(actual).toBeTruthy()
            expect(smarts.commenting).toBeTruthy()
        })

        it("and word is {, keeps commenting true", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("{" as Io & Word)

            expect(actual).toBeTruthy()
            expect(smarts.commenting).toBeTruthy()
        })
    })

    describe("when commenting is false", (): void => {
        beforeEach((): void => {
            smarts.commenting = false
        })

        it("and word ends with a }, keeps commenting false", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("comment}" as Io & Word)

            expect(actual).toBeFalsy()
            expect(smarts.commenting).toBeFalsy()
        })

        it("and word is a }, keeps commenting false", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("}" as Io & Word)

            expect(actual).toBeFalsy()
            expect(smarts.commenting).toBeFalsy()
        })

        it("and word does not contain { or }, keeps commenting false", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("comment" as Io & Word)

            expect(actual).toBeFalsy()
            expect(smarts.commenting).toBeFalsy()
        })

        it("and word contains {, keeps commenting false", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("com{ment" as Io & Word)

            expect(actual).toBeFalsy()
            expect(smarts.commenting).toBeFalsy()
        })

        it("and word contains }, keeps commenting false", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("com}ment" as Io & Word)

            expect(actual).toBeFalsy()
            expect(smarts.commenting).toBeFalsy()
        })

        it("and word contains { and }, keeps commenting false", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("co{mm}ent" as Io & Word)

            expect(actual).toBeFalsy()
            expect(smarts.commenting).toBeFalsy()
        })

        it("and word starts with { and ends with }, returns true just for this word, but keeps commenting false for afterwords", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("{comment}" as Io & Word)

            expect(actual).toBeTruthy()
            expect(smarts.commenting).toBeFalsy()
        })

        it("and word starts with {, turns commenting on", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("{comment" as Io & Word)

            expect(actual).toBeTruthy()
            expect(smarts.commenting).toBeTruthy()
        })

        it("and word is {, turns commenting on", (): void => {
            const actual = computeIsCommentingAndUpdateSmarts("{" as Io & Word)

            expect(actual).toBeTruthy()
            expect(smarts.commenting).toBeTruthy()
        })
    })
})
