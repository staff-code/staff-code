import {RecordKey, Word} from "@sagittal/general"
import {Code, Unicode} from "../types"

const NOT_SMuFL_OTHER_WHITESPACE_AND_BREAKS: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+0009*/"chtb": "	",
    /*U+000A*/"lnfd": "\n",
    /*U+000B*/"lntb": "",
    /*U+000C*/"frfd": "",
    /*U+000D*/"crrt": "\u000d",
    /*U+0020*/"sp": " ",
    /*U+0085*/"nxln": "",
    /*U+00A0*/"nobrsp": " ",
    /*U+1680*/"ogspmr": " ",
    /*U+2028*/"lnsp": "\u2028", /*   */
    /*U+2029*/"prsp": "\u2029", /*   */
    /*U+202F*/"nrnobrsp": " ",
    /*U+205F*/"mdmtsp": " ",
} as Record<Code & Word, Unicode & Word>

const NOT_SMuFL_SMART_STAVE_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+E40C*/"ston": "",
    /*U+E40D*/"stof": "",
} as Record<Code & Word, Unicode & Word>

const NOT_SMuFL_SMART_SPACING_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+F3D0*/"sp0": "",
    /*U+F3D1*/"sp1": "",
    /*U+F3D2*/"sp2": "",
    /*U+F3D3*/"sp3": "",
    /*U+F3D4*/"sp4": "",
    /*U+F3D5*/"sp5": "",
    /*U+F3D6*/"sp6": "",
    /*U+F3D7*/"sp7": "",
} as Record<Code & Word, Unicode & Word>

const NOT_SMuFL_MANUAL_ADVANCE_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+200A              */"1;": " ",
    /*U+2009              */"2;": " ",
    /*U+2009 U+200A       */"3;": "  ",
    /*U+2005              */"4;": " ",
    /*U+2005 U+200A       */"5;": "  ",
    /*U+2004              */"6;": " ",
    /*U+2004 U+200A       */"7;": "  ",
    /*U+2002              */"8;": " ",
    /*U+2002 U+200A       */"9;": "  ",
    /*U+2008              */"10;": " ",
    /*U+2008 U+200A       */"11;": "  ",
    /*U+3000              */"12;": "　",
    /*U+3000 U+200A       */"13;": "　 ",
    /*U+3000 U+2009       */"14;": "　 ", // *
    /*U+3000 U+2009 U+200A*/"15;": "　  ", // *
    /*U+2003              */"16;": " ",
    /*U+2003 U+200A       */"17;": "  ",
    /*U+2003 U+2009       */"18;": "  ",
    /*U+2003 U+2009 U+200A*/"19;": "   ",
    /*U+2003 U+2005       */"20;": "  ",
    /*U+2003 U+2005 U+200A*/"21;": "   ",
    /*U+2003 U+2004       */"22;": "  ",
    /*U+2003 U+2004 U+200A*/"23;": "   ",
    /*U+2003 U+2002       */"24;": "  ",
} as Record<Code & Word, Unicode & Word>

// * U+2001 EM QUAD, our desired "14;", is not in the font yet. Once it is, these should be replaced.

const NOT_SMuFL_SMART_ADVANCE_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+F3EC*/";": "",
    /*U+F3ED*/ "en;": "",
    /*U+F3EE*/ "rt;": "",
    /*U+F3EF*/ "cn;": "",
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMuFL_OTHER_WHITESPACE_AND_BREAKS,
    NOT_SMuFL_SMART_STAVE_MAP,
    NOT_SMuFL_SMART_SPACING_MAP,
    NOT_SMuFL_MANUAL_ADVANCE_MAP,
    NOT_SMuFL_SMART_ADVANCE_MAP,
}
