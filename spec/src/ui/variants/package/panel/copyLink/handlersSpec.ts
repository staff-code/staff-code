import {BLANK, Link, slowTestOnlyRunInFullSuite} from "@sagittal/general"
import {WEB_APP_URL} from "../../../../../../../src/ui/constants"
import {components} from "../../../../../../../src/ui/variants/package/globals"
import {handleCopyLinkClick} from "../../../../../../../src/ui/variants/package/panel/copyLink/handlers"
import {INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE} from "../../../../../../../src/ui/variants/package/panel/input/constants"
import {mockDom} from "../../../../../../helpers/mockDom"
import {setupBasicStaffCodePackageVariantForTest} from "../../../../../../helpers/src/ui/variants/package/setup"

let writeTextSpy: jasmine.Spy

const setupForHandleCopyLinkClick = ({url}: {url?: Link} = {url: WEB_APP_URL}): void => {
    mockDom({url})
    // @ts-ignore
    globalThis.navigator.clipboard = {}

    setupBasicStaffCodePackageVariantForTest()

    writeTextSpy = jasmine.createSpy()
    navigator.clipboard.writeText = writeTextSpy

    components.copyLinkMessage = document.createElement("div")
}

describe("handleCopyLinkClick", (): void => {
    it("activates the copy link message for a few seconds", async (): Promise<void> => {
        slowTestOnlyRunInFullSuite()

        setupForHandleCopyLinkClick()

        handleCopyLinkClick()

        expect(components.copyLinkMessage!.classList.contains("active")).toBeTruthy()
        await new Promise(r => setTimeout(r, 3100));
        expect(components.copyLinkMessage!.classList.contains("active")).toBeFalsy()
    })

    it("translates the input to the display, in case the last code the user types wasn't a whitespace", (): void => {
        setupForHandleCopyLinkClick()
        components.input.value = "lalala nt"

        expect(components.display.textContent).toBe(BLANK)
        handleCopyLinkClick()

        expect(components.display.textContent).toBe("  l  a l  a l  a  ")
    })

    it("also saves the state of the input", (): void => {
        setupForHandleCopyLinkClick()
        components.input.value = "lalala nt"

        expect(components.input.getAttribute(INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE)).toBeNull()
        handleCopyLinkClick()

        expect(components.input.getAttribute(INPUT_PREVIOUS_VALUE_DATA_ATTRIBUTE)).toBe("lalala nt")
    })

    it("sets the user's clipboard to a link to the web app with all the current configuration ready to initialize it                    ", (): void => {
        setupForHandleCopyLinkClick()
        components.input.value = "lalala nt"

        handleCopyLinkClick()

        expect(writeTextSpy).toHaveBeenCalledWith("https://staffcode.org/?codes=lalala-nt")
    })

    it("does not include the trailing slash if the initial params are blank", (): void => {
        setupForHandleCopyLinkClick()
        components.input.value = "ston trcl ; "

        handleCopyLinkClick()

        expect(writeTextSpy).toHaveBeenCalledWith("https://staffcode.org")
    })

    it("when running in the web app, sets the URL bar to the link that has just been copied", (): void => {
        setupForHandleCopyLinkClick({url: WEB_APP_URL})
        components.input.value = "lalala nt"

        handleCopyLinkClick()

        expect(window.location.href).toBe("https://staffcode.org/?codes=lalala-nt")
    })

    it("when not running in the web app, does not set the URL bar to the link that has just been copied", (): void => {
        setupForHandleCopyLinkClick({url: "https://app.sagittal.org" as Link})
        components.input.value = "lalala nt"

        handleCopyLinkClick()

        expect(window.location.href).toBe("https://app.sagittal.org/")
    })
})
