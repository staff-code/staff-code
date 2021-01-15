import {loadFontsThen} from "../../fonts"
import {setupBBCodeStaffCode} from "./setup"

loadFontsThen(setupBBCodeStaffCode)

// @ts-ignore
// tslint:disable-next-line no-console
console.log("Running StaffCode v" + __VERSION__)
