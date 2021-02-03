import {Px} from "@sagittal/general"
import {components} from "../../../../../../../src/ui/variants/package/globals"
import {computeFontSizeForTextToSvg} from "../../../../../../../src/ui/variants/package/panel/download/font"
import {mockDom} from "../../../../../../helpers/mockDom"

describe("computeFontSizeForTextToSvg", (): void => {
    it("returns the size times the base font size times the conversion factor from em to px, since text-to-svg needs it in px but the app works in em", (): void => {
        mockDom()
        components.sizeSpinner = document.createElement("input")
        components.sizeSpinner.value = "3.3"

        const actual = computeFontSizeForTextToSvg()

        let expected = 132 as Px // 3.3 * 2.5 * 16
        expect(actual).toBe(expected)
    })
})
