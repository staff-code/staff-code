import {RecordKey, Word} from "@sagittal/general"
import {Code, Unicode} from "../../types"

const NOT_SMuFL_SMART_STAVE_NONSYMBOL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+E40C*/"ston": "",
    /*U+E40D*/"stof": "",
} as Record<Code & Word, Unicode & Word>

const NOT_SMuFL_SMART_SPACING_NONSYMBOL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+F3D0*/"sp0": "",
    /*U+F3D1*/"sp1": "",
    /*U+F3D2*/"sp2": "",
    /*U+F3D3*/"sp3": "",
    /*U+F3D4*/"sp4": "",
    /*U+F3D5*/"sp5": "",
    /*U+F3D6*/"sp6": "",
    /*U+F3D7*/"sp7": "",
} as Record<Code & Word, Unicode & Word>

const NOT_SMuFL_SMART_ADVANCE_NONSYMBOL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+F3EC*/";": "",
    /*U+F3ED*/"en;": "",
    /*U+F3EE*/"rt;": "",
    /*U+F3EF*/"cn;": "",
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMuFL_SMART_SPACING_NONSYMBOL_MAP,
    NOT_SMuFL_SMART_STAVE_NONSYMBOL_MAP,
    NOT_SMuFL_SMART_ADVANCE_NONSYMBOL_MAP,
}
