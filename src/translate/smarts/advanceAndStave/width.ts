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

// TODO: FEATURE IMPROVE, READY TO GO: LEGER LINE CENTERING
//  It doesn't look like notes center on the leger lines
//  So now Dave wants to have the leger lines just be the next biggest one than the width of the thing being leger-ed
//  Instead of whatever leger line you provide changing which one gets automatically placed
//  "Having played around with it for a while, with different staves and different leger lines,
//  I have changed my mind about letting the user choose the leger line width in auto-staff mode.
//  The leger line width should be based on the width of the note or notehead that triggers it.
//  The 3 widths of leger line are a bit like the 3 widths of staff-pieces.
//  I think you should use the smallest leger line that is wider than the note or notehead, even if only by 1 octal.
//  In the worst case it may be 8 octals wider."
//  "Special treatment will need to be given to upward eighth-notes and smaller,
//  Because we only care about the width of their notehead, not the entire note including flags.
//  They should be assumed to be the same width as the quarter notes in the same group."
//  By which he means:
//  - Upward not downward, because the flags are always on the right, but the stem switches sides, so the flag only adds
//  Width to upward notes
//  - Smaller meaning 16th notes, 32nd notes, 64th notes, etc.
//  - And "same group" he thought there was more than one group, but there's just the one, so don't worry about it
