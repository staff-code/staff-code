import {Link, Name} from "@sagittal/general"
import {
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION_ID,
    COMMANDS_SECTION_ID,
    INTRO_TO_STAFF_CODE_LINK,
    LEGER_LINES_SUPPLEMENT_SECTION_ID,
} from "./constants"
import {Explanation, Parenthetical, ReferenceRow, Section} from "./types"

// TODO: FEATURE IMPROVE, READY TO GO: BASICS SECTION FOR REFERENCE
//  I guess we should add trcl, bscl, alcl, tncl as built-in macros combining an up0 or up2 with a Gcl, Fcl or Ccl,
//  To be listed in the StaffCode commands section.
//  For now, the clefs wouldn't actually get positioned, but you could go ahead and add all this
//  Not literally as macros translating to other codes
//  Or maybe you could do it that way?
//  If you're going to take a pass to add space around semis,
//  You could find these too and replace them with code sequences
//  - Maybe we should redundantly also list the conventional sharp, flat and natural in the
//  "StaffCode commands" table in the Ref, just so all the stuff a new user needs for basic notation is there
//  (when they are given "ston Gcl ;" as a starter).
//  - Call this whole section "basics"

const COMMANDS_SECTION: Section = [
    COMMANDS_SECTION_ID,
    "StaffCode commands" as Name<Section>,
    "" as Parenthetical,
    INTRO_TO_STAFF_CODE_LINK,
    `"Auto stem direction" means stem down for middle line and above, otherwise stem up.` as Explanation,
    [
        ["", "ston", "<u>st</u>aff <u>on</u>"],
        ["", "stof", "<u>st</u>aff <u>of</u>f (default)"],
        ["", "C1", "move to the <u>C1</u> (1st-octave C) position"],
        ["", "...", "..."],
        ["", "B3", "move to the <u>B3</u> position"],
        ["", "C4", "move to the <u>C4</u> (middle C) position"],
        ["", "D4", "move to the <u>D4</u> position"],
        ["", "...", "..."],
        ["", "C7", "move to the <u>C7</u> (7th-octave C) position"],
        ["", "nt2", "<u>n</u>o<u>t</u>e 1/<u>2</u> (with auto stem direction)"],
        ["", "nt4", "<u>n</u>o<u>t</u>e 1/<u>4</u> (with auto stem direction)"],
        ["", "nt8", "<u>n</u>o<u>t</u>e 1/<u>8</u> (with auto stem direction)"],
        ["", "nt16", "<u>n</u>o<u>t</u>e 1/<u>16</u> (with auto stem direction)"],
        ["", "nt32", "<u>n</u>o<u>t</u>e 1/<u>32</u> (with auto stem direction)"],
        ["", "...", "..."],
        ["", "nt1024", "<u>n</u>o<u>t</u>e 1/<u>1024</u> (with auto stem direction)"],
        ["", "sp0", "set <u>sp</u>acing <u>0</u> octals"],
        ["", "sp1", "set <u>sp</u>acing <u>1</u> octal"],
        ["", "sp2", "set <u>sp</u>acing <u>2</u> octals (default)"],
        ["", "...", "..."],
        ["", "sp7", "set <u>sp</u>acing <u>7</u> octals"],
        ["", ";", "advance (by max symbol width plus spacing)"],
        ["", "en;", "<u>en</u>d-of-staff advance"],
        ["", "br;", "line <u>br</u>eak advance"],
        ["", "1;", "<u>1</u> octal advance"],
        ["", "2;", "<u>2</u> octals advance"],
        ["", "3;", "<u>3</u> octals advance"],
        ["", "...", "..."],
        ["", "24;", "<u>24</u> octals advance"],
    ] as ReferenceRow[],
] as Section

const LEGER_LINES_SUPPLEMENT_SECTION: Section = [
    LEGER_LINES_SUPPLEMENT_SECTION_ID,
    "Leger lines supplement" as Name<Section>,
    "" as Parenthetical,
    "" as Link,
    `SMuFL does not have suitable leger lines for all note and notehead symbols, so StaffCode adds the following. StaffCode will generate them automatically following <span>ston</span> (<u>st</u>aff <u>on</u>).` as Explanation,
    [
        ["", "lgln1", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e for <u>1</u> octal wide noteheads"],
        ["", "lgln2", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e for <u>2</u> octal wide noteheads"],
        ["", "lgln3", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e for <u>3</u> octal wide noteheads"],
        ["", "...", "..."],
        ["", "lgln48", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e for <u>48</u> octal wide noteheads"],
    ] as ReferenceRow[],
]

const COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION: Section = [
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION_ID,
    "Combining staff positions supplement" as Name<Section>,
    "" as Parenthetical,
    "" as Link,
    `SMuFL does not allow staff positions corresponding to more than 2 leger lines. And it does not allow symbols on the middle staff line without advancing. So StaffCode adds the following additional positions.` as Explanation,
    [
        ["", "up0", "<u>st</u>aff <u>p</u>o<u>s</u> <u>r</u>ai<u>s</u>e <u>0</u>"],
        ["", "up9", "<u>st</u>aff <u>p</u>o<u>s</u> <u>r</u>ai<u>s</u>e <u>9</u>"],
        ["", "up10", "<u>st</u>aff <u>p</u>o<u>s</u> <u>r</u>ai<u>s</u>e <u>10</u>"],
        ["", "up11", "<u>st</u>aff <u>p</u>o<u>s</u> <u>r</u>ai<u>s</u>e <u>11</u>"],
        ["", "up12", "<u>st</u>aff <u>p</u>o<u>s</u> <u>r</u>ai<u>s</u>e <u>12</u>"],
        ["", "up13", "<u>st</u>aff <u>p</u>o<u>s</u> <u>r</u>ai<u>s</u>e <u>13</u>"],
        ["", "up14", "<u>st</u>aff <u>p</u>o<u>s</u> <u>r</u>ai<u>s</u>e <u>14</u>"],
        ["", "up15", "<u>st</u>aff <u>p</u>o<u>s</u> <u>r</u>ai<u>s</u>e <u>15</u>"],
        ["", "dn9", "<u>st</u>aff <u>p</u>o<u>s</u> <u>l</u>owe<u>r</u> <u>9</u>"],
        ["", "dn10", "<u>st</u>aff <u>p</u>o<u>s</u> <u>l</u>owe<u>r</u> <u>10</u>"],
        ["", "dn11", "<u>st</u>aff <u>p</u>o<u>s</u> <u>l</u>owe<u>r</u> <u>11</u>"],
        ["", "dn12", "<u>st</u>aff <u>p</u>o<u>s</u> <u>l</u>owe<u>r</u> <u>12</u>"],
        ["", "dn13", "<u>st</u>aff <u>p</u>o<u>s</u> <u>l</u>owe<u>r</u> <u>13</u>"],
        ["", "dn14", "<u>st</u>aff <u>p</u>o<u>s</u> <u>l</u>owe<u>r</u> <u>14</u>"],
        ["", "dn15", "<u>st</u>aff <u>p</u>o<u>s</u> <u>l</u>owe<u>r</u> <u>15</u>"],
    ] as ReferenceRow[],
]

export {
    COMMANDS_SECTION,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION,
    LEGER_LINES_SUPPLEMENT_SECTION,
}
