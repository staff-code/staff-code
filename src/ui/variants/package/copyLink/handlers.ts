import {BLANK} from "@sagittal/general"
import {WEB_APP_URL} from "../../../constants"
import {components} from "../globals"
import {codeRunningInStaffCodeWebApp} from "./app"
import {computeInitialParams} from "./initial"

const handleCopyLinkClick = (): void => {
    components.copyLinkMessage.classList.add("active")
    setTimeout((): void => components.copyLinkMessage.classList.remove("active"), 1500)

    const initialParams = computeInitialParams()

    if (codeRunningInStaffCodeWebApp()) {
        history.pushState(undefined, BLANK, initialParams)
    }

    navigator.clipboard.writeText(`${WEB_APP_URL}${initialParams}`)
}

export {
    handleCopyLinkClick,
}
