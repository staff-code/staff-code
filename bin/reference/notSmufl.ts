import {Link, Name} from "@sagittal/general"
import {
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION_ID,
    COMMANDS_SECTION_ID,
    INTRO_TO_STAFF_CODE_LINK,
    LEGER_LINES_SUPPLEMENT_SECTION_ID,
} from "./constants"
import {NOT_SMUFL} from "./parentheticals"
import {Explanation, ReferenceRow, Section} from "./types"

const COMMANDS_SECTION: Section = [
    COMMANDS_SECTION_ID,
    "StaffCode commands" as Name<Section>,
    NOT_SMUFL,
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

//  TODO: FEATURE IMPROVE, READY TO GO: REFERENCE TABLE RE-ORDER
//   I note that to be consistent with the new Bravura Text SC font,
//   We need to swap the order of the last two tables,
//   Because I've put the 48 new leger lines from F3C0 to F3EF,
//   And the 15 new CSPs from F3F0 to F3FE.

const COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION: Section = [
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION_ID,
    "Combining staff positions supplement" as Name<Section>,
    NOT_SMUFL,
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

// TODO: FEATURE IMPROVE, READY TO GO: LEGER LINE REFERENCE TABLE UPDATES
//  Feel free to elide the table of leger lines down to the rows for lgln1, lgln2, lgln3 ... lgln48,
//  Since no one ever needs to insert these codes.
//  And please change the mnemonics from "[u]l[/u]e[u]g[/u]er [u]l[/u]i[u]n[/u]e [u]<n>[/u] octals" to
//  "[u]l[/u]e[u]g[/u]er [u]l[/u]i[u]n[/u]e for [u]<n>[/u] octal wide noteheads".

const LEGER_LINES_SUPPLEMENT_SECTION: Section = [
    LEGER_LINES_SUPPLEMENT_SECTION_ID,
    "Leger lines supplement" as Name<Section>,
    NOT_SMUFL,
    "" as Link,
    `SMuFL does not have suitable leger lines for all note and notehead symbols, so StaffCode adds the following. StaffCode will generate them automatically following <span>ston</span> (<u>st</u>aff <u>on</u>).` as Explanation,
    [
        ["", "lgln8", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e <u>8</u> octals"],
        ["", "lgln10", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e <u>10</u> octals"],
        ["", "lgln12", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e <u>12</u> octals"],
        ["", "lgln14", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e <u>14</u> octals"],
        ["", "lgln16", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e <u>16</u> octals"],
        ["", "lgln18", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e <u>18</u> octals"],
        ["", "lgln20", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e <u>20</u> octals"],
        ["", "lgln22", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e <u>22</u> octals"],
        ["", "lgln24", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e <u>24</u> octals"],
        ["", "lgln28", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e <u>28</u> octals"],
        ["", "lgln34", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e <u>34</u> octals"],
        ["", "lgln40", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e <u>40</u> octals"],
    ] as ReferenceRow[],
]

export {
    COMMANDS_SECTION,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_SECTION,
    LEGER_LINES_SUPPLEMENT_SECTION,
}
