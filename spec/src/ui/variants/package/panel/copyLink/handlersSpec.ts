import {BLANK, Link, onlyRunInCi} from "@sagittal/general"
import {WEB_APP_URL} from "../../../../../../../src/ui/constants"
import {components} from "../../../../../../../src/ui/variants/package/globals"
import {handleCopyLinkClick} from "../../../../../../../src/ui/variants/package/panel/copyLink/handlers"
import {mockDom} from "../../../../../../helpers/mockDom"
import {setupBasicStaffCode} from "../../../../../../helpers/src/ui/variants/package/setup"

describe("handleCopyLinkClick", (): void => {
    let writeTextSpy: jasmine.Spy

    const setupForHandleCopyLinkClick = ({url}: {url?: Link} = {}): void => {
        mockDom({url})

        setupBasicStaffCode()

        writeTextSpy = jasmine.createSpy()
        navigator.clipboard.writeText = writeTextSpy

        components.copyLinkMessage = document.createElement("div")
    }

    it("activates the copy link message for a few seconds", async (done: DoneFn): Promise<void> => {
        onlyRunInCi()

        setupForHandleCopyLinkClick()

        handleCopyLinkClick()

        expect(components.copyLinkMessage!.classList.contains("active")).toBeTruthy()
        setTimeout((): void => {
            expect(components.copyLinkMessage!.classList.contains("active")).toBeFalsy()
            done()
        }, 3100)
    })

    it("transfers the input to the display, in case the last code the user types wasn't a whitespace", (): void => {
        setupForHandleCopyLinkClick()
        components.input.value = "lalala nt"

        expect(components.display.textContent).toBe(BLANK)
        handleCopyLinkClick()

        expect(components.display.textContent).toBe("l  a l  a l  a   ")
    })

    it("sets the user's clipboard to a link to the web app with all the current configuration ready to initialize it                    ", (): void => {
        setupForHandleCopyLinkClick()
        components.input.value = "lalala nt"

        handleCopyLinkClick()

        expect(writeTextSpy).toHaveBeenCalledWith("https://staffcode.org/?codes=lalala-nt")
    })

    it("does not include the trailing slash if the initial params are blank", (): void => {
        setupForHandleCopyLinkClick()
        components.input.value = "ston Gcl ; "

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
