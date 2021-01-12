import {Id, Name} from "@sagittal/general"
import {INTRODUCTION_TO_STAFF_CODE_LINK} from "./constants"
import {NOT_SMUFL} from "./parentheticals"
import {Explanation, ReferenceRow, Section} from "./types"

const COMMANDS_SECTION = [
    "commands" as Id<Section>,
    "StaffCode commands" as Name<Section>,
    NOT_SMUFL,
    INTRODUCTION_TO_STAFF_CODE_LINK,
    `"Auto stem direction" means stem down for middle line and above, otherwise stem up.` as Explanation,
    [
        ["", "ston", "<b>st</b>aff <b>on</b>"],
        ["", "stof", "<b>st</b>aff <b>of</b>f (default)"],
        ["", "C1", "move to the <b>C1</b> (1st-octave C) position"],
        ["", "", "..."],
        ["", "B3", "move to the <b>B3</b> position"],
        ["", "C4", "move to the <b>C4</b> (middle C) position"],
        ["", "D4", "move to the <b>D4</b> position"],
        ["", "", "..."],
        ["", "C7", "move to the <b>C7</b> (7th-octave C) position"],
        ["", "nt2", "<b>n</b>o<b>t</b>e 1/<b>2</b> (with auto stem direction)"],
        ["", "nt4", "<b>n</b>o<b>t</b>e 1/<b>4</b> (with auto stem direction)"],
        ["", "nt8", "<b>n</b>o<b>t</b>e 1/<b>8</b> (with auto stem direction)"],
        ["", "nt16", "<b>n</b>o<b>t</b>e 1/<b>16</b> (with auto stem direction)"],
        ["", "nt32", "<b>n</b>o<b>t</b>e 1/<b>32</b> (with auto stem direction)"],
        ["", "", "..."],
        ["", "nt1024", "<b>n</b>o<b>t</b>e 1/<b>1024</b> (with auto stem direction)"],
        ["", "sp0", "set <b>sp</b>acing <b>0</b> octals"],
        ["", "sp1", "set <b>sp</b>acing <b>1</b> octal"],
        ["", "sp2", "set <b>sp</b>acing <b>2</b> octals (default)"],
        ["", "", "..."],
        ["", "sp7", "set <b>sp</b>acing <b>7</b> octals"],
        ["", ";", "advance (by max symbol width plus spacing)"],
        ["", "en;", "<b>en</b>d-of-staff advance"],
        ["", "br;", "line <b>br</b>eak advance"],
        ["", "1;", "<b>1</b> octal advance"],
        ["", "2;", "<b>2</b> octals advance"],
        ["", "3;", "<b>3</b> octals advance"],
        ["", "", "..."],
        ["", "24;", "<b>24</b> octals advance"],
    ] as ReferenceRow[],
] as Section

export {
    COMMANDS_SECTION,
}
