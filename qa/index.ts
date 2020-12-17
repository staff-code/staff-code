import {buildStaffCode, translateInputToDisplay} from "../src"

const root = buildStaffCode()
document.body.appendChild(root)

translateInputToDisplay(root)
