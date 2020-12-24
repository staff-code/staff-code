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

loadFontsThen(setupBBCodeStaffCode)

// TODO: inline
// tslint:disable:max-line-length
/*
In writing further [url=http://forum.sagittal.org/viewtopic.php?p=3192#p3192]Intro-to-SC[/url] material, I have realised we need two different bbCodes — one for display, like we have now, and one for inline. This is like the two options we have for LaTeX/ASCIIMath. StaffCode could be called ASCIIMusic (but I like "StaffCode" better).

With hope in my heart, I defined [_]sc]...[/sc] for the inline version, and changed the <div> to a <span>, but as I'm sure you would have predicted, it made no difference. But I predict you'll be able to [i]make [/i]it make a difference. Because [i]you [/i]are very clever with this stuff. :cool:

Don't forget, for the inline case, that we have the [_]size] and [_]line] bbCodes to help us if a symbol is too tall for the normal line-height of the surrounding text.

I suggest the following help lines. Note that I've deleted the unnecessary trailing semicolon, but added leading and trailing spaces for readability.

[b]Convert staffCodes into a music notation figure: [_]staff] ston Gcl ; F4 nt [/staff][/b]
[b]
Convert staffCodes into inline music notation: [_]sc] /| [/sc][/b]

Remember to delete the "_]" escapes.
 */
