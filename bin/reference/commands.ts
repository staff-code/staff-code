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
        ["", "ston", "<u>st</u>aff <u>on</u>"],
        ["", "stof", "<u>st</u>aff <u>of</u>f (default)"],
        ["", "C1", "move to the <u>C1</u> (1st-octave C) position"],
        ["", "", "..."],
        ["", "B3", "move to the <u>B3</u> position"],
        ["", "C4", "move to the <u>C4</u> (middle C) position"],
        ["", "D4", "move to the <u>D4</u> position"],
        ["", "", "..."],
        ["", "C7", "move to the <u>C7</u> (7th-octave C) position"],
        ["", "nt2", "<u>n</u>o<u>t</u>e 1/<u>2</u> (with auto stem direction)"],
        ["", "nt4", "<u>n</u>o<u>t</u>e 1/<u>4</u> (with auto stem direction)"],
        ["", "nt8", "<u>n</u>o<u>t</u>e 1/<u>8</u> (with auto stem direction)"],
        ["", "nt16", "<u>n</u>o<u>t</u>e 1/<u>16</u> (with auto stem direction)"],
        ["", "nt32", "<u>n</u>o<u>t</u>e 1/<u>32</u> (with auto stem direction)"],
        ["", "", "..."],
        ["", "nt1024", "<u>n</u>o<u>t</u>e 1/<u>1024</u> (with auto stem direction)"],
        ["", "sp0", "set <u>sp</u>acing <u>0</u> octals"],
        ["", "sp1", "set <u>sp</u>acing <u>1</u> octal"],
        ["", "sp2", "set <u>sp</u>acing <u>2</u> octals (default)"],
        ["", "", "..."],
        ["", "sp7", "set <u>sp</u>acing <u>7</u> octals"],
        ["", ";", "advance (by max symbol width plus spacing)"],
        ["", "en;", "<u>en</u>d-of-staff advance"],
        ["", "br;", "line <u>br</u>eak advance"],
        ["", "1;", "<u>1</u> octal advance"],
        ["", "2;", "<u>2</u> octals advance"],
        ["", "3;", "<u>3</u> octals advance"],
        ["", "", "..."],
        ["", "24;", "<u>24</u> octals advance"],
    ] as ReferenceRow[],
] as Section

export {
    COMMANDS_SECTION,
}
