// tslint:disable

import {RecordKey, Word} from "@sagittal/general"
import {Code, Unicode} from "./types"

// TODO: FEATURE IMPROVE, TOUGH AND LOW PRIORITY: STAFF CODE AUTOMATICALLY STAYS UP-TO-DATE WITH SMuFL
//  "Make a javascript tool that does, at transpile time, what my spreadsheet does, to glyphNames.json.
//  That way, it would automatically generate new codes and widths for every new release of SMuFL/Bravura.
//  I'm not saying you should do this any time soon, or ever, but I thought I should mention the possibility. :)"
//  - So, currently, in deploy.sh, we update the SMuFL/Bravura data in the repo, so widths will be updated.
//  But we need this map here to be computable from glyphnames.json, using a JS impl of Dave's autogen'd naming scheme.
//  Whenever you get to this, you can refer to the SMuFL1.4StaffCode.xlsx file at the root of this repo.
//  You can use this note below (taken from the forum: http://forum.sagittal.org/viewtopic.php?p=3145#p3145)
//  To basically lay out the processing rules. And to confirm you did it correctly, check the generated names against
//  What you already pulled into the repo below.
//  But you'll need to refer to that Excel file to know the 78 (maybe actually 79) words which were special-cased.
/*
It was done by starting with the glyph name and first removing ordinal suffixes like st, nd, rd, th, from numbers.
Then separating words and numbers according to camel-case rules, making all words lowercase.
Then for each word, keeping the first character but replacing any subsequent "ight" with "t" and deleting any subsequent vowel a e i o u.
Then if it is not a number, taking only the first two characters.
If it consist of a single character, that character is uppercased.
Then all the abbreviations for the individual words are concatenated.
There were only 78 words whose abbreviations had to be special-cased in a lookup table to avoid clashes, and to account for some vowel digraphs like ow ey al ah oh.
The longest staffCodes are 16 characters, they are in both Sagittal and EHEJIPN.
 */

const SMuFL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /* 	 */"chtb": "\u0009", // character tabulation
    /* \n */"lnfd": "\u000A",    // line feed
    /*  */"lntb": "\u000B", // line tabulation
    /*  */"frfd": "\u000C", // form feed
    /*  */"crrt": "\u000D",  // carriage return
    /*  */"sp": "\u0020",    // space
    /*  */"nxln": "\u0085", // next line
    /*   */"nobrsp": "\u00A0",   // no-break space
    /*   */"ogspmr": "\u1680",   // ogham space mark
    /*   */"lnsp": "\u2028", // line separator
    /*   */"prsp": "\u2029", // paragraph separator
    /*   */"nrnobrsp": "\u202F", // narrow no-break space
    /*   */"mdmtsp": "\u205F",   // medium mathematical space
    /*  */"br": "\uE000",   // Brace
    /*  */"rvbr": "\uE001", // Reversed brace
    /*  */"bk": "\uE002",   // Bracket
    /*  */"bktp": "\uE003", // Bracket top
    /*  */"bkbt": "\uE004", // Bracket bottom
    /*  */"rvbktp": "\uE005",   // Reversed bracket top
    /*  */"rvbkbt": "\uE006",   // Reversed bracket bottom
    /*  */"sydv": "\uE007", // System divider
    /*  */"sydvln": "\uE008",   // Long system divider
    /*  */"sydvexln": "\uE009", // Extra long system divider
    /*  */"spbrdv": "\uE00A",   // Split bar divider (bar spans a system break)
    /*  */"stdvardn": "\uE00B", // Staff divide arrow down
    /*  */"stdvarup": "\uE00C", // Staff divide arrow up
    /*  */"stdvarupdn": "\uE00D",   // Staff divide arrows
    /*  */"st1ln": "\uE010",    // 1-line staff
    /*  */"st2ln": "\uE011",    // 2-line staff
    /*  */"st3ln": "\uE012",    // 3-line staff
    /*  */"st4ln": "\uE013",    // 4-line staff
    /*  */"st5ln": "\uE014",  // 5-line staff
    /*  */"st6ln": "\uE015",    // 6-line staff
    /*  */"st1lnwd": "\uE016",  // 1-line staff (wide)
    /*  */"st2lnwd": "\uE017",  // 2-line staff (wide)
    /*  */"st3lnwd": "\uE018",  // 3-line staff (wide)
    /*  */"st4lnwd": "\uE019",  // 4-line staff (wide)
    /*  */"st5lnwd": "\uE01A",    // 5-line staff (wide)
    /*  */"st6lnwd": "\uE01B",  // 6-line staff (wide)
    /*  */"st1lnnr": "\uE01C",  // 1-line staff (narrow)
    /*  */"st2lnnr": "\uE01D",  // 2-line staff (narrow)
    /*  */"st3lnnr": "\uE01E",  // 3-line staff (narrow)
    /*  */"st4lnnr": "\uE01F",  // 4-line staff (narrow)
    /*  */"st5lnnr": "\uE020",    // 5-line staff (narrow)
    /*  */"st6lnnr": "\uE021",  // 6-line staff (narrow)
    /*  */"lgln": "\uE022",  // Leger line
    /*  */"lglnwd": "\uE023",   // Leger line (wide)
    /*  */"lglnnr": "\uE024",   // Leger line (narrow)
    /*  */"blsn": "\uE030",   // Single barline
    /*  */"bldb": "\uE031",   // Double barline
    /*  */"blfn": "\uE032", // Final barline
    /*  */"blrvfn": "\uE033",   // Reverse final barline
    /*  */"blhv": "\uE034", // Heavy barline
    /*  */"blhvhv": "\uE035",   // Heavy double barline
    /*  */"blds": "\uE036", // Dashed barline
    /*  */"bldt": "\uE037", // Dotted barline
    /*  */"blsh": "\uE038", // Short barline
    /*  */"bltc": "\uE039", // Tick barline
    /*  */"rplf": "\uE040", // Left (start) repeat sign
    /*  */"rprt": "\uE041", // Right (end) repeat sign
    /*  */"rprtlf": "\uE042",   // Right and left repeat sign
    /*  */"rpds": "\uE043", // Repeat dots
    /*  */"rpdt": "\uE044", // Single repeat dot
    /*  */"dlsg": "\uE045", // Dal segno
    /*  */"dacp": "\uE046", // Da capo
    /*  */"sg": "\uE047",   // Segno
    /*  */"cd": "\uE048",   // Coda
    /*  */"cdsq": "\uE049", // Square coda
    /*  */"sgsr1": "\uE04A",    // Segno (serpent)
    /*  */"sgsr2": "\uE04B",    // Segno (serpent with vertical lines)
    /*  */"lfrpsm": "\uE04C",   // Left repeat sign within bar
    /*  */"rtrpsm": "\uE04D",   // Right repeat sign within bar
    /*  */"Gcl": "\uE050",   // G clef
    /*  */"Gcl15mb": "\uE051",  // G clef quindicesima bassa
    /*  */"Gcl8vb": "\uE052",   // G clef ottava bassa
    /*  */"Gcl8va": "\uE053",   // G clef ottava alta
    /*  */"Gcl15ma": "\uE054",  // G clef quindicesima alta
    /*  */"Gcl8vbol": "\uE055", // G clef ottava bassa (old style)
    /*  */"Gcl8vbCcl": "\uE056",    // G clef ottava bassa with C clef
    /*  */"Gcl8vbpr": "\uE057", // G clef, optionally ottava bassa
    /*  */"Gcllgnmbl": "\uE058",    // Combining G clef, number below
    /*  */"Gcllgnmab": "\uE059",    // Combining G clef, number above
    /*  */"Gclarup": "\uE05A",  // G clef, arrow up
    /*  */"Gclardn": "\uE05B",  // G clef, arrow down
    /*  */"Ccl": "\uE05C",   // C clef
    /*  */"Ccl8vb": "\uE05D",   // C clef ottava bassa
    /*  */"Cclarup": "\uE05E",  // C clef, arrow up
    /*  */"Cclardn": "\uE05F",  // C clef, arrow down
    /*  */"Cclsq": "\uE060",    // C clef (19th century)
    /*  */"Cclcm": "\uE061",    // Combining C clef
    /*  */"Fcl": "\uE062",   // F clef
    /*  */"Fcl15mb": "\uE063",  // F clef quindicesima bassa
    /*  */"Fcl8vb": "\uE064",   // F clef ottava bassa
    /*  */"Fcl8va": "\uE065",   // F clef ottava alta
    /*  */"Fcl15ma": "\uE066",  // F clef quindicesima alta
    /*  */"Fclarup": "\uE067",  // F clef, arrow up
    /*  */"Fclardn": "\uE068",  // F clef, arrow down
    /*  */"unprcl1": "\uE069",  // Unpitched percussion clef 1
    /*  */"unprcl2": "\uE06A",  // Unpitched percussion clef 2
    /*  */"smprcl1": "\uE06B",  // Semi-pitched percussion clef 1
    /*  */"smprcl2": "\uE06C",  // Semi-pitched percussion clef 2
    /*  */"6sttbcl": "\uE06D",  // 6-string tab clef
    /*  */"4sttbcl": "\uE06E",  // 4-string tab clef
    /*  */"sccl": "\uE06F", // Sch\u00e4ffer clef
    /*  */"scprcl": "\uE070",   // Sch\u00e4ffer previous clef
    /*  */"scGcltoFcl": "\uE071",   // Sch\u00e4ffer G clef to F clef change
    /*  */"scFcltoGcl": "\uE072",   // Sch\u00e4ffer F clef to G clef change
    /*  */"Gclrv": "\uE073",    // Reversed G clef
    /*  */"Gcltr": "\uE074",    // Turned G clef
    /*  */"Cclrv": "\uE075",    // Reversed C clef
    /*  */"Fclrv": "\uE076",    // Reversed F clef
    /*  */"Fcltr": "\uE077",    // Turned F clef
    /*  */"brcl": "\uE078", // Bridge clef
    /*  */"acdtcl": "\uE079",   // Diatonic accordion clef
    /*  */"Gclch": "\uE07A",    // G clef change
    /*  */"Cclch": "\uE07B",    // C clef change
    /*  */"Fclch": "\uE07C",    // F clef change
    /*  */"cl8": "\uE07D",  // 8 for clefs
    /*  */"cl15": "\uE07E", // 15 for clefs
    /*  */"clchcm": "\uE07F",   // Combining clef change
    /*  */"tmsg0": "\uE080", // Time signature 0
    /*  */"tmsg1": "\uE081", // Time signature 1
    /*  */"tmsg2": "\uE082", // Time signature 2
    /*  */"tmsg3": "\uE083", // Time signature 3
    /*  */"tmsg4": "\uE084", // Time signature 4
    /*  */"tmsg5": "\uE085", // Time signature 5
    /*  */"tmsg6": "\uE086", // Time signature 6
    /*  */"tmsg7": "\uE087", // Time signature 7
    /*  */"tmsg8": "\uE088", // Time signature 8
    /*  */"tmsg9": "\uE089", // Time signature 9
    /*  */"tmsgcn": "\uE08A",    // Common time
    /*  */"tmsgctcn": "\uE08B", // Cut time
    /*  */"tmsgpl": "\uE08C",   // Time signature +
    /*  */"tmsgplsm": "\uE08D", // Time signature + (for numerators)
    /*  */"tmsgfrsl": "\uE08E", // Time signature fraction slash
    /*  */"tmsgeq": "\uE08F",   // Time signature equals
    /*  */"tmsgmn": "\uE090",   // Time signature minus
    /*  */"tmsgml": "\uE091",   // Time signature multiply
    /*  */"tmsgprlfsm": "\uE092",   // Left parenthesis for numerator only
    /*  */"tmsgprrtsm": "\uE093",   // Right parenthesis for numerator only
    /*  */"tmsgprlf": "\uE094", // Left parenthesis for whole time signature
    /*  */"tmsgprrt": "\uE095", // Right parenthesis for whole time signature
    /*  */"tmsgcm": "\uE096",   // Time signature comma
    /*  */"tmsgfrqr": "\uE097", // Time signature fraction \u00bc
    /*  */"tmsgfrhf": "\uE098", // Time signature fraction \u00bd
    /*  */"tmsgfrthqr": "\uE099",   // Time signature fraction \u00be
    /*  */"tmsgfronth": "\uE09A",   // Time signature fraction \u2153
    /*  */"tmsgfrtwth": "\uE09B",   // Time signature fraction \u2154
    /*  */"tmsgX": "\uE09C",    // Open time signature
    /*  */"tmsgoppn": "\uE09D", // Open time signature (Penderecki)
    /*  */"tmsgcmnm": "\uE09E",   // Control character for numerator digit
    /*  */"tmsgcmdn": "\uE09F",   // Control character for denominator digit
    /*  */"nhdbwh": "\uE0A0",   // Double whole (breve) notehead
    /*  */"nhdbwhsq": "\uE0A1", // Double whole (breve) notehead (square)
    /*  */"nhwh": "\uE0A2", // Whole (semibreve) notehead
    /*  */"nhhf": "\uE0A3", // Half (minim) notehead
    /*  */"nhbl": "\uE0A4", // Black notehead
    /*  */"nhnl": "\uE0A5", // Null notehead
    /*  */"nhXdbwh": "\uE0A6",  // X notehead double whole
    /*  */"nhXwh": "\uE0A7",    // X notehead whole
    /*  */"nhXhf": "\uE0A8",    // X notehead half
    /*  */"nhXbl": "\uE0A9",    // X notehead black
    /*  */"nhXor": "\uE0AA",    // Ornate X notehead
    /*  */"nhXorel": "\uE0AB",  // Ornate X notehead in ellipse
    /*  */"nhpldbwh": "\uE0AC", // Plus notehead double whole
    /*  */"nhplwh": "\uE0AD",   // Plus notehead whole
    /*  */"nhplhf": "\uE0AE",   // Plus notehead half
    /*  */"nhplbl": "\uE0AF",   // Plus notehead black
    /*  */"nhcrXdbwh": "\uE0B0",    // Circle X double whole
    /*  */"nhcrXwh": "\uE0B1",  // Circle X whole
    /*  */"nhcrXhf": "\uE0B2",  // Circle X half
    /*  */"nhcrX": "\uE0B3",    // Circle X notehead
    /*  */"nhdbwhwtX": "\uE0B4",    // Double whole notehead with X
    /*  */"nhwhwtX": "\uE0B5",  // Whole notehead with X
    /*  */"nhhfwtX": "\uE0B6",  // Half notehead with X
    /*  */"nhvdwtX": "\uE0B7",  // Void notehead with X
    /*  */"nhsqwt": "\uE0B8",   // Square notehead white
    /*  */"nhsqbl": "\uE0B9",   // Square notehead black
    /*  */"nhtrupdbwh": "\uE0BA",   // Triangle notehead up double whole
    /*  */"nhtrupwh": "\uE0BB", // Triangle notehead up whole
    /*  */"nhtruphf": "\uE0BC", // Triangle notehead up half
    /*  */"nhtrupwt": "\uE0BD", // Triangle notehead up white
    /*  */"nhtrupbl": "\uE0BE", // Triangle notehead up black
    /*  */"nhtrlfwt": "\uE0BF", // Triangle notehead left white
    /*  */"nhtrlfbl": "\uE0C0", // Triangle notehead left black
    /*  */"nhtrrtwt": "\uE0C1", // Triangle notehead right white
    /*  */"nhtrrtbl": "\uE0C2", // Triangle notehead right black
    /*  */"nhtrdndbwh": "\uE0C3",   // Triangle notehead down double whole
    /*  */"nhtrdnwh": "\uE0C4", // Triangle notehead down whole
    /*  */"nhtrdnhf": "\uE0C5", // Triangle notehead down half
    /*  */"nhtrdnwt": "\uE0C6", // Triangle notehead down white
    /*  */"nhtrdnbl": "\uE0C7", // Triangle notehead down black
    /*  */"nhtruprtwt": "\uE0C8",   // Triangle notehead up right white
    /*  */"nhtruprtbl": "\uE0C9",   // Triangle notehead up right black
    /*  */"nhmnwt": "\uE0CA",   // Moon notehead white
    /*  */"nhmnbl": "\uE0CB",   // Moon notehead black
    /*  */"nhtrrndnwt": "\uE0CC",   // Triangle-round notehead down white
    /*  */"nhtrrndnbl": "\uE0CD",   // Triangle-round notehead down black
    /*  */"nhpr": "\uE0CE", // Parenthesis notehead
    /*  */"nhslbl1": "\uE0CF",  // Slashed black notehead (bottom left to top right)
    /*  */"nhslbl2": "\uE0D0",  // Slashed black notehead (top left to bottom right)
    /*  */"nhslhf1": "\uE0D1",  // Slashed half notehead (bottom left to top right)
    /*  */"nhslhf2": "\uE0D2",  // Slashed half notehead (top left to bottom right)
    /*  */"nhslwh1": "\uE0D3",  // Slashed whole notehead (bottom left to top right)
    /*  */"nhslwh2": "\uE0D4",  // Slashed whole notehead (top left to bottom right)
    /*  */"nhsldbwh1": "\uE0D5",    // Slashed double whole notehead (bottom left to top right)
    /*  */"nhsldbwh2": "\uE0D6",    // Slashed double whole notehead (top left to bottom right)
    /*  */"nhdmdbwh": "\uE0D7", // Diamond double whole notehead
    /*  */"nhdmwh": "\uE0D8",   // Diamond whole notehead
    /*  */"nhdmhf": "\uE0D9",   // Diamond half notehead
    /*  */"nhdmhfwd": "\uE0DA", // Diamond half notehead (wide)
    /*  */"nhdmbl": "\uE0DB",   // Diamond black notehead
    /*  */"nhdmblwd": "\uE0DC", // Diamond black notehead (wide)
    /*  */"nhdmwt": "\uE0DD",   // Diamond white notehead
    /*  */"nhdmwtwd": "\uE0DE", // Diamond white notehead (wide)
    /*  */"nhdmdbwhol": "\uE0DF",   // Diamond double whole notehead (old)
    /*  */"nhdmwhol": "\uE0E0", // Diamond whole notehead (old)
    /*  */"nhdmhfol": "\uE0E1", // Diamond half notehead (old)
    /*  */"nhdmblol": "\uE0E2", // Diamond black notehead (old)
    /*  */"nhdmhffl": "\uE0E3", // Half-filled diamond notehead
    /*  */"nhcrbl": "\uE0E4",   // Circled black notehead
    /*  */"nhcrhf": "\uE0E5",   // Circled half notehead
    /*  */"nhcrwh": "\uE0E6",   // Circled whole notehead
    /*  */"nhcrdbwh": "\uE0E7", // Circled double whole notehead
    /*  */"nhcrbllg": "\uE0E8", // Black notehead in large circle
    /*  */"nhcrhflg": "\uE0E9", // Half notehead in large circle
    /*  */"nhcrwhlg": "\uE0EA", // Whole notehead in large circle
    /*  */"nhcrdbwhlg": "\uE0EB",   // Double whole notehead in large circle
    /*  */"nhcrXlg": "\uE0EC",  // Cross notehead in large circle
    /*  */"nhlgarupdbwh": "\uE0ED", // Large arrow up (highest pitch) double whole notehead
    /*  */"nhlgarupwh": "\uE0EE",   // Large arrow up (highest pitch) whole notehead
    /*  */"nhlgaruphf": "\uE0EF",   // Large arrow up (highest pitch) half notehead
    /*  */"nhlgarupbl": "\uE0F0",   // Large arrow up (highest pitch) black notehead
    /*  */"nhlgardndbwh": "\uE0F1", // Large arrow down (lowest pitch) double whole notehead
    /*  */"nhlgardnwh": "\uE0F2",   // Large arrow down (lowest pitch) whole notehead
    /*  */"nhlgardnhf": "\uE0F3",   // Large arrow down (lowest pitch) half notehead
    /*  */"nhlgardnbl": "\uE0F4",   // Large arrow down (lowest pitch) black notehead
    /*  */"nhprlf": "\uE0F5",   // Opening parenthesis
    /*  */"nhprrt": "\uE0F6",   // Closing parenthesis
    /*  */"nhcrsl": "\uE0F7",   // Circle slash notehead
    /*  */"nhhvX": "\uE0F8",    // Heavy X notehead
    /*  */"nhhvXht": "\uE0F9",  // Heavy X with hat notehead
    /*  */"nhwhfl": "\uE0FA",   // Filled whole (semibreve) notehead
    /*  */"nhhffl": "\uE0FB",   // Filled half (minim) notehead
    /*  */"nhdmop": "\uE0FC",   // Open diamond notehead
    /*  */"nhslvren": "\uE100", // Slash with vertical ends
    /*  */"nhslhren": "\uE101", // Slash with horizontal ends
    /*  */"nhslwtwh": "\uE102", // White slash whole
    /*  */"nhslwthf": "\uE103", // White slash half
    /*  */"nhsldmwt": "\uE104", // Large white diamond
    /*  */"nhslvrensm": "\uE105",   // Small slash with vertical ends
    /*  */"nhslX": "\uE106",    // Large X notehead
    /*  */"nhslvrenmt": "\uE107",   // Muted slash with vertical ends
    /*  */"nhslhrenmt": "\uE108",   // Muted slash with horizontal ends
    /*  */"nhslwtmt": "\uE109", // Muted white slash
    /*  */"nhslwtdbwh": "\uE10A",   // White slash double whole
    /*  */"nhrnbllg": "\uE110", // Large round black notehead
    /*  */"nhrnwtlg": "\uE111", // Large round white notehead
    /*  */"nhrnwtwtdtlg": "\uE112", // Large round white notehead with dot
    /*  */"nhrnbl": "\uE113",   // Round black notehead
    /*  */"nhrnwt": "\uE114",   // Round white notehead
    /*  */"nhrnwtwtdt": "\uE115",   // Round white notehead with dot
    /*  */"nhrnblsllg": "\uE116",   // Large round black notehead, slashed
    /*  */"nhrnwtsllg": "\uE117",   // Large round white notehead, slashed
    /*  */"nhrnblsl": "\uE118", // Round black notehead, slashed
    /*  */"nhrnwtsl": "\uE119", // Round white notehead, slashed
    /*  */"nhsqbllg": "\uE11A", // Large square black notehead
    /*  */"nhsqblwt": "\uE11B", // Large square white notehead
    /*  */"nhrnbldbsl": "\uE11C",   // Round black notehead, double slashed
    /*  */"nhrnwtdbsl": "\uE11D",   // Round white notehead, double slashed
    /*  */"nhclsqwt": "\uE120", // Cluster notehead white (square)
    /*  */"nhclsqbl": "\uE121", // Cluster notehead black (square)
    /*  */"nhclrnwt": "\uE122", // Cluster notehead white (round)
    /*  */"nhclrnbl": "\uE123", // Cluster notehead black (round)
    /*  */"nhcldbwh2": "\uE124",    // Double whole note cluster, 2nd
    /*  */"nhclwh2": "\uE125",  // Whole note cluster, 2nd
    /*  */"nhclhf2": "\uE126",  // Half note cluster, 2nd
    /*  */"nhclqr2": "\uE127",  // Quarter note cluster, 2nd
    /*  */"nhcldbwh3": "\uE128",    // Double whole note cluster, 3rd
    /*  */"nhclwh3": "\uE129",  // Whole note cluster, 3rd
    /*  */"nhclhf3": "\uE12A",  // Half note cluster, 3rd
    /*  */"nhclqr3": "\uE12B",  // Quarter note cluster, 3rd
    /*  */"nhcldbwhtp": "\uE12C",   // Combining double whole note cluster, top
    /*  */"nhcldbwhmd": "\uE12D",   // Combining double whole note cluster, middle
    /*  */"nhcldbwhbt": "\uE12E",   // Combining double whole note cluster, bottom
    /*  */"nhclwhtp": "\uE12F", // Combining whole note cluster, top
    /*  */"nhclwhmd": "\uE130", // Combining whole note cluster, middle
    /*  */"nhclwhbt": "\uE131", // Combining whole note cluster, bottom
    /*  */"nhclhftp": "\uE132", // Combining half note cluster, top
    /*  */"nhclhfmd": "\uE133", // Combining half note cluster, middle
    /*  */"nhclhfbt": "\uE134", // Combining half note cluster, bottom
    /*  */"nhclqrtp": "\uE135", // Combining quarter note cluster, top
    /*  */"nhclqrmd": "\uE136", // Combining quarter note cluster, middle
    /*  */"nhclqrbt": "\uE137", // Combining quarter note cluster, bottom
    /*  */"nhdmclwt2": "\uE138",    // White diamond cluster, 2nd
    /*  */"nhdmclbl2": "\uE139",    // Black diamond cluster, 2nd
    /*  */"nhdmclwt3": "\uE13A",    // White diamond cluster, 3rd
    /*  */"nhdmclbl3": "\uE13B",    // Black diamond cluster, 3rd
    /*  */"nhdmclwttp": "\uE13C",   // Combining white diamond cluster, top
    /*  */"nhdmclwtmd": "\uE13D",   // Combining white diamond cluster, middle
    /*  */"nhdmclwtbt": "\uE13E",   // Combining white diamond cluster, bottom
    /*  */"nhdmclbltp": "\uE13F",   // Combining black diamond cluster, top
    /*  */"nhdmclblmd": "\uE140",   // Combining black diamond cluster, middle
    /*  */"nhdmclblbt": "\uE141",   // Combining black diamond cluster, bottom
    /*  */"nhrcclbltp": "\uE142",   // Combining black rectangular cluster, top
    /*  */"nhrcclblmd": "\uE143",   // Combining black rectangular cluster, middle
    /*  */"nhrcclblbt": "\uE144",   // Combining black rectangular cluster, bottom
    /*  */"nhrcclwttp": "\uE145",   // Combining white rectangular cluster, top
    /*  */"nhrcclwtmd": "\uE146",   // Combining white rectangular cluster, middle
    /*  */"nhrcclwtbt": "\uE147",   // Combining white rectangular cluster, bottom
    /*  */"ntdowh": "\uE150",   // Do (whole note)
    /*  */"ntrewh": "\uE151",   // Re (whole note)
    /*  */"ntmiwh": "\uE152",   // Mi (whole note)
    /*  */"ntfawh": "\uE153",   // Fa (whole note)
    /*  */"ntsowh": "\uE154",   // So (whole note)
    /*  */"ntlawh": "\uE155",   // La (whole note)
    /*  */"nttiwh": "\uE156",   // Ti (whole note)
    /*  */"ntsiwh": "\uE157",   // Si (whole note)
    /*  */"ntdohf": "\uE158",   // Do (half note)
    /*  */"ntrehf": "\uE159",   // Re (half note)
    /*  */"ntmihf": "\uE15A",   // Mi (half note)
    /*  */"ntfahf": "\uE15B",   // Fa (half note)
    /*  */"ntsohf": "\uE15C",   // So (half note)
    /*  */"ntlahf": "\uE15D",   // La (half note)
    /*  */"nttihf": "\uE15E",   // Ti (half note)
    /*  */"ntsihf": "\uE15F",   // Si (half note)
    /*  */"ntdobl": "\uE160",   // Do (black note)
    /*  */"ntrebl": "\uE161",   // Re (black note)
    /*  */"ntmibl": "\uE162",   // Mi (black note)
    /*  */"ntfabl": "\uE163",   // Fa (black note)
    /*  */"ntsobl": "\uE164",   // So (black note)
    /*  */"ntlabl": "\uE165",   // La (black note)
    /*  */"nttibl": "\uE166",   // Ti (black note)
    /*  */"ntsibl": "\uE167",   // Si (black note)
    /*  */"ntAflwh": "\uE168",  // A flat (whole note)
    /*  */"ntAwh": "\uE169",    // A (whole note)
    /*  */"ntAshwh": "\uE16A",  // A sharp (whole note)
    /*  */"ntBflwh": "\uE16B",  // B flat (whole note)
    /*  */"ntBwh": "\uE16C",    // B (whole note)
    /*  */"ntBshwh": "\uE16D",  // B sharp (whole note)
    /*  */"ntCflwh": "\uE16E",  // C flat (whole note)
    /*  */"ntCwh": "\uE16F",    // C (whole note)
    /*  */"ntCshwh": "\uE170",  // C sharp (whole note)
    /*  */"ntDflwh": "\uE171",  // D flat (whole note)
    /*  */"ntDwh": "\uE172",    // D (whole note)
    /*  */"ntDshwh": "\uE173",  // D sharp (whole note)
    /*  */"ntEflwh": "\uE174",  // E flat (whole note)
    /*  */"ntEwh": "\uE175",    // E (whole note)
    /*  */"ntEshwh": "\uE176",  // E sharp (whole note)
    /*  */"ntFflwh": "\uE177",  // F flat (whole note)
    /*  */"ntFwh": "\uE178",    // F (whole note)
    /*  */"ntFshwh": "\uE179",  // F sharp (whole note)
    /*  */"ntGflwh": "\uE17A",  // G flat (whole note)
    /*  */"ntGwh": "\uE17B",    // G (whole note)
    /*  */"ntGshwh": "\uE17C",  // G sharp (whole note)
    /*  */"ntHwh": "\uE17D",    // H (whole note)
    /*  */"ntHshwh": "\uE17E",  // H sharp (whole note)
    /*  */"ntAflhf": "\uE17F",  // A flat (half note)
    /*  */"ntAhf": "\uE180",    // A (half note)
    /*  */"ntAshhf": "\uE181",  // A sharp (half note)
    /*  */"ntBflhf": "\uE182",  // B flat (half note)
    /*  */"ntBhf": "\uE183",    // B (half note)
    /*  */"ntBshhf": "\uE184",  // B sharp (half note)
    /*  */"ntCflhf": "\uE185",  // C flat (half note)
    /*  */"ntChf": "\uE186",    // C (half note)
    /*  */"ntCshhf": "\uE187",  // C sharp (half note)
    /*  */"ntDflhf": "\uE188",  // D flat (half note)
    /*  */"ntDhf": "\uE189",    // D (half note)
    /*  */"ntDshhf": "\uE18A",  // D sharp (half note)
    /*  */"ntEflhf": "\uE18B",  // E flat (half note)
    /*  */"ntEhf": "\uE18C",    // E (half note)
    /*  */"ntEshhf": "\uE18D",  // E sharp (half note)
    /*  */"ntFflhf": "\uE18E",  // F flat (half note)
    /*  */"ntFhf": "\uE18F",    // F (half note)
    /*  */"ntFshhf": "\uE190",  // F sharp (half note)
    /*  */"ntGflhf": "\uE191",  // G flat (half note)
    /*  */"ntGhf": "\uE192",    // G (half note)
    /*  */"ntGshhf": "\uE193",  // G sharp (half note)
    /*  */"ntHhf": "\uE194",    // H (half note)
    /*  */"ntHshhf": "\uE195",  // H sharp (half note)
    /*  */"ntAflbl": "\uE196",  // A flat (black note)
    /*  */"ntAbl": "\uE197",    // A (black note)
    /*  */"ntAshbl": "\uE198",  // A sharp (black note)
    /*  */"ntBflbl": "\uE199",  // B flat (black note)
    /*  */"ntBbl": "\uE19A",    // B (black note)
    /*  */"ntBshbl": "\uE19B",  // B sharp (black note)
    /*  */"ntCflbl": "\uE19C",  // C flat (black note)
    /*  */"ntCbl": "\uE19D",    // C (black note)
    /*  */"ntCshbl": "\uE19E",  // C sharp (black note)
    /*  */"ntDflbl": "\uE19F",  // D flat (black note)
    /*  */"ntDbl": "\uE1A0",    // D (black note)
    /*  */"ntDshbl": "\uE1A1",  // D sharp (black note)
    /*  */"ntEflbl": "\uE1A2",  // E flat (black note)
    /*  */"ntEbl": "\uE1A3",    // E (black note)
    /*  */"ntEshbl": "\uE1A4",  // E sharp (black note)
    /*  */"ntFflbl": "\uE1A5",  // F flat (black note)
    /*  */"ntFbl": "\uE1A6",    // F (black note)
    /*  */"ntFshbl": "\uE1A7",  // F sharp (black note)
    /*  */"ntGflbl": "\uE1A8",  // G flat (black note)
    /*  */"ntGbl": "\uE1A9",    // G (black note)
    /*  */"ntGshbl": "\uE1AA",  // G sharp (black note)
    /*  */"ntHbl": "\uE1AB",    // H (black note)
    /*  */"ntHshbl": "\uE1AC",  // H sharp (black note)
    /*  */"ntemwh": "\uE1AD",   // Empty whole note
    /*  */"ntemhf": "\uE1AE",   // Empty half note
    /*  */"ntembl": "\uE1AF",   // Empty black note
    /*  */"ntshrnwt": "\uE1B0", // Round white (4-shape sol; 7-shape so)
    /*  */"ntshrnbl": "\uE1B1", // Round black (4-shape sol; 7-shape so)
    /*  */"ntshsqwt": "\uE1B2", // Square white (4-shape la; Aikin 7-shape la)
    /*  */"ntshsqbl": "\uE1B3", // Square black (4-shape la; Aikin 7-shape la)
    /*  */"ntshtrrtwt": "\uE1B4",   // Triangle right white (stem down; 4-shape fa; 7-shape fa)
    /*  */"ntshtrrtbl": "\uE1B5",   // Triangle right black (stem down; 4-shape fa; 7-shape fa)
    /*  */"ntshtrlfwt": "\uE1B6",   // Triangle left white (stem up; 4-shape fa; 7-shape fa)
    /*  */"ntshtrlfbl": "\uE1B7",   // Triangle left black (stem up; 4-shape fa; 7-shape fa)
    /*  */"ntshdmwt": "\uE1B8", // Diamond white (4-shape mi; 7-shape mi)
    /*  */"ntshdmbl": "\uE1B9", // Diamond black (4-shape mi; 7-shape mi)
    /*  */"ntshtrupwt": "\uE1BA",   // Triangle up white (Aikin 7-shape do)
    /*  */"ntshtrupbl": "\uE1BB",   // Triangle up black (Aikin 7-shape do)
    /*  */"ntshmnwt": "\uE1BC", // Moon white (Aikin 7-shape re)
    /*  */"ntshmnbl": "\uE1BD", // Moon black (Aikin 7-shape re)
    /*  */"ntshtrrnwt": "\uE1BE",   // Triangle-round white (Aikin 7-shape ti)
    /*  */"ntshtrrnbl": "\uE1BF",   // Triangle-round black (Aikin 7-shape ti)
    /*  */"ntshkswt": "\uE1C0", // Inverted keystone white (Walker 7-shape do)
    /*  */"ntshksbl": "\uE1C1", // Inverted keystone black (Walker 7-shape do)
    /*  */"ntshqrmnwt": "\uE1C2",   // Quarter moon white (Walker 7-shape re)
    /*  */"ntshqrmnbl": "\uE1C3",   // Quarter moon black (Walker 7-shape re)
    /*  */"ntshistrwt": "\uE1C4",   // Isosceles triangle white (Walker 7-shape ti)
    /*  */"ntshistrbl": "\uE1C5",   // Isosceles triangle black (Walker 7-shape ti)
    /*  */"ntshmnlfwt": "\uE1C6",   // Moon left white (Funk 7-shape do)
    /*  */"ntshmnlfbl": "\uE1C7",   // Moon left black (Funk 7-shape do)
    /*  */"ntshahlfwt": "\uE1C8",   // Arrowhead left white (Funk 7-shape re)
    /*  */"ntshahlfbl": "\uE1C9",   // Arrowhead left black (Funk 7-shape re)
    /*  */"ntshtrrnlfwt": "\uE1CA", // Triangle-round left white (Funk 7-shape ti)
    /*  */"ntshtrrnlfbl": "\uE1CB", // Triangle-round left black (Funk 7-shape ti)
    /*  */"ntdbwh": "\uE1D0",    // Double whole note (breve)
    /*  */"ntdbwhsq": "\uE1D1", // Double whole note (square)
    /*  */"ntwh": "\uE1D2",  // Whole note (semibreve)
    /*  */"nthfup": "\uE1D3",    // Half note (minim) stem up
    /*  */"nthfdn": "\uE1D4",    // Half note (minim) stem down
    /*  */"ntqrup": "\uE1D5",    // Quarter note (crotchet) stem up
    /*  */"ntqrdn": "\uE1D6",    // Quarter note (crotchet) stem down
    /*  */"nt8up": "\uE1D7", // Eighth note (quaver) stem up
    /*  */"nt8dn": "\uE1D8", // Eighth note (quaver) stem down
    /*  */"nt16up": "\uE1D9",    // 16th note (semiquaver) stem up
    /*  */"nt16dn": "\uE1DA",    // 16th note (semiquaver) stem down
    /*  */"nt32up": "\uE1DB",   // 32nd note (demisemiquaver) stem up
    /*  */"nt32dn": "\uE1DC",   // 32nd note (demisemiquaver) stem down
    /*  */"nt64up": "\uE1DD",   // 64th note (hemidemisemiquaver) stem up
    /*  */"nt64dn": "\uE1DE",   // 64th note (hemidemisemiquaver) stem down
    /*  */"nt128up": "\uE1DF",  // 128th note (semihemidemisemiquaver) stem up
    /*  */"nt128dn": "\uE1E0",  // 128th note (semihemidemisemiquaver) stem down
    /*  */"nt256up": "\uE1E1",  // 256th note (demisemihemidemisemiquaver) stem up
    /*  */"nt256dn": "\uE1E2",  // 256th note (demisemihemidemisemiquaver) stem down
    /*  */"nt512up": "\uE1E3",  // 512th note (hemidemisemihemidemisemiquaver) stem up
    /*  */"nt512dn": "\uE1E4",  // 512th note (hemidemisemihemidemisemiquaver) stem down
    /*  */"nt1024up": "\uE1E5", // 1024th note (semihemidemisemihemidemisemiquaver) stem up
    /*  */"nt1024dn": "\uE1E6", // 1024th note (semihemidemisemihemidemisemiquaver) stem down
    /*  */"agdt": "\uE1E7", // Augmentation dot
    /*  */"txblntshsm": "\uE1F0",   // Black note, short stem
    /*  */"txblntlnsm": "\uE1F1",   // Black note, long stem
    /*  */"txblntfr8shsm": "\uE1F2",    // Black note, fractional 8th beam, short stem
    /*  */"txblntfr8lnsm": "\uE1F3",    // Black note, fractional 8th beam, long stem
    /*  */"txblntfr16shsm": "\uE1F4",   // Black note, fractional 16th beam, short stem
    /*  */"txblntfr16lnsm": "\uE1F5",   // Black note, fractional 16th beam, long stem
    /*  */"txblntfr32lnsm": "\uE1F6",   // Black note, fractional 32nd beam, long stem
    /*  */"txcn8bmshsm": "\uE1F7",  // Continuing 8th beam for short stem
    /*  */"txcn8bmlnsm": "\uE1F8",  // Continuing 8th beam for long stem
    /*  */"txcn16bmshsm": "\uE1F9", // Continuing 16th beam for short stem
    /*  */"txcn16bmlnsm": "\uE1FA", // Continuing 16th beam for long stem
    /*  */"txcn32bmlnsm": "\uE1FB", // Continuing 32nd beam for long stem
    /*  */"txagdt": "\uE1FC",   // Augmentation dot
    /*  */"txti": "\uE1FD", // Tie
    /*  */"txtpbkstshsm": "\uE1FE", // Tuplet bracket start for short stem
    /*  */"txtp3shsm": "\uE1FF",    // Tuplet number 3 for short stem
    /*  */"txtpbkenshsm": "\uE200", // Tuplet bracket end for short stem
    /*  */"txtpbkstlnsm": "\uE201", // Tuplet bracket start for long stem
    /*  */"txtp3lnsm": "\uE202",    // Tuplet number 3 for long stem
    /*  */"txtpbkenlnsm": "\uE203", // Tuplet bracket end for long stem
    /*  */"txhdblntshsm": "\uE204", // Headless black note, short stem
    /*  */"txhdblntlnsm": "\uE205", // Headless black note, long stem
    /*  */"txhdblntfr8shsm": "\uE206",  // Headless black note, fractional 8th beam, short stem
    /*  */"txhdblntfr8lnsm": "\uE207",  // Headless black note, fractional 8th beam, long stem
    /*  */"txhdblntfr16shsm": "\uE208", // Headless black note, fractional 16th beam, short stem
    /*  */"txhdblntfr16lnsm": "\uE209", // Headless black note, fractional 16th beam, long stem
    /*  */"txhdblntfr32lnsm": "\uE20A", // Headless black note, fractional 32nd beam, long stem
    /*  */"sm": "\uE210",   // Combining stem
    /*  */"smsp": "\uE211", // Combining sprechgesang stem
    /*  */"smsw": "\uE212", // Combining swished stem
    /*  */"smpntr": "\uE213",   // Combining Penderecki unmeasured tremolo stem
    /*  */"smslpn": "\uE214",   // Combining sul ponticello (bow behind bridge) stem
    /*  */"smbwonbr": "\uE215", // Combining bow on bridge stem
    /*  */"smbwontl": "\uE216", // Combining bow on tailpiece stem
    /*  */"smbzrl": "\uE217",   // Combining buzz roll stem
    /*  */"smdm": "\uE218", // Combining damp stem
    /*  */"smvbpl": "\uE219",   // Combining vibrato pulse accent (Saunders) stem
    /*  */"smmlbl": "\uE21A",   // Combining multiphonics (black) stem
    /*  */"smmlwt": "\uE21B",   // Combining multiphonics (white) stem
    /*  */"smmlblwt": "\uE21C", // Combining multiphonics (black and white) stem
    /*  */"smss": "\uE21D", // Combining sussurando stem
    /*  */"smrmsh": "\uE21E",   // Combining rim shot stem
    /*  */"smhpstns": "\uE21F", // Combining harp string noise stem
    /*  */"tr1": "\uE220",  // Combining tremolo 1
    /*  */"tr2": "\uE221",  // Combining tremolo 2
    /*  */"tr3": "\uE222",  // Combining tremolo 3
    /*  */"tr4": "\uE223",  // Combining tremolo 4
    /*  */"tr5": "\uE224",  // Combining tremolo 5
    /*  */"trfn1": "\uE225",    // Fingered tremolo 1
    /*  */"trfn2": "\uE226",    // Fingered tremolo 2
    /*  */"trfn3": "\uE227",    // Fingered tremolo 3
    /*  */"trfn4": "\uE228",    // Fingered tremolo 4
    /*  */"trfn5": "\uE229",    // Fingered tremolo 5
    /*  */"bzrl": "\uE22A", // Buzz roll
    /*  */"pntr": "\uE22B", // Penderecki unmeasured tremolo
    /*  */"untr": "\uE22C", // Wieniawski unmeasured tremolo
    /*  */"untrsm": "\uE22D",   // Wieniawski unmeasured tremolo (simpler)
    /*  */"trdvds2": "\uE22E",  // Divide measured tremolo by 2
    /*  */"trdvds3": "\uE22F",  // Divide measured tremolo by 3
    /*  */"trdvds4": "\uE230",  // Divide measured tremolo by 4
    /*  */"trdvds6": "\uE231",  // Divide measured tremolo by 6
    /*  */"shtr": "\uE232", // Stockhausen irregular tremolo (\"Morsen\", like Morse code)
    /*  */"onhnrlst": "\uE233", // One-handed roll (Stevens)
    /*  */"dbltrlst": "\uE234", // Double lateral roll (Stevens)
    /*  */"fl8up": "\uE240",    // Combining flag 1 (8th) above
    /*  */"fl8dn": "\uE241",    // Combining flag 1 (8th) below
    /*  */"fl16up": "\uE242",   // Combining flag 2 (16th) above
    /*  */"fl16dn": "\uE243",   // Combining flag 2 (16th) below
    /*  */"fl32up": "\uE244",   // Combining flag 3 (32nd) above
    /*  */"fl32dn": "\uE245",   // Combining flag 3 (32nd) below
    /*  */"fl64up": "\uE246",   // Combining flag 4 (64th) above
    /*  */"fl64dn": "\uE247",   // Combining flag 4 (64th) below
    /*  */"fl128up": "\uE248",  // Combining flag 5 (128th) above
    /*  */"fl128dn": "\uE249",  // Combining flag 5 (128th) below
    /*  */"fl256up": "\uE24A",  // Combining flag 6 (256th) above
    /*  */"fl256dn": "\uE24B",  // Combining flag 6 (256th) below
    /*  */"fl512up": "\uE24C",  // Combining flag 7 (512th) above
    /*  */"fl512dn": "\uE24D",  // Combining flag 7 (512th) below
    /*  */"fl1024up": "\uE24E", // Combining flag 8 (1024th) above
    /*  */"fl1024dn": "\uE24F", // Combining flag 8 (1024th) below
    /*  */"flinup": "\uE250",   // Internal combining flag above
    /*  */"flindn": "\uE251",   // Internal combining flag below
    /*  */"acfl": "\uE260",   // Flat
    /*  */"acnt": "\uE261",   // Natural
    /*  */"acsh": "\uE262",   // Sharp
    /*  */"acdbsh": "\uE263", // Double sharp
    /*  */"acdbfl": "\uE264",    // Double flat
    /*  */"actrsh": "\uE265",   // Triple sharp
    /*  */"actrfl": "\uE266",   // Triple flat
    /*  */"acntfl": "\uE267",   // Natural flat
    /*  */"acntsh": "\uE268",   // Natural sharp
    /*  */"acshsh": "\uE269",   // Sharp sharp
    /*  */"acprlf": "\uE26A",   // Accidental parenthesis, left
    /*  */"acprrt": "\uE26B",   // Accidental parenthesis, right
    /*  */"acbklf": "\uE26C",   // Accidental bracket, left
    /*  */"acbkrt": "\uE26D",   // Accidental bracket, right
    /*  */"acqrtnflarup": "\uE270", // Quarter-tone flat
    /*  */"acthqrtnflardn": "\uE271",   // Three-quarter-tones flat
    /*  */"acqrtnshntarup": "\uE272",   // Quarter-tone sharp
    /*  */"acqrtnflntardn": "\uE273",   // Quarter-tone flat
    /*  */"acthqrtnsharup": "\uE274",   // Three-quarter-tones sharp
    /*  */"acqrtnshardn": "\uE275", // Quarter-tone sharp
    /*  */"acfvqrtnsharup": "\uE276",   // Five-quarter-tones sharp
    /*  */"acthqrtnshardn": "\uE277",   // Three-quarter-tones sharp
    /*  */"acthqrtnflarup": "\uE278",   // Three-quarter-tones flat
    /*  */"acfvqrtnflardn": "\uE279",   // Five-quarter-tones flat
    /*  */"acarup": "\uE27A",   // Arrow up (raise by one quarter-tone)
    /*  */"acardn": "\uE27B",   // Arrow down (lower by one quarter-tone)
    /*  */"acqrtnflst": "\uE280",   // Reversed flat (quarter-tone flat) (Stein)
    /*  */"acthqrtnflzm": "\uE281", // Reversed flat and flat (three-quarter-tones flat) (Zimmermann)
    /*  */"acqrtnshst": "\uE282",   // Half sharp (quarter-tone sharp) (Stein)
    /*  */"acthqrtnshst": "\uE283", // One and a half sharps (three-quarter-tones sharp) (Stein)
    /*  */"acnrrvfl": "\uE284", // Narrow reversed flat(quarter-tone flat)
    /*  */"acnrrvflanfl": "\uE285", // Narrow reversed flat and flat(three-quarter-tones flat)
    /*  */"acrvflarup": "\uE290",   // Reversed flat with arrow up
    /*  */"acrvflardn": "\uE291",   // Reversed flat with arrow down
    /*  */"acflrvflarup": "\uE292", // Filled reversed flat with arrow up
    /*  */"acflrvflardn": "\uE293", // Filled reversed flat with arrow down
    /*  */"acrvflanflarup": "\uE294",   // Reversed flat and flat with arrow up
    /*  */"acrvflanflardn": "\uE295",   // Reversed flat and flat with arrow down
    /*  */"acflrvflanfl": "\uE296", // Filled reversed flat and flat
    /*  */"acflrvflanflarup": "\uE297", // Filled reversed flat and flat with arrow up
    /*  */"acflrvflanflardn": "\uE298", // Filled reversed flat and flat with arrow down
    /*  */"achfsharup": "\uE299",   // Half sharp with arrow up
    /*  */"achfshardn": "\uE29A",   // Half sharp with arrow down
    /*  */"aconanAhfsharup": "\uE29B",  // One and a half sharps with arrow up
    /*  */"aconanAhfshardn": "\uE29C",  // One and a half sharps with arrow down
    /*  */"acsm12dn": "\uE2A0", // 1/12 tone low
    /*  */"acsm6dn": "\uE2A1",  // 1/6 tone low
    /*  */"acsm4dn": "\uE2A2",  // 1/4 tone low
    /*  */"acsm12up": "\uE2A3", // 1/12 tone high
    /*  */"acsm6up": "\uE2A4",  // 1/6 tone high
    /*  */"acsm4up": "\uE2A5",  // 1/4 tone high
    /*  */"acjnpl": "\uE2B0",   // Plus (raise by 81:80)
    /*  */"acjnmn": "\uE2B1",   // Minus (lower by 81:80)
    /*  */"acjnel": "\uE2B2",   // Inverted seven (raise by 36:35)
    /*  */"acjnsv": "\uE2B3",   // Seven (lower by 36:35)
    /*  */"acjnup": "\uE2B4",   // Up arrow (raise by 33:32)
    /*  */"acjndn": "\uE2B5",   // Down arrow (lower by 33:32)
    /*  */"acjn13": "\uE2B6",   // Thirteen (raise by 65:64)
    /*  */"acjn31": "\uE2B7",   // Inverted 13 (lower by 65:64)
    /*  */"acdbflonardn": "\uE2C0", // Double flat lowered by one syntonic comma
    /*  */"acflonardn": "\uE2C1",   // Flat lowered by one syntonic comma
    /*  */"acntonardn": "\uE2C2",   // Natural lowered by one syntonic comma
    /*  */"acshonardn": "\uE2C3",   // Sharp lowered by one syntonic comma
    /*  */"acdbshonardn": "\uE2C4", // Double sharp lowered by one syntonic comma
    /*  */"acdbflonarup": "\uE2C5", // Double flat raised by one syntonic comma
    /*  */"acflonarup": "\uE2C6",   // Flat raised by one syntonic comma
    /*  */"acntonarup": "\uE2C7",   // Natural raised by one syntonic comma
    /*  */"acshonarup": "\uE2C8",   // Sharp raised by one syntonic comma
    /*  */"acdbshonarup": "\uE2C9", // Double sharp raised by one syntonic comma
    /*  */"acdbfltwardn": "\uE2CA", // Double flat lowered by two syntonic commas
    /*  */"acfltwardn": "\uE2CB",   // Flat lowered by two syntonic commas
    /*  */"acnttwardn": "\uE2CC",   // Natural lowered by two syntonic commas
    /*  */"acshtwardn": "\uE2CD",   // Sharp lowered by two syntonic commas
    /*  */"acdbshtwardn": "\uE2CE", // Double sharp lowered by two syntonic commas
    /*  */"acdbfltwarup": "\uE2CF", // Double flat raised by two syntonic commas
    /*  */"acfltwarup": "\uE2D0",   // Flat raised by two syntonic commas
    /*  */"acnttwarup": "\uE2D1",   // Natural raised by two syntonic commas
    /*  */"acshtwarup": "\uE2D2",   // Sharp raised by two syntonic commas
    /*  */"acdbshtwarup": "\uE2D3", // Double sharp raised by two syntonic commas
    /*  */"acdbflthardn": "\uE2D4", // Double flat lowered by three syntonic commas
    /*  */"acflthardn": "\uE2D5",   // Flat lowered by three syntonic commas
    /*  */"acntthardn": "\uE2D6",   // Natural lowered by three syntonic commas
    /*  */"acshthardn": "\uE2D7",   // Sharp lowered by three syntonic commas
    /*  */"acdbshthardn": "\uE2D8", // Double sharp lowered by three syntonic commas
    /*  */"acdbfltharup": "\uE2D9", // Double flat raised by three syntonic commas
    /*  */"acfltharup": "\uE2DA",   // Flat raised by three syntonic commas
    /*  */"acnttharup": "\uE2DB",   // Natural raised by three syntonic commas
    /*  */"acshtharup": "\uE2DC",   // Sharp raised by three syntonic commas
    /*  */"acdbshtharup": "\uE2DD", // Double sharp raised by three syntonic commas
    /*  */"aclwonspcm": "\uE2DE",   // Lower by one septimal comma
    /*  */"acrsonspcm": "\uE2DF",   // Raise by one septimal comma
    /*  */"aclwtwspcm": "\uE2E0",   // Lower by two septimal commas
    /*  */"acrstwspcm": "\uE2E1",   // Raise by two septimal commas
    /*  */"aclwonunqr": "\uE2E2",   // Lower by one undecimal quartertone
    /*  */"acrsonunqr": "\uE2E3",   // Raise by one undecimal quartertone
    /*  */"aclwontrqr": "\uE2E4",   // Lower by one tridecimal quartertone
    /*  */"acrsontrqr": "\uE2E5",   // Raise by one tridecimal quartertone
    /*  */"accmlw17sc": "\uE2E6",   // Combining lower by one 17-limit schisma
    /*  */"accmrs17sc": "\uE2E7",   // Combining raise by one 17-limit schisma
    /*  */"accmlw19sc": "\uE2E8",   // Combining lower by one 19-limit schisma
    /*  */"accmrs19sc": "\uE2E9",   // Combining raise by one 19-limit schisma
    /*  */"accmlw23lm29lmcm": "\uE2EA", // Combining lower by one 23-limit comma
    /*  */"accmrs23lm29lmcm": "\uE2EB", // Combining raise by one 23-limit comma
    /*  */"accmlw31sc": "\uE2EC",   // Combining lower by one 31-limit schisma
    /*  */"accmrs31sc": "\uE2ED",   // Combining raise by one 31-limit schisma
    /*  */"accmopcrbr": "\uE2EE",   // Combining open curly brace
    /*  */"accmclcrbr": "\uE2EF",   // Combining close curly brace
    /*  */"acdbfleqtm": "\uE2F0",   // Double flat equal tempered semitone
    /*  */"acfleqtm": "\uE2F1", // Flat equal tempered semitone
    /*  */"acnteqtm": "\uE2F2", // Natural equal tempered semitone
    /*  */"acsheqtm": "\uE2F3", // Sharp equal tempered semitone
    /*  */"acdbsheqtm": "\uE2F4",   // Double sharp equal tempered semitone
    /*  */"acqrfleqtm": "\uE2F5",   // Lower by one equal tempered quarter-tone
    /*  */"acqrsheqtm": "\uE2F6",   // Raise by one equal tempered quarter tone
    /*  */"accmlw53lmcm": "\uE2F7", // Combining lower by one 53-limit comma
    /*  */"accmrs53lmcm": "\uE2F8", // Combining raise by one 53-limit comma
    /*  */"acentl": "\uE2F9",   // Enharmonically reinterpret accidental tilde
    /*  */"acenaleqto": "\uE2FA",   // Enharmonically reinterpret accidental almost equal to
    /*  */"aceneq": "\uE2FB",   // Enharmonically reinterpret accidental equals
    /*  */"acsg5V7klup": "\uE300",    // 5:7 kleisma up, (5:7k, ~11:13k, 7C\u00a0less\u00a05C)
    /*  */"acsg5V7kldn": "\uE301",    // 5:7 kleisma down
    /*  */"acsg5cmup": "\uE302",  // 5 comma up, (5C), 1\u00b0 up [22 27 29 34 41 46 53 96 EDOs], 1/12-tone up
    /*  */"acsg5cmdn": "\uE303",  // 5 comma down, 1\u00b0 down [22 27 29 34 41 46 53 96 EDOs], 1/12-tone down
    /*  */"acsg7cmup": "\uE304",  // 7 comma up, (7C), 1\u00b0 up [43 EDO], 2\u00b0 up [72 EDO], 1/6-tone up
    /*  */"acsg7cmdn": "\uE305",  // 7 comma down, 1\u00b0 down [43 EDO], 2\u00b0 down [72 EDO], 1/6-tone down
    /*  */"acsg25smdsup": "\uE306",   // 25 small diesis up, (25S, ~5:13S, ~37S, 5C\u00a0plus\u00a05C), 2\u00b0 up [53 EDO]
    /*  */"acsg25smdsdn": "\uE307",   // 25 small diesis down, 2\u00b0 down [53 EDO]
    /*  */"acsg35mddsup": "\uE308",   // 35 medium diesis up, (35M, ~13M, ~125M, 5C\u00a0plus\u00a07C), 2/9-tone up
    /*  */"acsg35mddsdn": "\uE309",   // 35 medium diesis down, 1\u00b0[50] 2\u00b0[27] down, 2/9-tone down
    /*  */"acsg11mddsup": "\uE30A",  // 11 medium diesis up, (11M), 1\u00b0[17 31] 2\u00b046 up, 1/4-tone up
    /*  */"acsg11mddsdn": "\uE30B",  // 11 medium diesis down, 1\u00b0[17 31] 2\u00b046 down, 1/4-tone down
    /*  */"acsg11lgdsup": "\uE30C",  // 11 large diesis up, (11L), (sharp less 11M), 3\u00b0 up [46 EDO]
    /*  */"acsg11lgdsdn": "\uE30D",  // 11 large diesis down, 3\u00b0 down [46 EDO]
    /*  */"acsg35lgdsup": "\uE30E",  // 35 large diesis up, (35L, ~13L, ~125L,  sharp less 35M), 2\u00b050 up
    /*  */"acsg35lgdsdn": "\uE30F",  // 35 large diesis down, 2\u00b0 down [50 EDO], 5/18-tone down
    /*  */"acsgsh25Sdn": "\uE310",  // Sharp 25S-down, 3\u00b0 up [53 EDO]
    /*  */"acsgfl25Sup": "\uE311",  // Flat 25S-up, 3\u00b0 down [53 EDO]
    /*  */"acsgsh7Cdn": "\uE312",   // Sharp 7C-down, 2\u00b0 up [43 EDO], 4\u00b0 up [72 EDO], 1/3-tone up
    /*  */"acsgfl7Cup": "\uE313",   // Flat 7C-up, 2\u00b0 down [43 EDO], 4\u00b0 down [72 EDO], 1/3-tone down
    /*  */"acsgsh5Cdn": "\uE314",   // Sharp 5C-down, 2\u00b0[22 29] 3\u00b0[27 34 41] 4\u00b0[39 46 53] 5\u00b0[72] 7\u00b0[96] up, 5/12-tone up
    /*  */"acsgfl5Cup": "\uE315",   // Flat 5C-up, 2\u00b0[22 29] 3\u00b0[27 34 41] 4\u00b0[39 46 53] 5\u00b072 7\u00b0[96] down, 5/12-tone down
    /*  */"acsgsh5V7Kdn": "\uE316", // Sharp 5:7k-down
    /*  */"acsgfl5V7Kup": "\uE317", // Flat 5:7k-up
    /*  */"acsgsh": "\uE318",   // Sharp, (apotome up)[almost all EDOs], 1/2-tone up
    /*  */"acsgfl": "\uE319",   // Flat, (apotome down)[almost all EDOs], 1/2-tone down
    /*  */"acsgsh5V7Kup": "\uE31C", // Sharp 5:7k-up
    /*  */"acsgfl5V7Kdn": "\uE31D", // Flat 5:7k-down
    /*  */"acsgsh5Cup": "\uE31E",   // Sharp 5C-up, 4\u00b0[22 29] 5\u00b0[27 34 41] 6\u00b0[39 46 53] up, 7/12-tone up
    /*  */"acsgfl5Cdn": "\uE31F",   // Flat 5C-down, 4\u00b0[22 29] 5\u00b0[27 34 41] 6\u00b0[39 46 53] down, 7/12-tone down
    /*  */"acsgsh7Cup": "\uE320",   // Sharp 7C-up, 4\u00b0 up [43 EDO], 8\u00b0 up [72 EDO], 2/3-tone up
    /*  */"acsgfl7Cdn": "\uE321",   // Flat 7C-down, 4\u00b0 down [43 EDO], 8\u00b0 down [72 EDO], 2/3-tone down
    /*  */"acsgsh25Sup": "\uE322",  // Sharp 25S-up, 7\u00b0 up [53 EDO]
    /*  */"acsgfl25Sdn": "\uE323",  // Flat 25S-down, 7\u00b0 down [53 EDO]
    /*  */"acsgsh35Mup": "\uE324",  // Sharp 35M-up, 4\u00b0 up [50 EDO], 6\u00b0 up [27 EDO], 13/18-tone up
    /*  */"acsgfl35Mdn": "\uE325",  // Flat 35M-down, 4\u00b0 down [50 EDO], 6\u00b0 down [27 EDO], 13/18-tone down
    /*  */"acsgsh11Mup": "\uE326",  // Sharp 11M-up, 3\u00b0 up [17 31 EDOs], 7\u00b0 up [46 EDO], 3/4-tone up
    /*  */"acsgfl11Mdn": "\uE327",  // Flat 11M-down, 3\u00b0 down [17 31 EDOs], 7\u00b0 down [46 EDO], 3/4-tone down
    /*  */"acsgsh11Lup": "\uE328",  // Sharp 11L-up, 8\u00b0 up [46 EDO]
    /*  */"acsgfl11Ldn": "\uE329",  // Flat 11L-down, 8\u00b0 up [46 EDO]
    /*  */"acsgsh35Lup": "\uE32A",  // Sharp 35L-up, 5\u00b0 up [50 EDO]
    /*  */"acsgfl35Ldn": "\uE32B",  // Flat 35L-down, 5\u00b0 down [50 EDO]
    /*  */"acsgdbsh25Sdn": "\uE32C",    // Double sharp 25S-down, 8\u00b0up [53 EDO]
    /*  */"acsgdbfl25Sup": "\uE32D",    // Double flat 25S-up, 8\u00b0down [53 EDO]
    /*  */"acsgdbsh7Cdn": "\uE32E", // Double sharp 7C-down, 5\u00b0[43] 10\u00b0[72] up, 5/6-tone up
    /*  */"acsgdbfl7Cup": "\uE32F", // Double flat 7C-up, 5\u00b0 down [43 EDO], 10\u00b0 down [72 EDO], 5/6-tone down
    /*  */"acsgdbsh5Cdn": "\uE330", // Double sharp 5C-down, 5\u00b0[22 29] 7\u00b0[34 41] 9\u00b053 up, 11/12 tone up
    /*  */"acsgdbfl5Cup": "\uE331", // Double flat 5C-up, 5\u00b0[22 29] 7\u00b0[34 41] 9\u00b053 down, 11/12 tone down
    /*  */"acsgdbsh5V7Kdn": "\uE332",   // Double sharp 5:7k-down
    /*  */"acsgdbfl5V7Kup": "\uE333",   // Double flat 5:7k-up
    /*  */"acsgdbsh": "\uE334", // Double sharp, (2 apotomes up)[almost all EDOs], whole-tone up
    /*  */"acsgdbfl": "\uE335", // Double flat, (2 apotomes down)[almost all EDOs], whole-tone down
    /*  */"acsg7V11klup": "\uE340", // 7:11 kleisma up, (7:11k, ~29k)
    /*  */"acsg7V11kldn": "\uE341", // 7:11 kleisma down
    /*  */"acsg17cmup": "\uE342",   // 17 comma up, (17C)
    /*  */"acsg17cmdn": "\uE343",   // 17 comma down
    /*  */"acsg55cmup": "\uE344",   // 55 comma up, (55C, 11M less 5C), 3\u00b0up [96 EDO], 3/16-tone up
    /*  */"acsg55cmdn": "\uE345",   // 55 comma down, 3\u00b0 down [96 EDO], 3/16-tone down
    /*  */"acsg7V11cmup": "\uE346", // 7:11 comma up, (7:11C, ~13:17S, ~29S, 11L less 7C), 1\u00b0 up [60 EDO]
    /*  */"acsg7V11cmdn": "\uE347", // 7:11 comma down, 1\u00b0 down [60 EDO], 1/10-tone down
    /*  */"acsg5V11smdsup": "\uE348",   // 5:11 small diesis up, (5:11S, ~7:13S, ~11:17S, 5:7k plus 7:11C)
    /*  */"acsg5V11smdsdn": "\uE349",   // 5:11 small diesis down
    /*  */"acsgsh5V11Sdn": "\uE34A",    // Sharp 5:11S-down
    /*  */"acsgfl5V11Sup": "\uE34B",    // Flat 5:11S-up
    /*  */"acsgsh7V11Cdn": "\uE34C",    // Sharp 7:11C-down, 4\u00b0 up [60 EDO], 2/5-tone up
    /*  */"acsgfl7V11Cup": "\uE34D",    // Flat 7:11C-up, 4\u00b0 down [60 EDO], 2/5-tone down
    /*  */"acsgsh55Cdn": "\uE34E",  // Sharp 55C-down, 5\u00b0 up [96 EDO], 5/16-tone up
    /*  */"acsgfl55Cup": "\uE34F",  // Flat 55C-up, 5\u00b0 down [96 EDO], 5/16-tone down
    /*  */"acsgsh17Cdn": "\uE350",  // Sharp 17C-down
    /*  */"acsgfl17Cup": "\uE351",  // Flat 17C-up
    /*  */"acsgsh7V11Kdn": "\uE352",    // Sharp 7:11k-down
    /*  */"acsgfl7V11Kup": "\uE353",    // Flat 7:11k-up
    /*  */"acsgsh7V11Kup": "\uE354",    // Sharp 7:11k-up
    /*  */"acsgfl7V11Kdn": "\uE355",    // Flat 7:11k-down
    /*  */"acsgsh17Cup": "\uE356",  // Sharp 17C-up
    /*  */"acsgfl17Cdn": "\uE357",  // Flat 17C-down
    /*  */"acsgsh55Cup": "\uE358",  // Sharp 55C-up, 11\u00b0 up [96 EDO], 11/16-tone up
    /*  */"acsgfl55Cdn": "\uE359",  // Flat 55C-down, 11\u00b0 down [96 EDO], 11/16-tone down
    /*  */"acsgsh7V11Cup": "\uE35A",    // Sharp 7:11C-up, 6\u00b0 up [60 EDO], 3/5- tone up
    /*  */"acsgfl7V11Cdn": "\uE35B",    // Flat 7:11C-down, 6\u00b0 down [60 EDO], 3/5- tone down
    /*  */"acsgsh5V11Sup": "\uE35C",    // Sharp 5:11S-up
    /*  */"acsgfl5V11Sdn": "\uE35D",    // Flat 5:11S-down
    /*  */"acsgdbsh5V11Sdn": "\uE35E",  // Double sharp 5:11S-down
    /*  */"acsgdbfl5V11Sup": "\uE35F",  // Double flat 5:11S-up
    /*  */"acsgdbsh7V11Cdn": "\uE360",  // Double sharp 7:11C-down, 9\u00b0 up [60 EDO], 9/10-tone up
    /*  */"acsgdbfl7V11Cup": "\uE361",  // Double flat 7:11C-up, 9\u00b0 down [60 EDO], 9/10-tone down
    /*  */"acsgdbsh55Cdn": "\uE362",    // Double sharp 55C-down, 13\u00b0 up [96 EDO], 13/16-tone up
    /*  */"acsgdbfl55Cup": "\uE363",    // Double flat 55C-up, 13\u00b0 down [96 EDO], 13/16-tone down
    /*  */"acsgdbsh17Cdn": "\uE364",    // Double sharp 17C-down
    /*  */"acsgdbfl17Cup": "\uE365",    // Double flat 17C-up
    /*  */"acsgdbsh7V11Kdn": "\uE366",  // Double sharp 7:11k-down
    /*  */"acsgdbfl7V11Kup": "\uE367",  // Double flat 7:11k-up
    /*  */"acsg23cmup": "\uE370",   // 23 comma up, (23C), 2\u00b0 up [96 EDO], 1/8-tone up
    /*  */"acsg23cmdn": "\uE371",   // 23 comma down, 2\u00b0 down [96 EDO], 1/8-tone down
    /*  */"acsg5V19cmup": "\uE372", // 5:19 comma up, (5:19C, 5C plus 19s), 1/20-tone up
    /*  */"acsg5V19cmdn": "\uE373", // 5:19 comma down, 1/20-tone down
    /*  */"acsg5V23smdsup": "\uE374",   // 5:23 small diesis up, (5:23S, 5C plus 23C), 2\u00b0 up [60 EDO], 1/5-tone up
    /*  */"acsg5V23smdsdn": "\uE375",   // 5:23 small diesis down, 2\u00b0 down [60 EDO], 1/5-tone down
    /*  */"acsgsh5V23Sdn": "\uE376",    // Sharp 5:23S-down, 3\u00b0 up [60 EDO], 3/10-tone up
    /*  */"acsgfl5V23Sup": "\uE377",    // Flat 5:23S-up, 3\u00b0 down [60 EDO], 3/10-tone down
    /*  */"acsgsh5V19Cdn": "\uE378",    // Sharp 5:19C-down, 9/20-tone up
    /*  */"acsgfl5V19Cup": "\uE379",    // Flat 5:19C-up, 9/20-tone down
    /*  */"acsgsh23Cdn": "\uE37A",  // Sharp 23C-down, 6\u00b0 up [96 EDO], 3/8-tone up
    /*  */"acsgfl23Cup": "\uE37B",  // Flat 23C-up, 6\u00b0 down [96 EDO], 3/8-tone down
    /*  */"acsgsh23Cup": "\uE37C",  // Sharp 23C-up, 10\u00b0 up [96 EDO], 5/8-tone up
    /*  */"acsgfl23Cdn": "\uE37D",  // Flat 23C-down, 10\u00b0 down [96 EDO], 5/8-tone down
    /*  */"acsgsh5V19Cup": "\uE37E",    // Sharp 5:19C-up, 11/20-tone up
    /*  */"acsgfl5V19Cdn": "\uE37F",    // Flat 5:19C-down, 11/20-tone down
    /*  */"acsgsh5V23Sup": "\uE380",    // Sharp 5:23S-up, 7\u00b0 up [60 EDO], 7/10-tone up
    /*  */"acsgfl5V23Sdn": "\uE381",    // Flat 5:23S-down, 7\u00b0 down [60 EDO], 7/10-tone down
    /*  */"acsgdbsh5V23Sdn": "\uE382",  // Double sharp 5:23S-down, 8\u00b0 up [60 EDO], 4/5-tone up
    /*  */"acsgdbfl5V23Sup": "\uE383",  // Double flat 5:23S-up, 8\u00b0 down  [60 EDO], 4/5-tone down
    /*  */"acsgdbsh5V19Cdn": "\uE384",  // Double sharp 5:19C-down, 19/20-tone up
    /*  */"acsgdbfl5V19Cup": "\uE385",  // Double flat 5:19C-up, 19/20-tone down
    /*  */"acsgdbsh23Cdn": "\uE386",    // Double sharp 23C-down, 14\u00b0up [96 EDO], 7/8-tone up
    /*  */"acsgdbfl23Cup": "\uE387",    // Double flat 23C-up, 14\u00b0 down [96 EDO], 7/8-tone down
    /*  */"acsg19scup": "\uE390",   // 19 schisma up, (19s)
    /*  */"acsg19scdn": "\uE391",   // 19 schisma down
    /*  */"acsg17klup": "\uE392",   // 17 kleisma up, (17k)
    /*  */"acsg17kldn": "\uE393",   // 17 kleisma down
    /*  */"acsg143cmup": "\uE394",  // 143 comma up, (143C, 13L less 11M)
    /*  */"acsg143cmdn": "\uE395",  // 143 comma down
    /*  */"acsg11V49cmup": "\uE396",    // 11:49 comma up, (11:49C, 11M less 49C)
    /*  */"acsg11V49cmdn": "\uE397",    // 11:49 comma down
    /*  */"acsg19cmup": "\uE398",   // 19 comma up, (19C)
    /*  */"acsg19cmdn": "\uE399",   // 19 comma down
    /*  */"acsg7V19cmup": "\uE39A", // 7:19 comma up, (7:19C, 7C less 19s)
    /*  */"acsg7V19cmdn": "\uE39B", // 7:19 comma down
    /*  */"acsg49smdsup": "\uE39C", // 49 small diesis up, (49S, ~31S)
    /*  */"acsg49smdsdn": "\uE39D", // 49 small diesis down
    /*  */"acsg23smdsup": "\uE39E", // 23 small diesis up, (23S)
    /*  */"acsg23smdsdn": "\uE39F", // 23 small diesis down
    /*  */"acsg5V13mddsup": "\uE3A0",   // 5:13 medium diesis up, (5:13M, ~37M, 5C plus 13C)
    /*  */"acsg5V13mddsdn": "\uE3A1",   // 5:13 medium diesis down
    /*  */"acsg11V19mddsup": "\uE3A2",  // 11:19 medium diesis up, (11:19M, 11M plus 19s)
    /*  */"acsg11V19mddsdn": "\uE3A3",  // 11:19 medium diesis down
    /*  */"acsg49mddsup": "\uE3A4", // 49 medium diesis up, (49M, ~31M, 7C plus 7C)
    /*  */"acsg49mddsdn": "\uE3A5", // 49 medium diesis down
    /*  */"acsg5V49mddsup": "\uE3A6",   // 5:49 medium diesis up, (5:49M, half apotome)
    /*  */"acsg5V49mddsdn": "\uE3A7",   // 5:49 medium diesis down
    /*  */"acsg49lgdsup": "\uE3A8", // 49 large diesis up, (49L, ~31L, apotome less 49M)
    /*  */"acsg49lgdsdn": "\uE3A9", // 49 large diesis down
    /*  */"acsg11V19lgdsup": "\uE3AA",  // 11:19 large diesis up, (11:19L, apotome less 11:19M)
    /*  */"acsg11V19lgdsdn": "\uE3AB",  // 11:19 large diesis down
    /*  */"acsg5V13lgdsup": "\uE3AC",   // 5:13 large diesis up, (5:13L, ~37L, apotome less 5:13M)
    /*  */"acsg5V13lgdsdn": "\uE3AD",   // 5:13 large diesis down
    /*  */"acsgsh23Sdn": "\uE3B0",  // Sharp 23S-down
    /*  */"acsgfl23Sup": "\uE3B1",  // Flat 23S-up
    /*  */"acsgsh49Sdn": "\uE3B2",  // Sharp 49S-down
    /*  */"acsgfl49Sup": "\uE3B3",  // Flat 49S-up
    /*  */"acsgsh7V19Cdn": "\uE3B4",    // Sharp 7:19C-down
    /*  */"acsgfl7V19Cup": "\uE3B5",    // Flat 7:19C-up
    /*  */"acsgsh19Cdn": "\uE3B6",  // Sharp 19C-down
    /*  */"acsgfl19Cup": "\uE3B7",  // Flat 19C-up
    /*  */"acsgsh11V49Cdn": "\uE3B8",   // Sharp 11:49C-down
    /*  */"acsgfl11V49Cup": "\uE3B9",   // Flat 11:49C-up
    /*  */"acsgsh143Cdn": "\uE3BA", // Sharp 143C-down
    /*  */"acsgfl143Cup": "\uE3BB", // Flat 143C-up
    /*  */"acsgsh17Kdn": "\uE3BC",  // Sharp 17k-down
    /*  */"acsgfl17Kup": "\uE3BD",  // Flat 17k-up
    /*  */"acsgsh19Sdn": "\uE3BE",  // Sharp 19s-down
    /*  */"acsgfl19Sup": "\uE3BF",  // Flat 19s-up
    /*  */"acsgsh19Sup": "\uE3C0",  // Sharp 19s-up
    /*  */"acsgfl19Sdn": "\uE3C1",  // Flat 19s-down
    /*  */"acsgsh17Kup": "\uE3C2",  // Sharp 17k-up
    /*  */"acsgfl17Kdn": "\uE3C3",  // Flat 17k-down
    /*  */"acsgsh143Cup": "\uE3C4", // Sharp 143C-up
    /*  */"acsgfl143Cdn": "\uE3C5", // Flat 143C-down
    /*  */"acsgsh11V49Cup": "\uE3C6",   // Sharp 11:49C-up
    /*  */"acsgfl11V49Cdn": "\uE3C7",   // Flat 11:49C-down
    /*  */"acsgsh19Cup": "\uE3C8",  // Sharp 19C-up
    /*  */"acsgfl19Cdn": "\uE3C9",  // Flat 19C-down
    /*  */"acsgsh7V19Cup": "\uE3CA",    // Sharp 7:19C-up
    /*  */"acsgfl7V19Cdn": "\uE3CB",    // Flat 7:19C-down
    /*  */"acsgsh49Sup": "\uE3CC",  // Sharp 49S-up
    /*  */"acsgfl49Sdn": "\uE3CD",  // Flat 49S-down
    /*  */"acsgsh23Sup": "\uE3CE",  // Sharp 23S-up
    /*  */"acsgfl23Sdn": "\uE3CF",  // Flat 23S-down
    /*  */"acsgsh5V13Mup": "\uE3D0",    // Sharp 5:13M-up
    /*  */"acsgfl5V13Mdn": "\uE3D1",    // Flat 5:13M-down
    /*  */"acsgsh11V19Mup": "\uE3D2",   // Sharp 11:19M-up
    /*  */"acsgfl11V19Mdn": "\uE3D3",   // Flat 11:19M-down
    /*  */"acsgsh49Mup": "\uE3D4",  // Sharp 49M-up
    /*  */"acsgfl49Mdn": "\uE3D5",  // Flat 49M-down
    /*  */"acsgsh5V49Mup": "\uE3D6",    // Sharp 5:49M-up, (one and a half apotomes)
    /*  */"acsgfl5V49Mdn": "\uE3D7",    // Flat 5:49M-down
    /*  */"acsgsh49Lup": "\uE3D8",  // Sharp 49L-up
    /*  */"acsgfl49Ldn": "\uE3D9",  // Flat 49L-down
    /*  */"acsgsh11V19Lup": "\uE3DA",   // Sharp 11:19L-up
    /*  */"acsgfl11V19Ldn": "\uE3DB",   // Flat 11:19L-down
    /*  */"acsgsh5V13Lup": "\uE3DC",    // Sharp 5:13L-up
    /*  */"acsgfl5V13Ldn": "\uE3DD",    // Flat 5:13L-down
    /*  */"acsgdbsh23Sdn": "\uE3E0",    // Double sharp 23S-down
    /*  */"acsgdbfl23Sup": "\uE3E1",    // Double flat 23S-up
    /*  */"acsgdbsh49Sdn": "\uE3E2",    // Double sharp 49S-down
    /*  */"acsgdbfl49Sup": "\uE3E3",    // Double flat 49S-up
    /*  */"acsgdbsh7V19Cdn": "\uE3E4",  // Double sharp 7:19C-down
    /*  */"acsgdbfl7V19Cup": "\uE3E5",  // Double flat 7:19C-up
    /*  */"acsgdbsh19Cdn": "\uE3E6",    // Double sharp 19C-down
    /*  */"acsgdbfl19Cup": "\uE3E7",    // Double flat 19C-up
    /*  */"acsgdbsh11V49Cdn": "\uE3E8", // Double sharp 11:49C-down
    /*  */"acsgdbfl11V49Cup": "\uE3E9", // Double flat 11:49C-up
    /*  */"acsgdbsh143Cdn": "\uE3EA",   // Double sharp 143C-down
    /*  */"acsgdbfl143Cup": "\uE3EB",   // Double flat 143C-up
    /*  */"acsgdbsh17Kdn": "\uE3EC",    // Double sharp 17k-down
    /*  */"acsgdbfl17Kup": "\uE3ED",    // Double flat 17k-up
    /*  */"acsgdbsh19Sdn": "\uE3EE",    // Double sharp 19s-down
    /*  */"acsgdbfl19Sup": "\uE3EF",    // Double flat 19s-up
    /*  */"acsgshup": "\uE3F0", // Shaft up, (natural for use with only diacritics up)
    /*  */"acsgshdn": "\uE3F1", // Shaft down, (natural for use with only diacritics down)
    /*  */"acsgac": "\uE3F2",   // Acute, 5 schisma up (5s), 2 cents up
    /*  */"acsggr": "\uE3F3",   // Grave, 5 schisma down, 2 cents down
    /*  */"acsg1mnup": "\uE3F4",    // 1 mina up, 1/(5\u22c57\u22c513)-schismina up, 0.42 cents up
    /*  */"acsg1mndn": "\uE3F5",    // 1 mina down, 1/(5\u22c57\u22c513)-schismina down, 0.42 cents down
    /*  */"acsg2mnup": "\uE3F6",    // 2 minas up, 65/77-schismina up, 0.83 cents up
    /*  */"acsg2mndn": "\uE3F7",    // 2 minas down, 65/77-schismina down, 0.83 cents down
    /*  */"acsg1tnup": "\uE3F8",    // 1 tina up, 7\u00b2\u22c511\u22c519/5-schismina up, 0.17 cents up
    /*  */"acsg1tndn": "\uE3F9",    // 1 tina down, 7\u00b2\u22c511\u22c519/5-schismina down, 0.17 cents down
    /*  */"acsg2tnup": "\uE3FA",    // 2 tinas up, 1/(7\u00b3\u22c517)-schismina up, 0.30 cents up
    /*  */"acsg2tndn": "\uE3FB",    // 2 tinas down, 1/(7\u00b3\u22c517)-schismina down, 0.30 cents down
    /*  */"acsg3tnup": "\uE3FC",    // 3 tinas up, 1 mina up, 1/(5\u22c57\u22c513)-schismina up, 0.42 cents up
    /*  */"acsg3tndn": "\uE3FD",    // 3 tinas down, 1 mina down, 1/(5\u22c57\u22c513)-schismina down, 0.42 cents down
    /*  */"acsg4tnup": "\uE3FE",    // 4 tinas up, 5\u00b2\u22c511\u00b2/7-schismina up, 0.57 cents up
    /*  */"acsg4tndn": "\uE3FF",    // 4 tinas down, 5\u00b2\u22c511\u00b2/7-schismina down, 0.57 cents down
    /*  */"acsg5tnup": "\uE400",    // 5 tinas up, 7\u2074/25-schismina up, 0.72 cents up
    /*  */"acsg5tndn": "\uE401",    // 5 tinas down, 7\u2074/25-schismina down, 0.72 cents down
    /*  */"acsg6tnup": "\uE402",    // 6 tinas up, 2 minas up, 65/77-schismina up, 0.83 cents up
    /*  */"acsg6tndn": "\uE403",    // 6 tinas down, 2 minas down, 65/77-schismina down, 0.83 cents down
    /*  */"acsg7tnup": "\uE404",    // 7 tinas up, 7/(5\u00b2\u22c517)-schismina up, 1.02 cents up
    /*  */"acsg7tndn": "\uE405",    // 7 tinas down, 7/(5\u00b2\u22c517)-schismina down, 1.02 cents down
    /*  */"acsg8tnup": "\uE406",    // 8 tinas up, 11\u22c517/(5\u00b2\u22c57)-schismina up, 1.14 cents up
    /*  */"acsg8tndn": "\uE407",    // 8 tinas down, 11\u22c517/(5\u00b2\u22c57)-schismina down, 1.14 cents down
    /*  */"acsg9tnup": "\uE408",    // 9 tinas up, 1/(7\u00b2\u22c511)-schismina up, 1.26 cents up
    /*  */"acsg9tndn": "\uE409",    // 9 tinas down, 1/(7\u00b2\u22c511)-schismina down, 1.26 cents down
    /*  */"acsgfrtnup": "\uE40A",   // Fractional tina up, 77/(5\u22c537)-schismina up, 0.08 cents up
    /*  */"acsgfrtndn": "\uE40B",   // Fractional tina down, 77/(5\u22c537)-schismina down, 0.08 cents down
    /*  */"acwy1twsh": "\uE420",    // 1/12 tone sharp
    /*  */"acwy2twsh": "\uE421",    // 1/6 tone sharp
    /*  */"acwy3twsh": "\uE422",    // 1/4 tone sharp
    /*  */"acwy4twsh": "\uE423",    // 1/3 tone sharp
    /*  */"acwy5twsh": "\uE424",    // 5/12 tone sharp
    /*  */"acwy6twsh": "\uE425",    // 1/2 tone sharp
    /*  */"acwy7twsh": "\uE426",    // 7/12 tone sharp
    /*  */"acwy8twsh": "\uE427",    // 2/3 tone sharp
    /*  */"acwy9twsh": "\uE428",    // 3/4 tone sharp
    /*  */"acwy10twsh": "\uE429",   // 5/6 tone sharp
    /*  */"acwy11twsh": "\uE42A",   // 11/12 tone sharp
    /*  */"acwy1twfl": "\uE42B",    // 1/12 tone flat
    /*  */"acwy2twfl": "\uE42C",    // 1/6 tone flat
    /*  */"acwy3twfl": "\uE42D",    // 1/4 tone flat
    /*  */"acwy4twfl": "\uE42E",    // 1/3 tone flat
    /*  */"acwy5twfl": "\uE42F",    // 5/12 tone flat
    /*  */"acwy6twfl": "\uE430",    // 1/2 tone flat
    /*  */"acwy7twfl": "\uE431",    // 7/12 tone flat
    /*  */"acwy8twfl": "\uE432",    // 2/3 tone flat
    /*  */"acwy9twfl": "\uE433",    // 3/4 tone flat
    /*  */"acwy10twfl": "\uE434",   // 5/6 tone flat
    /*  */"acwy11twfl": "\uE435",   // 11/12 tone flat
    /*  */"acbymcfl": "\uE440", // B\u00fcy\u00fck m\u00fccenneb (flat)
    /*  */"ackcmcfl": "\uE441", // K\u00fc\u00e7\u00fck m\u00fccenneb (flat)
    /*  */"acbkfl": "\uE442",   // Bakiye (flat)
    /*  */"ackmfl": "\uE443",   // Koma (flat)
    /*  */"ackmsh": "\uE444",   // Koma (sharp)
    /*  */"acbksh": "\uE445",   // Bakiye (sharp)
    /*  */"ackcmcsh": "\uE446", // K\u00fc\u00e7\u00fck m\u00fccenneb (sharp)
    /*  */"acbymcsh": "\uE447", // B\u00fcy\u00fck m\u00fccenneb (sharp)
    /*  */"ac1cmsh": "\uE450",  // 1-comma sharp
    /*  */"ac2cmsh": "\uE451",  // 2-comma sharp
    /*  */"ac3cmsh": "\uE452",  // 3-comma sharp
    /*  */"ac5cmsh": "\uE453",  // 5-comma sharp
    /*  */"ac1cmfl": "\uE454",  // 1-comma flat
    /*  */"ac2cmfl": "\uE455",  // 2-comma flat
    /*  */"ac3cmfl": "\uE456",  // 3-comma flat
    /*  */"ac4cmfl": "\uE457",  // 4-comma flat
    /*  */"ackr": "\uE460", // Koron (quarter tone flat)
    /*  */"acsr": "\uE461", // Sori (quarter tone sharp)
    /*  */"acxnonthtnsh": "\uE470", // One-third-tone sharp (Xenakis)
    /*  */"acxntwthtnsh": "\uE471", // Two-third-tones sharp (Xenakis)
    /*  */"acqrtnshbs": "\uE472",   // Quarter tone sharp (Bussotti)
    /*  */"acshonhrst": "\uE473",   // One or three quarter tones sharp
    /*  */"acthqrtnshbs": "\uE474", // Three quarter tones sharp (Bussotti)
    /*  */"acqrtnshwg": "\uE475",   // Quarter tone sharp with wiggly tail
    /*  */"actvsh": "\uE476",   // Byzantine-style Bu\u0308yu\u0308k mu\u0308cenneb sharp (Tavener)
    /*  */"actvfl": "\uE477",   // Byzantine-style Bakiye flat (Tavener)
    /*  */"acqrtnflpn": "\uE478",   // Quarter tone flat (Penderecki)
    /*  */"accmslup": "\uE479", // Syntonic/Didymus comma (80:81) up (Bosanquet)
    /*  */"accmsldn": "\uE47A", // Syntonic/Didymus comma (80:81) down (Bosanquet)
    /*  */"acwlpl": "\uE47B",   // Wilson plus (5 comma up)
    /*  */"acwlmn": "\uE47C",   // Wilson minus (5 comma down)
    /*  */"aclgdbsh": "\uE47D",  // Large double sharp
    /*  */"acqrtnsh4": "\uE47E",    // Quarter-tone sharp
    /*  */"acqrtnfl4": "\uE47F",    // Quarter-tone flat
    /*  */"acqrtnflflrv": "\uE480", // Filled reversed flat (quarter-tone flat)
    /*  */"acshrv": "\uE481",   // Reversed sharp
    /*  */"acntrv": "\uE482",   // Reversed natural
    /*  */"acdbflrv": "\uE483", // Reversed double flat
    /*  */"acfltr": "\uE484",   // Turned flat
    /*  */"acdbfltr": "\uE485", // Turned double flat
    /*  */"acthqrtnflgr": "\uE486", // Three-quarter-tones flat (Grisey)
    /*  */"acthqrtnfltr": "\uE487", // Three-quarter-tones flat (Tartini)
    /*  */"acqrtnflvnbl": "\uE488", // Quarter-tone flat (van Blankenburg)
    /*  */"acthqrtnflcp": "\uE489", // Three-quarter-tones flat (Couper)
    /*  */"aconthtnshfr": "\uE48A", // One-third-tone sharp (Ferneyhough)
    /*  */"aconthtnflfr": "\uE48B", // One-third-tone flat (Ferneyhough)
    /*  */"actwthtnshfr": "\uE48C", // Two-third-tones sharp (Ferneyhough)
    /*  */"actwthtnflfr": "\uE48D", // Two-third-tones flat (Ferneyhough)
    /*  */"aconqrtnshfr": "\uE48E", // One-quarter-tone sharp (Ferneyhough)
    /*  */"aconqrtnflfr": "\uE48F", // One-quarter-tone flat (Ferneyhough)
    /*  */"aracab": "\uE4A0",   // Accent above
    /*  */"aracbl": "\uE4A1",   // Accent below
    /*  */"arstab": "\uE4A2",   // Staccato above
    /*  */"arstbl": "\uE4A3",   // Staccato below
    /*  */"artnab": "\uE4A4",   // Tenuto above
    /*  */"artnbl": "\uE4A5",   // Tenuto below
    /*  */"arssab": "\uE4A6",   // Staccatissimo above
    /*  */"arssbl": "\uE4A7",   // Staccatissimo below
    /*  */"arsswdab": "\uE4A8", // Staccatissimo wedge above
    /*  */"arsswdbl": "\uE4A9", // Staccatissimo wedge below
    /*  */"arssstab": "\uE4AA", // Staccatissimo stroke above
    /*  */"arssstbl": "\uE4AB", // Staccatissimo stroke below
    /*  */"armrab": "\uE4AC",   // Marcato above
    /*  */"armrbl": "\uE4AD",   // Marcato below
    /*  */"armrstab": "\uE4AE", // Marcato-staccato above
    /*  */"armrstbl": "\uE4AF", // Marcato-staccato below
    /*  */"aracstab": "\uE4B0", // Accent-staccato above
    /*  */"aracstbl": "\uE4B1", // Accent-staccato below
    /*  */"artnstab": "\uE4B2", // Lour\u00e9 (tenuto-staccato) above
    /*  */"artnstbl": "\uE4B3", // Lour\u00e9 (tenuto-staccato) below
    /*  */"artnacab": "\uE4B4", // Tenuto-accent above
    /*  */"artnacbl": "\uE4B5", // Tenuto-accent below
    /*  */"ariab": "\uE4B6",    // Stress above
    /*  */"aribl": "\uE4B7",    // Stress below
    /*  */"arunab": "\uE4B8",   // Unstress above
    /*  */"arunbl": "\uE4B9",   // Unstress below
    /*  */"arlsvbab": "\uE4BA", // Laissez vibrer (l.v.) above
    /*  */"arlsvbbl": "\uE4BB", // Laissez vibrer (l.v.) below
    /*  */"armrtnab": "\uE4BC", // Marcato-tenuto above
    /*  */"armrtnbl": "\uE4BD", // Marcato-tenuto below
    /*  */"frab": "\uE4C0", // Fermata above
    /*  */"frbl": "\uE4C1", // Fermata below
    /*  */"frvrshab": "\uE4C2", // Very short fermata above
    /*  */"frvrshbl": "\uE4C3", // Very short fermata below
    /*  */"frshab": "\uE4C4", // Short fermata above
    /*  */"frshbl": "\uE4C5", // Short fermata below
    /*  */"frlnab": "\uE4C6", // Long fermata above
    /*  */"frlnbl": "\uE4C7", // Long fermata below
    /*  */"frvrlnab": "\uE4C8", // Very long fermata above
    /*  */"frvrlnbl": "\uE4C9", // Very long fermata below
    /*  */"frlnhnab": "\uE4CA", // Long fermata (Henze) above
    /*  */"frlnhnbl": "\uE4CB", // Long fermata (Henze) below
    /*  */"frshhnab": "\uE4CC", // Short fermata (Henze) above
    /*  */"frshhnbl": "\uE4CD", // Short fermata (Henze) below
    /*  */"brmrcm": "\uE4CE", // Breath mark (comma)
    /*  */"brmrtc": "\uE4CF", // Breath mark (tick-like)
    /*  */"brmrup": "\uE4D0", // Breath mark (upbow-like)
    /*  */"cs": "\uE4D1", // Caesura
    /*  */"csth": "\uE4D2", // Thick caesura
    /*  */"cssh": "\uE4D3", // Short caesura
    /*  */"cscr": "\uE4D4", // Curved caesura
    /*  */"brmrsl": "\uE4D5", // Breath mark (Salzedo)
    /*  */"crsg": "\uE4D6", // Curlew (Britten)
    /*  */"cssnst": "\uE4D7", // Single stroke caesura
    /*  */"rsmx": "\uE4E0", // Maxima rest
    /*  */"rsln": "\uE4E1", // Longa rest
    /*  */"rsdbwh": "\uE4E2", // Double whole (breve) rest
    /*  */"rswh": "\uE4E3", // Whole (semibreve) rest
    /*  */"rshf": "\uE4E4", // Half (minim) rest
    /*  */"rsqr": "\uE4E5", // Quarter (crotchet) rest
    /*  */"rs8": "\uE4E6", // Eighth (quaver) rest
    /*  */"rs16": "\uE4E7", // 16th (semiquaver) rest
    /*  */"rs32": "\uE4E8", // 32nd (demisemiquaver) rest
    /*  */"rs64": "\uE4E9", // 64th (hemidemisemiquaver) rest
    /*  */"rs128": "\uE4EA", // 128th (semihemidemisemiquaver) rest
    /*  */"rs256": "\uE4EB", // 256th rest
    /*  */"rs512": "\uE4EC", // 512th rest
    /*  */"rs1024": "\uE4ED", // 1024th rest
    /*  */"rsHbr": "\uE4EE", // Multiple measure rest
    /*  */"rsHbrlf": "\uE4EF", // H-bar, left half
    /*  */"rsHbrmd": "\uE4F0", // H-bar, middle
    /*  */"rsHbrrt": "\uE4F1", // H-bar, right half
    /*  */"rsqrol": "\uE4F2", // Old-style quarter (crotchet) rest
    /*  */"rsdbwhlgln": "\uE4F3", // Double whole rest on leger lines
    /*  */"rswhlgln": "\uE4F4", // Whole rest on leger line
    /*  */"rshflgln": "\uE4F5", // Half rest on leger line
    /*  */"rsqrZ": "\uE4F6", // Z-style quarter (crotchet) rest
    /*  */"rp1br": "\uE500", // Repeat last bar
    /*  */"rp2br": "\uE501", // Repeat last two bars
    /*  */"rp4br": "\uE502", // Repeat last four bars
    /*  */"rpbrupdt": "\uE503", // Repeat bar upper dot
    /*  */"rpbrsl": "\uE504", // Repeat bar slash
    /*  */"rpbrlwdt": "\uE505", // Repeat bar lower dot
    /*  */"ot": "\uE510", // Ottava
    /*  */"otal": "\uE511", // Ottava alta
    /*  */"otbs": "\uE512", // Ottava bassa
    /*  */"otbsba": "\uE513", // Ottava bassa (ba)
    /*  */"qn": "\uE514", // Quindicesima
    /*  */"qnal": "\uE515", // Quindicesima alta
    /*  */"qnbs": "\uE516", // Quindicesima bassa
    /*  */"vn": "\uE517", // Ventiduesima
    /*  */"vnal": "\uE518", // Ventiduesima alta
    /*  */"vnbs": "\uE519", // Ventiduesima bassa
    /*  */"ocprlf": "\uE51A", // Left parenthesis for octave signs
    /*  */"ocprrt": "\uE51B", // Right parenthesis for octave signs
    /*  */"otbsvb": "\uE51C", // Ottava bassa (8vb)
    /*  */"qnbsmb": "\uE51D", // Quindicesima bassa (mb)
    /*  */"vnbsmb": "\uE51E", // Ventiduesima bassa (mb)
    /*  */"ocbs": "\uE51F", // Bassa
    /*  */"dypn": "\uE520", // Piano
    /*  */"dymz": "\uE521", // Mezzo
    /*  */"dyfr": "\uE522", // Forte
    /*  */"dyrn": "\uE523", // Rinforzando
    /*  */"dysf": "\uE524", // Sforzando
    /*  */"dyZ": "\uE525", // Z
    /*  */"dynn": "\uE526", // Niente
    /*  */"dyPPPPPP": "\uE527", // pppppp
    /*  */"dyPPPPP": "\uE528", // ppppp
    /*  */"dyPPPP": "\uE529", // pppp
    /*  */"dyPPP": "\uE52A", // ppp
    /*  */"dyPP": "\uE52B", // pp
    /*  */"dyMP": "\uE52C", // mp
    /*  */"dyMF": "\uE52D", // mf
    /*  */"dyPF": "\uE52E", // pf
    /*  */"dyFF": "\uE52F", // ff
    /*  */"dyFFF": "\uE530", // fff
    /*  */"dyFFFF": "\uE531", // ffff
    /*  */"dyFFFFF": "\uE532", // fffff
    /*  */"dyFFFFFF": "\uE533", // ffffff
    /*  */"dyfrpn": "\uE534", // Forte-piano
    /*  */"dyfz": "\uE535", // Forzando
    /*  */"dysf1": "\uE536", // Sforzando 1
    /*  */"dysfpn": "\uE537", // Sforzando-piano
    /*  */"dysfpp": "\uE538", // Sforzando-pianissimo
    /*  */"dysz": "\uE539", // Sforzato
    /*  */"dyszpn": "\uE53A", // Sforzato-piano
    /*  */"dyszFF": "\uE53B", // Sforzatissimo
    /*  */"dyrn1": "\uE53C", // Rinforzando 1
    /*  */"dyrn2": "\uE53D", // Rinforzando 2
    /*  */"dycrhr": "\uE53E", // Crescendo
    /*  */"dydmhr": "\uE53F", // Diminuendo
    /*  */"dymsdivc": "\uE540", // Messa di voce
    /*  */"dynnfrhr": "\uE541", // Niente (for hairpins)
    /*  */"dyhrprlf": "\uE542", // Left parenthesis (for hairpins)
    /*  */"dyhrprrt": "\uE543", // Right parenthesis (for hairpins)
    /*  */"dyhrbklf": "\uE544", // Left bracket (for hairpins)
    /*  */"dyhrbkrt": "\uE545", // Right bracket (for hairpins)
    /*  */"dycmspcl": "\uE546", // Colon separator for combined dynamics
    /*  */"dycmsphy": "\uE547", // Hyphen separator for combined dynamics
    /*  */"dycmspsp": "\uE548", // Space separator for combined dynamics
    /*  */"dycmspsl": "\uE549", // Slash separator for combined dynamics
    /*  */"lyelnr": "\uE550", // Narrow elision
    /*  */"lyel": "\uE551", // Elision
    /*  */"lyelwd": "\uE552", // Wide elision
    /*  */"lyhybs": "\uE553", // Baseline hyphen
    /*  */"lyhybsnnbr": "\uE554", // Non-breaking baseline hyphen
    /*  */"lytxrp": "\uE555", // Text repeats
    /*  */"grntacsmup": "\uE560", // Slashed grace note stem up
    /*  */"grntacsmdn": "\uE561", // Slashed grace note stem down
    /*  */"grntapsmup": "\uE562", // Grace note stem up
    /*  */"grntapsmdn": "\uE563", // Grace note stem down
    /*  */"grntslsmup": "\uE564", // Slash for stem up grace note
    /*  */"grntslsmdn": "\uE565", // Slash for stem down grace note
    /*  */"ortr": "\uE566", // Trill
    /*  */"ortn": "\uE567", // Turn
    /*  */"ortnin": "\uE568", // Inverted turn
    /*  */"ortnsl": "\uE569", // Turn with slash
    /*  */"ortnup": "\uE56A", // Turn up
    /*  */"ortnupS": "\uE56B", // Inverted turn up
    /*  */"orshtr": "\uE56C", // Short trill
    /*  */"ormr": "\uE56D", // Mordent
    /*  */"ortm": "\uE56E", // Tremblement
    /*  */"orhy": "\uE56F", // Haydn ornament
    /*  */"orprdevxV": "\uE570", // Port de voix
    /*  */"orrtfchfcr": "\uE571", // Right-facing half circle
    /*  */"orlffchfcr": "\uE572", // Left-facing half circle
    /*  */"orrtfchk": "\uE573", // Right-facing hook
    /*  */"orlffchk": "\uE574", // Left-facing hook
    /*  */"orhkbfnt": "\uE575", // Hook before note
    /*  */"orhkafnt": "\uE576", // Hook after note
    /*  */"orupcr": "\uE577", // Curve above
    /*  */"ordncr": "\uE578", // Curve below
    /*  */"orshoblnbfnt": "\uE579", // Short oblique straight line SW-NE
    /*  */"orshoblnafnt": "\uE57A", // Short oblique straight line NW-SE
    /*  */"oroblnbfnt": "\uE57B", // Oblique straight line SW-NE
    /*  */"oroblnafnt": "\uE57C", // Oblique straight line NW-SE
    /*  */"ordboblnbfnt": "\uE57D", // Double oblique straight lines SW-NE
    /*  */"ordboblnafnt": "\uE57E", // Double oblique straight lines NW-SE
    /*  */"oroblnhrbfnt": "\uE57F", // Oblique straight line tilted SW-NE
    /*  */"oroblnhrafnt": "\uE580", // Oblique straight line tilted NW-SE
    /*  */"orcm": "\uE581", // Comma
    /*  */"orsh3": "\uE582", // Shake
    /*  */"orvrln": "\uE583", // Vertical line
    /*  */"orshmf1": "\uE584", // Shake (Muffat)
    /*  */"glup": "\uE585", // Glissando up
    /*  */"gldn": "\uE586", // Glissando down
    /*  */"orsc": "\uE587", // Schleifer (long mordent)
    /*  */"orpncp": "\uE588", // Pinc\u00e9 (Couperin)
    /*  */"ortmcp": "\uE589", // Tremblement appuy\u00e9 (Couperin)
    /*  */"ortplfccst": "\uE590", // Ornament top left concave stroke
    /*  */"ortplfcvst": "\uE591", // Ornament top left convex stroke
    /*  */"orhglfccst": "\uE592", // Ornament high left concave stroke
    /*  */"orhglfcvst": "\uE593", // Ornament high left convex stroke
    /*  */"orlfvrst": "\uE594", // Ornament left vertical stroke
    /*  */"orlfvrstwtcr": "\uE595", // Ornament left vertical stroke with cross (+)
    /*  */"orlfshT": "\uE596", // Ornament left shake t
    /*  */"orlfpl": "\uE597", // Ornament left +
    /*  */"orlwlfccst": "\uE598", // Ornament low left concave stroke
    /*  */"orlwlfcvst": "\uE599", // Ornament low left convex stroke
    /*  */"orbtlfccst": "\uE59A", // Ornament bottom left concave stroke
    /*  */"orbtlfccstlg": "\uE59B", // Ornament bottom left concave stroke, large
    /*  */"orbtlfcvst": "\uE59C", // Ornament bottom left convex stroke
    /*  */"orzgzglnnorten": "\uE59D", // Ornament zig-zag line without right-hand end
    /*  */"orzgzglnwtrten": "\uE59E", // Ornament zig-zag line with right-hand end
    /*  */"ormdvrst": "\uE59F", // Ornament middle vertical stroke
    /*  */"ortprtccst": "\uE5A0", // Ornament top right concave stroke
    /*  */"ortprtcvst": "\uE5A1", // Ornament top right convex stroke
    /*  */"orhgrtccst": "\uE5A2", // Ornament high right concave stroke
    /*  */"orhgrtcvst": "\uE5A3", // Ornament high right convex stroke
    /*  */"orrtvrst": "\uE5A4", // Ornament right vertical stroke
    /*  */"orlwrtccst": "\uE5A5", // Ornament low right concave stroke
    /*  */"orlwrtcvst": "\uE5A6", // Ornament low right convex stroke
    /*  */"orbtrtccst": "\uE5A7", // Ornament bottom right concave stroke
    /*  */"orbtrtcvst": "\uE5A8", // Ornament bottom right convex stroke
    /*  */"orprsl": "\uE5B0", // Slide
    /*  */"orprdssl": "\uE5B1", // Descending slide
    /*  */"orpraptr": "\uE5B2", // Supported appoggiatura trill
    /*  */"orpraptrsf": "\uE5B3", // Supported appoggiatura trill with two-note suffix
    /*  */"orprtntrDan": "\uE5B4", // Turn-trill (D'Anglebert)
    /*  */"orprsltrDan": "\uE5B5", // Slide-trill (D'Anglebert)
    /*  */"orprsltrmr": "\uE5B6", // Slide-trill with one-note suffix (Marpurg)
    /*  */"orprtntrbc": "\uE5B7", // Turn-trill with two-note suffix (J.S. Bach)
    /*  */"orprsltrbc": "\uE5B8", // Slide-trill with two-note suffix (J.S. Bach)
    /*  */"orprsltrmf": "\uE5B9", // Slide-trill (Muffat)
    /*  */"orprsltrsfmf": "\uE5BA", // Slide-trill with two-note suffix (Muffat)
    /*  */"orprtrsfdn": "\uE5BB", // Trill with two-note suffix (Dandrieu)
    /*  */"orprprdevxmr": "\uE5BC", // Pre-beat port de voix followed by multiple mordent (Dandrieu)
    /*  */"orprtrwtmr": "\uE5BD", // Trill with mordent
    /*  */"orprcd": "\uE5BE", // Cadence
    /*  */"orprcdwttn": "\uE5BF", // Cadence with turn
    /*  */"orprdbcdlwpr": "\uE5C0", // Double cadence with lower prefix
    /*  */"orprcduppr": "\uE5C1", // Cadence with upper prefix
    /*  */"orprcdupprtn": "\uE5C2", // Cadence with upper prefix and turn
    /*  */"orprdbcduppr": "\uE5C3", // Double cadence with upper prefix
    /*  */"orprdbcdupprtn": "\uE5C4", // Double cadence with upper prefix and turn
    /*  */"orprmrrl": "\uE5C5", // Mordent with release
    /*  */"orprmruppr": "\uE5C6", // Mordent with upper prefix
    /*  */"orprinmruppr": "\uE5C7", // Inverted mordent with upper prefix
    /*  */"orprtrlwsf": "\uE5C8", // Trill with lower suffix
    /*  */"brsc": "\uE5D0", // Scoop
    /*  */"brlfsh": "\uE5D1", // Lift, short
    /*  */"brlfmd": "\uE5D2", // Lift, medium
    /*  */"brlfln": "\uE5D3", // Lift, long
    /*  */"brdtsh": "\uE5D4", // Doit, short
    /*  */"brdtmd": "\uE5D5", // Doit, medium
    /*  */"brdtln": "\uE5D6", // Doit, long
    /*  */"brfllpsh": "\uE5D7", // Lip fall, short
    /*  */"brfllpmd": "\uE5D8", // Lip fall, medium
    /*  */"brfllpln": "\uE5D9", // Lip fall, long
    /*  */"brflsmsh": "\uE5DA", // Smooth fall, short
    /*  */"brflsmmd": "\uE5DB", // Smooth fall, medium
    /*  */"brflsmln": "\uE5DC", // Smooth fall, long
    /*  */"brflrgsh": "\uE5DD", // Rough fall, short
    /*  */"brflrgmd": "\uE5DE", // Rough fall, medium
    /*  */"brflrgln": "\uE5DF", // Rough fall, long
    /*  */"brpl": "\uE5E0", // Plop
    /*  */"brfl": "\uE5E1", // Flip
    /*  */"brsm": "\uE5E2", // Smear
    /*  */"brbn": "\uE5E3", // Bend
    /*  */"brjztn": "\uE5E4", // Jazz turn
    /*  */"brmtcl": "\uE5E5", // Muted (closed)
    /*  */"brmthfcl": "\uE5E6", // Half-muted (half-closed)
    /*  */"brmtop": "\uE5E7", // Open
    /*  */"brhrmtcl": "\uE5E8", // Harmon mute, stem in
    /*  */"brhrmtsmhflf": "\uE5E9", // Harmon mute, stem extended, left
    /*  */"brhrmtsmhfrt": "\uE5EA", // Harmon mute, stem extended, right
    /*  */"brhrmtsmop": "\uE5EB", // Harmon mute, stem out
    /*  */"brlfsmsh": "\uE5EC", // Smooth lift, short
    /*  */"brlfsmmd": "\uE5ED", // Smooth lift, medium
    /*  */"brlfsmln": "\uE5EE", // Smooth lift, long
    /*  */"brvltr": "\uE5EF", // Valve trill
    /*  */"dbtnab": "\uE5F0", // Double-tongue above
    /*  */"dbtnbl": "\uE5F1", // Double-tongue below
    /*  */"trtnab": "\uE5F2", // Triple-tongue above
    /*  */"trtnbl": "\uE5F3", // Triple-tongue below
    /*  */"wnclhl": "\uE5F4", // Closed hole
    /*  */"wnthqrclhl": "\uE5F5", // Three-quarters closed hole
    /*  */"wnhfclhl1": "\uE5F6", // Half-closed hole
    /*  */"wnhfclhl2": "\uE5F7", // Half-closed hole 2
    /*  */"wnhfclhl3": "\uE5F8", // Half-open hole
    /*  */"wnophl": "\uE5F9", // Open hole
    /*  */"wntrky": "\uE5FA", // Trill key
    /*  */"wnflem": "\uE5FB", // Flatter embouchure
    /*  */"wnshem": "\uE5FC", // Sharper embouchure
    /*  */"wnrlem": "\uE5FD", // Relaxed embouchure
    /*  */"wnlsrlem": "\uE5FE", // Somewhat relaxed embouchure
    /*  */"wnttem": "\uE5FF", // Tight embouchure
    /*  */"wnlsttem": "\uE600", // Somewhat tight embouchure
    /*  */"wnvrttem": "\uE601", // Very tight embouchure
    /*  */"wnwkarpr": "\uE602", // Very relaxed embouchure / weak air-pressure
    /*  */"wnstarpr": "\uE603", // Very tight embouchure / strong air pressure
    /*  */"wnrdpsnr": "\uE604", // Normal reed position
    /*  */"wnrdpsot": "\uE605", // Very little reed (pull outwards)
    /*  */"wnrdpsin": "\uE606", // Much more reed (push inwards)
    /*  */"wnmlblsm": "\uE607", // Combining multiphonics (black) for stem
    /*  */"wnmlwtsm": "\uE608", // Combining multiphonics (white) for stem
    /*  */"wnmlblwtsm": "\uE609", // Combining multiphonics (black and white) for stem
    /*  */"wnmtpp": "\uE60A", // Mouthpiece or hand pop
    /*  */"wnrmon": "\uE60B", // Rim only
    /*  */"srdnbw": "\uE610", // Down bow
    /*  */"srdnbwtr": "\uE611", // Turned down bow
    /*  */"srupbw": "\uE612", // Up bow
    /*  */"srupbwtr": "\uE613", // Turned up bow
    /*  */"srhr": "\uE614", // Harmonic
    /*  */"srhfhr": "\uE615", // Half-harmonic
    /*  */"srmton": "\uE616", // Mute on
    /*  */"srmtof": "\uE617", // Mute off
    /*  */"srbwbhbr": "\uE618", // Bow behind bridge (sul ponticello)
    /*  */"srbwonbr": "\uE619", // Bow on top of bridge
    /*  */"srbwontl": "\uE61A", // Bow on tailpiece
    /*  */"srovdnbw": "\uE61B", // Overpressure, down bow
    /*  */"srovupbw": "\uE61C", // Overpressure, up bow
    /*  */"srovpsdnbw": "\uE61D", // Overpressure possibile, down bow
    /*  */"srovpsupbw": "\uE61E", // Overpressure possibile, up bow
    /*  */"srovnodr": "\uE61F", // Overpressure, no bow direction
    /*  */"srjtab": "\uE620", // Jet\u00e9 (gettato) above
    /*  */"srjtbl": "\uE621", // Jet\u00e9 (gettato) below
    /*  */"srft": "\uE622", // Fouett\u00e9
    /*  */"srvbpl": "\uE623", // Vibrato pulse accent (Saunders) for stem
    /*  */"srtmps": "\uE624", // Thumb position
    /*  */"srtmpstr": "\uE625", // Turned thumb position
    /*  */"srchbwdr": "\uE626", // Change bow direction, indeterminate
    /*  */"srbwbhbronst": "\uE627", // Bow behind bridge on one string
    /*  */"srbwbhbrtwsr": "\uE628", // Bow behind bridge on two strings
    /*  */"srbwbhbrthsr": "\uE629", // Bow behind bridge on three strings
    /*  */"srbwbhbrfrsr": "\uE62A", // Bow behind bridge on four strings
    /*  */"plsnpzbl": "\uE630", // Snap pizzicato below
    /*  */"plsnpzab": "\uE631", // Snap pizzicato above
    /*  */"plbzpz": "\uE632", // Buzz pizzicato
    /*  */"pllfhnpz": "\uE633", // Left-hand pizzicato
    /*  */"arup": "\uE634", // Arpeggiato up
    /*  */"ardn": "\uE635", // Arpeggiato down
    /*  */"plwtfn": "\uE636", // With fingernails
    /*  */"plfnfl": "\uE637", // Fingernail flick
    /*  */"pldm": "\uE638", // Damp
    /*  */"pldmal": "\uE639", // Damp all
    /*  */"plpl": "\uE63A", // Plectrum
    /*  */"pldmonsm": "\uE63B", // Damp for stem
    /*  */"ar": "\uE63C", // Arpeggiato
    /*  */"vcmtcl": "\uE640", // Mouth closed
    /*  */"vcmtslop": "\uE641", // Mouth slightly open
    /*  */"vcmtop": "\uE642", // Mouth open
    /*  */"vcmtwdop": "\uE643", // Mouth wide open
    /*  */"vcmtpr": "\uE644", // Mouth pursed
    /*  */"vcsp": "\uE645", // Sprechgesang
    /*  */"vcss": "\uE646", // Combining sussurando for stem
    /*  */"vcnsvc": "\uE647", // Nasal voice
    /*  */"vctnclsh": "\uE648", // Tongue click (Stockhausen)
    /*  */"vcficlsh": "\uE649", // Finger click (Stockhausen)
    /*  */"vctnficlsh": "\uE64A", // Tongue and finger click (Stockhausen)
    /*  */"vchlgs": "\uE64B", // Halb gesungen (semi-sprechgesang)
    /*  */"kbpdpd": "\uE650", // Pedal mark
    /*  */"kbpdP": "\uE651", // Pedal P
    /*  */"kbpdE": "\uE652", // Pedal e
    /*  */"kbpdD": "\uE653", // Pedal d
    /*  */"kbpddt": "\uE654", // Pedal dot
    /*  */"kbpdup": "\uE655", // Pedal up mark
    /*  */"kbpdhf": "\uE656", // Half-pedal mark
    /*  */"kbpdupnt": "\uE657", // Pedal up notch
    /*  */"kbpdhy": "\uE658", // Pedal hyphen
    /*  */"kbpdss": "\uE659", // Sostenuto pedal mark
    /*  */"kbpdS": "\uE65A", // Pedal S
    /*  */"kbpdhf2": "\uE65B", // Half pedal mark 1
    /*  */"kbpdhf3": "\uE65C", // Half pedal mark 2
    /*  */"kbpdupsp": "\uE65D", // Pedal up special
    /*  */"kblfpdpc": "\uE65E", // Left pedal pictogram
    /*  */"kbmdpdpc": "\uE65F", // Middle pedal pictogram
    /*  */"kbrtpdpc": "\uE660", // Right pedal pictogram
    /*  */"kbpdhl1": "\uE661", // Pedal heel 1
    /*  */"kbpdhl2": "\uE662", // Pedal heel 2
    /*  */"kbpdhl3": "\uE663", // Pedal heel 3 (Davis)
    /*  */"kbpdto1": "\uE664", // Pedal toe 1
    /*  */"kbpdto2": "\uE665", // Pedal toe 2
    /*  */"kbpdhlto": "\uE666", // Pedal heel or toe
    /*  */"kbplin": "\uE667", // Pluck strings inside piano (Maderna)
    /*  */"kbbb2dsab": "\uE668", // Clavichord bebung, 2 finger movements (above)
    /*  */"kbbb2dsbl": "\uE669", // Clavichord bebung, 2 finger movements (below)
    /*  */"kbbb3dsab": "\uE66A", // Clavichord bebung, 3 finger movements (above)
    /*  */"kbbb3dsbl": "\uE66B", // Clavichord bebung, 3 finger movements (below)
    /*  */"kbbb4dsab": "\uE66C", // Clavichord bebung, 4 finger movements (above)
    /*  */"kbbb4dsbl": "\uE66D", // Clavichord bebung, 4 finger movements (below)
    /*  */"kbplwtRH": "\uE66E", // Play with right hand
    /*  */"kbplwtRHen": "\uE66F", // Play with right hand (end)
    /*  */"kbplwtLH": "\uE670", // Play with left hand
    /*  */"kbplwtLHen": "\uE671", // Play with left hand (end)
    /*  */"kbpdhkst": "\uE672", // Pedal hook start
    /*  */"kbpdhken": "\uE673", // Pedal hook end
    /*  */"kbpdhltoto": "\uE674", // Pedal heel to toe
    /*  */"kbpdtotohl": "\uE675", // Pedal toe to heel
    /*  */"kbpdprlf": "\uE676", // Left parenthesis for pedal marking
    /*  */"kbpdprrt": "\uE677", // Right parenthesis for pedal marking
    /*  */"hppdrs": "\uE680", // Harp pedal raised (flat)
    /*  */"hppdcn": "\uE681", // Harp pedal centered (natural)
    /*  */"hppdlw": "\uE682", // Harp pedal lowered (sharp)
    /*  */"hppddv": "\uE683", // Harp pedal divider
    /*  */"hpslslwtsp": "\uE684", // Slide with suppleness (Salzedo)
    /*  */"hpslobfl": "\uE685", // Oboic flux (Salzedo)
    /*  */"hpslthef": "\uE686", // Thunder effect (Salzedo)
    /*  */"hpslwhsn": "\uE687", // Whistling sounds (Salzedo)
    /*  */"hpslmtsn": "\uE688", // Metallic sounds (Salzedo)
    /*  */"hpsltatasn": "\uE689", // Tam-tam sounds (Salzedo)
    /*  */"hpslplupen": "\uE68A", // Play at upper end of strings (Salzedo)
    /*  */"hpsltmsn": "\uE68B", // Timpanic sounds (Salzedo)
    /*  */"hpslmftt": "\uE68C", // Muffle totally (Salzedo)
    /*  */"hpslflsnlf": "\uE68D", // Fluidic sounds, left hand (Salzedo)
    /*  */"hpslflsnrt": "\uE68E", // Fluidic sounds, right hand (Salzedo)
    /*  */"hpmtrd": "\uE68F", // Metal rod pictogram
    /*  */"hptnky": "\uE690", // Tuning key pictogram
    /*  */"hptnkyhn": "\uE691", // Use handle of tuning key pictogram
    /*  */"hptnkysh": "\uE692", // Use shank of tuning key pictogram
    /*  */"hptnkygl": "\uE693", // Retune strings for glissando
    /*  */"hpstnssm": "\uE694", // Combining string noise for stem
    /*  */"hpslalas": "\uE695", // Ascending aeolian chords (Salzedo)
    /*  */"hpslalds": "\uE696", // Descending aeolian chords (Salzedo)
    /*  */"hpsldmlwsr": "\uE697", // Damp only low strings (Salzedo)
    /*  */"hpsldmbthn": "\uE698", // Damp with both hands (Salzedo)
    /*  */"hpsldmbl": "\uE699", // Damp below (Salzedo)
    /*  */"hpsldmab": "\uE69A", // Damp above (Salzedo)
    /*  */"hpslmtsnonst": "\uE69B", // Metallic sounds, one string (Salzedo)
    /*  */"hpslissn": "\uE69C", // Isolated sounds (Salzedo)
    /*  */"hpslsndr": "\uE69D", // Snare drum effect (Salzedo)
    /*  */"pcgl": "\uE6A0", // Glockenspiel
    /*  */"pcxy": "\uE6A1", // Xylophone
    /*  */"pcxytn": "\uE6A2", // Tenor xylophone
    /*  */"pcxybs": "\uE6A3", // Bass xylophone
    /*  */"pcxytr": "\uE6A4", // Trough xylophone
    /*  */"pcxytntr": "\uE6A5", // Trough tenor xylophone
    /*  */"pcmr": "\uE6A6", // Marimba
    /*  */"pcvb": "\uE6A7", // Vibraphone
    /*  */"pcvbmtof": "\uE6A8", // Metallophone (vibraphone motor off)
    /*  */"pcemtr": "\uE6A9", // Empty trapezoid
    /*  */"pcglsmbr": "\uE6AA", // Glockenspiel (Smith Brindle)
    /*  */"pcxysmbr": "\uE6AB", // Xylophone (Smith Brindle)
    /*  */"pcmrsmbr": "\uE6AC", // Marimba (Smith Brindle)
    /*  */"pcvbsmbr": "\uE6AD", // Vibraphone (Smith Brindle)
    /*  */"pccr": "\uE6AE", // Crotales
    /*  */"pcstdr": "\uE6AF", // Steel drums
    /*  */"pcce": "\uE6B0", // Celesta
    /*  */"pclt": "\uE6B1", // Lithophone
    /*  */"pctp": "\uE6B2", // Tubaphone
    /*  */"pctbbl": "\uE6C0", // Tubular bells
    /*  */"pcwnchgl": "\uE6C1", // Wind chimes (glass)
    /*  */"pcch": "\uE6C2", // Chimes
    /*  */"pcbmch": "\uE6C3", // Bamboo tube chimes
    /*  */"pcshch": "\uE6C4", // Shell chimes
    /*  */"pcgltbch": "\uE6C5", // Glass tube chimes
    /*  */"pcglplch": "\uE6C6", // Glass plate chimes
    /*  */"pcmttbch": "\uE6C7", // Metal tube chimes
    /*  */"pcmtplch": "\uE6C8", // Metal plate chimes
    /*  */"pctm": "\uE6D0", // Timpani
    /*  */"pcsndr": "\uE6D1", // Snare drum
    /*  */"pcsndrsnof": "\uE6D2", // Snare drum, snares off
    /*  */"pcsndrml": "\uE6D3", // Military snare drum
    /*  */"pcbsdr": "\uE6D4", // Bass drum
    /*  */"pcbsdronsd": "\uE6D5", // Bass drum on side
    /*  */"pctndr": "\uE6D6", // Tenor drum
    /*  */"pctoto": "\uE6D7", // Tom-tom
    /*  */"pctotoch": "\uE6D8", // Chinese tom-tom
    /*  */"pctotojp": "\uE6D9", // Japanese tom-tom
    /*  */"pctotoinam": "\uE6DA", // Indo-American tom tom
    /*  */"pctn": "\uE6DB", // Tambourine
    /*  */"pcti": "\uE6DC", // Timbales
    /*  */"pcbn": "\uE6DD", // Bongos
    /*  */"pccg": "\uE6DE", // Conga
    /*  */"pclgdr": "\uE6DF", // Log drum
    /*  */"pcsldr": "\uE6E0", // Slit drum
    /*  */"pcbrdr": "\uE6E1", // Brake drum
    /*  */"pcgbdr": "\uE6E2", // Goblet drum (djembe, dumbek)
    /*  */"pctb": "\uE6E3", // Indian tabla
    /*  */"pccu": "\uE6E4", // Cuica
    /*  */"pcwdbl": "\uE6F0", // Wood block
    /*  */"pctmbl": "\uE6F1", // Temple blocks
    /*  */"pccl": "\uE6F2", // Claves
    /*  */"pcgr": "\uE6F3", // Guiro
    /*  */"pcrt": "\uE6F4", // Ratchet
    /*  */"pcftrt": "\uE6F5", // Football rattle
    /*  */"pcwh": "\uE6F6", // Whip
    /*  */"pcbrcl": "\uE6F7", // Board clapper
    /*  */"pccs": "\uE6F8", // Castanets
    /*  */"pccswthn": "\uE6F9", // Castanets with handle
    /*  */"pcqj": "\uE6FA", // Quijada (jawbone)
    /*  */"pcbmsc": "\uE6FB", // Bamboo scraper
    /*  */"pcrcrc": "\uE6FC", // Reco-reco
    /*  */"pctr": "\uE700", // Triangle
    /*  */"pcan": "\uE701", // Anvil
    /*  */"pcslbl": "\uE710", // Sleigh bell
    /*  */"pccwbl": "\uE711", // Cow bell
    /*  */"pcal": "\uE712", // Almglocken
    /*  */"pcblpl": "\uE713", // Bell plate
    /*  */"pcbl": "\uE714", // Bell
    /*  */"pchn": "\uE715", // Handbell
    /*  */"pccc": "\uE716", // Cencerro
    /*  */"pcag": "\uE717", // Agogo
    /*  */"pcshbl": "\uE718", // Shell bells
    /*  */"pcjnbl": "\uE719", // Jingle bells
    /*  */"pcbltr": "\uE71A", // Bell tree
    /*  */"pccrcy": "\uE720", // Crash cymbals
    /*  */"pcsscy": "\uE721", // Suspended cymbal
    /*  */"pchiht": "\uE722", // Hi-hat
    /*  */"pchihtonst": "\uE723", // Hi-hat cymbals on stand
    /*  */"pcszcy": "\uE724", // Sizzle cymbal
    /*  */"pcvtht": "\uE725", // Vietnamese hat cymbal
    /*  */"pcchcy": "\uE726", // Chinese cymbal
    /*  */"pcficy": "\uE727", // Finger cymbals
    /*  */"pccytn": "\uE728", // Cymbal tongs
    /*  */"pcedofcy": "\uE729", // Edge of cymbal
    /*  */"pcblofcy": "\uE72A", // Bell of cymbal
    /*  */"pctata": "\uE730", // Tam-tam
    /*  */"pctatawtbt": "\uE731", // Tam-tam with beater (Smith Brindle)
    /*  */"pcgn": "\uE732", // Gong
    /*  */"pcgnwtbt": "\uE733", // Gong with button (nipple)
    /*  */"pcslbrongn": "\uE734", // Slide brush on gong
    /*  */"pcfl": "\uE740", // Flexatone
    /*  */"pcma": "\uE741", // Maraca
    /*  */"pcms": "\uE742", // Maracas
    /*  */"pccb": "\uE743", // Cabasa
    /*  */"pcth": "\uE744", // Thundersheet
    /*  */"pcvs": "\uE745", // Vibraslap
    /*  */"pcss": "\uE746", // Sistrum
    /*  */"pcrn": "\uE747", // Rainstick
    /*  */"pcchrt": "\uE748", // Chain rattle
    /*  */"pcslwh": "\uE750", // Slide whistle
    /*  */"pcbrwh": "\uE751", // Bird whistle
    /*  */"pcplwh": "\uE752", // Police whistle
    /*  */"pcsr": "\uE753", // Siren
    /*  */"pcwnmc": "\uE754", // Wind machine
    /*  */"pccrhr": "\uE755", // Car horn
    /*  */"pcklhr": "\uE756", // Klaxon horn
    /*  */"pcdccl": "\uE757", // Duck call
    /*  */"pcwnwh": "\uE758", // Wind whistle (or mouth siren)
    /*  */"pcmg": "\uE759", // Megaphone
    /*  */"pcltfl": "\uE75A", // Lotus flute
    /*  */"pcpssh": "\uE760", // Pistol shot
    /*  */"pccn": "\uE761", // Cannon
    /*  */"pcsnbl": "\uE762", // Sandpaper blocks
    /*  */"pclnrr": "\uE763", // Lion's roar
    /*  */"pcglhp": "\uE764", // Glass harp
    /*  */"pcglhm": "\uE765", // Glass harmonica
    /*  */"pcmssw": "\uE766", // Musical saw
    /*  */"pcjwhp": "\uE767", // Jaw harp
    /*  */"pcbtsfxyup": "\uE770", // Soft xylophone stick up
    /*  */"pcbtsfxydn": "\uE771", // Soft xylophone stick down
    /*  */"pcbtsfxyrt": "\uE772", // Soft xylophone stick right
    /*  */"pcbtsfxylf": "\uE773", // Soft xylophone stick left
    /*  */"pcbtmdxyup": "\uE774", // Medium xylophone stick up
    /*  */"pcbtmdxydn": "\uE775", // Medium xylophone stick down
    /*  */"pcbtmdxyrt": "\uE776", // Medium xylophone stick right
    /*  */"pcbtmdxylf": "\uE777", // Medium xylophone stick left
    /*  */"pcbthrxyup": "\uE778", // Hard xylophone stick up
    /*  */"pcbthrxydn": "\uE779", // Hard xylophone stick down
    /*  */"pcbthrxyrt": "\uE77A", // Hard xylophone stick right
    /*  */"pcbthrxylf": "\uE77B", // Hard xylophone stick left
    /*  */"pcbtwdxyup": "\uE77C", // Wood xylophone stick up
    /*  */"pcbtwdxydn": "\uE77D", // Wood xylophone stick down
    /*  */"pcbtwdxyrt": "\uE77E", // Wood xylophone stick right
    /*  */"pcbtwdxylf": "\uE77F", // Wood xylophone stick left
    /*  */"pcbtsfglup": "\uE780", // Soft glockenspiel stick up
    /*  */"pcbtsfgldn": "\uE781", // Soft glockenspiel stick down
    /*  */"pcbtsfglrt": "\uE782", // Soft glockenspiel stick right
    /*  */"pcbtsfgllf": "\uE783", // Soft glockenspiel stick left
    /*  */"pcbthrglup": "\uE784", // Hard glockenspiel stick up
    /*  */"pcbthrgldn": "\uE785", // Hard glockenspiel stick down
    /*  */"pcbthrglrt": "\uE786", // Hard glockenspiel stick right
    /*  */"pcbthrgllf": "\uE787", // Hard glockenspiel stick left
    /*  */"pcbtsftmup": "\uE788", // Soft timpani stick up
    /*  */"pcbtsftmdn": "\uE789", // Soft timpani stick down
    /*  */"pcbtsftmrt": "\uE78A", // Soft timpani stick right
    /*  */"pcbtsftmlf": "\uE78B", // Soft timpani stick left
    /*  */"pcbtmdtmup": "\uE78C", // Medium timpani stick up
    /*  */"pcbtmdtmdn": "\uE78D", // Medium timpani stick down
    /*  */"pcbtmdtmrt": "\uE78E", // Medium timpani stick right
    /*  */"pcbtmdtmlf": "\uE78F", // Medium timpani stick left
    /*  */"pcbthrtmup": "\uE790", // Hard timpani stick up
    /*  */"pcbthrtmdn": "\uE791", // Hard timpani stick down
    /*  */"pcbthrtmrt": "\uE792", // Hard timpani stick right
    /*  */"pcbthrtmlf": "\uE793", // Hard timpani stick left
    /*  */"pcbtwdtmup": "\uE794", // Wood timpani stick up
    /*  */"pcbtwdtmdn": "\uE795", // Wood timpani stick down
    /*  */"pcbtwdtmrt": "\uE796", // Wood timpani stick right
    /*  */"pcbtwdtmlf": "\uE797", // Wood timpani stick left
    /*  */"pcbtsfbsdrup": "\uE798", // Soft bass drum stick up
    /*  */"pcbtsfbsdrdn": "\uE799", // Soft bass drum stick down
    /*  */"pcbtmdbsdrup": "\uE79A", // Medium bass drum stick up
    /*  */"pcbtmdbsdrdn": "\uE79B", // Medium bass drum stick down
    /*  */"pcbthrbsdrup": "\uE79C", // Hard bass drum stick up
    /*  */"pcbthrbsdrdn": "\uE79D", // Hard bass drum stick down
    /*  */"pcbtmtbsdrup": "\uE79E", // Metal bass drum stick up
    /*  */"pcbtmtbsdrdn": "\uE79F", // Metal bass drum stick down
    /*  */"pcbtdbbsdrup": "\uE7A0", // Double bass drum stick up
    /*  */"pcbtdbbsdrdn": "\uE7A1", // Double bass drum stick down
    /*  */"pcbtsfyrup": "\uE7A2", // Soft yarn beater up
    /*  */"pcbtsfyrdn": "\uE7A3", // Soft yarn beater down
    /*  */"pcbtsfyrrt": "\uE7A4", // Soft yarn beater right
    /*  */"pcbtsfyrlf": "\uE7A5", // Soft yarn beater left
    /*  */"pcbtmdyrup": "\uE7A6", // Medium yarn beater up
    /*  */"pcbtmdyrdn": "\uE7A7", // Medium yarn beater down
    /*  */"pcbtmdyrrt": "\uE7A8", // Medium yarn beater right
    /*  */"pcbtmdyrlf": "\uE7A9", // Medium yarn beater left
    /*  */"pcbthryrup": "\uE7AA", // Hard yarn beater up
    /*  */"pcbthryrdn": "\uE7AB", // Hard yarn beater down
    /*  */"pcbthryrrt": "\uE7AC", // Hard yarn beater right
    /*  */"pcbthryrlf": "\uE7AD", // Hard yarn beater left
    /*  */"pcbtspup": "\uE7AE", // Superball beater up
    /*  */"pcbtspdn": "\uE7AF", // Superball beater down
    /*  */"pcbtsprt": "\uE7B0", // Superball beater right
    /*  */"pcbtsplf": "\uE7B1", // Superball beater left
    /*  */"pcsp": "\uE7B2", // Superball
    /*  */"pcwnhrup": "\uE7B3", // Wound beater, hard core up
    /*  */"pcwnhrdn": "\uE7B4", // Wound beater, hard core down
    /*  */"pcwnhrrt": "\uE7B5", // Wound beater, hard core right
    /*  */"pcwnhrlf": "\uE7B6", // Wound beater, hard core left
    /*  */"pcwnsfup": "\uE7B7", // Wound beater, soft core up
    /*  */"pcwnsfdn": "\uE7B8", // Wound beater, soft core down
    /*  */"pcwnsfrt": "\uE7B9", // Wound beater, soft core right
    /*  */"pcwnsflf": "\uE7BA", // Wound beater, soft core left
    /*  */"pcgmsfup": "\uE7BB", // Soft gum beater, up
    /*  */"pcgmsfdn": "\uE7BC", // Soft gum beater, down
    /*  */"pcgmsfrt": "\uE7BD", // Soft gum beater, right
    /*  */"pcgmsflf": "\uE7BE", // Soft gum beater, left
    /*  */"pcgmmdup": "\uE7BF", // Medium gum beater, up
    /*  */"pcgmmddn": "\uE7C0", // Medium gum beater, down
    /*  */"pcgmmdrt": "\uE7C1", // Medium gum beater, right
    /*  */"pcgmmdlf": "\uE7C2", // Medium gum beater, left
    /*  */"pcgmhrup": "\uE7C3", // Hard gum beater, up
    /*  */"pcgmhrdn": "\uE7C4", // Hard gum beater, down
    /*  */"pcgmhrrt": "\uE7C5", // Hard gum beater, right
    /*  */"pcgmhrlf": "\uE7C6", // Hard gum beater, left
    /*  */"pcbtmtup": "\uE7C7", // Metal beater, up
    /*  */"pcbtmtdn": "\uE7C8", // Metal beater down
    /*  */"pcbtmtrt": "\uE7C9", // Metal beater, right
    /*  */"pcbtmtlf": "\uE7CA", // Metal beater, left
    /*  */"pcbthmwdup": "\uE7CB", // Wooden hammer, up
    /*  */"pcbthmwddn": "\uE7CC", // Wooden hammer, down
    /*  */"pcbthmplup": "\uE7CD", // Plastic hammer, up
    /*  */"pcbthmpldn": "\uE7CE", // Plastic hammer, down
    /*  */"pcbthmmtup": "\uE7CF", // Metal hammer, up
    /*  */"pcbthmmtdn": "\uE7D0", // Metal hammer, down
    /*  */"pcbtsnstup": "\uE7D1", // Snare sticks up
    /*  */"pcbtsnstdn": "\uE7D2", // Snare sticks down
    /*  */"pcbtjzstup": "\uE7D3", // Jazz sticks up
    /*  */"pcbtjzstdn": "\uE7D4", // Jazz sticks down
    /*  */"pcbttrup": "\uE7D5", // Triangle beater up
    /*  */"pcbttrdn": "\uE7D6", // Triangle beater down
    /*  */"pcbtwrbrup": "\uE7D7", // Wire brushes up
    /*  */"pcbtwrbrdn": "\uE7D8", // Wire brushes down
    /*  */"pcbtbrmlup": "\uE7D9", // Brass mallets up
    /*  */"pcbtbrmldn": "\uE7DA", // Brass mallets down
    /*  */"pcbtsfxy": "\uE7DB", // Soft xylophone beaters
    /*  */"pcbtspwdml": "\uE7DC", // Spoon-shaped wooden mallet
    /*  */"pcbtgrsc": "\uE7DD", // Guiro scraper
    /*  */"pcbtbw": "\uE7DE", // Bow
    /*  */"pcbtml": "\uE7DF", // Chime hammer up
    /*  */"pcbtmthm": "\uE7E0", // Metal hammer
    /*  */"pcbthm": "\uE7E1", // Hammer
    /*  */"pcbtknnd": "\uE7E2", // Knitting needle
    /*  */"pcbthn": "\uE7E3", // Hand
    /*  */"pcbtfi": "\uE7E4", // Finger
    /*  */"pcbtfs": "\uE7E5", // Fist
    /*  */"pcbtfn": "\uE7E6", // Fingernails
    /*  */"pcco": "\uE7E7", // Coins
    /*  */"pcdrst": "\uE7E8", // Drum stick
    /*  */"pcbtcmpr": "\uE7E9", // Combining parentheses for round beaters (padded)
    /*  */"pcbtcmdscr": "\uE7EA", // Combining dashed circle for round beaters (plated)
    /*  */"pcbtbx": "\uE7EB", // Box for percussion beater
    /*  */"pcbtmldn": "\uE7EC", // Chime hammer down
    /*  */"pcbtbrmlrt": "\uE7ED", // Brass mallets right
    /*  */"pcbtbrmllf": "\uE7EE", // Brass mallets left
    /*  */"pcbttrpl": "\uE7EF", // Triangle beater plain
    /*  */"pcstsh": "\uE7F0", // Stick shot
    /*  */"pcsccntoed": "\uE7F1", // Scrape from center to edge
    /*  */"pcscedtocn": "\uE7F2", // Scrape from edge to center
    /*  */"pcscarrm": "\uE7F3", // Scrape around rim (counter-clockwise)
    /*  */"pconrm": "\uE7F4", // On rim
    /*  */"pcoprmsh": "\uE7F5", // Closed / rim shot
    /*  */"pchfop1": "\uE7F6", // Half-open
    /*  */"pchfop2": "\uE7F7", // Half-open 2 (Weinberg)
    /*  */"pcop": "\uE7F8", // Open
    /*  */"pcdm1": "\uE7F9", // Damp
    /*  */"pcdm2": "\uE7FA", // Damp 2
    /*  */"pcdm3": "\uE7FB", // Damp 3
    /*  */"pcdm4": "\uE7FC", // Damp 4
    /*  */"pcrmshonsm": "\uE7FD", // Rim shot for stem
    /*  */"pccn1": "\uE7FE", // Center (Weinberg)
    /*  */"pccn2": "\uE7FF", // Center (Ghent)
    /*  */"pccn3": "\uE800", // Center (Caltabiano)
    /*  */"pcrm1": "\uE801", // Rim or edge (Weinberg)
    /*  */"pcrm2": "\uE802", // Rim (Ghent)
    /*  */"pcrm3": "\uE803", // Rim (Caltabiano)
    /*  */"pcnrps": "\uE804", // Normal position (Caltabiano)
    /*  */"pcckcy": "\uE805", // Choke (Weinberg)
    /*  */"pcrthnsq": "\uE806", // Left hand (Agostini)
    /*  */"pclfhncr": "\uE807", // Right hand (Agostini)
    /*  */"pcswsm": "\uE808", // Combining swish for stem
    /*  */"pctnrtsm": "\uE809", // Combining turn right for stem
    /*  */"pctnlfsm": "\uE80A", // Combining turn left for stem
    /*  */"pctnrtlfsm": "\uE80B", // Combining turn left or right for stem
    /*  */"pccrsm": "\uE80C", // Combining crush for stem
    /*  */"pcddntsm": "\uE80D", // Combining X for stem (dead note)
    /*  */"pcscarrmcl": "\uE80E", // Scrape around rim (clockwise)
    /*  */"hnmr": "\uE810", // Martellato
    /*  */"hnmrlf": "\uE811", // Martellato lift
    /*  */"hnhnmr": "\uE812", // Hand martellato
    /*  */"hnmtmr": "\uE813", // Muted martellato
    /*  */"hnmlblss": "\uE814", // Mallet, bell suspended
    /*  */"hnmlblontb": "\uE815", // Mallet, bell on table
    /*  */"hnmllf": "\uE816", // Mallet lift
    /*  */"hnpllf": "\uE817", // Pluck lift
    /*  */"hnswup": "\uE818", // Swing up
    /*  */"hnswdn": "\uE819", // Swing down
    /*  */"hnsw": "\uE81A", // Swing
    /*  */"hnec1": "\uE81B", // Echo
    /*  */"hnec2": "\uE81C", // Echo 2
    /*  */"hngy": "\uE81D", // Gyro
    /*  */"hndm3": "\uE81E", // Damp 3
    /*  */"hnbl": "\uE81F", // Belltree
    /*  */"hntbsnbl": "\uE820", // Table single handbell
    /*  */"hntbprbl": "\uE821", // Table pair of handbells
    /*  */"gtvbbrsc": "\uE830", // Guitar vibrato bar scoop
    /*  */"gtvbbrdp": "\uE831", // Guitar vibrato bar dip
    /*  */"gtsh": "\uE832", // Guitar shake
    /*  */"gtst0": "\uE833", // String number 0
    /*  */"gtst1": "\uE834", // String number 1
    /*  */"gtst2": "\uE835", // String number 2
    /*  */"gtst3": "\uE836", // String number 3
    /*  */"gtst4": "\uE837", // String number 4
    /*  */"gtst5": "\uE838", // String number 5
    /*  */"gtst6": "\uE839", // String number 6
    /*  */"gtst7": "\uE83A", // String number 7
    /*  */"gtst8": "\uE83B", // String number 8
    /*  */"gtst9": "\uE83C", // String number 9
    /*  */"gtoppd": "\uE83D", // Open wah/volume pedal
    /*  */"gthfoppd": "\uE83E", // Half-open wah/volume pedal
    /*  */"gtclpd": "\uE83F", // Closed wah/volume pedal
    /*  */"gtlfhntp": "\uE840", // Left-hand tapping
    /*  */"gtrthntp": "\uE841", // Right-hand tapping
    /*  */"gtgl": "\uE842", // Golpe (tapping the pick guard)
    /*  */"gtfdin": "\uE843", // Fade in
    /*  */"gtfdot": "\uE844", // Fade out
    /*  */"gtvlsw": "\uE845", // Volume swell
    /*  */"gtstup": "\uE846", // Strum direction up
    /*  */"gtstdn": "\uE847", // Strum direction down
    /*  */"gtbrfl": "\uE848", // Full barr\u00e9
    /*  */"gtbrhf": "\uE849", // Half barr\u00e9
    /*  */"gtst10": "\uE84A", // String number 10
    /*  */"gtst11": "\uE84B", // String number 11
    /*  */"gtst12": "\uE84C", // String number 12
    /*  */"gtst13": "\uE84D", // String number 13
    /*  */"fr3st": "\uE850", // 3-string fretboard
    /*  */"fr3stnt": "\uE851", // 3-string fretboard at nut
    /*  */"fr4st": "\uE852", // 4-string fretboard
    /*  */"fr4stnt": "\uE853", // 4-string fretboard at nut
    /*  */"fr5st": "\uE854", // 5-string fretboard
    /*  */"fr5stnt": "\uE855", // 5-string fretboard at nut
    /*  */"fr6st": "\uE856", // 6-string fretboard
    /*  */"fr6stnt": "\uE857", // 6-string fretboard at nut
    /*  */"frflcr": "\uE858", // Fingered fret (filled circle)
    /*  */"frX": "\uE859", // String not played (X)
    /*  */"frO": "\uE85A", // Open string (O)
    /*  */"anhp": "\uE860", // Hauptstimme
    /*  */"annb": "\uE861", // Nebenstimme
    /*  */"anstst": "\uE862", // Start of stimme
    /*  */"anenst": "\uE863", // End of stimme
    /*  */"anth": "\uE864", // Theme
    /*  */"anthrt": "\uE865", // Retrograde of theme
    /*  */"anthrtin": "\uE866", // Retrograde inversion of theme
    /*  */"anthin": "\uE867", // Inversion of theme
    /*  */"anth1": "\uE868", // Theme 1
    /*  */"anin1": "\uE869", // Inversion 1
    /*  */"anch": "\uE86A", // Choralmelodie (Berg)
    /*  */"anhr": "\uE86B", // Hauptrhythmus (Berg)
    /*  */"csdm": "\uE870", // Diminished
    /*  */"cshfdm": "\uE871", // Half-diminished
    /*  */"csag": "\uE872", // Augmented
    /*  */"csmjsv": "\uE873", // Major seventh
    /*  */"csmn": "\uE874", // Minor
    /*  */"csprlftl": "\uE875", // Double-height left parenthesis
    /*  */"csprrttl": "\uE876", // Double-height right parenthesis
    /*  */"csbklftl": "\uE877", // Double-height left bracket
    /*  */"csbkrttl": "\uE878", // Double-height right bracket
    /*  */"csprlfvrtl": "\uE879", // Triple-height left parenthesis
    /*  */"csprrtvrtl": "\uE87A", // Triple-height right parenthesis
    /*  */"csalbssl": "\uE87B", // Slash for altered bass note
    /*  */"csdgarsl": "\uE87C", // Slash for chord symbols arranged diagonally
    /*  */"tp0": "\uE880", // Tuplet 0
    /*  */"tp1": "\uE881", // Tuplet 1
    /*  */"tp2": "\uE882", // Tuplet 2
    /*  */"tp3": "\uE883", // Tuplet 3
    /*  */"tp4": "\uE884", // Tuplet 4
    /*  */"tp5": "\uE885", // Tuplet 5
    /*  */"tp6": "\uE886", // Tuplet 6
    /*  */"tp7": "\uE887", // Tuplet 7
    /*  */"tp8": "\uE888", // Tuplet 8
    /*  */"tp9": "\uE889", // Tuplet 9
    /*  */"tpcl": "\uE88A", // Tuplet colon
    /*  */"cnstbt": "\uE890", // Strong beat or cue
    /*  */"cnlfbt": "\uE891", // Left-hand beat or cue
    /*  */"cnrtbt": "\uE892", // Right-hand beat or cue
    /*  */"cnwkbt": "\uE893", // Weak beat or cue
    /*  */"cnbt2sm": "\uE894", // Beat 2, simple time
    /*  */"cnbt3sm": "\uE895", // Beat 3, simple time
    /*  */"cnbt4sm": "\uE896", // Beat 4, simple time
    /*  */"cnbt2cm": "\uE897", // Beat 2, compound time
    /*  */"cnbt3cm": "\uE898", // Beat 3, compound time
    /*  */"cnbt4cm": "\uE899", // Beat 4, compound time
    /*  */"cnun": "\uE89A", // Unconducted/free passages
    /*  */"acRH3rnpc": "\uE8A0", // Right hand, 3 ranks, 4' stop (piccolo)
    /*  */"acRH3rncl": "\uE8A1", // Right hand, 3 ranks, 8' stop (clarinet)
    /*  */"acRH3rnuptr8": "\uE8A2", // Right hand, 3 ranks, upper tremolo 8' stop
    /*  */"acRH3rnlwtr8": "\uE8A3", // Right hand, 3 ranks, lower tremolo 8' stop
    /*  */"acRH3rnbs": "\uE8A4", // Right hand, 3 ranks, 16' stop (bassoon)
    /*  */"acRH3rnob": "\uE8A5", // Right hand, 3 ranks, 4' stop + 8' stop (oboe)
    /*  */"acRH3rnvl": "\uE8A6", // Right hand, 3 ranks, 8' stop + upper tremolo 8' stop (violin)
    /*  */"acRH3rnimms": "\uE8A7", // Right hand, 3 ranks, 4' stop + 8' stop + upper tremolo 8' stop (imitation musette)
    /*  */"acRH3rnatms": "\uE8A8", // Right hand, 3 ranks, lower tremolo 8' stop + 8' stop + upper tremolo 8' stop (authentic musette)
    /*  */"acRH3rnor": "\uE8A9", // Right hand, 3 ranks, 4' stop + 16' stop (organ)
    /*  */"acRH3rnhr": "\uE8AA", // Right hand, 3 ranks, 4' stop + 8' stop + 16' stop (harmonium)
    /*  */"acRH3rnbn": "\uE8AB", // Right hand, 3 ranks, 8' stop + 16' stop (bandone\u00f3n)
    /*  */"acRH3rnac": "\uE8AC", // Right hand, 3 ranks, 8' stop + upper tremolo 8' stop + 16' stop (accordion)
    /*  */"acRH3rnms": "\uE8AD", // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + upper tremolo 8' stop + 16' stop (master)
    /*  */"acRH3rntwch": "\uE8AE", // Right hand, 3 ranks, lower tremolo 8' stop + upper tremolo 8' stop
    /*  */"acRH3rntrlw8ve": "\uE8AF", // Right hand, 3 ranks, lower tremolo 8' stop + upper tremolo 8' stop + 16' stop
    /*  */"acRH3rntrup8ve": "\uE8B0", // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + upper tremolo 8' stop
    /*  */"acRH3rndbtrlw8ve": "\uE8B1", // Right hand, 3 ranks, lower tremolo 8' stop + 8' stop + upper tremolo 8' stop + 16' stop
    /*  */"acRH3rndbtrup8ve": "\uE8B2", // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + 8' stop + upper tremolo 8' stop
    /*  */"acRH3rnflfc": "\uE8B3", // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + 8' stop + upper tremolo 8' stop + 16' stop
    /*  */"acRH4rnsp": "\uE8B4", // Right hand, 4 ranks, soprano
    /*  */"acRH4rnal": "\uE8B5", // Right hand, 4 ranks, alto
    /*  */"acRH4rntn": "\uE8B6", // Right hand, 4 ranks, tenor
    /*  */"acRH4rnms": "\uE8B7", // Right hand, 4 ranks, master
    /*  */"acRH4rnsfbs": "\uE8B8", // Right hand, 4 ranks, soft bass
    /*  */"acRH4rnsftn": "\uE8B9", // Right hand, 4 ranks, soft tenor
    /*  */"acRH4rnbsal": "\uE8BA", // Right hand, 4 ranks, bass/alto
    /*  */"acLH2rn8rn": "\uE8BB", // Left hand, 2 ranks, 8' stop (round)
    /*  */"acLH2rn16rn": "\uE8BC", // Left hand, 2 ranks, 16' stop (round)
    /*  */"acLH2rn8pl16rn": "\uE8BD", // Left hand, 2 ranks, 8' stop + 16' stop (round)
    /*  */"acLH2rnmsrn": "\uE8BE", // Left hand, 2 ranks, master (round)
    /*  */"acLH2rnmspl16rn": "\uE8BF", // Left hand, 2 ranks, master + 16' stop (round)
    /*  */"acLH2rnflmsrn": "\uE8C0", // Left hand, 2 ranks, full master (round)
    /*  */"acLH3rn8sq": "\uE8C1", // Left hand, 3 ranks, 8' stop (square)
    /*  */"acLH3rn2sq": "\uE8C2", // Left hand, 3 ranks, 2' stop (square)
    /*  */"acLH3rndb8sq": "\uE8C3", // Left hand, 3 ranks, double 8' stop (square)
    /*  */"acLH3rn2pl8sq": "\uE8C4", // Left hand, 3 ranks, 2' stop + 8' stop (square)
    /*  */"acLH3rnttsq": "\uE8C5", // Left hand, 3 ranks, 2' stop + double 8' stop (tutti) (square)
    /*  */"accmRH3rnem": "\uE8C6", // Combining right hand, 3 ranks, empty
    /*  */"accmRH4rnem": "\uE8C7", // Combining right hand, 4 ranks, empty
    /*  */"accmLH2rnem": "\uE8C8", // Combining left hand, 2 ranks, empty
    /*  */"accmLH3rnemsq": "\uE8C9", // Combining left hand, 3 ranks, empty (square)
    /*  */"accmdt": "\uE8CA", // Combining accordion coupler dot
    /*  */"acps": "\uE8CB", // Push
    /*  */"acpl": "\uE8CC", // Pull
    /*  */"acrc2": "\uE8CD", // Ricochet (2 tones)
    /*  */"acrc3": "\uE8CE", // Ricochet (3 tones)
    /*  */"acrc4": "\uE8CF", // Ricochet (4 tones)
    /*  */"acrc5": "\uE8D0", // Ricochet (5 tones)
    /*  */"acrc6": "\uE8D1", // Ricochet (6 tones)
    /*  */"acrcsm2": "\uE8D2", // Combining ricochet for stem (2 tones)
    /*  */"acrcsm3": "\uE8D3", // Combining ricochet for stem (3 tones)
    /*  */"acrcsm4": "\uE8D4", // Combining ricochet for stem (4 tones)
    /*  */"acrcsm5": "\uE8D5", // Combining ricochet for stem (5 tones)
    /*  */"acrcsm6": "\uE8D6", // Combining ricochet for stem (6 tones)
    /*  */"cnbgbm": "\uE8E0", // Begin beam
    /*  */"cnenbm": "\uE8E1", // End beam
    /*  */"cnbgti": "\uE8E2", // Begin tie
    /*  */"cnenti": "\uE8E3", // End tie
    /*  */"cnbgsl": "\uE8E4", // Begin slur
    /*  */"cnensl": "\uE8E5", // End slur
    /*  */"cnbgph": "\uE8E6", // Begin phrase
    /*  */"cnenph": "\uE8E7", // End phrase
    /*  */"chst": "\uE8F0", // Plainchant staff
    /*  */"chstwd": "\uE8F1", // Plainchant staff (wide)
    /*  */"chstnr": "\uE8F2", // Plainchant staff (narrow)
    /*  */"chdvmn": "\uE8F3", // Divisio minima
    /*  */"chdvmr": "\uE8F4", // Divisio maior
    /*  */"chdvmx": "\uE8F5", // Divisio maxima
    /*  */"chdvfn": "\uE8F6", // Divisio finalis
    /*  */"chvr": "\uE8F7", // Virgula
    /*  */"chcs": "\uE8F8", // Caesura
    /*  */"mngc": "\uE900", // Mensural G clef
    /*  */"mngcpt": "\uE901", // Petrucci G clef
    /*  */"chfc": "\uE902", // Plainchant F clef
    /*  */"mnfc": "\uE903", // Mensural F clef
    /*  */"mnfcpt": "\uE904", // Petrucci F clef
    /*  */"mncc": "\uE905", // Mensural C clef
    /*  */"chcc": "\uE906", // Plainchant C clef
    /*  */"mnccptpsls": "\uE907", // Petrucci C clef, lowest position
    /*  */"mnccptpslw": "\uE908", // Petrucci C clef, low position
    /*  */"mnccptpsmd": "\uE909", // Petrucci C clef, middle position
    /*  */"mnccptpshg": "\uE90A", // Petrucci C clef, high position
    /*  */"mnccptpshs": "\uE90B", // Petrucci C clef, highest position
    /*  */"mnpl1": "\uE910", // Tempus perfectum cum prolatione perfecta (9/8)
    /*  */"mnpl2": "\uE911", // Tempus perfectum cum prolatione imperfecta (3/4)
    /*  */"mnpl3": "\uE912", // Tempus perfectum cum prolatione imperfecta diminution 1 (3/8)
    /*  */"mnpl4": "\uE913", // Tempus perfectum cum prolatione perfecta diminution 2 (9/16)
    /*  */"mnpl5": "\uE914", // Tempus imperfectum cum prolatione perfecta (6/8)
    /*  */"mnpl6": "\uE915", // Tempus imperfectum cum prolatione imperfecta (2/4)
    /*  */"mnpl7": "\uE916", // Tempus imperfectum cum prolatione imperfecta diminution 1 (2/2)
    /*  */"mnpl8": "\uE917", // Tempus imperfectum cum prolatione imperfecta diminution 2 (6/16)
    /*  */"mnpl9": "\uE918", // Tempus imperfectum cum prolatione imperfecta diminution 3 (2/2)
    /*  */"mnpl10": "\uE919", // Tempus imperfectum cum prolatione imperfecta diminution 4
    /*  */"mnpl11": "\uE91A", // Tempus imperfectum cum prolatione imperfecta diminution 5
    /*  */"mnpptmpr": "\uE91B", // Tempus perfectum
    /*  */"mnppprdp1": "\uE91C", // Proportio dupla 1
    /*  */"mnppprdp2": "\uE91D", // Proportio dupla 2
    /*  */"mnppprtr": "\uE91E", // Proportio tripla
    /*  */"mnppprqd": "\uE91F", // Proportio quadrupla
    /*  */"mnplcmdt": "\uE920", // Combining dot
    /*  */"mnplcmtwds": "\uE921", // Combining two dots
    /*  */"mnplcmthds": "\uE922", // Combining three dots horizontal
    /*  */"mnplcmthdstr": "\uE923", // Combining three dots triangular
    /*  */"mnplcmdtvd": "\uE924", // Combining void dot
    /*  */"mnplcmst": "\uE925", // Combining vertical stroke
    /*  */"mnpp1": "\uE926", // Mensural proportion 1
    /*  */"mnpp2": "\uE927", // Mensural proportion 2
    /*  */"mnpp3": "\uE928", // Mensural proportion 3
    /*  */"mnpp4": "\uE929", // Mensural proportion 4
    /*  */"mnppmn": "\uE92A", // Mensural proportion minor
    /*  */"mnppmj": "\uE92B", // Mensural proportion major
    /*  */"mnmdprvr": "\uE92C", // Modus perfectum, vertical
    /*  */"mnmdimvr": "\uE92D", // Modus imperfectum, vertical
    /*  */"mntmprhr": "\uE92E", // Tempus perfectum, horizontal
    /*  */"mntmimhr": "\uE92F", // Tempus imperfectum, horizontal
    /*  */"mnnhmxbl": "\uE930", // Maxima notehead, black
    /*  */"mnnhmxvd": "\uE931", // Maxima notehead, void
    /*  */"mnnhmxblvd": "\uE932", // Maxima notehead, black and void
    /*  */"mnnhmxwt": "\uE933", // Maxima notehead, white
    /*  */"mnnhlnbl": "\uE934", // Longa/brevis notehead, black
    /*  */"mnnhlnvd": "\uE935", // Longa/brevis notehead, void
    /*  */"mnnhlnblvd": "\uE936", // Longa/brevis notehead, black and void
    /*  */"mnnhlnwt": "\uE937", // Longa/brevis notehead, white
    /*  */"mnnhsbbl": "\uE938", // Semibrevis notehead, black
    /*  */"mnnhsbvd": "\uE939", // Semibrevis notehead, void
    /*  */"mnnhsbblvd": "\uE93A", // Semibrevis notehead, black and void
    /*  */"mnnhsbblvdtr": "\uE93B", // Semibrevis notehead, black and void (turned)
    /*  */"mnnhmnwt": "\uE93C", // Minima notehead, white
    /*  */"mnnhsmwt": "\uE93D", // Semiminima/fusa notehead, white
    /*  */"mncmsmup": "\uE93E", // Combining stem up
    /*  */"mncmsmdn": "\uE93F", // Combining stem down
    /*  */"mncmsmdg": "\uE940", // Combining stem diagonal
    /*  */"mncmsmupflrt": "\uE941", // Combining stem with flag right up
    /*  */"mncmsmdnflrt": "\uE942", // Combining stem with flag right down
    /*  */"mncmsmupfllf": "\uE943", // Combining stem with flag left up
    /*  */"mncmsmdnfllf": "\uE944", // Combining stem with flag left down
    /*  */"mncmsmupflfl": "\uE945", // Combining stem with flared flag up
    /*  */"mncmsmdnflfl": "\uE946", // Combining stem with flared flag down
    /*  */"mncmsmupflex": "\uE947", // Combining stem with extended flag up
    /*  */"mncmsmdnflex": "\uE948", // Combining stem with extended flag down
    /*  */"mncmsmupflsm": "\uE949", // Combining stem with semiminima flag up
    /*  */"mncmsmdnflsm": "\uE94A", // Combining stem with semiminima flag down
    /*  */"mncmsmupflfs": "\uE94B", // Combining stem with fusa flag up
    /*  */"mncmsmdnflfs": "\uE94C", // Combining stem with fusa flag down
    /*  */"mnblmx": "\uE950", // Black mensural maxima
    /*  */"mnblln": "\uE951", // Black mensural longa
    /*  */"mnblbr": "\uE952", // Black mensural brevis
    /*  */"mnblsb": "\uE953", // Black mensural semibrevis
    /*  */"mnblmn": "\uE954", // Black mensural minima
    /*  */"mnblsm": "\uE955", // Black mensural semiminima
    /*  */"mnblbrvd": "\uE956", // Black mensural void brevis
    /*  */"mnblsbvd": "\uE957", // Black mensural void semibrevis
    /*  */"mnblmnvd": "\uE958", // Black mensural void minima
    /*  */"mnblsbcd": "\uE959", // Black mensural semibrevis caudata
    /*  */"mnbldr": "\uE95A", // Black mensural dragma
    /*  */"mnblsbob": "\uE95B", // Black mensural oblique semibrevis
    /*  */"mnwtmx": "\uE95C", // White mensural maxima
    /*  */"mnwtln": "\uE95D", // White mensural longa
    /*  */"mnwtbr": "\uE95E", // White mensural brevis
    /*  */"mnwtmn": "\uE95F", // White mensural minima
    /*  */"mnwtsm": "\uE960", // White mensural semiminima
    /*  */"mnwtfs": "\uE961", // White mensural fusa
    /*  */"mnwtsb": "\uE962", // White mensural semibrevis
    /*  */"mnobas2bl": "\uE970", // Oblique form, ascending 2nd, black
    /*  */"mnobas2vd": "\uE971", // Oblique form, ascending 2nd, void
    /*  */"mnobas2blvd": "\uE972", // Oblique form, ascending 2nd, black and void
    /*  */"mnobas2wt": "\uE973", // Oblique form, ascending 2nd, white
    /*  */"mnobas3bl": "\uE974", // Oblique form, ascending 3rd, black
    /*  */"mnobas3vd": "\uE975", // Oblique form, ascending 3rd, void
    /*  */"mnobas3blvd": "\uE976", // Oblique form, ascending 3rd, black and void
    /*  */"mnobas3wt": "\uE977", // Oblique form, ascending 3rd, white
    /*  */"mnobas4bl": "\uE978", // Oblique form, ascending 4th, black
    /*  */"mnobas4vd": "\uE979", // Oblique form, ascending 4th, void
    /*  */"mnobas4blvd": "\uE97A", // Oblique form, ascending 4th, black and void
    /*  */"mnobas4wt": "\uE97B", // Oblique form, ascending 4th, white
    /*  */"mnobas5bl": "\uE97C", // Oblique form, ascending 5th, black
    /*  */"mnobas5vd": "\uE97D", // Oblique form, ascending 5th, void
    /*  */"mnobas5blvd": "\uE97E", // Oblique form, ascending 5th, black and void
    /*  */"mnobas5wt": "\uE97F", // Oblique form, ascending 5th, white
    /*  */"mnobds2bl": "\uE980", // Oblique form, descending 2nd, black
    /*  */"mnobds2vd": "\uE981", // Oblique form, descending 2nd, void
    /*  */"mnobds2blvd": "\uE982", // Oblique form, descending 2nd, black and void
    /*  */"mnobds2wt": "\uE983", // Oblique form, descending 2nd, white
    /*  */"mnobds3bl": "\uE984", // Oblique form, descending 3rd, black
    /*  */"mnobds3vd": "\uE985", // Oblique form, descending 3rd, void
    /*  */"mnobds3blvd": "\uE986", // Oblique form, descending 3rd, black and void
    /*  */"mnobds3wt": "\uE987", // Oblique form, descending 3rd, white
    /*  */"mnobds4bl": "\uE988", // Oblique form, descending 4th, black
    /*  */"mnobds4vd": "\uE989", // Oblique form, descending 4th, void
    /*  */"mnobds4blvd": "\uE98A", // Oblique form, descending 4th, black and void
    /*  */"mnobds4wt": "\uE98B", // Oblique form, descending 4th, white
    /*  */"mnobds5bl": "\uE98C", // Oblique form, descending 5th, black
    /*  */"mnobds5vd": "\uE98D", // Oblique form, descending 5th, void
    /*  */"mnobds5blvd": "\uE98E", // Oblique form, descending 5th, black and void
    /*  */"mnobds5wt": "\uE98F", // Oblique form, descending 5th, white
    /*  */"chpn": "\uE990", // Punctum
    /*  */"chpnin": "\uE991", // Punctum inclinatum
    /*  */"chpninac": "\uE992", // Punctum inclinatum auctum
    /*  */"chpnindm": "\uE993", // Punctum inclinatum deminutum
    /*  */"chacas": "\uE994", // Punctum auctum, ascending
    /*  */"chacds": "\uE995", // Punctum auctum, descending
    /*  */"chpnvr": "\uE996", // Punctum virga
    /*  */"chpnvrrv": "\uE997", // Punctum virga, reversed
    /*  */"chpncv": "\uE998", // Punctum cavum
    /*  */"chpnln": "\uE999", // Punctum linea
    /*  */"chpnlncv": "\uE99A", // Punctum linea cavum
    /*  */"chql": "\uE99B", // Quilisma
    /*  */"choras": "\uE99C", // Oriscus ascending
    /*  */"chords": "\uE99D", // Oriscus descending
    /*  */"chorlq": "\uE99E", // Oriscus liquescens
    /*  */"chsp": "\uE99F", // Strophicus
    /*  */"chspac": "\uE9A0", // Strophicus auctus
    /*  */"chpndm": "\uE9A1", // Punctum deminutum
    /*  */"chpdlw": "\uE9B0", // Podatus, lower
    /*  */"chpdup": "\uE9B1", // Podatus, upper
    /*  */"chdmup": "\uE9B2", // Punctum deminutum, upper
    /*  */"chdmlw": "\uE9B3", // Punctum deminutum, lower
    /*  */"chenlnas2": "\uE9B4", // Entry line, ascending 2nd
    /*  */"chenlnas3": "\uE9B5", // Entry line, ascending 3rd
    /*  */"chenlnas4": "\uE9B6", // Entry line, ascending 4th
    /*  */"chenlnas5": "\uE9B7", // Entry line, ascending 5th
    /*  */"chenlnas6": "\uE9B8", // Entry line, ascending 6th
    /*  */"chlgds2": "\uE9B9", // Ligated stroke, descending 2nd
    /*  */"chlgds3": "\uE9BA", // Ligated stroke, descending 3rd
    /*  */"chlgds4": "\uE9BB", // Ligated stroke, descending 4th
    /*  */"chlgds5": "\uE9BC", // Ligated stroke, descending 5th
    /*  */"chcnlnas2": "\uE9BD", // Connecting line, ascending 2nd
    /*  */"chcnlnas3": "\uE9BE", // Connecting line, ascending 3rd
    /*  */"chcnlnas4": "\uE9BF", // Connecting line, ascending 4th
    /*  */"chcnlnas5": "\uE9C0", // Connecting line, ascending 5th
    /*  */"chcnlnas6": "\uE9C1", // Connecting line, ascending 6th
    /*  */"chsplq2": "\uE9C2", // Strophicus liquescens, 2nd
    /*  */"chsplq3": "\uE9C3", // Strophicus liquescens, 3rd
    /*  */"chsplq4": "\uE9C4", // Strophicus liquescens, 4th
    /*  */"chsplq5": "\uE9C5", // Strophicus liquescens, 5th
    /*  */"chicab": "\uE9D0", // Ictus above
    /*  */"chicbl": "\uE9D1", // Ictus below
    /*  */"chcrab": "\uE9D2", // Circulus above
    /*  */"chcrbl": "\uE9D3", // Circulus below
    /*  */"chsmab": "\uE9D4", // Semicirculus above
    /*  */"chsmbl": "\uE9D5", // Semicirculus below
    /*  */"chacab": "\uE9D6", // Accentus above
    /*  */"chacbl": "\uE9D7", // Accentus below
    /*  */"chep": "\uE9D8", // Episema
    /*  */"chag": "\uE9D9", // Augmentum (mora)
    /*  */"mdrnflsfB": "\uE9E0", // Flat, soft b (fa)
    /*  */"mdrnflhrB": "\uE9E1", // Flat, hard b (mi)
    /*  */"mdrnnt": "\uE9E2", // Natural
    /*  */"mdrnshcr": "\uE9E3", // Croix
    /*  */"mdrnflwtdt": "\uE9E4", // Flat with dot
    /*  */"mdrnntwtcr": "\uE9E5", // Natural with interrupted cross
    /*  */"mnrsmx": "\uE9F0", // Maxima rest
    /*  */"mnrslnpr": "\uE9F1", // Longa perfecta rest
    /*  */"mnrslnim": "\uE9F2", // Longa imperfecta rest
    /*  */"mnrsbr": "\uE9F3", // Brevis rest
    /*  */"mnrssb": "\uE9F4", // Semibrevis rest
    /*  */"mnrsmn": "\uE9F5", // Minima rest
    /*  */"mnrssm": "\uE9F6", // Semiminima rest
    /*  */"mnrsfs": "\uE9F7", // Fusa rest
    /*  */"mnrssf": "\uE9F8", // Semifusa rest
    /*  */"mnsgup": "\uEA00", // Signum congruentiae up
    /*  */"mnsgdn": "\uEA01", // Signum congruentiae down
    /*  */"mncsup": "\uEA02", // Mensural custos up
    /*  */"mncsdn": "\uEA03", // Mensural custos down
    /*  */"chcssmuppsls": "\uEA04", // Plainchant custos, stem up, lowest position
    /*  */"chcssmuppslw": "\uEA05", // Plainchant custos, stem up, low position
    /*  */"chcssmuppsmd": "\uEA06", // Plainchant custos, stem up, middle position
    /*  */"chcssmdnpsmd": "\uEA07", // Plainchant custos, stem down, middle position
    /*  */"chcssmdnpshg": "\uEA08", // Plainchant custos, stem down, high position
    /*  */"chcssmdnpshs": "\uEA09", // Plainchant custos, stem down, highest position
    /*  */"mncsch": "\uEA0A", // Checkmark custos
    /*  */"mncstn": "\uEA0B", // Turn-like custos
    /*  */"mnclstsq": "\uEA0C", // Coloration start, square
    /*  */"mnclensq": "\uEA0D", // Coloration end, square
    /*  */"mnclstrn": "\uEA0E", // Coloration start, round
    /*  */"mnclenrn": "\uEA0F", // Coloration end, round
    /*  */"mnalsg": "\uEA10", // Alteration sign
    /*  */"orql": "\uEA20", // Quilisma
    /*  */"oror": "\uEA21", // Oriscus
    /*  */"mdrnlqCMN": "\uEA22", // Liquescence
    /*  */"mdrnplCMN": "\uEA23", // Plica
    /*  */"mdrnGclCMN": "\uEA24", // G clef (Corpus Monodicum)
    /*  */"mdrnpnCMN": "\uEA25", // Punctum (Corpus Monodicum)
    /*  */"mdrnlqasCMN": "\uEA26", // Liquescent ascending (Corpus Monodicum)
    /*  */"mdrnlqdsCMN": "\uEA27", // Liquescent descending (Corpus Monodicum)
    /*  */"mdrnqlCMN": "\uEA28", // Quilisma (Corpus Monodicum)
    /*  */"mdrnspCMN": "\uEA29", // Strophicus (Corpus Monodicum)
    /*  */"mdrnorCMN": "\uEA2A", // Oriscus (Corpus Monodicum)
    /*  */"dsgr1": "\uEA30", // Daseian graves 1
    /*  */"dsgr2": "\uEA31", // Daseian graves 2
    /*  */"dsgr3": "\uEA32", // Daseian graves 3
    /*  */"dsgr4": "\uEA33", // Daseian graves 4
    /*  */"dsfn1": "\uEA34", // Daseian finales 1
    /*  */"dsfn2": "\uEA35", // Daseian finales 2
    /*  */"dsfn3": "\uEA36", // Daseian finales 3
    /*  */"dsfn4": "\uEA37", // Daseian finales 4
    /*  */"dssp1": "\uEA38", // Daseian superiores 1
    /*  */"dssp2": "\uEA39", // Daseian superiores 2
    /*  */"dssp3": "\uEA3A", // Daseian superiores 3
    /*  */"dssp4": "\uEA3B", // Daseian superiores 4
    /*  */"dsex1": "\uEA3C", // Daseian excellentes 1
    /*  */"dsex2": "\uEA3D", // Daseian excellentes 2
    /*  */"dsex3": "\uEA3E", // Daseian excellentes 3
    /*  */"dsex4": "\uEA3F", // Daseian excellentes 4
    /*  */"dsrs1": "\uEA40", // Daseian residua 1
    /*  */"dsrs2": "\uEA41", // Daseian residua 2
    /*  */"fg0": "\uEA50", // Figured bass 0
    /*  */"fg1": "\uEA51", // Figured bass 1
    /*  */"fg2": "\uEA52", // Figured bass 2
    /*  */"fg2rs": "\uEA53", // Figured bass 2 raised by half-step
    /*  */"fg3": "\uEA54", // Figured bass 3
    /*  */"fg4": "\uEA55", // Figured bass 4
    /*  */"fg4rs": "\uEA56", // Figured bass 4 raised by half-step
    /*  */"fg5": "\uEA57", // Figured bass 5
    /*  */"fg5rs1": "\uEA58", // Figured bass 5 raised by half-step
    /*  */"fg5rs2": "\uEA59", // Figured bass 5 raised by half-step 2
    /*  */"fg5rs3": "\uEA5A", // Figured bass diminished 5
    /*  */"fg6": "\uEA5B", // Figured bass 6
    /*  */"fg6rs": "\uEA5C", // Figured bass 6 raised by half-step
    /*  */"fg7": "\uEA5D", // Figured bass 7
    /*  */"fg7rs1": "\uEA5E", // Figured bass 7 raised by half-step
    /*  */"fg7rs2": "\uEA5F", // Figured bass 7 lowered by a half-step
    /*  */"fg8": "\uEA60", // Figured bass 8
    /*  */"fg9": "\uEA61", // Figured bass 9
    /*  */"fg9rs": "\uEA62", // Figured bass 9 raised by half-step
    /*  */"fgdbfl": "\uEA63", // Figured bass double flat
    /*  */"fgfl": "\uEA64", // Figured bass flat
    /*  */"fgnt": "\uEA65", // Figured bass natural
    /*  */"fgsh": "\uEA66", // Figured bass sharp
    /*  */"fgdbsh": "\uEA67", // Figured bass double sharp
    /*  */"fgbklf": "\uEA68", // Figured bass [
    /*  */"fgbkrt": "\uEA69", // Figured bass ]
    /*  */"fgprlf": "\uEA6A", // Figured bass (
    /*  */"fgprrt": "\uEA6B", // Figured bass )
    /*  */"fgpl": "\uEA6C", // Figured bass +
    /*  */"fgcmrs": "\uEA6D", // Combining raise
    /*  */"fgcmlw": "\uEA6E", // Combining lower
    /*  */"fg6rs2": "\uEA6F", // Figured bass 6 raised by half-step 2
    /*  */"fnzr": "\uEA70", // Function theory 0
    /*  */"fnon": "\uEA71", // Function theory 1
    /*  */"fntw": "\uEA72", // Function theory 2
    /*  */"fnth": "\uEA73", // Function theory 3
    /*  */"fnfr": "\uEA74", // Function theory 4
    /*  */"fnfv": "\uEA75", // Function theory 5
    /*  */"fnsx": "\uEA76", // Function theory 6
    /*  */"fnsv": "\uEA77", // Function theory 7
    /*  */"fnet": "\uEA78", // Function theory 8
    /*  */"fnnn": "\uEA79", // Function theory 9
    /*  */"fnlsth": "\uEA7A", // Function theory less than
    /*  */"fnmn": "\uEA7B", // Function theory minus
    /*  */"fngrth": "\uEA7C", // Function theory greater than
    /*  */"fnSSup": "\uEA7D", // Function theory major subdominant of subdominant
    /*  */"fnSSlw": "\uEA7E", // Function theory minor subdominant of subdominant
    /*  */"fnDup": "\uEA7F", // Function theory major dominant
    /*  */"fnDlw": "\uEA80", // Function theory minor dominant
    /*  */"fnDD": "\uEA81", // Function theory dominant of dominant
    /*  */"fnslDD": "\uEA82", // Function theory double dominant seventh
    /*  */"fnGup": "\uEA83", // Function theory G
    /*  */"fnGlw": "\uEA84", // Function theory g
    /*  */"fnNup": "\uEA85", // Function theory N
    /*  */"fnNlw": "\uEA86", // Function theory n
    /*  */"fnPup": "\uEA87", // Function theory P
    /*  */"fnPlw": "\uEA88", // Function theory p
    /*  */"fnSup": "\uEA89", // Function theory major subdominant
    /*  */"fnSlw": "\uEA8A", // Function theory minor subdominant
    /*  */"fnTup": "\uEA8B", // Function theory tonic
    /*  */"fnTlw": "\uEA8C", // Function theory minor tonic
    /*  */"fnVup": "\uEA8D", // Function theory V
    /*  */"fnVlw": "\uEA8E", // Function theory v
    /*  */"fnbklf": "\uEA8F", // Function theory bracket left
    /*  */"fnbkrt": "\uEA90", // Function theory bracket right
    /*  */"fnprlf": "\uEA91", // Function theory parenthesis left
    /*  */"fnprrt": "\uEA92", // Function theory parenthesis right
    /*  */"fnanlf": "\uEA93", // Function theory angle bracket left
    /*  */"fnanrt": "\uEA94", // Function theory angle bracket right
    /*  */"fnrp1": "\uEA95", // Function theory repetition 1
    /*  */"fnrp2": "\uEA96", // Function theory repetition 2
    /*  */"fnrn": "\uEA97", // Function theory prefix ring
    /*  */"fnpl": "\uEA98", // Function theory prefix plus
    /*  */"fnFup": "\uEA99", // Function theory F
    /*  */"fnIup": "\uEA9A", // Function theory I
    /*  */"fnIlw": "\uEA9B", // Function theory i
    /*  */"fnKup": "\uEA9C", // Function theory K
    /*  */"fnKlw": "\uEA9D", // Function theory k
    /*  */"fnLup": "\uEA9E", // Function theory L
    /*  */"fnLlw": "\uEA9F", // Function theory l
    /*  */"wgtrfs": "\uEAA0", // Trill wiggle segment, fastest
    /*  */"wgtrfrst": "\uEAA1", // Trill wiggle segment, faster still
    /*  */"wgtrfr": "\uEAA2", // Trill wiggle segment, faster
    /*  */"wgtrft": "\uEAA3", // Trill wiggle segment, fast
    /*  */"wgtr": "\uEAA4", // Trill wiggle segment
    /*  */"wgtrsl": "\uEAA5", // Trill wiggle segment, slow
    /*  */"wgtrsr": "\uEAA6", // Trill wiggle segment, slower
    /*  */"wgtrsrst": "\uEAA7", // Trill wiggle segment, slower still
    /*  */"wgtrss": "\uEAA8", // Trill wiggle segment, slowest
    /*  */"wgarup": "\uEAA9", // Arpeggiato wiggle segment, upwards
    /*  */"wgardn": "\uEAAA", // Arpeggiato wiggle segment, downwards
    /*  */"wgarupsw": "\uEAAB", // Arpeggiato upward swash
    /*  */"wgardnsw": "\uEAAC", // Arpeggiato downward swash
    /*  */"wgarupar": "\uEAAD", // Arpeggiato arrowhead up
    /*  */"wgardnar": "\uEAAE", // Arpeggiato arrowhead down
    /*  */"wggl": "\uEAAF", // Glissando wiggle segment
    /*  */"wgvb": "\uEAB0", // Vibrato / shake wiggle segment
    /*  */"wgvbwd": "\uEAB1", // Wide vibrato / shake wiggle segment
    /*  */"gtvbst": "\uEAB2", // Vibrato wiggle segment
    /*  */"gtwdvbst": "\uEAB3", // Wide vibrato wiggle segment
    /*  */"wgwvnr": "\uEAB4", // Narrow wavy line segment
    /*  */"wgwv": "\uEAB5", // Wavy line segment
    /*  */"wgwvwd": "\uEAB6", // Wide wavy line segment
    /*  */"wgsqwvnr": "\uEAB7", // Narrow square wave line segment
    /*  */"wgsqwv": "\uEAB8", // Square wave line segment
    /*  */"wgsqwvwd": "\uEAB9", // Wide square wave line segment
    /*  */"wgswnr": "\uEABA", // Narrow sawtooth line segment
    /*  */"wgsw": "\uEABB", // Sawtooth line segment
    /*  */"wgswwd": "\uEABC", // Wide sawtooth line segment
    /*  */"wgglgr1": "\uEABD", // Group glissando 1
    /*  */"wgglgr2": "\uEABE", // Group glissando 2
    /*  */"wgglgr3": "\uEABF", // Group glissando 3
    /*  */"wgcrcn": "\uEAC0", // Constant circular motion segment
    /*  */"wgcrcnfl": "\uEAC1", // Constant circular motion segment (flipped)
    /*  */"wgcrcnlg": "\uEAC2", // Constant circular motion segment (large)
    /*  */"wgcrcnfllg": "\uEAC3", // Constant circular motion segment (flipped, large)
    /*  */"wgcrst": "\uEAC4", // Circular motion start
    /*  */"wgcrls": "\uEAC5", // Circular motion segment, largest
    /*  */"wgcrlrst": "\uEAC6", // Circular motion segment, larger still
    /*  */"wgcrlr": "\uEAC7", // Circular motion segment, larger
    /*  */"wgcrlg": "\uEAC8", // Circular motion segment, large
    /*  */"wgcr": "\uEAC9", // Circular motion segment
    /*  */"wgcrsm": "\uEACA", // Circular motion segment, small
    /*  */"wgcren": "\uEACB", // Circular motion end
    /*  */"wgvbst": "\uEACC", // Vibrato start
    /*  */"wgvbmsfs": "\uEACD", // Vibrato smallest, fastest
    /*  */"wgvbmsfrst": "\uEACE", // Vibrato smallest, faster still
    /*  */"wgvbmsfr": "\uEACF", // Vibrato smallest, faster
    /*  */"wgvbmsft": "\uEAD0", // Vibrato smallest, fast
    /*  */"wgvbmssl": "\uEAD1", // Vibrato smallest, slow
    /*  */"wgvbmssr": "\uEAD2", // Vibrato smallest, slower
    /*  */"wgvbmsss": "\uEAD3", // Vibrato smallest, slowest
    /*  */"wgvbsmfs": "\uEAD4", // Vibrato small, fastest
    /*  */"wgvbsmfrst": "\uEAD5", // Vibrato small, faster still
    /*  */"wgvbsmfr": "\uEAD6", // Vibrato small, faster
    /*  */"wgvbsmft": "\uEAD7", // Vibrato small, fast
    /*  */"wgvbsmsl": "\uEAD8", // Vibrato small, slow
    /*  */"wgvbsmsr": "\uEAD9", // Vibrato small, slower
    /*  */"wgvbsmss": "\uEADA", // Vibrato small, slowest
    /*  */"wgvbmdfs": "\uEADB", // Vibrato medium, fastest
    /*  */"wgvbmdfrst": "\uEADC", // Vibrato medium, faster still
    /*  */"wgvbmdfr": "\uEADD", // Vibrato medium, faster
    /*  */"wgvbmdft": "\uEADE", // Vibrato medium, fast
    /*  */"wgvbmdsl": "\uEADF", // Vibrato medium, slow
    /*  */"wgvbmdsr": "\uEAE0", // Vibrato medium, slower
    /*  */"wgvbmdss": "\uEAE1", // Vibrato medium, slowest
    /*  */"wgvblgfs": "\uEAE2", // Vibrato large, fastest
    /*  */"wgvblgfrst": "\uEAE3", // Vibrato large, faster still
    /*  */"wgvblgfr": "\uEAE4", // Vibrato large, faster
    /*  */"wgvblgft": "\uEAE5", // Vibrato large, fast
    /*  */"wgvblgsl": "\uEAE6", // Vibrato large, slow
    /*  */"wgvblgsr": "\uEAE7", // Vibrato large, slower
    /*  */"wgvblgss": "\uEAE8", // Vibrato large, slowest
    /*  */"wgvblsfs": "\uEAE9", // Vibrato largest, fastest
    /*  */"wgvblsfrst": "\uEAEA", // Vibrato largest, faster still
    /*  */"wgvblsfr": "\uEAEB", // Vibrato largest, faster
    /*  */"wgvblsft": "\uEAEC", // Vibrato largest, fast
    /*  */"wgvblssl": "\uEAED", // Vibrato largest, slow
    /*  */"wgvblssr": "\uEAEE", // Vibrato largest, slower
    /*  */"wgvblsss": "\uEAEF", // Vibrato largest, slowest
    /*  */"wgrn1": "\uEAF0", // Quasi-random squiggle 1
    /*  */"wgrn2": "\uEAF1", // Quasi-random squiggle 2
    /*  */"wgrn3": "\uEAF2", // Quasi-random squiggle 3
    /*  */"wgrn4": "\uEAF3", // Quasi-random squiggle 4
    /*  */"bmacrt1": "\uEAF4", // Accel./rit. beam 1 (widest)
    /*  */"bmacrt2": "\uEAF5", // Accel./rit. beam 2
    /*  */"bmacrt3": "\uEAF6", // Accel./rit. beam 3
    /*  */"bmacrt4": "\uEAF7", // Accel./rit. beam 4
    /*  */"bmacrt5": "\uEAF8", // Accel./rit. beam 5
    /*  */"bmacrt6": "\uEAF9", // Accel./rit. beam 6
    /*  */"bmacrt7": "\uEAFA", // Accel./rit. beam 7
    /*  */"bmacrt8": "\uEAFB", // Accel./rit. beam 8
    /*  */"bmacrt9": "\uEAFC", // Accel./rit. beam 9
    /*  */"bmacrt10": "\uEAFD", // Accel./rit. beam 10
    /*  */"bmacrt11": "\uEAFE", // Accel./rit. beam 11
    /*  */"bmacrt12": "\uEAFF", // Accel./rit. beam 12
    /*  */"bmacrt13": "\uEB00", // Accel./rit. beam 13
    /*  */"bmacrt14": "\uEB01", // Accel./rit. beam 14
    /*  */"bmacrt15": "\uEB02", // Accel./rit. beam 15 (narrowest)
    /*  */"bmacrtfn": "\uEB03", // Accel./rit. beam terminating line
    /*  */"elmc": "\uEB10", // Microphone
    /*  */"elhd": "\uEB11", // Headphones
    /*  */"elhs": "\uEB12", // Headset
    /*  */"elds": "\uEB13", // Disc
    /*  */"eltp": "\uEB14", // Tape
    /*  */"elmxcn": "\uEB15", // Mixing console
    /*  */"elUSB": "\uEB16", // USB connection
    /*  */"elvdcm": "\uEB17", // Video camera
    /*  */"elmn": "\uEB18", // Monitor
    /*  */"elpr": "\uEB19", // Projector
    /*  */"elld": "\uEB1A", // Loudspeaker
    /*  */"elcm": "\uEB1B", // Camera
    /*  */"elpl": "\uEB1C", // Play
    /*  */"elst": "\uEB1D", // Stop
    /*  */"elps": "\uEB1E", // Pause
    /*  */"elftfr": "\uEB1F", // Fast-forward
    /*  */"elrw": "\uEB20", // Rewind
    /*  */"elskfr": "\uEB21", // Skip forwards
    /*  */"elskbc": "\uEB22", // Skip backwards
    /*  */"ellp": "\uEB23", // Loop
    /*  */"elrp": "\uEB24", // Replay
    /*  */"elsh": "\uEB25", // Shuffle
    /*  */"elmt": "\uEB26", // Mute
    /*  */"elun": "\uEB27", // Unmute
    /*  */"elmcmt": "\uEB28", // Mute microphone
    /*  */"elmcun": "\uEB29", // Unmute microphone
    /*  */"elpwonof": "\uEB2A", // Power on/off
    /*  */"elej": "\uEB2B", // Eject
    /*  */"elvlfd": "\uEB2C", // Combining volume fader
    /*  */"elvlfdtm": "\uEB2D", // Combining volume fader thumb
    /*  */"elvllv0": "\uEB2E", // Volume level 0%
    /*  */"elvllv20": "\uEB2F", // Volume level 20%
    /*  */"elvllv40": "\uEB30", // Volume level 40%
    /*  */"elvllv60": "\uEB31", // Volume level 60%
    /*  */"elvllv80": "\uEB32", // Volume level 80%
    /*  */"elvllv100": "\uEB33", // Volume level 100%
    /*  */"elMIDIin": "\uEB34", // MIDI in
    /*  */"elMIDIot": "\uEB35", // MIDI out
    /*  */"elMIDIcn0": "\uEB36", // MIDI controller 0%
    /*  */"elMIDIcn20": "\uEB37", // MIDI controller 20%
    /*  */"elMIDIcn40": "\uEB38", // MIDI controller 40%
    /*  */"elMIDIcn60": "\uEB39", // MIDI controller 60%
    /*  */"elMIDIcn80": "\uEB3A", // MIDI controller 80%
    /*  */"elMIDIcn100": "\uEB3B", // MIDI controller 100%
    /*  */"eladmn": "\uEB3C", // Mono audio setup
    /*  */"eladst": "\uEB3D", // Stereo audio setup
    /*  */"eladchon": "\uEB3E", // One channel (mono)
    /*  */"eladchtw": "\uEB3F", // Two channels (stereo)
    /*  */"eladchthfr": "\uEB40", // Three channels (frontal)
    /*  */"eladchthsr": "\uEB41", // Three channels (surround)
    /*  */"eladchfr": "\uEB42", // Four channels
    /*  */"eladchfv": "\uEB43", // Five channels
    /*  */"eladchsx": "\uEB44", // Six channels (5.1 surround)
    /*  */"eladchsv": "\uEB45", // Seven channels
    /*  */"eladchet": "\uEB46", // Eight channels (7.1 surround)
    /*  */"ellnin": "\uEB47", // Line in
    /*  */"ellnot": "\uEB48", // Line out
    /*  */"eladin": "\uEB49", // Audio in
    /*  */"eladot": "\uEB4A", // Audio out
    /*  */"elvdin": "\uEB4B", // Video in
    /*  */"elvdot": "\uEB4C", // Video out
    /*  */"eldtin": "\uEB4D", // Data in
    /*  */"eldtot": "\uEB4E", // Data out
    /*  */"eldw": "\uEB4F", // Download
    /*  */"elup": "\uEB50", // Upload
    /*  */"arblup": "\uEB60", // Black arrow up (N)
    /*  */"arbluprt": "\uEB61", // Black arrow up-right (NE)
    /*  */"arblrt": "\uEB62", // Black arrow right (E)
    /*  */"arbldnrt": "\uEB63", // Black arrow down-right (SE)
    /*  */"arbldn": "\uEB64", // Black arrow down (S)
    /*  */"arbldnlf": "\uEB65", // Black arrow down-left (SW)
    /*  */"arbllf": "\uEB66", // Black arrow left (W)
    /*  */"arbluplf": "\uEB67", // Black arrow up-left (NW)
    /*  */"arwtup": "\uEB68", // White arrow up (N)
    /*  */"arwtuprt": "\uEB69", // White arrow up-right (NE)
    /*  */"arwtrt": "\uEB6A", // White arrow right (E)
    /*  */"arwtdnrt": "\uEB6B", // White arrow down-right (SE)
    /*  */"arwtdn": "\uEB6C", // White arrow down (S)
    /*  */"arwtdnlf": "\uEB6D", // White arrow down-left (SW)
    /*  */"arwtlf": "\uEB6E", // White arrow left (W)
    /*  */"arwtuplf": "\uEB6F", // White arrow up-left (NW)
    /*  */"aropup": "\uEB70", // Open arrow up (N)
    /*  */"aropuprt": "\uEB71", // Open arrow up-right (NE)
    /*  */"aroprt": "\uEB72", // Open arrow right (E)
    /*  */"aropdnrt": "\uEB73", // Open arrow down-right (SE)
    /*  */"aropdn": "\uEB74", // Open arrow down (S)
    /*  */"aropdnlf": "\uEB75", // Open arrow down-left (SW)
    /*  */"aroplf": "\uEB76", // Open arrow left (W)
    /*  */"aropuplf": "\uEB77", // Open arrow up-left (NW)
    /*  */"ahblup": "\uEB78", // Black arrowhead up (N)
    /*  */"ahbluprt": "\uEB79", // Black arrowhead up-right (NE)
    /*  */"ahblrt": "\uEB7A", // Black arrowhead right (E)
    /*  */"ahbldnrt": "\uEB7B", // Black arrowhead down-right (SE)
    /*  */"ahbldn": "\uEB7C", // Black arrowhead down (S)
    /*  */"ahbldnlf": "\uEB7D", // Black arrowhead down-left (SW)
    /*  */"ahbllf": "\uEB7E", // Black arrowhead left (W)
    /*  */"ahbluplf": "\uEB7F", // Black arrowhead up-left (NW)
    /*  */"ahwtup": "\uEB80", // White arrowhead up (N)
    /*  */"ahwtuprt": "\uEB81", // White arrowhead up-right (NE)
    /*  */"ahwtrt": "\uEB82", // White arrowhead right (E)
    /*  */"ahwtdnrt": "\uEB83", // White arrowhead down-right (SE)
    /*  */"ahwtdn": "\uEB84", // White arrowhead down (S)
    /*  */"ahwtdnlf": "\uEB85", // White arrowhead down-left (SW)
    /*  */"ahwtlf": "\uEB86", // White arrowhead left (W)
    /*  */"ahwtuplf": "\uEB87", // White arrowhead up-left (NW)
    /*  */"ahopup": "\uEB88", // Open arrowhead up (N)
    /*  */"ahopuprt": "\uEB89", // Open arrowhead up-right (NE)
    /*  */"ahoprt": "\uEB8A", // Open arrowhead right (E)
    /*  */"ahopdnrt": "\uEB8B", // Open arrowhead down-right (SE)
    /*  */"ahopdn": "\uEB8C", // Open arrowhead down (S)
    /*  */"ahopdnlf": "\uEB8D", // Open arrowhead down-left (SW)
    /*  */"ahoplf": "\uEB8E", // Open arrowhead left (W)
    /*  */"ahopuplf": "\uEB8F", // Open arrowhead up-left (NW)
    /*  */"stpsrs1": "\uEB90", // Raise 1 staff position
    /*  */"stpsrs2": "\uEB91", // Raise 2 staff positions
    /*  */"stpsrs3": "\uEB92", // Raise 3 staff positions
    /*  */"stpsrs4": "\uEB93", // Raise 4 staff positions
    /*  */"stpsrs5": "\uEB94", // Raise 5 staff positions
    /*  */"stpsrs6": "\uEB95", // Raise 6 staff positions
    /*  */"stpsrs7": "\uEB96", // Raise 7 staff positions
    /*  */"stpsrs8": "\uEB97", // Raise 8 staff positions
    /*  */"stpslw1": "\uEB98", // Lower 1 staff position
    /*  */"stpslw2": "\uEB99", // Lower 2 staff positions
    /*  */"stpslw3": "\uEB9A", // Lower 3 staff positions
    /*  */"stpslw4": "\uEB9B", // Lower 4 staff positions
    /*  */"stpslw5": "\uEB9C", // Lower 5 staff positions
    /*  */"stpslw6": "\uEB9D", // Lower 6 staff positions
    /*  */"stpslw7": "\uEB9E", // Lower 7 staff positions
    /*  */"stpslw8": "\uEB9F", // Lower 8 staff positions
    /*  */"ltst6ln": "\uEBA0", // Lute tablature staff, 6 courses
    /*  */"ltst6lnwd": "\uEBA1", // Lute tablature staff, 6 courses (wide)
    /*  */"ltst6lnnr": "\uEBA2", // Lute tablature staff, 6 courses (narrow)
    /*  */"ltblstrp": "\uEBA3", // Lute tablature start repeat barline
    /*  */"ltblenrp": "\uEBA4", // Lute tablature end repeat barline
    /*  */"ltblfn": "\uEBA5", // Lute tablature final barline
    /*  */"ltdrdbwh": "\uEBA6", // Double whole note (breve) duration sign
    /*  */"ltdrwh": "\uEBA7", // Whole note (semibreve) duration sign
    /*  */"ltdrhf": "\uEBA8", // Half note (minim) duration sign
    /*  */"ltdrqr": "\uEBA9", // Quarter note (crotchet) duration sign
    /*  */"ltdr8": "\uEBAA", // Eighth note (quaver) duration sign
    /*  */"ltdr16": "\uEBAB", // 16th note (semiquaver) duration sign
    /*  */"ltdr32": "\uEBAC", // 32nd note (demisemiquaver) duration sign
    /*  */"ltfiRHtm": "\uEBAD", // Right-hand fingering, thumb
    /*  */"ltfiRHfr": "\uEBAE", // Right-hand fingering, first finger
    /*  */"ltfiRHsc": "\uEBAF", // Right-hand fingering, second finger
    /*  */"ltfiRHth": "\uEBB0", // Right-hand fingering, third finger
    /*  */"ltfrfrA": "\uEBC0", // Open string (a)
    /*  */"ltfrfrB": "\uEBC1", // First fret (b)
    /*  */"ltfrfrC": "\uEBC2", // Second fret (c)
    /*  */"ltfrfrD": "\uEBC3", // Third fret (d)
    /*  */"ltfrfrE": "\uEBC4", // Fourth fret (e)
    /*  */"ltfrfrF": "\uEBC5", // Fifth fret (f)
    /*  */"ltfrfrG": "\uEBC6", // Sixth fret (g)
    /*  */"ltfrfrH": "\uEBC7", // Seventh fret (h)
    /*  */"ltfrfrI": "\uEBC8", // Eighth fret (i)
    /*  */"ltfrfrK": "\uEBC9", // Ninth fret (k)
    /*  */"ltfrfrL": "\uEBCA", // 10th fret (l)
    /*  */"ltfrfrM": "\uEBCB", // 11th fret (m)
    /*  */"ltfrfrN": "\uEBCC", // 12th fret (n)
    /*  */"ltfr7cr": "\uEBCD", // Seventh course (diapason)
    /*  */"ltfr8cr": "\uEBCE", // Eighth course (diapason)
    /*  */"ltfr9cr": "\uEBCF", // Ninth course (diapason)
    /*  */"ltfr10cr": "\uEBD0", // 10th course (diapason)
    /*  */"ltfrmrup": "\uEBD1", // Mordent with upper auxiliary
    /*  */"ltfrmrlw": "\uEBD2", // Mordent with lower auxiliary
    /*  */"ltfrmrin": "\uEBD3", // Inverted mordent
    /*  */"ltfrapbl": "\uEBD4", // Appoggiatura from below
    /*  */"ltfrapab": "\uEBD5", // Appoggiatura from above
    /*  */"ltitfr0": "\uEBE0", // Open string (0)
    /*  */"ltitfr1": "\uEBE1", // First fret (1)
    /*  */"ltitfr2": "\uEBE2", // Second fret (2)
    /*  */"ltitfr3": "\uEBE3", // Third fret (3)
    /*  */"ltitfr4": "\uEBE4", // Fourth fret (4)
    /*  */"ltitfr5": "\uEBE5", // Fifth fret (5)
    /*  */"ltitfr6": "\uEBE6", // Sixth fret (6)
    /*  */"ltitfr7": "\uEBE7", // Seventh fret (7)
    /*  */"ltitfr8": "\uEBE8", // Eighth fret (8)
    /*  */"ltitfr9": "\uEBE9", // Ninth fret (9)
    /*  */"ltittmft": "\uEBEA", // Fast tempo indication (de Mudarra)
    /*  */"ltittmsmft": "\uEBEB", // Somewhat fast tempo indication (de Narvaez)
    /*  */"ltittmntftnrsl": "\uEBEC", // Neither fast nor slow tempo indication (de Mudarra)
    /*  */"ltittmsl": "\uEBED", // Slow tempo indication (de Mudarra)
    /*  */"ltittmvrsl": "\uEBEE", // Very slow indication (de Narvaez)
    /*  */"ltittmtr": "\uEBEF", // Triple time indication
    /*  */"ltitclFfaut": "\uEBF0", // F fa ut clef
    /*  */"ltitclCslfaut": "\uEBF1", // C sol fa ut clef
    /*  */"ltittr": "\uEBF2", // Single-finger tremolo or mordent
    /*  */"ltithlnt": "\uEBF3", // Hold note
    /*  */"ltithlfi": "\uEBF4", // Hold finger in place
    /*  */"ltitrlfi": "\uEBF5", // Release finger
    /*  */"ltitvb": "\uEBF6", // Vibrato (verre cass\u00e9)
    /*  */"ltgrAlw": "\uEC00", // 5th course, 1st fret (a)
    /*  */"ltgrBlw": "\uEC01", // 4th course, 1st fret (b)
    /*  */"ltgrClw": "\uEC02", // 3rd course, 1st fret (c)
    /*  */"ltgrDlw": "\uEC03", // 2nd course, 1st fret (d)
    /*  */"ltgrElw": "\uEC04", // 1st course, 1st fret (e)
    /*  */"ltgrFlw": "\uEC05", // 5th course, 2nd fret (f)
    /*  */"ltgrGlw": "\uEC06", // 4th course, 2nd fret (g)
    /*  */"ltgrHlw": "\uEC07", // 3rd course, 2nd fret (h)
    /*  */"ltgrIlw": "\uEC08", // 2nd course, 2nd fret (i)
    /*  */"ltgrKlw": "\uEC09", // 1st course, 2nd fret (k)
    /*  */"ltgrLlw": "\uEC0A", // 5th course, 3rd fret (l)
    /*  */"ltgrMlw": "\uEC0B", // 4th course, 3rd fret (m)
    /*  */"ltgrNlw": "\uEC0C", // 3rd course, 3rd fret (n)
    /*  */"ltgrOlw": "\uEC0D", // 2nd course, 3rd fret (o)
    /*  */"ltgrPlw": "\uEC0E", // 1st course, 3rd fret (p)
    /*  */"ltgrQlw": "\uEC0F", // 5th course, 4th fret (q)
    /*  */"ltgrRlw": "\uEC10", // 4th course, 4th fret (r)
    /*  */"ltgrSlw": "\uEC11", // 3rd course, 4th fret (s)
    /*  */"ltgrTlw": "\uEC12", // 2nd course, 4th fret (t)
    /*  */"ltgrVlw": "\uEC13", // 1st course, 4th fret (v)
    /*  */"ltgrXlw": "\uEC14", // 5th course, 5th fret (x)
    /*  */"ltgrYlw": "\uEC15", // 4th course, 5th fret (y)
    /*  */"ltgrZlw": "\uEC16", // 3rd course, 5th fret (z)
    /*  */"ltgrAup": "\uEC17", // 6th course, 1st fret (A)
    /*  */"ltgrBup": "\uEC18", // 6th course, 2nd fret (B)
    /*  */"ltgrCup": "\uEC19", // 6th course, 3rd fret (C)
    /*  */"ltgrDup": "\uEC1A", // 6th course, 4th fret (D)
    /*  */"ltgrEup": "\uEC1B", // 6th course, 5th fret (E)
    /*  */"ltgrFup": "\uEC1C", // 6th course, 6th fret (F)
    /*  */"ltgrGup": "\uEC1D", // 6th course, 7th fret (G)
    /*  */"ltgrHup": "\uEC1E", // 6th course, 8th fret (H)
    /*  */"ltgrIup": "\uEC1F", // 6th course, 9th fret (I)
    /*  */"ltgrKup": "\uEC20", // 6th course, 10th fret (K)
    /*  */"ltgrLup": "\uEC21", // 6th course, 11th fret (L)
    /*  */"ltgrMup": "\uEC22", // 6th course, 12th fret (M)
    /*  */"ltgrNup": "\uEC23", // 6th course, 13th fret (N)
    /*  */"kvCcl": "\uEC30", // Kievan C clef (tse-fa-ut)
    /*  */"kvensy": "\uEC31", // Kievan ending symbol
    /*  */"kvntrc": "\uEC32", // Kievan reciting note
    /*  */"kvntwh": "\uEC33", // Kievan whole note
    /*  */"kvntwhfn": "\uEC34", // Kievan final whole note
    /*  */"kvnthfstln": "\uEC35", // Kievan half note (on staff line)
    /*  */"kvnthfstsp": "\uEC36", // Kievan half note (in staff space)
    /*  */"kvntqrsmup": "\uEC37", // Kievan quarter note, stem up
    /*  */"kvntqrsmdn": "\uEC38", // Kievan quarter note, stem down
    /*  */"kvnt8smup": "\uEC39", // Kievan eighth note, stem up
    /*  */"kvnt8smdn": "\uEC3A", // Kievan eighth note, stem down
    /*  */"kvntbm": "\uEC3B", // Kievan beam
    /*  */"kvagdt": "\uEC3C", // Kievan augmentation dot
    /*  */"kvacsh": "\uEC3D", // Kievan sharp
    /*  */"kvacfl": "\uEC3E", // Kievan flat
    /*  */"kdhndo": "\uEC40", // Do hand sign
    /*  */"kdhnre": "\uEC41", // Re hand sign
    /*  */"kdhnmi": "\uEC42", // Mi hand sign
    /*  */"kdhnfa": "\uEC43", // Fa hand sign
    /*  */"kdhnso": "\uEC44", // So hand sign
    /*  */"kdhnla": "\uEC45", // La hand sign
    /*  */"kdhnti": "\uEC46", // Ti hand sign
    /*  */"smsh": "\uEC50", // Sharp stem up
    /*  */"smshwt": "\uEC51", // Sharp (white) stem up
    /*  */"smfl": "\uEC52", // Flat
    /*  */"smflwt": "\uEC53", // Flat (white)
    /*  */"smhssh": "\uEC54", // Sharp history sign
    /*  */"smhsdbsh": "\uEC55", // Double sharp history sign
    /*  */"smhsfl": "\uEC56", // Flat history sign
    /*  */"smhsdbfl": "\uEC57", // Double flat history sign
    /*  */"smnt": "\uEC58", // Natural (N)
    /*  */"smshdn": "\uEC59", // Sharp stem down
    /*  */"smshwtdn": "\uEC5A", // Sharp (white) stem down
    /*  */"msdontph": "\uEC60", // Do not photocopy
    /*  */"msdontcp": "\uEC61", // Do not copy
    /*  */"msey": "\uEC62", // Eyeglasses
    /*  */"mtmdarlf": "\uEC63", // Left-pointing arrow for metric modulation
    /*  */"mtmdarrt": "\uEC64", // Right-pointing arrow for metric modulation
    /*  */"tmsgbklf": "\uEC80", // Left bracket for whole time signature
    /*  */"tmsgbkrt": "\uEC81", // Right bracket for whole time signature
    /*  */"tmsgbklfsm": "\uEC82", // Left bracket for numerator only
    /*  */"tmsgbkrtsm": "\uEC83", // Right bracket for numerator only
    /*  */"tmsgsl": "\uEC84", // Time signature slash separator
    /*  */"tmsgct2": "\uEC85", // Cut time (Bach)
    /*  */"tmsgct3": "\uEC86", // Cut triple time (9/8)
    /*  */"oclc": "\uEC90", // Loco
    /*  */"ocbsA": "\uEC91", // a (baseline)
    /*  */"ocspA": "\uEC92", // a (superscript)
    /*  */"ocbsB": "\uEC93", // b (baseline)
    /*  */"ocspB": "\uEC94", // b (superscript)
    /*  */"ocbsM": "\uEC95", // m (baseline)
    /*  */"ocspM": "\uEC96", // m (superscript)
    /*  */"ocbsV": "\uEC97", // v (baseline)
    /*  */"ocspV": "\uEC98", // v (superscript)
    /*  */"mtntdbwh": "\uECA0", // Double whole note (breve)
    /*  */"mtntdbwhsq": "\uECA1", // Double whole note (square)
    /*  */"mtntwh": "\uECA2", // Whole note (semibreve)
    /*  */"mtnthfup": "\uECA3", // Half note (minim) stem up
    /*  */"mtnthfdn": "\uECA4", // Half note (minim) stem down
    /*  */"mtntqrup": "\uECA5", // Quarter note (crotchet) stem up
    /*  */"mtntqrdn": "\uECA6", // Quarter note (crotchet) stem down
    /*  */"mtnt8up": "\uECA7", // Eighth note (quaver) stem up
    /*  */"mtnt8dn": "\uECA8", // Eighth note (quaver) stem down
    /*  */"mtnt16up": "\uECA9", // 16th note (semiquaver) stem up
    /*  */"mtnt16dn": "\uECAA", // 16th note (semiquaver) stem down
    /*  */"mtnt32up": "\uECAB", // 32nd note (demisemiquaver) stem up
    /*  */"mtnt32dn": "\uECAC", // 32nd note (demisemiquaver) stem down
    /*  */"mtnt64up": "\uECAD", // 64th note (hemidemisemiquaver) stem up
    /*  */"mtnt64dn": "\uECAE", // 64th note (hemidemisemiquaver) stem down
    /*  */"mtnt128up": "\uECAF", // 128th note (semihemidemisemiquaver) stem up
    /*  */"mtnt128dn": "\uECB0", // 128th note (semihemidemisemiquaver) stem down
    /*  */"mtnt256up": "\uECB1", // 256th note (demisemihemidemisemiquaver) stem up
    /*  */"mtnt256dn": "\uECB2", // 256th note (demisemihemidemisemiquaver) stem down
    /*  */"mtnt512up": "\uECB3", // 512th note (hemidemisemihemidemisemiquaver) stem up
    /*  */"mtnt512dn": "\uECB4", // 512th note (hemidemisemihemidemisemiquaver) stem down
    /*  */"mtnt1024up": "\uECB5", // 1024th note (semihemidemisemihemidemisemiquaver) stem up
    /*  */"mtnt1024dn": "\uECB6", // 1024th note (semihemidemisemihemidemisemiquaver) stem down
    /*  */"mtagdt": "\uECB7", // Augmentation dot
    /*  */"fg7dm": "\uECC0", // Figured bass 7 diminished
    /*  */"fgtrfl": "\uECC1", // Figured bass triple flat
    /*  */"fgtrsh": "\uECC2", // Figured bass triple sharp
    /*  */"ntshrndbwh": "\uECD0", // Round double whole (4-shape sol; 7-shape so)
    /*  */"ntshsqdbwh": "\uECD1", // Square double whole (4-shape la; Aikin 7-shape la)
    /*  */"ntshtrrtdbwh": "\uECD2", // Triangle right double whole (stem down; 4-shape fa; 7-shape fa)
    /*  */"ntshtrlfdbwh": "\uECD3", // Triangle left double whole (stem up; 4-shape fa; 7-shape fa)
    /*  */"ntshdmdbwh": "\uECD4", // Diamond double whole (4-shape mi; 7-shape mi)
    /*  */"ntshtrupdbwh": "\uECD5", // Triangle up double whole (Aikin 7-shape do)
    /*  */"ntshmndbwh": "\uECD6", // Moon double whole (Aikin 7-shape re)
    /*  */"ntshtrrndbwh": "\uECD7", // Triangle-round white (Aikin 7-shape ti)
    /*  */"ntshksdbwh": "\uECD8", // Inverted keystone double whole (Walker 7-shape do)
    /*  */"ntshqrmndbwh": "\uECD9", // Quarter moon double whole (Walker 7-shape re)
    /*  */"ntshistrdbwh": "\uECDA", // Isosceles triangle double whole (Walker 7-shape ti)
    /*  */"ntshmnlfdbwh": "\uECDB", // Moon left double whole (Funk 7-shape do)
    /*  */"ntshahlfdbwh": "\uECDC", // Arrowhead left double whole (Funk 7-shape re)
    /*  */"ntshtrrnlfdbwh": "\uECDD", // Triangle-round left double whole (Funk 7-shape ti)
    /*  */"tmsg0tr": "\uECE0", // Turned time signature 0
    /*  */"tmsg1tr": "\uECE1", // Turned time signature 1
    /*  */"tmsg2tr": "\uECE2", // Turned time signature 2
    /*  */"tmsg3tr": "\uECE3", // Turned time signature 3
    /*  */"tmsg4tr": "\uECE4", // Turned time signature 4
    /*  */"tmsg5tr": "\uECE5", // Turned time signature 5
    /*  */"tmsg6tr": "\uECE6", // Turned time signature 6
    /*  */"tmsg7tr": "\uECE7", // Turned time signature 7
    /*  */"tmsg8tr": "\uECE8", // Turned time signature 8
    /*  */"tmsg9tr": "\uECE9", // Turned time signature 9
    /*  */"tmsgcntr": "\uECEA", // Turned common time
    /*  */"tmsgctcntr": "\uECEB", // Turned cut time
    /*  */"tmsg0rv": "\uECF0", // Reversed time signature 0
    /*  */"tmsg1rv": "\uECF1", // Reversed time signature 1
    /*  */"tmsg2rv": "\uECF2", // Reversed time signature 2
    /*  */"tmsg3rv": "\uECF3", // Reversed time signature 3
    /*  */"tmsg4rv": "\uECF4", // Reversed time signature 4
    /*  */"tmsg5rv": "\uECF5", // Reversed time signature 5
    /*  */"tmsg6rv": "\uECF6", // Reversed time signature 6
    /*  */"tmsg7rv": "\uECF7", // Reversed time signature 7
    /*  */"tmsg8rv": "\uECF8", // Reversed time signature 8
    /*  */"tmsg9rv": "\uECF9", // Reversed time signature 9
    /*  */"tmsgcnrv": "\uECFA", // Reversed common time
    /*  */"tmsgctcnrv": "\uECFB", // Reversed cut time
    /*  */"fnMup": "\uED00", // Function theory M
    /*  */"fnMlw": "\uED01", // Function theory m
    /*  */"fnNupsp": "\uED02", // Function theory superscript N
    /*  */"fnRlw": "\uED03", // Function theory r
    /*  */"fi0": "\uED10", // Fingering 0 (open string)
    /*  */"fi1": "\uED11", // Fingering 1 (thumb)
    /*  */"fi2": "\uED12", // Fingering 2 (index finger)
    /*  */"fi3": "\uED13", // Fingering 3 (middle finger)
    /*  */"fi4": "\uED14", // Fingering 4 (ring finger)
    /*  */"fi5": "\uED15", // Fingering 5 (little finger)
    /*  */"fiTup": "\uED16", // Fingering T (left-hand thumb for guitar)
    /*  */"fiPlw": "\uED17", // Fingering p (pulgar; right-hand thumb for guitar)
    /*  */"fiTlw": "\uED18", // Fingering t (right-hand thumb for guitar)
    /*  */"fiIlw": "\uED19", // Fingering i (indicio; right-hand index finger for guitar)
    /*  */"fiMlw": "\uED1A", // Fingering m (medio; right-hand middle finger for guitar)
    /*  */"fiAlw": "\uED1B", // Fingering a (anular; right-hand ring finger for guitar)
    /*  */"fiClw": "\uED1C", // Fingering c (right-hand little finger for guitar)
    /*  */"fiXlw": "\uED1D", // Fingering x (right-hand little finger for guitar)
    /*  */"fiElw": "\uED1E", // Fingering e (right-hand little finger for guitar)
    /*  */"fiOlw": "\uED1F", // Fingering o (right-hand little finger for guitar)
    /*  */"fisbab": "\uED20", // Finger substitution above
    /*  */"fisbbl": "\uED21", // Finger substitution below
    /*  */"fisbds": "\uED22", // Finger substitution dash
    /*  */"fimlnt": "\uED23", // Multiple notes played by thumb or single finger
    /*  */"fi6": "\uED24", // Fingering 6
    /*  */"fi7": "\uED25", // Fingering 7
    /*  */"fi8": "\uED26", // Fingering 8
    /*  */"fi9": "\uED27", // Fingering 9
    /*  */"filfpr": "\uED28", // Fingering left parenthesis
    /*  */"firtpr": "\uED29", // Fingering right parenthesis
    /*  */"filfbk": "\uED2A", // Fingering left bracket
    /*  */"firtbk": "\uED2B", // Fingering right bracket
    /*  */"fispmddt": "\uED2C", // Fingering middle dot separator
    /*  */"fispmddtwt": "\uED2D", // Fingering white middle dot separator
    /*  */"fispsl": "\uED2E", // Fingering forward slash separator
    /*  */"acdbflar": "\uED30", // Arabic double flat
    /*  */"acthqrtnflar": "\uED31", // Arabic three-quarter-tones flat
    /*  */"acflar": "\uED32", // Arabic half-tone flat
    /*  */"acqrtnflar": "\uED33", // Arabic quarter-tone flat
    /*  */"acntar": "\uED34", // Arabic natural
    /*  */"acqrtnshar": "\uED35", // Arabic quarter-tone sharp
    /*  */"acshar": "\uED36", // Arabic half-tone sharp
    /*  */"acthqrtnshar": "\uED37", // Arabic three-quarter-tones sharp
    /*  */"acdbshar": "\uED38", // Arabic double sharp
    /*  */"arsfacab": "\uED40", // Soft accent above
    /*  */"arsfacbl": "\uED41", // Soft accent below
    /*  */"arsfacstab": "\uED42", // Soft accent-staccato above
    /*  */"arsfacstbl": "\uED43", // Soft accent-staccato below
    /*  */"arsfactnab": "\uED44", // Soft accent-tenuto above
    /*  */"arsfactnbl": "\uED45", // Soft accent-tenuto below
    /*  */"arsfactnstab": "\uED46", // Soft accent-tenuto-staccato above
    /*  */"arsfactnstbl": "\uED47", // Soft accent-tenuto-staccato below
    /*  */"acrssh": "\uED50", // Raised (Stockhausen)
    /*  */"aclwsh": "\uED51", // Lowered (Stockhausen)
    /*  */"acflrssh": "\uED52", // Raised flat (Stockhausen)
    /*  */"acfllwsh": "\uED53", // Lowered flat (Stockhausen)
    /*  */"acntrssh": "\uED54", // Raised natural (Stockhausen)
    /*  */"acntlwsh": "\uED55", // Lowered natural (Stockhausen)
    /*  */"acshrssh": "\uED56", // Raised sharp (Stockhausen)
    /*  */"acshlwsh": "\uED57", // Lowered sharp (Stockhausen)
    /*  */"aconqrtnshsh": "\uED58", // One-quarter-tone sharp (Stockhausen)
    /*  */"aconqrtnflsh": "\uED59", // One-quarter-tone flat (Stockhausen)
    /*  */"acthqrtnshsh": "\uED5A", // Three-quarter-tones sharp (Stockhausen)
    /*  */"acflrpspsh": "\uED5B", // Repeated flat, note in space (Stockhausen)
    /*  */"acflrplnsh": "\uED5C", // Repeated flat, note on line (Stockhausen)
    /*  */"acshrpspsh": "\uED5D", // Repeated sharp, note in space (Stockhausen)
    /*  */"acshrplnsh": "\uED5E", // Repeated sharp, note on line (Stockhausen)
    /*  */"csacfl": "\uED60", // Flat
    /*  */"csacnt": "\uED61", // Natural
    /*  */"csacsh": "\uED62", // Sharp
    /*  */"csacdbsh": "\uED63", // Double sharp
    /*  */"csacdbfl": "\uED64", // Double flat
    /*  */"csactrsh": "\uED65", // Triple sharp
    /*  */"csactrfl": "\uED66", // Triple flat
    /*  */"indrcl": "\uED70", // Indian drum clef
    /*  */"fi0it": "\uED80", // Fingering 0 italic (open string)
    /*  */"fi1it": "\uED81", // Fingering 1 italic (thumb)
    /*  */"fi2it": "\uED82", // Fingering 2 italic (index finger)
    /*  */"fi3it": "\uED83", // Fingering 3 italic (middle finger)
    /*  */"fi4it": "\uED84", // Fingering 4 italic (ring finger)
    /*  */"fi5it": "\uED85", // Fingering 5 italic (little finger)
    /*  */"fi6it": "\uED86", // Fingering 6 italic
    /*  */"fi7it": "\uED87", // Fingering 7 italic
    /*  */"fi8it": "\uED88", // Fingering 8 italic
    /*  */"fi9it": "\uED89", // Fingering 9 italic
    /*  */"filfprit": "\uED8A", // Fingering left parenthesis italic
    /*  */"firtprit": "\uED8B", // Fingering right parenthesis italic
    /*  */"filfbkit": "\uED8C", // Fingering left bracket italic
    /*  */"firtbkit": "\uED8D", // Fingering right bracket italic
    /*  */"fiQlw": "\uED8E", // Fingering q (right-hand little finger for guitar)
    /*  */"fiSlw": "\uED8F", // Fingering s (right-hand little finger for guitar)
    /*  */"knst": "\uEDA0", // Step
    /*  */"kntp": "\uEDA1", // Tap
    /*  */"knhp": "\uEDA2", // Hop
    /*  */"knlp": "\uEDA3", // Leap
    /*  */"knjmtg": "\uEDA4", // Jump-together
    /*  */"knjmap": "\uEDA5", // Jump-apart
    /*  */"knbrfr": "\uEDA6", // Brush-forward
    /*  */"knbrbc": "\uEDA7", // Brush-backward
    /*  */"kngrtp": "\uEDA8", // Grace-tap
    /*  */"knfl": "\uEDA9", // Flat
    /*  */"knhl": "\uEDAA", // Heel
    /*  */"knto": "\uEDAB", // Toe
    /*  */"knknot": "\uEDAC", // Knee-outward
    /*  */"knknin": "\uEDAD", // Knee-inward
    /*  */"knsc": "\uEDAE", // Scrape
    /*  */"kntr": "\uEDAF", // Trench
    /*  */"knflhp": "\uEDB0", // Flea-hop
    /*  */"knfltp": "\uEDB1", // Flea-tap
    /*  */"kndrst": "\uEDB2", // Draw-step
    /*  */"kndrtp": "\uEDB3", // Draw-tap
    /*  */"knslst": "\uEDB4", // Slide-step
    /*  */"knsltp": "\uEDB5", // Slide-tap
    /*  */"knhldr": "\uEDB6", // Heel-drop
    /*  */"kntodr": "\uEDB7", // Toe-drop
    /*  */"kncl": "\uEDB8", // Clap
    /*  */"knsn": "\uEDB9", // Snap
    /*  */"kndbsn": "\uEDBA", // Double-snap
    /*  */"knhlcl": "\uEDBB", // Heel-click
    /*  */"kntocl": "\uEDBC", // Toe-click
    /*  */"knlfcr": "\uEDBD", // Left-cross
    /*  */"knrtcr": "\uEDBE", // Right-cross
    /*  */"knlfct": "\uEDBF", // Left-catch
    /*  */"knrtct": "\uEDC0", // Right-catch
    /*  */"knlftost": "\uEDC1", // Left-toe-strike
    /*  */"knrttost": "\uEDC2", // Right-toe-strike
    /*  */"knsa": "\uEDC3", // Stamp
    /*  */"knhlst": "\uEDC4", // Heel-step
    /*  */"kntost": "\uEDC5", // Toe-step
    /*  */"knblch": "\uEDC6", // Ball-change
    /*  */"knstsa": "\uEDC7", // Step-stamp
    /*  */"knsasa": "\uEDC8", // Stamp-stamp
    /*  */"knhlch": "\uEDC9", // Heel-change
    /*  */"knso": "\uEDCA", // Stomp
    /*  */"knhltp": "\uEDCB", // Heel-tap
    /*  */"kntotp": "\uEDCC", // Toe-tap
    /*  */"knbldg": "\uEDCD", // Ball-dig
    /*  */"knsm": "\uEDCE", // Slam
    /*  */"knfm": "\uEDCF", // Flam
    /*  */"kngrtphp": "\uEDD0", // Grace-tap-hop
    /*  */"kngrtpch": "\uEDD1", // Grace-tap-change
    /*  */"knlpflft": "\uEDD2", // Leap-flat-foot
    /*  */"kngrtpsa": "\uEDD3", // Grace-tap-stamp
    /*  */"knlphlcl": "\uEDD4", // Leap-heel-click
    /*  */"knfp": "\uEDD5", // Flap
    /*  */"knrp": "\uEDD6", // Rip
    /*  */"knfpst": "\uEDD7", // Flap-step
    /*  */"knbcfp": "\uEDD8", // Back-flap
    /*  */"knsp": "\uEDD9", // Slap
    /*  */"knbcrp": "\uEDDA", // Back-rip
    /*  */"knsobr": "\uEDDB", // Stomp-brush
    /*  */"knsf": "\uEDDC", // Scuff
    /*  */"knch": "\uEDDD", // Chug
    /*  */"knps": "\uEDDE", // Push
    /*  */"knzi": "\uEDDF", // Zink
    /*  */"knrf": "\uEDE0", // Riff
    /*  */"knbcrf": "\uEDE1", // Back-riff
    /*  */"knbcch": "\uEDE2", // Back-chug
    /*  */"knpl": "\uEDE3", // Pull
    /*  */"knza": "\uEDE4", // Zank
    /*  */"knsh": "\uEDE5", // Shuffle
    /*  */"knse": "\uEDE6", // Scuffle
    /*  */"knrl": "\uEDE7", // Riffle
    /*  */"knre": "\uEDE8", // Ripple
    /*  */"knwn": "\uEDE9", // Wing
    /*  */"knwnch": "\uEDEA", // Wing-change
    /*  */"kndbwn": "\uEDEB", // Double-wing
    /*  */"knovthtp": "\uEDEC", // Over-the-top
    /*  */"knovthtptp": "\uEDED", // Over-the-top-tap
    /*  */"knlfft": "\uEDEE", // Left-foot
    /*  */"knrtft": "\uEDEF", // Right-foot
    /*  */"knlftn": "\uEDF0", // Left-turn
    /*  */"knrttn": "\uEDF1", // Right-turn
    /*  */"orgrCup": "\uEE00", // German organ tablature great C
    /*  */"orgrcsup": "\uEE01", // German organ tablature great Cis
    /*  */"orgrDup": "\uEE02", // German organ tablature great D
    /*  */"orgrdsup": "\uEE03", // German organ tablature great Dis
    /*  */"orgrEup": "\uEE04", // German organ tablature great E
    /*  */"orgrFup": "\uEE05", // German organ tablature great F
    /*  */"orgrfsup": "\uEE06", // German organ tablature great Fis
    /*  */"orgrGup": "\uEE07", // German organ tablature great G
    /*  */"orgrgsup": "\uEE08", // German organ tablature great Gis
    /*  */"orgrAup": "\uEE09", // German organ tablature great A
    /*  */"orgrBup": "\uEE0A", // German organ tablature great B
    /*  */"orgrHup": "\uEE0B", // German organ tablature great H
    /*  */"orgrClw": "\uEE0C", // German organ tablature small C
    /*  */"orgrcslw": "\uEE0D", // German organ tablature small Cis
    /*  */"orgrDlw": "\uEE0E", // German organ tablature small D
    /*  */"orgrdslw": "\uEE0F", // German organ tablature small Dis
    /*  */"orgrElw": "\uEE10", // German organ tablature small E
    /*  */"orgrFlw": "\uEE11", // German organ tablature small F
    /*  */"orgrfslw": "\uEE12", // German organ tablature small Fis
    /*  */"orgrGlw": "\uEE13", // German organ tablature small G
    /*  */"orgrgslw": "\uEE14", // German organ tablature small Gis
    /*  */"orgrAlw": "\uEE15", // German organ tablature small A
    /*  */"orgrBlw": "\uEE16", // German organ tablature small B
    /*  */"orgrHlw": "\uEE17", // German organ tablature small H
    /*  */"orgrocup": "\uEE18", // Combining single octave line above
    /*  */"orgr2ocup": "\uEE19", // Combining double octave line above
    /*  */"orgrocdn": "\uEE1A", // Combining single octave line below
    /*  */"orgrti": "\uEE1B", // Tie
    /*  */"orgragdt": "\uEE1C", // Rhythm Dot
    /*  */"orgrbxsbrs": "\uEE1D", // Semibrevis Rest Buxheimer Orgelbuch
    /*  */"orgrbxmnrs": "\uEE1E", // Minima Rest Buxheimer Orgelbuch
    /*  */"orgrsbrs": "\uEE1F", // Semibrevis Rest
    /*  */"orgrmnrs": "\uEE20", // Minima Rest
    /*  */"orgrsmrs": "\uEE21", // Semiminima Rest
    /*  */"orgrfsrs": "\uEE22", // Fusa Rest
    /*  */"orgrsfrs": "\uEE23", // Semifusa Rest
    /*  */"orgrbxbr3": "\uEE24", // Brevis (Ternary) Buxheimer Orgelbuch
    /*  */"orgrbxbr2": "\uEE25", // Brevis (Binary) Buxheimer Orgelbuch
    /*  */"orgrbxsb": "\uEE26", // Semibrevis Buxheimer Orgelbuch
    /*  */"orgrsb": "\uEE27", // Semibrevis
    /*  */"orgrmn": "\uEE28", // Minima
    /*  */"orgrsm": "\uEE29", // Semiminima
    /*  */"orgrfs": "\uEE2A", // Fusa
    /*  */"orgrsf": "\uEE2B", // Semifusa
    /*  */"orgr2mn": "\uEE2C", // Two Minimae
    /*  */"orgr2sm": "\uEE2D", // Two Semiminimae
    /*  */"orgr2fs": "\uEE2E", // Two Fusae
    /*  */"orgr2sf": "\uEE2F", // Two Semifusae
    /*  */"orgr3mn": "\uEE30", // Three Minimae
    /*  */"orgr3sm": "\uEE31", // Three Semiminimae
    /*  */"orgr3fs": "\uEE32", // Three Fusae
    /*  */"orgr3sf": "\uEE33", // Three Semifusae
    /*  */"orgr4mn": "\uEE34", // Four Minimae
    /*  */"orgr4sm": "\uEE35", // Four Semiminimae
    /*  */"orgr4fs": "\uEE36", // Four Fusae
    /*  */"orgr4sf": "\uEE37", // Four Semifusae
    /*  */"orgr5mn": "\uEE38", // Five Minimae
    /*  */"orgr5sm": "\uEE39", // Five Semiminimae
    /*  */"orgr5fs": "\uEE3A", // Five Fusae
    /*  */"orgr5sf": "\uEE3B", // Five Semifusae
    /*  */"orgr6mn": "\uEE3C", // Six Minimae
    /*  */"orgr6sm": "\uEE3D", // Six Semiminimae
    /*  */"orgr6fs": "\uEE3E", // Six Fusae
    /*  */"orgr6sf": "\uEE3F", // Six Semifusae
    /*  */"accmlw29lmcm": "\uEE50", // Combining lower by one 29-limit comma
    /*  */"accmrs29lmcm": "\uEE51", // Combining raise by one 29-limit comma
    /*  */"accmlw37qr": "\uEE52", // Combining lower by one 37-limit quartertone
    /*  */"accmrs37qr": "\uEE53", // Combining raise by one 37-limit quartertone
    /*  */"accmlw41cm": "\uEE54", // Combining lower by one 41-limit comma
    /*  */"accmrs41cm": "\uEE55", // Combining raise by one 41-limit comma
    /*  */"accmlw43cm": "\uEE56", // Combining lower by one 43-limit comma
    /*  */"accmrs43cm": "\uEE57", // Combining raise by one 43-limit comma
    /*  */"accmlw47qr": "\uEE58", // Combining lower by one 47-limit quartertone
    /*  */"accmrs47qr": "\uEE59", // Combining raise by one 47-limit quartertone
    /*  */"acupandnup": "\uEE60", // Accidental up
    /*  */"acupandndn": "\uEE61", // Accidental down
    /*  */"acupandnmr": "\uEE62", // Accidental more
    /*  */"acupandnls": "\uEE63", // Accidental less
    /*  */"achbqrtnhg": "\uEE64", // Quarter-tone higher (Alois H\u00e1ba)
    /*  */"achbflqrtnhg": "\uEE65", // Quarter-tone higher (Alois H\u00e1ba)
    /*  */"achbshthqrtnhg": "\uEE66", // Three quarter-tones higher (Alois H\u00e1ba)
    /*  */"achbqrtnlw": "\uEE67", // Quarter-tone lower (Alois H\u00e1ba)
    /*  */"achbshqrtnlw": "\uEE68", // Quarter-tone lower (Alois H\u00e1ba)
    /*  */"achbflthqrtnlw": "\uEE69", // Three quarter-tones lower (Alois H\u00e1ba)
    /*  */"swrdnhblfm": "\uEE70", // Swiss rudiments flam black notehead
    /*  */"swrdnhhffm": "\uEE71", // Swiss rudiments flam half (minim) notehead
    /*  */"swrdnhbldb": "\uEE72", // Swiss rudiments doubl\u00e9 black notehead
    /*  */"swrdnhhfdb": "\uEE73", // Swiss rudiments doubl\u00e9 half (minim) notehead
    /*  */"srdnbwtwbd": "\uEE80", // Down bow, towards body
    /*  */"srupbwtwbd": "\uEE81", // Up bow, towards body
    /*  */"srdnbwawfrbd": "\uEE82", // Down bow, away from body
    /*  */"srupbwawfrbd": "\uEE83", // Up bow, away from body
    /*  */"srdnbwbybr": "\uEE84", // Down bow, beyond bridge
    /*  */"srupbwbybr": "\uEE85", // Up bow, beyond bridge
    /*  */"srscprin": "\uEE86", // Scrape, parallel inward
    /*  */"srscprot": "\uEE87", // Scrape, parallel outward
    /*  */"srsccrcl": "\uEE88", // Scrape, circular clockwise
    /*  */"srsccrcn": "\uEE89", // Scrape, circular counter-clockwise
    /*  */"srtrchin": "\uEE8A", // Triple chop, inward
    /*  */"srtrchot": "\uEE8B", // Triple chop, outward
    /*  */"mnpp5": "\uEE90", // Mensural proportion 5
    /*  */"mnpp6": "\uEE91", // Mensural proportion 6
    /*  */"mnpp7": "\uEE92", // Mensural proportion 7
    /*  */"mnpp8": "\uEE93", // Mensural proportion 8
    /*  */"mnpp9": "\uEE94", // Mensural proportion 9
    /*  */"nhnnsn": "\uEEA0", // Sine notehead (Nancarrow)
    /*  */"nhcwthntsrwh": "\uEEA1", // 2/3 note (third note series, Cowell)
    /*  */"nhcwthntsrhf": "\uEEA2", // 1/3 note (third note series, Cowell)
    /*  */"nhcwthntsrbl": "\uEEA3", // 1/6 note (third note series, Cowell)
    /*  */"nhcwffntsrwh": "\uEEA4", // 4/5 note (fifth note series, Cowell)
    /*  */"nhcwffntsrhf": "\uEEA5", // 2/5 note (fifth note series, Cowell)
    /*  */"nhcwffntsrbl": "\uEEA6", // 1/5 note (fifth note series, Cowell)
    /*  */"nhcwsvntsrwh": "\uEEA7", // 4/7 note (seventh note series, Cowell)
    /*  */"nhcwsvntsrhf": "\uEEA8", // 2/7 note (seventh note series, Cowell)
    /*  */"nhcwsvntsrbl": "\uEEA9", // 1/7 note (seventh note series, Cowell)
    /*  */"nhcwnnntsrwh": "\uEEAA", // 8/9 note (ninth note series, Cowell)
    /*  */"nhcwnnntsrhf": "\uEEAB", // 4/9 note (ninth note series, Cowell)
    /*  */"nhcwnnntsrbl": "\uEEAC", // 2/9 note (ninth note series, Cowell)
    /*  */"nhcwelntsrwh": "\uEEAD", // 8/11 note (eleventh note series, Cowell)
    /*  */"nhcwelntsrhf": "\uEEAE", // 4/11 note (eleventh note series, Cowell)
    /*  */"nhcwelsrbl": "\uEEAF", // 2/11 note (eleventh note series, Cowell)
    /*  */"nhcwttntsrwh": "\uEEB0", // 8/13 note (thirteenth note series, Cowell)
    /*  */"nhcwttntsrhf": "\uEEB1", // 4/13 note (thirteenth note series, Cowell)
    /*  */"nhcwttntsrbl": "\uEEB2", // 2/13 note (thirteenth note series, Cowell)
    /*  */"nhcwftntsrwh": "\uEEB3", // 8/15 note (fifteenth note series, Cowell)
    /*  */"nhcwftntsrhf": "\uEEB4", // 4/15 note (fifteenth note series, Cowell)
    /*  */"nhcwftntsrbl": "\uEEB5", // 2/15 note (fifteenth note series, Cowell)
    /*  */"ntdiwh": "\uEEE0", // Di (whole note)
    /*  */"ntriwh": "\uEEE1", // Ri (whole note)
    /*  */"ntrawh": "\uEEE2", // Ra (whole note)
    /*  */"ntmewh": "\uEEE3", // Me (whole note)
    /*  */"ntfiwh": "\uEEE4", // Fi (whole note)
    /*  */"ntsewh": "\uEEE5", // Se (whole note)
    /*  */"ntliwh": "\uEEE6", // Li (whole note)
    /*  */"ntlewh": "\uEEE7", // Le (whole note)
    /*  */"nttewh": "\uEEE8", // Te (whole note)
    /*  */"ntdihf": "\uEEE9", // Di (half note)
    /*  */"ntrihf": "\uEEEA", // Ri (half note)
    /*  */"ntrahf": "\uEEEB", // Ra (half note)
    /*  */"ntmehf": "\uEEEC", // Me (half note)
    /*  */"ntfihf": "\uEEED", // Fi (half note)
    /*  */"ntsehf": "\uEEEE", // Se (half note)
    /*  */"ntlihf": "\uEEEF", // Li (half note)
    /*  */"ntlehf": "\uEEF0", // Le (half note)
    /*  */"nttehf": "\uEEF1", // Te (half note)
    /*  */"ntdibl": "\uEEF2", // Di (black note)
    /*  */"ntribl": "\uEEF3", // Ri (black note)
    /*  */"ntrabl": "\uEEF4", // Ra (black note)
    /*  */"ntmebl": "\uEEF5", // Me (black note)
    /*  */"ntfibl": "\uEEF6", // Fi (black note)
    /*  */"ntsebl": "\uEEF7", // Se (black note)
    /*  */"ntlibl": "\uEEF8", // Li (black note)
    /*  */"ntlebl": "\uEEF9", // Le (black note)
    /*  */"nttebl": "\uEEFA", // Te (black note)
    /*  */"scdg1": "\uEF00", // Scale degree 1
    /*  */"scdg2": "\uEF01", // Scale degree 2
    /*  */"scdg3": "\uEF02", // Scale degree 3
    /*  */"scdg4": "\uEF03", // Scale degree 4
    /*  */"scdg5": "\uEF04", // Scale degree 5
    /*  */"scdg6": "\uEF05", // Scale degree 6
    /*  */"scdg7": "\uEF06", // Scale degree 7
    /*  */"scdg8": "\uEF07", // Scale degree 8
    /*  */"scdg9": "\uEF08", // Scale degree 9
} as Record<Code & Word, Unicode & Word>

export {
    SMuFL_MAP,
}
