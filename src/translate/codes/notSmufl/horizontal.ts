import {RecordKey, Word} from "@sagittal/general"
import {Code, Unicode} from "../types"

const NOT_SMuFL_LINE_BREAKS_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+000A*/"lnfd": "\n",
} as Record<Code & Word, Unicode & Word>

/*U+200A*/const ADVANCE_1_OCTAL = " "       //  HAIR SPACE
/*U+2006*/const ADVANCE_3_OCTALS = " "      //  SIX-PER-EM SPACE
/*U+2009*/const ADVANCE_5_OCTALS = " "      //  THIN SPACE
/*U+205F*/const ADVANCE_7_OCTALS = " "      //  MEDIUM MATHEMATICAL SPACE [MMSP]
/*U+2005*/const ADVANCE_9_OCTALS = " "      //  FOUR-PER-EM SPACE {mid space}
/*U+2008*/const ADVANCE_10_OCTALS = " "     //  PUNCTUATION SPACE
/*U+2004*/const ADVANCE_11_OCTALS = " "     //  THREE-PER-EM SPACE {thick space}
/*U+2000*/const ADVANCE_12_OCTALS = " "     //  EN QUAD
/*U+2002*/const ADVANCE_13_OCTALS = " "     //  EN SPACE {nut}
/*U+2001*/const ADVANCE_14_OCTALS = " "     //  EM QUAD {mutton quad}
/*U+2003*/const ADVANCE_15_OCTALS = " "     //  EM SPACE {mutton}
/*U+3000*/const ADVANCE_16_OCTALS = "　"     //  IDEOGRAPHIC SPACE

const NOT_SMuFL_MANUAL_ADVANCE_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "1;": ADVANCE_1_OCTAL,
    "2;": ADVANCE_1_OCTAL + ADVANCE_1_OCTAL,
    "3;": ADVANCE_3_OCTALS,
    "4;": ADVANCE_1_OCTAL + ADVANCE_3_OCTALS,
    "5;": ADVANCE_5_OCTALS,
    "6;": ADVANCE_3_OCTALS + ADVANCE_3_OCTALS,
    "7;": ADVANCE_7_OCTALS,
    "8;": ADVANCE_3_OCTALS + ADVANCE_5_OCTALS,
    "9;": ADVANCE_9_OCTALS,
    "10;": ADVANCE_10_OCTALS,
    "11;": ADVANCE_11_OCTALS,
    "12;": ADVANCE_12_OCTALS,
    "13;": ADVANCE_13_OCTALS,
    "14;": ADVANCE_14_OCTALS,
    "15;": ADVANCE_15_OCTALS,
    "16;": ADVANCE_16_OCTALS,
    "17;": ADVANCE_7_OCTALS + ADVANCE_10_OCTALS,
    "18;": ADVANCE_9_OCTALS + ADVANCE_9_OCTALS,
    "19;": ADVANCE_9_OCTALS + ADVANCE_10_OCTALS,
    "20;": ADVANCE_10_OCTALS + ADVANCE_10_OCTALS,
    "21;": ADVANCE_10_OCTALS + ADVANCE_11_OCTALS,
    "22;": ADVANCE_11_OCTALS + ADVANCE_11_OCTALS,
    "23;": ADVANCE_11_OCTALS + ADVANCE_12_OCTALS,
    "24;": ADVANCE_12_OCTALS + ADVANCE_12_OCTALS,
    "25;": ADVANCE_12_OCTALS + ADVANCE_13_OCTALS,
    "26;": ADVANCE_13_OCTALS + ADVANCE_13_OCTALS,
    "27;": ADVANCE_13_OCTALS + ADVANCE_14_OCTALS,
    "28;": ADVANCE_14_OCTALS + ADVANCE_14_OCTALS,
    "29;": ADVANCE_14_OCTALS + ADVANCE_15_OCTALS,
    "30;": ADVANCE_15_OCTALS + ADVANCE_15_OCTALS,
    "31;": ADVANCE_15_OCTALS + ADVANCE_16_OCTALS,
    "32;": ADVANCE_16_OCTALS + ADVANCE_16_OCTALS,
    "33;": ADVANCE_11_OCTALS + ADVANCE_11_OCTALS + ADVANCE_11_OCTALS,
    "34;": ADVANCE_11_OCTALS + ADVANCE_11_OCTALS + ADVANCE_12_OCTALS,
    "35;": ADVANCE_11_OCTALS + ADVANCE_12_OCTALS + ADVANCE_12_OCTALS,
    "36;": ADVANCE_12_OCTALS + ADVANCE_12_OCTALS + ADVANCE_12_OCTALS,
    "37;": ADVANCE_12_OCTALS + ADVANCE_12_OCTALS + ADVANCE_13_OCTALS,
    "38;": ADVANCE_12_OCTALS + ADVANCE_13_OCTALS + ADVANCE_13_OCTALS,
    "39;": ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_13_OCTALS,
    "40;": ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_14_OCTALS,
    "41;": ADVANCE_13_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS,
    "42;": ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS,
    "43;": ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_15_OCTALS,
    "44;": ADVANCE_14_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS,
    "45;": ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS,
    "46;": ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_16_OCTALS,
    "47;": ADVANCE_15_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS,
    "48;": ADVANCE_16_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS,
    "49;": ADVANCE_12_OCTALS + ADVANCE_12_OCTALS + ADVANCE_12_OCTALS + ADVANCE_13_OCTALS,
    "50;": ADVANCE_12_OCTALS + ADVANCE_12_OCTALS + ADVANCE_13_OCTALS + ADVANCE_13_OCTALS,
    "51;": ADVANCE_12_OCTALS + ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_13_OCTALS,
    "52;": ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_13_OCTALS,
    "53;": ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_14_OCTALS,
    "54;": ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS,
    "55;": ADVANCE_13_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS,
    "56;": ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS,
    "57;": ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_15_OCTALS,
    "58;": ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS,
    "59;": ADVANCE_14_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS,
    "60;": ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS,
    "61;": ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_16_OCTALS,
    "62;": ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS,
    "63;": ADVANCE_15_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS,
    "64;": ADVANCE_16_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS,
    "65;": ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_13_OCTALS,
    "66;": ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_14_OCTALS,
    "67;": ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS,
    "68;": ADVANCE_13_OCTALS + ADVANCE_13_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS,
    "69;": ADVANCE_13_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS,
    "70;": ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS,
    "71;": ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_15_OCTALS,
    "72;": ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS,
    "73;": ADVANCE_14_OCTALS + ADVANCE_14_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS,
    "74;": ADVANCE_14_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS,
    "75;": ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS,
    "76;": ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_16_OCTALS,
    "77;": ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS,
    "78;": ADVANCE_15_OCTALS + ADVANCE_15_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS,
    "79;": ADVANCE_15_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS,
    "80;": ADVANCE_16_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS + ADVANCE_16_OCTALS,
} as Record<Code & Word, Unicode & Word>


export {
    NOT_SMuFL_LINE_BREAKS_MAP,
    NOT_SMuFL_MANUAL_ADVANCE_MAP,
    ADVANCE_1_OCTAL,
    ADVANCE_3_OCTALS,
    ADVANCE_5_OCTALS,
    ADVANCE_7_OCTALS,
    ADVANCE_9_OCTALS,
    ADVANCE_10_OCTALS,
    ADVANCE_11_OCTALS,
    ADVANCE_12_OCTALS,
    ADVANCE_13_OCTALS,
    ADVANCE_14_OCTALS,
    ADVANCE_15_OCTALS,
    ADVANCE_16_OCTALS,
}
