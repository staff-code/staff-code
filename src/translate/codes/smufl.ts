// tslint:disable

import {RecordKey, Word} from "@sagittal/general"
import {Code, Unicode} from "./types"

const SMuFL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*  */"brace": "\uE000",   // Brace
    /*  */"reversedBrace": "\uE001", // Reversed brace
    /*  */"bracket": "\uE002",   // Bracket
    /*  */"bracketTop": "\uE003", // Bracket top
    /*  */"bracketBottom": "\uE004", // Bracket bottom
    /*  */"reversedBracketTop": "\uE005",   // Reversed bracket top
    /*  */"reversedBracketBottom": "\uE006",   // Reversed bracket bottom
    /*  */"systemDivider": "\uE007", // System divider
    /*  */"systemDividerLong": "\uE008",   // Long system divider
    /*  */"systemDividerExtraLong": "\uE009", // Extra long system divider
    /*  */"splitBarDivider": "\uE00A",   // Split bar divider (bar spans a system break)
    /*  */"staffDivideArrowDown": "\uE00B", // Staff divide arrow down
    /*  */"staffDivideArrowUp": "\uE00C", // Staff divide arrow up
    /*  */"staffDivideArrowUpDown": "\uE00D",   // Staff divide arrows
    /*  */"staff1Line": "\uE010",    // 1-line staff
    /*  */"staff2Lines": "\uE011",    // 2-line staff
    /*  */"staff3Lines": "\uE012",    // 3-line staff
    /*  */"staff4Lines": "\uE013",    // 4-line staff
    /*  */"staff5Lines": "\uE014",  // 5-line staff
    /*  */"staff6Lines": "\uE015",    // 6-line staff
    /*  */"staff1LineWide": "\uE016",  // 1-line staff (wide)
    /*  */"staff2LinesWide": "\uE017",  // 2-line staff (wide)
    /*  */"staff3LinesWide": "\uE018",  // 3-line staff (wide)
    /*  */"staff4LinesWide": "\uE019",  // 4-line staff (wide)
    /*  */"staff5LinesWide": "\uE01A",    // 5-line staff (wide)
    /*  */"staff6LinesWide": "\uE01B",  // 6-line staff (wide)
    /*  */"staff1LineNarrow": "\uE01C",  // 1-line staff (narrow)
    /*  */"staff2LinesNarrow": "\uE01D",  // 2-line staff (narrow)
    /*  */"staff3LinesNarrow": "\uE01E",  // 3-line staff (narrow)
    /*  */"staff4LinesNarrow": "\uE01F",  // 4-line staff (narrow)
    /*  */"staff5LinesNarrow": "\uE020",    // 5-line staff (narrow)
    /*  */"staff6LinesNarrow": "\uE021",  // 6-line staff (narrow)
    /*  */"legerLine": "\uE022",  // Leger line
    /*  */"legerLineWide": "\uE023",   // Leger line (wide)
    /*  */"legerLineNarrow": "\uE024",   // Leger line (narrow)
    /*  */"barlineSingle": "\uE030",   // Single barline
    /*  */"barlineDouble": "\uE031",   // Double barline
    /*  */"barlineFinal": "\uE032", // Final barline
    /*  */"barlineReverseFinal": "\uE033",   // Reverse final barline
    /*  */"barlineHeavy": "\uE034", // Heavy barline
    /*  */"barlineHeavyHeavy": "\uE035",   // Heavy double barline
    /*  */"barlineDashed": "\uE036", // Dashed barline
    /*  */"barlineDotted": "\uE037", // Dotted barline
    /*  */"barlineShort": "\uE038", // Short barline
    /*  */"barlineTick": "\uE039", // Tick barline
    /*  */"repeatLeft": "\uE040", // Left (start) repeat sign
    /*  */"repeatRight": "\uE041", // Right (end) repeat sign
    /*  */"repeatRightLeft": "\uE042",   // Right and left repeat sign
    /*  */"repeatDots": "\uE043", // Repeat dots
    /*  */"repeatDot": "\uE044", // Single repeat dot
    /*  */"dalSegno": "\uE045", // Dal segno
    /*  */"daCapo": "\uE046", // Da capo
    /*  */"segno": "\uE047",   // Segno
    /*  */"coda": "\uE048",   // Coda
    /*  */"codaSquare": "\uE049", // Square coda
    /*  */"segnoSerpent1": "\uE04A",    // Segno (serpent)
    /*  */"segnoSerpent2": "\uE04B",    // Segno (serpent with vertical lines)
    /*  */"leftRepeatSmall": "\uE04C",   // Left repeat sign within bar
    /*  */"rightRepeatSmall": "\uE04D",   // Right repeat sign within bar
    /*  */"gClef": "\uE050",   // G clef
    /*  */"gClef15mb": "\uE051",  // G clef quindicesima bassa
    /*  */"gClef8vb": "\uE052",   // G clef ottava bassa
    /*  */"gClef8va": "\uE053",   // G clef ottava alta
    /*  */"gClef15ma": "\uE054",  // G clef quindicesima alta
    /*  */"gClef8vbOld": "\uE055", // G clef ottava bassa (old style)
    /*  */"gClef8vbCClef": "\uE056",    // G clef ottava bassa with C clef
    /*  */"gClef8vbParens": "\uE057", // G clef, optionally ottava bassa
    /*  */"gClefLigatedNumberBelow": "\uE058",    // Combining G clef, number below
    /*  */"gClefLigatedNumberAbove": "\uE059",    // Combining G clef, number above
    /*  */"gClefArrowUp": "\uE05A",  // G clef, arrow up
    /*  */"gClefArrowDown": "\uE05B",  // G clef, arrow down
    /*  */"cClef": "\uE05C",   // C clef
    /*  */"cClef8vb": "\uE05D",   // C clef ottava bassa
    /*  */"cClefArrowUp": "\uE05E",  // C clef, arrow up
    /*  */"cClefArrowDown": "\uE05F",  // C clef, arrow down
    /*  */"cClefSquare": "\uE060",    // C clef (19th century)
    /*  */"cClefCombining": "\uE061",    // Combining C clef
    /*  */"fClef": "\uE062",   // F clef
    /*  */"fClef15mb": "\uE063",  // F clef quindicesima bassa
    /*  */"fClef8vb": "\uE064",   // F clef ottava bassa
    /*  */"fClef8va": "\uE065",   // F clef ottava alta
    /*  */"fClef15ma": "\uE066",  // F clef quindicesima alta
    /*  */"fClefArrowUp": "\uE067",  // F clef, arrow up
    /*  */"fClefArrowDown": "\uE068",  // F clef, arrow down
    /*  */"unpitchedPercussionClef1": "\uE069",  // Unpitched percussion clef 1
    /*  */"unpitchedPercussionClef2": "\uE06A",  // Unpitched percussion clef 2
    /*  */"semipitchedPercussionClef1": "\uE06B",  // Semi-pitched percussion clef 1
    /*  */"semipitchedPercussionClef2": "\uE06C",  // Semi-pitched percussion clef 2
    /*  */"6stringTabClef": "\uE06D",  // 6-string tab clef
    /*  */"4stringTabClef": "\uE06E",  // 4-string tab clef
    /*  */"schaefferClef": "\uE06F", // Schäffer clef
    /*  */"schaefferPreviousClef": "\uE070",   // Schäffer previous clef
    /*  */"schaefferGClefToFClef": "\uE071",   // Schäffer G clef to F clef change
    /*  */"schaefferFClefToGClef": "\uE072",   // Schäffer F clef to G clef change
    /*  */"gClefReversed": "\uE073",    // Reversed G clef
    /*  */"gClefTurned": "\uE074",    // Turned G clef
    /*  */"cClefReversed": "\uE075",    // Reversed C clef
    /*  */"fClefReversed": "\uE076",    // Reversed F clef
    /*  */"fClefTurned": "\uE077",    // Turned F clef
    /*  */"bridgeClef": "\uE078", // Bridge clef
    /*  */"accdnDiatonicClef": "\uE079",   // Diatonic accordion clef
    /*  */"gClefChange": "\uE07A",    // G clef change
    /*  */"cClefChange": "\uE07B",    // C clef change
    /*  */"fClefChange": "\uE07C",    // F clef change
    /*  */"clef8": "\uE07D",  // 8 for clefs
    /*  */"clef15": "\uE07E", // 15 for clefs
    /*  */"clefChangeCombining": "\uE07F",   // Combining clef change
    /*  */"timeSig0": "\uE080", // Time signature 0
    /*  */"timeSig1": "\uE081", // Time signature 1
    /*  */"timeSig2": "\uE082", // Time signature 2
    /*  */"timeSig3": "\uE083", // Time signature 3
    /*  */"timeSig4": "\uE084", // Time signature 4
    /*  */"timeSig5": "\uE085", // Time signature 5
    /*  */"timeSig6": "\uE086", // Time signature 6
    /*  */"timeSig7": "\uE087", // Time signature 7
    /*  */"timeSig8": "\uE088", // Time signature 8
    /*  */"timeSig9": "\uE089", // Time signature 9
    /*  */"timeSigCommon": "\uE08A",    // Common time
    /*  */"timeSigCutCommon": "\uE08B", // Cut time
    /*  */"timeSigPlus": "\uE08C",   // Time signature +
    /*  */"timeSigPlusSmall": "\uE08D", // Time signature + (for numerators)
    /*  */"timeSigFractionalSlash": "\uE08E", // Time signature fraction slash
    /*  */"timeSigEquals": "\uE08F",   // Time signature equals
    /*  */"timeSigMinus": "\uE090",   // Time signature minus
    /*  */"timeSigMultiply": "\uE091",   // Time signature multiply
    /*  */"timeSigParensLeftSmall": "\uE092",   // Left parenthesis for numerator only
    /*  */"timeSigParensRightSmall": "\uE093",   // Right parenthesis for numerator only
    /*  */"timeSigParensLeft": "\uE094", // Left parenthesis for whole time signature
    /*  */"timeSigParensRight": "\uE095", // Right parenthesis for whole time signature
    /*  */"timeSigComma": "\uE096",   // Time signature comma
    /*  */"timeSigFractionQuarter": "\uE097", // Time signature fraction ¼
    /*  */"timeSigFractionHalf": "\uE098", // Time signature fraction ½
    /*  */"timeSigFractionThreeQuarters": "\uE099",   // Time signature fraction ¾
    /*  */"timeSigFractionOneThird": "\uE09A",   // Time signature fraction ⅓
    /*  */"timeSigFractionTwoThirds": "\uE09B",   // Time signature fraction ⅔
    /*  */"timeSigX": "\uE09C",    // Open time signature
    /*  */"timeSigOpenPenderecki": "\uE09D", // Open time signature (Penderecki)
    /*  */"timeSigCombNumerator": "\uE09E",   // Control character for numerator digit
    /*  */"timeSigCombDenominator": "\uE09F",   // Control character for denominator digit
    /*  */"noteheadDoubleWhole": "\uE0A0",   // Double whole (breve) notehead
    /*  */"noteheadDoubleWholeSquare": "\uE0A1", // Double whole (breve) notehead (square)
    /*  */"noteheadWhole": "\uE0A2", // Whole (semibreve) notehead
    /*  */"noteheadHalf": "\uE0A3", // Half (minim) notehead
    /*  */"noteheadBlack": "\uE0A4", // Black notehead
    /*  */"noteheadNull": "\uE0A5", // Null notehead
    /*  */"noteheadXDoubleWhole": "\uE0A6",  // X notehead double whole
    /*  */"noteheadXWhole": "\uE0A7",    // X notehead whole
    /*  */"noteheadXHalf": "\uE0A8",    // X notehead half
    /*  */"noteheadXBlack": "\uE0A9",    // X notehead black
    /*  */"noteheadXOrnate": "\uE0AA",    // Ornate X notehead
    /*  */"noteheadXOrnateEllipse": "\uE0AB",  // Ornate X notehead in ellipse
    /*  */"noteheadPlusDoubleWhole": "\uE0AC", // Plus notehead double whole
    /*  */"noteheadPlusWhole": "\uE0AD",   // Plus notehead whole
    /*  */"noteheadPlusHalf": "\uE0AE",   // Plus notehead half
    /*  */"noteheadPlusBlack": "\uE0AF",   // Plus notehead black
    /*  */"noteheadCircleXDoubleWhole": "\uE0B0",    // Circle X double whole
    /*  */"noteheadCircleXWhole": "\uE0B1",  // Circle X whole
    /*  */"noteheadCircleXHalf": "\uE0B2",  // Circle X half
    /*  */"noteheadCircleX": "\uE0B3",    // Circle X notehead
    /*  */"noteheadDoubleWholeWithX": "\uE0B4",    // Double whole notehead with X
    /*  */"noteheadWholeWithX": "\uE0B5",  // Whole notehead with X
    /*  */"noteheadHalfWithX": "\uE0B6",  // Half notehead with X
    /*  */"noteheadVoidWithX": "\uE0B7",  // Void notehead with X
    /*  */"noteheadSquareWhite": "\uE0B8",   // Square notehead white
    /*  */"noteheadSquareBlack": "\uE0B9",   // Square notehead black
    /*  */"noteheadTriangleUpDoubleWhole": "\uE0BA",   // Triangle notehead up double whole
    /*  */"noteheadTriangleUpWhole": "\uE0BB", // Triangle notehead up whole
    /*  */"noteheadTriangleUpHalf": "\uE0BC", // Triangle notehead up half
    /*  */"noteheadTriangleUpWhite": "\uE0BD", // Triangle notehead up white
    /*  */"noteheadTriangleUpBlack": "\uE0BE", // Triangle notehead up black
    /*  */"noteheadTriangleLeftWhite": "\uE0BF", // Triangle notehead left white
    /*  */"noteheadTriangleLeftBlack": "\uE0C0", // Triangle notehead left black
    /*  */"noteheadTriangleRightWhite": "\uE0C1", // Triangle notehead right white
    /*  */"noteheadTriangleRightBlack": "\uE0C2", // Triangle notehead right black
    /*  */"noteheadTriangleDownDoubleWhole": "\uE0C3",   // Triangle notehead down double whole
    /*  */"noteheadTriangleDownWhole": "\uE0C4", // Triangle notehead down whole
    /*  */"noteheadTriangleDownHalf": "\uE0C5", // Triangle notehead down half
    /*  */"noteheadTriangleDownWhite": "\uE0C6", // Triangle notehead down white
    /*  */"noteheadTriangleDownBlack": "\uE0C7", // Triangle notehead down black
    /*  */"noteheadTriangleUpRightWhite": "\uE0C8",   // Triangle notehead up right white
    /*  */"noteheadTriangleUpRightBlack": "\uE0C9",   // Triangle notehead up right black
    /*  */"noteheadMoonWhite": "\uE0CA",   // Moon notehead white
    /*  */"noteheadMoonBlack": "\uE0CB",   // Moon notehead black
    /*  */"noteheadTriangleRoundDownWhite": "\uE0CC",   // Triangle-round notehead down white
    /*  */"noteheadTriangleRoundDownBlack": "\uE0CD",   // Triangle-round notehead down black
    /*  */"noteheadParenthesis": "\uE0CE", // Parenthesis notehead
    /*  */"noteheadSlashedBlack1": "\uE0CF",  // Slashed black notehead (bottom left to top right)
    /*  */"noteheadSlashedBlack2": "\uE0D0",  // Slashed black notehead (top left to bottom right)
    /*  */"noteheadSlashedHalf1": "\uE0D1",  // Slashed half notehead (bottom left to top right)
    /*  */"noteheadSlashedHalf2": "\uE0D2",  // Slashed half notehead (top left to bottom right)
    /*  */"noteheadSlashedWhole1": "\uE0D3",  // Slashed whole notehead (bottom left to top right)
    /*  */"noteheadSlashedWhole2": "\uE0D4",  // Slashed whole notehead (top left to bottom right)
    /*  */"noteheadSlashedDoubleWhole1": "\uE0D5",    // Slashed double whole notehead (bottom left to top right)
    /*  */"noteheadSlashedDoubleWhole2": "\uE0D6",    // Slashed double whole notehead (top left to bottom right)
    /*  */"noteheadDiamondDoubleWhole": "\uE0D7", // Diamond double whole notehead
    /*  */"noteheadDiamondWhole": "\uE0D8",   // Diamond whole notehead
    /*  */"noteheadDiamondHalf": "\uE0D9",   // Diamond half notehead
    /*  */"noteheadDiamondHalfWide": "\uE0DA", // Diamond half notehead (wide)
    /*  */"noteheadDiamondBlack": "\uE0DB",   // Diamond black notehead
    /*  */"noteheadDiamondBlackWide": "\uE0DC", // Diamond black notehead (wide)
    /*  */"noteheadDiamondWhite": "\uE0DD",   // Diamond white notehead
    /*  */"noteheadDiamondWhiteWide": "\uE0DE", // Diamond white notehead (wide)
    /*  */"noteheadDiamondDoubleWholeOld": "\uE0DF",   // Diamond double whole notehead (old)
    /*  */"noteheadDiamondWholeOld": "\uE0E0", // Diamond whole notehead (old)
    /*  */"noteheadDiamondHalfOld": "\uE0E1", // Diamond half notehead (old)
    /*  */"noteheadDiamondBlackOld": "\uE0E2", // Diamond black notehead (old)
    /*  */"noteheadDiamondHalfFilled": "\uE0E3", // Half-filled diamond notehead
    /*  */"noteheadCircledBlack": "\uE0E4",   // Circled black notehead
    /*  */"noteheadCircledHalf": "\uE0E5",   // Circled half notehead
    /*  */"noteheadCircledWhole": "\uE0E6",   // Circled whole notehead
    /*  */"noteheadCircledDoubleWhole": "\uE0E7", // Circled double whole notehead
    /*  */"noteheadCircledBlackLarge": "\uE0E8", // Black notehead in large circle
    /*  */"noteheadCircledHalfLarge": "\uE0E9", // Half notehead in large circle
    /*  */"noteheadCircledWholeLarge": "\uE0EA", // Whole notehead in large circle
    /*  */"noteheadCircledDoubleWholeLarge": "\uE0EB",   // Double whole notehead in large circle
    /*  */"noteheadCircledXLarge": "\uE0EC",  // Cross notehead in large circle
    /*  */"noteheadLargeArrowUpDoubleWhole": "\uE0ED", // Large arrow up (highest pitch) double whole notehead
    /*  */"noteheadLargeArrowUpWhole": "\uE0EE",   // Large arrow up (highest pitch) whole notehead
    /*  */"noteheadLargeArrowUpHalf": "\uE0EF",   // Large arrow up (highest pitch) half notehead
    /*  */"noteheadLargeArrowUpBlack": "\uE0F0",   // Large arrow up (highest pitch) black notehead
    /*  */"noteheadLargeArrowDownDoubleWhole": "\uE0F1", // Large arrow down (lowest pitch) double whole notehead
    /*  */"noteheadLargeArrowDownWhole": "\uE0F2",   // Large arrow down (lowest pitch) whole notehead
    /*  */"noteheadLargeArrowDownHalf": "\uE0F3",   // Large arrow down (lowest pitch) half notehead
    /*  */"noteheadLargeArrowDownBlack": "\uE0F4",   // Large arrow down (lowest pitch) black notehead
    /*  */"noteheadParenthesisLeft": "\uE0F5",   // Opening parenthesis
    /*  */"noteheadParenthesisRight": "\uE0F6",   // Closing parenthesis
    /*  */"noteheadCircleSlash": "\uE0F7",   // Circle slash notehead
    /*  */"noteheadHeavyX": "\uE0F8",    // Heavy X notehead
    /*  */"noteheadHeavyXHat": "\uE0F9",  // Heavy X with hat notehead
    /*  */"noteheadWholeFilled": "\uE0FA",   // Filled whole (semibreve) notehead
    /*  */"noteheadHalfFilled": "\uE0FB",   // Filled half (minim) notehead
    /*  */"noteheadDiamondOpen": "\uE0FC",   // Open diamond notehead
    /*  */"noteheadSlashVerticalEnds": "\uE100", // Slash with vertical ends
    /*  */"noteheadSlashHorizontalEnds": "\uE101", // Slash with horizontal ends
    /*  */"noteheadSlashWhiteWhole": "\uE102", // White slash whole
    /*  */"noteheadSlashWhiteHalf": "\uE103", // White slash half
    /*  */"noteheadSlashDiamondWhite": "\uE104", // Large white diamond
    /*  */"noteheadSlashVerticalEndsSmall": "\uE105",   // Small slash with vertical ends
    /*  */"noteheadSlashX": "\uE106",    // Large X notehead
    /*  */"noteheadSlashVerticalEndsMuted": "\uE107",   // Muted slash with vertical ends
    /*  */"noteheadSlashHorizontalEndsMuted": "\uE108",   // Muted slash with horizontal ends
    /*  */"noteheadSlashWhiteMuted": "\uE109", // Muted white slash
    /*  */"noteheadSlashWhiteDoubleWhole": "\uE10A",   // White slash double whole
    /*  */"noteheadRoundBlackLarge": "\uE110", // Large round black notehead
    /*  */"noteheadRoundWhiteLarge": "\uE111", // Large round white notehead
    /*  */"noteheadRoundWhiteWithDotLarge": "\uE112", // Large round white notehead with dot
    /*  */"noteheadRoundBlack": "\uE113",   // Round black notehead
    /*  */"noteheadRoundWhite": "\uE114",   // Round white notehead
    /*  */"noteheadRoundWhiteWithDot": "\uE115",   // Round white notehead with dot
    /*  */"noteheadRoundBlackSlashedLarge": "\uE116",   // Large round black notehead, slashed
    /*  */"noteheadRoundWhiteSlashedLarge": "\uE117",   // Large round white notehead, slashed
    /*  */"noteheadRoundBlackSlashed": "\uE118", // Round black notehead, slashed
    /*  */"noteheadRoundWhiteSlashed": "\uE119", // Round white notehead, slashed
    /*  */"noteheadSquareBlackLarge": "\uE11A", // Large square black notehead
    /*  */"noteheadSquareBlackWhite": "\uE11B", // Large square white notehead
    /*  */"noteheadRoundBlackDoubleSlashed": "\uE11C",   // Round black notehead, double slashed
    /*  */"noteheadRoundWhiteDoubleSlashed": "\uE11D",   // Round white notehead, double slashed
    /*  */"noteheadClusterSquareWhite": "\uE120", // Cluster notehead white (square)
    /*  */"noteheadClusterSquareBlack": "\uE121", // Cluster notehead black (square)
    /*  */"noteheadClusterRoundWhite": "\uE122", // Cluster notehead white (round)
    /*  */"noteheadClusterRoundBlack": "\uE123", // Cluster notehead black (round)
    /*  */"noteheadClusterDoubleWhole2nd": "\uE124",    // Double whole note cluster, 2nd
    /*  */"noteheadClusterWhole2nd": "\uE125",  // Whole note cluster, 2nd
    /*  */"noteheadClusterHalf2nd": "\uE126",  // Half note cluster, 2nd
    /*  */"noteheadClusterQuarter2nd": "\uE127",  // Quarter note cluster, 2nd
    /*  */"noteheadClusterDoubleWhole3rd": "\uE128",    // Double whole note cluster, 3rd
    /*  */"noteheadClusterWhole3rd": "\uE129",  // Whole note cluster, 3rd
    /*  */"noteheadClusterHalf3rd": "\uE12A",  // Half note cluster, 3rd
    /*  */"noteheadClusterQuarter3rd": "\uE12B",  // Quarter note cluster, 3rd
    /*  */"noteheadClusterDoubleWholeTop": "\uE12C",   // Combining double whole note cluster, top
    /*  */"noteheadClusterDoubleWholeMiddle": "\uE12D",   // Combining double whole note cluster, middle
    /*  */"noteheadClusterDoubleWholeBottom": "\uE12E",   // Combining double whole note cluster, bottom
    /*  */"noteheadClusterWholeTop": "\uE12F", // Combining whole note cluster, top
    /*  */"noteheadClusterWholeMiddle": "\uE130", // Combining whole note cluster, middle
    /*  */"noteheadClusterWholeBottom": "\uE131", // Combining whole note cluster, bottom
    /*  */"noteheadClusterHalfTop": "\uE132", // Combining half note cluster, top
    /*  */"noteheadClusterHalfMiddle": "\uE133", // Combining half note cluster, middle
    /*  */"noteheadClusterHalfBottom": "\uE134", // Combining half note cluster, bottom
    /*  */"noteheadClusterQuarterTop": "\uE135", // Combining quarter note cluster, top
    /*  */"noteheadClusterQuarterMiddle": "\uE136", // Combining quarter note cluster, middle
    /*  */"noteheadClusterQuarterBottom": "\uE137", // Combining quarter note cluster, bottom
    /*  */"noteheadDiamondClusterWhite2nd": "\uE138",    // White diamond cluster, 2nd
    /*  */"noteheadDiamondClusterBlack2nd": "\uE139",    // Black diamond cluster, 2nd
    /*  */"noteheadDiamondClusterWhite3rd": "\uE13A",    // White diamond cluster, 3rd
    /*  */"noteheadDiamondClusterBlack3rd": "\uE13B",    // Black diamond cluster, 3rd
    /*  */"noteheadDiamondClusterWhiteTop": "\uE13C",   // Combining white diamond cluster, top
    /*  */"noteheadDiamondClusterWhiteMiddle": "\uE13D",   // Combining white diamond cluster, middle
    /*  */"noteheadDiamondClusterWhiteBottom": "\uE13E",   // Combining white diamond cluster, bottom
    /*  */"noteheadDiamondClusterBlackTop": "\uE13F",   // Combining black diamond cluster, top
    /*  */"noteheadDiamondClusterBlackMiddle": "\uE140",   // Combining black diamond cluster, middle
    /*  */"noteheadDiamondClusterBlackBottom": "\uE141",   // Combining black diamond cluster, bottom
    /*  */"noteheadRectangularClusterBlackTop": "\uE142",   // Combining black rectangular cluster, top
    /*  */"noteheadRectangularClusterBlackMiddle": "\uE143",   // Combining black rectangular cluster, middle
    /*  */"noteheadRectangularClusterBlackBottom": "\uE144",   // Combining black rectangular cluster, bottom
    /*  */"noteheadRectangularClusterWhiteTop": "\uE145",   // Combining white rectangular cluster, top
    /*  */"noteheadRectangularClusterWhiteMiddle": "\uE146",   // Combining white rectangular cluster, middle
    /*  */"noteheadRectangularClusterWhiteBottom": "\uE147",   // Combining white rectangular cluster, bottom
    /*  */"noteDoWhole": "\uE150",   // Do (whole note)
    /*  */"noteReWhole": "\uE151",   // Re (whole note)
    /*  */"noteMiWhole": "\uE152",   // Mi (whole note)
    /*  */"noteFaWhole": "\uE153",   // Fa (whole note)
    /*  */"noteSoWhole": "\uE154",   // So (whole note)
    /*  */"noteLaWhole": "\uE155",   // La (whole note)
    /*  */"noteTiWhole": "\uE156",   // Ti (whole note)
    /*  */"noteSiWhole": "\uE157",   // Si (whole note)
    /*  */"noteDoHalf": "\uE158",   // Do (half note)
    /*  */"noteReHalf": "\uE159",   // Re (half note)
    /*  */"noteMiHalf": "\uE15A",   // Mi (half note)
    /*  */"noteFaHalf": "\uE15B",   // Fa (half note)
    /*  */"noteSoHalf": "\uE15C",   // So (half note)
    /*  */"noteLaHalf": "\uE15D",   // La (half note)
    /*  */"noteTiHalf": "\uE15E",   // Ti (half note)
    /*  */"noteSiHalf": "\uE15F",   // Si (half note)
    /*  */"noteDoBlack": "\uE160",   // Do (black note)
    /*  */"noteReBlack": "\uE161",   // Re (black note)
    /*  */"noteMiBlack": "\uE162",   // Mi (black note)
    /*  */"noteFaBlack": "\uE163",   // Fa (black note)
    /*  */"noteSoBlack": "\uE164",   // So (black note)
    /*  */"noteLaBlack": "\uE165",   // La (black note)
    /*  */"noteTiBlack": "\uE166",   // Ti (black note)
    /*  */"noteSiBlack": "\uE167",   // Si (black note)
    /*  */"noteAFlatWhole": "\uE168",  // A flat (whole note)
    /*  */"noteAWhole": "\uE169",    // A (whole note)
    /*  */"noteASharpWhole": "\uE16A",  // A sharp (whole note)
    /*  */"noteBFlatWhole": "\uE16B",  // B flat (whole note)
    /*  */"noteBWhole": "\uE16C",    // B (whole note)
    /*  */"noteBSharpWhole": "\uE16D",  // B sharp (whole note)
    /*  */"noteCFlatWhole": "\uE16E",  // C flat (whole note)
    /*  */"noteCWhole": "\uE16F",    // C (whole note)
    /*  */"noteCSharpWhole": "\uE170",  // C sharp (whole note)
    /*  */"noteDFlatWhole": "\uE171",  // D flat (whole note)
    /*  */"noteDWhole": "\uE172",    // D (whole note)
    /*  */"noteDSharpWhole": "\uE173",  // D sharp (whole note)
    /*  */"noteEFlatWhole": "\uE174",  // E flat (whole note)
    /*  */"noteEWhole": "\uE175",    // E (whole note)
    /*  */"noteESharpWhole": "\uE176",  // E sharp (whole note)
    /*  */"noteFFlatWhole": "\uE177",  // F flat (whole note)
    /*  */"noteFWhole": "\uE178",    // F (whole note)
    /*  */"noteFSharpWhole": "\uE179",  // F sharp (whole note)
    /*  */"noteGFlatWhole": "\uE17A",  // G flat (whole note)
    /*  */"noteGWhole": "\uE17B",    // G (whole note)
    /*  */"noteGSharpWhole": "\uE17C",  // G sharp (whole note)
    /*  */"noteHWhole": "\uE17D",    // H (whole note)
    /*  */"noteHSharpWhole": "\uE17E",  // H sharp (whole note)
    /*  */"noteAFlatHalf": "\uE17F",  // A flat (half note)
    /*  */"noteAHalf": "\uE180",    // A (half note)
    /*  */"noteASharpHalf": "\uE181",  // A sharp (half note)
    /*  */"noteBFlatHalf": "\uE182",  // B flat (half note)
    /*  */"noteBHalf": "\uE183",    // B (half note)
    /*  */"noteBSharpHalf": "\uE184",  // B sharp (half note)
    /*  */"noteCFlatHalf": "\uE185",  // C flat (half note)
    /*  */"noteCHalf": "\uE186",    // C (half note)
    /*  */"noteCSharpHalf": "\uE187",  // C sharp (half note)
    /*  */"noteDFlatHalf": "\uE188",  // D flat (half note)
    /*  */"noteDHalf": "\uE189",    // D (half note)
    /*  */"noteDSharpHalf": "\uE18A",  // D sharp (half note)
    /*  */"noteEFlatHalf": "\uE18B",  // E flat (half note)
    /*  */"noteEHalf": "\uE18C",    // E (half note)
    /*  */"noteESharpHalf": "\uE18D",  // E sharp (half note)
    /*  */"noteFFlatHalf": "\uE18E",  // F flat (half note)
    /*  */"noteFHalf": "\uE18F",    // F (half note)
    /*  */"noteFSharpHalf": "\uE190",  // F sharp (half note)
    /*  */"noteGFlatHalf": "\uE191",  // G flat (half note)
    /*  */"noteGHalf": "\uE192",    // G (half note)
    /*  */"noteGSharpHalf": "\uE193",  // G sharp (half note)
    /*  */"noteHHalf": "\uE194",    // H (half note)
    /*  */"noteHSharpHalf": "\uE195",  // H sharp (half note)
    /*  */"noteAFlatBlack": "\uE196",  // A flat (black note)
    /*  */"noteABlack": "\uE197",    // A (black note)
    /*  */"noteASharpBlack": "\uE198",  // A sharp (black note)
    /*  */"noteBFlatBlack": "\uE199",  // B flat (black note)
    /*  */"noteBBlack": "\uE19A",    // B (black note)
    /*  */"noteBSharpBlack": "\uE19B",  // B sharp (black note)
    /*  */"noteCFlatBlack": "\uE19C",  // C flat (black note)
    /*  */"noteCBlack": "\uE19D",    // C (black note)
    /*  */"noteCSharpBlack": "\uE19E",  // C sharp (black note)
    /*  */"noteDFlatBlack": "\uE19F",  // D flat (black note)
    /*  */"noteDBlack": "\uE1A0",    // D (black note)
    /*  */"noteDSharpBlack": "\uE1A1",  // D sharp (black note)
    /*  */"noteEFlatBlack": "\uE1A2",  // E flat (black note)
    /*  */"noteEBlack": "\uE1A3",    // E (black note)
    /*  */"noteESharpBlack": "\uE1A4",  // E sharp (black note)
    /*  */"noteFFlatBlack": "\uE1A5",  // F flat (black note)
    /*  */"noteFBlack": "\uE1A6",    // F (black note)
    /*  */"noteFSharpBlack": "\uE1A7",  // F sharp (black note)
    /*  */"noteGFlatBlack": "\uE1A8",  // G flat (black note)
    /*  */"noteGBlack": "\uE1A9",    // G (black note)
    /*  */"noteGSharpBlack": "\uE1AA",  // G sharp (black note)
    /*  */"noteHBlack": "\uE1AB",    // H (black note)
    /*  */"noteHSharpBlack": "\uE1AC",  // H sharp (black note)
    /*  */"noteEmptyWhole": "\uE1AD",   // Empty whole note
    /*  */"noteEmptyHalf": "\uE1AE",   // Empty half note
    /*  */"noteEmptyBlack": "\uE1AF",   // Empty black note
    /*  */"noteShapeRoundWhite": "\uE1B0", // Round white (4-shape sol; 7-shape so)
    /*  */"noteShapeRoundBlack": "\uE1B1", // Round black (4-shape sol; 7-shape so)
    /*  */"noteShapeSquareWhite": "\uE1B2", // Square white (4-shape la; Aikin 7-shape la)
    /*  */"noteShapeSquareBlack": "\uE1B3", // Square black (4-shape la; Aikin 7-shape la)
    /*  */"noteShapeTriangleRightWhite": "\uE1B4",   // Triangle right white (stem down; 4-shape fa; 7-shape fa)
    /*  */"noteShapeTriangleRightBlack": "\uE1B5",   // Triangle right black (stem down; 4-shape fa; 7-shape fa)
    /*  */"noteShapeTriangleLeftWhite": "\uE1B6",   // Triangle left white (stem up; 4-shape fa; 7-shape fa)
    /*  */"noteShapeTriangleLeftBlack": "\uE1B7",   // Triangle left black (stem up; 4-shape fa; 7-shape fa)
    /*  */"noteShapeDiamondWhite": "\uE1B8", // Diamond white (4-shape mi; 7-shape mi)
    /*  */"noteShapeDiamondBlack": "\uE1B9", // Diamond black (4-shape mi; 7-shape mi)
    /*  */"noteShapeTriangleUpWhite": "\uE1BA",   // Triangle up white (Aikin 7-shape do)
    /*  */"noteShapeTriangleUpBlack": "\uE1BB",   // Triangle up black (Aikin 7-shape do)
    /*  */"noteShapeMoonWhite": "\uE1BC", // Moon white (Aikin 7-shape re)
    /*  */"noteShapeMoonBlack": "\uE1BD", // Moon black (Aikin 7-shape re)
    /*  */"noteShapeTriangleRoundWhite": "\uE1BE",   // Triangle-round white (Aikin 7-shape ti)
    /*  */"noteShapeTriangleRoundBlack": "\uE1BF",   // Triangle-round black (Aikin 7-shape ti)
    /*  */"noteShapeKeystoneWhite": "\uE1C0", // Inverted keystone white (Walker 7-shape do)
    /*  */"noteShapeKeystoneBlack": "\uE1C1", // Inverted keystone black (Walker 7-shape do)
    /*  */"noteShapeQuarterMoonWhite": "\uE1C2",   // Quarter moon white (Walker 7-shape re)
    /*  */"noteShapeQuarterMoonBlack": "\uE1C3",   // Quarter moon black (Walker 7-shape re)
    /*  */"noteShapeIsoscelesTriangleWhite": "\uE1C4",   // Isosceles triangle white (Walker 7-shape ti)
    /*  */"noteShapeIsoscelesTriangleBlack": "\uE1C5",   // Isosceles triangle black (Walker 7-shape ti)
    /*  */"noteShapeMoonLeftWhite": "\uE1C6",   // Moon left white (Funk 7-shape do)
    /*  */"noteShapeMoonLeftBlack": "\uE1C7",   // Moon left black (Funk 7-shape do)
    /*  */"noteShapeArrowheadLeftWhite": "\uE1C8",   // Arrowhead left white (Funk 7-shape re)
    /*  */"noteShapeArrowheadLeftBlack": "\uE1C9",   // Arrowhead left black (Funk 7-shape re)
    /*  */"noteShapeTriangleRoundLeftWhite": "\uE1CA", // Triangle-round left white (Funk 7-shape ti)
    /*  */"noteShapeTriangleRoundLeftBlack": "\uE1CB", // Triangle-round left black (Funk 7-shape ti)
    /*  */"noteDoubleWhole": "\uE1D0",    // Double whole note (breve)
    /*  */"noteDoubleWholeSquare": "\uE1D1", // Double whole note (square)
    /*  */"noteWhole": "\uE1D2",  // Whole note (semibreve)
    /*  */"noteHalfUp": "\uE1D3",    // Half note (minim) stem up
    /*  */"noteHalfDown": "\uE1D4",    // Half note (minim) stem down
    /*  */"noteQuarterUp": "\uE1D5",    // Quarter note (crotchet) stem up
    /*  */"noteQuarterDown": "\uE1D6",    // Quarter note (crotchet) stem down
    /*  */"note8thUp": "\uE1D7", // Eighth note (quaver) stem up
    /*  */"note8thDown": "\uE1D8", // Eighth note (quaver) stem down
    /*  */"note16thUp": "\uE1D9",    // 16th note (semiquaver) stem up
    /*  */"note16thDown": "\uE1DA",    // 16th note (semiquaver) stem down
    /*  */"note32ndUp": "\uE1DB",   // 32nd note (demisemiquaver) stem up
    /*  */"note32ndDown": "\uE1DC",   // 32nd note (demisemiquaver) stem down
    /*  */"note64thUp": "\uE1DD",   // 64th note (hemidemisemiquaver) stem up
    /*  */"note64thDown": "\uE1DE",   // 64th note (hemidemisemiquaver) stem down
    /*  */"note128thUp": "\uE1DF",  // 128th note (semihemidemisemiquaver) stem up
    /*  */"note128thDown": "\uE1E0",  // 128th note (semihemidemisemiquaver) stem down
    /*  */"note256thUp": "\uE1E1",  // 256th note (demisemihemidemisemiquaver) stem up
    /*  */"note256thDown": "\uE1E2",  // 256th note (demisemihemidemisemiquaver) stem down
    /*  */"note512thUp": "\uE1E3",  // 512th note (hemidemisemihemidemisemiquaver) stem up
    /*  */"note512thDown": "\uE1E4",  // 512th note (hemidemisemihemidemisemiquaver) stem down
    /*  */"note1024thUp": "\uE1E5", // 1024th note (semihemidemisemihemidemisemiquaver) stem up
    /*  */"note1024thDown": "\uE1E6", // 1024th note (semihemidemisemihemidemisemiquaver) stem down
    /*  */"augmentationDot": "\uE1E7", // Augmentation dot
    /*  */"textBlackNoteShortStem": "\uE1F0",   // Black note, short stem
    /*  */"textBlackNoteLongStem": "\uE1F1",   // Black note, long stem
    /*  */"textBlackNoteFrac8thShortStem": "\uE1F2",    // Black note, fractional 8th beam, short stem
    /*  */"textBlackNoteFrac8thLongStem": "\uE1F3",    // Black note, fractional 8th beam, long stem
    /*  */"textBlackNoteFrac16thShortStem": "\uE1F4",   // Black note, fractional 16th beam, short stem
    /*  */"textBlackNoteFrac16thLongStem": "\uE1F5",   // Black note, fractional 16th beam, long stem
    /*  */"textBlackNoteFrac32ndLongStem": "\uE1F6",   // Black note, fractional 32nd beam, long stem
    /*  */"textCont8thBeamShortStem": "\uE1F7",  // Continuing 8th beam for short stem
    /*  */"textCont8thBeamLongStem": "\uE1F8",  // Continuing 8th beam for long stem
    /*  */"textCont16thBeamShortStem": "\uE1F9", // Continuing 16th beam for short stem
    /*  */"textCont16thBeamLongStem": "\uE1FA", // Continuing 16th beam for long stem
    /*  */"textCont32ndBeamLongStem": "\uE1FB", // Continuing 32nd beam for long stem
    /*  */"textAugmentationDot": "\uE1FC",   // Augmentation dot
    /*  */"textTie": "\uE1FD", // Tie
    /*  */"textTupletBracketStartShortStem": "\uE1FE", // Tuplet bracket start for short stem
    /*  */"textTuplet3ShortStem": "\uE1FF",    // Tuplet number 3 for short stem
    /*  */"textTupletBracketEndShortStem": "\uE200", // Tuplet bracket end for short stem
    /*  */"textTupletBracketStartLongStem": "\uE201", // Tuplet bracket start for long stem
    /*  */"textTuplet3LongStem": "\uE202",    // Tuplet number 3 for long stem
    /*  */"textTupletBracketEndLongStem": "\uE203", // Tuplet bracket end for long stem
    /*  */"textHeadlessBlackNoteShortStem": "\uE204", // Headless black note, short stem
    /*  */"textHeadlessBlackNoteLongStem": "\uE205", // Headless black note, long stem
    /*  */"textHeadlessBlackNoteFrac8thShortStem": "\uE206",  // Headless black note, fractional 8th beam, short stem
    /*  */"textHeadlessBlackNoteFrac8thLongStem": "\uE207",  // Headless black note, fractional 8th beam, long stem
    /*  */"textHeadlessBlackNoteFrac16thShortStem": "\uE208", // Headless black note, fractional 16th beam, short stem
    /*  */"textHeadlessBlackNoteFrac16thLongStem": "\uE209", // Headless black note, fractional 16th beam, long stem
    /*  */"textHeadlessBlackNoteFrac32ndLongStem": "\uE20A", // Headless black note, fractional 32nd beam, long stem
    /*  */"stem": "\uE210",   // Combining stem
    /*  */"stemSprechgesang": "\uE211", // Combining sprechgesang stem
    /*  */"stemSwished": "\uE212", // Combining swished stem
    /*  */"stemPendereckiTremolo": "\uE213",   // Combining Penderecki unmeasured tremolo stem
    /*  */"stemSulPonticello": "\uE214",   // Combining sul ponticello (bow behind bridge) stem
    /*  */"stemBowOnBridge": "\uE215", // Combining bow on bridge stem
    /*  */"stemBowOnTailpiece": "\uE216", // Combining bow on tailpiece stem
    /*  */"stemBuzzRoll": "\uE217",   // Combining buzz roll stem
    /*  */"stemDamp": "\uE218", // Combining damp stem
    /*  */"stemVibratoPulse": "\uE219",   // Combining vibrato pulse accent (Saunders) stem
    /*  */"stemMultiphonicsBlack": "\uE21A",   // Combining multiphonics (black) stem
    /*  */"stemMultiphonicsWhite": "\uE21B",   // Combining multiphonics (white) stem
    /*  */"stemMultiphonicsBlackWhite": "\uE21C", // Combining multiphonics (black and white) stem
    /*  */"stemSussurando": "\uE21D", // Combining sussurando stem
    /*  */"stemRimShot": "\uE21E",   // Combining rim shot stem
    /*  */"stemHarpStringNoise": "\uE21F", // Combining harp string noise stem
    /*  */"tremolo1": "\uE220",  // Combining tremolo 1
    /*  */"tremolo2": "\uE221",  // Combining tremolo 2
    /*  */"tremolo3": "\uE222",  // Combining tremolo 3
    /*  */"tremolo4": "\uE223",  // Combining tremolo 4
    /*  */"tremolo5": "\uE224",  // Combining tremolo 5
    /*  */"tremoloFingered1": "\uE225",    // Fingered tremolo 1
    /*  */"tremoloFingered2": "\uE226",    // Fingered tremolo 2
    /*  */"tremoloFingered3": "\uE227",    // Fingered tremolo 3
    /*  */"tremoloFingered4": "\uE228",    // Fingered tremolo 4
    /*  */"tremoloFingered5": "\uE229",    // Fingered tremolo 5
    /*  */"buzzRoll": "\uE22A", // Buzz roll
    /*  */"pendereckiTremolo": "\uE22B", // Penderecki unmeasured tremolo
    /*  */"unmeasuredTremolo": "\uE22C", // Wieniawski unmeasured tremolo
    /*  */"unmeasuredTremoloSimple": "\uE22D",   // Wieniawski unmeasured tremolo (simpler)
    /*  */"tremoloDivisiDots2": "\uE22E",  // Divide measured tremolo by 2
    /*  */"tremoloDivisiDots3": "\uE22F",  // Divide measured tremolo by 3
    /*  */"tremoloDivisiDots4": "\uE230",  // Divide measured tremolo by 4
    /*  */"tremoloDivisiDots6": "\uE231",  // Divide measured tremolo by 6
    /*  */"stockhausenTremolo": "\uE232", // Stockhausen irregular tremolo (\"Morsen\", like Morse code)
    /*  */"oneHandedRollStevens": "\uE233", // One-handed roll (Stevens)
    /*  */"doubleLateralRollStevens": "\uE234", // Double lateral roll (Stevens)
    /*  */"flag8thUp": "\uE240",    // Combining flag 1 (8th) above
    /*  */"flag8thDown": "\uE241",    // Combining flag 1 (8th) below
    /*  */"flag16thUp": "\uE242",   // Combining flag 2 (16th) above
    /*  */"flag16thDown": "\uE243",   // Combining flag 2 (16th) below
    /*  */"flag32ndUp": "\uE244",   // Combining flag 3 (32nd) above
    /*  */"flag32ndDown": "\uE245",   // Combining flag 3 (32nd) below
    /*  */"flag64thUp": "\uE246",   // Combining flag 4 (64th) above
    /*  */"flag64thDown": "\uE247",   // Combining flag 4 (64th) below
    /*  */"flag128thUp": "\uE248",  // Combining flag 5 (128th) above
    /*  */"flag128thDown": "\uE249",  // Combining flag 5 (128th) below
    /*  */"flag256thUp": "\uE24A",  // Combining flag 6 (256th) above
    /*  */"flag256thDown": "\uE24B",  // Combining flag 6 (256th) below
    /*  */"flag512thUp": "\uE24C",  // Combining flag 7 (512th) above
    /*  */"flag512thDown": "\uE24D",  // Combining flag 7 (512th) below
    /*  */"flag1024thUp": "\uE24E", // Combining flag 8 (1024th) above
    /*  */"flag1024thDown": "\uE24F", // Combining flag 8 (1024th) below
    /*  */"flagInternalUp": "\uE250",   // Internal combining flag above
    /*  */"flagInternalDown": "\uE251",   // Internal combining flag below
    /*  */"accidentalFlat": "\uE260",   // Flat
    /*  */"accidentalNatural": "\uE261",   // Natural
    /*  */"accidentalSharp": "\uE262",   // Sharp
    /*  */"accidentalDoubleSharp": "\uE263", // Double sharp
    /*  */"accidentalDoubleFlat": "\uE264",    // Double flat
    /*  */"accidentalTripleSharp": "\uE265",   // Triple sharp
    /*  */"accidentalTripleFlat": "\uE266",   // Triple flat
    /*  */"accidentalNaturalFlat": "\uE267",   // Natural flat
    /*  */"accidentalNaturalSharp": "\uE268",   // Natural sharp
    /*  */"accidentalSharpSharp": "\uE269",   // Sharp sharp
    /*  */"accidentalParensLeft": "\uE26A",   // Accidental parenthesis, left
    /*  */"accidentalParensRight": "\uE26B",   // Accidental parenthesis, right
    /*  */"accidentalBracketLeft": "\uE26C",   // Accidental bracket, left
    /*  */"accidentalBracketRight": "\uE26D",   // Accidental bracket, right
    /*  */"accidentalQuarterToneFlatArrowUp": "\uE270", // Quarter-tone flat
    /*  */"accidentalThreeQuarterTonesFlatArrowDown": "\uE271",   // Three-quarter-tones flat
    /*  */"accidentalQuarterToneSharpNaturalArrowUp": "\uE272",   // Quarter-tone sharp
    /*  */"accidentalQuarterToneFlatNaturalArrowDown": "\uE273",   // Quarter-tone flat
    /*  */"accidentalThreeQuarterTonesSharpArrowUp": "\uE274",   // Three-quarter-tones sharp
    /*  */"accidentalQuarterToneSharpArrowDown": "\uE275", // Quarter-tone sharp
    /*  */"accidentalFiveQuarterTonesSharpArrowUp": "\uE276",   // Five-quarter-tones sharp
    /*  */"accidentalThreeQuarterTonesSharpArrowDown": "\uE277",   // Three-quarter-tones sharp
    /*  */"accidentalThreeQuarterTonesFlatArrowUp": "\uE278",   // Three-quarter-tones flat
    /*  */"accidentalFiveQuarterTonesFlatArrowDown": "\uE279",   // Five-quarter-tones flat
    /*  */"accidentalArrowUp": "\uE27A",   // Arrow up (raise by one quarter-tone)
    /*  */"accidentalArrowDown": "\uE27B",   // Arrow down (lower by one quarter-tone)
    /*  */"accidentalQuarterToneFlatStein": "\uE280",   // Reversed flat (quarter-tone flat) (Stein)
    /*  */"accidentalThreeQuarterTonesFlatZimmermann": "\uE281", // Reversed flat and flat (three-quarter-tones flat) (Zimmermann)
    /*  */"accidentalQuarterToneSharpStein": "\uE282",   // Half sharp (quarter-tone sharp) (Stein)
    /*  */"accidentalThreeQuarterTonesSharpStein": "\uE283", // One and a half sharps (three-quarter-tones sharp) (Stein)
    /*  */"accidentalNarrowReversedFlat": "\uE284", // Narrow reversed flat(quarter-tone flat)
    /*  */"accidentalNarrowReversedFlatAndFlat": "\uE285", // Narrow reversed flat and flat(three-quarter-tones flat)
    /*  */"accidentalReversedFlatArrowUp": "\uE290",   // Reversed flat with arrow up
    /*  */"accidentalReversedFlatArrowDown": "\uE291",   // Reversed flat with arrow down
    /*  */"accidentalFilledReversedFlatArrowUp": "\uE292", // Filled reversed flat with arrow up
    /*  */"accidentalFilledReversedFlatArrowDown": "\uE293", // Filled reversed flat with arrow down
    /*  */"accidentalReversedFlatAndFlatArrowUp": "\uE294",   // Reversed flat and flat with arrow up
    /*  */"accidentalReversedFlatAndFlatArrowDown": "\uE295",   // Reversed flat and flat with arrow down
    /*  */"accidentalFilledReversedFlatAndFlat": "\uE296", // Filled reversed flat and flat
    /*  */"accidentalFilledReversedFlatAndFlatArrowUp": "\uE297", // Filled reversed flat and flat with arrow up
    /*  */"accidentalFilledReversedFlatAndFlatArrowDown": "\uE298", // Filled reversed flat and flat with arrow down
    /*  */"accidentalHalfSharpArrowUp": "\uE299",   // Half sharp with arrow up
    /*  */"accidentalHalfSharpArrowDown": "\uE29A",   // Half sharp with arrow down
    /*  */"accidentalOneAndAHalfSharpsArrowUp": "\uE29B",  // One and a half sharps with arrow up
    /*  */"accidentalOneAndAHalfSharpsArrowDown": "\uE29C",  // One and a half sharps with arrow down
    /*  */"accidentalSims12Down": "\uE2A0", // 1/12 tone low
    /*  */"accidentalSims6Down": "\uE2A1",  // 1/6 tone low
    /*  */"accidentalSims4Down": "\uE2A2",  // 1/4 tone low
    /*  */"accidentalSims12Up": "\uE2A3", // 1/12 tone high
    /*  */"accidentalSims6Up": "\uE2A4",  // 1/6 tone high
    /*  */"accidentalSims4Up": "\uE2A5",  // 1/4 tone high
    /*  */"accidentalJohnstonPlus": "\uE2B0",   // Plus (raise by 81:80)
    /*  */"accidentalJohnstonMinus": "\uE2B1",   // Minus (lower by 81:80)
    /*  */"accidentalJohnstonEl": "\uE2B2",   // Inverted seven (raise by 36:35)
    /*  */"accidentalJohnstonSeven": "\uE2B3",   // Seven (lower by 36:35)
    /*  */"accidentalJohnstonUp": "\uE2B4",   // Up arrow (raise by 33:32)
    /*  */"accidentalJohnstonDown": "\uE2B5",   // Down arrow (lower by 33:32)
    /*  */"accidentalJohnston13": "\uE2B6",   // Thirteen (raise by 65:64)
    /*  */"accidentalJohnston31": "\uE2B7",   // Inverted 13 (lower by 65:64)
    /*  */"accidentalDoubleFlatOneArrowDown": "\uE2C0", // Double flat lowered by one syntonic comma
    /*  */"accidentalFlatOneArrowDown": "\uE2C1",   // Flat lowered by one syntonic comma
    /*  */"accidentalNaturalOneArrowDown": "\uE2C2",   // Natural lowered by one syntonic comma
    /*  */"accidentalSharpOneArrowDown": "\uE2C3",   // Sharp lowered by one syntonic comma
    /*  */"accidentalDoubleSharpOneArrowDown": "\uE2C4", // Double sharp lowered by one syntonic comma
    /*  */"accidentalDoubleFlatOneArrowUp": "\uE2C5", // Double flat raised by one syntonic comma
    /*  */"accidentalFlatOneArrowUp": "\uE2C6",   // Flat raised by one syntonic comma
    /*  */"accidentalNaturalOneArrowUp": "\uE2C7",   // Natural raised by one syntonic comma
    /*  */"accidentalSharpOneArrowUp": "\uE2C8",   // Sharp raised by one syntonic comma
    /*  */"accidentalDoubleSharpOneArrowUp": "\uE2C9", // Double sharp raised by one syntonic comma
    /*  */"accidentalDoubleFlatTwoArrowsDown": "\uE2CA", // Double flat lowered by two syntonic commas
    /*  */"accidentalFlatTwoArrowsDown": "\uE2CB",   // Flat lowered by two syntonic commas
    /*  */"accidentalNaturalTwoArrowsDown": "\uE2CC",   // Natural lowered by two syntonic commas
    /*  */"accidentalSharpTwoArrowsDown": "\uE2CD",   // Sharp lowered by two syntonic commas
    /*  */"accidentalDoubleSharpTwoArrowsDown": "\uE2CE", // Double sharp lowered by two syntonic commas
    /*  */"accidentalDoubleFlatTwoArrowsUp": "\uE2CF", // Double flat raised by two syntonic commas
    /*  */"accidentalFlatTwoArrowsUp": "\uE2D0",   // Flat raised by two syntonic commas
    /*  */"accidentalNaturalTwoArrowsUp": "\uE2D1",   // Natural raised by two syntonic commas
    /*  */"accidentalSharpTwoArrowsUp": "\uE2D2",   // Sharp raised by two syntonic commas
    /*  */"accidentalDoubleSharpTwoArrowsUp": "\uE2D3", // Double sharp raised by two syntonic commas
    /*  */"accidentalDoubleFlatThreeArrowsDown": "\uE2D4", // Double flat lowered by three syntonic commas
    /*  */"accidentalFlatThreeArrowsDown": "\uE2D5",   // Flat lowered by three syntonic commas
    /*  */"accidentalNaturalThreeArrowsDown": "\uE2D6",   // Natural lowered by three syntonic commas
    /*  */"accidentalSharpThreeArrowsDown": "\uE2D7",   // Sharp lowered by three syntonic commas
    /*  */"accidentalDoubleSharpThreeArrowsDown": "\uE2D8", // Double sharp lowered by three syntonic commas
    /*  */"accidentalDoubleFlatThreeArrowsUp": "\uE2D9", // Double flat raised by three syntonic commas
    /*  */"accidentalFlatThreeArrowsUp": "\uE2DA",   // Flat raised by three syntonic commas
    /*  */"accidentalNaturalThreeArrowsUp": "\uE2DB",   // Natural raised by three syntonic commas
    /*  */"accidentalSharpThreeArrowsUp": "\uE2DC",   // Sharp raised by three syntonic commas
    /*  */"accidentalDoubleSharpThreeArrowsUp": "\uE2DD", // Double sharp raised by three syntonic commas
    /*  */"accidentalLowerOneSeptimalComma": "\uE2DE",   // Lower by one septimal comma
    /*  */"accidentalRaiseOneSeptimalComma": "\uE2DF",   // Raise by one septimal comma
    /*  */"accidentalLowerTwoSeptimalCommas": "\uE2E0",   // Lower by two septimal commas
    /*  */"accidentalRaiseTwoSeptimalCommas": "\uE2E1",   // Raise by two septimal commas
    /*  */"accidentalLowerOneUndecimalQuartertone": "\uE2E2",   // Lower by one undecimal quartertone
    /*  */"accidentalRaiseOneUndecimalQuartertone": "\uE2E3",   // Raise by one undecimal quartertone
    /*  */"accidentalLowerOneTridecimalQuartertone": "\uE2E4",   // Lower by one tridecimal quartertone
    /*  */"accidentalRaiseOneTridecimalQuartertone": "\uE2E5",   // Raise by one tridecimal quartertone
    /*  */"accidentalCombiningLower17Schisma": "\uE2E6",   // Combining lower by one 17-limit schisma
    /*  */"accidentalCombiningRaise17Schisma": "\uE2E7",   // Combining raise by one 17-limit schisma
    /*  */"accidentalCombiningLower19Schisma": "\uE2E8",   // Combining lower by one 19-limit schisma
    /*  */"accidentalCombiningRaise19Schisma": "\uE2E9",   // Combining raise by one 19-limit schisma
    /*  */"accidentalCombiningLower23Limit29LimitComma": "\uE2EA", // Combining lower by one 23-limit comma
    /*  */"accidentalCombiningRaise23Limit29LimitComma": "\uE2EB", // Combining raise by one 23-limit comma
    /*  */"accidentalCombiningLower31Schisma": "\uE2EC",   // Combining lower by one 31-limit schisma
    /*  */"accidentalCombiningRaise31Schisma": "\uE2ED",   // Combining raise by one 31-limit schisma
    /*  */"accidentalCombiningOpenCurlyBrace": "\uE2EE",   // Combining open curly brace
    /*  */"accidentalCombiningCloseCurlyBrace": "\uE2EF",   // Combining close curly brace
    /*  */"accidentalDoubleFlatEqualTempered": "\uE2F0",   // Double flat equal tempered semitone
    /*  */"accidentalFlatEqualTempered": "\uE2F1", // Flat equal tempered semitone
    /*  */"accidentalNaturalEqualTempered": "\uE2F2", // Natural equal tempered semitone
    /*  */"accidentalSharpEqualTempered": "\uE2F3", // Sharp equal tempered semitone
    /*  */"accidentalDoubleSharpEqualTempered": "\uE2F4",   // Double sharp equal tempered semitone
    /*  */"accidentalQuarterFlatEqualTempered": "\uE2F5",   // Lower by one equal tempered quarter-tone
    /*  */"accidentalQuarterSharpEqualTempered": "\uE2F6",   // Raise by one equal tempered quarter tone
    /*  */"accidentalCombiningLower53LimitComma": "\uE2F7", // Combining lower by one 53-limit comma
    /*  */"accidentalCombiningRaise53LimitComma": "\uE2F8", // Combining raise by one 53-limit comma
    /*  */"accidentalEnharmonicTilde": "\uE2F9",   // Enharmonically reinterpret accidental tilde
    /*  */"accidentalEnharmonicAlmostEqualTo": "\uE2FA",   // Enharmonically reinterpret accidental almost equal to
    /*  */"accidentalEnharmonicEquals": "\uE2FB",   // Enharmonically reinterpret accidental equals
    /*  */"accSagittal5v7KleismaUp": "\uE300",    // 5:7 kleisma up, (5:7k, ~11:13k, 7C less 5C)
    /*  */"accSagittal5v7KleismaDown": "\uE301",    // 5:7 kleisma down
    /*  */"accSagittal5CommaUp": "\uE302",  // 5 comma up, (5C), 1° up [22 27 29 34 41 46 53 96 EDOs], 1/12-tone up
    /*  */"accSagittal5CommaDown": "\uE303",  // 5 comma down, 1° down [22 27 29 34 41 46 53 96 EDOs], 1/12-tone down
    /*  */"accSagittal7CommaUp": "\uE304",  // 7 comma up, (7C), 1° up [43 EDO], 2° up [72 EDO], 1/6-tone up
    /*  */"accSagittal7CommaDown": "\uE305",  // 7 comma down, 1° down [43 EDO], 2° down [72 EDO], 1/6-tone down
    /*  */"accSagittal25SmallDiesisUp": "\uE306",   // 25 small diesis up, (25S, ~5:13S, ~37S, 5C plus 5C), 2° up [53 EDO]
    /*  */"accSagittal25SmallDiesisDown": "\uE307",   // 25 small diesis down, 2° down [53 EDO]
    /*  */"accSagittal35MediumDiesisUp": "\uE308",   // 35 medium diesis up, (35M, ~13M, ~125M, 5C plus 7C), 2/9-tone up
    /*  */"accSagittal35MediumDiesisDown": "\uE309",   // 35 medium diesis down, 1°[50] 2°[27] down, 2/9-tone down
    /*  */"accSagittal11MediumDiesisUp": "\uE30A",  // 11 medium diesis up, (11M), 1°[17 31] 2°46 up, 1/4-tone up
    /*  */"accSagittal11MediumDiesisDown": "\uE30B",  // 11 medium diesis down, 1°[17 31] 2°46 down, 1/4-tone down
    /*  */"accSagittal11LargeDiesisUp": "\uE30C",  // 11 large diesis up, (11L), (sharp less 11M), 3° up [46 EDO]
    /*  */"accSagittal11LargeDiesisDown": "\uE30D",  // 11 large diesis down, 3° down [46 EDO]
    /*  */"accSagittal35LargeDiesisUp": "\uE30E",  // 35 large diesis up, (35L, ~13L, ~125L,  sharp less 35M), 2°50 up
    /*  */"accSagittal35LargeDiesisDown": "\uE30F",  // 35 large diesis down, 2° down [50 EDO], 5/18-tone down
    /*  */"accSagittalSharp25SDown": "\uE310",  // Sharp 25S-down, 3° up [53 EDO]
    /*  */"accSagittalFlat25SUp": "\uE311",  // Flat 25S-up, 3° down [53 EDO]
    /*  */"accSagittalSharp7CDown": "\uE312",   // Sharp 7C-down, 2° up [43 EDO], 4° up [72 EDO], 1/3-tone up
    /*  */"accSagittalFlat7CUp": "\uE313",   // Flat 7C-up, 2° down [43 EDO], 4° down [72 EDO], 1/3-tone down
    /*  */"accSagittalSharp5CDown": "\uE314",   // Sharp 5C-down, 2°[22 29] 3°[27 34 41] 4°[39 46 53] 5°[72] 7°[96] up, 5/12-tone up
    /*  */"accSagittalFlat5CUp": "\uE315",   // Flat 5C-up, 2°[22 29] 3°[27 34 41] 4°[39 46 53] 5°72 7°[96] down, 5/12-tone down
    /*  */"accSagittalSharp5v7kDown": "\uE316", // Sharp 5:7k-down
    /*  */"accSagittalFlat5v7kUp": "\uE317", // Flat 5:7k-up
    /*  */"accSagittalSharp": "\uE318",   // Sharp, (apotome up)[almost all EDOs], 1/2-tone up
    /*  */"accSagittalFlat": "\uE319",   // Flat, (apotome down)[almost all EDOs], 1/2-tone down
    /*  */"accSagittalUnused1": "\uE31A",   // Unused
    /*  */"accSagittalUnused2": "\uE31B",   // Unused
    /*  */"accSagittalSharp5v7kUp": "\uE31C", // Sharp 5:7k-up
    /*  */"accSagittalFlat5v7kDown": "\uE31D", // Flat 5:7k-down
    /*  */"accSagittalSharp5CUp": "\uE31E",   // Sharp 5C-up, 4°[22 29] 5°[27 34 41] 6°[39 46 53] up, 7/12-tone up
    /*  */"accSagittalFlat5CDown": "\uE31F",   // Flat 5C-down, 4°[22 29] 5°[27 34 41] 6°[39 46 53] down, 7/12-tone down
    /*  */"accSagittalSharp7CUp": "\uE320",   // Sharp 7C-up, 4° up [43 EDO], 8° up [72 EDO], 2/3-tone up
    /*  */"accSagittalFlat7CDown": "\uE321",   // Flat 7C-down, 4° down [43 EDO], 8° down [72 EDO], 2/3-tone down
    /*  */"accSagittalSharp25SUp": "\uE322",  // Sharp 25S-up, 7° up [53 EDO]
    /*  */"accSagittalFlat25SDown": "\uE323",  // Flat 25S-down, 7° down [53 EDO]
    /*  */"accSagittalSharp35MUp": "\uE324",  // Sharp 35M-up, 4° up [50 EDO], 6° up [27 EDO], 13/18-tone up
    /*  */"accSagittalFlat35MDown": "\uE325",  // Flat 35M-down, 4° down [50 EDO], 6° down [27 EDO], 13/18-tone down
    /*  */"accSagittalSharp11MUp": "\uE326",  // Sharp 11M-up, 3° up [17 31 EDOs], 7° up [46 EDO], 3/4-tone up
    /*  */"accSagittalFlat11MDown": "\uE327",  // Flat 11M-down, 3° down [17 31 EDOs], 7° down [46 EDO], 3/4-tone down
    /*  */"accSagittalSharp11LUp": "\uE328",  // Sharp 11L-up, 8° up [46 EDO]
    /*  */"accSagittalFlat11LDown": "\uE329",  // Flat 11L-down, 8° up [46 EDO]
    /*  */"accSagittalSharp35LUp": "\uE32A",  // Sharp 35L-up, 5° up [50 EDO]
    /*  */"accSagittalFlat35LDown": "\uE32B",  // Flat 35L-down, 5° down [50 EDO]
    /*  */"accSagittalDoubleSharp25SDown": "\uE32C",    // Double sharp 25S-down, 8°up [53 EDO]
    /*  */"accSagittalDoubleFlat25SUp": "\uE32D",    // Double flat 25S-up, 8°down [53 EDO]
    /*  */"accSagittalDoubleSharp7CDown": "\uE32E", // Double sharp 7C-down, 5°[43] 10°[72] up, 5/6-tone up
    /*  */"accSagittalDoubleFlat7CUp": "\uE32F", // Double flat 7C-up, 5° down [43 EDO], 10° down [72 EDO], 5/6-tone down
    /*  */"accSagittalDoubleSharp5CDown": "\uE330", // Double sharp 5C-down, 5°[22 29] 7°[34 41] 9°53 up, 11/12 tone up
    /*  */"accSagittalDoubleFlat5CUp": "\uE331", // Double flat 5C-up, 5°[22 29] 7°[34 41] 9°53 down, 11/12 tone down
    /*  */"accSagittalDoubleSharp5v7kDown": "\uE332",   // Double sharp 5:7k-down
    /*  */"accSagittalDoubleFlat5v7kUp": "\uE333",   // Double flat 5:7k-up
    /*  */"accSagittalDoubleSharp": "\uE334", // Double sharp, (2 apotomes up)[almost all EDOs], whole-tone up
    /*  */"accSagittalDoubleFlat": "\uE335", // Double flat, (2 apotomes down)[almost all EDOs], whole-tone down
    /*  */"accSagittal7v11KleismaUp": "\uE340", // 7:11 kleisma up, (7:11k, ~29k)
    /*  */"accSagittal7v11KleismaDown": "\uE341", // 7:11 kleisma down
    /*  */"accSagittal17CommaUp": "\uE342",   // 17 comma up, (17C)
    /*  */"accSagittal17CommaDown": "\uE343",   // 17 comma down
    /*  */"accSagittal55CommaUp": "\uE344",   // 55 comma up, (55C, 11M less 5C), 3°up [96 EDO], 3/16-tone up
    /*  */"accSagittal55CommaDown": "\uE345",   // 55 comma down, 3° down [96 EDO], 3/16-tone down
    /*  */"accSagittal7v11CommaUp": "\uE346", // 7:11 comma up, (7:11C, ~13:17S, ~29S, 11L less 7C), 1° up [60 EDO]
    /*  */"accSagittal7v11CommaDown": "\uE347", // 7:11 comma down, 1° down [60 EDO], 1/10-tone down
    /*  */"accSagittal5v11SmallDiesisUp": "\uE348",   // 5:11 small diesis up, (5:11S, ~7:13S, ~11:17S, 5:7k plus 7:11C)
    /*  */"accSagittal5v11SmallDiesisDown": "\uE349",   // 5:11 small diesis down
    /*  */"accSagittalSharp5v11SDown": "\uE34A",    // Sharp 5:11S-down
    /*  */"accSagittalFlat5v11SUp": "\uE34B",    // Flat 5:11S-up
    /*  */"accSagittalSharp7v11CDown": "\uE34C",    // Sharp 7:11C-down, 4° up [60 EDO], 2/5-tone up
    /*  */"accSagittalFlat7v11CUp": "\uE34D",    // Flat 7:11C-up, 4° down [60 EDO], 2/5-tone down
    /*  */"accSagittalSharp55CDown": "\uE34E",  // Sharp 55C-down, 5° up [96 EDO], 5/16-tone up
    /*  */"accSagittalFlat55CUp": "\uE34F",  // Flat 55C-up, 5° down [96 EDO], 5/16-tone down
    /*  */"accSagittalSharp17CDown": "\uE350",  // Sharp 17C-down
    /*  */"accSagittalFlat17CUp": "\uE351",  // Flat 17C-up
    /*  */"accSagittalSharp7v11kDown": "\uE352",    // Sharp 7:11k-down
    /*  */"accSagittalFlat7v11kUp": "\uE353",    // Flat 7:11k-up
    /*  */"accSagittalSharp7v11kUp": "\uE354",    // Sharp 7:11k-up
    /*  */"accSagittalFlat7v11kDown": "\uE355",    // Flat 7:11k-down
    /*  */"accSagittalSharp17CUp": "\uE356",  // Sharp 17C-up
    /*  */"accSagittalFlat17CDown": "\uE357",  // Flat 17C-down
    /*  */"accSagittalSharp55CUp": "\uE358",  // Sharp 55C-up, 11° up [96 EDO], 11/16-tone up
    /*  */"accSagittalFlat55CDown": "\uE359",  // Flat 55C-down, 11° down [96 EDO], 11/16-tone down
    /*  */"accSagittalSharp7v11CUp": "\uE35A",    // Sharp 7:11C-up, 6° up [60 EDO], 3/5- tone up
    /*  */"accSagittalFlat7v11CDown": "\uE35B",    // Flat 7:11C-down, 6° down [60 EDO], 3/5- tone down
    /*  */"accSagittalSharp5v11SUp": "\uE35C",    // Sharp 5:11S-up
    /*  */"accSagittalFlat5v11SDown": "\uE35D",    // Flat 5:11S-down
    /*  */"accSagittalDoubleSharp5v11SDown": "\uE35E",  // Double sharp 5:11S-down
    /*  */"accSagittalDoubleFlat5v11SUp": "\uE35F",  // Double flat 5:11S-up
    /*  */"accSagittalDoubleSharp7v11CDown": "\uE360",  // Double sharp 7:11C-down, 9° up [60 EDO], 9/10-tone up
    /*  */"accSagittalDoubleFlat7v11CUp": "\uE361",  // Double flat 7:11C-up, 9° down [60 EDO], 9/10-tone down
    /*  */"accSagittalDoubleSharp55CDown": "\uE362",    // Double sharp 55C-down, 13° up [96 EDO], 13/16-tone up
    /*  */"accSagittalDoubleFlat55CUp": "\uE363",    // Double flat 55C-up, 13° down [96 EDO], 13/16-tone down
    /*  */"accSagittalDoubleSharp17CDown": "\uE364",    // Double sharp 17C-down
    /*  */"accSagittalDoubleFlat17CUp": "\uE365",    // Double flat 17C-up
    /*  */"accSagittalDoubleSharp7v11kDown": "\uE366",  // Double sharp 7:11k-down
    /*  */"accSagittalDoubleFlat7v11kUp": "\uE367",  // Double flat 7:11k-up
    /*  */"accSagittal23CommaUp": "\uE370",   // 23 comma up, (23C), 2° up [96 EDO], 1/8-tone up
    /*  */"accSagittal23CommaDown": "\uE371",   // 23 comma down, 2° down [96 EDO], 1/8-tone down
    /*  */"accSagittal5v19CommaUp": "\uE372", // 5:19 comma up, (5:19C, 5C plus 19s), 1/20-tone up
    /*  */"accSagittal5v19CommaDown": "\uE373", // 5:19 comma down, 1/20-tone down
    /*  */"accSagittal5v23SmallDiesisUp": "\uE374",   // 5:23 small diesis up, (5:23S, 5C plus 23C), 2° up [60 EDO], 1/5-tone up
    /*  */"accSagittal5v23SmallDiesisDown": "\uE375",   // 5:23 small diesis down, 2° down [60 EDO], 1/5-tone down
    /*  */"accSagittalSharp5v23SDown": "\uE376",    // Sharp 5:23S-down, 3° up [60 EDO], 3/10-tone up
    /*  */"accSagittalFlat5v23SUp": "\uE377",    // Flat 5:23S-up, 3° down [60 EDO], 3/10-tone down
    /*  */"accSagittalSharp5v19CDown": "\uE378",    // Sharp 5:19C-down, 9/20-tone up
    /*  */"accSagittalFlat5v19CUp": "\uE379",    // Flat 5:19C-up, 9/20-tone down
    /*  */"accSagittalSharp23CDown": "\uE37A",  // Sharp 23C-down, 6° up [96 EDO], 3/8-tone up
    /*  */"accSagittalFlat23CUp": "\uE37B",  // Flat 23C-up, 6° down [96 EDO], 3/8-tone down
    /*  */"accSagittalSharp23CUp": "\uE37C",  // Sharp 23C-up, 10° up [96 EDO], 5/8-tone up
    /*  */"accSagittalFlat23CDown": "\uE37D",  // Flat 23C-down, 10° down [96 EDO], 5/8-tone down
    /*  */"accSagittalSharp5v19CUp": "\uE37E",    // Sharp 5:19C-up, 11/20-tone up
    /*  */"accSagittalFlat5v19CDown": "\uE37F",    // Flat 5:19C-down, 11/20-tone down
    /*  */"accSagittalSharp5v23SUp": "\uE380",    // Sharp 5:23S-up, 7° up [60 EDO], 7/10-tone up
    /*  */"accSagittalFlat5v23SDown": "\uE381",    // Flat 5:23S-down, 7° down [60 EDO], 7/10-tone down
    /*  */"accSagittalDoubleSharp5v23SDown": "\uE382",  // Double sharp 5:23S-down, 8° up [60 EDO], 4/5-tone up
    /*  */"accSagittalDoubleFlat5v23SUp": "\uE383",  // Double flat 5:23S-up, 8° down  [60 EDO], 4/5-tone down
    /*  */"accSagittalDoubleSharp5v19CDown": "\uE384",  // Double sharp 5:19C-down, 19/20-tone up
    /*  */"accSagittalDoubleFlat5v19CUp": "\uE385",  // Double flat 5:19C-up, 19/20-tone down
    /*  */"accSagittalDoubleSharp23CDown": "\uE386",    // Double sharp 23C-down, 14°up [96 EDO], 7/8-tone up
    /*  */"accSagittalDoubleFlat23CUp": "\uE387",    // Double flat 23C-up, 14° down [96 EDO], 7/8-tone down
    /*  */"accSagittal19SchismaUp": "\uE390",   // 19 schisma up, (19s)
    /*  */"accSagittal19SchismaDown": "\uE391",   // 19 schisma down
    /*  */"accSagittal17KleismaUp": "\uE392",   // 17 kleisma up, (17k)
    /*  */"accSagittal17KleismaDown": "\uE393",   // 17 kleisma down
    /*  */"accSagittal143CommaUp": "\uE394",  // 143 comma up, (143C, 13L less 11M)
    /*  */"accSagittal143CommaDown": "\uE395",  // 143 comma down
    /*  */"accSagittal11v49CommaUp": "\uE396",    // 11:49 comma up, (11:49C, 11M less 49C)
    /*  */"accSagittal11v49CommaDown": "\uE397",    // 11:49 comma down
    /*  */"accSagittal19CommaUp": "\uE398",   // 19 comma up, (19C)
    /*  */"accSagittal19CommaDown": "\uE399",   // 19 comma down
    /*  */"accSagittal7v19CommaUp": "\uE39A", // 7:19 comma up, (7:19C, 7C less 19s)
    /*  */"accSagittal7v19CommaDown": "\uE39B", // 7:19 comma down
    /*  */"accSagittal49SmallDiesisUp": "\uE39C", // 49 small diesis up, (49S, ~31S)
    /*  */"accSagittal49SmallDiesisDown": "\uE39D", // 49 small diesis down
    /*  */"accSagittal23SmallDiesisUp": "\uE39E", // 23 small diesis up, (23S)
    /*  */"accSagittal23SmallDiesisDown": "\uE39F", // 23 small diesis down
    /*  */"accSagittal5v13MediumDiesisUp": "\uE3A0",   // 5:13 medium diesis up, (5:13M, ~37M, 5C plus 13C)
    /*  */"accSagittal5v13MediumDiesisDown": "\uE3A1",   // 5:13 medium diesis down
    /*  */"accSagittal11v19MediumDiesisUp": "\uE3A2",  // 11:19 medium diesis up, (11:19M, 11M plus 19s)
    /*  */"accSagittal11v19MediumDiesisDown": "\uE3A3",  // 11:19 medium diesis down
    /*  */"accSagittal49MediumDiesisUp": "\uE3A4", // 49 medium diesis up, (49M, ~31M, 7C plus 7C)
    /*  */"accSagittal49MediumDiesisDown": "\uE3A5", // 49 medium diesis down
    /*  */"accSagittal5v49MediumDiesisUp": "\uE3A6",   // 5:49 medium diesis up, (5:49M, half apotome)
    /*  */"accSagittal5v49MediumDiesisDown": "\uE3A7",   // 5:49 medium diesis down
    /*  */"accSagittal49LargeDiesisUp": "\uE3A8", // 49 large diesis up, (49L, ~31L, apotome less 49M)
    /*  */"accSagittal49LargeDiesisDown": "\uE3A9", // 49 large diesis down
    /*  */"accSagittal11v19LargeDiesisUp": "\uE3AA",  // 11:19 large diesis up, (11:19L, apotome less 11:19M)
    /*  */"accSagittal11v19LargeDiesisDown": "\uE3AB",  // 11:19 large diesis down
    /*  */"accSagittal5v13LargeDiesisUp": "\uE3AC",   // 5:13 large diesis up, (5:13L, ~37L, apotome less 5:13M)
    /*  */"accSagittal5v13LargeDiesisDown": "\uE3AD",   // 5:13 large diesis down
    /*  */"accSagittalSharp23SDown": "\uE3B0",  // Sharp 23S-down
    /*  */"accSagittalFlat23SUp": "\uE3B1",  // Flat 23S-up
    /*  */"accSagittalSharp49SDown": "\uE3B2",  // Sharp 49S-down
    /*  */"accSagittalFlat49SUp": "\uE3B3",  // Flat 49S-up
    /*  */"accSagittalSharp7v19CDown": "\uE3B4",    // Sharp 7:19C-down
    /*  */"accSagittalFlat7v19CUp": "\uE3B5",    // Flat 7:19C-up
    /*  */"accSagittalSharp19CDown": "\uE3B6",  // Sharp 19C-down
    /*  */"accSagittalFlat19CUp": "\uE3B7",  // Flat 19C-up
    /*  */"accSagittalSharp11v49CDown": "\uE3B8",   // Sharp 11:49C-down
    /*  */"accSagittalFlat11v49CUp": "\uE3B9",   // Flat 11:49C-up
    /*  */"accSagittalSharp143CDown": "\uE3BA", // Sharp 143C-down
    /*  */"accSagittalFlat143CUp": "\uE3BB", // Flat 143C-up
    /*  */"accSagittalSharp17kDown": "\uE3BC",  // Sharp 17k-down
    /*  */"accSagittalFlat17kUp": "\uE3BD",  // Flat 17k-up
    /*  */"accSagittalSharp19sDown": "\uE3BE",  // Sharp 19s-down
    /*  */"accSagittalFlat19sUp": "\uE3BF",  // Flat 19s-up
    /*  */"accSagittalSharp19sUp": "\uE3C0",  // Sharp 19s-up
    /*  */"accSagittalFlat19sDown": "\uE3C1",  // Flat 19s-down
    /*  */"accSagittalSharp17kUp": "\uE3C2",  // Sharp 17k-up
    /*  */"accSagittalFlat17kDown": "\uE3C3",  // Flat 17k-down
    /*  */"accSagittalSharp143CUp": "\uE3C4", // Sharp 143C-up
    /*  */"accSagittalFlat143CDown": "\uE3C5", // Flat 143C-down
    /*  */"accSagittalSharp11v49CUp": "\uE3C6",   // Sharp 11:49C-up
    /*  */"accSagittalFlat11v49CDown": "\uE3C7",   // Flat 11:49C-down
    /*  */"accSagittalSharp19CUp": "\uE3C8",  // Sharp 19C-up
    /*  */"accSagittalFlat19CDown": "\uE3C9",  // Flat 19C-down
    /*  */"accSagittalSharp7v19CUp": "\uE3CA",    // Sharp 7:19C-up
    /*  */"accSagittalFlat7v19CDown": "\uE3CB",    // Flat 7:19C-down
    /*  */"accSagittalSharp49SUp": "\uE3CC",  // Sharp 49S-up
    /*  */"accSagittalFlat49SDown": "\uE3CD",  // Flat 49S-down
    /*  */"accSagittalSharp23SUp": "\uE3CE",  // Sharp 23S-up
    /*  */"accSagittalFlat23SDown": "\uE3CF",  // Flat 23S-down
    /*  */"accSagittalSharp5v13MUp": "\uE3D0",    // Sharp 5:13M-up
    /*  */"accSagittalFlat5v13MDown": "\uE3D1",    // Flat 5:13M-down
    /*  */"accSagittalSharp11v19MUp": "\uE3D2",   // Sharp 11:19M-up
    /*  */"accSagittalFlat11v19MDown": "\uE3D3",   // Flat 11:19M-down
    /*  */"accSagittalSharp49MUp": "\uE3D4",  // Sharp 49M-up
    /*  */"accSagittalFlat49MDown": "\uE3D5",  // Flat 49M-down
    /*  */"accSagittalSharp5v49MUp": "\uE3D6",    // Sharp 5:49M-up, (one and a half apotomes)
    /*  */"accSagittalFlat5v49MDown": "\uE3D7",    // Flat 5:49M-down
    /*  */"accSagittalSharp49LUp": "\uE3D8",  // Sharp 49L-up
    /*  */"accSagittalFlat49LDown": "\uE3D9",  // Flat 49L-down
    /*  */"accSagittalSharp11v19LUp": "\uE3DA",   // Sharp 11:19L-up
    /*  */"accSagittalFlat11v19LDown": "\uE3DB",   // Flat 11:19L-down
    /*  */"accSagittalSharp5v13LUp": "\uE3DC",    // Sharp 5:13L-up
    /*  */"accSagittalFlat5v13LDown": "\uE3DD",    // Flat 5:13L-down
    /*  */"accSagittalUnused3": "\uE3DE",    //	Unused
    /*  */"accSagittalUnused4": "\uE3DF",    //	Unused
    /*  */"accSagittalDoubleSharp23SDown": "\uE3E0",    // Double sharp 23S-down
    /*  */"accSagittalDoubleFlat23SUp": "\uE3E1",    // Double flat 23S-up
    /*  */"accSagittalDoubleSharp49SDown": "\uE3E2",    // Double sharp 49S-down
    /*  */"accSagittalDoubleFlat49SUp": "\uE3E3",    // Double flat 49S-up
    /*  */"accSagittalDoubleSharp7v19CDown": "\uE3E4",  // Double sharp 7:19C-down
    /*  */"accSagittalDoubleFlat7v19CUp": "\uE3E5",  // Double flat 7:19C-up
    /*  */"accSagittalDoubleSharp19CDown": "\uE3E6",    // Double sharp 19C-down
    /*  */"accSagittalDoubleFlat19CUp": "\uE3E7",    // Double flat 19C-up
    /*  */"accSagittalDoubleSharp11v49CDown": "\uE3E8", // Double sharp 11:49C-down
    /*  */"accSagittalDoubleFlat11v49CUp": "\uE3E9", // Double flat 11:49C-up
    /*  */"accSagittalDoubleSharp143CDown": "\uE3EA",   // Double sharp 143C-down
    /*  */"accSagittalDoubleFlat143CUp": "\uE3EB",   // Double flat 143C-up
    /*  */"accSagittalDoubleSharp17kDown": "\uE3EC",    // Double sharp 17k-down
    /*  */"accSagittalDoubleFlat17kUp": "\uE3ED",    // Double flat 17k-up
    /*  */"accSagittalDoubleSharp19sDown": "\uE3EE",    // Double sharp 19s-down
    /*  */"accSagittalDoubleFlat19sUp": "\uE3EF",    // Double flat 19s-up
    /*  */"accSagittalShaftUp": "\uE3F0", // Shaft up, (natural for use with only diacritics up)
    /*  */"accSagittalShaftDown": "\uE3F1", // Shaft down, (natural for use with only diacritics down)
    /*  */"accSagittalAcute": "\uE3F2",   // Acute, 5 schisma up (5s), 2 cents up
    /*  */"accSagittalGrave": "\uE3F3",   // Grave, 5 schisma down, 2 cents down
    /*  */"accSagittal1MinaUp": "\uE3F4",    // 1 mina up, 1/(5⋅7⋅13)-schismina up, 0.42 cents up
    /*  */"accSagittal1MinaDown": "\uE3F5",    // 1 mina down, 1/(5⋅7⋅13)-schismina down, 0.42 cents down
    /*  */"accSagittal2MinasUp": "\uE3F6",    // 2 minas up, 65/77-schismina up, 0.83 cents up
    /*  */"accSagittal2MinasDown": "\uE3F7",    // 2 minas down, 65/77-schismina down, 0.83 cents down
    /*  */"accSagittal1TinaUp": "\uE3F8",    // 1 tina up, 7²⋅11⋅19/5-schismina up, 0.17 cents up
    /*  */"accSagittal1TinaDown": "\uE3F9",    // 1 tina down, 7²⋅11⋅19/5-schismina down, 0.17 cents down
    /*  */"accSagittal2TinasUp": "\uE3FA",    // 2 tinas up, 1/(7³⋅17)-schismina up, 0.30 cents up
    /*  */"accSagittal2TinasDown": "\uE3FB",    // 2 tinas down, 1/(7³⋅17)-schismina down, 0.30 cents down
    /*  */"accSagittal3TinasUp": "\uE3FC",    // 3 tinas up, 1 mina up, 1/(5⋅7⋅13)-schismina up, 0.42 cents up
    /*  */"accSagittal3TinasDown": "\uE3FD",    // 3 tinas down, 1 mina down, 1/(5⋅7⋅13)-schismina down, 0.42 cents down
    /*  */"accSagittal4TinasUp": "\uE3FE",    // 4 tinas up, 5²⋅11²/7-schismina up, 0.57 cents up
    /*  */"accSagittal4TinasDown": "\uE3FF",    // 4 tinas down, 5²⋅11²/7-schismina down, 0.57 cents down
    /*  */"accSagittal5TinasUp": "\uE400",    // 5 tinas up, 7⁴/25-schismina up, 0.72 cents up
    /*  */"accSagittal5TinasDown": "\uE401",    // 5 tinas down, 7⁴/25-schismina down, 0.72 cents down
    /*  */"accSagittal6TinasUp": "\uE402",    // 6 tinas up, 2 minas up, 65/77-schismina up, 0.83 cents up
    /*  */"accSagittal6TinasDown": "\uE403",    // 6 tinas down, 2 minas down, 65/77-schismina down, 0.83 cents down
    /*  */"accSagittal7TinasUp": "\uE404",    // 7 tinas up, 7/(5²⋅17)-schismina up, 1.02 cents up
    /*  */"accSagittal7TinasDown": "\uE405",    // 7 tinas down, 7/(5²⋅17)-schismina down, 1.02 cents down
    /*  */"accSagittal8TinasUp": "\uE406",    // 8 tinas up, 11⋅17/(5²⋅7)-schismina up, 1.14 cents up
    /*  */"accSagittal8TinasDown": "\uE407",    // 8 tinas down, 11⋅17/(5²⋅7)-schismina down, 1.14 cents down
    /*  */"accSagittal9TinasUp": "\uE408",    // 9 tinas up, 1/(7²⋅11)-schismina up, 1.26 cents up
    /*  */"accSagittal9TinasDown": "\uE409",    // 9 tinas down, 1/(7²⋅11)-schismina down, 1.26 cents down
    /*  */"accSagittalFractionalTinaUp": "\uE40A",   // Fractional tina up, 77/(5⋅37)-schismina up, 0.08 cents up
    /*  */"accSagittalFractionalTinaDown": "\uE40B",   // Fractional tina down, 77/(5⋅37)-schismina down, 0.08 cents down
    /*  */"accidentalWyschnegradsky1TwelfthsSharp": "\uE420",    // 1/12 tone sharp
    /*  */"accidentalWyschnegradsky2TwelfthsSharp": "\uE421",    // 1/6 tone sharp
    /*  */"accidentalWyschnegradsky3TwelfthsSharp": "\uE422",    // 1/4 tone sharp
    /*  */"accidentalWyschnegradsky4TwelfthsSharp": "\uE423",    // 1/3 tone sharp
    /*  */"accidentalWyschnegradsky5TwelfthsSharp": "\uE424",    // 5/12 tone sharp
    /*  */"accidentalWyschnegradsky6TwelfthsSharp": "\uE425",    // 1/2 tone sharp
    /*  */"accidentalWyschnegradsky7TwelfthsSharp": "\uE426",    // 7/12 tone sharp
    /*  */"accidentalWyschnegradsky8TwelfthsSharp": "\uE427",    // 2/3 tone sharp
    /*  */"accidentalWyschnegradsky9TwelfthsSharp": "\uE428",    // 3/4 tone sharp
    /*  */"accidentalWyschnegradsky10TwelfthsSharp": "\uE429",   // 5/6 tone sharp
    /*  */"accidentalWyschnegradsky11TwelfthsSharp": "\uE42A",   // 11/12 tone sharp
    /*  */"accidentalWyschnegradsky1TwelfthsFlat": "\uE42B",    // 1/12 tone flat
    /*  */"accidentalWyschnegradsky2TwelfthsFlat": "\uE42C",    // 1/6 tone flat
    /*  */"accidentalWyschnegradsky3TwelfthsFlat": "\uE42D",    // 1/4 tone flat
    /*  */"accidentalWyschnegradsky4TwelfthsFlat": "\uE42E",    // 1/3 tone flat
    /*  */"accidentalWyschnegradsky5TwelfthsFlat": "\uE42F",    // 5/12 tone flat
    /*  */"accidentalWyschnegradsky6TwelfthsFlat": "\uE430",    // 1/2 tone flat
    /*  */"accidentalWyschnegradsky7TwelfthsFlat": "\uE431",    // 7/12 tone flat
    /*  */"accidentalWyschnegradsky8TwelfthsFlat": "\uE432",    // 2/3 tone flat
    /*  */"accidentalWyschnegradsky9TwelfthsFlat": "\uE433",    // 3/4 tone flat
    /*  */"accidentalWyschnegradsky10TwelfthsFlat": "\uE434",   // 5/6 tone flat
    /*  */"accidentalWyschnegradsky11TwelfthsFlat": "\uE435",   // 11/12 tone flat
    /*  */"accidentalBuyukMucennebFlat": "\uE440", // Büyük mücenneb (flat)
    /*  */"accidentalKucukMucennebFlat": "\uE441", // Küçük mücenneb (flat)
    /*  */"accidentalBakiyeFlat": "\uE442",   // Bakiye (flat)
    /*  */"accidentalKomaFlat": "\uE443",   // Koma (flat)
    /*  */"accidentalKomaSharp": "\uE444",   // Koma (sharp)
    /*  */"accidentalBakiyeSharp": "\uE445",   // Bakiye (sharp)
    /*  */"accidentalKucukMucennebSharp": "\uE446", // Küçük mücenneb (sharp)
    /*  */"accidentalBuyukMucennebSharp": "\uE447", // Büyük mücenneb (sharp)
    /*  */"accidental1CommaSharp": "\uE450",  // 1-comma sharp
    /*  */"accidental2CommaSharp": "\uE451",  // 2-comma sharp
    /*  */"accidental3CommaSharp": "\uE452",  // 3-comma sharp
    /*  */"accidental5CommaSharp": "\uE453",  // 5-comma sharp
    /*  */"accidental1CommaFlat": "\uE454",  // 1-comma flat
    /*  */"accidental2CommaFlat": "\uE455",  // 2-comma flat
    /*  */"accidental3CommaFlat": "\uE456",  // 3-comma flat
    /*  */"accidental4CommaFlat": "\uE457",  // 4-comma flat
    /*  */"accidentalKoron": "\uE460", // Koron (quarter tone flat)
    /*  */"accidentalSori": "\uE461", // Sori (quarter tone sharp)
    /*  */"accidentalXenakisOneThirdToneSharp": "\uE470", // One-third-tone sharp (Xenakis)
    /*  */"accidentalXenakisTwoThirdTonesSharp": "\uE471", // Two-third-tones sharp (Xenakis)
    /*  */"accidentalQuarterToneSharpBusotti": "\uE472",   // Quarter tone sharp (Bussotti)
    /*  */"accidentalSharpOneHorizontalStroke": "\uE473",   // One or three quarter tones sharp
    /*  */"accidentalThreeQuarterTonesSharpBusotti": "\uE474", // Three quarter tones sharp (Bussotti)
    /*  */"accidentalQuarterToneSharpWiggle": "\uE475",   // Quarter tone sharp with wiggly tail
    /*  */"accidentalTavenerSharp": "\uE476",   // Byzantine-style Büyuük muücenneb sharp (Tavener)
    /*  */"accidentalTavenerFlat": "\uE477",   // Byzantine-style Bakiye flat (Tavener)
    /*  */"accidentalQuarterToneFlatPenderecki": "\uE478",   // Quarter tone flat (Penderecki)
    /*  */"accidentalCommaSlashUp": "\uE479", // Syntonic/Didymus comma (80:81) up (Bosanquet)
    /*  */"accidentalCommaSlashDown": "\uE47A", // Syntonic/Didymus comma (80:81) down (Bosanquet)
    /*  */"accidentalWilsonPlus": "\uE47B",   // Wilson plus (5 comma up)
    /*  */"accidentalWilsonMinus": "\uE47C",   // Wilson minus (5 comma down)
    /*  */"accidentalLargeDoubleSharp": "\uE47D",  // Large double sharp
    /*  */"accidentalQuarterToneSharp4": "\uE47E",    // Quarter-tone sharp
    /*  */"accidentalQuarterToneFlat4": "\uE47F",    // Quarter-tone flat
    /*  */"accidentalQuarterToneFlatFilledReversed": "\uE480", // Filled reversed flat (quarter-tone flat)
    /*  */"accidentalSharpReversed": "\uE481",   // Reversed sharp
    /*  */"accidentalNaturalReversed": "\uE482",   // Reversed natural
    /*  */"accidentalDoubleFlatReversed": "\uE483", // Reversed double flat
    /*  */"accidentalFlatTurned": "\uE484",   // Turned flat
    /*  */"accidentalDoubleFlatTurned": "\uE485", // Turned double flat
    /*  */"accidentalThreeQuarterTonesFlatGrisey": "\uE486", // Three-quarter-tones flat (Grisey)
    /*  */"accidentalThreeQuarterTonesFlatTartini": "\uE487", // Three-quarter-tones flat (Tartini)
    /*  */"accidentalQuarterToneFlatVanBlankenburg": "\uE488", // Quarter-tone flat (van Blankenburg)
    /*  */"accidentalThreeQuarterTonesFlatCouper": "\uE489", // Three-quarter-tones flat (Couper)
    /*  */"accidentalOneThirdToneSharpFerneyhough": "\uE48A", // One-third-tone sharp (Ferneyhough)
    /*  */"accidentalOneThirdToneFlatFerneyhough": "\uE48B", // One-third-tone flat (Ferneyhough)
    /*  */"accidentalTwoThirdTonesSharpFerneyhough": "\uE48C", // Two-third-tones sharp (Ferneyhough)
    /*  */"accidentalTwoThirdTonesFlatFerneyhough": "\uE48D", // Two-third-tones flat (Ferneyhough)
    /*  */"accidentalOneQuarterToneSharpFerneyhough": "\uE48E", // One-quarter-tone sharp (Ferneyhough)
    /*  */"accidentalOneQuarterToneFlatFerneyhough": "\uE48F", // One-quarter-tone flat (Ferneyhough)
    /*  */"articAccentAbove": "\uE4A0",   // Accent above
    /*  */"articAccentBelow": "\uE4A1",   // Accent below
    /*  */"articStaccatoAbove": "\uE4A2",   // Staccato above
    /*  */"articStaccatoBelow": "\uE4A3",   // Staccato below
    /*  */"articTenutoAbove": "\uE4A4",   // Tenuto above
    /*  */"articTenutoBelow": "\uE4A5",   // Tenuto below
    /*  */"articStaccatissimoAbove": "\uE4A6",   // Staccatissimo above
    /*  */"articStaccatissimoBelow": "\uE4A7",   // Staccatissimo below
    /*  */"articStaccatissimoWedgeAbove": "\uE4A8", // Staccatissimo wedge above
    /*  */"articStaccatissimoWedgeBelow": "\uE4A9", // Staccatissimo wedge below
    /*  */"articStaccatissimoStrokeAbove": "\uE4AA", // Staccatissimo stroke above
    /*  */"articStaccatissimoStrokeBelow": "\uE4AB", // Staccatissimo stroke below
    /*  */"articMarcatoAbove": "\uE4AC",   // Marcato above
    /*  */"articMarcatoBelow": "\uE4AD",   // Marcato below
    /*  */"articMarcatoStaccatoAbove": "\uE4AE", // Marcato-staccato above
    /*  */"articMarcatoStaccatoBelow": "\uE4AF", // Marcato-staccato below
    /*  */"articAccentStaccatoAbove": "\uE4B0", // Accent-staccato above
    /*  */"articAccentStaccatoBelow": "\uE4B1", // Accent-staccato below
    /*  */"articTenutoStaccatoAbove": "\uE4B2", // Louré (tenuto-staccato) above
    /*  */"articTenutoStaccatoBelow": "\uE4B3", // Louré (tenuto-staccato) below
    /*  */"articTenutoAccentAbove": "\uE4B4", // Tenuto-accent above
    /*  */"articTenutoAccentBelow": "\uE4B5", // Tenuto-accent below
    /*  */"articStressAbove": "\uE4B6",    // Stress above
    /*  */"articStressBelow": "\uE4B7",    // Stress below
    /*  */"articUnstressAbove": "\uE4B8",   // Unstress above
    /*  */"articUnstressBelow": "\uE4B9",   // Unstress below
    /*  */"articLaissezVibrerAbove": "\uE4BA", // Laissez vibrer (l.v.) above
    /*  */"articLaissezVibrerBelow": "\uE4BB", // Laissez vibrer (l.v.) below
    /*  */"articMarcatoTenutoAbove": "\uE4BC", // Marcato-tenuto above
    /*  */"articMarcatoTenutoBelow": "\uE4BD", // Marcato-tenuto below
    /*  */"fermataAbove": "\uE4C0", // Fermata above
    /*  */"fermataBelow": "\uE4C1", // Fermata below
    /*  */"fermataVeryShortAbove": "\uE4C2", // Very short fermata above
    /*  */"fermataVeryShortBelow": "\uE4C3", // Very short fermata below
    /*  */"fermataShortAbove": "\uE4C4", // Short fermata above
    /*  */"fermataShortBelow": "\uE4C5", // Short fermata below
    /*  */"fermataLongAbove": "\uE4C6", // Long fermata above
    /*  */"fermataLongBelow": "\uE4C7", // Long fermata below
    /*  */"fermataVeryLongAbove": "\uE4C8", // Very long fermata above
    /*  */"fermataVeryLongBelow": "\uE4C9", // Very long fermata below
    /*  */"fermataLongHenzeAbove": "\uE4CA", // Long fermata (Henze) above
    /*  */"fermataLongHenzeBelow": "\uE4CB", // Long fermata (Henze) below
    /*  */"fermataShortHenzeAbove": "\uE4CC", // Short fermata (Henze) above
    /*  */"fermataShortHenzeBelow": "\uE4CD", // Short fermata (Henze) below
    /*  */"breathMarkComma": "\uE4CE", // Breath mark (comma)
    /*  */"breathMarkTick": "\uE4CF", // Breath mark (tick-like)
    /*  */"breathMarkUpbow": "\uE4D0", // Breath mark (upbow-like)
    /*  */"caesura": "\uE4D1", // Caesura
    /*  */"caesuraThick": "\uE4D2", // Thick caesura
    /*  */"caesuraShort": "\uE4D3", // Short caesura
    /*  */"caesuraCurved": "\uE4D4", // Curved caesura
    /*  */"breathMarkSalzedo": "\uE4D5", // Breath mark (Salzedo)
    /*  */"curlewSign": "\uE4D6", // Curlew (Britten)
    /*  */"caesuraSingleStroke": "\uE4D7", // Single stroke caesura
    /*  */"restMaxima": "\uE4E0", // Maxima rest
    /*  */"restLonga": "\uE4E1", // Longa rest
    /*  */"restDoubleWhole": "\uE4E2", // Double whole (breve) rest
    /*  */"restWhole": "\uE4E3", // Whole (semibreve) rest
    /*  */"restHalf": "\uE4E4", // Half (minim) rest
    /*  */"restQuarter": "\uE4E5", // Quarter (crotchet) rest
    /*  */"rest8th": "\uE4E6", // Eighth (quaver) rest
    /*  */"rest16th": "\uE4E7", // 16th (semiquaver) rest
    /*  */"rest32nd": "\uE4E8", // 32nd (demisemiquaver) rest
    /*  */"rest64th": "\uE4E9", // 64th (hemidemisemiquaver) rest
    /*  */"rest128th": "\uE4EA", // 128th (semihemidemisemiquaver) rest
    /*  */"rest256th": "\uE4EB", // 256th rest
    /*  */"rest512th": "\uE4EC", // 512th rest
    /*  */"rest1024th": "\uE4ED", // 1024th rest
    /*  */"restHBar": "\uE4EE", // Multiple measure rest
    /*  */"restHBarLeft": "\uE4EF", // H-bar, left half
    /*  */"restHBarMiddle": "\uE4F0", // H-bar, middle
    /*  */"restHBarRight": "\uE4F1", // H-bar, right half
    /*  */"restQuarterOld": "\uE4F2", // Old-style quarter (crotchet) rest
    /*  */"restDoubleWholeLegerLine": "\uE4F3", // Double whole rest on leger lines
    /*  */"restWholeLegerLine": "\uE4F4", // Whole rest on leger line
    /*  */"restHalfLegerLine": "\uE4F5", // Half rest on leger line
    /*  */"restQuarterZ": "\uE4F6", // Z-style quarter (crotchet) rest
    /*  */"repeat1Bar": "\uE500", // Repeat last bar
    /*  */"repeat2Bars": "\uE501", // Repeat last two bars
    /*  */"repeat4Bars": "\uE502", // Repeat last four bars
    /*  */"repeatBarUpperDot": "\uE503", // Repeat bar upper dot
    /*  */"repeatBarSlash": "\uE504", // Repeat bar slash
    /*  */"repeatBarLowerDot": "\uE505", // Repeat bar lower dot
    /*  */"ottava": "\uE510", // Ottava
    /*  */"ottavaAlta": "\uE511", // Ottava alta
    /*  */"ottavaBassa": "\uE512", // Ottava bassa
    /*  */"ottavaBassaBa": "\uE513", // Ottava bassa (ba)
    /*  */"quindicesima": "\uE514", // Quindicesima
    /*  */"quindicesimaAlta": "\uE515", // Quindicesima alta
    /*  */"quindicesimaBassa": "\uE516", // Quindicesima bassa
    /*  */"ventiduesima": "\uE517", // Ventiduesima
    /*  */"ventiduesimaAlta": "\uE518", // Ventiduesima alta
    /*  */"ventiduesimaBassa": "\uE519", // Ventiduesima bassa
    /*  */"octaveParensLeft": "\uE51A", // Left parenthesis for octave signs
    /*  */"octaveParensRight": "\uE51B", // Right parenthesis for octave signs
    /*  */"ottavaBassaVb": "\uE51C", // Ottava bassa (8vb)
    /*  */"quindicesimaBassaMb": "\uE51D", // Quindicesima bassa (mb)
    /*  */"ventiduesimaBassaMb": "\uE51E", // Ventiduesima bassa (mb)
    /*  */"octaveBassa": "\uE51F", // Bassa
    /*  */"dynamicPiano": "\uE520", // Piano
    /*  */"dynamicMezzo": "\uE521", // Mezzo
    /*  */"dynamicForte": "\uE522", // Forte
    /*  */"dynamicRinforzando": "\uE523", // Rinforzando
    /*  */"dynamicSforzando": "\uE524", // Sforzando
    /*  */"dynamicZ": "\uE525", // Z
    /*  */"dynamicNiente": "\uE526", // Niente
    /*  */"dynamicPPPPPP": "\uE527", // pppppp
    /*  */"dynamicPPPPP": "\uE528", // ppppp
    /*  */"dynamicPPPP": "\uE529", // pppp
    /*  */"dynamicPPP": "\uE52A", // ppp
    /*  */"dynamicPP": "\uE52B", // pp
    /*  */"dynamicMP": "\uE52C", // mp
    /*  */"dynamicMF": "\uE52D", // mf
    /*  */"dynamicPF": "\uE52E", // pf
    /*  */"dynamicFF": "\uE52F", // ff
    /*  */"dynamicFFF": "\uE530", // fff
    /*  */"dynamicFFFF": "\uE531", // ffff
    /*  */"dynamicFFFFF": "\uE532", // fffff
    /*  */"dynamicFFFFFF": "\uE533", // ffffff
    /*  */"dynamicFortePiano": "\uE534", // Forte-piano
    /*  */"dynamicForzando": "\uE535", // Forzando
    /*  */"dynamicSforzando1": "\uE536", // Sforzando 1
    /*  */"dynamicSforzandoPiano": "\uE537", // Sforzando-piano
    /*  */"dynamicSforzandoPianissimo": "\uE538", // Sforzando-pianissimo
    /*  */"dynamicSforzato": "\uE539", // Sforzato
    /*  */"dynamicSforzatoPiano": "\uE53A", // Sforzato-piano
    /*  */"dynamicSforzatoFF": "\uE53B", // Sforzatissimo
    /*  */"dynamicRinforzando1": "\uE53C", // Rinforzando 1
    /*  */"dynamicRinforzando2": "\uE53D", // Rinforzando 2
    /*  */"dynamicCrescendoHairpin": "\uE53E", // Crescendo
    /*  */"dynamicDiminuendoHairpin": "\uE53F", // Diminuendo
    /*  */"dynamicMessaDiVoce": "\uE540", // Messa di voce
    /*  */"dynamicNienteForHairpin": "\uE541", // Niente (for hairpins)
    /*  */"dynamicHairpinParenthesisLeft": "\uE542", // Left parenthesis (for hairpins)
    /*  */"dynamicHairpinParenthesisRight": "\uE543", // Right parenthesis (for hairpins)
    /*  */"dynamicHairpinBracketLeft": "\uE544", // Left bracket (for hairpins)
    /*  */"dynamicHairpinBracketRight": "\uE545", // Right bracket (for hairpins)
    /*  */"dynamicCombinedSeparatorColon": "\uE546", // Colon separator for combined dynamics
    /*  */"dynamicCombinedSeparatorHyphen": "\uE547", // Hyphen separator for combined dynamics
    /*  */"dynamicCombinedSeparatorSpace": "\uE548", // Space separator for combined dynamics
    /*  */"dynamicCombinedSeparatorSlash": "\uE549", // Slash separator for combined dynamics
    /*  */"lyricsElisionNarrow": "\uE550", // Narrow elision
    /*  */"lyricsElision": "\uE551", // Elision
    /*  */"lyricsElisionWide": "\uE552", // Wide elision
    /*  */"lyricsHyphenBaseline": "\uE553", // Baseline hyphen
    /*  */"lyricsHyphenBaselineNonBreaking": "\uE554", // Non-breaking baseline hyphen
    /*  */"lyricsTextRepeat": "\uE555", // Text repeats
    /*  */"graceNoteAcciaccaturaStemUp": "\uE560", // Slashed grace note stem up
    /*  */"graceNoteAcciaccaturaStemDown": "\uE561", // Slashed grace note stem down
    /*  */"graceNoteAppoggiaturaStemUp": "\uE562", // Grace note stem up
    /*  */"graceNoteAppoggiaturaStemDown": "\uE563", // Grace note stem down
    /*  */"graceNoteSlashStemUp": "\uE564", // Slash for stem up grace note
    /*  */"graceNoteSlashStemDown": "\uE565", // Slash for stem down grace note
    /*  */"ornamentTrill": "\uE566", // Trill
    /*  */"ornamentTurn": "\uE567", // Turn
    /*  */"ornamentTurnInverted": "\uE568", // Inverted turn
    /*  */"ornamentTurnSlash": "\uE569", // Turn with slash
    /*  */"ornamentTurnUp": "\uE56A", // Turn up
    /*  */"ornamentTurnUpS": "\uE56B", // Inverted turn up
    /*  */"ornamentShortTrill": "\uE56C", // Short trill
    /*  */"ornamentMordent": "\uE56D", // Mordent
    /*  */"ornamentTremblement": "\uE56E", // Tremblement
    /*  */"ornamentHaydn": "\uE56F", // Haydn ornament
    /*  */"ornamentPortDeVoixV": "\uE570", // Port de voix
    /*  */"ornamentRightFacingHalfCircle": "\uE571", // Right-facing half circle
    /*  */"ornamentLeftFacingHalfCircle": "\uE572", // Left-facing half circle
    /*  */"ornamentRightFacingHook": "\uE573", // Right-facing hook
    /*  */"ornamentLeftFacingHook": "\uE574", // Left-facing hook
    /*  */"ornamentHookBeforeNote": "\uE575", // Hook before note
    /*  */"ornamentHookAfterNote": "\uE576", // Hook after note
    /*  */"ornamentUpCurve": "\uE577", // Curve above
    /*  */"ornamentDownCurve": "\uE578", // Curve below
    /*  */"ornamentShortObliqueLineBeforeNote": "\uE579", // Short oblique straight line SW-NE
    /*  */"ornamentShortObliqueLineAfterNote": "\uE57A", // Short oblique straight line NW-SE
    /*  */"ornamentObliqueLineBeforeNote": "\uE57B", // Oblique straight line SW-NE
    /*  */"ornamentObliqueLineAfterNote": "\uE57C", // Oblique straight line NW-SE
    /*  */"ornamentDoubleObliqueLinesBeforeNote": "\uE57D", // Double oblique straight lines SW-NE
    /*  */"ornamentDoubleObliqueLinesAfterNote": "\uE57E", // Double oblique straight lines NW-SE
    /*  */"ornamentObliqueLineHorizBeforeNote": "\uE57F", // Oblique straight line tilted SW-NE
    /*  */"ornamentObliqueLineHorizAfterNote": "\uE580", // Oblique straight line tilted NW-SE
    /*  */"ornamentComma": "\uE581", // Comma
    /*  */"ornamentShake3": "\uE582", // Shake
    /*  */"ornamentVerticalLine": "\uE583", // Vertical line
    /*  */"ornamentShakeMuffat1": "\uE584", // Shake (Muffat)
    /*  */"glissandoUp": "\uE585", // Glissando up
    /*  */"glissandoDown": "\uE586", // Glissando down
    /*  */"ornamentSchleifer": "\uE587", // Schleifer (long mordent)
    /*  */"ornamentPinceCouperin": "\uE588", // Pincé (Couperin)
    /*  */"ornamentTremblementCouperin": "\uE589", // Tremblement appuyé (Couperin)
    /*  */"ornamentTopLeftConcaveStroke": "\uE590", // Ornament top left concave stroke
    /*  */"ornamentTopLeftConvexStroke": "\uE591", // Ornament top left convex stroke
    /*  */"ornamentHighLeftConcaveStroke": "\uE592", // Ornament high left concave stroke
    /*  */"ornamentHighLeftConvexStroke": "\uE593", // Ornament high left convex stroke
    /*  */"ornamentLeftVerticalStroke": "\uE594", // Ornament left vertical stroke
    /*  */"ornamentLeftVerticalStrokeWithCross": "\uE595", // Ornament left vertical stroke with cross (+)
    /*  */"ornamentLeftShakeT": "\uE596", // Ornament left shake t
    /*  */"ornamentLeftPlus": "\uE597", // Ornament left +
    /*  */"ornamentLowLeftConcaveStroke": "\uE598", // Ornament low left concave stroke
    /*  */"ornamentLowLeftConvexStroke": "\uE599", // Ornament low left convex stroke
    /*  */"ornamentBottomLeftConcaveStroke": "\uE59A", // Ornament bottom left concave stroke
    /*  */"ornamentBottomLeftConcaveStrokeLarge": "\uE59B", // Ornament bottom left concave stroke, large
    /*  */"ornamentBottomLeftConvexStroke": "\uE59C", // Ornament bottom left convex stroke
    /*  */"ornamentZigZagLineNoRightEnd": "\uE59D", // Ornament zig-zag line without right-hand end
    /*  */"ornamentZigZagLineWithRightEnd": "\uE59E", // Ornament zig-zag line with right-hand end
    /*  */"ornamentMiddleVerticalStroke": "\uE59F", // Ornament middle vertical stroke
    /*  */"ornamentTopRightConcaveStroke": "\uE5A0", // Ornament top right concave stroke
    /*  */"ornamentTopRightConvexStroke": "\uE5A1", // Ornament top right convex stroke
    /*  */"ornamentHighRightConcaveStroke": "\uE5A2", // Ornament high right concave stroke
    /*  */"ornamentHighRightConvexStroke": "\uE5A3", // Ornament high right convex stroke
    /*  */"ornamentRightVerticalStroke": "\uE5A4", // Ornament right vertical stroke
    /*  */"ornamentLowRightConcaveStroke": "\uE5A5", // Ornament low right concave stroke
    /*  */"ornamentLowRightConvexStroke": "\uE5A6", // Ornament low right convex stroke
    /*  */"ornamentBottomRightConcaveStroke": "\uE5A7", // Ornament bottom right concave stroke
    /*  */"ornamentBottomRightConvexStroke": "\uE5A8", // Ornament bottom right convex stroke
    /*  */"ornamentPrecompSlide": "\uE5B0", // Slide
    /*  */"ornamentPrecompDescendingSlide": "\uE5B1", // Descending slide
    /*  */"ornamentPrecompAppoggTrill": "\uE5B2", // Supported appoggiatura trill
    /*  */"ornamentPrecompAppoggTrillSuffix": "\uE5B3", // Supported appoggiatura trill with two-note suffix
    /*  */"ornamentPrecompTurnTrillDAnglebert": "\uE5B4", // Turn-trill (D'Anglebert)
    /*  */"ornamentPrecompSlideTrillDAnglebert": "\uE5B5", // Slide-trill (D'Anglebert)
    /*  */"ornamentPrecompSlideTrillMarpurg": "\uE5B6", // Slide-trill with one-note suffix (Marpurg)
    /*  */"ornamentPrecompTurnTrillBach": "\uE5B7", // Turn-trill with two-note suffix (J.S. Bach)
    /*  */"ornamentPrecompSlideTrillBach": "\uE5B8", // Slide-trill with two-note suffix (J.S. Bach)
    /*  */"ornamentPrecompSlideTrillMuffat": "\uE5B9", // Slide-trill (Muffat)
    /*  */"ornamentPrecompSlideTrillSuffixMuffat": "\uE5BA", // Slide-trill with two-note suffix (Muffat)
    /*  */"ornamentPrecompTrillSuffixDandrieu": "\uE5BB", // Trill with two-note suffix (Dandrieu)
    /*  */"ornamentPrecompPortDeVoixMordent": "\uE5BC", // Pre-beat port de voix followed by multiple mordent (Dandrieu)
    /*  */"ornamentPrecompTrillWithMordent": "\uE5BD", // Trill with mordent
    /*  */"ornamentPrecompCadence": "\uE5BE", // Cadence
    /*  */"ornamentPrecompCadenceWithTurn": "\uE5BF", // Cadence with turn
    /*  */"ornamentPrecompDoubleCadenceLowerPrefix": "\uE5C0", // Double cadence with lower prefix
    /*  */"ornamentPrecompCadenceUpperPrefix": "\uE5C1", // Cadence with upper prefix
    /*  */"ornamentPrecompCadenceUpperPrefixTurn": "\uE5C2", // Cadence with upper prefix and turn
    /*  */"ornamentPrecompDoubleCadenceUpperPrefix": "\uE5C3", // Double cadence with upper prefix
    /*  */"ornamentPrecompDoubleCadenceUpperPrefixTurn": "\uE5C4", // Double cadence with upper prefix and turn
    /*  */"ornamentPrecompMordentRelease": "\uE5C5", // Mordent with release
    /*  */"ornamentPrecompMordentUpperPrefix": "\uE5C6", // Mordent with upper prefix
    /*  */"ornamentPrecompInvertedMordentUpperPrefix": "\uE5C7", // Inverted mordent with upper prefix
    /*  */"ornamentPrecompTrillLowerSuffix": "\uE5C8", // Trill with lower suffix
    /*  */"brassScoop": "\uE5D0", // Scoop
    /*  */"brassLiftShort": "\uE5D1", // Lift, short
    /*  */"brassLiftMedium": "\uE5D2", // Lift, medium
    /*  */"brassLiftLong": "\uE5D3", // Lift, long
    /*  */"brassDoitShort": "\uE5D4", // Doit, short
    /*  */"brassDoitMedium": "\uE5D5", // Doit, medium
    /*  */"brassDoitLong": "\uE5D6", // Doit, long
    /*  */"brassFallLipShort": "\uE5D7", // Lip fall, short
    /*  */"brassFallLipMedium": "\uE5D8", // Lip fall, medium
    /*  */"brassFallLipLong": "\uE5D9", // Lip fall, long
    /*  */"brassFallSmoothShort": "\uE5DA", // Smooth fall, short
    /*  */"brassFallSmoothMedium": "\uE5DB", // Smooth fall, medium
    /*  */"brassFallSmoothLong": "\uE5DC", // Smooth fall, long
    /*  */"brassFallRoughShort": "\uE5DD", // Rough fall, short
    /*  */"brassFallRoughMedium": "\uE5DE", // Rough fall, medium
    /*  */"brassFallRoughLong": "\uE5DF", // Rough fall, long
    /*  */"brassPlop": "\uE5E0", // Plop
    /*  */"brassFlip": "\uE5E1", // Flip
    /*  */"brassSmear": "\uE5E2", // Smear
    /*  */"brassBend": "\uE5E3", // Bend
    /*  */"brassJazzTurn": "\uE5E4", // Jazz turn
    /*  */"brassMuteClosed": "\uE5E5", // Muted (closed)
    /*  */"brassMuteHalfClosed": "\uE5E6", // Half-muted (half-closed)
    /*  */"brassMuteOpen": "\uE5E7", // Open
    /*  */"brassHarmonMuteClosed": "\uE5E8", // Harmon mute, stem in
    /*  */"brassHarmonMuteStemHalfLeft": "\uE5E9", // Harmon mute, stem extended, left
    /*  */"brassHarmonMuteStemHalfRight": "\uE5EA", // Harmon mute, stem extended, right
    /*  */"brassHarmonMuteStemOpen": "\uE5EB", // Harmon mute, stem out
    /*  */"brassLiftSmoothShort": "\uE5EC", // Smooth lift, short
    /*  */"brassLiftSmoothMedium": "\uE5ED", // Smooth lift, medium
    /*  */"brassLiftSmoothLong": "\uE5EE", // Smooth lift, long
    /*  */"brassValveTrill": "\uE5EF", // Valve trill
    /*  */"doubleTongueAbove": "\uE5F0", // Double-tongue above
    /*  */"doubleTongueBelow": "\uE5F1", // Double-tongue below
    /*  */"tripleTongueAbove": "\uE5F2", // Triple-tongue above
    /*  */"tripleTongueBelow": "\uE5F3", // Triple-tongue below
    /*  */"windClosedHole": "\uE5F4", // Closed hole
    /*  */"windThreeQuartersClosedHole": "\uE5F5", // Three-quarters closed hole
    /*  */"windHalfClosedHole1": "\uE5F6", // Half-closed hole
    /*  */"windHalfClosedHole2": "\uE5F7", // Half-closed hole 2
    /*  */"windHalfClosedHole3": "\uE5F8", // Half-open hole
    /*  */"windOpenHole": "\uE5F9", // Open hole
    /*  */"windTrillKey": "\uE5FA", // Trill key
    /*  */"windFlatEmbouchure": "\uE5FB", // Flatter embouchure
    /*  */"windSharpEmbouchure": "\uE5FC", // Sharper embouchure
    /*  */"windRelaxedEmbouchure": "\uE5FD", // Relaxed embouchure
    /*  */"windLessRelaxedEmbouchure": "\uE5FE", // Somewhat relaxed embouchure
    /*  */"windTightEmbouchure": "\uE5FF", // Tight embouchure
    /*  */"windLessTightEmbouchure": "\uE600", // Somewhat tight embouchure
    /*  */"windVeryTightEmbouchure": "\uE601", // Very tight embouchure
    /*  */"windWeakAirPressure": "\uE602", // Very relaxed embouchure / weak air-pressure
    /*  */"windStrongAirPressure": "\uE603", // Very tight embouchure / strong air pressure
    /*  */"windReedPositionNormal": "\uE604", // Normal reed position
    /*  */"windReedPositionOut": "\uE605", // Very little reed (pull outwards)
    /*  */"windReedPositionIn": "\uE606", // Much more reed (push inwards)
    /*  */"windMultiphonicsBlackStem": "\uE607", // Combining multiphonics (black) for stem
    /*  */"windMultiphonicsWhiteStem": "\uE608", // Combining multiphonics (white) for stem
    /*  */"windMultiphonicsBlackWhiteStem": "\uE609", // Combining multiphonics (black and white) for stem
    /*  */"windMouthpiecePop": "\uE60A", // Mouthpiece or hand pop
    /*  */"windRimOnly": "\uE60B", // Rim only
    /*  */"stringsDownBow": "\uE610", // Down bow
    /*  */"stringsDownBowTurned": "\uE611", // Turned down bow
    /*  */"stringsUpBow": "\uE612", // Up bow
    /*  */"stringsUpBowTurned": "\uE613", // Turned up bow
    /*  */"stringsHarmonic": "\uE614", // Harmonic
    /*  */"stringsHalfHarmonic": "\uE615", // Half-harmonic
    /*  */"stringsMuteOn": "\uE616", // Mute on
    /*  */"stringsMuteOff": "\uE617", // Mute off
    /*  */"stringsBowBehindBridge": "\uE618", // Bow behind bridge (sul ponticello)
    /*  */"stringsBowOnBridge": "\uE619", // Bow on top of bridge
    /*  */"stringsBowOnTailpiece": "\uE61A", // Bow on tailpiece
    /*  */"stringsOverpressureDownBow": "\uE61B", // Overpressure, down bow
    /*  */"stringsOverpressureUpBow": "\uE61C", // Overpressure, up bow
    /*  */"stringsOverpressurePossibileDownBow": "\uE61D", // Overpressure possibile, down bow
    /*  */"stringsOverpressurePossibileUpBow": "\uE61E", // Overpressure possibile, up bow
    /*  */"stringsOverpressureNoDirection": "\uE61F", // Overpressure, no bow direction
    /*  */"stringsJeteAbove": "\uE620", // Jeté (gettato) above
    /*  */"stringsJeteBelow": "\uE621", // Jeté (gettato) below
    /*  */"stringsFouette": "\uE622", // Fouetté
    /*  */"stringsVibratoPulse": "\uE623", // Vibrato pulse accent (Saunders) for stem
    /*  */"stringsThumbPosition": "\uE624", // Thumb position
    /*  */"stringsThumbPositionTurned": "\uE625", // Turned thumb position
    /*  */"stringsChangeBowDirection": "\uE626", // Change bow direction, indeterminate
    /*  */"stringsBowBehindBridgeOneString": "\uE627", // Bow behind bridge on one string
    /*  */"stringsBowBehindBridgeTwoStrings": "\uE628", // Bow behind bridge on two strings
    /*  */"stringsBowBehindBridgeThreeStrings": "\uE629", // Bow behind bridge on three strings
    /*  */"stringsBowBehindBridgeFourStrings": "\uE62A", // Bow behind bridge on four strings
    /*  */"pluckedSnapPizzicatoBelow": "\uE630", // Snap pizzicato below
    /*  */"pluckedSnapPizzicatoAbove": "\uE631", // Snap pizzicato above
    /*  */"pluckedBuzzPizzicato": "\uE632", // Buzz pizzicato
    /*  */"pluckedLeftHandPizzicato": "\uE633", // Left-hand pizzicato
    /*  */"arpeggiatoUp": "\uE634", // Arpeggiato up
    /*  */"arpeggiatoDown": "\uE635", // Arpeggiato down
    /*  */"pluckedWithFingernails": "\uE636", // With fingernails
    /*  */"pluckedFingernailFlick": "\uE637", // Fingernail flick
    /*  */"pluckedDamp": "\uE638", // Damp
    /*  */"pluckedDampAll": "\uE639", // Damp all
    /*  */"pluckedPlectrum": "\uE63A", // Plectrum
    /*  */"pluckedDampOnStem": "\uE63B", // Damp for stem
    /*  */"arpeggiato": "\uE63C", // Arpeggiato
    /*  */"vocalMouthClosed": "\uE640", // Mouth closed
    /*  */"vocalMouthSlightlyOpen": "\uE641", // Mouth slightly open
    /*  */"vocalMouthOpen": "\uE642", // Mouth open
    /*  */"vocalMouthWideOpen": "\uE643", // Mouth wide open
    /*  */"vocalMouthPursed": "\uE644", // Mouth pursed
    /*  */"vocalSprechgesang": "\uE645", // Sprechgesang
    /*  */"vocalsSussurando": "\uE646", // Combining sussurando for stem
    /*  */"vocalNasalVoice": "\uE647", // Nasal voice
    /*  */"vocalTongueClickStockhausen": "\uE648", // Tongue click (Stockhausen)
    /*  */"vocalFingerClickStockhausen": "\uE649", // Finger click (Stockhausen)
    /*  */"vocalTongueFingerClickStockhausen": "\uE64A", // Tongue and finger click (Stockhausen)
    /*  */"vocalHalbGesungen": "\uE64B", // Halb gesungen (semi-sprechgesang)
    /*  */"keyboardPedalPed": "\uE650", // Pedal mark
    /*  */"keyboardPedalP": "\uE651", // Pedal P
    /*  */"keyboardPedalE": "\uE652", // Pedal e
    /*  */"keyboardPedalD": "\uE653", // Pedal d
    /*  */"keyboardPedalDot": "\uE654", // Pedal dot
    /*  */"keyboardPedalUp": "\uE655", // Pedal up mark
    /*  */"keyboardPedalHalf": "\uE656", // Half-pedal mark
    /*  */"keyboardPedalUpNotch": "\uE657", // Pedal up notch
    /*  */"keyboardPedalHyphen": "\uE658", // Pedal hyphen
    /*  */"keyboardPedalSost": "\uE659", // Sostenuto pedal mark
    /*  */"keyboardPedalS": "\uE65A", // Pedal S
    /*  */"keyboardPedalHalf2": "\uE65B", // Half pedal mark 1
    /*  */"keyboardPedalHalf3": "\uE65C", // Half pedal mark 2
    /*  */"keyboardPedalUpSpecial": "\uE65D", // Pedal up special
    /*  */"keyboardLeftPedalPictogram": "\uE65E", // Left pedal pictogram
    /*  */"keyboardMiddlePedalPictogram": "\uE65F", // Middle pedal pictogram
    /*  */"keyboardRightPedalPictogram": "\uE660", // Right pedal pictogram
    /*  */"keyboardPedalHeel1": "\uE661", // Pedal heel 1
    /*  */"keyboardPedalHeel2": "\uE662", // Pedal heel 2
    /*  */"keyboardPedalHeel3": "\uE663", // Pedal heel 3 (Davis)
    /*  */"keyboardPedalToe1": "\uE664", // Pedal toe 1
    /*  */"keyboardPedalToe2": "\uE665", // Pedal toe 2
    /*  */"keyboardPedalHeelToe": "\uE666", // Pedal heel or toe
    /*  */"keyboardPluckInside": "\uE667", // Pluck strings inside piano (Maderna)
    /*  */"keyboardBebung2DotsAbove": "\uE668", // Clavichord bebung, 2 finger movements (above)
    /*  */"keyboardBebung2DotsBelow": "\uE669", // Clavichord bebung, 2 finger movements (below)
    /*  */"keyboardBebung3DotsAbove": "\uE66A", // Clavichord bebung, 3 finger movements (above)
    /*  */"keyboardBebung3DotsBelow": "\uE66B", // Clavichord bebung, 3 finger movements (below)
    /*  */"keyboardBebung4DotsAbove": "\uE66C", // Clavichord bebung, 4 finger movements (above)
    /*  */"keyboardBebung4DotsBelow": "\uE66D", // Clavichord bebung, 4 finger movements (below)
    /*  */"keyboardPlayWithRH": "\uE66E", // Play with right hand
    /*  */"keyboardPlayWithRHEnd": "\uE66F", // Play with right hand (end)
    /*  */"keyboardPlayWithLH": "\uE670", // Play with left hand
    /*  */"keyboardPlayWithLHEnd": "\uE671", // Play with left hand (end)
    /*  */"keyboardPedalHookStart": "\uE672", // Pedal hook start
    /*  */"keyboardPedalHookEnd": "\uE673", // Pedal hook end
    /*  */"keyboardPedalHeelToToe": "\uE674", // Pedal heel to toe
    /*  */"keyboardPedalToeToHeel": "\uE675", // Pedal toe to heel
    /*  */"keyboardPedalParensLeft": "\uE676", // Left parenthesis for pedal marking
    /*  */"keyboardPedalParensRight": "\uE677", // Right parenthesis for pedal marking
    /*  */"harpPedalRaised": "\uE680", // Harp pedal raised (flat)
    /*  */"harpPedalCentered": "\uE681", // Harp pedal centered (natural)
    /*  */"harpPedalLowered": "\uE682", // Harp pedal lowered (sharp)
    /*  */"harpPedalDivider": "\uE683", // Harp pedal divider
    /*  */"harpSalzedoSlideWithSuppleness": "\uE684", // Slide with suppleness (Salzedo)
    /*  */"harpSalzedoOboicFlux": "\uE685", // Oboic flux (Salzedo)
    /*  */"harpSalzedoThunderEffect": "\uE686", // Thunder effect (Salzedo)
    /*  */"harpSalzedoWhistlingSounds": "\uE687", // Whistling sounds (Salzedo)
    /*  */"harpSalzedoMetallicSounds": "\uE688", // Metallic sounds (Salzedo)
    /*  */"harpSalzedoTamTamSounds": "\uE689", // Tam-tam sounds (Salzedo)
    /*  */"harpSalzedoPlayUpperEnd": "\uE68A", // Play at upper end of strings (Salzedo)
    /*  */"harpSalzedoTimpanicSounds": "\uE68B", // Timpanic sounds (Salzedo)
    /*  */"harpSalzedoMuffleTotally": "\uE68C", // Muffle totally (Salzedo)
    /*  */"harpSalzedoFluidicSoundsLeft": "\uE68D", // Fluidic sounds, left hand (Salzedo)
    /*  */"harpSalzedoFluidicSoundsRight": "\uE68E", // Fluidic sounds, right hand (Salzedo)
    /*  */"harpMetalRod": "\uE68F", // Metal rod pictogram
    /*  */"harpTuningKey": "\uE690", // Tuning key pictogram
    /*  */"harpTuningKeyHandle": "\uE691", // Use handle of tuning key pictogram
    /*  */"harpTuningKeyShank": "\uE692", // Use shank of tuning key pictogram
    /*  */"harpTuningKeyGlissando": "\uE693", // Retune strings for glissando
    /*  */"harpStringNoiseStem": "\uE694", // Combining string noise for stem
    /*  */"harpSalzedoAeolianAscending": "\uE695", // Ascending aeolian chords (Salzedo)
    /*  */"harpSalzedoAeolianDescending": "\uE696", // Descending aeolian chords (Salzedo)
    /*  */"harpSalzedoDampLowStrings": "\uE697", // Damp only low strings (Salzedo)
    /*  */"harpSalzedoDampBothHands": "\uE698", // Damp with both hands (Salzedo)
    /*  */"harpSalzedoDampBelow": "\uE699", // Damp below (Salzedo)
    /*  */"harpSalzedoDampAbove": "\uE69A", // Damp above (Salzedo)
    /*  */"harpSalzedoMetallicSoundsOneString": "\uE69B", // Metallic sounds, one string (Salzedo)
    /*  */"harpSalzedoIsolatedSounds": "\uE69C", // Isolated sounds (Salzedo)
    /*  */"harpSalzedoSnareDrum": "\uE69D", // Snare drum effect (Salzedo)
    /*  */"pictGlsp": "\uE6A0", // Glockenspiel
    /*  */"pictXyl": "\uE6A1", // Xylophone
    /*  */"pictXylTenor": "\uE6A2", // Tenor xylophone
    /*  */"pictXylBass": "\uE6A3", // Bass xylophone
    /*  */"pictXylTrough": "\uE6A4", // Trough xylophone
    /*  */"pictXylTenorTrough": "\uE6A5", // Trough tenor xylophone
    /*  */"pictMar": "\uE6A6", // Marimba
    /*  */"pictVib": "\uE6A7", // Vibraphone
    /*  */"pictVibMotorOff": "\uE6A8", // Metallophone (vibraphone motor off)
    /*  */"pictEmptyTrap": "\uE6A9", // Empty trapezoid
    /*  */"pictGlspSmithBrindle": "\uE6AA", // Glockenspiel (Smith Brindle)
    /*  */"pictXylSmithBrindle": "\uE6AB", // Xylophone (Smith Brindle)
    /*  */"pictMarSmithBrindle": "\uE6AC", // Marimba (Smith Brindle)
    /*  */"pictVibSmithBrindle": "\uE6AD", // Vibraphone (Smith Brindle)
    /*  */"pictCrotales": "\uE6AE", // Crotales
    /*  */"pictSteelDrums": "\uE6AF", // Steel drums
    /*  */"pictCelesta": "\uE6B0", // Celesta
    /*  */"pictLithophone": "\uE6B1", // Lithophone
    /*  */"pictTubaphone": "\uE6B2", // Tubaphone
    /*  */"pictTubularBells": "\uE6C0", // Tubular bells
    /*  */"pictWindChimesGlass": "\uE6C1", // Wind chimes (glass)
    /*  */"pictChimes": "\uE6C2", // Chimes
    /*  */"pictBambooChimes": "\uE6C3", // Bamboo tube chimes
    /*  */"pictShellChimes": "\uE6C4", // Shell chimes
    /*  */"pictGlassTubeChimes": "\uE6C5", // Glass tube chimes
    /*  */"pictGlassPlateChimes": "\uE6C6", // Glass plate chimes
    /*  */"pictMetalTubeChimes": "\uE6C7", // Metal tube chimes
    /*  */"pictMetalPlateChimes": "\uE6C8", // Metal plate chimes
    /*  */"pictTimpani": "\uE6D0", // Timpani
    /*  */"pictSnareDrum": "\uE6D1", // Snare drum
    /*  */"pictSnareDrumSnaresOff": "\uE6D2", // Snare drum, snares off
    /*  */"pictSnareDrumMilitary": "\uE6D3", // Military snare drum
    /*  */"pictBassDrum": "\uE6D4", // Bass drum
    /*  */"pictBassDrumOnSide": "\uE6D5", // Bass drum on side
    /*  */"pictTenorDrum": "\uE6D6", // Tenor drum
    /*  */"pictTomTom": "\uE6D7", // Tom-tom
    /*  */"pictTomTomChinese": "\uE6D8", // Chinese tom-tom
    /*  */"pictTomTomJapanese": "\uE6D9", // Japanese tom-tom
    /*  */"pictTomTomIndoAmerican": "\uE6DA", // Indo-American tom tom
    /*  */"pictTambourine": "\uE6DB", // Tambourine
    /*  */"pictTimbales": "\uE6DC", // Timbales
    /*  */"pictBongos": "\uE6DD", // Bongos
    /*  */"pictConga": "\uE6DE", // Conga
    /*  */"pictLogDrum": "\uE6DF", // Log drum
    /*  */"pictSlitDrum": "\uE6E0", // Slit drum
    /*  */"pictBrakeDrum": "\uE6E1", // Brake drum
    /*  */"pictGobletDrum": "\uE6E2", // Goblet drum (djembe, dumbek)
    /*  */"pictTabla": "\uE6E3", // Indian tabla
    /*  */"pictCuica": "\uE6E4", // Cuica
    /*  */"pictWoodBlock": "\uE6F0", // Wood block
    /*  */"pictTempleBlocks": "\uE6F1", // Temple blocks
    /*  */"pictClaves": "\uE6F2", // Claves
    /*  */"pictGuiro": "\uE6F3", // Guiro
    /*  */"pictRatchet": "\uE6F4", // Ratchet
    /*  */"pictFootballRatchet": "\uE6F5", // Football rattle
    /*  */"pictWhip": "\uE6F6", // Whip
    /*  */"pictBoardClapper": "\uE6F7", // Board clapper
    /*  */"pictCastanets": "\uE6F8", // Castanets
    /*  */"pictCastanetsWithHandle": "\uE6F9", // Castanets with handle
    /*  */"pictQuijada": "\uE6FA", // Quijada (jawbone)
    /*  */"pictBambooScraper": "\uE6FB", // Bamboo scraper
    /*  */"pictRecoReco": "\uE6FC", // Reco-reco
    /*  */"pictTriangle": "\uE700", // Triangle
    /*  */"pictAnvil": "\uE701", // Anvil
    /*  */"pictSleighBell": "\uE710", // Sleigh bell
    /*  */"pictCowBell": "\uE711", // Cow bell
    /*  */"pictAlmglocken": "\uE712", // Almglocken
    /*  */"pictBellPlate": "\uE713", // Bell plate
    /*  */"pictBell": "\uE714", // Bell
    /*  */"pictHandbell": "\uE715", // Handbell
    /*  */"pictCencerro": "\uE716", // Cencerro
    /*  */"pictAgogo": "\uE717", // Agogo
    /*  */"pictShellBells": "\uE718", // Shell bells
    /*  */"pictJingleBells": "\uE719", // Jingle bells
    /*  */"pictBellTree": "\uE71A", // Bell tree
    /*  */"pictCrashCymbals": "\uE720", // Crash cymbals
    /*  */"pictSuspendedCymbal": "\uE721", // Suspended cymbal
    /*  */"pictHiHat": "\uE722", // Hi-hat
    /*  */"pictHiHatOnStand": "\uE723", // Hi-hat cymbals on stand
    /*  */"pictSizzleCymbal": "\uE724", // Sizzle cymbal
    /*  */"pictVietnameseHat": "\uE725", // Vietnamese hat cymbal
    /*  */"pictChineseCymbal": "\uE726", // Chinese cymbal
    /*  */"pictFingerCymbals": "\uE727", // Finger cymbals
    /*  */"pictCymbalTongs": "\uE728", // Cymbal tongs
    /*  */"pictEdgeOfCymbal": "\uE729", // Edge of cymbal
    /*  */"pictBellOfCymbal": "\uE72A", // Bell of cymbal
    /*  */"pictTamTam": "\uE730", // Tam-tam
    /*  */"pictTamTamWithBeater": "\uE731", // Tam-tam with beater (Smith Brindle)
    /*  */"pictGong": "\uE732", // Gong
    /*  */"pictGongWithButton": "\uE733", // Gong with button (nipple)
    /*  */"pictSlideBrushOnGong": "\uE734", // Slide brush on gong
    /*  */"pictFlexatone": "\uE740", // Flexatone
    /*  */"pictMaraca": "\uE741", // Maraca
    /*  */"pictMaracas": "\uE742", // Maracas
    /*  */"pictCabasa": "\uE743", // Cabasa
    /*  */"pictThundersheet": "\uE744", // Thundersheet
    /*  */"pictVibraslap": "\uE745", // Vibraslap
    /*  */"pictSistrum": "\uE746", // Sistrum
    /*  */"pictRainstick": "\uE747", // Rainstick
    /*  */"pictChainRattle": "\uE748", // Chain rattle
    /*  */"pictSlideWhistle": "\uE750", // Slide whistle
    /*  */"pictBirdWhistle": "\uE751", // Bird whistle
    /*  */"pictPoliceWhistle": "\uE752", // Police whistle
    /*  */"pictSiren": "\uE753", // Siren
    /*  */"pictWindMachine": "\uE754", // Wind machine
    /*  */"pictCarHorn": "\uE755", // Car horn
    /*  */"pictKlaxonHorn": "\uE756", // Klaxon horn
    /*  */"pictDuckCall": "\uE757", // Duck call
    /*  */"pictWindWhistle": "\uE758", // Wind whistle (or mouth siren)
    /*  */"pictMegaphone": "\uE759", // Megaphone
    /*  */"pictLotusFlute": "\uE75A", // Lotus flute
    /*  */"pictPistolShot": "\uE760", // Pistol shot
    /*  */"pictCannon": "\uE761", // Cannon
    /*  */"pictSandpaperBlocks": "\uE762", // Sandpaper blocks
    /*  */"pictLionsRoar": "\uE763", // Lion's roar
    /*  */"pictGlassHarp": "\uE764", // Glass harp
    /*  */"pictGlassHarmonica": "\uE765", // Glass harmonica
    /*  */"pictMusicalSaw": "\uE766", // Musical saw
    /*  */"pictJawHarp": "\uE767", // Jaw harp
    /*  */"pictBeaterSoftXylophoneUp": "\uE770", // Soft xylophone stick up
    /*  */"pictBeaterSoftXylophoneDown": "\uE771", // Soft xylophone stick down
    /*  */"pictBeaterSoftXylophoneRight": "\uE772", // Soft xylophone stick right
    /*  */"pictBeaterSoftXylophoneLeft": "\uE773", // Soft xylophone stick left
    /*  */"pictBeaterMediumXylophoneUp": "\uE774", // Medium xylophone stick up
    /*  */"pictBeaterMediumXylophoneDown": "\uE775", // Medium xylophone stick down
    /*  */"pictBeaterMediumXylophoneRight": "\uE776", // Medium xylophone stick right
    /*  */"pictBeaterMediumXylophoneLeft": "\uE777", // Medium xylophone stick left
    /*  */"pictBeaterHardXylophoneUp": "\uE778", // Hard xylophone stick up
    /*  */"pictBeaterHardXylophoneDown": "\uE779", // Hard xylophone stick down
    /*  */"pictBeaterHardXylophoneRight": "\uE77A", // Hard xylophone stick right
    /*  */"pictBeaterHardXylophoneLeft": "\uE77B", // Hard xylophone stick left
    /*  */"pictBeaterWoodXylophoneUp": "\uE77C", // Wood xylophone stick up
    /*  */"pictBeaterWoodXylophoneDown": "\uE77D", // Wood xylophone stick down
    /*  */"pictBeaterWoodXylophoneRight": "\uE77E", // Wood xylophone stick right
    /*  */"pictBeaterWoodXylophoneLeft": "\uE77F", // Wood xylophone stick left
    /*  */"pictBeaterSoftGlockenspielUp": "\uE780", // Soft glockenspiel stick up
    /*  */"pictBeaterSoftGlockenspielDown": "\uE781", // Soft glockenspiel stick down
    /*  */"pictBeaterSoftGlockenspielRight": "\uE782", // Soft glockenspiel stick right
    /*  */"pictBeaterSoftGlockenspielLeft": "\uE783", // Soft glockenspiel stick left
    /*  */"pictBeaterHardGlockenspielUp": "\uE784", // Hard glockenspiel stick up
    /*  */"pictBeaterHardGlockenspielDown": "\uE785", // Hard glockenspiel stick down
    /*  */"pictBeaterHardGlockenspielRight": "\uE786", // Hard glockenspiel stick right
    /*  */"pictBeaterHardGlockenspielLeft": "\uE787", // Hard glockenspiel stick left
    /*  */"pictBeaterSoftTimpaniUp": "\uE788", // Soft timpani stick up
    /*  */"pictBeaterSoftTimpaniDown": "\uE789", // Soft timpani stick down
    /*  */"pictBeaterSoftTimpaniRight": "\uE78A", // Soft timpani stick right
    /*  */"pictBeaterSoftTimpaniLeft": "\uE78B", // Soft timpani stick left
    /*  */"pictBeaterMediumTimpaniUp": "\uE78C", // Medium timpani stick up
    /*  */"pictBeaterMediumTimpaniDown": "\uE78D", // Medium timpani stick down
    /*  */"pictBeaterMediumTimpaniRight": "\uE78E", // Medium timpani stick right
    /*  */"pictBeaterMediumTimpaniLeft": "\uE78F", // Medium timpani stick left
    /*  */"pictBeaterHardTimpaniUp": "\uE790", // Hard timpani stick up
    /*  */"pictBeaterHardTimpaniDown": "\uE791", // Hard timpani stick down
    /*  */"pictBeaterHardTimpaniRight": "\uE792", // Hard timpani stick right
    /*  */"pictBeaterHardTimpaniLeft": "\uE793", // Hard timpani stick left
    /*  */"pictBeaterWoodTimpaniUp": "\uE794", // Wood timpani stick up
    /*  */"pictBeaterWoodTimpaniDown": "\uE795", // Wood timpani stick down
    /*  */"pictBeaterWoodTimpaniRight": "\uE796", // Wood timpani stick right
    /*  */"pictBeaterWoodTimpaniLeft": "\uE797", // Wood timpani stick left
    /*  */"pictBeaterSoftBassDrumUp": "\uE798", // Soft bass drum stick up
    /*  */"pictBeaterSoftBassDrumDown": "\uE799", // Soft bass drum stick down
    /*  */"pictBeaterMediumBassDrumUp": "\uE79A", // Medium bass drum stick up
    /*  */"pictBeaterMediumBassDrumDown": "\uE79B", // Medium bass drum stick down
    /*  */"pictBeaterHardBassDrumUp": "\uE79C", // Hard bass drum stick up
    /*  */"pictBeaterHardBassDrumDown": "\uE79D", // Hard bass drum stick down
    /*  */"pictBeaterMetalBassDrumUp": "\uE79E", // Metal bass drum stick up
    /*  */"pictBeaterMetalBassDrumDown": "\uE79F", // Metal bass drum stick down
    /*  */"pictBeaterDoubleBassDrumUp": "\uE7A0", // Double bass drum stick up
    /*  */"pictBeaterDoubleBassDrumDown": "\uE7A1", // Double bass drum stick down
    /*  */"pictBeaterSoftYarnUp": "\uE7A2", // Soft yarn beater up
    /*  */"pictBeaterSoftYarnDown": "\uE7A3", // Soft yarn beater down
    /*  */"pictBeaterSoftYarnRight": "\uE7A4", // Soft yarn beater right
    /*  */"pictBeaterSoftYarnLeft": "\uE7A5", // Soft yarn beater left
    /*  */"pictBeaterMediumYarnUp": "\uE7A6", // Medium yarn beater up
    /*  */"pictBeaterMediumYarnDown": "\uE7A7", // Medium yarn beater down
    /*  */"pictBeaterMediumYarnRight": "\uE7A8", // Medium yarn beater right
    /*  */"pictBeaterMediumYarnLeft": "\uE7A9", // Medium yarn beater left
    /*  */"pictBeaterHardYarnUp": "\uE7AA", // Hard yarn beater up
    /*  */"pictBeaterHardYarnDown": "\uE7AB", // Hard yarn beater down
    /*  */"pictBeaterHardYarnRight": "\uE7AC", // Hard yarn beater right
    /*  */"pictBeaterHardYarnLeft": "\uE7AD", // Hard yarn beater left
    /*  */"pictBeaterSuperballUp": "\uE7AE", // Superball beater up
    /*  */"pictBeaterSuperballDown": "\uE7AF", // Superball beater down
    /*  */"pictBeaterSuperballRight": "\uE7B0", // Superball beater right
    /*  */"pictBeaterSuperballLeft": "\uE7B1", // Superball beater left
    /*  */"pictSuperball": "\uE7B2", // Superball
    /*  */"pictWoundHardUp": "\uE7B3", // Wound beater, hard core up
    /*  */"pictWoundHardDown": "\uE7B4", // Wound beater, hard core down
    /*  */"pictWoundHardRight": "\uE7B5", // Wound beater, hard core right
    /*  */"pictWoundHardLeft": "\uE7B6", // Wound beater, hard core left
    /*  */"pictWoundSoftUp": "\uE7B7", // Wound beater, soft core up
    /*  */"pictWoundSoftDown": "\uE7B8", // Wound beater, soft core down
    /*  */"pictWoundSoftRight": "\uE7B9", // Wound beater, soft core right
    /*  */"pictWoundSoftLeft": "\uE7BA", // Wound beater, soft core left
    /*  */"pictGumSoftUp": "\uE7BB", // Soft gum beater, up
    /*  */"pictGumSoftDown": "\uE7BC", // Soft gum beater, down
    /*  */"pictGumSoftRight": "\uE7BD", // Soft gum beater, right
    /*  */"pictGumSoftLeft": "\uE7BE", // Soft gum beater, left
    /*  */"pictGumMediumUp": "\uE7BF", // Medium gum beater, up
    /*  */"pictGumMediumDown": "\uE7C0", // Medium gum beater, down
    /*  */"pictGumMediumRight": "\uE7C1", // Medium gum beater, right
    /*  */"pictGumMediumLeft": "\uE7C2", // Medium gum beater, left
    /*  */"pictGumHardUp": "\uE7C3", // Hard gum beater, up
    /*  */"pictGumHardDown": "\uE7C4", // Hard gum beater, down
    /*  */"pictGumHardRight": "\uE7C5", // Hard gum beater, right
    /*  */"pictGumHardLeft": "\uE7C6", // Hard gum beater, left
    /*  */"pictBeaterMetalUp": "\uE7C7", // Metal beater, up
    /*  */"pictBeaterMetalDown": "\uE7C8", // Metal beater down
    /*  */"pictBeaterMetalRight": "\uE7C9", // Metal beater, right
    /*  */"pictBeaterMetalLeft": "\uE7CA", // Metal beater, left
    /*  */"pictBeaterHammerWoodUp": "\uE7CB", // Wooden hammer, up
    /*  */"pictBeaterHammerWoodDown": "\uE7CC", // Wooden hammer, down
    /*  */"pictBeaterHammerPlasticUp": "\uE7CD", // Plastic hammer, up
    /*  */"pictBeaterHammerPlasticDown": "\uE7CE", // Plastic hammer, down
    /*  */"pictBeaterHammerMetalUp": "\uE7CF", // Metal hammer, up
    /*  */"pictBeaterHammerMetalDown": "\uE7D0", // Metal hammer, down
    /*  */"pictBeaterSnareSticksUp": "\uE7D1", // Snare sticks up
    /*  */"pictBeaterSnareSticksDown": "\uE7D2", // Snare sticks down
    /*  */"pictBeaterJazzSticksUp": "\uE7D3", // Jazz sticks up
    /*  */"pictBeaterJazzSticksDown": "\uE7D4", // Jazz sticks down
    /*  */"pictBeaterTriangleUp": "\uE7D5", // Triangle beater up
    /*  */"pictBeaterTriangleDown": "\uE7D6", // Triangle beater down
    /*  */"pictBeaterWireBrushesUp": "\uE7D7", // Wire brushes up
    /*  */"pictBeaterWireBrushesDown": "\uE7D8", // Wire brushes down
    /*  */"pictBeaterBrassMalletsUp": "\uE7D9", // Brass mallets up
    /*  */"pictBeaterBrassMalletsDown": "\uE7DA", // Brass mallets down
    /*  */"pictBeaterSoftXylophone": "\uE7DB", // Soft xylophone beaters
    /*  */"pictBeaterSpoonWoodenMallet": "\uE7DC", // Spoon-shaped wooden mallet
    /*  */"pictBeaterGuiroScraper": "\uE7DD", // Guiro scraper
    /*  */"pictBeaterBow": "\uE7DE", // Bow
    /*  */"pictBeaterMallet": "\uE7DF", // Chime hammer up
    /*  */"pictBeaterMetalHammer": "\uE7E0", // Metal hammer
    /*  */"pictBeaterHammer": "\uE7E1", // Hammer
    /*  */"pictBeaterKnittingNeedle": "\uE7E2", // Knitting needle
    /*  */"pictBeaterHand": "\uE7E3", // Hand
    /*  */"pictBeaterFinger": "\uE7E4", // Finger
    /*  */"pictBeaterFist": "\uE7E5", // Fist
    /*  */"pictBeaterFingernails": "\uE7E6", // Fingernails
    /*  */"pictCoins": "\uE7E7", // Coins
    /*  */"pictDrumStick": "\uE7E8", // Drum stick
    /*  */"pictBeaterCombiningParentheses": "\uE7E9", // Combining parentheses for round beaters (padded)
    /*  */"pictBeaterCombiningDashedCircle": "\uE7EA", // Combining dashed circle for round beaters (plated)
    /*  */"pictBeaterBox": "\uE7EB", // Box for percussion beater
    /*  */"pictBeaterMalletDown": "\uE7EC", // Chime hammer down
    /*  */"pictBeaterBrassMalletsRight": "\uE7ED", // Brass mallets right
    /*  */"pictBeaterBrassMalletsLeft": "\uE7EE", // Brass mallets left
    /*  */"pictBeaterTrianglePlain": "\uE7EF", // Triangle beater plain
    /*  */"pictStickShot": "\uE7F0", // Stick shot
    /*  */"pictScrapeCenterToEdge": "\uE7F1", // Scrape from center to edge
    /*  */"pictScrapeEdgeToCenter": "\uE7F2", // Scrape from edge to center
    /*  */"pictScrapeAroundRim": "\uE7F3", // Scrape around rim (counter-clockwise)
    /*  */"pictOnRim": "\uE7F4", // On rim
    /*  */"pictOpenRimShot": "\uE7F5", // Closed / rim shot
    /*  */"pictHalfOpen1": "\uE7F6", // Half-open
    /*  */"pictHalfOpen2": "\uE7F7", // Half-open 2 (Weinberg)
    /*  */"pictOpen": "\uE7F8", // Open
    /*  */"pictDamp1": "\uE7F9", // Damp
    /*  */"pictDamp2": "\uE7FA", // Damp 2
    /*  */"pictDamp3": "\uE7FB", // Damp 3
    /*  */"pictDamp4": "\uE7FC", // Damp 4
    /*  */"pictRimShotOnStem": "\uE7FD", // Rim shot for stem
    /*  */"pictCenter1": "\uE7FE", // Center (Weinberg)
    /*  */"pictCenter2": "\uE7FF", // Center (Ghent)
    /*  */"pictCenter3": "\uE800", // Center (Caltabiano)
    /*  */"pictRim1": "\uE801", // Rim or edge (Weinberg)
    /*  */"pictRim2": "\uE802", // Rim (Ghent)
    /*  */"pictRim3": "\uE803", // Rim (Caltabiano)
    /*  */"pictNormalPosition": "\uE804", // Normal position (Caltabiano)
    /*  */"pictChokeCymbal": "\uE805", // Choke (Weinberg)
    /*  */"pictRightHandSquare": "\uE806", // Left hand (Agostini)
    /*  */"pictLeftHandCircle": "\uE807", // Right hand (Agostini)
    /*  */"pictSwishStem": "\uE808", // Combining swish for stem
    /*  */"pictTurnRightStem": "\uE809", // Combining turn right for stem
    /*  */"pictTurnLeftStem": "\uE80A", // Combining turn left for stem
    /*  */"pictTurnRightLeftStem": "\uE80B", // Combining turn left or right for stem
    /*  */"pictCrushStem": "\uE80C", // Combining crush for stem
    /*  */"pictDeadNoteStem": "\uE80D", // Combining X for stem (dead note)
    /*  */"pictScrapeAroundRimClockwise": "\uE80E", // Scrape around rim (clockwise)
    /*  */"handbellsMartellato": "\uE810", // Martellato
    /*  */"handbellsMartellatoLift": "\uE811", // Martellato lift
    /*  */"handbellsHandMartellato": "\uE812", // Hand martellato
    /*  */"handbellsMutedMartellato": "\uE813", // Muted martellato
    /*  */"handbellsMalletBellSuspended": "\uE814", // Mallet, bell suspended
    /*  */"handbellsMalletBellOnTable": "\uE815", // Mallet, bell on table
    /*  */"handbellsMalletLft": "\uE816", // Mallet lift
    /*  */"handbellsPluckLift": "\uE817", // Pluck lift
    /*  */"handbellsSwingUp": "\uE818", // Swing up
    /*  */"handbellsSwingDown": "\uE819", // Swing down
    /*  */"handbellsSwing": "\uE81A", // Swing
    /*  */"handbellsEcho1": "\uE81B", // Echo
    /*  */"handbellsEcho2": "\uE81C", // Echo 2
    /*  */"handbellsGyro": "\uE81D", // Gyro
    /*  */"handbellsDamp3": "\uE81E", // Damp 3
    /*  */"handbellsBelltree": "\uE81F", // Belltree
    /*  */"handbellsTableSingleBell": "\uE820", // Table single handbell
    /*  */"handbellsTablePairBells": "\uE821", // Table pair of handbells
    /*  */"guitarVibratoBarScoop": "\uE830", // Guitar vibrato bar scoop
    /*  */"guitarVibratoBarDip": "\uE831", // Guitar vibrato bar dip
    /*  */"guitarShake": "\uE832", // Guitar shake
    /*  */"guitarString0": "\uE833", // String number 0
    /*  */"guitarString1": "\uE834", // String number 1
    /*  */"guitarString2": "\uE835", // String number 2
    /*  */"guitarString3": "\uE836", // String number 3
    /*  */"guitarString4": "\uE837", // String number 4
    /*  */"guitarString5": "\uE838", // String number 5
    /*  */"guitarString6": "\uE839", // String number 6
    /*  */"guitarString7": "\uE83A", // String number 7
    /*  */"guitarString8": "\uE83B", // String number 8
    /*  */"guitarString9": "\uE83C", // String number 9
    /*  */"guitarOpenPedal": "\uE83D", // Open wah/volume pedal
    /*  */"guitarHalfOpenPedal": "\uE83E", // Half-open wah/volume pedal
    /*  */"guitarClosePedal": "\uE83F", // Closed wah/volume pedal
    /*  */"guitarLeftHandTapping": "\uE840", // Left-hand tapping
    /*  */"guitarRightHandTapping": "\uE841", // Right-hand tapping
    /*  */"guitarGolpe": "\uE842", // Golpe (tapping the pick guard)
    /*  */"guitarFadeIn": "\uE843", // Fade in
    /*  */"guitarFadeOut": "\uE844", // Fade out
    /*  */"guitarVolumeSwell": "\uE845", // Volume swell
    /*  */"guitarStrumUp": "\uE846", // Strum direction up
    /*  */"guitarStrumDown": "\uE847", // Strum direction down
    /*  */"guitarBarreFull": "\uE848", // Full barré
    /*  */"guitarBarreHalf": "\uE849", // Half barré
    /*  */"guitarString10": "\uE84A", // String number 10
    /*  */"guitarString11": "\uE84B", // String number 11
    /*  */"guitarString12": "\uE84C", // String number 12
    /*  */"guitarString13": "\uE84D", // String number 13
    /*  */"fretboard3String": "\uE850", // 3-string fretboard
    /*  */"fretboard3StringNut": "\uE851", // 3-string fretboard at nut
    /*  */"fretboard4String": "\uE852", // 4-string fretboard
    /*  */"fretboard4StringNut": "\uE853", // 4-string fretboard at nut
    /*  */"fretboard5String": "\uE854", // 5-string fretboard
    /*  */"fretboard5StringNut": "\uE855", // 5-string fretboard at nut
    /*  */"fretboard6String": "\uE856", // 6-string fretboard
    /*  */"fretboard6StringNut": "\uE857", // 6-string fretboard at nut
    /*  */"fretboardFilledCircle": "\uE858", // Fingered fret (filled circle)
    /*  */"fretboardX": "\uE859", // String not played (X)
    /*  */"fretboardO": "\uE85A", // Open string (O)
    /*  */"analyticsHauptstimme": "\uE860", // Hauptstimme
    /*  */"analyticsNebenstimme": "\uE861", // Nebenstimme
    /*  */"analyticsStartStimme": "\uE862", // Start of stimme
    /*  */"analyticsEndStimme": "\uE863", // End of stimme
    /*  */"analyticsTheme": "\uE864", // Theme
    /*  */"analyticsThemeRetrograde": "\uE865", // Retrograde of theme
    /*  */"analyticsThemeRetrogradeInversion": "\uE866", // Retrograde inversion of theme
    /*  */"analyticsThemeInversion": "\uE867", // Inversion of theme
    /*  */"analyticsTheme1": "\uE868", // Theme 1
    /*  */"analyticsInversion1": "\uE869", // Inversion 1
    /*  */"analyticsChoralmelodie": "\uE86A", // Choralmelodie (Berg)
    /*  */"analyticsHauptrhythmus": "\uE86B", // Hauptrhythmus (Berg)
    /*  */"csymDiminished": "\uE870", // Diminished
    /*  */"csymHalfDiminished": "\uE871", // Half-diminished
    /*  */"csymAugmented": "\uE872", // Augmented
    /*  */"csymMajorSeventh": "\uE873", // Major seventh
    /*  */"csymMinor": "\uE874", // Minor
    /*  */"csymParensLeftTall": "\uE875", // Double-height left parenthesis
    /*  */"csymParensRightTall": "\uE876", // Double-height right parenthesis
    /*  */"csymBracketLeftTall": "\uE877", // Double-height left bracket
    /*  */"csymBracketRightTall": "\uE878", // Double-height right bracket
    /*  */"csymParensLeftVeryTall": "\uE879", // Triple-height left parenthesis
    /*  */"csymParensRightVeryTall": "\uE87A", // Triple-height right parenthesis
    /*  */"csymAlteredBassSlash": "\uE87B", // Slash for altered bass note
    /*  */"csymDiagonalArrangementSlash": "\uE87C", // Slash for chord symbols arranged diagonally
    /*  */"tuplet0": "\uE880", // Tuplet 0
    /*  */"tuplet1": "\uE881", // Tuplet 1
    /*  */"tuplet2": "\uE882", // Tuplet 2
    /*  */"tuplet3": "\uE883", // Tuplet 3
    /*  */"tuplet4": "\uE884", // Tuplet 4
    /*  */"tuplet5": "\uE885", // Tuplet 5
    /*  */"tuplet6": "\uE886", // Tuplet 6
    /*  */"tuplet7": "\uE887", // Tuplet 7
    /*  */"tuplet8": "\uE888", // Tuplet 8
    /*  */"tuplet9": "\uE889", // Tuplet 9
    /*  */"tupletColon": "\uE88A", // Tuplet colon
    /*  */"conductorStrongBeat": "\uE890", // Strong beat or cue
    /*  */"conductorLeftBeat": "\uE891", // Left-hand beat or cue
    /*  */"conductorRightBeat": "\uE892", // Right-hand beat or cue
    /*  */"conductorWeakBeat": "\uE893", // Weak beat or cue
    /*  */"conductorBeat2Simple": "\uE894", // Beat 2, simple time
    /*  */"conductorBeat3Simple": "\uE895", // Beat 3, simple time
    /*  */"conductorBeat4Simple": "\uE896", // Beat 4, simple time
    /*  */"conductorBeat2Compound": "\uE897", // Beat 2, compound time
    /*  */"conductorBeat3Compound": "\uE898", // Beat 3, compound time
    /*  */"conductorBeat4Compound": "\uE899", // Beat 4, compound time
    /*  */"conductorUnconducted": "\uE89A", // Unconducted/free passages
    /*  */"accdnRH3RanksPiccolo": "\uE8A0", // Right hand, 3 ranks, 4' stop (piccolo)
    /*  */"accdnRH3RanksClarinet": "\uE8A1", // Right hand, 3 ranks, 8' stop (clarinet)
    /*  */"accdnRH3RanksUpperTremolo8": "\uE8A2", // Right hand, 3 ranks, upper tremolo 8' stop
    /*  */"accdnRH3RanksLowerTremolo8": "\uE8A3", // Right hand, 3 ranks, lower tremolo 8' stop
    /*  */"accdnRH3RanksBassoon": "\uE8A4", // Right hand, 3 ranks, 16' stop (bassoon)
    /*  */"accdnRH3RanksOboe": "\uE8A5", // Right hand, 3 ranks, 4' stop + 8' stop (oboe)
    /*  */"accdnRH3RanksViolin": "\uE8A6", // Right hand, 3 ranks, 8' stop + upper tremolo 8' stop (violin)
    /*  */"accdnRH3RanksImitationMusette": "\uE8A7", // Right hand, 3 ranks, 4' stop + 8' stop + upper tremolo 8' stop (imitation musette)
    /*  */"accdnRH3RanksAuthenticMusette": "\uE8A8", // Right hand, 3 ranks, lower tremolo 8' stop + 8' stop + upper tremolo 8' stop (authentic musette)
    /*  */"accdnRH3RanksOrgan": "\uE8A9", // Right hand, 3 ranks, 4' stop + 16' stop (organ)
    /*  */"accdnRH3RanksHarmonium": "\uE8AA", // Right hand, 3 ranks, 4' stop + 8' stop + 16' stop (harmonium)
    /*  */"accdnRH3RanksBandoneon": "\uE8AB", // Right hand, 3 ranks, 8' stop + 16' stop (bandoneón)
    /*  */"accdnRH3RanksAccordion": "\uE8AC", // Right hand, 3 ranks, 8' stop + upper tremolo 8' stop + 16' stop (accordion)
    /*  */"accdnRH3RanksMaster": "\uE8AD", // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + upper tremolo 8' stop + 16' stop (master)
    /*  */"accdnRH3RanksTwoChoirs": "\uE8AE", // Right hand, 3 ranks, lower tremolo 8' stop + upper tremolo 8' stop
    /*  */"accdnRH3RanksTremoloLower8ve": "\uE8AF", // Right hand, 3 ranks, lower tremolo 8' stop + upper tremolo 8' stop + 16' stop
    /*  */"accdnRH3RanksTremoloUpper8ve": "\uE8B0", // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + upper tremolo 8' stop
    /*  */"accdnRH3RanksDoubleTremoloLower8ve": "\uE8B1", // Right hand, 3 ranks, lower tremolo 8' stop + 8' stop + upper tremolo 8' stop + 16' stop
    /*  */"accdnRH3RanksDoubleTremoloUpper8ve": "\uE8B2", // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + 8' stop + upper tremolo 8' stop
    /*  */"accdnRH3RanksFullFactory": "\uE8B3", // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + 8' stop + upper tremolo 8' stop + 16' stop
    /*  */"accdnRH4RanksSoprano": "\uE8B4", // Right hand, 4 ranks, soprano
    /*  */"accdnRH4RanksAlto": "\uE8B5", // Right hand, 4 ranks, alto
    /*  */"accdnRH4RanksTenor": "\uE8B6", // Right hand, 4 ranks, tenor
    /*  */"accdnRH4RanksMaster": "\uE8B7", // Right hand, 4 ranks, master
    /*  */"accdnRH4RanksSoftBass": "\uE8B8", // Right hand, 4 ranks, soft bass
    /*  */"accdnRH4RanksSoftTenor": "\uE8B9", // Right hand, 4 ranks, soft tenor
    /*  */"accdnRH4RanksBassAlto": "\uE8BA", // Right hand, 4 ranks, bass/alto
    /*  */"accdnLH2Ranks8Round": "\uE8BB", // Left hand, 2 ranks, 8' stop (round)
    /*  */"accdnLH2Ranks16Round": "\uE8BC", // Left hand, 2 ranks, 16' stop (round)
    /*  */"accdnLH2Ranks8Plus16Round": "\uE8BD", // Left hand, 2 ranks, 8' stop + 16' stop (round)
    /*  */"accdnLH2RanksMasterRound": "\uE8BE", // Left hand, 2 ranks, master (round)
    /*  */"accdnLH2RanksMasterPlus16Round": "\uE8BF", // Left hand, 2 ranks, master + 16' stop (round)
    /*  */"accdnLH2RanksFullMasterRound": "\uE8C0", // Left hand, 2 ranks, full master (round)
    /*  */"accdnLH3Ranks8Square": "\uE8C1", // Left hand, 3 ranks, 8' stop (square)
    /*  */"accdnLH3Ranks2Square": "\uE8C2", // Left hand, 3 ranks, 2' stop (square)
    /*  */"accdnLH3RanksDouble8Square": "\uE8C3", // Left hand, 3 ranks, double 8' stop (square)
    /*  */"accdnLH3Ranks2Plus8Square": "\uE8C4", // Left hand, 3 ranks, 2' stop + 8' stop (square)
    /*  */"accdnLH3RanksTuttiSquare": "\uE8C5", // Left hand, 3 ranks, 2' stop + double 8' stop (tutti) (square)
    /*  */"accdnCombRH3RanksEmpty": "\uE8C6", // Combining right hand, 3 ranks, empty
    /*  */"accdnCombRH4RanksEmpty": "\uE8C7", // Combining right hand, 4 ranks, empty
    /*  */"accdnCombLH2RanksEmpty": "\uE8C8", // Combining left hand, 2 ranks, empty
    /*  */"accdnCombLH3RanksEmptySquare": "\uE8C9", // Combining left hand, 3 ranks, empty (square)
    /*  */"accdnCombDot": "\uE8CA", // Combining accordion coupler dot
    /*  */"accdnPush": "\uE8CB", // Push
    /*  */"accdnPull": "\uE8CC", // Pull
    /*  */"accdnRicochet2": "\uE8CD", // Ricochet (2 tones)
    /*  */"accdnRicochet3": "\uE8CE", // Ricochet (3 tones)
    /*  */"accdnRicochet4": "\uE8CF", // Ricochet (4 tones)
    /*  */"accdnRicochet5": "\uE8D0", // Ricochet (5 tones)
    /*  */"accdnRicochet6": "\uE8D1", // Ricochet (6 tones)
    /*  */"accdnRicochetStem2": "\uE8D2", // Combining ricochet for stem (2 tones)
    /*  */"accdnRicochetStem3": "\uE8D3", // Combining ricochet for stem (3 tones)
    /*  */"accdnRicochetStem4": "\uE8D4", // Combining ricochet for stem (4 tones)
    /*  */"accdnRicochetStem5": "\uE8D5", // Combining ricochet for stem (5 tones)
    /*  */"accdnRicochetStem6": "\uE8D6", // Combining ricochet for stem (6 tones)
    /*  */"controlBeginBeam": "\uE8E0", // Begin beam
    /*  */"controlEndBeam": "\uE8E1", // End beam
    /*  */"controlBeginTie": "\uE8E2", // Begin tie
    /*  */"controlEndTie": "\uE8E3", // End tie
    /*  */"controlBeginSlur": "\uE8E4", // Begin slur
    /*  */"controlEndSlur": "\uE8E5", // End slur
    /*  */"controlBeginPhrase": "\uE8E6", // Begin phrase
    /*  */"controlEndPhrase": "\uE8E7", // End phrase
    /*  */"chantStaff": "\uE8F0", // Plainchant staff
    /*  */"chantStaffWide": "\uE8F1", // Plainchant staff (wide)
    /*  */"chantStaffNarrow": "\uE8F2", // Plainchant staff (narrow)
    /*  */"chantDivisioMinima": "\uE8F3", // Divisio minima
    /*  */"chantDivisioMaior": "\uE8F4", // Divisio maior
    /*  */"chantDivisioMaxima": "\uE8F5", // Divisio maxima
    /*  */"chantDivisioFinalis": "\uE8F6", // Divisio finalis
    /*  */"chantVirgula": "\uE8F7", // Virgula
    /*  */"chantCaesura": "\uE8F8", // Caesura
    /*  */"mensuralGclef": "\uE900", // Mensural G clef
    /*  */"mensuralGclefPetrucci": "\uE901", // Petrucci G clef
    /*  */"chantFclef": "\uE902", // Plainchant F clef
    /*  */"mensuralFclef": "\uE903", // Mensural F clef
    /*  */"mensuralFclefPetrucci": "\uE904", // Petrucci F clef
    /*  */"mensuralCclef": "\uE905", // Mensural C clef
    /*  */"chantCclef": "\uE906", // Plainchant C clef
    /*  */"mensuralCclefPetrucciPosLowest": "\uE907", // Petrucci C clef, lowest position
    /*  */"mensuralCclefPetrucciPosLow": "\uE908", // Petrucci C clef, low position
    /*  */"mensuralCclefPetrucciPosMiddle": "\uE909", // Petrucci C clef, middle position
    /*  */"mensuralCclefPetrucciPosHigh": "\uE90A", // Petrucci C clef, high position
    /*  */"mensuralCclefPetrucciPosHighest": "\uE90B", // Petrucci C clef, highest position
    /*  */"mensuralProlation1": "\uE910", // Tempus perfectum cum prolatione perfecta (9/8)
    /*  */"mensuralProlation2": "\uE911", // Tempus perfectum cum prolatione imperfecta (3/4)
    /*  */"mensuralProlation3": "\uE912", // Tempus perfectum cum prolatione imperfecta diminution 1 (3/8)
    /*  */"mensuralProlation4": "\uE913", // Tempus perfectum cum prolatione perfecta diminution 2 (9/16)
    /*  */"mensuralProlation5": "\uE914", // Tempus imperfectum cum prolatione perfecta (6/8)
    /*  */"mensuralProlation6": "\uE915", // Tempus imperfectum cum prolatione imperfecta (2/4)
    /*  */"mensuralProlation7": "\uE916", // Tempus imperfectum cum prolatione imperfecta diminution 1 (2/2)
    /*  */"mensuralProlation8": "\uE917", // Tempus imperfectum cum prolatione imperfecta diminution 2 (6/16)
    /*  */"mensuralProlation9": "\uE918", // Tempus imperfectum cum prolatione imperfecta diminution 3 (2/2)
    /*  */"mensuralProlation10": "\uE919", // Tempus imperfectum cum prolatione imperfecta diminution 4
    /*  */"mensuralProlation11": "\uE91A", // Tempus imperfectum cum prolatione imperfecta diminution 5
    /*  */"mensuralProportionTempusPerfectum": "\uE91B", // Tempus perfectum
    /*  */"mensuralProportionProportioDupla1": "\uE91C", // Proportio dupla 1
    /*  */"mensuralProportionProportioDupla2": "\uE91D", // Proportio dupla 2
    /*  */"mensuralProportionProportioTripla": "\uE91E", // Proportio tripla
    /*  */"mensuralProportionProportioQuadrupla": "\uE91F", // Proportio quadrupla
    /*  */"mensuralProlationCombiningDot": "\uE920", // Combining dot
    /*  */"mensuralProlationCombiningTwoDots": "\uE921", // Combining two dots
    /*  */"mensuralProlationCombiningThreeDots": "\uE922", // Combining three dots horizontal
    /*  */"mensuralProlationCombiningThreeDotsTri": "\uE923", // Combining three dots triangular
    /*  */"mensuralProlationCombiningDotVoid": "\uE924", // Combining void dot
    /*  */"mensuralProlationCombiningStroke": "\uE925", // Combining vertical stroke
    /*  */"mensuralProportion1": "\uE926", // Mensural proportion 1
    /*  */"mensuralProportion2": "\uE927", // Mensural proportion 2
    /*  */"mensuralProportion3": "\uE928", // Mensural proportion 3
    /*  */"mensuralProportion4": "\uE929", // Mensural proportion 4
    /*  */"mensuralProportionMinor": "\uE92A", // Mensural proportion minor
    /*  */"mensuralProportionMajor": "\uE92B", // Mensural proportion major
    /*  */"mensuralModusPerfectumVert": "\uE92C", // Modus perfectum, vertical
    /*  */"mensuralModusImperfectumVert": "\uE92D", // Modus imperfectum, vertical
    /*  */"mensuralTempusPerfectumHoriz": "\uE92E", // Tempus perfectum, horizontal
    /*  */"mensuralTempusImperfectumHoriz": "\uE92F", // Tempus imperfectum, horizontal
    /*  */"mensuralNoteheadMaximaBlack": "\uE930", // Maxima notehead, black
    /*  */"mensuralNoteheadMaximaVoid": "\uE931", // Maxima notehead, void
    /*  */"mensuralNoteheadMaximaBlackVoid": "\uE932", // Maxima notehead, black and void
    /*  */"mensuralNoteheadMaximaWhite": "\uE933", // Maxima notehead, white
    /*  */"mensuralNoteheadLongaBlack": "\uE934", // Longa/brevis notehead, black
    /*  */"mensuralNoteheadLongaVoid": "\uE935", // Longa/brevis notehead, void
    /*  */"mensuralNoteheadLongaBlackVoid": "\uE936", // Longa/brevis notehead, black and void
    /*  */"mensuralNoteheadLongaWhite": "\uE937", // Longa/brevis notehead, white
    /*  */"mensuralNoteheadSemibrevisBlack": "\uE938", // Semibrevis notehead, black
    /*  */"mensuralNoteheadSemibrevisVoid": "\uE939", // Semibrevis notehead, void
    /*  */"mensuralNoteheadSemibrevisBlackVoid": "\uE93A", // Semibrevis notehead, black and void
    /*  */"mensuralNoteheadSemibrevisBlackVoidTurned": "\uE93B", // Semibrevis notehead, black and void (turned)
    /*  */"mensuralNoteheadMinimaWhite": "\uE93C", // Minima notehead, white
    /*  */"mensuralNoteheadSemiminimaWhite": "\uE93D", // Semiminima/fusa notehead, white
    /*  */"mensuralCombStemUp": "\uE93E", // Combining stem up
    /*  */"mensuralCombStemDown": "\uE93F", // Combining stem down
    /*  */"mensuralCombStemDiagonal": "\uE940", // Combining stem diagonal
    /*  */"mensuralCombStemUpFlagRight": "\uE941", // Combining stem with flag right up
    /*  */"mensuralCombStemDownFlagRight": "\uE942", // Combining stem with flag right down
    /*  */"mensuralCombStemUpFlagLeft": "\uE943", // Combining stem with flag left up
    /*  */"mensuralCombStemDownFlagLeft": "\uE944", // Combining stem with flag left down
    /*  */"mensuralCombStemUpFlagFlared": "\uE945", // Combining stem with flared flag up
    /*  */"mensuralCombStemDownFlagFlared": "\uE946", // Combining stem with flared flag down
    /*  */"mensuralCombStemUpFlagExtended": "\uE947", // Combining stem with extended flag up
    /*  */"mensuralCombStemDownFlagExtended": "\uE948", // Combining stem with extended flag down
    /*  */"mensuralCombStemUpFlagSemiminima": "\uE949", // Combining stem with semiminima flag up
    /*  */"mensuralCombStemDownFlagSemiminima": "\uE94A", // Combining stem with semiminima flag down
    /*  */"mensuralCombStemUpFlagFusa": "\uE94B", // Combining stem with fusa flag up
    /*  */"mensuralCombStemDownFlagFusa": "\uE94C", // Combining stem with fusa flag down
    /*  */"mensuralBlackMaxima": "\uE950", // Black mensural maxima
    /*  */"mensuralBlackLonga": "\uE951", // Black mensural longa
    /*  */"mensuralBlackBrevis": "\uE952", // Black mensural brevis
    /*  */"mensuralBlackSemibrevis": "\uE953", // Black mensural semibrevis
    /*  */"mensuralBlackMinima": "\uE954", // Black mensural minima
    /*  */"mensuralBlackSemiminima": "\uE955", // Black mensural semiminima
    /*  */"mensuralBlackBrevisVoid": "\uE956", // Black mensural void brevis
    /*  */"mensuralBlackSemibrevisVoid": "\uE957", // Black mensural void semibrevis
    /*  */"mensuralBlackMinimaVoid": "\uE958", // Black mensural void minima
    /*  */"mensuralBlackSemibrevisCaudata": "\uE959", // Black mensural semibrevis caudata
    /*  */"mensuralBlackDragma": "\uE95A", // Black mensural dragma
    /*  */"mensuralBlackSemibrevisOblique": "\uE95B", // Black mensural oblique semibrevis
    /*  */"mensuralWhiteMaxima": "\uE95C", // White mensural maxima
    /*  */"mensuralWhiteLonga": "\uE95D", // White mensural longa
    /*  */"mensuralWhiteBrevis": "\uE95E", // White mensural brevis
    /*  */"mensuralWhiteMinima": "\uE95F", // White mensural minima
    /*  */"mensuralWhiteSemiminima": "\uE960", // White mensural semiminima
    /*  */"mensuralWhiteFusa": "\uE961", // White mensural fusa
    /*  */"mensuralWhiteSemibrevis": "\uE962", // White mensural semibrevis
    /*  */"mensuralObliqueAsc2ndBlack": "\uE970", // Oblique form, ascending 2nd, black
    /*  */"mensuralObliqueAsc2ndVoid": "\uE971", // Oblique form, ascending 2nd, void
    /*  */"mensuralObliqueAsc2ndBlackVoid": "\uE972", // Oblique form, ascending 2nd, black and void
    /*  */"mensuralObliqueAsc2ndWhite": "\uE973", // Oblique form, ascending 2nd, white
    /*  */"mensuralObliqueAsc3rdBlack": "\uE974", // Oblique form, ascending 3rd, black
    /*  */"mensuralObliqueAsc3rdVoid": "\uE975", // Oblique form, ascending 3rd, void
    /*  */"mensuralObliqueAsc3rdBlackVoid": "\uE976", // Oblique form, ascending 3rd, black and void
    /*  */"mensuralObliqueAsc3rdWhite": "\uE977", // Oblique form, ascending 3rd, white
    /*  */"mensuralObliqueAsc4thBlack": "\uE978", // Oblique form, ascending 4th, black
    /*  */"mensuralObliqueAsc4thVoid": "\uE979", // Oblique form, ascending 4th, void
    /*  */"mensuralObliqueAsc4thBlackVoid": "\uE97A", // Oblique form, ascending 4th, black and void
    /*  */"mensuralObliqueAsc4thWhite": "\uE97B", // Oblique form, ascending 4th, white
    /*  */"mensuralObliqueAsc5thBlack": "\uE97C", // Oblique form, ascending 5th, black
    /*  */"mensuralObliqueAsc5thVoid": "\uE97D", // Oblique form, ascending 5th, void
    /*  */"mensuralObliqueAsc5thBlackVoid": "\uE97E", // Oblique form, ascending 5th, black and void
    /*  */"mensuralObliqueAsc5thWhite": "\uE97F", // Oblique form, ascending 5th, white
    /*  */"mensuralObliqueDesc2ndBlack": "\uE980", // Oblique form, descending 2nd, black
    /*  */"mensuralObliqueDesc2ndVoid": "\uE981", // Oblique form, descending 2nd, void
    /*  */"mensuralObliqueDesc2ndBlackVoid": "\uE982", // Oblique form, descending 2nd, black and void
    /*  */"mensuralObliqueDesc2ndWhite": "\uE983", // Oblique form, descending 2nd, white
    /*  */"mensuralObliqueDesc3rdBlack": "\uE984", // Oblique form, descending 3rd, black
    /*  */"mensuralObliqueDesc3rdVoid": "\uE985", // Oblique form, descending 3rd, void
    /*  */"mensuralObliqueDesc3rdBlackVoid": "\uE986", // Oblique form, descending 3rd, black and void
    /*  */"mensuralObliqueDesc3rdWhite": "\uE987", // Oblique form, descending 3rd, white
    /*  */"mensuralObliqueDesc4thBlack": "\uE988", // Oblique form, descending 4th, black
    /*  */"mensuralObliqueDesc4thVoid": "\uE989", // Oblique form, descending 4th, void
    /*  */"mensuralObliqueDesc4thBlackVoid": "\uE98A", // Oblique form, descending 4th, black and void
    /*  */"mensuralObliqueDesc4thWhite": "\uE98B", // Oblique form, descending 4th, white
    /*  */"mensuralObliqueDesc5thBlack": "\uE98C", // Oblique form, descending 5th, black
    /*  */"mensuralObliqueDesc5thVoid": "\uE98D", // Oblique form, descending 5th, void
    /*  */"mensuralObliqueDesc5thBlackVoid": "\uE98E", // Oblique form, descending 5th, black and void
    /*  */"mensuralObliqueDesc5thWhite": "\uE98F", // Oblique form, descending 5th, white
    /*  */"chantPunctum": "\uE990", // Punctum
    /*  */"chantPunctumInclinatum": "\uE991", // Punctum inclinatum
    /*  */"chantPunctumInclinatumAuctum": "\uE992", // Punctum inclinatum auctum
    /*  */"chantPunctumInclinatumDeminutum": "\uE993", // Punctum inclinatum deminutum
    /*  */"chantAuctumAsc": "\uE994", // Punctum auctum, ascending
    /*  */"chantAuctumDesc": "\uE995", // Punctum auctum, descending
    /*  */"chantPunctumVirga": "\uE996", // Punctum virga
    /*  */"chantPunctumVirgaReversed": "\uE997", // Punctum virga, reversed
    /*  */"chantPunctumCavum": "\uE998", // Punctum cavum
    /*  */"chantPunctumLinea": "\uE999", // Punctum linea
    /*  */"chantPunctumLineaCavum": "\uE99A", // Punctum linea cavum
    /*  */"chantQuilisma": "\uE99B", // Quilisma
    /*  */"chantOriscusAscending": "\uE99C", // Oriscus ascending
    /*  */"chantOriscusDescending": "\uE99D", // Oriscus descending
    /*  */"chantOriscusLiquescens": "\uE99E", // Oriscus liquescens
    /*  */"chantStrophicus": "\uE99F", // Strophicus
    /*  */"chantStrophicusAuctus": "\uE9A0", // Strophicus auctus
    /*  */"chantPunctumDeminutum": "\uE9A1", // Punctum deminutum
    /*  */"chantPodatusLower": "\uE9B0", // Podatus, lower
    /*  */"chantPodatusUpper": "\uE9B1", // Podatus, upper
    /*  */"chantDeminutumUpper": "\uE9B2", // Punctum deminutum, upper
    /*  */"chantDeminutumLower": "\uE9B3", // Punctum deminutum, lower
    /*  */"chantEntryLineAsc2nd": "\uE9B4", // Entry line, ascending 2nd
    /*  */"chantEntryLineAsc3rd": "\uE9B5", // Entry line, ascending 3rd
    /*  */"chantEntryLineAsc4th": "\uE9B6", // Entry line, ascending 4th
    /*  */"chantEntryLineAsc5th": "\uE9B7", // Entry line, ascending 5th
    /*  */"chantEntryLineAsc6th": "\uE9B8", // Entry line, ascending 6th
    /*  */"chantLigaturaDesc2nd": "\uE9B9", // Ligated stroke, descending 2nd
    /*  */"chantLigaturaDesc3rd": "\uE9BA", // Ligated stroke, descending 3rd
    /*  */"chantLigaturaDesc4th": "\uE9BB", // Ligated stroke, descending 4th
    /*  */"chantLigaturaDesc5th": "\uE9BC", // Ligated stroke, descending 5th
    /*  */"chantConnectingLineAsc2nd": "\uE9BD", // Connecting line, ascending 2nd
    /*  */"chantConnectingLineAsc3rd": "\uE9BE", // Connecting line, ascending 3rd
    /*  */"chantConnectingLineAsc4th": "\uE9BF", // Connecting line, ascending 4th
    /*  */"chantConnectingLineAsc5th": "\uE9C0", // Connecting line, ascending 5th
    /*  */"chantConnectingLineAsc6th": "\uE9C1", // Connecting line, ascending 6th
    /*  */"chantStrophicusLiquescens2nd": "\uE9C2", // Strophicus liquescens, 2nd
    /*  */"chantStrophicusLiquescens3rd": "\uE9C3", // Strophicus liquescens, 3rd
    /*  */"chantStrophicusLiquescens4th": "\uE9C4", // Strophicus liquescens, 4th
    /*  */"chantStrophicusLiquescens5th": "\uE9C5", // Strophicus liquescens, 5th
    /*  */"chantIctusAbove": "\uE9D0", // Ictus above
    /*  */"chantIctusBelow": "\uE9D1", // Ictus below
    /*  */"chantCirculusAbove": "\uE9D2", // Circulus above
    /*  */"chantCirculusBelow": "\uE9D3", // Circulus below
    /*  */"chantSemicirculusAbove": "\uE9D4", // Semicirculus above
    /*  */"chantSemicirculusBelow": "\uE9D5", // Semicirculus below
    /*  */"chantAccentusAbove": "\uE9D6", // Accentus above
    /*  */"chantAccentusBelow": "\uE9D7", // Accentus below
    /*  */"chantEpisema": "\uE9D8", // Episema
    /*  */"chantAugmentum": "\uE9D9", // Augmentum (mora)
    /*  */"medRenFlatSoftB": "\uE9E0", // Flat, soft b (fa)
    /*  */"medRenFlatHardB": "\uE9E1", // Flat, hard b (mi)
    /*  */"medRenNatural": "\uE9E2", // Natural
    /*  */"medRenSharpCroix": "\uE9E3", // Croix
    /*  */"medRenFlatWithDot": "\uE9E4", // Flat with dot
    /*  */"medRenNaturalWithCross": "\uE9E5", // Natural with interrupted cross
    /*  */"mensuralRestMaxima": "\uE9F0", // Maxima rest
    /*  */"mensuralRestLongaPerfecta": "\uE9F1", // Longa perfecta rest
    /*  */"mensuralRestLongaImperfecta": "\uE9F2", // Longa imperfecta rest
    /*  */"mensuralRestBrevis": "\uE9F3", // Brevis rest
    /*  */"mensuralRestSemibrevis": "\uE9F4", // Semibrevis rest
    /*  */"mensuralRestMinima": "\uE9F5", // Minima rest
    /*  */"mensuralRestSemiminima": "\uE9F6", // Semiminima rest
    /*  */"mensuralRestFusa": "\uE9F7", // Fusa rest
    /*  */"mensuralRestSemifusa": "\uE9F8", // Semifusa rest
    /*  */"mensuralSignumUp": "\uEA00", // Signum congruentiae up
    /*  */"mensuralSignumDown": "\uEA01", // Signum congruentiae down
    /*  */"mensuralCustosUp": "\uEA02", // Mensural custos up
    /*  */"mensuralCustosDown": "\uEA03", // Mensural custos down
    /*  */"chantCustosStemUpPosLowest": "\uEA04", // Plainchant custos, stem up, lowest position
    /*  */"chantCustosStemUpPosLow": "\uEA05", // Plainchant custos, stem up, low position
    /*  */"chantCustosStemUpPosMiddle": "\uEA06", // Plainchant custos, stem up, middle position
    /*  */"chantCustosStemDownPosMiddle": "\uEA07", // Plainchant custos, stem down, middle position
    /*  */"chantCustosStemDownPosHigh": "\uEA08", // Plainchant custos, stem down, high position
    /*  */"chantCustosStemDownPosHighest": "\uEA09", // Plainchant custos, stem down, highest position
    /*  */"mensuralCustosCheckmark": "\uEA0A", // Checkmark custos
    /*  */"mensuralCustosTurn": "\uEA0B", // Turn-like custos
    /*  */"mensuralColorationStartSquare": "\uEA0C", // Coloration start, square
    /*  */"mensuralColorationEndSquare": "\uEA0D", // Coloration end, square
    /*  */"mensuralColorationStartRound": "\uEA0E", // Coloration start, round
    /*  */"mensuralColorationEndRound": "\uEA0F", // Coloration end, round
    /*  */"mensuralAlterationSign": "\uEA10", // Alteration sign
    /*  */"ornamentQuilisma": "\uEA20", // Quilisma
    /*  */"ornamentOriscus": "\uEA21", // Oriscus
    /*  */"medRenLiquescenceCMN": "\uEA22", // Liquescence
    /*  */"medRenPlicaCMN": "\uEA23", // Plica
    /*  */"medRenGClefCMN": "\uEA24", // G clef (Corpus Monodicum)
    /*  */"medRenPunctumCMN": "\uEA25", // Punctum (Corpus Monodicum)
    /*  */"medRenLiquescentAscCMN": "\uEA26", // Liquescent ascending (Corpus Monodicum)
    /*  */"medRenLiquescentDescCMN": "\uEA27", // Liquescent descending (Corpus Monodicum)
    /*  */"medRenQuilismaCMN": "\uEA28", // Quilisma (Corpus Monodicum)
    /*  */"medRenStrophicusCMN": "\uEA29", // Strophicus (Corpus Monodicum)
    /*  */"medRenOriscusCMN": "\uEA2A", // Oriscus (Corpus Monodicum)
    /*  */"daseianGraves1": "\uEA30", // Daseian graves 1
    /*  */"daseianGraves2": "\uEA31", // Daseian graves 2
    /*  */"daseianGraves3": "\uEA32", // Daseian graves 3
    /*  */"daseianGraves4": "\uEA33", // Daseian graves 4
    /*  */"daseianFinales1": "\uEA34", // Daseian finales 1
    /*  */"daseianFinales2": "\uEA35", // Daseian finales 2
    /*  */"daseianFinales3": "\uEA36", // Daseian finales 3
    /*  */"daseianFinales4": "\uEA37", // Daseian finales 4
    /*  */"daseianSuperiores1": "\uEA38", // Daseian superiores 1
    /*  */"daseianSuperiores2": "\uEA39", // Daseian superiores 2
    /*  */"daseianSuperiores3": "\uEA3A", // Daseian superiores 3
    /*  */"daseianSuperiores4": "\uEA3B", // Daseian superiores 4
    /*  */"daseianExcellentes1": "\uEA3C", // Daseian excellentes 1
    /*  */"daseianExcellentes2": "\uEA3D", // Daseian excellentes 2
    /*  */"daseianExcellentes3": "\uEA3E", // Daseian excellentes 3
    /*  */"daseianExcellentes4": "\uEA3F", // Daseian excellentes 4
    /*  */"daseianResidua1": "\uEA40", // Daseian residua 1
    /*  */"daseianResidua2": "\uEA41", // Daseian residua 2
    /*  */"figbass0": "\uEA50", // Figured bass 0
    /*  */"figbass1": "\uEA51", // Figured bass 1
    /*  */"figbass2": "\uEA52", // Figured bass 2
    /*  */"figbass2Raised": "\uEA53", // Figured bass 2 raised by half-step
    /*  */"figbass3": "\uEA54", // Figured bass 3
    /*  */"figbass4": "\uEA55", // Figured bass 4
    /*  */"figbass4Raised": "\uEA56", // Figured bass 4 raised by half-step
    /*  */"figbass5": "\uEA57", // Figured bass 5
    /*  */"figbass5Raised1": "\uEA58", // Figured bass 5 raised by half-step
    /*  */"figbass5Raised2": "\uEA59", // Figured bass 5 raised by half-step 2
    /*  */"figbass5Raised3": "\uEA5A", // Figured bass diminished 5
    /*  */"figbass6": "\uEA5B", // Figured bass 6
    /*  */"figbass6Raised": "\uEA5C", // Figured bass 6 raised by half-step
    /*  */"figbass7": "\uEA5D", // Figured bass 7
    /*  */"figbass7Raised1": "\uEA5E", // Figured bass 7 raised by half-step
    /*  */"figbass7Raised2": "\uEA5F", // Figured bass 7 lowered by a half-step
    /*  */"figbass8": "\uEA60", // Figured bass 8
    /*  */"figbass9": "\uEA61", // Figured bass 9
    /*  */"figbass9Raised": "\uEA62", // Figured bass 9 raised by half-step
    /*  */"figbassDoubleFlat": "\uEA63", // Figured bass double flat
    /*  */"figbassFlat": "\uEA64", // Figured bass flat
    /*  */"figbassNatural": "\uEA65", // Figured bass natural
    /*  */"figbassSharp": "\uEA66", // Figured bass sharp
    /*  */"figbassDoubleSharp": "\uEA67", // Figured bass double sharp
    /*  */"figbassBracketLeft": "\uEA68", // Figured bass [
    /*  */"figbassBracketRight": "\uEA69", // Figured bass ]
    /*  */"figbassParensLeft": "\uEA6A", // Figured bass (
    /*  */"figbassParensRight": "\uEA6B", // Figured bass )
    /*  */"figbassPlus": "\uEA6C", // Figured bass +
    /*  */"figbassCombiningRaising": "\uEA6D", // Combining raise
    /*  */"figbassCombiningLowering": "\uEA6E", // Combining lower
    /*  */"figbass6Raised2": "\uEA6F", // Figured bass 6 raised by half-step 2
    /*  */"functionZero": "\uEA70", // Function theory 0
    /*  */"functionOne": "\uEA71", // Function theory 1
    /*  */"functionTwo": "\uEA72", // Function theory 2
    /*  */"functionThree": "\uEA73", // Function theory 3
    /*  */"functionFour": "\uEA74", // Function theory 4
    /*  */"functionFive": "\uEA75", // Function theory 5
    /*  */"functionSix": "\uEA76", // Function theory 6
    /*  */"functionSeven": "\uEA77", // Function theory 7
    /*  */"functionEight": "\uEA78", // Function theory 8
    /*  */"functionNine": "\uEA79", // Function theory 9
    /*  */"functionLessThan": "\uEA7A", // Function theory less than
    /*  */"functionMinus": "\uEA7B", // Function theory minus
    /*  */"functionGreaterThan": "\uEA7C", // Function theory greater than
    /*  */"functionSSUpper": "\uEA7D", // Function theory major subdominant of subdominant
    /*  */"functionSSLower": "\uEA7E", // Function theory minor subdominant of subdominant
    /*  */"functionDUpper": "\uEA7F", // Function theory major dominant
    /*  */"functionDLower": "\uEA80", // Function theory minor dominant
    /*  */"functionDD": "\uEA81", // Function theory dominant of dominant
    /*  */"functionSlashedDD": "\uEA82", // Function theory double dominant seventh
    /*  */"functionGUpper": "\uEA83", // Function theory G
    /*  */"functionGLower": "\uEA84", // Function theory g
    /*  */"functionNUpper": "\uEA85", // Function theory N
    /*  */"functionNLower": "\uEA86", // Function theory n
    /*  */"functionPUpper": "\uEA87", // Function theory P
    /*  */"functionPLower": "\uEA88", // Function theory p
    /*  */"functionSUpper": "\uEA89", // Function theory major subdominant
    /*  */"functionSLower": "\uEA8A", // Function theory minor subdominant
    /*  */"functionTUpper": "\uEA8B", // Function theory tonic
    /*  */"functionTLower": "\uEA8C", // Function theory minor tonic
    /*  */"functionVUpper": "\uEA8D", // Function theory V
    /*  */"functionVLower": "\uEA8E", // Function theory v
    /*  */"functionBracketLeft": "\uEA8F", // Function theory bracket left
    /*  */"functionBracketRight": "\uEA90", // Function theory bracket right
    /*  */"functionParensLeft": "\uEA91", // Function theory parenthesis left
    /*  */"functionParensRight": "\uEA92", // Function theory parenthesis right
    /*  */"functionAngleLeft": "\uEA93", // Function theory angle bracket left
    /*  */"functionAngleRight": "\uEA94", // Function theory angle bracket right
    /*  */"functionRepetition1": "\uEA95", // Function theory repetition 1
    /*  */"functionRepetition2": "\uEA96", // Function theory repetition 2
    /*  */"functionRing": "\uEA97", // Function theory prefix ring
    /*  */"functionPlus": "\uEA98", // Function theory prefix plus
    /*  */"functionFUpper": "\uEA99", // Function theory F
    /*  */"functionIUpper": "\uEA9A", // Function theory I
    /*  */"functionILower": "\uEA9B", // Function theory i
    /*  */"functionKUpper": "\uEA9C", // Function theory K
    /*  */"functionKLower": "\uEA9D", // Function theory k
    /*  */"functionLUpper": "\uEA9E", // Function theory L
    /*  */"functionLLower": "\uEA9F", // Function theory l
    /*  */"wiggleTrillFastest": "\uEAA0", // Trill wiggle segment, fastest
    /*  */"wiggleTrillFasterStill": "\uEAA1", // Trill wiggle segment, faster still
    /*  */"wiggleTrillFaster": "\uEAA2", // Trill wiggle segment, faster
    /*  */"wiggleTrillFast": "\uEAA3", // Trill wiggle segment, fast
    /*  */"wiggleTrill": "\uEAA4", // Trill wiggle segment
    /*  */"wiggleTrillSlow": "\uEAA5", // Trill wiggle segment, slow
    /*  */"wiggleTrillSlower": "\uEAA6", // Trill wiggle segment, slower
    /*  */"wiggleTrillSlowerStill": "\uEAA7", // Trill wiggle segment, slower still
    /*  */"wiggleTrillSlowest": "\uEAA8", // Trill wiggle segment, slowest
    /*  */"wiggleArpeggiatoUp": "\uEAA9", // Arpeggiato wiggle segment, upwards
    /*  */"wiggleArpeggiatoDown": "\uEAAA", // Arpeggiato wiggle segment, downwards
    /*  */"wiggleArpeggiatoUpSwash": "\uEAAB", // Arpeggiato upward swash
    /*  */"wiggleArpeggiatoDownSwash": "\uEAAC", // Arpeggiato downward swash
    /*  */"wiggleArpeggiatoUpArrow": "\uEAAD", // Arpeggiato arrowhead up
    /*  */"wiggleArpeggiatoDownArrow": "\uEAAE", // Arpeggiato arrowhead down
    /*  */"wiggleGlissando": "\uEAAF", // Glissando wiggle segment
    /*  */"wiggleVibrato": "\uEAB0", // Vibrato / shake wiggle segment
    /*  */"wiggleVibratoWide": "\uEAB1", // Wide vibrato / shake wiggle segment
    /*  */"guitarVibratoStroke": "\uEAB2", // Vibrato wiggle segment
    /*  */"guitarWideVibratoStroke": "\uEAB3", // Wide vibrato wiggle segment
    /*  */"wiggleWavyNarrow": "\uEAB4", // Narrow wavy line segment
    /*  */"wiggleWavy": "\uEAB5", // Wavy line segment
    /*  */"wiggleWavyWide": "\uEAB6", // Wide wavy line segment
    /*  */"wiggleSquareWaveNarrow": "\uEAB7", // Narrow square wave line segment
    /*  */"wiggleSquareWave": "\uEAB8", // Square wave line segment
    /*  */"wiggleSquareWaveWide": "\uEAB9", // Wide square wave line segment
    /*  */"wiggleSawtoothNarrow": "\uEABA", // Narrow sawtooth line segment
    /*  */"wiggleSawtooth": "\uEABB", // Sawtooth line segment
    /*  */"wiggleSawtoothWide": "\uEABC", // Wide sawtooth line segment
    /*  */"wiggleGlissandoGroup1": "\uEABD", // Group glissando 1
    /*  */"wiggleGlissandoGroup2": "\uEABE", // Group glissando 2
    /*  */"wiggleGlissandoGroup3": "\uEABF", // Group glissando 3
    /*  */"wiggleCircularConstant": "\uEAC0", // Constant circular motion segment
    /*  */"wiggleCircularConstantFlipped": "\uEAC1", // Constant circular motion segment (flipped)
    /*  */"wiggleCircularConstantLarge": "\uEAC2", // Constant circular motion segment (large)
    /*  */"wiggleCircularConstantFlippedLarge": "\uEAC3", // Constant circular motion segment (flipped, large)
    /*  */"wiggleCircularStart": "\uEAC4", // Circular motion start
    /*  */"wiggleCircularLargest": "\uEAC5", // Circular motion segment, largest
    /*  */"wiggleCircularLargerStill": "\uEAC6", // Circular motion segment, larger still
    /*  */"wiggleCircularLarger": "\uEAC7", // Circular motion segment, larger
    /*  */"wiggleCircularLarge": "\uEAC8", // Circular motion segment, large
    /*  */"wiggleCircular": "\uEAC9", // Circular motion segment
    /*  */"wiggleCircularSmall": "\uEACA", // Circular motion segment, small
    /*  */"wiggleCircularEnd": "\uEACB", // Circular motion end
    /*  */"wiggleVibratoStart": "\uEACC", // Vibrato start
    /*  */"wiggleVibratoSmallestFastest": "\uEACD", // Vibrato smallest, fastest
    /*  */"wiggleVibratoSmallestFasterStill": "\uEACE", // Vibrato smallest, faster still
    /*  */"wiggleVibratoSmallestFaster": "\uEACF", // Vibrato smallest, faster
    /*  */"wiggleVibratoSmallestFast": "\uEAD0", // Vibrato smallest, fast
    /*  */"wiggleVibratoSmallestSlow": "\uEAD1", // Vibrato smallest, slow
    /*  */"wiggleVibratoSmallestSlower": "\uEAD2", // Vibrato smallest, slower
    /*  */"wiggleVibratoSmallestSlowest": "\uEAD3", // Vibrato smallest, slowest
    /*  */"wiggleVibratoSmallFastest": "\uEAD4", // Vibrato small, fastest
    /*  */"wiggleVibratoSmallFasterStill": "\uEAD5", // Vibrato small, faster still
    /*  */"wiggleVibratoSmallFaster": "\uEAD6", // Vibrato small, faster
    /*  */"wiggleVibratoSmallFast": "\uEAD7", // Vibrato small, fast
    /*  */"wiggleVibratoSmallSlow": "\uEAD8", // Vibrato small, slow
    /*  */"wiggleVibratoSmallSlower": "\uEAD9", // Vibrato small, slower
    /*  */"wiggleVibratoSmallSlowest": "\uEADA", // Vibrato small, slowest
    /*  */"wiggleVibratoMediumFastest": "\uEADB", // Vibrato medium, fastest
    /*  */"wiggleVibratoMediumFasterStill": "\uEADC", // Vibrato medium, faster still
    /*  */"wiggleVibratoMediumFaster": "\uEADD", // Vibrato medium, faster
    /*  */"wiggleVibratoMediumFast": "\uEADE", // Vibrato medium, fast
    /*  */"wiggleVibratoMediumSlow": "\uEADF", // Vibrato medium, slow
    /*  */"wiggleVibratoMediumSlower": "\uEAE0", // Vibrato medium, slower
    /*  */"wiggleVibratoMediumSlowest": "\uEAE1", // Vibrato medium, slowest
    /*  */"wiggleVibratoLargeFastest": "\uEAE2", // Vibrato large, fastest
    /*  */"wiggleVibratoLargeFasterStill": "\uEAE3", // Vibrato large, faster still
    /*  */"wiggleVibratoLargeFaster": "\uEAE4", // Vibrato large, faster
    /*  */"wiggleVibratoLargeFast": "\uEAE5", // Vibrato large, fast
    /*  */"wiggleVibratoLargeSlow": "\uEAE6", // Vibrato large, slow
    /*  */"wiggleVibratoLargeSlower": "\uEAE7", // Vibrato large, slower
    /*  */"wiggleVibratoLargeSlowest": "\uEAE8", // Vibrato large, slowest
    /*  */"wiggleVibratoLargestFastest": "\uEAE9", // Vibrato largest, fastest
    /*  */"wiggleVibratoLargestFasterStill": "\uEAEA", // Vibrato largest, faster still
    /*  */"wiggleVibratoLargestFaster": "\uEAEB", // Vibrato largest, faster
    /*  */"wiggleVibratoLargestFast": "\uEAEC", // Vibrato largest, fast
    /*  */"wiggleVibratoLargestSlow": "\uEAED", // Vibrato largest, slow
    /*  */"wiggleVibratoLargestSlower": "\uEAEE", // Vibrato largest, slower
    /*  */"wiggleVibratoLargestSlowest": "\uEAEF", // Vibrato largest, slowest
    /*  */"wiggleRandom1": "\uEAF0", // Quasi-random squiggle 1
    /*  */"wiggleRandom2": "\uEAF1", // Quasi-random squiggle 2
    /*  */"wiggleRandom3": "\uEAF2", // Quasi-random squiggle 3
    /*  */"wiggleRandom4": "\uEAF3", // Quasi-random squiggle 4
    /*  */"beamAccelRit1": "\uEAF4", // Accel./rit. beam 1 (widest)
    /*  */"beamAccelRit2": "\uEAF5", // Accel./rit. beam 2
    /*  */"beamAccelRit3": "\uEAF6", // Accel./rit. beam 3
    /*  */"beamAccelRit4": "\uEAF7", // Accel./rit. beam 4
    /*  */"beamAccelRit5": "\uEAF8", // Accel./rit. beam 5
    /*  */"beamAccelRit6": "\uEAF9", // Accel./rit. beam 6
    /*  */"beamAccelRit7": "\uEAFA", // Accel./rit. beam 7
    /*  */"beamAccelRit8": "\uEAFB", // Accel./rit. beam 8
    /*  */"beamAccelRit9": "\uEAFC", // Accel./rit. beam 9
    /*  */"beamAccelRit10": "\uEAFD", // Accel./rit. beam 10
    /*  */"beamAccelRit11": "\uEAFE", // Accel./rit. beam 11
    /*  */"beamAccelRit12": "\uEAFF", // Accel./rit. beam 12
    /*  */"beamAccelRit13": "\uEB00", // Accel./rit. beam 13
    /*  */"beamAccelRit14": "\uEB01", // Accel./rit. beam 14
    /*  */"beamAccelRit15": "\uEB02", // Accel./rit. beam 15 (narrowest)
    /*  */"beamAccelRitFinal": "\uEB03", // Accel./rit. beam terminating line
    /*  */"elecMicrophone": "\uEB10", // Microphone
    /*  */"elecHeadphones": "\uEB11", // Headphones
    /*  */"elecHeadset": "\uEB12", // Headset
    /*  */"elecDisc": "\uEB13", // Disc
    /*  */"elecTape": "\uEB14", // Tape
    /*  */"elecMixingConsole": "\uEB15", // Mixing console
    /*  */"elecUSB": "\uEB16", // USB connection
    /*  */"elecVideoCamera": "\uEB17", // Video camera
    /*  */"elecMonitor": "\uEB18", // Monitor
    /*  */"elecProjector": "\uEB19", // Projector
    /*  */"elecLoudspeaker": "\uEB1A", // Loudspeaker
    /*  */"elecCamera": "\uEB1B", // Camera
    /*  */"elecPlay": "\uEB1C", // Play
    /*  */"elecStop": "\uEB1D", // Stop
    /*  */"elecPause": "\uEB1E", // Pause
    /*  */"elecFastForward": "\uEB1F", // Fast-forward
    /*  */"elecRewind": "\uEB20", // Rewind
    /*  */"elecSkipForwards": "\uEB21", // Skip forwards
    /*  */"elecSkipBackwards": "\uEB22", // Skip backwards
    /*  */"elecLoop": "\uEB23", // Loop
    /*  */"elecReplay": "\uEB24", // Replay
    /*  */"elecShuffle": "\uEB25", // Shuffle
    /*  */"elecMute": "\uEB26", // Mute
    /*  */"elecUnmute": "\uEB27", // Unmute
    /*  */"elecMicrophoneMute": "\uEB28", // Mute microphone
    /*  */"elecMicrophoneUnmute": "\uEB29", // Unmute microphone
    /*  */"elecPowerOnOff": "\uEB2A", // Power on/off
    /*  */"elecEject": "\uEB2B", // Eject
    /*  */"elecVolumeFader": "\uEB2C", // Combining volume fader
    /*  */"elecVolumeFaderThumb": "\uEB2D", // Combining volume fader thumb
    /*  */"elecVolumeLevel0": "\uEB2E", // Volume level 0%
    /*  */"elecVolumeLevel20": "\uEB2F", // Volume level 20%
    /*  */"elecVolumeLevel40": "\uEB30", // Volume level 40%
    /*  */"elecVolumeLevel60": "\uEB31", // Volume level 60%
    /*  */"elecVolumeLevel80": "\uEB32", // Volume level 80%
    /*  */"elecVolumeLevel100": "\uEB33", // Volume level 100%
    /*  */"elecMIDIIn": "\uEB34", // MIDI in
    /*  */"elecMIDIOut": "\uEB35", // MIDI out
    /*  */"elecMIDIController0": "\uEB36", // MIDI controller 0%
    /*  */"elecMIDIController20": "\uEB37", // MIDI controller 20%
    /*  */"elecMIDIController40": "\uEB38", // MIDI controller 40%
    /*  */"elecMIDIController60": "\uEB39", // MIDI controller 60%
    /*  */"elecMIDIController80": "\uEB3A", // MIDI controller 80%
    /*  */"elecMIDIController100": "\uEB3B", // MIDI controller 100%
    /*  */"elecAudioMono": "\uEB3C", // Mono audio setup
    /*  */"elecAudioStereo": "\uEB3D", // Stereo audio setup
    /*  */"elecAudioChannelsOne": "\uEB3E", // One channel (mono)
    /*  */"elecAudioChannelsTwo": "\uEB3F", // Two channels (stereo)
    /*  */"elecAudioChannelsThreeFrontal": "\uEB40", // Three channels (frontal)
    /*  */"elecAudioChannelsThreeSurround": "\uEB41", // Three channels (surround)
    /*  */"elecAudioChannelsFour": "\uEB42", // Four channels
    /*  */"elecAudioChannelsFive": "\uEB43", // Five channels
    /*  */"elecAudioChannelsSix": "\uEB44", // Six channels (5.1 surround)
    /*  */"elecAudioChannelsSeven": "\uEB45", // Seven channels
    /*  */"elecAudioChannelsEight": "\uEB46", // Eight channels (7.1 surround)
    /*  */"elecLineIn": "\uEB47", // Line in
    /*  */"elecLineOut": "\uEB48", // Line out
    /*  */"elecAudioIn": "\uEB49", // Audio in
    /*  */"elecAudioOut": "\uEB4A", // Audio out
    /*  */"elecVideoIn": "\uEB4B", // Video in
    /*  */"elecVideoOut": "\uEB4C", // Video out
    /*  */"elecDataIn": "\uEB4D", // Data in
    /*  */"elecDataOut": "\uEB4E", // Data out
    /*  */"elecDownload": "\uEB4F", // Download
    /*  */"elecUpload": "\uEB50", // Upload
    /*  */"arrowBlackUp": "\uEB60", // Black arrow up (N)
    /*  */"arrowBlackUpRight": "\uEB61", // Black arrow up-right (NE)
    /*  */"arrowBlackRight": "\uEB62", // Black arrow right (E)
    /*  */"arrowBlackDownRight": "\uEB63", // Black arrow down-right (SE)
    /*  */"arrowBlackDown": "\uEB64", // Black arrow down (S)
    /*  */"arrowBlackDownLeft": "\uEB65", // Black arrow down-left (SW)
    /*  */"arrowBlackLeft": "\uEB66", // Black arrow left (W)
    /*  */"arrowBlackUpLeft": "\uEB67", // Black arrow up-left (NW)
    /*  */"arrowWhiteUp": "\uEB68", // White arrow up (N)
    /*  */"arrowWhiteUpRight": "\uEB69", // White arrow up-right (NE)
    /*  */"arrowWhiteRight": "\uEB6A", // White arrow right (E)
    /*  */"arrowWhiteDownRight": "\uEB6B", // White arrow down-right (SE)
    /*  */"arrowWhiteDown": "\uEB6C", // White arrow down (S)
    /*  */"arrowWhiteDownLeft": "\uEB6D", // White arrow down-left (SW)
    /*  */"arrowWhiteLeft": "\uEB6E", // White arrow left (W)
    /*  */"arrowWhiteUpLeft": "\uEB6F", // White arrow up-left (NW)
    /*  */"arrowOpenUp": "\uEB70", // Open arrow up (N)
    /*  */"arrowOpenUpRight": "\uEB71", // Open arrow up-right (NE)
    /*  */"arrowOpenRight": "\uEB72", // Open arrow right (E)
    /*  */"arrowOpenDownRight": "\uEB73", // Open arrow down-right (SE)
    /*  */"arrowOpenDown": "\uEB74", // Open arrow down (S)
    /*  */"arrowOpenDownLeft": "\uEB75", // Open arrow down-left (SW)
    /*  */"arrowOpenLeft": "\uEB76", // Open arrow left (W)
    /*  */"arrowOpenUpLeft": "\uEB77", // Open arrow up-left (NW)
    /*  */"arrowheadBlackUp": "\uEB78", // Black arrowhead up (N)
    /*  */"arrowheadBlackUpRight": "\uEB79", // Black arrowhead up-right (NE)
    /*  */"arrowheadBlackRight": "\uEB7A", // Black arrowhead right (E)
    /*  */"arrowheadBlackDownRight": "\uEB7B", // Black arrowhead down-right (SE)
    /*  */"arrowheadBlackDown": "\uEB7C", // Black arrowhead down (S)
    /*  */"arrowheadBlackDownLeft": "\uEB7D", // Black arrowhead down-left (SW)
    /*  */"arrowheadBlackLeft": "\uEB7E", // Black arrowhead left (W)
    /*  */"arrowheadBlackUpLeft": "\uEB7F", // Black arrowhead up-left (NW)
    /*  */"arrowheadWhiteUp": "\uEB80", // White arrowhead up (N)
    /*  */"arrowheadWhiteUpRight": "\uEB81", // White arrowhead up-right (NE)
    /*  */"arrowheadWhiteRight": "\uEB82", // White arrowhead right (E)
    /*  */"arrowheadWhiteDownRight": "\uEB83", // White arrowhead down-right (SE)
    /*  */"arrowheadWhiteDown": "\uEB84", // White arrowhead down (S)
    /*  */"arrowheadWhiteDownLeft": "\uEB85", // White arrowhead down-left (SW)
    /*  */"arrowheadWhiteLeft": "\uEB86", // White arrowhead left (W)
    /*  */"arrowheadWhiteUpLeft": "\uEB87", // White arrowhead up-left (NW)
    /*  */"arrowheadOpenUp": "\uEB88", // Open arrowhead up (N)
    /*  */"arrowheadOpenUpRight": "\uEB89", // Open arrowhead up-right (NE)
    /*  */"arrowheadOpenRight": "\uEB8A", // Open arrowhead right (E)
    /*  */"arrowheadOpenDownRight": "\uEB8B", // Open arrowhead down-right (SE)
    /*  */"arrowheadOpenDown": "\uEB8C", // Open arrowhead down (S)
    /*  */"arrowheadOpenDownLeft": "\uEB8D", // Open arrowhead down-left (SW)
    /*  */"arrowheadOpenLeft": "\uEB8E", // Open arrowhead left (W)
    /*  */"arrowheadOpenUpLeft": "\uEB8F", // Open arrowhead up-left (NW)
    /*  */"staffPosRaise1": "\uEB90", // Raise 1 staff position
    /*  */"staffPosRaise2": "\uEB91", // Raise 2 staff positions
    /*  */"staffPosRaise3": "\uEB92", // Raise 3 staff positions
    /*  */"staffPosRaise4": "\uEB93", // Raise 4 staff positions
    /*  */"staffPosRaise5": "\uEB94", // Raise 5 staff positions
    /*  */"staffPosRaise6": "\uEB95", // Raise 6 staff positions
    /*  */"staffPosRaise7": "\uEB96", // Raise 7 staff positions
    /*  */"staffPosRaise8": "\uEB97", // Raise 8 staff positions
    /*  */"staffPosLower1": "\uEB98", // Lower 1 staff position
    /*  */"staffPosLower2": "\uEB99", // Lower 2 staff positions
    /*  */"staffPosLower3": "\uEB9A", // Lower 3 staff positions
    /*  */"staffPosLower4": "\uEB9B", // Lower 4 staff positions
    /*  */"staffPosLower5": "\uEB9C", // Lower 5 staff positions
    /*  */"staffPosLower6": "\uEB9D", // Lower 6 staff positions
    /*  */"staffPosLower7": "\uEB9E", // Lower 7 staff positions
    /*  */"staffPosLower8": "\uEB9F", // Lower 8 staff positions
    /*  */"luteStaff6Lines": "\uEBA0", // Lute tablature staff, 6 courses
    /*  */"luteStaff6LinesWide": "\uEBA1", // Lute tablature staff, 6 courses (wide)
    /*  */"luteStaff6LinesNarrow": "\uEBA2", // Lute tablature staff, 6 courses (narrow)
    /*  */"luteBarlineStartRepeat": "\uEBA3", // Lute tablature start repeat barline
    /*  */"luteBarlineEndRepeat": "\uEBA4", // Lute tablature end repeat barline
    /*  */"luteBarlineFinal": "\uEBA5", // Lute tablature final barline
    /*  */"luteDurationDoubleWhole": "\uEBA6", // Double whole note (breve) duration sign
    /*  */"luteDurationWhole": "\uEBA7", // Whole note (semibreve) duration sign
    /*  */"luteDurationHalf": "\uEBA8", // Half note (minim) duration sign
    /*  */"luteDurationQuarter": "\uEBA9", // Quarter note (crotchet) duration sign
    /*  */"luteDuration8th": "\uEBAA", // Eighth note (quaver) duration sign
    /*  */"luteDuration16th": "\uEBAB", // 16th note (semiquaver) duration sign
    /*  */"luteDuration32nd": "\uEBAC", // 32nd note (demisemiquaver) duration sign
    /*  */"luteFingeringRHThumb": "\uEBAD", // Right-hand fingering, thumb
    /*  */"luteFingeringRHFirst": "\uEBAE", // Right-hand fingering, first finger
    /*  */"luteFingeringRHSecond": "\uEBAF", // Right-hand fingering, second finger
    /*  */"luteFingeringRHThird": "\uEBB0", // Right-hand fingering, third finger
    /*  */"luteFrenchFretA": "\uEBC0", // Open string (a)
    /*  */"luteFrenchFretB": "\uEBC1", // First fret (b)
    /*  */"luteFrenchFretC": "\uEBC2", // Second fret (c)
    /*  */"luteFrenchFretD": "\uEBC3", // Third fret (d)
    /*  */"luteFrenchFretE": "\uEBC4", // Fourth fret (e)
    /*  */"luteFrenchFretF": "\uEBC5", // Fifth fret (f)
    /*  */"luteFrenchFretG": "\uEBC6", // Sixth fret (g)
    /*  */"luteFrenchFretH": "\uEBC7", // Seventh fret (h)
    /*  */"luteFrenchFretI": "\uEBC8", // Eighth fret (i)
    /*  */"luteFrenchFretK": "\uEBC9", // Ninth fret (k)
    /*  */"luteFrenchFretL": "\uEBCA", // 10th fret (l)
    /*  */"luteFrenchFretM": "\uEBCB", // 11th fret (m)
    /*  */"luteFrenchFretN": "\uEBCC", // 12th fret (n)
    /*  */"luteFrench7thCourse": "\uEBCD", // Seventh course (diapason)
    /*  */"luteFrench8thCourse": "\uEBCE", // Eighth course (diapason)
    /*  */"luteFrench9thCourse": "\uEBCF", // Ninth course (diapason)
    /*  */"luteFrench10thCourse": "\uEBD0", // 10th course (diapason)
    /*  */"luteFrenchMordentUpper": "\uEBD1", // Mordent with upper auxiliary
    /*  */"luteFrenchMordentLower": "\uEBD2", // Mordent with lower auxiliary
    /*  */"luteFrenchMordentInverted": "\uEBD3", // Inverted mordent
    /*  */"luteFrenchAppoggiaturaBelow": "\uEBD4", // Appoggiatura from below
    /*  */"luteFrenchAppoggiaturaAbove": "\uEBD5", // Appoggiatura from above
    /*  */"luteItalianFret0": "\uEBE0", // Open string (0)
    /*  */"luteItalianFret1": "\uEBE1", // First fret (1)
    /*  */"luteItalianFret2": "\uEBE2", // Second fret (2)
    /*  */"luteItalianFret3": "\uEBE3", // Third fret (3)
    /*  */"luteItalianFret4": "\uEBE4", // Fourth fret (4)
    /*  */"luteItalianFret5": "\uEBE5", // Fifth fret (5)
    /*  */"luteItalianFret6": "\uEBE6", // Sixth fret (6)
    /*  */"luteItalianFret7": "\uEBE7", // Seventh fret (7)
    /*  */"luteItalianFret8": "\uEBE8", // Eighth fret (8)
    /*  */"luteItalianFret9": "\uEBE9", // Ninth fret (9)
    /*  */"luteItalianTempoFast": "\uEBEA", // Fast tempo indication (de Mudarra)
    /*  */"luteItalianTempoSomewhatFast": "\uEBEB", // Somewhat fast tempo indication (de Narvaez)
    /*  */"luteItalianTempoNeitherFastNorSlow": "\uEBEC", // Neither fast nor slow tempo indication (de Mudarra)
    /*  */"luteItalianTempoSlow": "\uEBED", // Slow tempo indication (de Mudarra)
    /*  */"luteItalianTempoVerySlow": "\uEBEE", // Very slow indication (de Narvaez)
    /*  */"luteItalianTimeTriple": "\uEBEF", // Triple time indication
    /*  */"luteItalianClefFFaUt": "\uEBF0", // F fa ut clef
    /*  */"luteItalianClefCSolFaUt": "\uEBF1", // C sol fa ut clef
    /*  */"luteItalianTremolo": "\uEBF2", // Single-finger tremolo or mordent
    /*  */"luteItalianHoldNote": "\uEBF3", // Hold note
    /*  */"luteItalianHoldFinger": "\uEBF4", // Hold finger in place
    /*  */"luteItalianReleaseFinger": "\uEBF5", // Release finger
    /*  */"luteItalianVibrato": "\uEBF6", // Vibrato (verre cassé)
    /*  */"luteGermanALower": "\uEC00", // 5th course, 1st fret (a)
    /*  */"luteGermanBLower": "\uEC01", // 4th course, 1st fret (b)
    /*  */"luteGermanCLower": "\uEC02", // 3rd course, 1st fret (c)
    /*  */"luteGermanDLower": "\uEC03", // 2nd course, 1st fret (d)
    /*  */"luteGermanELower": "\uEC04", // 1st course, 1st fret (e)
    /*  */"luteGermanFLower": "\uEC05", // 5th course, 2nd fret (f)
    /*  */"luteGermanGLower": "\uEC06", // 4th course, 2nd fret (g)
    /*  */"luteGermanHLower": "\uEC07", // 3rd course, 2nd fret (h)
    /*  */"luteGermanILower": "\uEC08", // 2nd course, 2nd fret (i)
    /*  */"luteGermanKLower": "\uEC09", // 1st course, 2nd fret (k)
    /*  */"luteGermanLLower": "\uEC0A", // 5th course, 3rd fret (l)
    /*  */"luteGermanMLower": "\uEC0B", // 4th course, 3rd fret (m)
    /*  */"luteGermanNLower": "\uEC0C", // 3rd course, 3rd fret (n)
    /*  */"luteGermanOLower": "\uEC0D", // 2nd course, 3rd fret (o)
    /*  */"luteGermanPLower": "\uEC0E", // 1st course, 3rd fret (p)
    /*  */"luteGermanQLower": "\uEC0F", // 5th course, 4th fret (q)
    /*  */"luteGermanRLower": "\uEC10", // 4th course, 4th fret (r)
    /*  */"luteGermanSLower": "\uEC11", // 3rd course, 4th fret (s)
    /*  */"luteGermanTLower": "\uEC12", // 2nd course, 4th fret (t)
    /*  */"luteGermanVLower": "\uEC13", // 1st course, 4th fret (v)
    /*  */"luteGermanXLower": "\uEC14", // 5th course, 5th fret (x)
    /*  */"luteGermanYLower": "\uEC15", // 4th course, 5th fret (y)
    /*  */"luteGermanZLower": "\uEC16", // 3rd course, 5th fret (z)
    /*  */"luteGermanAUpper": "\uEC17", // 6th course, 1st fret (A)
    /*  */"luteGermanBUpper": "\uEC18", // 6th course, 2nd fret (B)
    /*  */"luteGermanCUpper": "\uEC19", // 6th course, 3rd fret (C)
    /*  */"luteGermanDUpper": "\uEC1A", // 6th course, 4th fret (D)
    /*  */"luteGermanEUpper": "\uEC1B", // 6th course, 5th fret (E)
    /*  */"luteGermanFUpper": "\uEC1C", // 6th course, 6th fret (F)
    /*  */"luteGermanGUpper": "\uEC1D", // 6th course, 7th fret (G)
    /*  */"luteGermanHUpper": "\uEC1E", // 6th course, 8th fret (H)
    /*  */"luteGermanIUpper": "\uEC1F", // 6th course, 9th fret (I)
    /*  */"luteGermanKUpper": "\uEC20", // 6th course, 10th fret (K)
    /*  */"luteGermanLUpper": "\uEC21", // 6th course, 11th fret (L)
    /*  */"luteGermanMUpper": "\uEC22", // 6th course, 12th fret (M)
    /*  */"luteGermanNUpper": "\uEC23", // 6th course, 13th fret (N)
    /*  */"kievanCClef": "\uEC30", // Kievan C clef (tse-fa-ut)
    /*  */"kievanEndingSymbol": "\uEC31", // Kievan ending symbol
    /*  */"kievanNoteReciting": "\uEC32", // Kievan reciting note
    /*  */"kievanNoteWhole": "\uEC33", // Kievan whole note
    /*  */"kievanNoteWholeFinal": "\uEC34", // Kievan final whole note
    /*  */"kievanNoteHalfStaffLine": "\uEC35", // Kievan half note (on staff line)
    /*  */"kievanNoteHalfStaffSpace": "\uEC36", // Kievan half note (in staff space)
    /*  */"kievanNoteQuarterStemUp": "\uEC37", // Kievan quarter note, stem up
    /*  */"kievanNoteQuarterStemDown": "\uEC38", // Kievan quarter note, stem down
    /*  */"kievanNote8thStemUp": "\uEC39", // Kievan eighth note, stem up
    /*  */"kievanNote8thStemDown": "\uEC3A", // Kievan eighth note, stem down
    /*  */"kievanNoteBeam": "\uEC3B", // Kievan beam
    /*  */"kievanAugmentationDot": "\uEC3C", // Kievan augmentation dot
    /*  */"kievanAccidentalSharp": "\uEC3D", // Kievan sharp
    /*  */"kievanAccidentalFlat": "\uEC3E", // Kievan flat
    /*  */"kodalyHandDo": "\uEC40", // Do hand sign
    /*  */"kodalyHandRe": "\uEC41", // Re hand sign
    /*  */"kodalyHandMi": "\uEC42", // Mi hand sign
    /*  */"kodalyHandFa": "\uEC43", // Fa hand sign
    /*  */"kodalyHandSo": "\uEC44", // So hand sign
    /*  */"kodalyHandLa": "\uEC45", // La hand sign
    /*  */"kodalyHandTi": "\uEC46", // Ti hand sign
    /*  */"smnSharp": "\uEC50", // Sharp stem up
    /*  */"smnSharpWhite": "\uEC51", // Sharp (white) stem up
    /*  */"smnFlat": "\uEC52", // Flat
    /*  */"smnFlatWhite": "\uEC53", // Flat (white)
    /*  */"smnHistorySharp": "\uEC54", // Sharp history sign
    /*  */"smnHistoryDoubleSharp": "\uEC55", // Double sharp history sign
    /*  */"smnHistoryFlat": "\uEC56", // Flat history sign
    /*  */"smnHistoryDoubleFlat": "\uEC57", // Double flat history sign
    /*  */"smnNatural": "\uEC58", // Natural (N)
    /*  */"smnSharpDown": "\uEC59", // Sharp stem down
    /*  */"smnSharpWhiteDown": "\uEC5A", // Sharp (white) stem down
    /*  */"miscDoNotPhotocopy": "\uEC60", // Do not photocopy
    /*  */"miscDoNotCopy": "\uEC61", // Do not copy
    /*  */"miscEyeglasses": "\uEC62", // Eyeglasses
    /*  */"metricModulationArrowLeft": "\uEC63", // Left-pointing arrow for metric modulation
    /*  */"metricModulationArrowRight": "\uEC64", // Right-pointing arrow for metric modulation
    /*  */"timeSigBracketLeft": "\uEC80", // Left bracket for whole time signature
    /*  */"timeSigBracketRight": "\uEC81", // Right bracket for whole time signature
    /*  */"timeSigBracketLeftSmall": "\uEC82", // Left bracket for numerator only
    /*  */"timeSigBracketRightSmall": "\uEC83", // Right bracket for numerator only
    /*  */"timeSigSlash": "\uEC84", // Time signature slash separator
    /*  */"timeSigCut2": "\uEC85", // Cut time (Bach)
    /*  */"timeSigCut3": "\uEC86", // Cut triple time (9/8)
    /*  */"octaveLoco": "\uEC90", // Loco
    /*  */"octaveBaselineA": "\uEC91", // a (baseline)
    /*  */"octaveSuperscriptA": "\uEC92", // a (superscript)
    /*  */"octaveBaselineB": "\uEC93", // b (baseline)
    /*  */"octaveSuperscriptB": "\uEC94", // b (superscript)
    /*  */"octaveBaselineM": "\uEC95", // m (baseline)
    /*  */"octaveSuperscriptM": "\uEC96", // m (superscript)
    /*  */"octaveBaselineV": "\uEC97", // v (baseline)
    /*  */"octaveSuperscriptV": "\uEC98", // v (superscript)
    /*  */"metNoteDoubleWhole": "\uECA0", // Double whole note (breve)
    /*  */"metNoteDoubleWholeSquare": "\uECA1", // Double whole note (square)
    /*  */"metNoteWhole": "\uECA2", // Whole note (semibreve)
    /*  */"metNoteHalfUp": "\uECA3", // Half note (minim) stem up
    /*  */"metNoteHalfDown": "\uECA4", // Half note (minim) stem down
    /*  */"metNoteQuarterUp": "\uECA5", // Quarter note (crotchet) stem up
    /*  */"metNoteQuarterDown": "\uECA6", // Quarter note (crotchet) stem down
    /*  */"metNote8thUp": "\uECA7", // Eighth note (quaver) stem up
    /*  */"metNote8thDown": "\uECA8", // Eighth note (quaver) stem down
    /*  */"metNote16thUp": "\uECA9", // 16th note (semiquaver) stem up
    /*  */"metNote16thDown": "\uECAA", // 16th note (semiquaver) stem down
    /*  */"metNote32ndUp": "\uECAB", // 32nd note (demisemiquaver) stem up
    /*  */"metNote32ndDown": "\uECAC", // 32nd note (demisemiquaver) stem down
    /*  */"metNote64thUp": "\uECAD", // 64th note (hemidemisemiquaver) stem up
    /*  */"metNote64thDown": "\uECAE", // 64th note (hemidemisemiquaver) stem down
    /*  */"metNote128thUp": "\uECAF", // 128th note (semihemidemisemiquaver) stem up
    /*  */"metNote128thDown": "\uECB0", // 128th note (semihemidemisemiquaver) stem down
    /*  */"metNote256thUp": "\uECB1", // 256th note (demisemihemidemisemiquaver) stem up
    /*  */"metNote256thDown": "\uECB2", // 256th note (demisemihemidemisemiquaver) stem down
    /*  */"metNote512thUp": "\uECB3", // 512th note (hemidemisemihemidemisemiquaver) stem up
    /*  */"metNote512thDown": "\uECB4", // 512th note (hemidemisemihemidemisemiquaver) stem down
    /*  */"metNote1024thUp": "\uECB5", // 1024th note (semihemidemisemihemidemisemiquaver) stem up
    /*  */"metNote1024thDown": "\uECB6", // 1024th note (semihemidemisemihemidemisemiquaver) stem down
    /*  */"metAugmentationDot": "\uECB7", // Augmentation dot
    /*  */"figbass7Diminished": "\uECC0", // Figured bass 7 diminished
    /*  */"figbassTripleFlat": "\uECC1", // Figured bass triple flat
    /*  */"figbassTripleSharp": "\uECC2", // Figured bass triple sharp
    /*  */"noteShapeRoundDoubleWhole": "\uECD0", // Round double whole (4-shape sol; 7-shape so)
    /*  */"noteShapeSquareDoubleWhole": "\uECD1", // Square double whole (4-shape la; Aikin 7-shape la)
    /*  */"noteShapeTriangleRightDoubleWhole": "\uECD2", // Triangle right double whole (stem down; 4-shape fa; 7-shape fa)
    /*  */"noteShapeTriangleLeftDoubleWhole": "\uECD3", // Triangle left double whole (stem up; 4-shape fa; 7-shape fa)
    /*  */"noteShapeDiamondDoubleWhole": "\uECD4", // Diamond double whole (4-shape mi; 7-shape mi)
    /*  */"noteShapeTriangleUpDoubleWhole": "\uECD5", // Triangle up double whole (Aikin 7-shape do)
    /*  */"noteShapeMoonDoubleWhole": "\uECD6", // Moon double whole (Aikin 7-shape re)
    /*  */"noteShapeTriangleRoundDoubleWhole": "\uECD7", // Triangle-round white (Aikin 7-shape ti)
    /*  */"noteShapeKeystoneDoubleWhole": "\uECD8", // Inverted keystone double whole (Walker 7-shape do)
    /*  */"noteShapeQuarterMoonDoubleWhole": "\uECD9", // Quarter moon double whole (Walker 7-shape re)
    /*  */"noteShapeIsoscelesTriangleDoubleWhole": "\uECDA", // Isosceles triangle double whole (Walker 7-shape ti)
    /*  */"noteShapeMoonLeftDoubleWhole": "\uECDB", // Moon left double whole (Funk 7-shape do)
    /*  */"noteShapeArrowheadLeftDoubleWhole": "\uECDC", // Arrowhead left double whole (Funk 7-shape re)
    /*  */"noteShapeTriangleRoundLeftDoubleWhole": "\uECDD", // Triangle-round left double whole (Funk 7-shape ti)
    /*  */"timeSig0Turned": "\uECE0", // Turned time signature 0
    /*  */"timeSig1Turned": "\uECE1", // Turned time signature 1
    /*  */"timeSig2Turned": "\uECE2", // Turned time signature 2
    /*  */"timeSig3Turned": "\uECE3", // Turned time signature 3
    /*  */"timeSig4Turned": "\uECE4", // Turned time signature 4
    /*  */"timeSig5Turned": "\uECE5", // Turned time signature 5
    /*  */"timeSig6Turned": "\uECE6", // Turned time signature 6
    /*  */"timeSig7Turned": "\uECE7", // Turned time signature 7
    /*  */"timeSig8Turned": "\uECE8", // Turned time signature 8
    /*  */"timeSig9Turned": "\uECE9", // Turned time signature 9
    /*  */"timeSigCommonTurned": "\uECEA", // Turned common time
    /*  */"timeSigCutCommonTurned": "\uECEB", // Turned cut time
    /*  */"timeSig0Reversed": "\uECF0", // Reversed time signature 0
    /*  */"timeSig1Reversed": "\uECF1", // Reversed time signature 1
    /*  */"timeSig2Reversed": "\uECF2", // Reversed time signature 2
    /*  */"timeSig3Reversed": "\uECF3", // Reversed time signature 3
    /*  */"timeSig4Reversed": "\uECF4", // Reversed time signature 4
    /*  */"timeSig5Reversed": "\uECF5", // Reversed time signature 5
    /*  */"timeSig6Reversed": "\uECF6", // Reversed time signature 6
    /*  */"timeSig7Reversed": "\uECF7", // Reversed time signature 7
    /*  */"timeSig8Reversed": "\uECF8", // Reversed time signature 8
    /*  */"timeSig9Reversed": "\uECF9", // Reversed time signature 9
    /*  */"timeSigCommonReversed": "\uECFA", // Reversed common time
    /*  */"timeSigCutCommonReversed": "\uECFB", // Reversed cut time
    /*  */"functionMUpper": "\uED00", // Function theory M
    /*  */"functionMLower": "\uED01", // Function theory m
    /*  */"functionNUpperSuperscript": "\uED02", // Function theory superscript N
    /*  */"functionRLower": "\uED03", // Function theory r
    /*  */"fingering0": "\uED10", // Fingering 0 (open string)
    /*  */"fingering1": "\uED11", // Fingering 1 (thumb)
    /*  */"fingering2": "\uED12", // Fingering 2 (index finger)
    /*  */"fingering3": "\uED13", // Fingering 3 (middle finger)
    /*  */"fingering4": "\uED14", // Fingering 4 (ring finger)
    /*  */"fingering5": "\uED15", // Fingering 5 (little finger)
    /*  */"fingeringTUpper": "\uED16", // Fingering T (left-hand thumb for guitar)
    /*  */"fingeringPLower": "\uED17", // Fingering p (pulgar; right-hand thumb for guitar)
    /*  */"fingeringTLower": "\uED18", // Fingering t (right-hand thumb for guitar)
    /*  */"fingeringILower": "\uED19", // Fingering i (indicio; right-hand index finger for guitar)
    /*  */"fingeringMLower": "\uED1A", // Fingering m (medio; right-hand middle finger for guitar)
    /*  */"fingeringALower": "\uED1B", // Fingering a (anular; right-hand ring finger for guitar)
    /*  */"fingeringCLower": "\uED1C", // Fingering c (right-hand little finger for guitar)
    /*  */"fingeringXLower": "\uED1D", // Fingering x (right-hand little finger for guitar)
    /*  */"fingeringELower": "\uED1E", // Fingering e (right-hand little finger for guitar)
    /*  */"fingeringOLower": "\uED1F", // Fingering o (right-hand little finger for guitar)
    /*  */"fingeringSubstitutionAbove": "\uED20", // Finger substitution above
    /*  */"fingeringSubstitutionBelow": "\uED21", // Finger substitution below
    /*  */"fingeringSubstitutionDash": "\uED22", // Finger substitution dash
    /*  */"fingeringMultipleNotes": "\uED23", // Multiple notes played by thumb or single finger
    /*  */"fingering6": "\uED24", // Fingering 6
    /*  */"fingering7": "\uED25", // Fingering 7
    /*  */"fingering8": "\uED26", // Fingering 8
    /*  */"fingering9": "\uED27", // Fingering 9
    /*  */"fingeringLeftParenthesis": "\uED28", // Fingering left parenthesis
    /*  */"fingeringRightParenthesis": "\uED29", // Fingering right parenthesis
    /*  */"fingeringLeftBracket": "\uED2A", // Fingering left bracket
    /*  */"fingeringRightBracket": "\uED2B", // Fingering right bracket
    /*  */"fingeringSeparatorMiddleDot": "\uED2C", // Fingering middle dot separator
    /*  */"fingeringSeparatorMiddleDotWhite": "\uED2D", // Fingering white middle dot separator
    /*  */"fingeringSeparatorSlash": "\uED2E", // Fingering forward slash separator
    /*  */"accidentalDoubleFlatArabic": "\uED30", // Arabic double flat
    /*  */"accidentalThreeQuarterTonesFlatArabic": "\uED31", // Arabic three-quarter-tones flat
    /*  */"accidentalFlatArabic": "\uED32", // Arabic half-tone flat
    /*  */"accidentalQuarterToneFlatArabic": "\uED33", // Arabic quarter-tone flat
    /*  */"accidentalNaturalArabic": "\uED34", // Arabic natural
    /*  */"accidentalQuarterToneSharpArabic": "\uED35", // Arabic quarter-tone sharp
    /*  */"accidentalSharpArabic": "\uED36", // Arabic half-tone sharp
    /*  */"accidentalThreeQuarterTonesSharpArabic": "\uED37", // Arabic three-quarter-tones sharp
    /*  */"accidentalDoubleSharpArabic": "\uED38", // Arabic double sharp
    /*  */"articSoftAccentAbove": "\uED40", // Soft accent above
    /*  */"articSoftAccentBelow": "\uED41", // Soft accent below
    /*  */"articSoftAccentStaccatoAbove": "\uED42", // Soft accent-staccato above
    /*  */"articSoftAccentStaccatoBelow": "\uED43", // Soft accent-staccato below
    /*  */"articSoftAccentTenutoAbove": "\uED44", // Soft accent-tenuto above
    /*  */"articSoftAccentTenutoBelow": "\uED45", // Soft accent-tenuto below
    /*  */"articSoftAccentTenutoStaccatoAbove": "\uED46", // Soft accent-tenuto-staccato above
    /*  */"articSoftAccentTenutoStaccatoBelow": "\uED47", // Soft accent-tenuto-staccato below
    /*  */"accidentalRaisedStockhausen": "\uED50", // Raised (Stockhausen)
    /*  */"accidentalLoweredStockhausen": "\uED51", // Lowered (Stockhausen)
    /*  */"accidentalFlatRaisedStockhausen": "\uED52", // Raised flat (Stockhausen)
    /*  */"accidentalFlatLoweredStockhausen": "\uED53", // Lowered flat (Stockhausen)
    /*  */"accidentalNaturalRaisedStockhausen": "\uED54", // Raised natural (Stockhausen)
    /*  */"accidentalNaturalLoweredStockhausen": "\uED55", // Lowered natural (Stockhausen)
    /*  */"accidentalSharpRaisedStockhausen": "\uED56", // Raised sharp (Stockhausen)
    /*  */"accidentalSharpLoweredStockhausen": "\uED57", // Lowered sharp (Stockhausen)
    /*  */"accidentalOneQuarterToneSharpStockhausen": "\uED58", // One-quarter-tone sharp (Stockhausen)
    /*  */"accidentalOneQuarterToneFlatStockhausen": "\uED59", // One-quarter-tone flat (Stockhausen)
    /*  */"accidentalThreeQuarterTonesSharpStockhausen": "\uED5A", // Three-quarter-tones sharp (Stockhausen)
    /*  */"accidentalFlatRepeatedSpaceStockhausen": "\uED5B", // Repeated flat, note in space (Stockhausen)
    /*  */"accidentalFlatRepeatedLineStockhausen": "\uED5C", // Repeated flat, note on line (Stockhausen)
    /*  */"accidentalSharpRepeatedSpaceStockhausen": "\uED5D", // Repeated sharp, note in space (Stockhausen)
    /*  */"accidentalSharpRepeatedLineStockhausen": "\uED5E", // Repeated sharp, note on line (Stockhausen)
    /*  */"csymAccidentalFlat": "\uED60", // Flat
    /*  */"csymAccidentalNatural": "\uED61", // Natural
    /*  */"csymAccidentalSharp": "\uED62", // Sharp
    /*  */"csymAccidentalDoubleSharp": "\uED63", // Double sharp
    /*  */"csymAccidentalDoubleFlat": "\uED64", // Double flat
    /*  */"csymAccidentalTripleSharp": "\uED65", // Triple sharp
    /*  */"csymAccidentalTripleFlat": "\uED66", // Triple flat
    /*  */"indianDrumClef": "\uED70", // Indian drum clef
    /*  */"fingering0Italic": "\uED80", // Fingering 0 italic (open string)
    /*  */"fingering1Italic": "\uED81", // Fingering 1 italic (thumb)
    /*  */"fingering2Italic": "\uED82", // Fingering 2 italic (index finger)
    /*  */"fingering3Italic": "\uED83", // Fingering 3 italic (middle finger)
    /*  */"fingering4Italic": "\uED84", // Fingering 4 italic (ring finger)
    /*  */"fingering5Italic": "\uED85", // Fingering 5 italic (little finger)
    /*  */"fingering6Italic": "\uED86", // Fingering 6 italic
    /*  */"fingering7Italic": "\uED87", // Fingering 7 italic
    /*  */"fingering8Italic": "\uED88", // Fingering 8 italic
    /*  */"fingering9Italic": "\uED89", // Fingering 9 italic
    /*  */"fingeringLeftParenthesisItalic": "\uED8A", // Fingering left parenthesis italic
    /*  */"fingeringRightParenthesisItalic": "\uED8B", // Fingering right parenthesis italic
    /*  */"fingeringLeftBracketItalic": "\uED8C", // Fingering left bracket italic
    /*  */"fingeringRightBracketItalic": "\uED8D", // Fingering right bracket italic
    /*  */"fingeringQLower": "\uED8E", // Fingering q (right-hand little finger for guitar)
    /*  */"fingeringSLower": "\uED8F", // Fingering s (right-hand little finger for guitar)
    /*  */"kahnStep": "\uEDA0", // Step
    /*  */"kahnTap": "\uEDA1", // Tap
    /*  */"kahnHop": "\uEDA2", // Hop
    /*  */"kahnLeap": "\uEDA3", // Leap
    /*  */"kahnJumpTogether": "\uEDA4", // Jump-together
    /*  */"kahnJumpApart": "\uEDA5", // Jump-apart
    /*  */"kahnBrushForward": "\uEDA6", // Brush-forward
    /*  */"kahnBrushBackward": "\uEDA7", // Brush-backward
    /*  */"kahnGraceTap": "\uEDA8", // Grace-tap
    /*  */"kahnFlat": "\uEDA9", // Flat
    /*  */"kahnHeel": "\uEDAA", // Heel
    /*  */"kahnToe": "\uEDAB", // Toe
    /*  */"kahnKneeOutward": "\uEDAC", // Knee-outward
    /*  */"kahnKneeInward": "\uEDAD", // Knee-inward
    /*  */"kahnScrape": "\uEDAE", // Scrape
    /*  */"kahnTrench": "\uEDAF", // Trench
    /*  */"kahnFleaHop": "\uEDB0", // Flea-hop
    /*  */"kahnFleaTap": "\uEDB1", // Flea-tap
    /*  */"kahnDrawStep": "\uEDB2", // Draw-step
    /*  */"kahnDrawTap": "\uEDB3", // Draw-tap
    /*  */"kahnSlideStep": "\uEDB4", // Slide-step
    /*  */"kahnSlideTap": "\uEDB5", // Slide-tap
    /*  */"kahnHeelDrop": "\uEDB6", // Heel-drop
    /*  */"kahnToeDrop": "\uEDB7", // Toe-drop
    /*  */"kahnClap": "\uEDB8", // Clap
    /*  */"kahnSnap": "\uEDB9", // Snap
    /*  */"kahnDoubleSnap": "\uEDBA", // Double-snap
    /*  */"kahnHeelClick": "\uEDBB", // Heel-click
    /*  */"kahnToeClick": "\uEDBC", // Toe-click
    /*  */"kahnLeftCross": "\uEDBD", // Left-cross
    /*  */"kahnRightCross": "\uEDBE", // Right-cross
    /*  */"kahnLeftCatch": "\uEDBF", // Left-catch
    /*  */"kahnRightCatch": "\uEDC0", // Right-catch
    /*  */"kahnLeftToeStrike": "\uEDC1", // Left-toe-strike
    /*  */"kahnRightToeStrike": "\uEDC2", // Right-toe-strike
    /*  */"kahnStamp": "\uEDC3", // Stamp
    /*  */"kahnHeelStep": "\uEDC4", // Heel-step
    /*  */"kahnToeStep": "\uEDC5", // Toe-step
    /*  */"kahnBallChange": "\uEDC6", // Ball-change
    /*  */"kahnStepStamp": "\uEDC7", // Step-stamp
    /*  */"kahnStampStamp": "\uEDC8", // Stamp-stamp
    /*  */"kahnHeelChange": "\uEDC9", // Heel-change
    /*  */"kahnStomp": "\uEDCA", // Stomp
    /*  */"kahnHeelTap": "\uEDCB", // Heel-tap
    /*  */"kahnToeTap": "\uEDCC", // Toe-tap
    /*  */"kahnBallDig": "\uEDCD", // Ball-dig
    /*  */"kahnSlam": "\uEDCE", // Slam
    /*  */"kahnFlam": "\uEDCF", // Flam
    /*  */"kahnGraceTapHop": "\uEDD0", // Grace-tap-hop
    /*  */"kahnGraceTapChange": "\uEDD1", // Grace-tap-change
    /*  */"kahnLeapFlatFoot": "\uEDD2", // Leap-flat-foot
    /*  */"kahnGraceTapStamp": "\uEDD3", // Grace-tap-stamp
    /*  */"kahnLeapHeelClick": "\uEDD4", // Leap-heel-click
    /*  */"kahnFlap": "\uEDD5", // Flap
    /*  */"kahnRip": "\uEDD6", // Rip
    /*  */"kahnFlapStep": "\uEDD7", // Flap-step
    /*  */"kahnBackFlap": "\uEDD8", // Back-flap
    /*  */"kahnSlap": "\uEDD9", // Slap
    /*  */"kahnBackRip": "\uEDDA", // Back-rip
    /*  */"kahnStompBrush": "\uEDDB", // Stomp-brush
    /*  */"kahnScuff": "\uEDDC", // Scuff
    /*  */"kahnChug": "\uEDDD", // Chug
    /*  */"kahnPush": "\uEDDE", // Push
    /*  */"kahnZink": "\uEDDF", // Zink
    /*  */"kahnRiff": "\uEDE0", // Riff
    /*  */"kahnBackRiff": "\uEDE1", // Back-riff
    /*  */"kahnBackChug": "\uEDE2", // Back-chug
    /*  */"kahnPull": "\uEDE3", // Pull
    /*  */"kahnZank": "\uEDE4", // Zank
    /*  */"kahnShuffle": "\uEDE5", // Shuffle
    /*  */"kahnScuffle": "\uEDE6", // Scuffle
    /*  */"kahnRiffle": "\uEDE7", // Riffle
    /*  */"kahnRipple": "\uEDE8", // Ripple
    /*  */"kahnWing": "\uEDE9", // Wing
    /*  */"kahnWingChange": "\uEDEA", // Wing-change
    /*  */"kahnDoubleWing": "\uEDEB", // Double-wing
    /*  */"kahnOverTheTop": "\uEDEC", // Over-the-top
    /*  */"kahnOverTheTopTap": "\uEDED", // Over-the-top-tap
    /*  */"kahnLeftFoot": "\uEDEE", // Left-foot
    /*  */"kahnRightFoot": "\uEDEF", // Right-foot
    /*  */"kahnLeftTurn": "\uEDF0", // Left-turn
    /*  */"kahnRightTurn": "\uEDF1", // Right-turn
    /*  */"organGermanCUpper": "\uEE00", // German organ tablature great C
    /*  */"organGermanCisUpper": "\uEE01", // German organ tablature great Cis
    /*  */"organGermanDUpper": "\uEE02", // German organ tablature great D
    /*  */"organGermanDisUpper": "\uEE03", // German organ tablature great Dis
    /*  */"organGermanEUpper": "\uEE04", // German organ tablature great E
    /*  */"organGermanFUpper": "\uEE05", // German organ tablature great F
    /*  */"organGermanFisUpper": "\uEE06", // German organ tablature great Fis
    /*  */"organGermanGUpper": "\uEE07", // German organ tablature great G
    /*  */"organGermanGisUpper": "\uEE08", // German organ tablature great Gis
    /*  */"organGermanAUpper": "\uEE09", // German organ tablature great A
    /*  */"organGermanBUpper": "\uEE0A", // German organ tablature great B
    /*  */"organGermanHUpper": "\uEE0B", // German organ tablature great H
    /*  */"organGermanCLower": "\uEE0C", // German organ tablature small C
    /*  */"organGermanCisLower": "\uEE0D", // German organ tablature small Cis
    /*  */"organGermanDLower": "\uEE0E", // German organ tablature small D
    /*  */"organGermanDisLower": "\uEE0F", // German organ tablature small Dis
    /*  */"organGermanELower": "\uEE10", // German organ tablature small E
    /*  */"organGermanFLower": "\uEE11", // German organ tablature small F
    /*  */"organGermanFisLower": "\uEE12", // German organ tablature small Fis
    /*  */"organGermanGLower": "\uEE13", // German organ tablature small G
    /*  */"organGermanGisLower": "\uEE14", // German organ tablature small Gis
    /*  */"organGermanALower": "\uEE15", // German organ tablature small A
    /*  */"organGermanBLower": "\uEE16", // German organ tablature small B
    /*  */"organGermanHLower": "\uEE17", // German organ tablature small H
    /*  */"organGermanOctaveUp": "\uEE18", // Combining single octave line above
    /*  */"organGerman2OctaveUp": "\uEE19", // Combining double octave line above
    /*  */"organGermanOctaveDown": "\uEE1A", // Combining single octave line below
    /*  */"organGermanTie": "\uEE1B", // Tie
    /*  */"organGermanAugmentationDot": "\uEE1C", // Rhythm Dot
    /*  */"organGermanBuxheimerSemibrevisRest": "\uEE1D", // Semibrevis Rest Buxheimer Orgelbuch
    /*  */"organGermanBuxheimerMinimaRest": "\uEE1E", // Minima Rest Buxheimer Orgelbuch
    /*  */"organGermanSemibrevisRest": "\uEE1F", // Semibrevis Rest
    /*  */"organGermanMinimaRest": "\uEE20", // Minima Rest
    /*  */"organGermanSemiminimaRest": "\uEE21", // Semiminima Rest
    /*  */"organGermanFusaRest": "\uEE22", // Fusa Rest
    /*  */"organGermanSemifusaRest": "\uEE23", // Semifusa Rest
    /*  */"organGermanBuxheimerBrevis3": "\uEE24", // Brevis (Ternary) Buxheimer Orgelbuch
    /*  */"organGermanBuxheimerBrevis2": "\uEE25", // Brevis (Binary) Buxheimer Orgelbuch
    /*  */"organGermanBuxheimerSemibrevis": "\uEE26", // Semibrevis Buxheimer Orgelbuch
    /*  */"organGermanSemibrevis": "\uEE27", // Semibrevis
    /*  */"organGermanMinima": "\uEE28", // Minima
    /*  */"organGermanSemiminima": "\uEE29", // Semiminima
    /*  */"organGermanFusa": "\uEE2A", // Fusa
    /*  */"organGermanSemifusa": "\uEE2B", // Semifusa
    /*  */"organGerman2Minimae": "\uEE2C", // Two Minimae
    /*  */"organGerman2Semiminimae": "\uEE2D", // Two Semiminimae
    /*  */"organGerman2Fusae": "\uEE2E", // Two Fusae
    /*  */"organGerman2Semifusae": "\uEE2F", // Two Semifusae
    /*  */"organGerman3Minimae": "\uEE30", // Three Minimae
    /*  */"organGerman3Semiminimae": "\uEE31", // Three Semiminimae
    /*  */"organGerman3Fusae": "\uEE32", // Three Fusae
    /*  */"organGerman3Semifusae": "\uEE33", // Three Semifusae
    /*  */"organGerman4Minimae": "\uEE34", // Four Minimae
    /*  */"organGerman4Semiminimae": "\uEE35", // Four Semiminimae
    /*  */"organGerman4Fusae": "\uEE36", // Four Fusae
    /*  */"organGerman4Semifusae": "\uEE37", // Four Semifusae
    /*  */"organGerman5Minimae": "\uEE38", // Five Minimae
    /*  */"organGerman5Semiminimae": "\uEE39", // Five Semiminimae
    /*  */"organGerman5Fusae": "\uEE3A", // Five Fusae
    /*  */"organGerman5Semifusae": "\uEE3B", // Five Semifusae
    /*  */"organGerman6Minimae": "\uEE3C", // Six Minimae
    /*  */"organGerman6Semiminimae": "\uEE3D", // Six Semiminimae
    /*  */"organGerman6Fusae": "\uEE3E", // Six Fusae
    /*  */"organGerman6Semifusae": "\uEE3F", // Six Semifusae
    /*  */"accidentalCombiningLower29LimitComma": "\uEE50", // Combining lower by one 29-limit comma
    /*  */"accidentalCombiningRaise29LimitComma": "\uEE51", // Combining raise by one 29-limit comma
    /*  */"accidentalCombiningLower37Quartertone": "\uEE52", // Combining lower by one 37-limit quartertone
    /*  */"accidentalCombiningRaise37Quartertone": "\uEE53", // Combining raise by one 37-limit quartertone
    /*  */"accidentalCombiningLower41Comma": "\uEE54", // Combining lower by one 41-limit comma
    /*  */"accidentalCombiningRaise41Comma": "\uEE55", // Combining raise by one 41-limit comma
    /*  */"accidentalCombiningLower43Comma": "\uEE56", // Combining lower by one 43-limit comma
    /*  */"accidentalCombiningRaise43Comma": "\uEE57", // Combining raise by one 43-limit comma
    /*  */"accidentalCombiningLower47Quartertone": "\uEE58", // Combining lower by one 47-limit quartertone
    /*  */"accidentalCombiningRaise47Quartertone": "\uEE59", // Combining raise by one 47-limit quartertone
    /*  */"accidentalUpsAndDownsUp": "\uEE60", // Accidental up
    /*  */"accidentalUpsAndDownsDown": "\uEE61", // Accidental down
    /*  */"accidentalUpsAndDownsMore": "\uEE62", // Accidental more
    /*  */"accidentalUpsAndDownsLess": "\uEE63", // Accidental less
    /*  */"accidentalHabaQuarterToneHigher": "\uEE64", // Quarter-tone higher (Alois Hába)
    /*  */"accidentalHabaFlatQuarterToneHigher": "\uEE65", // Quarter-tone higher (Alois Hába)
    /*  */"accidentalHabaSharpThreeQuarterTonesHigher": "\uEE66", // Three quarter-tones higher (Alois Hába)
    /*  */"accidentalHabaQuarterToneLower": "\uEE67", // Quarter-tone lower (Alois Hába)
    /*  */"accidentalHabaSharpQuarterToneLower": "\uEE68", // Quarter-tone lower (Alois Hába)
    /*  */"accidentalHabaFlatThreeQuarterTonesLower": "\uEE69", // Three quarter-tones lower (Alois Hába)
    /*  */"swissRudimentsNoteheadBlackFlam": "\uEE70", // Swiss rudiments flam black notehead
    /*  */"swissRudimentsNoteheadHalfFlam": "\uEE71", // Swiss rudiments flam half (minim) notehead
    /*  */"swissRudimentsNoteheadBlackDouble": "\uEE72", // Swiss rudiments doublé black notehead
    /*  */"swissRudimentsNoteheadHalfDouble": "\uEE73", // Swiss rudiments doublé half (minim) notehead
    /*  */"stringsDownBowTowardsBody": "\uEE80", // Down bow, towards body
    /*  */"stringsUpBowTowardsBody": "\uEE81", // Up bow, towards body
    /*  */"stringsDownBowAwayFromBody": "\uEE82", // Down bow, away from body
    /*  */"stringsUpBowAwayFromBody": "\uEE83", // Up bow, away from body
    /*  */"stringsDownBowBeyondBridge": "\uEE84", // Down bow, beyond bridge
    /*  */"stringsUpBowBeyondBridge": "\uEE85", // Up bow, beyond bridge
    /*  */"stringsScrapeParallelInward": "\uEE86", // Scrape, parallel inward
    /*  */"stringsScrapeParallelOutward": "\uEE87", // Scrape, parallel outward
    /*  */"stringsScrapeCircularClockwise": "\uEE88", // Scrape, circular clockwise
    /*  */"stringsScrapeCircularCounterclockwise": "\uEE89", // Scrape, circular counter-clockwise
    /*  */"stringsTripleChopInward": "\uEE8A", // Triple chop, inward
    /*  */"stringsTripleChopOutward": "\uEE8B", // Triple chop, outward
    /*  */"mensuralProportion5": "\uEE90", // Mensural proportion 5
    /*  */"mensuralProportion6": "\uEE91", // Mensural proportion 6
    /*  */"mensuralProportion7": "\uEE92", // Mensural proportion 7
    /*  */"mensuralProportion8": "\uEE93", // Mensural proportion 8
    /*  */"mensuralProportion9": "\uEE94", // Mensural proportion 9
    /*  */"noteheadNancarrowSine": "\uEEA0", // Sine notehead (Nancarrow)
    /*  */"noteheadCowellThirdNoteSeriesWhole": "\uEEA1", // 2/3 note (third note series, Cowell)
    /*  */"noteheadCowellThirdNoteSeriesHalf": "\uEEA2", // 1/3 note (third note series, Cowell)
    /*  */"noteheadCowellThirdNoteSeriesBlack": "\uEEA3", // 1/6 note (third note series, Cowell)
    /*  */"noteheadCowellFifthNoteSeriesWhole": "\uEEA4", // 4/5 note (fifth note series, Cowell)
    /*  */"noteheadCowellFifthNoteSeriesHalf": "\uEEA5", // 2/5 note (fifth note series, Cowell)
    /*  */"noteheadCowellFifthNoteSeriesBlack": "\uEEA6", // 1/5 note (fifth note series, Cowell)
    /*  */"noteheadCowellSeventhNoteSeriesWhole": "\uEEA7", // 4/7 note (seventh note series, Cowell)
    /*  */"noteheadCowellSeventhNoteSeriesHalf": "\uEEA8", // 2/7 note (seventh note series, Cowell)
    /*  */"noteheadCowellSeventhNoteSeriesBlack": "\uEEA9", // 1/7 note (seventh note series, Cowell)
    /*  */"noteheadCowellNinthNoteSeriesWhole": "\uEEAA", // 8/9 note (ninth note series, Cowell)
    /*  */"noteheadCowellNinthNoteSeriesHalf": "\uEEAB", // 4/9 note (ninth note series, Cowell)
    /*  */"noteheadCowellNinthNoteSeriesBlack": "\uEEAC", // 2/9 note (ninth note series, Cowell)
    /*  */"noteheadCowellEleventhNoteSeriesWhole": "\uEEAD", // 8/11 note (eleventh note series, Cowell)
    /*  */"noteheadCowellEleventhNoteSeriesHalf": "\uEEAE", // 4/11 note (eleventh note series, Cowell)
    /*  */"noteheadCowellEleventhSeriesBlack": "\uEEAF", // 2/11 note (eleventh note series, Cowell)
    /*  */"noteheadCowellThirteenthNoteSeriesWhole": "\uEEB0", // 8/13 note (thirteenth note series, Cowell)
    /*  */"noteheadCowellThirteenthNoteSeriesHalf": "\uEEB1", // 4/13 note (thirteenth note series, Cowell)
    /*  */"noteheadCowellThirteenthNoteSeriesBlack": "\uEEB2", // 2/13 note (thirteenth note series, Cowell)
    /*  */"noteheadCowellFifteenthNoteSeriesWhole": "\uEEB3", // 8/15 note (fifteenth note series, Cowell)
    /*  */"noteheadCowellFifteenthNoteSeriesHalf": "\uEEB4", // 4/15 note (fifteenth note series, Cowell)
    /*  */"noteheadCowellFifteenthNoteSeriesBlack": "\uEEB5", // 2/15 note (fifteenth note series, Cowell)
    /*  */"noteDiWhole": "\uEEE0", // Di (whole note)
    /*  */"noteRiWhole": "\uEEE1", // Ri (whole note)
    /*  */"noteRaWhole": "\uEEE2", // Ra (whole note)
    /*  */"noteMeWhole": "\uEEE3", // Me (whole note)
    /*  */"noteFiWhole": "\uEEE4", // Fi (whole note)
    /*  */"noteSeWhole": "\uEEE5", // Se (whole note)
    /*  */"noteLiWhole": "\uEEE6", // Li (whole note)
    /*  */"noteLeWhole": "\uEEE7", // Le (whole note)
    /*  */"noteTeWhole": "\uEEE8", // Te (whole note)
    /*  */"noteDiHalf": "\uEEE9", // Di (half note)
    /*  */"noteRiHalf": "\uEEEA", // Ri (half note)
    /*  */"noteRaHalf": "\uEEEB", // Ra (half note)
    /*  */"noteMeHalf": "\uEEEC", // Me (half note)
    /*  */"noteFiHalf": "\uEEED", // Fi (half note)
    /*  */"noteSeHalf": "\uEEEE", // Se (half note)
    /*  */"noteLiHalf": "\uEEEF", // Li (half note)
    /*  */"noteLeHalf": "\uEEF0", // Le (half note)
    /*  */"noteTeHalf": "\uEEF1", // Te (half note)
    /*  */"noteDiBlack": "\uEEF2", // Di (black note)
    /*  */"noteRiBlack": "\uEEF3", // Ri (black note)
    /*  */"noteRaBlack": "\uEEF4", // Ra (black note)
    /*  */"noteMeBlack": "\uEEF5", // Me (black note)
    /*  */"noteFiBlack": "\uEEF6", // Fi (black note)
    /*  */"noteSeBlack": "\uEEF7", // Se (black note)
    /*  */"noteLiBlack": "\uEEF8", // Li (black note)
    /*  */"noteLeBlack": "\uEEF9", // Le (black note)
    /*  */"noteTeBlack": "\uEEFA", // Te (black note)
    /*  */"scaleDegree1": "\uEF00", // Scale degree 1
    /*  */"scaleDegree2": "\uEF01", // Scale degree 2
    /*  */"scaleDegree3": "\uEF02", // Scale degree 3
    /*  */"scaleDegree4": "\uEF03", // Scale degree 4
    /*  */"scaleDegree5": "\uEF04", // Scale degree 5
    /*  */"scaleDegree6": "\uEF05", // Scale degree 6
    /*  */"scaleDegree7": "\uEF06", // Scale degree 7
    /*  */"scaleDegree8": "\uEF07", // Scale degree 8
    /*  */"scaleDegree9": "\uEF08", // Scale degree 9
} as Record<Code & Word, Unicode & Word>

export {
    SMuFL_MAP,
}
