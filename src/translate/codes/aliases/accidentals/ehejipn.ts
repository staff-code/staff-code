import {RecordKey, Word} from "@sagittal/general"
import {SMuFL_MAP} from "../../smufl"
import {Code, Unicode} from "../../types"

// See: https://w3c.github.io/smufl/gitbook/tables/extended-helmholtz-ellis-accidentals-just-intonation.html
// All EHEJIPN staffCodes start with a dot (full-stop). Unicodes are successive below.

const EHEJIPN_ACCIDENTAL_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    ".bbv": SMuFL_MAP["accidentalDoubleFlatOneArrowDown"],
    ".bv": SMuFL_MAP["accidentalFlatOneArrowDown"],
    ".nv": SMuFL_MAP["accidentalNaturalOneArrowDown"],
    ".#v": SMuFL_MAP["accidentalSharpOneArrowDown"],
    ".xv": SMuFL_MAP["accidentalDoubleSharpOneArrowDown"],
    ".bb^": SMuFL_MAP["accidentalDoubleFlatOneArrowUp"],
    ".b^": SMuFL_MAP["accidentalFlatOneArrowUp"],
    ".n^": SMuFL_MAP["accidentalNaturalOneArrowUp"],
    ".#^": SMuFL_MAP["accidentalSharpOneArrowUp"],
    ".x^": SMuFL_MAP["accidentalDoubleSharpOneArrowUp"],
    ".bbvv": SMuFL_MAP["accidentalDoubleFlatTwoArrowsDown"],
    ".bvv": SMuFL_MAP["accidentalFlatTwoArrowsDown"],
    ".nvv": SMuFL_MAP["accidentalNaturalTwoArrowsDown"],
    ".#vv": SMuFL_MAP["accidentalSharpTwoArrowsDown"],
    ".xvv": SMuFL_MAP["accidentalDoubleSharpTwoArrowsDown"],
    ".bb^^": SMuFL_MAP["accidentalDoubleFlatTwoArrowsUp"],
    ".b^^": SMuFL_MAP["accidentalFlatTwoArrowsUp"],
    ".n^^": SMuFL_MAP["accidentalNaturalTwoArrowsUp"],
    ".#^^": SMuFL_MAP["accidentalSharpTwoArrowsUp"],
    ".x^^": SMuFL_MAP["accidentalDoubleSharpTwoArrowsUp"],
    ".bbvvv": SMuFL_MAP["accidentalDoubleFlatThreeArrowsDown"],
    ".bvvv": SMuFL_MAP["accidentalFlatThreeArrowsDown"],
    ".nvvv": SMuFL_MAP["accidentalNaturalThreeArrowsDown"],
    ".#vvv": SMuFL_MAP["accidentalSharpThreeArrowsDown"],
    ".xvvv": SMuFL_MAP["accidentalDoubleSharpThreeArrowsDown"],
    ".bb^^^": SMuFL_MAP["accidentalDoubleFlatThreeArrowsUp"],
    ".b^^^": SMuFL_MAP["accidentalFlatThreeArrowsUp"],
    ".n^^^": SMuFL_MAP["accidentalNaturalThreeArrowsUp"],
    ".#^^^": SMuFL_MAP["accidentalSharpThreeArrowsUp"],
    ".x^^^": SMuFL_MAP["accidentalDoubleSharpThreeArrowsUp"],
    ".L": SMuFL_MAP["accidentalLowerOneSeptimalComma"],
    ".P": SMuFL_MAP["accidentalRaiseOneSeptimalComma"],
    ".LL": SMuFL_MAP["accidentalLowerTwoSeptimalCommas"],
    ".PP": SMuFL_MAP["accidentalRaiseTwoSeptimalCommas"],
    ".d": SMuFL_MAP["accidentalLowerOneUndecimalQuartertone"],
    ".t": SMuFL_MAP["accidentalRaiseOneUndecimalQuartertone"],
    ".dd": SMuFL_MAP["accidentalLowerOneTridecimalQuartertone"],
    ".tt": SMuFL_MAP["accidentalRaiseOneTridecimalQuartertone"],
    ".\\\\": SMuFL_MAP["accidentalCombiningLower17Schisma"],
    ".//": SMuFL_MAP["accidentalCombiningRaise17Schisma"],
    ".\\": SMuFL_MAP["accidentalCombiningLower19Schisma"],
    "./": SMuFL_MAP["accidentalCombiningRaise19Schisma"],
    ".\\|/": SMuFL_MAP["accidentalCombiningLower23Limit29LimitComma"],
    "./|\\": SMuFL_MAP["accidentalCombiningRaise23Limit29LimitComma"],
    ".<|": SMuFL_MAP["accidentalCombiningLower31Schisma"],
    ".|>": SMuFL_MAP["accidentalCombiningRaise31Schisma"],
    ".{": SMuFL_MAP["accidentalCombiningOpenCurlyBrace"],
    ".}": SMuFL_MAP["accidentalCombiningCloseCurlyBrace"],
    ".bbt": SMuFL_MAP["accidentalDoubleFlatEqualTempered"],
    ".bt": SMuFL_MAP["accidentalFlatEqualTempered"],
    ".nt": SMuFL_MAP["accidentalNaturalEqualTempered"],
    ".#t": SMuFL_MAP["accidentalSharpEqualTempered"],
    ".xt": SMuFL_MAP["accidentalDoubleSharpEqualTempered"],
    ".dt": SMuFL_MAP["accidentalQuarterFlatEqualTempered"],
    ".+t": SMuFL_MAP["accidentalQuarterSharpEqualTempered"],
    ".\\\\\\": SMuFL_MAP["accidentalCombiningLower53LimitComma"],
    ".///": SMuFL_MAP["accidentalCombiningRaise53LimitComma"],
    ".~": SMuFL_MAP["accidentalEnharmonicTilde"],
    ".~~": SMuFL_MAP["accidentalEnharmonicAlmostEqualTo"],
    ".=": SMuFL_MAP["accidentalEnharmonicEquals"],
    ".\\||/": SMuFL_MAP["accidentalCombiningLower29LimitComma"],
    "./||\\": SMuFL_MAP["accidentalCombiningRaise29LimitComma"],
    ".s|": SMuFL_MAP["accidentalCombiningLower37Quartertone"],
    ".z|": SMuFL_MAP["accidentalCombiningRaise37Quartertone"],
    ".-": SMuFL_MAP["accidentalCombiningLower41Comma"],
    ".+": SMuFL_MAP["accidentalCombiningRaise41Comma"],
    ".^": SMuFL_MAP["accidentalCombiningLower43Comma"],
    ".v": SMuFL_MAP["accidentalCombiningRaise43Comma"],
    ".JJ": SMuFL_MAP["accidentalCombiningLower47Quartertone"],
    ".77": SMuFL_MAP["accidentalCombiningRaise47Quartertone"],

    // For convenience of EHEJIPN users, conventional accidentals with dots at the start of their codes
    // See: https://w3c.github.io/smufl/gitbook/tables/standard-accidentals-12-edo.html
    ".bb": SMuFL_MAP["accidentalDoubleFlat"],
    ".b": SMuFL_MAP["accidentalFlat"],
    ".n": SMuFL_MAP["accidentalNatural"],
    ".#": SMuFL_MAP["accidentalSharp"],
    ".x": SMuFL_MAP["accidentalDoubleSharp"], // *
    ".<b": SMuFL_MAP["accidentalThreeQuarterTonesFlatZimmermann"], // **
    ".>#": SMuFL_MAP["accidentalThreeQuarterTonesSharpStein"],
} as Record<Code & Word, Unicode & Word>

// * Not the same as "x", the (Sagittal-compatible) large double-sharp.
// ** Not the same as "<b", the (Sagittal-compatible) sesquiflat.

export {
    EHEJIPN_ACCIDENTAL_ALIASES_MAP,
}
