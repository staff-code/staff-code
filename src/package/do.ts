import {translateInputToDisplay} from "../translate"
import {buildStaffCode} from "./dom"

const doPackage = (): void => {
    const root = buildStaffCode()
    document.body.appendChild(root)
    translateInputToDisplay(root)
}

export {
    doPackage,
}
