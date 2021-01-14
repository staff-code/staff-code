import {Link} from "@sagittal/general"
import {WEB_APP_URL} from "../../../constants"

const computeBaseUrl = (location: Location): Link =>
    location.protocol + "//" + location.host as Link

const WWW_SUBDOMAINED_WEB_APP_URL = "https://www.staffcode.org" as Link

const codeRunningInStaffCodeWebApp = (): boolean => {
    const baseUrl = computeBaseUrl(window.location)

    return baseUrl === WEB_APP_URL || baseUrl === WWW_SUBDOMAINED_WEB_APP_URL
}

export {
    codeRunningInStaffCodeWebApp,
}
