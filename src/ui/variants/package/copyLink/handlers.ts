import {BLANK} from "@sagittal/general"
import {codeRunningInStaffCodeWebApp} from "./app"
import {WEB_APP_URL} from "./constants"
import {computeInitialParams} from "./initial"

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
