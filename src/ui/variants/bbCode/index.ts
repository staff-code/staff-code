import pkg from "../../../../package.json"
import {loadFontsThen} from "../../fonts"
import {setupBBCodeStaffCode} from "./setup"

// Just an FYI. This works (the document.write in the htmlReplacement) but it gives a warning.
// tslint:disable max-line-length
/*
posting.php?mode=reply&f=17&t=436:313 A parser-blocking, cross site (i.e. different eTLD+1) script, https://staffcode.org/bbCode/staffCode.js, is invoked via document.write. The network request for this script MAY be blocked by the browser in this or a future page load due to poor network connectivity. If blocked in this page load, it will be confirmed in a subsequent console message. See https://www.chromestatus.com/feature/5718547946799104 for more details.
*/
(globalThis as unknown as {staffCode: string}).staffCode = "LOADED"

loadFontsThen(setupBBCodeStaffCode)

// @ts-ignore
// tslint:disable-next-line no-console
console.log("Running StaffCode v" + pkg.version)
