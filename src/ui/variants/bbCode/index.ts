/*
# staffCode

The `staffCode` script converts text codes for sheet music notation elements into SMuFL unicode
characters. You can use it to type things like:

a4 nt4 c5 nt4 e5 nt4

and see a chord displayed on a staff.

This script will find all elements on the page matching the CSS selector `div.staff-code`
and convert their `staffCode` from text to unicode. A modified version of the Bravura Text font
from Steinberg MediaTechnologies GmbH, designed by Daniel Spreadbury, is used to display as sheet
music notation. This project would not have been possible without the great work done on Bravura
Text, and its precursors Bravura and SMuFL. For more information see https://www.smufl.org/fonts/.
*/

import {loadFontsThen} from "../../fonts"
import {setupBBCodeStaffCode} from "./setup"

// Just an FYI. This works (the document.write in the htmlReplacement) but it gives a warning.
// tslint:disable max-line-length
/*
posting.php?mode=reply&f=17&t=436:313 A parser-blocking, cross site (i.e. different eTLD+1) script, https://staffcode.sagittal.org/staffCode.js, is invoked via document.write. The network request for this script MAY be blocked by the browser in this or a future page load due to poor network connectivity. If blocked in this page load, it will be confirmed in a subsequent console message. See https://www.chromestatus.com/feature/5718547946799104 for more details.
*/
(globalThis as unknown as {staffCode: string}).staffCode = "LOADED"

loadFontsThen(setupBBCodeStaffCode)

// @ts-ignore
// tslint:disable-next-line no-console
console.log("Running StaffCode v" + __VERSION__)
