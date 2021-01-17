import {Link} from "@sagittal/general"
import {WEB_APP_URL} from "../../../constants"

const computeBaseUrl = (location: Location): Link =>
    location.protocol + "//" + location.host as Link

// TODO: BUG, READY TO GO: FIX ISSUES WITH WWW SUBDOMAIN
//  When I go to delete site data I see that cookies are being created separately
//  For both staffcode.org and www.staffcode.org.
//  It would be good if we could get rid of www.staffcode.org except as something that the CloudFlare nameserver
//  Or the Github server translates to staffcode.org if someone uses it by mistake.
//  - Then maybe we could simplify this code too to only use the non www address

const WWW_SUBDOMAINED_WEB_APP_URL = "https://www.staffcode.org" as Link

const codeRunningInStaffCodeWebApp = (): boolean => {
    const baseUrl = computeBaseUrl(window.location)

    return baseUrl === WEB_APP_URL || baseUrl === WWW_SUBDOMAINED_WEB_APP_URL
}

export {
    codeRunningInStaffCodeWebApp,
}
