import {Link} from "@sagittal/general"
import {WEB_APP_URL} from "../../../constants"

const computeBaseUrl = (location: Location): Link =>
    location.protocol + "//" + location.host + "/" + location.pathname as Link

const codeRunningInStaffCodeWebApp = (): boolean => {
    const baseUrl = computeBaseUrl(window.location)

    console.log("baseUrl", baseUrl, "webAppUrl", WEB_APP_URL, "window.location", window.location)

    return baseUrl === WEB_APP_URL
}

export {
    codeRunningInStaffCodeWebApp,
}
