import {loadFonts} from "../../../../webpack"
import {setupBBCodeStaffCode} from "./setup"

loadFonts().then(setupBBCodeStaffCode)

// @ts-ignore
// tslint:disable-next-line no-console
console.log("Running StaffCode v" + __VERSION__)
