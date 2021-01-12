import {BLANK} from "@sagittal/general"
import {WEB_APP_URL} from "../../../constants"
import {codeRunningInStaffCodeWebApp} from "./app"
import {computeInitialParams} from "./initial"

// TODO: "Copy link" isn't updating the URL in the browser.

const handleCopyLinkClick = (): void => {
    const initialParams = computeInitialParams()

    if (codeRunningInStaffCodeWebApp()) {
        history.pushState(undefined, BLANK, initialParams)
    }

    navigator.clipboard.writeText(`${WEB_APP_URL}${initialParams}`)
}

export {
    handleCopyLinkClick,
}
