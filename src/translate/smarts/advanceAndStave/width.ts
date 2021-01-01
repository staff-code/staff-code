import {add, isUndefined, Word} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {isNonSymbolUnicode} from "../../unicode"
import {bravuraWidths, smarts} from "../globals"
import {isNonsymbolifiedStaffUnicode} from "../nonsymbolified"

const shouldNotBeSpaced = (unicode: Unicode & Word): boolean =>
    isNonSymbolUnicode(unicode)
    || isNonsymbolifiedStaffUnicode(unicode)

const computeUnicodeWidth = (unicode: Unicode & Word): Octals => {
    const bravuraWidth = bravuraWidths[unicode]
    const width = isUndefined(bravuraWidth) ? 0 as Octals : bravuraWidth

    return shouldNotBeSpaced(unicode) ? width : add(width, smarts.spacing)
}

export {
    computeUnicodeWidth,
}

// TODO: FEATURE IMPROVE, BLOCKED: LEGER LINE CENTERING
//  It doesn't look like notes center on the leger lines
//  So now Dave wants to have the leger lines just be the next biggest one than the width of the thing being leger-ed
//  Instead of whatever leger line you provide changing which one gets automatically placed
//  "Having played around with it for a while, with different staves and different leger lines,
//  I have changed my mind about letting the user choose the leger line width in auto-staff mode.
//  The leger line width should be based on the width of the note or notehead that triggers it.
//  The 3 widths of leger line are a bit like the 3 widths of staff-pieces.
//  I think you should use the smallest leger line that is wider than the note or notehead, even if only by 1 octal.
//  In the worst case it may be 8 octals wider."
//  - Only blocked because waiting on absolute confirmation of the behavior for pass-through stuff when auto stave is on
