import {Link} from "@sagittal/general"
import {WEB_APP_URL} from "../../../../../../../src/gui/constants"
import {codeRunningInStaffCodeWebApp} from "../../../../../../../src/gui/variants/package/panel/copyLink/app"
import {mockDom} from "../../../../../../helpers/mockDom"

describe("codeRunningInStaffCodeWebApp", (): void => {
    it("returns true when running as part of the StaffCode web app", (): void => {
        mockDom({url: WEB_APP_URL})

        const actual = codeRunningInStaffCodeWebApp()

        expect(actual).toBeTruthy()
    })

    it("returns false when running as a package imported into some other web app", (): void => {
        mockDom({url: "https://app.sagittal.org" as Link})

        const actual = codeRunningInStaffCodeWebApp()

        expect(actual).toBeFalsy()
    })
})
