import {BLANK} from "@sagittal/general"
import {WEB_APP_URL} from "../../../../constants"
import {transferInputToDisplay} from "../../../../transfer"
import {components, staffCodeConfig} from "../../globals"
import {codeRunningInStaffCodeWebApp} from "./app"
import {computeInitialParams} from "./initial"

const handleCopyLinkClick = (): void => {
    components.copyLinkMessage!.classList.add("active")
    setTimeout((): void => components.copyLinkMessage!.classList.remove("active"), 3000)

    transferInputToDisplay(components.root, staffCodeConfig.callback)

    const initialParams = computeInitialParams()

    if (codeRunningInStaffCodeWebApp()) {
        history.pushState(undefined, BLANK, initialParams)
    }

    navigator.clipboard.writeText(initialParams === BLANK ? WEB_APP_URL : `${WEB_APP_URL}/${initialParams}`)
}

export {
    handleCopyLinkClick,
}
