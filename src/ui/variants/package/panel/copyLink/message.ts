import {BLANK} from "@sagittal/general"
import {components} from "../../globals"
import {codeRunningInStaffCodeWebApp} from "./app"

const buildCopyLinkMessage = (): HTMLDivElement => {
    const copyLinkMessage = document.createElement("div")
    copyLinkMessage.classList.add("sc-copy-link-message")
    copyLinkMessage.innerHTML = `Link copied to clipboard${codeRunningInStaffCodeWebApp() ? "<br>Browser URL updated" : BLANK}`
    components.copyLinkMessage = copyLinkMessage

    return copyLinkMessage
}

export {
    buildCopyLinkMessage,
}
