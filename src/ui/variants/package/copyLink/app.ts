import {WEB_APP_URL} from "../../../constants"

const codeRunningInStaffCodeWebApp = (): boolean => {
    const getUrl = window.location
    const baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split("/")[1]

    return baseUrl === WEB_APP_URL
}

export {
    codeRunningInStaffCodeWebApp,
}
