import {Link} from "@sagittal/general"
import {WEB_APP_URL} from "../../../constants"

const computeBaseUrl = (location: Location): Link =>
    location.protocol + "//" + location.host as Link

const codeRunningInStaffCodeWebApp = (): boolean => {
    const baseUrl = computeBaseUrl(window.location)

    // TODO: The fix for the copy link button updating the URL still didn't work.
    //  I'll need to do some dedicated debugging.

    console.log("diagnosing base app url checking", baseUrl, WEB_APP_URL, baseUrl === WEB_APP_URL)

    return baseUrl === WEB_APP_URL
}

export {
    codeRunningInStaffCodeWebApp,
}
