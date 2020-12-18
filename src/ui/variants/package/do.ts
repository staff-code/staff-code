import {transferInputToDisplay} from "../../transfer"
import {buildStaffCode} from "./dom"

const doPackage = (): void => {
    const root = buildStaffCode()
    document.body.appendChild(root)
    transferInputToDisplay(root)
}

export {
    doPackage,
}
