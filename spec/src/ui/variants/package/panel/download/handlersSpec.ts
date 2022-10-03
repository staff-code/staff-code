import {BLANK, Link} from "@sagittal/general"
import {downloadImage} from "../../../../../../../src"
import {WEB_APP_URL} from "../../../../../../../src/ui/constants"
import {components} from "../../../../../../../src/ui/variants/package/globals"
import {INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE} from "../../../../../../../src/ui/variants/package/panel/input/constants"
import {mockDom} from "../../../../../../helpers/mockDom"
import {setupBasicStaffCodePackageVariantForTest} from "../../../../../../helpers/src/ui/variants/package/setup"

describe("downloadImage", (): void => {
    const setupForDownloadSvg = ({url}: {url?: Link} = {url: WEB_APP_URL}): void => {
        mockDom({url})
        // @ts-ignore
        globalThis.XMLHttpRequest = class XMLHttpRequest {
            open(): void {
            }

            send(): void {
            }
        }
        setupBasicStaffCodePackageVariantForTest()
    }

    it("translates the input to the display, in case the last code the user types wasn't a whitespace                      ", async (): Promise<void> => {
        setupForDownloadSvg()
        components.input.value = "lalala nt"

        expect(components.display.textContent).toBe(BLANK)
        await downloadImage()

        expect(components.display.textContent).toBe("  l  a l  a l  a  ")
    })

    it("also saves the state of the input", async (): Promise<void> => {
        setupForDownloadSvg()
        components.input.value = "lalala nt"

        expect(components.input.getAttribute(INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE)).toBeNull()
        await downloadImage()

        expect(components.input.getAttribute(INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE)).toBe("lalala nt")
    })
})
