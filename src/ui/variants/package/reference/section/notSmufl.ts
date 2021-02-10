import {
    ReferenceRow,
    Section,
} from "../../../../../../bin"
import {
    BASICS_NOT_SMuFL_SECTION_ID,
    BASICS_NOT_SMuFL_SECTION_NAME,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION_ID,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION_NAME,
    LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_ID,
    LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_NAME,
} from "./constants"

const BASICS_NOT_SMuFL_SECTION: Section = [
    BASICS_NOT_SMuFL_SECTION_ID,
    BASICS_NOT_SMuFL_SECTION_NAME,
    [
        ["", "ston", "<u>st</u>aff <u>on</u>"],
        ["", "stof", "<u>st</u>aff <u>of</u>f (default)"],
        ["", "trcl", "<u>tr</u>eble <u>cl</u>ef"],
        ["", "bscl", "<u>b</u>a<u>s</u>s <u>cl</u>ef"],
        ["", "alcl", "<u>al</u>to <u>cl</u>ef"],
        ["", "tncl", "<u>t</u>e<u>n</u>or <u>cl</u>ef"],
        ["", "C7", "move to the <u>C7</u> (7th-octave C) position"],
        ["", "...", "..."],
        ["", "D4", "move to the <u>D4</u> position"],
        ["", "C4", "move to the <u>C4</u> (middle C) position"],
        ["", "B3", "move to the <u>B3</u> position"],
        ["", "...", "..."],
        ["", "C1", "move to the <u>C1</u> (1st-octave C) position"],
        ["", "nt1", "<u>n</u>o<u>t</u>e <u>wh</u>ole"],
        ["", "nt2", "<u>n</u>o<u>t</u>e 1/<u>2</u> (with auto stem direction)"],
        ["", "nt4", "<u>n</u>o<u>t</u>e 1/<u>4</u> (with auto stem direction)"],
        ["", "nt8", "<u>n</u>o<u>t</u>e 1/<u>8</u> (with auto stem direction)"],
        ["", "nt16", "<u>n</u>o<u>t</u>e 1/<u>16</u> (with auto stem direction)"],
        ["", "nt32", "<u>n</u>o<u>t</u>e 1/<u>32</u> (with auto stem direction)"],
        ["", "...", "..."],
        ["", "nt1024", "<u>n</u>o<u>t</u>e 1/<u>1024</u> (with auto stem direction)"],
        ["", "acfl", "<u>a</u><u>c</u>cidental <u>f</u><u>l</u>at"],
        ["", "acnt", "<u>a</u><u>c</u>cidental <u>n</u>a<u>t</u>ural"],
        ["", "acsh", "<u>a</u><u>c</u>cidental <u>s</u><u>h</u>arp"],
        ["", ";", "advance (by max symbol width plus spacing)"],
        ["", "en;", "<u>en</u>d-of-staff advance"],
        ["", "nl;", "<u>n</u>ew<u>l</u>ine advance"],
        ["", "1;", "<u>1</u> octal advance"],
        ["", "2;", "<u>2</u> octals advance"],
        ["", "3;", "<u>3</u> octals advance"],
        ["", "...", "..."],
        ["", "24;", "<u>24</u> octals advance"],
        ["", "sp0", "set <u>sp</u>acing <u>0</u> octals"],
        ["", "sp1", "set <u>sp</u>acing <u>1</u> octal"],
        ["", "sp2", "set <u>sp</u>acing <u>2</u> octals (default)"],
        ["", "...", "..."],
        ["", "sp7", "set <u>sp</u>acing <u>7</u> octals"],
    ] as ReferenceRow[],
] as Section

const LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION: Section = [
    LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_ID,
    LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION_NAME,
    [
        ["", "lgln1", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e for <u>1</u> octal wide noteheads"],
        ["", "lgln2", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e for <u>2</u> octal wide noteheads"],
        ["", "lgln3", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e for <u>3</u> octal wide noteheads"],
        ["", "...", "..."],
        ["", "lgln48", "<u>l</u>e<u>g</u>er <u>l</u>i<u>n</u>e for <u>48</u> octal wide noteheads"],
    ] as ReferenceRow[],
]

const COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION: Section = [
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION_ID,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION_NAME,
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
    BASICS_NOT_SMuFL_SECTION,
    COMBINING_STAFF_POSITIONS_SUPPLEMENT_NOT_SMuFL_SECTION,
    LEGER_LINES_SUPPLEMENT_NOT_SMuFL_SECTION,
}
