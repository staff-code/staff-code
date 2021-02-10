import {components} from "../../../../../../../src/ui/variants/package/globals"
import {getStaffCodeCookie} from "../../../../../../../src/ui/variants/package/initial"
import {
    handleLineSpinnerChange,
    handleSizeSpinnerChange,
} from "../../../../../../../src/ui/variants/package/panel/spinners/handlers"
import {Initial} from "../../../../../../../src/ui/variants/package/types"
import {mockDom} from "../../../../../../helpers/mockDom"
import {setupBasicStaffCodePackageVariantForTest} from "../../../../../../helpers/src/ui/variants/package/setup"

describe("handleSizeSpinnerChange", (): void => {
    it("sets the display's font size per the event", (): void => {
        mockDom()
        setupBasicStaffCodePackageVariantForTest()
        const event = {target: {value: "1.1"}} as unknown as Event

        handleSizeSpinnerChange(event)

        expect(components.display.style.fontSize).toBe("2.75em")
    })

    it("sets the cookie accordingly too", (): void => {
        mockDom()
        setupBasicStaffCodePackageVariantForTest()
        const event = {target: {value: "1.1"}} as unknown as Event

        handleSizeSpinnerChange(event)

        expect(getStaffCodeCookie(Initial.SIZE)).toBe("1.1")
    })
})

describe("handleLineSpinnerChange", (): void => {
    it("sets the display's line height per the event", (): void => {
        mockDom()
        setupBasicStaffCodePackageVariantForTest()
        const event = {target: {value: "2.1"}} as unknown as Event

        handleLineSpinnerChange(event)

        expect(components.display.style.lineHeight).toBe("2.1")
    })

    it("sets the cookie accordingly too", (): void => {
        mockDom()
        setupBasicStaffCodePackageVariantForTest()
        const event = {target: {value: "2.1"}} as unknown as Event

        handleLineSpinnerChange(event)

        expect(getStaffCodeCookie(Initial.LINE)).toBe("2.1")
    })
})
