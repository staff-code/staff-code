import {BLANK, Link} from "@sagittal/general"
import {downloadSvg} from "../../../../../../../src/gui/variants"
import {components} from "../../../../../../../src/gui/variants/package/globals"
import {INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE} from "../../../../../../../src/gui/variants/package/panel/input/constants"
import {mockDom} from "../../../../../../helpers/mockDom"
import {setupBasicStaffCode} from "../../../../../../helpers/src/gui/variants/package/setup"

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

    it("translates the input to the display, in case the last code the user types wasn't a whitespace                      ", async (done: DoneFn): Promise<void> => {
        setupForDownloadSvg()
        components.input.value = "lalala nt"

        expect(components.display.textContent).toBe(BLANK)
        await downloadSvg()

        expect(components.display.textContent).toBe("  l  a l  a l  a  ")
        done()
    })

    it("also saves the state of the input", async (done: DoneFn): Promise<void> => {
        setupForDownloadSvg()
        components.input.value = "lalala nt"

        expect(components.input.getAttribute(INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE)).toBeNull()
        await downloadSvg()

        expect(components.input.getAttribute(INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE)).toBe("lalala nt")
        done()
    })
})
