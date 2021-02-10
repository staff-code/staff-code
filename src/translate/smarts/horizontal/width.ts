// tslint:disable comment-format

import {add, Decimal, floor, isUndefined, RecordKey, round, Unicode, Word} from "@sagittal/general"
import {bravuraEighthOctalWidths, smarts} from "../globals"
import {isCommandifiedStaffUnicode} from "../vertical"
import {Octals} from "./types"

const EXCEPTION_WIDTHS: Record<RecordKey<Unicode>, Octals> = {
    "": 0 as Octals,   // U+EBA0 staff6Lines
    "": 0 as Octals,   // U+EBA1 staff6LinesWide
    "": 0 as Octals,   // U+EBA2 staff6LinesNarrow
    "": 0 as Octals,   // U+E014 staff5Lines
    "": 0 as Octals,   // U+E01A staff5LinesWide
    "": 0 as Octals,   // U+E020 staff5LinesNarrow
    "": 0 as Octals,   // U+E013 staff4Lines
    "": 0 as Octals,   // U+E019 staff4LinesWide
    "": 0 as Octals,   // U+E01F staff4LinesNarrow
    "": 0 as Octals,   // U+E012 staff3Lines
    "": 0 as Octals,   // U+E018 staff3LinesWide
    "": 0 as Octals,   // U+E01E staff3LinesNarrow
    "": 0 as Octals,   // U+E011 staff2Lines
    "": 0 as Octals,   // U+E017 staff2LinesWide
    "": 0 as Octals,   // U+E01D staff2LinesNarrow
    "": 0 as Octals,   // U+1D116 staff1Line
    "": 0 as Octals,   // U+E016 staff1LineWide
    "": 0 as Octals,   // U+E01C staff1LineNarrow
    "": 0 as Octals,   // U+E8F0 chantStaff
    "": 0 as Octals,   // U+E8F1 chantStaffWide
    "": 0 as Octals,   // U+E8F2 chantStaffNarrow
    "": 0 as Octals,   // U+EBA0 luteStaff6Lines
    "": 0 as Octals,   // U+EBA1 luteStaff6LinesWide
    "": 0 as Octals,   // U+EBA2 luteStaff6LinesNarrow
}

const FLOORED_WIDTH_UNICODES: Array<Unicode & Word> = [
    "",    // U+E030 barlineSingle
    "",    // U+E031 barlineDouble
    "",    // U+E032 barlineFinal
    "",    // U+E033 barlineReverseFinal
    "",    // U+E034 barlineHeavy
    "",    // U+E035 barlineHeavyHeavy
    "",    // U+E036 barlineDashed
    "",    // U+E037 barlineDotted
    "",    // U+E038 barlineShort
    "",    // U+E039 barlineTick
    "",    // U+E041 repeatRight
    "",    // U+E04D rightRepeatSmall
    "",    // U+EBA4 luteBarlineEndRepeat
    "",    // U+EBA5 luteBarlineFinal
] as Array<Unicode & Word>

const ASCII_WIDTHS: Record<RecordKey<Unicode>, Octals> = {
    " ": 2,
    "!": 2,
    "\"": 3,
    "#": 5,
    "$": 5,
    "%": 9,
    "&": 9,
    "'": 1,
    "(": 2,
    ")": 2,
    "*": 5,
    "+": 6,
    ",": 2,
    "-": 2,
    ".": 2,
    "/": 2,
    "0": 5,
    "1": 5,
    "2": 5,
    "3": 5,
    "4": 5,
    "5": 5,
    "6": 5,
    "7": 5,
    "8": 5,
    "9": 5,
    ":": 2,
    ";": 2,
    "<": 6,
    "=": 6,
    ">": 6,
    "?": 4,
    "@": 8,
    "A": 8,
    "B": 8,
    "C": 8,
    "D": 8,
    "E": 8,
    "F": 7,
    "G": 8,
    "H": 9,
    "I": 3,
    "J": 5,
    "K": 8,
    "L": 7,
    "M": 11,
    "N": 9,
    "O": 8,
    "P": 7,
    "Q": 8,
    "R": 8,
    "S": 6,
    "T": 7,
    "U": 9,
    "V": 8,
    "W": 11,
    "X": 7,
    "Y": 7,
    "Z": 6,
    "[": 2,
    "\\": 6,
    "]": 2,
    "^": 6,
    "_": 5,
    "`": 1,
    "a": 5,
    "b": 5,
    "c": 4,
    "d": 6,
    "e": 5,
    "f": 2,
    "g": 5,
    "h": 6,
    "i": 2,
    "j": 2,
    "k": 6,
    "l": 2,
    "m": 10,
    "n": 6,
    "o": 5,
    "p": 6,
    "q": 5,
    "r": 4,
    "s": 4,
    "t": 3,
    "u": 6,
    "v": 5,
    "w": 8,
    "x": 5,
    "y": 5,
    "z": 4,
    "{": 2,
    "|": 6,
    "}": 2,
    "~": 6,
} as Record<Unicode, number> as Record<Unicode, Octals>

const computeBravuraOrAsciiOrExceptionUnicodeWidth = (unicode: Unicode & Word): Octals => {
    if (!isUndefined(ASCII_WIDTHS[unicode])) return ASCII_WIDTHS[unicode]
    if (!isUndefined(EXCEPTION_WIDTHS[unicode])) return EXCEPTION_WIDTHS[unicode]

    const eighthOctalWidth = bravuraEighthOctalWidths[unicode]
    if (isUndefined(eighthOctalWidth)) return 0 as Octals

    return FLOORED_WIDTH_UNICODES.includes(unicode) ?
        floor(eighthOctalWidth * 8) as Octals & Decimal<{integer: true}> :
        round(eighthOctalWidth * 8) as Octals
}

const computeUnicodeWidth = (unicode: Unicode & Word, {spacing = true}: {spacing?: boolean} = {}): Octals => {
    const width = computeBravuraOrAsciiOrExceptionUnicodeWidth(unicode)

    return !spacing || isCommandifiedStaffUnicode(unicode) ? width : add(width, smarts.spacing)
}

export {
    computeUnicodeWidth,
}
