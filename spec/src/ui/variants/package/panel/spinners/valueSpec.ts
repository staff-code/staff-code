import {Em, Link, Multiplier} from "@sagittal/general"
import {components} from "../../../../../../../src/ui/variants/package/globals"
import {getLine, getSize} from "../../../../../../../src/ui/variants/package/panel/spinners"
import {mockDom} from "../../../../../../helpers/mockDom"

describe("getSize", (): void => {
    it("gets it from the size spinner, if it exists", (): void => {
        mockDom()
        const sizeSpinner = document.createElement("input")
        sizeSpinner.value = "1.7"
        components.sizeSpinner = sizeSpinner

        const actual = getSize()

        const expected = 1.7 as Multiplier<Em>
        expect(actual).toBe(expected)
    })

    it("decodes them from the query params if available", (): void => {
        const url = "https://staffcode.org/?size=1.12" as Link
        mockDom({url})

        const actual = getSize()

        const expected = 1.12 as Multiplier<Em>
        expect(actual).toBe(expected)
    })

    it("takes them from the cookies if available", (): void => {
        mockDom()
        document.cookie = `staffcode_size=0.9`

        const actual = getSize()

        const expected = 0.9 as Multiplier<Em>
        expect(actual).toBe(expected)
    })

    it("if all are available, takes from the actual spinner", (): void => {
        const url = "https://staffcode.org/?size=1.12" as Link
        mockDom({url})
        const sizeSpinner = document.createElement("input")
        sizeSpinner.value = "1.7"
        components.sizeSpinner = sizeSpinner
        document.cookie = `staffcode_size=0.9`

        const actual = getSize()

        const expected = 1.7 as Multiplier<Em>
        expect(actual).toBe(expected)
    })

    it("if neither a DOM spinner, query params, nor cookies are available, defaults to 1", (): void => {
        mockDom()

        const actual = getSize()

        const expected = 1 as Multiplier<Em>
        expect(actual).toBe(expected)
    })
})

describe("getLine", (): void => {
    it("gets it from the line spinner, if it exists", (): void => {
        mockDom()
        const lineSpinner = document.createElement("input")
        lineSpinner.value = "1.7"
        components.lineSpinner = lineSpinner

        const actual = getLine()

        const expected = 1.7 as Multiplier<Em>
        expect(actual).toBe(expected)
    })

    it("decodes them from the query params if available", (): void => {
        const url = "https://staffcode.org/?line=2.13" as Link
        mockDom({url})

        const actual = getLine()

        const expected = 2.13 as Multiplier<Em>
        expect(actual).toBe(expected)
    })

    it("takes them from the cookies if available", (): void => {
        mockDom()
        document.cookie = `staffcode_line=1.9`

        const actual = getLine()

        const expected = 1.9 as Multiplier<Em>
        expect(actual).toBe(expected)
    })

    it("if all are available, takes from the actual spinner", (): void => {
        const url = "https://staffcode.org/?line=2.13" as Link
        mockDom({url})
        const lineSpinner = document.createElement("input")
        lineSpinner.value = "1.7"
        components.lineSpinner = lineSpinner
        document.cookie = `staffcode_line=1.9`

        const actual = getLine()

        const expected = 1.7 as Multiplier<Em>
        expect(actual).toBe(expected)
    })

    it("if neither a DOM spinner, query params, nor cookies are available, defaults to 2", (): void => {
        mockDom()

        const actual = getLine()

        const expected = 2 as Multiplier<Em>
        expect(actual).toBe(expected)
    })
})
