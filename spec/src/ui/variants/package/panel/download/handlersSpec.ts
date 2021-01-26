import {BLANK, Link} from "@sagittal/general"
import {downloadSvg} from "../../../../../../../src"
import {components} from "../../../../../../../src/ui/variants/package/globals"
import {INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE} from "../../../../../../../src/ui/variants/package/panel/input/constants"
import {mockDom} from "../../../../../../helpers/mockDom"
import {setupBasicStaffCode} from "../../../../../../helpers/src/ui/variants/package/setup"

describe("downloadSvg", (): void => {
    const setupForDownloadSvg = ({url}: {url?: Link} = {}): void => {
        mockDom({url})
        // @ts-ignore
        globalThis.XMLHttpRequest = class XMLHttpRequest {
            open(): void {
            }

            send(): void {
            }
        }
        setupBasicStaffCode()
    }

    it("translates the input to the display, in case the last code the user types wasn't a whitespace", (): void => {
        setupForDownloadSvg()
        components.input.value = "lalala nt"

        expect(components.display.textContent).toBe(BLANK)
        downloadSvg()

        expect(components.display.textContent).toBe("  l  a l  a l  a  ")
    })

    it("also saves the state of the input", (): void => {
        setupForDownloadSvg()
        components.input.value = "lalala nt"

        expect(components.input.getAttribute(INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE)).toBeNull()
        downloadSvg()

        expect(components.input.getAttribute(INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE)).toBe("lalala nt")
    })
})
