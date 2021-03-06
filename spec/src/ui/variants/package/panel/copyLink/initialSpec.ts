import {components} from "../../../../../../../src/ui/variants/package/globals"
import {computeInitialParams} from "../../../../../../../src/ui/variants/package/panel/copyLink/initial"
import {mockDom} from "../../../../../../helpers/mockDom"

describe("computeInitialParams", (): void => {
    beforeEach((): void => {
        mockDom()
    })

    it("returns an empty string when all GUI components are at default settings, and the only GUI component which exists is the display", (): void => {
        components.input = document.createElement("textarea")
        components.input.value = "ston trcl ; "

        const actual = computeInitialParams()

        const expected = "" as string
        expect(actual).toBe(expected)
    })

    it("returns an empty string when all GUI components are at default settings", (): void => {
        mockDom()

        components.input = document.createElement("textarea")
        components.input.value = "ston trcl ; "

        components.sizeSpinner = document.createElement("input")
        components.sizeSpinner.value = "1"

        components.lineSpinner = document.createElement("input")
        components.lineSpinner.value = "2"

        components.referenceWrapper = document.createElement("div")

        components.imageSelect = document.createElement("select")
        const svgImageOption = document.createElement("option")
        svgImageOption.value = "svg"
        svgImageOption.selected = true
        components.imageSelect.appendChild(svgImageOption)

        const actual = computeInitialParams()

        const expected = "" as string
        expect(actual).toBe(expected)
    })

    it("returns params for any GUI component which is not at its default settings", (): void => {
        mockDom()

        components.input = document.createElement("textarea")
        components.input.value = "ston trcl ; nt"

        components.sizeSpinner = document.createElement("input")
        components.sizeSpinner.value = "1.12"

        components.lineSpinner = document.createElement("input")
        components.lineSpinner.value = "2.09"

        components.referenceWrapper = document.createElement("div")
        components.referenceWrapper.classList.add("open")

        components.imageSelect = document.createElement("select")
        const svgImageOption = document.createElement("option")
        svgImageOption.value = "png"
        svgImageOption.selected = true
        components.imageSelect.appendChild(svgImageOption)

        const actual = computeInitialParams()

        const expected = "?size=1.12&line=2.09&image-type=png&reference-open=true&codes=ston-trcl-q-nt" as string
        expect(actual).toBe(expected)
    })

    it("if the codes are empty, encodes it as a single space, otherwise it cannot be shared via query params               ", (): void => {
        mockDom()

        components.input = document.createElement("textarea")
        components.input.value = ""

        const actual = computeInitialParams()

        const expected = "?codes=%20" as string
        expect(actual).toBe(expected)
    })
})
