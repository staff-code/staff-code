import {Em, Io, Link, Multiplier, Sentence} from "@sagittal/general"
import {ImageType} from "../../../../../src/ui/types"
import {
    computeInitialCodes,
    computeInitialImageType,
    computeInitialLine,
    computeInitialReferenceOpen,
    computeInitialSize,
} from "../../../../../src/ui/variants/package/initial"
import {mockDom} from "../../../../helpers/mockDom"

describe("computeInitialCodes", (): void => {
    it("decodes them from the query params if available", (): void => {
        const url = "https://staffcode.org/?codes=ston-ntqznt8" as Link
        mockDom({url})

        const actual = computeInitialCodes()

        const expected = "ston nt;\nnt8" as Io & Sentence
        expect(actual).toBe(expected)
    })

    it("takes them from the cookies if available", (): void => {
        mockDom()
        document.cookie = `staffcode_codes=ston%20nt%3B%0Ant16; SameSite=Strict; path=/`

        const actual = computeInitialCodes()

        const expected = "ston nt;\nnt16" as Io & Sentence
        expect(actual).toBe(expected)
    })

    it("if both query params and cookies are available, takes from the query params", (): void => {
        const url = "https://staffcode.org/?codes=ston-ntqznt8" as Link
        mockDom({url})
        document.cookie = `staffcode_codes=ston%20nt%20%3B%0Ant16; SameSite=Strict; path=/`

        const actual = computeInitialCodes()

        const expected = "ston nt;\nnt8" as Io & Sentence
        expect(actual).toBe(expected)
    })

    it("if neither query params nor cookies are available, defaults to a treble clef with smart stave on and already advanced, ready for your first input", (): void => {
        mockDom()

        const actual = computeInitialCodes()

        const expected = "ston Gcl; " as Io & Sentence
        expect(actual).toBe(expected)
    })
})

describe("computeInitialReferenceOpen", (): void => {
    it("decodes them from the query params if available", (): void => {
        const url = "https://staffcode.org/?reference-open=true" as Link
        mockDom({url})

        const actual = computeInitialReferenceOpen()

        expect(actual).toBeTruthy()
    })

    it("takes them from the cookies if available", (): void => {
        mockDom()
        document.cookie = `staffcode_reference-open=true; SameSite=Strict; path=/`

        const actual = computeInitialReferenceOpen()

        expect(actual).toBeTruthy()
    })

    it("if both query params and cookies are available, takes from the query params", (): void => {
        const url = "https://staffcode.org/?reference-open=true" as Link
        mockDom({url})
        document.cookie = `staffcode_reference-open=false; SameSite=Strict; path=/`

        const actual = computeInitialReferenceOpen()

        expect(actual).toBeTruthy()
    })

    it("if neither query params nor cookies are available, defaults to false", (): void => {
        mockDom()

        const actual = computeInitialReferenceOpen()

        expect(actual).toBeFalsy()
    })
})

describe("computeInitialSize", (): void => {
    it("decodes them from the query params if available", (): void => {
        const url = "https://staffcode.org/?size=1.13" as Link
        mockDom({url})

        const actual = computeInitialSize()

        const expected = 1.13 as Multiplier<Em>
        expect(actual).toBe(expected)
    })

    it("takes them from the cookies if available", (): void => {
        mockDom()
        document.cookie = `staffcode_size=0.9; SameSite=Strict; path=/`

        const actual = computeInitialSize()

        const expected = 0.9 as Multiplier<Em>
        expect(actual).toBe(expected)
    })

    it("if both query params and cookies are available, takes from the query params", (): void => {
        const url = "https://staffcode.org/?size=1.13" as Link
        mockDom({url})
        document.cookie = `staffcode_size=0.9; SameSite=Strict; path=/`

        const actual = computeInitialSize()

        const expected = 1.13 as Multiplier<Em>
        expect(actual).toBe(expected)
    })

    it("if neither query params nor cookies are available, defaults to 1", (): void => {
        mockDom()

        const actual = computeInitialSize()

        const expected = 1 as Multiplier<Em>
        expect(actual).toBe(expected)
    })
})

describe("computeInitialLine", (): void => {
    it("decodes them from the query params if available", (): void => {
        const url = "https://staffcode.org/?line=2.13" as Link
        mockDom({url})

        const actual = computeInitialLine()

        const expected = 2.13 as Multiplier<Em>
        expect(actual).toBe(expected)
    })

    it("takes them from the cookies if available", (): void => {
        mockDom()
        document.cookie = `staffcode_line=1.9; SameSite=Strict; path=/`

        const actual = computeInitialLine()

        const expected = 1.9 as Multiplier<Em>
        expect(actual).toBe(expected)
    })

    it("if both query params and cookies are available, takes from the query params", (): void => {
        const url = "https://staffcode.org/?line=2.13" as Link
        mockDom({url})
        document.cookie = `staffcode_line=1.9; SameSite=Strict; path=/`

        const actual = computeInitialLine()

        const expected = 2.13 as Multiplier<Em>
        expect(actual).toBe(expected)
    })

    it("if neither query params nor cookies are available, defaults to 2", (): void => {
        mockDom()

        const actual = computeInitialLine()

        const expected = 2 as Multiplier<Em>
        expect(actual).toBe(expected)
    })
})

describe("computeInitialImageType", (): void => {
    it("decodes them from the query params if available", (): void => {
        const url = "https://staffcode.org/?image-type=png" as Link
        mockDom({url})

        const actual = computeInitialImageType()

        const expected = ImageType.PNG
        expect(actual).toBe(expected)
    })

    it("takes them from the cookies if available", (): void => {
        mockDom()
        document.cookie = `staffcode_image-type=png; SameSite=Strict; path=/`

        const actual = computeInitialImageType()

        const expected = ImageType.PNG
        expect(actual).toBe(expected)
    })

    it("if both query params and cookies are available, takes from the query params", (): void => {
        const url = "https://staffcode.org/?image-type=svg" as Link
        mockDom({url})
        document.cookie = `staffcode_image-type=png; SameSite=Strict; path=/`

        const actual = computeInitialImageType()

        const expected = ImageType.SVG
        expect(actual).toBe(expected)
    })

    it("if neither query params nor cookies are available, defaults to 2", (): void => {
        mockDom()

        const actual = computeInitialImageType()

        const expected = ImageType.SVG
        expect(actual).toBe(expected)
    })
})
