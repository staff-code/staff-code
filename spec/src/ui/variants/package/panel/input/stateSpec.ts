import {components} from "../../../../../../../src/ui/variants/package/globals"
import {getPreviousInputState, setPreviousInputState} from "../../../../../../../src/ui/variants/package/panel"
import {mockDom} from "../../../../../../helpers/mockDom"
import {setupBasicStaffCodePackageVariantForTest} from "../../../../../../helpers/src/ui/variants/package/setup"

describe("getPreviousInputState", (): void => {
    it("lets you retrieve the previous state of the input", (): void => {
        mockDom()
        setupBasicStaffCodePackageVariantForTest()

        const previousInputState = getPreviousInputState()
        expect(previousInputState.value).toBe("")
        expect(previousInputState.position).toBeNaN()

        const value = "howdy pahdnah"
        const position = 3
        components.input.value = value
        components.input.selectionStart = position
        setPreviousInputState()

        const actual = getPreviousInputState()
        expect(actual.value).toBe(value)
        expect(actual.position).toBe(position)
    })
})
