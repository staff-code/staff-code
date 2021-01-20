import {BLANK} from "@sagittal/general"
import {WEB_APP_URL} from "../../../../constants"
import {components} from "../../globals"
import {codeRunningInStaffCodeWebApp} from "./app"
import {computeInitialParams} from "./initial"

// TODO: I think you should force a translation — an update of the output 
//  — as the first thing when the user clicks Copy or
//  Download, in case the user just typed something but didn't end with a space or semicolon.
const handleCopyLinkClick = (): void => {
    components.copyLinkMessage.classList.add("active")
    setTimeout((): void => components.copyLinkMessage.classList.remove("active"), 3000)

    const initialParams = computeInitialParams()

    if (codeRunningInStaffCodeWebApp()) {
        history.pushState(undefined, BLANK, initialParams)
    }

    navigator.clipboard.writeText(`${WEB_APP_URL}/${initialParams}`)
}

export {
    handleCopyLinkClick,
}
