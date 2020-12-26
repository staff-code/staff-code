// tslint:disable

import {RecordKey} from "@sagittal/general"
import {Codeword, Symbol} from "./types"

const SMuFL_MAP: Record<RecordKey<Codeword>, Symbol> = {
    /* 	 */"chtb": {unicode: "\u0009"}, // character tabulation
    /* \n */"lnfd": {unicode: "\u000A"},    // line feed
    /*  */"lntb": {unicode: "\u000B"}, // line tabulation
    /*  */"frfd": {unicode: "\u000C"}, // form feed
    /*  */"crrt": {unicode: "\u000D"},  // carriage return
    /*  */"sp": {unicode: "\u0020"},    // space
    /*  */"nxln": {unicode: "\u0085"}, // next line
    /*   */"nobrsp": {unicode: "\u00A0"},   // no-break space
    /*   */"ogspmr": {unicode: "\u1680"},   // ogham space mark
    /*   */"lnsp": {unicode: "\u2028"}, // line separator
    /*   */"prsp": {unicode: "\u2029"}, // paragraph separator
    /*   */"nrnobrsp": {unicode: "\u202F"}, // narrow no-break space
    /*   */"mdmtsp": {unicode: "\u205F"},   // medium mathematical space
    /*  */"br": {unicode: "\uE000"},   // Brace
    /*  */"rvbr": {unicode: "\uE001"}, // Reversed brace
    /*  */"bk": {unicode: "\uE002"},   // Bracket
    /*  */"bktp": {unicode: "\uE003"}, // Bracket top
    /*  */"bkbt": {unicode: "\uE004"}, // Bracket bottom
    /*  */"rvbktp": {unicode: "\uE005"},   // Reversed bracket top
    /*  */"rvbkbt": {unicode: "\uE006"},   // Reversed bracket bottom
    /*  */"sydv": {unicode: "\uE007"}, // System divider
    /*  */"sydvln": {unicode: "\uE008"},   // Long system divider
    /*  */"sydvexln": {unicode: "\uE009"}, // Extra long system divider
    /*  */"spbrdv": {unicode: "\uE00A"},   // Split bar divider (bar spans a system break)
    /*  */"stdvardn": {unicode: "\uE00B"}, // Staff divide arrow down
    /*  */"stdvarup": {unicode: "\uE00C"}, // Staff divide arrow up
    /*  */"stdvarupdn": {unicode: "\uE00D"},   // Staff divide arrows
    /*  */"st1ln": {unicode: "\uE010"},    // 1-line staff
    /*  */"st2ln": {unicode: "\uE011"},    // 2-line staff
    /*  */"st3ln": {unicode: "\uE012"},    // 3-line staff
    /*  */"st4ln": {unicode: "\uE013"},    // 4-line staff
    /*  */"st5ln": {unicode: "\uE014", width: 0},  // 5-line staff
    /*  */"st6ln": {unicode: "\uE015"},    // 6-line staff
    /*  */"st1lnwd": {unicode: "\uE016"},  // 1-line staff (wide)
    /*  */"st2lnwd": {unicode: "\uE017"},  // 2-line staff (wide)
    /*  */"st3lnwd": {unicode: "\uE018"},  // 3-line staff (wide)
    /*  */"st4lnwd": {unicode: "\uE019"},  // 4-line staff (wide)
    /*  */"st5lnwd": {unicode: "\uE01A", width: 0},    // 5-line staff (wide)
    /*  */"st6lnwd": {unicode: "\uE01B"},  // 6-line staff (wide)
    /*  */"st1lnnr": {unicode: "\uE01C"},  // 1-line staff (narrow)
    /*  */"st2lnnr": {unicode: "\uE01D"},  // 2-line staff (narrow)
    /*  */"st3lnnr": {unicode: "\uE01E"},  // 3-line staff (narrow)
    /*  */"st4lnnr": {unicode: "\uE01F"},  // 4-line staff (narrow)
    /*  */"st5lnnr": {unicode: "\uE020", width: 0},    // 5-line staff (narrow)
    /*  */"st6lnnr": {unicode: "\uE021"},  // 6-line staff (narrow)
    /*  */"lgln": {unicode: "\uE022", width: 11},  // Leger line
    /*  */"lglnwd": {unicode: "\uE023"},   // Leger line (wide)
    /*  */"lglnnr": {unicode: "\uE024"},   // Leger line (narrow)
    /*  */"blsn": {unicode: "\uE030", width: 0},   // Single barline
    /*  */"bldb": {unicode: "\uE031", width: 3},   // Double barline
    /*  */"blfn": {unicode: "\uE032"}, // Final barline
    /*  */"blrvfn": {unicode: "\uE033"},   // Reverse final barline
    /*  */"blhv": {unicode: "\uE034"}, // Heavy barline
    /*  */"blhvhv": {unicode: "\uE035"},   // Heavy double barline
    /*  */"blds": {unicode: "\uE036"}, // Dashed barline
    /*  */"bldt": {unicode: "\uE037"}, // Dotted barline
    /*  */"blsh": {unicode: "\uE038"}, // Short barline
    /*  */"bltc": {unicode: "\uE039"}, // Tick barline
    /*  */"rplf": {unicode: "\uE040"}, // Left (start) repeat sign
    /*  */"rprt": {unicode: "\uE041"}, // Right (end) repeat sign
    /*  */"rprtlf": {unicode: "\uE042"},   // Right and left repeat sign
    /*  */"rpds": {unicode: "\uE043"}, // Repeat dots
    /*  */"rpdt": {unicode: "\uE044"}, // Single repeat dot
    /*  */"dlsg": {unicode: "\uE045"}, // Dal segno
    /*  */"dacp": {unicode: "\uE046"}, // Da capo
    /*  */"sg": {unicode: "\uE047"},   // Segno
    /*  */"cd": {unicode: "\uE048"},   // Coda
    /*  */"cdsq": {unicode: "\uE049"}, // Square coda
    /*  */"sgsr1": {unicode: "\uE04A"},    // Segno (serpent)
    /*  */"sgsr2": {unicode: "\uE04B"},    // Segno (serpent with vertical lines)
    /*  */"lfrpsm": {unicode: "\uE04C"},   // Left repeat sign within bar
    /*  */"rtrpsm": {unicode: "\uE04D"},   // Right repeat sign within bar
    /*  */"Gcl": {unicode: "\uE050", width: 22},   // G clef
    /*  */"Gcl15mb": {unicode: "\uE051"},  // G clef quindicesima bassa
    /*  */"Gcl8vb": {unicode: "\uE052"},   // G clef ottava bassa
    /*  */"Gcl8va": {unicode: "\uE053"},   // G clef ottava alta
    /*  */"Gcl15ma": {unicode: "\uE054"},  // G clef quindicesima alta
    /*  */"Gcl8vbol": {unicode: "\uE055"}, // G clef ottava bassa (old style)
    /*  */"Gcl8vbCcl": {unicode: "\uE056"},    // G clef ottava bassa with C clef
    /*  */"Gcl8vbpr": {unicode: "\uE057"}, // G clef, optionally ottava bassa
    /*  */"Gcllgnmbl": {unicode: "\uE058"},    // Combining G clef, number below
    /*  */"Gcllgnmab": {unicode: "\uE059"},    // Combining G clef, number above
    /*  */"Gclarup": {unicode: "\uE05A"},  // G clef, arrow up
    /*  */"Gclardn": {unicode: "\uE05B"},  // G clef, arrow down
    /*  */"Ccl": {unicode: "\uE05C", width: 22},   // C clef
    /*  */"Ccl8vb": {unicode: "\uE05D"},   // C clef ottava bassa
    /*  */"Cclarup": {unicode: "\uE05E"},  // C clef, arrow up
    /*  */"Cclardn": {unicode: "\uE05F"},  // C clef, arrow down
    /*  */"Cclsq": {unicode: "\uE060"},    // C clef (19th century)
    /*  */"Cclcm": {unicode: "\uE061"},    // Combining C clef
    /*  */"Fcl": {unicode: "\uE062", width: 22},   // F clef
    /*  */"Fcl15mb": {unicode: "\uE063"},  // F clef quindicesima bassa
    /*  */"Fcl8vb": {unicode: "\uE064"},   // F clef ottava bassa
    /*  */"Fcl8va": {unicode: "\uE065"},   // F clef ottava alta
    /*  */"Fcl15ma": {unicode: "\uE066"},  // F clef quindicesima alta
    /*  */"Fclarup": {unicode: "\uE067"},  // F clef, arrow up
    /*  */"Fclardn": {unicode: "\uE068"},  // F clef, arrow down
    /*  */"unprcl1": {unicode: "\uE069"},  // Unpitched percussion clef 1
    /*  */"unprcl2": {unicode: "\uE06A"},  // Unpitched percussion clef 2
    /*  */"smprcl1": {unicode: "\uE06B"},  // Semi-pitched percussion clef 1
    /*  */"smprcl2": {unicode: "\uE06C"},  // Semi-pitched percussion clef 2
    /*  */"6sttbcl": {unicode: "\uE06D"},  // 6-string tab clef
    /*  */"4sttbcl": {unicode: "\uE06E"},  // 4-string tab clef
    /*  */"sccl": {unicode: "\uE06F"}, // Sch\u00e4ffer clef
    /*  */"scprcl": {unicode: "\uE070"},   // Sch\u00e4ffer previous clef
    /*  */"scGcltoFcl": {unicode: "\uE071"},   // Sch\u00e4ffer G clef to F clef change
    /*  */"scFcltoGcl": {unicode: "\uE072"},   // Sch\u00e4ffer F clef to G clef change
    /*  */"Gclrv": {unicode: "\uE073"},    // Reversed G clef
    /*  */"Gcltr": {unicode: "\uE074"},    // Turned G clef
    /*  */"Cclrv": {unicode: "\uE075"},    // Reversed C clef
    /*  */"Fclrv": {unicode: "\uE076"},    // Reversed F clef
    /*  */"Fcltr": {unicode: "\uE077"},    // Turned F clef
    /*  */"brcl": {unicode: "\uE078"}, // Bridge clef
    /*  */"acdtcl": {unicode: "\uE079"},   // Diatonic accordion clef
    /*  */"Gclch": {unicode: "\uE07A"},    // G clef change
    /*  */"Cclch": {unicode: "\uE07B"},    // C clef change
    /*  */"Fclch": {unicode: "\uE07C"},    // F clef change
    /*  */"cl8": {unicode: "\uE07D"},  // 8 for clefs
    /*  */"cl15": {unicode: "\uE07E"}, // 15 for clefs
    /*  */"clchcm": {unicode: "\uE07F"},   // Combining clef change
    /*  */"tmsg0": {unicode: "\uE080", width: 15}, // Time signature 0
    /*  */"tmsg1": {unicode: "\uE081", width: 15}, // Time signature 1
    /*  */"tmsg2": {unicode: "\uE082", width: 15}, // Time signature 2
    /*  */"tmsg3": {unicode: "\uE083", width: 15}, // Time signature 3
    /*  */"tmsg4": {unicode: "\uE084", width: 15}, // Time signature 4
    /*  */"tmsg5": {unicode: "\uE085", width: 15}, // Time signature 5
    /*  */"tmsg6": {unicode: "\uE086", width: 15}, // Time signature 6
    /*  */"tmsg7": {unicode: "\uE087", width: 15}, // Time signature 7
    /*  */"tmsg8": {unicode: "\uE088", width: 15}, // Time signature 8
    /*  */"tmsg9": {unicode: "\uE089", width: 15}, // Time signature 9
    /*  */"tmsgcn": {unicode: "\uE08A", width: 15},    // Common time
    /*  */"tmsgctcn": {unicode: "\uE08B"}, // Cut time
    /*  */"tmsgpl": {unicode: "\uE08C"},   // Time signature +
    /*  */"tmsgplsm": {unicode: "\uE08D"}, // Time signature + (for numerators)
    /*  */"tmsgfrsl": {unicode: "\uE08E"}, // Time signature fraction slash
    /*  */"tmsgeq": {unicode: "\uE08F"},   // Time signature equals
    /*  */"tmsgmn": {unicode: "\uE090"},   // Time signature minus
    /*  */"tmsgml": {unicode: "\uE091"},   // Time signature multiply
    /*  */"tmsgprlfsm": {unicode: "\uE092"},   // Left parenthesis for numerator only
    /*  */"tmsgprrtsm": {unicode: "\uE093"},   // Right parenthesis for numerator only
    /*  */"tmsgprlf": {unicode: "\uE094"}, // Left parenthesis for whole time signature
    /*  */"tmsgprrt": {unicode: "\uE095"}, // Right parenthesis for whole time signature
    /*  */"tmsgcm": {unicode: "\uE096"},   // Time signature comma
    /*  */"tmsgfrqr": {unicode: "\uE097"}, // Time signature fraction \u00bc
    /*  */"tmsgfrhf": {unicode: "\uE098"}, // Time signature fraction \u00bd
    /*  */"tmsgfrthqr": {unicode: "\uE099"},   // Time signature fraction \u00be
    /*  */"tmsgfronth": {unicode: "\uE09A"},   // Time signature fraction \u2153
    /*  */"tmsgfrtwth": {unicode: "\uE09B"},   // Time signature fraction \u2154
    /*  */"tmsgX": {unicode: "\uE09C"},    // Open time signature
    /*  */"tmsgoppn": {unicode: "\uE09D"}, // Open time signature (Penderecki)
    /*  */"tmsgcmnm": {unicode: "\uE09E", width: 0},   // Control character for numerator digit
    /*  */"tmsgcmdn": {unicode: "\uE09F", width: 0},   // Control character for denominator digit
    /*  */"nhdbwh": {unicode: "\uE0A0"},   // Double whole (breve) notehead
    /*  */"nhdbwhsq": {unicode: "\uE0A1"}, // Double whole (breve) notehead (square)
    /*  */"nhwh": {unicode: "\uE0A2"}, // Whole (semibreve) notehead
    /*  */"nhhf": {unicode: "\uE0A3"}, // Half (minim) notehead
    /*  */"nhbl": {unicode: "\uE0A4"}, // Black notehead
    /*  */"nhnl": {unicode: "\uE0A5"}, // Null notehead
    /*  */"nhXdbwh": {unicode: "\uE0A6"},  // X notehead double whole
    /*  */"nhXwh": {unicode: "\uE0A7"},    // X notehead whole
    /*  */"nhXhf": {unicode: "\uE0A8"},    // X notehead half
    /*  */"nhXbl": {unicode: "\uE0A9"},    // X notehead black
    /*  */"nhXor": {unicode: "\uE0AA"},    // Ornate X notehead
    /*  */"nhXorel": {unicode: "\uE0AB"},  // Ornate X notehead in ellipse
    /*  */"nhpldbwh": {unicode: "\uE0AC"}, // Plus notehead double whole
    /*  */"nhplwh": {unicode: "\uE0AD"},   // Plus notehead whole
    /*  */"nhplhf": {unicode: "\uE0AE"},   // Plus notehead half
    /*  */"nhplbl": {unicode: "\uE0AF"},   // Plus notehead black
    /*  */"nhcrXdbwh": {unicode: "\uE0B0"},    // Circle X double whole
    /*  */"nhcrXwh": {unicode: "\uE0B1"},  // Circle X whole
    /*  */"nhcrXhf": {unicode: "\uE0B2"},  // Circle X half
    /*  */"nhcrX": {unicode: "\uE0B3"},    // Circle X notehead
    /*  */"nhdbwhwtX": {unicode: "\uE0B4"},    // Double whole notehead with X
    /*  */"nhwhwtX": {unicode: "\uE0B5"},  // Whole notehead with X
    /*  */"nhhfwtX": {unicode: "\uE0B6"},  // Half notehead with X
    /*  */"nhvdwtX": {unicode: "\uE0B7"},  // Void notehead with X
    /*  */"nhsqwt": {unicode: "\uE0B8"},   // Square notehead white
    /*  */"nhsqbl": {unicode: "\uE0B9"},   // Square notehead black
    /*  */"nhtrupdbwh": {unicode: "\uE0BA"},   // Triangle notehead up double whole
    /*  */"nhtrupwh": {unicode: "\uE0BB"}, // Triangle notehead up whole
    /*  */"nhtruphf": {unicode: "\uE0BC"}, // Triangle notehead up half
    /*  */"nhtrupwt": {unicode: "\uE0BD"}, // Triangle notehead up white
    /*  */"nhtrupbl": {unicode: "\uE0BE"}, // Triangle notehead up black
    /*  */"nhtrlfwt": {unicode: "\uE0BF"}, // Triangle notehead left white
    /*  */"nhtrlfbl": {unicode: "\uE0C0"}, // Triangle notehead left black
    /*  */"nhtrrtwt": {unicode: "\uE0C1"}, // Triangle notehead right white
    /*  */"nhtrrtbl": {unicode: "\uE0C2"}, // Triangle notehead right black
    /*  */"nhtrdndbwh": {unicode: "\uE0C3"},   // Triangle notehead down double whole
    /*  */"nhtrdnwh": {unicode: "\uE0C4"}, // Triangle notehead down whole
    /*  */"nhtrdnhf": {unicode: "\uE0C5"}, // Triangle notehead down half
    /*  */"nhtrdnwt": {unicode: "\uE0C6"}, // Triangle notehead down white
    /*  */"nhtrdnbl": {unicode: "\uE0C7"}, // Triangle notehead down black
    /*  */"nhtruprtwt": {unicode: "\uE0C8"},   // Triangle notehead up right white
    /*  */"nhtruprtbl": {unicode: "\uE0C9"},   // Triangle notehead up right black
    /*  */"nhmnwt": {unicode: "\uE0CA"},   // Moon notehead white
    /*  */"nhmnbl": {unicode: "\uE0CB"},   // Moon notehead black
    /*  */"nhtrrndnwt": {unicode: "\uE0CC"},   // Triangle-round notehead down white
    /*  */"nhtrrndnbl": {unicode: "\uE0CD"},   // Triangle-round notehead down black
    /*  */"nhpr": {unicode: "\uE0CE"}, // Parenthesis notehead
    /*  */"nhslbl1": {unicode: "\uE0CF"},  // Slashed black notehead (bottom left to top right)
    /*  */"nhslbl2": {unicode: "\uE0D0"},  // Slashed black notehead (top left to bottom right)
    /*  */"nhslhf1": {unicode: "\uE0D1"},  // Slashed half notehead (bottom left to top right)
    /*  */"nhslhf2": {unicode: "\uE0D2"},  // Slashed half notehead (top left to bottom right)
    /*  */"nhslwh1": {unicode: "\uE0D3"},  // Slashed whole notehead (bottom left to top right)
    /*  */"nhslwh2": {unicode: "\uE0D4"},  // Slashed whole notehead (top left to bottom right)
    /*  */"nhsldbwh1": {unicode: "\uE0D5"},    // Slashed double whole notehead (bottom left to top right)
    /*  */"nhsldbwh2": {unicode: "\uE0D6"},    // Slashed double whole notehead (top left to bottom right)
    /*  */"nhdmdbwh": {unicode: "\uE0D7"}, // Diamond double whole notehead
    /*  */"nhdmwh": {unicode: "\uE0D8"},   // Diamond whole notehead
    /*  */"nhdmhf": {unicode: "\uE0D9"},   // Diamond half notehead
    /*  */"nhdmhfwd": {unicode: "\uE0DA"}, // Diamond half notehead (wide)
    /*  */"nhdmbl": {unicode: "\uE0DB"},   // Diamond black notehead
    /*  */"nhdmblwd": {unicode: "\uE0DC"}, // Diamond black notehead (wide)
    /*  */"nhdmwt": {unicode: "\uE0DD"},   // Diamond white notehead
    /*  */"nhdmwtwd": {unicode: "\uE0DE"}, // Diamond white notehead (wide)
    /*  */"nhdmdbwhol": {unicode: "\uE0DF"},   // Diamond double whole notehead (old)
    /*  */"nhdmwhol": {unicode: "\uE0E0"}, // Diamond whole notehead (old)
    /*  */"nhdmhfol": {unicode: "\uE0E1"}, // Diamond half notehead (old)
    /*  */"nhdmblol": {unicode: "\uE0E2"}, // Diamond black notehead (old)
    /*  */"nhdmhffl": {unicode: "\uE0E3"}, // Half-filled diamond notehead
    /*  */"nhcrbl": {unicode: "\uE0E4"},   // Circled black notehead
    /*  */"nhcrhf": {unicode: "\uE0E5"},   // Circled half notehead
    /*  */"nhcrwh": {unicode: "\uE0E6"},   // Circled whole notehead
    /*  */"nhcrdbwh": {unicode: "\uE0E7"}, // Circled double whole notehead
    /*  */"nhcrbllg": {unicode: "\uE0E8"}, // Black notehead in large circle
    /*  */"nhcrhflg": {unicode: "\uE0E9"}, // Half notehead in large circle
    /*  */"nhcrwhlg": {unicode: "\uE0EA"}, // Whole notehead in large circle
    /*  */"nhcrdbwhlg": {unicode: "\uE0EB"},   // Double whole notehead in large circle
    /*  */"nhcrXlg": {unicode: "\uE0EC"},  // Cross notehead in large circle
    /*  */"nhlgarupdbwh": {unicode: "\uE0ED"}, // Large arrow up (highest pitch) double whole notehead
    /*  */"nhlgarupwh": {unicode: "\uE0EE"},   // Large arrow up (highest pitch) whole notehead
    /*  */"nhlgaruphf": {unicode: "\uE0EF"},   // Large arrow up (highest pitch) half notehead
    /*  */"nhlgarupbl": {unicode: "\uE0F0"},   // Large arrow up (highest pitch) black notehead
    /*  */"nhlgardndbwh": {unicode: "\uE0F1"}, // Large arrow down (lowest pitch) double whole notehead
    /*  */"nhlgardnwh": {unicode: "\uE0F2"},   // Large arrow down (lowest pitch) whole notehead
    /*  */"nhlgardnhf": {unicode: "\uE0F3"},   // Large arrow down (lowest pitch) half notehead
    /*  */"nhlgardnbl": {unicode: "\uE0F4"},   // Large arrow down (lowest pitch) black notehead
    /*  */"nhprlf": {unicode: "\uE0F5"},   // Opening parenthesis
    /*  */"nhprrt": {unicode: "\uE0F6"},   // Closing parenthesis
    /*  */"nhcrsl": {unicode: "\uE0F7"},   // Circle slash notehead
    /*  */"nhhvX": {unicode: "\uE0F8"},    // Heavy X notehead
    /*  */"nhhvXht": {unicode: "\uE0F9"},  // Heavy X with hat notehead
    /*  */"nhwhfl": {unicode: "\uE0FA"},   // Filled whole (semibreve) notehead
    /*  */"nhhffl": {unicode: "\uE0FB"},   // Filled half (minim) notehead
    /*  */"nhdmop": {unicode: "\uE0FC"},   // Open diamond notehead
    /*  */"nhslvren": {unicode: "\uE100"}, // Slash with vertical ends
    /*  */"nhslhren": {unicode: "\uE101"}, // Slash with horizontal ends
    /*  */"nhslwtwh": {unicode: "\uE102"}, // White slash whole
    /*  */"nhslwthf": {unicode: "\uE103"}, // White slash half
    /*  */"nhsldmwt": {unicode: "\uE104"}, // Large white diamond
    /*  */"nhslvrensm": {unicode: "\uE105"},   // Small slash with vertical ends
    /*  */"nhslX": {unicode: "\uE106"},    // Large X notehead
    /*  */"nhslvrenmt": {unicode: "\uE107"},   // Muted slash with vertical ends
    /*  */"nhslhrenmt": {unicode: "\uE108"},   // Muted slash with horizontal ends
    /*  */"nhslwtmt": {unicode: "\uE109"}, // Muted white slash
    /*  */"nhslwtdbwh": {unicode: "\uE10A"},   // White slash double whole
    /*  */"nhrnbllg": {unicode: "\uE110"}, // Large round black notehead
    /*  */"nhrnwtlg": {unicode: "\uE111"}, // Large round white notehead
    /*  */"nhrnwtwtdtlg": {unicode: "\uE112"}, // Large round white notehead with dot
    /*  */"nhrnbl": {unicode: "\uE113"},   // Round black notehead
    /*  */"nhrnwt": {unicode: "\uE114"},   // Round white notehead
    /*  */"nhrnwtwtdt": {unicode: "\uE115"},   // Round white notehead with dot
    /*  */"nhrnblsllg": {unicode: "\uE116"},   // Large round black notehead, slashed
    /*  */"nhrnwtsllg": {unicode: "\uE117"},   // Large round white notehead, slashed
    /*  */"nhrnblsl": {unicode: "\uE118"}, // Round black notehead, slashed
    /*  */"nhrnwtsl": {unicode: "\uE119"}, // Round white notehead, slashed
    /*  */"nhsqbllg": {unicode: "\uE11A"}, // Large square black notehead
    /*  */"nhsqblwt": {unicode: "\uE11B"}, // Large square white notehead
    /*  */"nhrnbldbsl": {unicode: "\uE11C"},   // Round black notehead, double slashed
    /*  */"nhrnwtdbsl": {unicode: "\uE11D"},   // Round white notehead, double slashed
    /*  */"nhclsqwt": {unicode: "\uE120"}, // Cluster notehead white (square)
    /*  */"nhclsqbl": {unicode: "\uE121"}, // Cluster notehead black (square)
    /*  */"nhclrnwt": {unicode: "\uE122"}, // Cluster notehead white (round)
    /*  */"nhclrnbl": {unicode: "\uE123"}, // Cluster notehead black (round)
    /*  */"nhcldbwh2": {unicode: "\uE124"},    // Double whole note cluster, 2nd
    /*  */"nhclwh2": {unicode: "\uE125"},  // Whole note cluster, 2nd
    /*  */"nhclhf2": {unicode: "\uE126"},  // Half note cluster, 2nd
    /*  */"nhclqr2": {unicode: "\uE127"},  // Quarter note cluster, 2nd
    /*  */"nhcldbwh3": {unicode: "\uE128"},    // Double whole note cluster, 3rd
    /*  */"nhclwh3": {unicode: "\uE129"},  // Whole note cluster, 3rd
    /*  */"nhclhf3": {unicode: "\uE12A"},  // Half note cluster, 3rd
    /*  */"nhclqr3": {unicode: "\uE12B"},  // Quarter note cluster, 3rd
    /*  */"nhcldbwhtp": {unicode: "\uE12C"},   // Combining double whole note cluster, top
    /*  */"nhcldbwhmd": {unicode: "\uE12D"},   // Combining double whole note cluster, middle
    /*  */"nhcldbwhbt": {unicode: "\uE12E"},   // Combining double whole note cluster, bottom
    /*  */"nhclwhtp": {unicode: "\uE12F"}, // Combining whole note cluster, top
    /*  */"nhclwhmd": {unicode: "\uE130"}, // Combining whole note cluster, middle
    /*  */"nhclwhbt": {unicode: "\uE131"}, // Combining whole note cluster, bottom
    /*  */"nhclhftp": {unicode: "\uE132"}, // Combining half note cluster, top
    /*  */"nhclhfmd": {unicode: "\uE133"}, // Combining half note cluster, middle
    /*  */"nhclhfbt": {unicode: "\uE134"}, // Combining half note cluster, bottom
    /*  */"nhclqrtp": {unicode: "\uE135"}, // Combining quarter note cluster, top
    /*  */"nhclqrmd": {unicode: "\uE136"}, // Combining quarter note cluster, middle
    /*  */"nhclqrbt": {unicode: "\uE137"}, // Combining quarter note cluster, bottom
    /*  */"nhdmclwt2": {unicode: "\uE138"},    // White diamond cluster, 2nd
    /*  */"nhdmclbl2": {unicode: "\uE139"},    // Black diamond cluster, 2nd
    /*  */"nhdmclwt3": {unicode: "\uE13A"},    // White diamond cluster, 3rd
    /*  */"nhdmclbl3": {unicode: "\uE13B"},    // Black diamond cluster, 3rd
    /*  */"nhdmclwttp": {unicode: "\uE13C"},   // Combining white diamond cluster, top
    /*  */"nhdmclwtmd": {unicode: "\uE13D"},   // Combining white diamond cluster, middle
    /*  */"nhdmclwtbt": {unicode: "\uE13E"},   // Combining white diamond cluster, bottom
    /*  */"nhdmclbltp": {unicode: "\uE13F"},   // Combining black diamond cluster, top
    /*  */"nhdmclblmd": {unicode: "\uE140"},   // Combining black diamond cluster, middle
    /*  */"nhdmclblbt": {unicode: "\uE141"},   // Combining black diamond cluster, bottom
    /*  */"nhrcclbltp": {unicode: "\uE142"},   // Combining black rectangular cluster, top
    /*  */"nhrcclblmd": {unicode: "\uE143"},   // Combining black rectangular cluster, middle
    /*  */"nhrcclblbt": {unicode: "\uE144"},   // Combining black rectangular cluster, bottom
    /*  */"nhrcclwttp": {unicode: "\uE145"},   // Combining white rectangular cluster, top
    /*  */"nhrcclwtmd": {unicode: "\uE146"},   // Combining white rectangular cluster, middle
    /*  */"nhrcclwtbt": {unicode: "\uE147"},   // Combining white rectangular cluster, bottom
    /*  */"ntdowh": {unicode: "\uE150"},   // Do (whole note)
    /*  */"ntrewh": {unicode: "\uE151"},   // Re (whole note)
    /*  */"ntmiwh": {unicode: "\uE152"},   // Mi (whole note)
    /*  */"ntfawh": {unicode: "\uE153"},   // Fa (whole note)
    /*  */"ntsowh": {unicode: "\uE154"},   // So (whole note)
    /*  */"ntlawh": {unicode: "\uE155"},   // La (whole note)
    /*  */"nttiwh": {unicode: "\uE156"},   // Ti (whole note)
    /*  */"ntsiwh": {unicode: "\uE157"},   // Si (whole note)
    /*  */"ntdohf": {unicode: "\uE158"},   // Do (half note)
    /*  */"ntrehf": {unicode: "\uE159"},   // Re (half note)
    /*  */"ntmihf": {unicode: "\uE15A"},   // Mi (half note)
    /*  */"ntfahf": {unicode: "\uE15B"},   // Fa (half note)
    /*  */"ntsohf": {unicode: "\uE15C"},   // So (half note)
    /*  */"ntlahf": {unicode: "\uE15D"},   // La (half note)
    /*  */"nttihf": {unicode: "\uE15E"},   // Ti (half note)
    /*  */"ntsihf": {unicode: "\uE15F"},   // Si (half note)
    /*  */"ntdobl": {unicode: "\uE160"},   // Do (black note)
    /*  */"ntrebl": {unicode: "\uE161"},   // Re (black note)
    /*  */"ntmibl": {unicode: "\uE162"},   // Mi (black note)
    /*  */"ntfabl": {unicode: "\uE163"},   // Fa (black note)
    /*  */"ntsobl": {unicode: "\uE164"},   // So (black note)
    /*  */"ntlabl": {unicode: "\uE165"},   // La (black note)
    /*  */"nttibl": {unicode: "\uE166"},   // Ti (black note)
    /*  */"ntsibl": {unicode: "\uE167"},   // Si (black note)
    /*  */"ntAflwh": {unicode: "\uE168"},  // A flat (whole note)
    /*  */"ntAwh": {unicode: "\uE169"},    // A (whole note)
    /*  */"ntAshwh": {unicode: "\uE16A"},  // A sharp (whole note)
    /*  */"ntBflwh": {unicode: "\uE16B"},  // B flat (whole note)
    /*  */"ntBwh": {unicode: "\uE16C"},    // B (whole note)
    /*  */"ntBshwh": {unicode: "\uE16D"},  // B sharp (whole note)
    /*  */"ntCflwh": {unicode: "\uE16E"},  // C flat (whole note)
    /*  */"ntCwh": {unicode: "\uE16F"},    // C (whole note)
    /*  */"ntCshwh": {unicode: "\uE170"},  // C sharp (whole note)
    /*  */"ntDflwh": {unicode: "\uE171"},  // D flat (whole note)
    /*  */"ntDwh": {unicode: "\uE172"},    // D (whole note)
    /*  */"ntDshwh": {unicode: "\uE173"},  // D sharp (whole note)
    /*  */"ntEflwh": {unicode: "\uE174"},  // E flat (whole note)
    /*  */"ntEwh": {unicode: "\uE175"},    // E (whole note)
    /*  */"ntEshwh": {unicode: "\uE176"},  // E sharp (whole note)
    /*  */"ntFflwh": {unicode: "\uE177"},  // F flat (whole note)
    /*  */"ntFwh": {unicode: "\uE178"},    // F (whole note)
    /*  */"ntFshwh": {unicode: "\uE179"},  // F sharp (whole note)
    /*  */"ntGflwh": {unicode: "\uE17A"},  // G flat (whole note)
    /*  */"ntGwh": {unicode: "\uE17B"},    // G (whole note)
    /*  */"ntGshwh": {unicode: "\uE17C"},  // G sharp (whole note)
    /*  */"ntHwh": {unicode: "\uE17D"},    // H (whole note)
    /*  */"ntHshwh": {unicode: "\uE17E"},  // H sharp (whole note)
    /*  */"ntAflhf": {unicode: "\uE17F"},  // A flat (half note)
    /*  */"ntAhf": {unicode: "\uE180"},    // A (half note)
    /*  */"ntAshhf": {unicode: "\uE181"},  // A sharp (half note)
    /*  */"ntBflhf": {unicode: "\uE182"},  // B flat (half note)
    /*  */"ntBhf": {unicode: "\uE183"},    // B (half note)
    /*  */"ntBshhf": {unicode: "\uE184"},  // B sharp (half note)
    /*  */"ntCflhf": {unicode: "\uE185"},  // C flat (half note)
    /*  */"ntChf": {unicode: "\uE186"},    // C (half note)
    /*  */"ntCshhf": {unicode: "\uE187"},  // C sharp (half note)
    /*  */"ntDflhf": {unicode: "\uE188"},  // D flat (half note)
    /*  */"ntDhf": {unicode: "\uE189"},    // D (half note)
    /*  */"ntDshhf": {unicode: "\uE18A"},  // D sharp (half note)
    /*  */"ntEflhf": {unicode: "\uE18B"},  // E flat (half note)
    /*  */"ntEhf": {unicode: "\uE18C"},    // E (half note)
    /*  */"ntEshhf": {unicode: "\uE18D"},  // E sharp (half note)
    /*  */"ntFflhf": {unicode: "\uE18E"},  // F flat (half note)
    /*  */"ntFhf": {unicode: "\uE18F"},    // F (half note)
    /*  */"ntFshhf": {unicode: "\uE190"},  // F sharp (half note)
    /*  */"ntGflhf": {unicode: "\uE191"},  // G flat (half note)
    /*  */"ntGhf": {unicode: "\uE192"},    // G (half note)
    /*  */"ntGshhf": {unicode: "\uE193"},  // G sharp (half note)
    /*  */"ntHhf": {unicode: "\uE194"},    // H (half note)
    /*  */"ntHshhf": {unicode: "\uE195"},  // H sharp (half note)
    /*  */"ntAflbl": {unicode: "\uE196"},  // A flat (black note)
    /*  */"ntAbl": {unicode: "\uE197"},    // A (black note)
    /*  */"ntAshbl": {unicode: "\uE198"},  // A sharp (black note)
    /*  */"ntBflbl": {unicode: "\uE199"},  // B flat (black note)
    /*  */"ntBbl": {unicode: "\uE19A"},    // B (black note)
    /*  */"ntBshbl": {unicode: "\uE19B"},  // B sharp (black note)
    /*  */"ntCflbl": {unicode: "\uE19C"},  // C flat (black note)
    /*  */"ntCbl": {unicode: "\uE19D"},    // C (black note)
    /*  */"ntCshbl": {unicode: "\uE19E"},  // C sharp (black note)
    /*  */"ntDflbl": {unicode: "\uE19F"},  // D flat (black note)
    /*  */"ntDbl": {unicode: "\uE1A0"},    // D (black note)
    /*  */"ntDshbl": {unicode: "\uE1A1"},  // D sharp (black note)
    /*  */"ntEflbl": {unicode: "\uE1A2"},  // E flat (black note)
    /*  */"ntEbl": {unicode: "\uE1A3"},    // E (black note)
    /*  */"ntEshbl": {unicode: "\uE1A4"},  // E sharp (black note)
    /*  */"ntFflbl": {unicode: "\uE1A5"},  // F flat (black note)
    /*  */"ntFbl": {unicode: "\uE1A6"},    // F (black note)
    /*  */"ntFshbl": {unicode: "\uE1A7"},  // F sharp (black note)
    /*  */"ntGflbl": {unicode: "\uE1A8"},  // G flat (black note)
    /*  */"ntGbl": {unicode: "\uE1A9"},    // G (black note)
    /*  */"ntGshbl": {unicode: "\uE1AA"},  // G sharp (black note)
    /*  */"ntHbl": {unicode: "\uE1AB"},    // H (black note)
    /*  */"ntHshbl": {unicode: "\uE1AC"},  // H sharp (black note)
    /*  */"ntemwh": {unicode: "\uE1AD"},   // Empty whole note
    /*  */"ntemhf": {unicode: "\uE1AE"},   // Empty half note
    /*  */"ntembl": {unicode: "\uE1AF"},   // Empty black note
    /*  */"ntshrnwt": {unicode: "\uE1B0"}, // Round white (4-shape sol; 7-shape so)
    /*  */"ntshrnbl": {unicode: "\uE1B1"}, // Round black (4-shape sol; 7-shape so)
    /*  */"ntshsqwt": {unicode: "\uE1B2"}, // Square white (4-shape la; Aikin 7-shape la)
    /*  */"ntshsqbl": {unicode: "\uE1B3"}, // Square black (4-shape la; Aikin 7-shape la)
    /*  */"ntshtrrtwt": {unicode: "\uE1B4"},   // Triangle right white (stem down; 4-shape fa; 7-shape fa)
    /*  */"ntshtrrtbl": {unicode: "\uE1B5"},   // Triangle right black (stem down; 4-shape fa; 7-shape fa)
    /*  */"ntshtrlfwt": {unicode: "\uE1B6"},   // Triangle left white (stem up; 4-shape fa; 7-shape fa)
    /*  */"ntshtrlfbl": {unicode: "\uE1B7"},   // Triangle left black (stem up; 4-shape fa; 7-shape fa)
    /*  */"ntshdmwt": {unicode: "\uE1B8"}, // Diamond white (4-shape mi; 7-shape mi)
    /*  */"ntshdmbl": {unicode: "\uE1B9"}, // Diamond black (4-shape mi; 7-shape mi)
    /*  */"ntshtrupwt": {unicode: "\uE1BA"},   // Triangle up white (Aikin 7-shape do)
    /*  */"ntshtrupbl": {unicode: "\uE1BB"},   // Triangle up black (Aikin 7-shape do)
    /*  */"ntshmnwt": {unicode: "\uE1BC"}, // Moon white (Aikin 7-shape re)
    /*  */"ntshmnbl": {unicode: "\uE1BD"}, // Moon black (Aikin 7-shape re)
    /*  */"ntshtrrnwt": {unicode: "\uE1BE"},   // Triangle-round white (Aikin 7-shape ti)
    /*  */"ntshtrrnbl": {unicode: "\uE1BF"},   // Triangle-round black (Aikin 7-shape ti)
    /*  */"ntshkswt": {unicode: "\uE1C0"}, // Inverted keystone white (Walker 7-shape do)
    /*  */"ntshksbl": {unicode: "\uE1C1"}, // Inverted keystone black (Walker 7-shape do)
    /*  */"ntshqrmnwt": {unicode: "\uE1C2"},   // Quarter moon white (Walker 7-shape re)
    /*  */"ntshqrmnbl": {unicode: "\uE1C3"},   // Quarter moon black (Walker 7-shape re)
    /*  */"ntshistrwt": {unicode: "\uE1C4"},   // Isosceles triangle white (Walker 7-shape ti)
    /*  */"ntshistrbl": {unicode: "\uE1C5"},   // Isosceles triangle black (Walker 7-shape ti)
    /*  */"ntshmnlfwt": {unicode: "\uE1C6"},   // Moon left white (Funk 7-shape do)
    /*  */"ntshmnlfbl": {unicode: "\uE1C7"},   // Moon left black (Funk 7-shape do)
    /*  */"ntshahlfwt": {unicode: "\uE1C8"},   // Arrowhead left white (Funk 7-shape re)
    /*  */"ntshahlfbl": {unicode: "\uE1C9"},   // Arrowhead left black (Funk 7-shape re)
    /*  */"ntshtrrnlfwt": {unicode: "\uE1CA"}, // Triangle-round left white (Funk 7-shape ti)
    /*  */"ntshtrrnlfbl": {unicode: "\uE1CB"}, // Triangle-round left black (Funk 7-shape ti)
    /*  */"ntdbwh": {unicode: "\uE1D0", width: 21},    // Double whole note (breve)
    /*  */"ntdbwhsq": {unicode: "\uE1D1"}, // Double whole note (square)
    /*  */"ntwh": {unicode: "\uE1D2", width: 11},  // Whole note (semibreve)
    /*  */"nthfup": {unicode: "\uE1D3", width: 11},    // Half note (minim) stem up
    /*  */"nthfdn": {unicode: "\uE1D4", width: 11},    // Half note (minim) stem down
    /*  */"ntqrup": {unicode: "\uE1D5", width: 11},    // Quarter note (crotchet) stem up
    /*  */"ntqrdn": {unicode: "\uE1D6", width: 11},    // Quarter note (crotchet) stem down
    /*  */"nt8up": {unicode: "\uE1D7", width: 19}, // Eighth note (quaver) stem up
    /*  */"nt8dn": {unicode: "\uE1D8", width: 11}, // Eighth note (quaver) stem down
    /*  */"nt16up": {unicode: "\uE1D9", width: 19},    // 16th note (semiquaver) stem up
    /*  */"nt16dn": {unicode: "\uE1DA", width: 11},    // 16th note (semiquaver) stem down
    /*  */"nt32up": {unicode: "\uE1DB"},   // 32nd note (demisemiquaver) stem up
    /*  */"nt32dn": {unicode: "\uE1DC"},   // 32nd note (demisemiquaver) stem down
    /*  */"nt64up": {unicode: "\uE1DD"},   // 64th note (hemidemisemiquaver) stem up
    /*  */"nt64dn": {unicode: "\uE1DE"},   // 64th note (hemidemisemiquaver) stem down
    /*  */"nt128up": {unicode: "\uE1DF"},  // 128th note (semihemidemisemiquaver) stem up
    /*  */"nt128dn": {unicode: "\uE1E0"},  // 128th note (semihemidemisemiquaver) stem down
    /*  */"nt256up": {unicode: "\uE1E1"},  // 256th note (demisemihemidemisemiquaver) stem up
    /*  */"nt256dn": {unicode: "\uE1E2"},  // 256th note (demisemihemidemisemiquaver) stem down
    /*  */"nt512up": {unicode: "\uE1E3"},  // 512th note (hemidemisemihemidemisemiquaver) stem up
    /*  */"nt512dn": {unicode: "\uE1E4"},  // 512th note (hemidemisemihemidemisemiquaver) stem down
    /*  */"nt1024up": {unicode: "\uE1E5"}, // 1024th note (semihemidemisemihemidemisemiquaver) stem up
    /*  */"nt1024dn": {unicode: "\uE1E6"}, // 1024th note (semihemidemisemihemidemisemiquaver) stem down
    /*  */"agdt": {unicode: "\uE1E7"}, // Augmentation dot
    /*  */"txblntshsm": {unicode: "\uE1F0"},   // Black note, short stem
    /*  */"txblntlnsm": {unicode: "\uE1F1"},   // Black note, long stem
    /*  */"txblntfr8shsm": {unicode: "\uE1F2"},    // Black note, fractional 8th beam, short stem
    /*  */"txblntfr8lnsm": {unicode: "\uE1F3"},    // Black note, fractional 8th beam, long stem
    /*  */"txblntfr16shsm": {unicode: "\uE1F4"},   // Black note, fractional 16th beam, short stem
    /*  */"txblntfr16lnsm": {unicode: "\uE1F5"},   // Black note, fractional 16th beam, long stem
    /*  */"txblntfr32lnsm": {unicode: "\uE1F6"},   // Black note, fractional 32nd beam, long stem
    /*  */"txcn8bmshsm": {unicode: "\uE1F7"},  // Continuing 8th beam for short stem
    /*  */"txcn8bmlnsm": {unicode: "\uE1F8"},  // Continuing 8th beam for long stem
    /*  */"txcn16bmshsm": {unicode: "\uE1F9"}, // Continuing 16th beam for short stem
    /*  */"txcn16bmlnsm": {unicode: "\uE1FA"}, // Continuing 16th beam for long stem
    /*  */"txcn32bmlnsm": {unicode: "\uE1FB"}, // Continuing 32nd beam for long stem
    /*  */"txagdt": {unicode: "\uE1FC"},   // Augmentation dot
    /*  */"txti": {unicode: "\uE1FD"}, // Tie
    /*  */"txtpbkstshsm": {unicode: "\uE1FE"}, // Tuplet bracket start for short stem
    /*  */"txtp3shsm": {unicode: "\uE1FF"},    // Tuplet number 3 for short stem
    /*  */"txtpbkenshsm": {unicode: "\uE200"}, // Tuplet bracket end for short stem
    /*  */"txtpbkstlnsm": {unicode: "\uE201"}, // Tuplet bracket start for long stem
    /*  */"txtp3lnsm": {unicode: "\uE202"},    // Tuplet number 3 for long stem
    /*  */"txtpbkenlnsm": {unicode: "\uE203"}, // Tuplet bracket end for long stem
    /*  */"txhdblntshsm": {unicode: "\uE204"}, // Headless black note, short stem
    /*  */"txhdblntlnsm": {unicode: "\uE205"}, // Headless black note, long stem
    /*  */"txhdblntfr8shsm": {unicode: "\uE206"},  // Headless black note, fractional 8th beam, short stem
    /*  */"txhdblntfr8lnsm": {unicode: "\uE207"},  // Headless black note, fractional 8th beam, long stem
    /*  */"txhdblntfr16shsm": {unicode: "\uE208"}, // Headless black note, fractional 16th beam, short stem
    /*  */"txhdblntfr16lnsm": {unicode: "\uE209"}, // Headless black note, fractional 16th beam, long stem
    /*  */"txhdblntfr32lnsm": {unicode: "\uE20A"}, // Headless black note, fractional 32nd beam, long stem
    /*  */"sm": {unicode: "\uE210"},   // Combining stem
    /*  */"smsp": {unicode: "\uE211"}, // Combining sprechgesang stem
    /*  */"smsw": {unicode: "\uE212"}, // Combining swished stem
    /*  */"smpntr": {unicode: "\uE213"},   // Combining Penderecki unmeasured tremolo stem
    /*  */"smslpn": {unicode: "\uE214"},   // Combining sul ponticello (bow behind bridge) stem
    /*  */"smbwonbr": {unicode: "\uE215"}, // Combining bow on bridge stem
    /*  */"smbwontl": {unicode: "\uE216"}, // Combining bow on tailpiece stem
    /*  */"smbzrl": {unicode: "\uE217"},   // Combining buzz roll stem
    /*  */"smdm": {unicode: "\uE218"}, // Combining damp stem
    /*  */"smvbpl": {unicode: "\uE219"},   // Combining vibrato pulse accent (Saunders) stem
    /*  */"smmlbl": {unicode: "\uE21A"},   // Combining multiphonics (black) stem
    /*  */"smmlwt": {unicode: "\uE21B"},   // Combining multiphonics (white) stem
    /*  */"smmlblwt": {unicode: "\uE21C"}, // Combining multiphonics (black and white) stem
    /*  */"smss": {unicode: "\uE21D"}, // Combining sussurando stem
    /*  */"smrmsh": {unicode: "\uE21E"},   // Combining rim shot stem
    /*  */"smhpstns": {unicode: "\uE21F"}, // Combining harp string noise stem
    /*  */"tr1": {unicode: "\uE220"},  // Combining tremolo 1
    /*  */"tr2": {unicode: "\uE221"},  // Combining tremolo 2
    /*  */"tr3": {unicode: "\uE222"},  // Combining tremolo 3
    /*  */"tr4": {unicode: "\uE223"},  // Combining tremolo 4
    /*  */"tr5": {unicode: "\uE224"},  // Combining tremolo 5
    /*  */"trfn1": {unicode: "\uE225"},    // Fingered tremolo 1
    /*  */"trfn2": {unicode: "\uE226"},    // Fingered tremolo 2
    /*  */"trfn3": {unicode: "\uE227"},    // Fingered tremolo 3
    /*  */"trfn4": {unicode: "\uE228"},    // Fingered tremolo 4
    /*  */"trfn5": {unicode: "\uE229"},    // Fingered tremolo 5
    /*  */"bzrl": {unicode: "\uE22A"}, // Buzz roll
    /*  */"pntr": {unicode: "\uE22B"}, // Penderecki unmeasured tremolo
    /*  */"untr": {unicode: "\uE22C"}, // Wieniawski unmeasured tremolo
    /*  */"untrsm": {unicode: "\uE22D"},   // Wieniawski unmeasured tremolo (simpler)
    /*  */"trdvds2": {unicode: "\uE22E"},  // Divide measured tremolo by 2
    /*  */"trdvds3": {unicode: "\uE22F"},  // Divide measured tremolo by 3
    /*  */"trdvds4": {unicode: "\uE230"},  // Divide measured tremolo by 4
    /*  */"trdvds6": {unicode: "\uE231"},  // Divide measured tremolo by 6
    /*  */"shtr": {unicode: "\uE232"}, // Stockhausen irregular tremolo (\"Morsen\", like Morse code)
    /*  */"onhnrlst": {unicode: "\uE233"}, // One-handed roll (Stevens)
    /*  */"dbltrlst": {unicode: "\uE234"}, // Double lateral roll (Stevens)
    /*  */"fl8up": {unicode: "\uE240"},    // Combining flag 1 (8th) above
    /*  */"fl8dn": {unicode: "\uE241"},    // Combining flag 1 (8th) below
    /*  */"fl16up": {unicode: "\uE242"},   // Combining flag 2 (16th) above
    /*  */"fl16dn": {unicode: "\uE243"},   // Combining flag 2 (16th) below
    /*  */"fl32up": {unicode: "\uE244"},   // Combining flag 3 (32nd) above
    /*  */"fl32dn": {unicode: "\uE245"},   // Combining flag 3 (32nd) below
    /*  */"fl64up": {unicode: "\uE246"},   // Combining flag 4 (64th) above
    /*  */"fl64dn": {unicode: "\uE247"},   // Combining flag 4 (64th) below
    /*  */"fl128up": {unicode: "\uE248"},  // Combining flag 5 (128th) above
    /*  */"fl128dn": {unicode: "\uE249"},  // Combining flag 5 (128th) below
    /*  */"fl256up": {unicode: "\uE24A"},  // Combining flag 6 (256th) above
    /*  */"fl256dn": {unicode: "\uE24B"},  // Combining flag 6 (256th) below
    /*  */"fl512up": {unicode: "\uE24C"},  // Combining flag 7 (512th) above
    /*  */"fl512dn": {unicode: "\uE24D"},  // Combining flag 7 (512th) below
    /*  */"fl1024up": {unicode: "\uE24E"}, // Combining flag 8 (1024th) above
    /*  */"fl1024dn": {unicode: "\uE24F"}, // Combining flag 8 (1024th) below
    /*  */"flinup": {unicode: "\uE250"},   // Internal combining flag above
    /*  */"flindn": {unicode: "\uE251"},   // Internal combining flag below
    /*  */"acfl": {unicode: "\uE260", width: 7},   // Flat
    /*  */"acnt": {unicode: "\uE261", width: 5},   // Natural
    /*  */"acsh": {unicode: "\uE262", width: 8},   // Sharp
    /*  */"acdbsh": {unicode: "\uE263", width: 8}, // Double sharp
    /*  */"acdbfl": {unicode: "\uE264", width: 13},    // Double flat
    /*  */"actrsh": {unicode: "\uE265"},   // Triple sharp
    /*  */"actrfl": {unicode: "\uE266"},   // Triple flat
    /*  */"acntfl": {unicode: "\uE267"},   // Natural flat
    /*  */"acntsh": {unicode: "\uE268"},   // Natural sharp
    /*  */"acshsh": {unicode: "\uE269"},   // Sharp sharp
    /*  */"acprlf": {unicode: "\uE26A"},   // Accidental parenthesis, left
    /*  */"acprrt": {unicode: "\uE26B"},   // Accidental parenthesis, right
    /*  */"acbklf": {unicode: "\uE26C"},   // Accidental bracket, left
    /*  */"acbkrt": {unicode: "\uE26D"},   // Accidental bracket, right
    /*  */"acqrtnflarup": {unicode: "\uE270"}, // Quarter-tone flat
    /*  */"acthqrtnflardn": {unicode: "\uE271"},   // Three-quarter-tones flat
    /*  */"acqrtnshntarup": {unicode: "\uE272"},   // Quarter-tone sharp
    /*  */"acqrtnflntardn": {unicode: "\uE273"},   // Quarter-tone flat
    /*  */"acthqrtnsharup": {unicode: "\uE274"},   // Three-quarter-tones sharp
    /*  */"acqrtnshardn": {unicode: "\uE275"}, // Quarter-tone sharp
    /*  */"acfvqrtnsharup": {unicode: "\uE276"},   // Five-quarter-tones sharp
    /*  */"acthqrtnshardn": {unicode: "\uE277"},   // Three-quarter-tones sharp
    /*  */"acthqrtnflarup": {unicode: "\uE278"},   // Three-quarter-tones flat
    /*  */"acfvqrtnflardn": {unicode: "\uE279"},   // Five-quarter-tones flat
    /*  */"acarup": {unicode: "\uE27A"},   // Arrow up (raise by one quarter-tone)
    /*  */"acardn": {unicode: "\uE27B"},   // Arrow down (lower by one quarter-tone)
    /*  */"acqrtnflst": {unicode: "\uE280"},   // Reversed flat (quarter-tone flat) (Stein)
    /*  */"acthqrtnflzm": {unicode: "\uE281"}, // Reversed flat and flat (three-quarter-tones flat) (Zimmermann)
    /*  */"acqrtnshst": {unicode: "\uE282"},   // Half sharp (quarter-tone sharp) (Stein)
    /*  */"acthqrtnshst": {unicode: "\uE283"}, // One and a half sharps (three-quarter-tones sharp) (Stein)
    /*  */"acnrrvfl": {unicode: "\uE284"}, // Narrow reversed flat(quarter-tone flat)
    /*  */"acnrrvflanfl": {unicode: "\uE285"}, // Narrow reversed flat and flat(three-quarter-tones flat)
    /*  */"acrvflarup": {unicode: "\uE290"},   // Reversed flat with arrow up
    /*  */"acrvflardn": {unicode: "\uE291"},   // Reversed flat with arrow down
    /*  */"acflrvflarup": {unicode: "\uE292"}, // Filled reversed flat with arrow up
    /*  */"acflrvflardn": {unicode: "\uE293"}, // Filled reversed flat with arrow down
    /*  */"acrvflanflarup": {unicode: "\uE294"},   // Reversed flat and flat with arrow up
    /*  */"acrvflanflardn": {unicode: "\uE295"},   // Reversed flat and flat with arrow down
    /*  */"acflrvflanfl": {unicode: "\uE296"}, // Filled reversed flat and flat
    /*  */"acflrvflanflarup": {unicode: "\uE297"}, // Filled reversed flat and flat with arrow up
    /*  */"acflrvflanflardn": {unicode: "\uE298"}, // Filled reversed flat and flat with arrow down
    /*  */"achfsharup": {unicode: "\uE299"},   // Half sharp with arrow up
    /*  */"achfshardn": {unicode: "\uE29A"},   // Half sharp with arrow down
    /*  */"aconanAhfsharup": {unicode: "\uE29B"},  // One and a half sharps with arrow up
    /*  */"aconanAhfshardn": {unicode: "\uE29C"},  // One and a half sharps with arrow down
    /*  */"acsm12dn": {unicode: "\uE2A0"}, // 1/12 tone low
    /*  */"acsm6dn": {unicode: "\uE2A1"},  // 1/6 tone low
    /*  */"acsm4dn": {unicode: "\uE2A2"},  // 1/4 tone low
    /*  */"acsm12up": {unicode: "\uE2A3"}, // 1/12 tone high
    /*  */"acsm6up": {unicode: "\uE2A4"},  // 1/6 tone high
    /*  */"acsm4up": {unicode: "\uE2A5"},  // 1/4 tone high
    /*  */"acjnpl": {unicode: "\uE2B0"},   // Plus (raise by 81:80)
    /*  */"acjnmn": {unicode: "\uE2B1"},   // Minus (lower by 81:80)
    /*  */"acjnel": {unicode: "\uE2B2"},   // Inverted seven (raise by 36:35)
    /*  */"acjnsv": {unicode: "\uE2B3"},   // Seven (lower by 36:35)
    /*  */"acjnup": {unicode: "\uE2B4"},   // Up arrow (raise by 33:32)
    /*  */"acjndn": {unicode: "\uE2B5"},   // Down arrow (lower by 33:32)
    /*  */"acjn13": {unicode: "\uE2B6"},   // Thirteen (raise by 65:64)
    /*  */"acjn31": {unicode: "\uE2B7"},   // Inverted 13 (lower by 65:64)
    /*  */"acdbflonardn": {unicode: "\uE2C0"}, // Double flat lowered by one syntonic comma
    /*  */"acflonardn": {unicode: "\uE2C1"},   // Flat lowered by one syntonic comma
    /*  */"acntonardn": {unicode: "\uE2C2"},   // Natural lowered by one syntonic comma
    /*  */"acshonardn": {unicode: "\uE2C3"},   // Sharp lowered by one syntonic comma
    /*  */"acdbshonardn": {unicode: "\uE2C4"}, // Double sharp lowered by one syntonic comma
    /*  */"acdbflonarup": {unicode: "\uE2C5"}, // Double flat raised by one syntonic comma
    /*  */"acflonarup": {unicode: "\uE2C6"},   // Flat raised by one syntonic comma
    /*  */"acntonarup": {unicode: "\uE2C7"},   // Natural raised by one syntonic comma
    /*  */"acshonarup": {unicode: "\uE2C8"},   // Sharp raised by one syntonic comma
    /*  */"acdbshonarup": {unicode: "\uE2C9"}, // Double sharp raised by one syntonic comma
    /*  */"acdbfltwardn": {unicode: "\uE2CA"}, // Double flat lowered by two syntonic commas
    /*  */"acfltwardn": {unicode: "\uE2CB"},   // Flat lowered by two syntonic commas
    /*  */"acnttwardn": {unicode: "\uE2CC"},   // Natural lowered by two syntonic commas
    /*  */"acshtwardn": {unicode: "\uE2CD"},   // Sharp lowered by two syntonic commas
    /*  */"acdbshtwardn": {unicode: "\uE2CE"}, // Double sharp lowered by two syntonic commas
    /*  */"acdbfltwarup": {unicode: "\uE2CF"}, // Double flat raised by two syntonic commas
    /*  */"acfltwarup": {unicode: "\uE2D0"},   // Flat raised by two syntonic commas
    /*  */"acnttwarup": {unicode: "\uE2D1"},   // Natural raised by two syntonic commas
    /*  */"acshtwarup": {unicode: "\uE2D2"},   // Sharp raised by two syntonic commas
    /*  */"acdbshtwarup": {unicode: "\uE2D3"}, // Double sharp raised by two syntonic commas
    /*  */"acdbflthardn": {unicode: "\uE2D4"}, // Double flat lowered by three syntonic commas
    /*  */"acflthardn": {unicode: "\uE2D5"},   // Flat lowered by three syntonic commas
    /*  */"acntthardn": {unicode: "\uE2D6"},   // Natural lowered by three syntonic commas
    /*  */"acshthardn": {unicode: "\uE2D7"},   // Sharp lowered by three syntonic commas
    /*  */"acdbshthardn": {unicode: "\uE2D8"}, // Double sharp lowered by three syntonic commas
    /*  */"acdbfltharup": {unicode: "\uE2D9"}, // Double flat raised by three syntonic commas
    /*  */"acfltharup": {unicode: "\uE2DA"},   // Flat raised by three syntonic commas
    /*  */"acnttharup": {unicode: "\uE2DB"},   // Natural raised by three syntonic commas
    /*  */"acshtharup": {unicode: "\uE2DC"},   // Sharp raised by three syntonic commas
    /*  */"acdbshtharup": {unicode: "\uE2DD"}, // Double sharp raised by three syntonic commas
    /*  */"aclwonspcm": {unicode: "\uE2DE"},   // Lower by one septimal comma
    /*  */"acrsonspcm": {unicode: "\uE2DF"},   // Raise by one septimal comma
    /*  */"aclwtwspcm": {unicode: "\uE2E0"},   // Lower by two septimal commas
    /*  */"acrstwspcm": {unicode: "\uE2E1"},   // Raise by two septimal commas
    /*  */"aclwonunqr": {unicode: "\uE2E2"},   // Lower by one undecimal quartertone
    /*  */"acrsonunqr": {unicode: "\uE2E3"},   // Raise by one undecimal quartertone
    /*  */"aclwontrqr": {unicode: "\uE2E4"},   // Lower by one tridecimal quartertone
    /*  */"acrsontrqr": {unicode: "\uE2E5"},   // Raise by one tridecimal quartertone
    /*  */"accmlw17sc": {unicode: "\uE2E6"},   // Combining lower by one 17-limit schisma
    /*  */"accmrs17sc": {unicode: "\uE2E7"},   // Combining raise by one 17-limit schisma
    /*  */"accmlw19sc": {unicode: "\uE2E8"},   // Combining lower by one 19-limit schisma
    /*  */"accmrs19sc": {unicode: "\uE2E9"},   // Combining raise by one 19-limit schisma
    /*  */"accmlw23lm29lmcm": {unicode: "\uE2EA"}, // Combining lower by one 23-limit comma
    /*  */"accmrs23lm29lmcm": {unicode: "\uE2EB"}, // Combining raise by one 23-limit comma
    /*  */"accmlw31sc": {unicode: "\uE2EC"},   // Combining lower by one 31-limit schisma
    /*  */"accmrs31sc": {unicode: "\uE2ED"},   // Combining raise by one 31-limit schisma
    /*  */"accmopcrbr": {unicode: "\uE2EE"},   // Combining open curly brace
    /*  */"accmclcrbr": {unicode: "\uE2EF"},   // Combining close curly brace
    /*  */"acdbfleqtm": {unicode: "\uE2F0"},   // Double flat equal tempered semitone
    /*  */"acfleqtm": {unicode: "\uE2F1"}, // Flat equal tempered semitone
    /*  */"acnteqtm": {unicode: "\uE2F2"}, // Natural equal tempered semitone
    /*  */"acsheqtm": {unicode: "\uE2F3"}, // Sharp equal tempered semitone
    /*  */"acdbsheqtm": {unicode: "\uE2F4"},   // Double sharp equal tempered semitone
    /*  */"acqrfleqtm": {unicode: "\uE2F5"},   // Lower by one equal tempered quarter-tone
    /*  */"acqrsheqtm": {unicode: "\uE2F6"},   // Raise by one equal tempered quarter tone
    /*  */"accmlw53lmcm": {unicode: "\uE2F7"}, // Combining lower by one 53-limit comma
    /*  */"accmrs53lmcm": {unicode: "\uE2F8"}, // Combining raise by one 53-limit comma
    /*  */"acentl": {unicode: "\uE2F9"},   // Enharmonically reinterpret accidental tilde
    /*  */"acenaleqto": {unicode: "\uE2FA"},   // Enharmonically reinterpret accidental almost equal to
    /*  */"aceneq": {unicode: "\uE2FB"},   // Enharmonically reinterpret accidental equals
    /*  */"acsg5V7klup": {unicode: "\uE300", width: 5},    // 5:7 kleisma up, (5:7k, ~11:13k, 7C\u00a0less\u00a05C)
    /*  */"acsg5V7kldn": {unicode: "\uE301", width: 5},    // 5:7 kleisma down
    /*  */"acsg5cmup": {unicode: "\uE302", width: 5},  // 5 comma up, (5C), 1\u00b0 up [22 27 29 34 41 46 53 96 EDOs], 1/12-tone up
    /*  */"acsg5cmdn": {unicode: "\uE303", width: 5},  // 5 comma down, 1\u00b0 down [22 27 29 34 41 46 53 96 EDOs], 1/12-tone down
    /*  */"acsg7cmup": {unicode: "\uE304", width: 5},  // 7 comma up, (7C), 1\u00b0 up [43 EDO], 2\u00b0 up [72 EDO], 1/6-tone up
    /*  */"acsg7cmdn": {unicode: "\uE305", width: 5},  // 7 comma down, 1\u00b0 down [43 EDO], 2\u00b0 down [72 EDO], 1/6-tone down
    /*  */"acsg25smdsup": {unicode: "\uE306", width: 8},   // 25 small diesis up, (25S, ~5:13S, ~37S, 5C\u00a0plus\u00a05C), 2\u00b0 up [53 EDO]
    /*  */"acsg25smdsdn": {unicode: "\uE307", width: 8},   // 25 small diesis down, 2\u00b0 down [53 EDO]
    /*  */"acsg35mddsup": {unicode: "\uE308", width: 9},   // 35 medium diesis up, (35M, ~13M, ~125M, 5C\u00a0plus\u00a07C), 2/9-tone up
    /*  */"acsg35mddsdn": {unicode: "\uE309", width: 9},   // 35 medium diesis down, 1\u00b0[50] 2\u00b0[27] down, 2/9-tone down
    /*  */"acsg11mddsup": {unicode: "\uE30A", width: 11},  // 11 medium diesis up, (11M), 1\u00b0[17 31] 2\u00b046 up, 1/4-tone up
    /*  */"acsg11mddsdn": {unicode: "\uE30B", width: 11},  // 11 medium diesis down, 1\u00b0[17 31] 2\u00b046 down, 1/4-tone down
    /*  */"acsg11lgdsup": {unicode: "\uE30C", width: 11},  // 11 large diesis up, (11L), (sharp less 11M), 3\u00b0 up [46 EDO]
    /*  */"acsg11lgdsdn": {unicode: "\uE30D", width: 11},  // 11 large diesis down, 3\u00b0 down [46 EDO]
    /*  */"acsg35lgdsup": {unicode: "\uE30E", width: 12},  // 35 large diesis up, (35L, ~13L, ~125L,  sharp less 35M), 2\u00b050 up
    /*  */"acsg35lgdsdn": {unicode: "\uE30F", width: 12},  // 35 large diesis down, 2\u00b0 down [50 EDO], 5/18-tone down
    /*  */"acsgsh25Sdn": {unicode: "\uE310"},  // Sharp 25S-down, 3\u00b0 up [53 EDO]
    /*  */"acsgfl25Sup": {unicode: "\uE311"},  // Flat 25S-up, 3\u00b0 down [53 EDO]
    /*  */"acsgsh7Cdn": {unicode: "\uE312"},   // Sharp 7C-down, 2\u00b0 up [43 EDO], 4\u00b0 up [72 EDO], 1/3-tone up
    /*  */"acsgfl7Cup": {unicode: "\uE313"},   // Flat 7C-up, 2\u00b0 down [43 EDO], 4\u00b0 down [72 EDO], 1/3-tone down
    /*  */"acsgsh5Cdn": {unicode: "\uE314"},   // Sharp 5C-down, 2\u00b0[22 29] 3\u00b0[27 34 41] 4\u00b0[39 46 53] 5\u00b0[72] 7\u00b0[96] up, 5/12-tone up
    /*  */"acsgfl5Cup": {unicode: "\uE315"},   // Flat 5C-up, 2\u00b0[22 29] 3\u00b0[27 34 41] 4\u00b0[39 46 53] 5\u00b072 7\u00b0[96] down, 5/12-tone down
    /*  */"acsgsh5V7Kdn": {unicode: "\uE316"}, // Sharp 5:7k-down
    /*  */"acsgfl5V7Kup": {unicode: "\uE317"}, // Flat 5:7k-up
    /*  */"acsgsh": {unicode: "\uE318"},   // Sharp, (apotome up)[almost all EDOs], 1/2-tone up
    /*  */"acsgfl": {unicode: "\uE319"},   // Flat, (apotome down)[almost all EDOs], 1/2-tone down
    /*  */"acsgsh5V7Kup": {unicode: "\uE31C"}, // Sharp 5:7k-up
    /*  */"acsgfl5V7Kdn": {unicode: "\uE31D"}, // Flat 5:7k-down
    /*  */"acsgsh5Cup": {unicode: "\uE31E"},   // Sharp 5C-up, 4\u00b0[22 29] 5\u00b0[27 34 41] 6\u00b0[39 46 53] up, 7/12-tone up
    /*  */"acsgfl5Cdn": {unicode: "\uE31F"},   // Flat 5C-down, 4\u00b0[22 29] 5\u00b0[27 34 41] 6\u00b0[39 46 53] down, 7/12-tone down
    /*  */"acsgsh7Cup": {unicode: "\uE320"},   // Sharp 7C-up, 4\u00b0 up [43 EDO], 8\u00b0 up [72 EDO], 2/3-tone up
    /*  */"acsgfl7Cdn": {unicode: "\uE321"},   // Flat 7C-down, 4\u00b0 down [43 EDO], 8\u00b0 down [72 EDO], 2/3-tone down
    /*  */"acsgsh25Sup": {unicode: "\uE322"},  // Sharp 25S-up, 7\u00b0 up [53 EDO]
    /*  */"acsgfl25Sdn": {unicode: "\uE323"},  // Flat 25S-down, 7\u00b0 down [53 EDO]
    /*  */"acsgsh35Mup": {unicode: "\uE324"},  // Sharp 35M-up, 4\u00b0 up [50 EDO], 6\u00b0 up [27 EDO], 13/18-tone up
    /*  */"acsgfl35Mdn": {unicode: "\uE325"},  // Flat 35M-down, 4\u00b0 down [50 EDO], 6\u00b0 down [27 EDO], 13/18-tone down
    /*  */"acsgsh11Mup": {unicode: "\uE326"},  // Sharp 11M-up, 3\u00b0 up [17 31 EDOs], 7\u00b0 up [46 EDO], 3/4-tone up
    /*  */"acsgfl11Mdn": {unicode: "\uE327"},  // Flat 11M-down, 3\u00b0 down [17 31 EDOs], 7\u00b0 down [46 EDO], 3/4-tone down
    /*  */"acsgsh11Lup": {unicode: "\uE328"},  // Sharp 11L-up, 8\u00b0 up [46 EDO]
    /*  */"acsgfl11Ldn": {unicode: "\uE329"},  // Flat 11L-down, 8\u00b0 up [46 EDO]
    /*  */"acsgsh35Lup": {unicode: "\uE32A"},  // Sharp 35L-up, 5\u00b0 up [50 EDO]
    /*  */"acsgfl35Ldn": {unicode: "\uE32B"},  // Flat 35L-down, 5\u00b0 down [50 EDO]
    /*  */"acsgdbsh25Sdn": {unicode: "\uE32C"},    // Double sharp 25S-down, 8\u00b0up [53 EDO]
    /*  */"acsgdbfl25Sup": {unicode: "\uE32D"},    // Double flat 25S-up, 8\u00b0down [53 EDO]
    /*  */"acsgdbsh7Cdn": {unicode: "\uE32E"}, // Double sharp 7C-down, 5\u00b0[43] 10\u00b0[72] up, 5/6-tone up
    /*  */"acsgdbfl7Cup": {unicode: "\uE32F"}, // Double flat 7C-up, 5\u00b0 down [43 EDO], 10\u00b0 down [72 EDO], 5/6-tone down
    /*  */"acsgdbsh5Cdn": {unicode: "\uE330"}, // Double sharp 5C-down, 5\u00b0[22 29] 7\u00b0[34 41] 9\u00b053 up, 11/12 tone up
    /*  */"acsgdbfl5Cup": {unicode: "\uE331"}, // Double flat 5C-up, 5\u00b0[22 29] 7\u00b0[34 41] 9\u00b053 down, 11/12 tone down
    /*  */"acsgdbsh5V7Kdn": {unicode: "\uE332"},   // Double sharp 5:7k-down
    /*  */"acsgdbfl5V7Kup": {unicode: "\uE333"},   // Double flat 5:7k-up
    /*  */"acsgdbsh": {unicode: "\uE334"}, // Double sharp, (2 apotomes up)[almost all EDOs], whole-tone up
    /*  */"acsgdbfl": {unicode: "\uE335"}, // Double flat, (2 apotomes down)[almost all EDOs], whole-tone down
    /*  */"acsg7V11klup": {unicode: "\uE340"}, // 7:11 kleisma up, (7:11k, ~29k)
    /*  */"acsg7V11kldn": {unicode: "\uE341"}, // 7:11 kleisma down
    /*  */"acsg17cmup": {unicode: "\uE342"},   // 17 comma up, (17C)
    /*  */"acsg17cmdn": {unicode: "\uE343"},   // 17 comma down
    /*  */"acsg55cmup": {unicode: "\uE344"},   // 55 comma up, (55C, 11M less 5C), 3\u00b0up [96 EDO], 3/16-tone up
    /*  */"acsg55cmdn": {unicode: "\uE345"},   // 55 comma down, 3\u00b0 down [96 EDO], 3/16-tone down
    /*  */"acsg7V11cmup": {unicode: "\uE346"}, // 7:11 comma up, (7:11C, ~13:17S, ~29S, 11L less 7C), 1\u00b0 up [60 EDO]
    /*  */"acsg7V11cmdn": {unicode: "\uE347"}, // 7:11 comma down, 1\u00b0 down [60 EDO], 1/10-tone down
    /*  */"acsg5V11smdsup": {unicode: "\uE348"},   // 5:11 small diesis up, (5:11S, ~7:13S, ~11:17S, 5:7k plus 7:11C)
    /*  */"acsg5V11smdsdn": {unicode: "\uE349"},   // 5:11 small diesis down
    /*  */"acsgsh5V11Sdn": {unicode: "\uE34A"},    // Sharp 5:11S-down
    /*  */"acsgfl5V11Sup": {unicode: "\uE34B"},    // Flat 5:11S-up
    /*  */"acsgsh7V11Cdn": {unicode: "\uE34C"},    // Sharp 7:11C-down, 4\u00b0 up [60 EDO], 2/5-tone up
    /*  */"acsgfl7V11Cup": {unicode: "\uE34D"},    // Flat 7:11C-up, 4\u00b0 down [60 EDO], 2/5-tone down
    /*  */"acsgsh55Cdn": {unicode: "\uE34E"},  // Sharp 55C-down, 5\u00b0 up [96 EDO], 5/16-tone up
    /*  */"acsgfl55Cup": {unicode: "\uE34F"},  // Flat 55C-up, 5\u00b0 down [96 EDO], 5/16-tone down
    /*  */"acsgsh17Cdn": {unicode: "\uE350"},  // Sharp 17C-down
    /*  */"acsgfl17Cup": {unicode: "\uE351"},  // Flat 17C-up
    /*  */"acsgsh7V11Kdn": {unicode: "\uE352"},    // Sharp 7:11k-down
    /*  */"acsgfl7V11Kup": {unicode: "\uE353"},    // Flat 7:11k-up
    /*  */"acsgsh7V11Kup": {unicode: "\uE354"},    // Sharp 7:11k-up
    /*  */"acsgfl7V11Kdn": {unicode: "\uE355"},    // Flat 7:11k-down
    /*  */"acsgsh17Cup": {unicode: "\uE356"},  // Sharp 17C-up
    /*  */"acsgfl17Cdn": {unicode: "\uE357"},  // Flat 17C-down
    /*  */"acsgsh55Cup": {unicode: "\uE358"},  // Sharp 55C-up, 11\u00b0 up [96 EDO], 11/16-tone up
    /*  */"acsgfl55Cdn": {unicode: "\uE359"},  // Flat 55C-down, 11\u00b0 down [96 EDO], 11/16-tone down
    /*  */"acsgsh7V11Cup": {unicode: "\uE35A"},    // Sharp 7:11C-up, 6\u00b0 up [60 EDO], 3/5- tone up
    /*  */"acsgfl7V11Cdn": {unicode: "\uE35B"},    // Flat 7:11C-down, 6\u00b0 down [60 EDO], 3/5- tone down
    /*  */"acsgsh5V11Sup": {unicode: "\uE35C"},    // Sharp 5:11S-up
    /*  */"acsgfl5V11Sdn": {unicode: "\uE35D"},    // Flat 5:11S-down
    /*  */"acsgdbsh5V11Sdn": {unicode: "\uE35E"},  // Double sharp 5:11S-down
    /*  */"acsgdbfl5V11Sup": {unicode: "\uE35F"},  // Double flat 5:11S-up
    /*  */"acsgdbsh7V11Cdn": {unicode: "\uE360"},  // Double sharp 7:11C-down, 9\u00b0 up [60 EDO], 9/10-tone up
    /*  */"acsgdbfl7V11Cup": {unicode: "\uE361"},  // Double flat 7:11C-up, 9\u00b0 down [60 EDO], 9/10-tone down
    /*  */"acsgdbsh55Cdn": {unicode: "\uE362"},    // Double sharp 55C-down, 13\u00b0 up [96 EDO], 13/16-tone up
    /*  */"acsgdbfl55Cup": {unicode: "\uE363"},    // Double flat 55C-up, 13\u00b0 down [96 EDO], 13/16-tone down
    /*  */"acsgdbsh17Cdn": {unicode: "\uE364"},    // Double sharp 17C-down
    /*  */"acsgdbfl17Cup": {unicode: "\uE365"},    // Double flat 17C-up
    /*  */"acsgdbsh7V11Kdn": {unicode: "\uE366"},  // Double sharp 7:11k-down
    /*  */"acsgdbfl7V11Kup": {unicode: "\uE367"},  // Double flat 7:11k-up
    /*  */"acsg23cmup": {unicode: "\uE370"},   // 23 comma up, (23C), 2\u00b0 up [96 EDO], 1/8-tone up
    /*  */"acsg23cmdn": {unicode: "\uE371"},   // 23 comma down, 2\u00b0 down [96 EDO], 1/8-tone down
    /*  */"acsg5V19cmup": {unicode: "\uE372"}, // 5:19 comma up, (5:19C, 5C plus 19s), 1/20-tone up
    /*  */"acsg5V19cmdn": {unicode: "\uE373"}, // 5:19 comma down, 1/20-tone down
    /*  */"acsg5V23smdsup": {unicode: "\uE374"},   // 5:23 small diesis up, (5:23S, 5C plus 23C), 2\u00b0 up [60 EDO], 1/5-tone up
    /*  */"acsg5V23smdsdn": {unicode: "\uE375"},   // 5:23 small diesis down, 2\u00b0 down [60 EDO], 1/5-tone down
    /*  */"acsgsh5V23Sdn": {unicode: "\uE376"},    // Sharp 5:23S-down, 3\u00b0 up [60 EDO], 3/10-tone up
    /*  */"acsgfl5V23Sup": {unicode: "\uE377"},    // Flat 5:23S-up, 3\u00b0 down [60 EDO], 3/10-tone down
    /*  */"acsgsh5V19Cdn": {unicode: "\uE378"},    // Sharp 5:19C-down, 9/20-tone up
    /*  */"acsgfl5V19Cup": {unicode: "\uE379"},    // Flat 5:19C-up, 9/20-tone down
    /*  */"acsgsh23Cdn": {unicode: "\uE37A"},  // Sharp 23C-down, 6\u00b0 up [96 EDO], 3/8-tone up
    /*  */"acsgfl23Cup": {unicode: "\uE37B"},  // Flat 23C-up, 6\u00b0 down [96 EDO], 3/8-tone down
    /*  */"acsgsh23Cup": {unicode: "\uE37C"},  // Sharp 23C-up, 10\u00b0 up [96 EDO], 5/8-tone up
    /*  */"acsgfl23Cdn": {unicode: "\uE37D"},  // Flat 23C-down, 10\u00b0 down [96 EDO], 5/8-tone down
    /*  */"acsgsh5V19Cup": {unicode: "\uE37E"},    // Sharp 5:19C-up, 11/20-tone up
    /*  */"acsgfl5V19Cdn": {unicode: "\uE37F"},    // Flat 5:19C-down, 11/20-tone down
    /*  */"acsgsh5V23Sup": {unicode: "\uE380"},    // Sharp 5:23S-up, 7\u00b0 up [60 EDO], 7/10-tone up
    /*  */"acsgfl5V23Sdn": {unicode: "\uE381"},    // Flat 5:23S-down, 7\u00b0 down [60 EDO], 7/10-tone down
    /*  */"acsgdbsh5V23Sdn": {unicode: "\uE382"},  // Double sharp 5:23S-down, 8\u00b0 up [60 EDO], 4/5-tone up
    /*  */"acsgdbfl5V23Sup": {unicode: "\uE383"},  // Double flat 5:23S-up, 8\u00b0 down  [60 EDO], 4/5-tone down
    /*  */"acsgdbsh5V19Cdn": {unicode: "\uE384"},  // Double sharp 5:19C-down, 19/20-tone up
    /*  */"acsgdbfl5V19Cup": {unicode: "\uE385"},  // Double flat 5:19C-up, 19/20-tone down
    /*  */"acsgdbsh23Cdn": {unicode: "\uE386"},    // Double sharp 23C-down, 14\u00b0up [96 EDO], 7/8-tone up
    /*  */"acsgdbfl23Cup": {unicode: "\uE387"},    // Double flat 23C-up, 14\u00b0 down [96 EDO], 7/8-tone down
    /*  */"acsg19scup": {unicode: "\uE390"},   // 19 schisma up, (19s)
    /*  */"acsg19scdn": {unicode: "\uE391"},   // 19 schisma down
    /*  */"acsg17klup": {unicode: "\uE392"},   // 17 kleisma up, (17k)
    /*  */"acsg17kldn": {unicode: "\uE393"},   // 17 kleisma down
    /*  */"acsg143cmup": {unicode: "\uE394"},  // 143 comma up, (143C, 13L less 11M)
    /*  */"acsg143cmdn": {unicode: "\uE395"},  // 143 comma down
    /*  */"acsg11V49cmup": {unicode: "\uE396"},    // 11:49 comma up, (11:49C, 11M less 49C)
    /*  */"acsg11V49cmdn": {unicode: "\uE397"},    // 11:49 comma down
    /*  */"acsg19cmup": {unicode: "\uE398"},   // 19 comma up, (19C)
    /*  */"acsg19cmdn": {unicode: "\uE399"},   // 19 comma down
    /*  */"acsg7V19cmup": {unicode: "\uE39A"}, // 7:19 comma up, (7:19C, 7C less 19s)
    /*  */"acsg7V19cmdn": {unicode: "\uE39B"}, // 7:19 comma down
    /*  */"acsg49smdsup": {unicode: "\uE39C"}, // 49 small diesis up, (49S, ~31S)
    /*  */"acsg49smdsdn": {unicode: "\uE39D"}, // 49 small diesis down
    /*  */"acsg23smdsup": {unicode: "\uE39E"}, // 23 small diesis up, (23S)
    /*  */"acsg23smdsdn": {unicode: "\uE39F"}, // 23 small diesis down
    /*  */"acsg5V13mddsup": {unicode: "\uE3A0"},   // 5:13 medium diesis up, (5:13M, ~37M, 5C plus 13C)
    /*  */"acsg5V13mddsdn": {unicode: "\uE3A1"},   // 5:13 medium diesis down
    /*  */"acsg11V19mddsup": {unicode: "\uE3A2"},  // 11:19 medium diesis up, (11:19M, 11M plus 19s)
    /*  */"acsg11V19mddsdn": {unicode: "\uE3A3"},  // 11:19 medium diesis down
    /*  */"acsg49mddsup": {unicode: "\uE3A4"}, // 49 medium diesis up, (49M, ~31M, 7C plus 7C)
    /*  */"acsg49mddsdn": {unicode: "\uE3A5"}, // 49 medium diesis down
    /*  */"acsg5V49mddsup": {unicode: "\uE3A6"},   // 5:49 medium diesis up, (5:49M, half apotome)
    /*  */"acsg5V49mddsdn": {unicode: "\uE3A7"},   // 5:49 medium diesis down
    /*  */"acsg49lgdsup": {unicode: "\uE3A8"}, // 49 large diesis up, (49L, ~31L, apotome less 49M)
    /*  */"acsg49lgdsdn": {unicode: "\uE3A9"}, // 49 large diesis down
    /*  */"acsg11V19lgdsup": {unicode: "\uE3AA"},  // 11:19 large diesis up, (11:19L, apotome less 11:19M)
    /*  */"acsg11V19lgdsdn": {unicode: "\uE3AB"},  // 11:19 large diesis down
    /*  */"acsg5V13lgdsup": {unicode: "\uE3AC"},   // 5:13 large diesis up, (5:13L, ~37L, apotome less 5:13M)
    /*  */"acsg5V13lgdsdn": {unicode: "\uE3AD"},   // 5:13 large diesis down
    /*  */"acsgsh23Sdn": {unicode: "\uE3B0"},  // Sharp 23S-down
    /*  */"acsgfl23Sup": {unicode: "\uE3B1"},  // Flat 23S-up
    /*  */"acsgsh49Sdn": {unicode: "\uE3B2"},  // Sharp 49S-down
    /*  */"acsgfl49Sup": {unicode: "\uE3B3"},  // Flat 49S-up
    /*  */"acsgsh7V19Cdn": {unicode: "\uE3B4"},    // Sharp 7:19C-down
    /*  */"acsgfl7V19Cup": {unicode: "\uE3B5"},    // Flat 7:19C-up
    /*  */"acsgsh19Cdn": {unicode: "\uE3B6"},  // Sharp 19C-down
    /*  */"acsgfl19Cup": {unicode: "\uE3B7"},  // Flat 19C-up
    /*  */"acsgsh11V49Cdn": {unicode: "\uE3B8"},   // Sharp 11:49C-down
    /*  */"acsgfl11V49Cup": {unicode: "\uE3B9"},   // Flat 11:49C-up
    /*  */"acsgsh143Cdn": {unicode: "\uE3BA"}, // Sharp 143C-down
    /*  */"acsgfl143Cup": {unicode: "\uE3BB"}, // Flat 143C-up
    /*  */"acsgsh17Kdn": {unicode: "\uE3BC"},  // Sharp 17k-down
    /*  */"acsgfl17Kup": {unicode: "\uE3BD"},  // Flat 17k-up
    /*  */"acsgsh19Sdn": {unicode: "\uE3BE"},  // Sharp 19s-down
    /*  */"acsgfl19Sup": {unicode: "\uE3BF"},  // Flat 19s-up
    /*  */"acsgsh19Sup": {unicode: "\uE3C0"},  // Sharp 19s-up
    /*  */"acsgfl19Sdn": {unicode: "\uE3C1"},  // Flat 19s-down
    /*  */"acsgsh17Kup": {unicode: "\uE3C2"},  // Sharp 17k-up
    /*  */"acsgfl17Kdn": {unicode: "\uE3C3"},  // Flat 17k-down
    /*  */"acsgsh143Cup": {unicode: "\uE3C4"}, // Sharp 143C-up
    /*  */"acsgfl143Cdn": {unicode: "\uE3C5"}, // Flat 143C-down
    /*  */"acsgsh11V49Cup": {unicode: "\uE3C6"},   // Sharp 11:49C-up
    /*  */"acsgfl11V49Cdn": {unicode: "\uE3C7"},   // Flat 11:49C-down
    /*  */"acsgsh19Cup": {unicode: "\uE3C8"},  // Sharp 19C-up
    /*  */"acsgfl19Cdn": {unicode: "\uE3C9"},  // Flat 19C-down
    /*  */"acsgsh7V19Cup": {unicode: "\uE3CA"},    // Sharp 7:19C-up
    /*  */"acsgfl7V19Cdn": {unicode: "\uE3CB"},    // Flat 7:19C-down
    /*  */"acsgsh49Sup": {unicode: "\uE3CC"},  // Sharp 49S-up
    /*  */"acsgfl49Sdn": {unicode: "\uE3CD"},  // Flat 49S-down
    /*  */"acsgsh23Sup": {unicode: "\uE3CE"},  // Sharp 23S-up
    /*  */"acsgfl23Sdn": {unicode: "\uE3CF"},  // Flat 23S-down
    /*  */"acsgsh5V13Mup": {unicode: "\uE3D0"},    // Sharp 5:13M-up
    /*  */"acsgfl5V13Mdn": {unicode: "\uE3D1"},    // Flat 5:13M-down
    /*  */"acsgsh11V19Mup": {unicode: "\uE3D2"},   // Sharp 11:19M-up
    /*  */"acsgfl11V19Mdn": {unicode: "\uE3D3"},   // Flat 11:19M-down
    /*  */"acsgsh49Mup": {unicode: "\uE3D4"},  // Sharp 49M-up
    /*  */"acsgfl49Mdn": {unicode: "\uE3D5"},  // Flat 49M-down
    /*  */"acsgsh5V49Mup": {unicode: "\uE3D6"},    // Sharp 5:49M-up, (one and a half apotomes)
    /*  */"acsgfl5V49Mdn": {unicode: "\uE3D7"},    // Flat 5:49M-down
    /*  */"acsgsh49Lup": {unicode: "\uE3D8"},  // Sharp 49L-up
    /*  */"acsgfl49Ldn": {unicode: "\uE3D9"},  // Flat 49L-down
    /*  */"acsgsh11V19Lup": {unicode: "\uE3DA"},   // Sharp 11:19L-up
    /*  */"acsgfl11V19Ldn": {unicode: "\uE3DB"},   // Flat 11:19L-down
    /*  */"acsgsh5V13Lup": {unicode: "\uE3DC"},    // Sharp 5:13L-up
    /*  */"acsgfl5V13Ldn": {unicode: "\uE3DD"},    // Flat 5:13L-down
    /*  */"acsgdbsh23Sdn": {unicode: "\uE3E0"},    // Double sharp 23S-down
    /*  */"acsgdbfl23Sup": {unicode: "\uE3E1"},    // Double flat 23S-up
    /*  */"acsgdbsh49Sdn": {unicode: "\uE3E2"},    // Double sharp 49S-down
    /*  */"acsgdbfl49Sup": {unicode: "\uE3E3"},    // Double flat 49S-up
    /*  */"acsgdbsh7V19Cdn": {unicode: "\uE3E4"},  // Double sharp 7:19C-down
    /*  */"acsgdbfl7V19Cup": {unicode: "\uE3E5"},  // Double flat 7:19C-up
    /*  */"acsgdbsh19Cdn": {unicode: "\uE3E6"},    // Double sharp 19C-down
    /*  */"acsgdbfl19Cup": {unicode: "\uE3E7"},    // Double flat 19C-up
    /*  */"acsgdbsh11V49Cdn": {unicode: "\uE3E8"}, // Double sharp 11:49C-down
    /*  */"acsgdbfl11V49Cup": {unicode: "\uE3E9"}, // Double flat 11:49C-up
    /*  */"acsgdbsh143Cdn": {unicode: "\uE3EA"},   // Double sharp 143C-down
    /*  */"acsgdbfl143Cup": {unicode: "\uE3EB"},   // Double flat 143C-up
    /*  */"acsgdbsh17Kdn": {unicode: "\uE3EC"},    // Double sharp 17k-down
    /*  */"acsgdbfl17Kup": {unicode: "\uE3ED"},    // Double flat 17k-up
    /*  */"acsgdbsh19Sdn": {unicode: "\uE3EE"},    // Double sharp 19s-down
    /*  */"acsgdbfl19Sup": {unicode: "\uE3EF"},    // Double flat 19s-up
    /*  */"acsgshup": {unicode: "\uE3F0"}, // Shaft up, (natural for use with only diacritics up)
    /*  */"acsgshdn": {unicode: "\uE3F1"}, // Shaft down, (natural for use with only diacritics down)
    /*  */"acsgac": {unicode: "\uE3F2"},   // Acute, 5 schisma up (5s), 2 cents up
    /*  */"acsggr": {unicode: "\uE3F3"},   // Grave, 5 schisma down, 2 cents down
    /*  */"acsg1mnup": {unicode: "\uE3F4"},    // 1 mina up, 1/(5\u22c57\u22c513)-schismina up, 0.42 cents up
    /*  */"acsg1mndn": {unicode: "\uE3F5"},    // 1 mina down, 1/(5\u22c57\u22c513)-schismina down, 0.42 cents down
    /*  */"acsg2mnup": {unicode: "\uE3F6"},    // 2 minas up, 65/77-schismina up, 0.83 cents up
    /*  */"acsg2mndn": {unicode: "\uE3F7"},    // 2 minas down, 65/77-schismina down, 0.83 cents down
    /*  */"acsg1tnup": {unicode: "\uE3F8"},    // 1 tina up, 7\u00b2\u22c511\u22c519/5-schismina up, 0.17 cents up
    /*  */"acsg1tndn": {unicode: "\uE3F9"},    // 1 tina down, 7\u00b2\u22c511\u22c519/5-schismina down, 0.17 cents down
    /*  */"acsg2tnup": {unicode: "\uE3FA"},    // 2 tinas up, 1/(7\u00b3\u22c517)-schismina up, 0.30 cents up
    /*  */"acsg2tndn": {unicode: "\uE3FB"},    // 2 tinas down, 1/(7\u00b3\u22c517)-schismina down, 0.30 cents down
    /*  */"acsg3tnup": {unicode: "\uE3FC"},    // 3 tinas up, 1 mina up, 1/(5\u22c57\u22c513)-schismina up, 0.42 cents up
    /*  */"acsg3tndn": {unicode: "\uE3FD"},    // 3 tinas down, 1 mina down, 1/(5\u22c57\u22c513)-schismina down, 0.42 cents down
    /*  */"acsg4tnup": {unicode: "\uE3FE"},    // 4 tinas up, 5\u00b2\u22c511\u00b2/7-schismina up, 0.57 cents up
    /*  */"acsg4tndn": {unicode: "\uE3FF"},    // 4 tinas down, 5\u00b2\u22c511\u00b2/7-schismina down, 0.57 cents down
    /*  */"acsg5tnup": {unicode: "\uE400"},    // 5 tinas up, 7\u2074/25-schismina up, 0.72 cents up
    /*  */"acsg5tndn": {unicode: "\uE401"},    // 5 tinas down, 7\u2074/25-schismina down, 0.72 cents down
    /*  */"acsg6tnup": {unicode: "\uE402"},    // 6 tinas up, 2 minas up, 65/77-schismina up, 0.83 cents up
    /*  */"acsg6tndn": {unicode: "\uE403"},    // 6 tinas down, 2 minas down, 65/77-schismina down, 0.83 cents down
    /*  */"acsg7tnup": {unicode: "\uE404"},    // 7 tinas up, 7/(5\u00b2\u22c517)-schismina up, 1.02 cents up
    /*  */"acsg7tndn": {unicode: "\uE405"},    // 7 tinas down, 7/(5\u00b2\u22c517)-schismina down, 1.02 cents down
    /*  */"acsg8tnup": {unicode: "\uE406"},    // 8 tinas up, 11\u22c517/(5\u00b2\u22c57)-schismina up, 1.14 cents up
    /*  */"acsg8tndn": {unicode: "\uE407"},    // 8 tinas down, 11\u22c517/(5\u00b2\u22c57)-schismina down, 1.14 cents down
    /*  */"acsg9tnup": {unicode: "\uE408"},    // 9 tinas up, 1/(7\u00b2\u22c511)-schismina up, 1.26 cents up
    /*  */"acsg9tndn": {unicode: "\uE409"},    // 9 tinas down, 1/(7\u00b2\u22c511)-schismina down, 1.26 cents down
    /*  */"acsgfrtnup": {unicode: "\uE40A"},   // Fractional tina up, 77/(5\u22c537)-schismina up, 0.08 cents up
    /*  */"acsgfrtndn": {unicode: "\uE40B"},   // Fractional tina down, 77/(5\u22c537)-schismina down, 0.08 cents down
    /*  */"acwy1twsh": {unicode: "\uE420"},    // 1/12 tone sharp
    /*  */"acwy2twsh": {unicode: "\uE421"},    // 1/6 tone sharp
    /*  */"acwy3twsh": {unicode: "\uE422"},    // 1/4 tone sharp
    /*  */"acwy4twsh": {unicode: "\uE423"},    // 1/3 tone sharp
    /*  */"acwy5twsh": {unicode: "\uE424"},    // 5/12 tone sharp
    /*  */"acwy6twsh": {unicode: "\uE425"},    // 1/2 tone sharp
    /*  */"acwy7twsh": {unicode: "\uE426"},    // 7/12 tone sharp
    /*  */"acwy8twsh": {unicode: "\uE427"},    // 2/3 tone sharp
    /*  */"acwy9twsh": {unicode: "\uE428"},    // 3/4 tone sharp
    /*  */"acwy10twsh": {unicode: "\uE429"},   // 5/6 tone sharp
    /*  */"acwy11twsh": {unicode: "\uE42A"},   // 11/12 tone sharp
    /*  */"acwy1twfl": {unicode: "\uE42B"},    // 1/12 tone flat
    /*  */"acwy2twfl": {unicode: "\uE42C"},    // 1/6 tone flat
    /*  */"acwy3twfl": {unicode: "\uE42D"},    // 1/4 tone flat
    /*  */"acwy4twfl": {unicode: "\uE42E"},    // 1/3 tone flat
    /*  */"acwy5twfl": {unicode: "\uE42F"},    // 5/12 tone flat
    /*  */"acwy6twfl": {unicode: "\uE430"},    // 1/2 tone flat
    /*  */"acwy7twfl": {unicode: "\uE431"},    // 7/12 tone flat
    /*  */"acwy8twfl": {unicode: "\uE432"},    // 2/3 tone flat
    /*  */"acwy9twfl": {unicode: "\uE433"},    // 3/4 tone flat
    /*  */"acwy10twfl": {unicode: "\uE434"},   // 5/6 tone flat
    /*  */"acwy11twfl": {unicode: "\uE435"},   // 11/12 tone flat
    /*  */"acbymcfl": {unicode: "\uE440"}, // B\u00fcy\u00fck m\u00fccenneb (flat)
    /*  */"ackcmcfl": {unicode: "\uE441"}, // K\u00fc\u00e7\u00fck m\u00fccenneb (flat)
    /*  */"acbkfl": {unicode: "\uE442"},   // Bakiye (flat)
    /*  */"ackmfl": {unicode: "\uE443"},   // Koma (flat)
    /*  */"ackmsh": {unicode: "\uE444"},   // Koma (sharp)
    /*  */"acbksh": {unicode: "\uE445"},   // Bakiye (sharp)
    /*  */"ackcmcsh": {unicode: "\uE446"}, // K\u00fc\u00e7\u00fck m\u00fccenneb (sharp)
    /*  */"acbymcsh": {unicode: "\uE447"}, // B\u00fcy\u00fck m\u00fccenneb (sharp)
    /*  */"ac1cmsh": {unicode: "\uE450"},  // 1-comma sharp
    /*  */"ac2cmsh": {unicode: "\uE451"},  // 2-comma sharp
    /*  */"ac3cmsh": {unicode: "\uE452"},  // 3-comma sharp
    /*  */"ac5cmsh": {unicode: "\uE453"},  // 5-comma sharp
    /*  */"ac1cmfl": {unicode: "\uE454"},  // 1-comma flat
    /*  */"ac2cmfl": {unicode: "\uE455"},  // 2-comma flat
    /*  */"ac3cmfl": {unicode: "\uE456"},  // 3-comma flat
    /*  */"ac4cmfl": {unicode: "\uE457"},  // 4-comma flat
    /*  */"ackr": {unicode: "\uE460"}, // Koron (quarter tone flat)
    /*  */"acsr": {unicode: "\uE461"}, // Sori (quarter tone sharp)
    /*  */"acxnonthtnsh": {unicode: "\uE470"}, // One-third-tone sharp (Xenakis)
    /*  */"acxntwthtnsh": {unicode: "\uE471"}, // Two-third-tones sharp (Xenakis)
    /*  */"acqrtnshbs": {unicode: "\uE472"},   // Quarter tone sharp (Bussotti)
    /*  */"acshonhrst": {unicode: "\uE473"},   // One or three quarter tones sharp
    /*  */"acthqrtnshbs": {unicode: "\uE474"}, // Three quarter tones sharp (Bussotti)
    /*  */"acqrtnshwg": {unicode: "\uE475"},   // Quarter tone sharp with wiggly tail
    /*  */"actvsh": {unicode: "\uE476"},   // Byzantine-style Bu\u0308yu\u0308k mu\u0308cenneb sharp (Tavener)
    /*  */"actvfl": {unicode: "\uE477"},   // Byzantine-style Bakiye flat (Tavener)
    /*  */"acqrtnflpn": {unicode: "\uE478"},   // Quarter tone flat (Penderecki)
    /*  */"accmslup": {unicode: "\uE479"}, // Syntonic/Didymus comma (80:81) up (Bosanquet)
    /*  */"accmsldn": {unicode: "\uE47A"}, // Syntonic/Didymus comma (80:81) down (Bosanquet)
    /*  */"acwlpl": {unicode: "\uE47B"},   // Wilson plus (5 comma up)
    /*  */"acwlmn": {unicode: "\uE47C"},   // Wilson minus (5 comma down)
    /*  */"aclgdbsh": {unicode: "\uE47D", width: 11},  // Large double sharp
    /*  */"acqrtnsh4": {unicode: "\uE47E"},    // Quarter-tone sharp
    /*  */"acqrtnfl4": {unicode: "\uE47F"},    // Quarter-tone flat
    /*  */"acqrtnflflrv": {unicode: "\uE480"}, // Filled reversed flat (quarter-tone flat)
    /*  */"acshrv": {unicode: "\uE481"},   // Reversed sharp
    /*  */"acntrv": {unicode: "\uE482"},   // Reversed natural
    /*  */"acdbflrv": {unicode: "\uE483"}, // Reversed double flat
    /*  */"acfltr": {unicode: "\uE484"},   // Turned flat
    /*  */"acdbfltr": {unicode: "\uE485"}, // Turned double flat
    /*  */"acthqrtnflgr": {unicode: "\uE486"}, // Three-quarter-tones flat (Grisey)
    /*  */"acthqrtnfltr": {unicode: "\uE487"}, // Three-quarter-tones flat (Tartini)
    /*  */"acqrtnflvnbl": {unicode: "\uE488"}, // Quarter-tone flat (van Blankenburg)
    /*  */"acthqrtnflcp": {unicode: "\uE489"}, // Three-quarter-tones flat (Couper)
    /*  */"aconthtnshfr": {unicode: "\uE48A"}, // One-third-tone sharp (Ferneyhough)
    /*  */"aconthtnflfr": {unicode: "\uE48B"}, // One-third-tone flat (Ferneyhough)
    /*  */"actwthtnshfr": {unicode: "\uE48C"}, // Two-third-tones sharp (Ferneyhough)
    /*  */"actwthtnflfr": {unicode: "\uE48D"}, // Two-third-tones flat (Ferneyhough)
    /*  */"aconqrtnshfr": {unicode: "\uE48E"}, // One-quarter-tone sharp (Ferneyhough)
    /*  */"aconqrtnflfr": {unicode: "\uE48F"}, // One-quarter-tone flat (Ferneyhough)
    /*  */"aracab": {unicode: "\uE4A0"},   // Accent above
    /*  */"aracbl": {unicode: "\uE4A1"},   // Accent below
    /*  */"arstab": {unicode: "\uE4A2"},   // Staccato above
    /*  */"arstbl": {unicode: "\uE4A3"},   // Staccato below
    /*  */"artnab": {unicode: "\uE4A4"},   // Tenuto above
    /*  */"artnbl": {unicode: "\uE4A5"},   // Tenuto below
    /*  */"arssab": {unicode: "\uE4A6"},   // Staccatissimo above
    /*  */"arssbl": {unicode: "\uE4A7"},   // Staccatissimo below
    /*  */"arsswdab": {unicode: "\uE4A8"}, // Staccatissimo wedge above
    /*  */"arsswdbl": {unicode: "\uE4A9"}, // Staccatissimo wedge below
    /*  */"arssstab": {unicode: "\uE4AA"}, // Staccatissimo stroke above
    /*  */"arssstbl": {unicode: "\uE4AB"}, // Staccatissimo stroke below
    /*  */"armrab": {unicode: "\uE4AC"},   // Marcato above
    /*  */"armrbl": {unicode: "\uE4AD"},   // Marcato below
    /*  */"armrstab": {unicode: "\uE4AE"}, // Marcato-staccato above
    /*  */"armrstbl": {unicode: "\uE4AF"}, // Marcato-staccato below
    /*  */"aracstab": {unicode: "\uE4B0"}, // Accent-staccato above
    /*  */"aracstbl": {unicode: "\uE4B1"}, // Accent-staccato below
    /*  */"artnstab": {unicode: "\uE4B2"}, // Lour\u00e9 (tenuto-staccato) above
    /*  */"artnstbl": {unicode: "\uE4B3"}, // Lour\u00e9 (tenuto-staccato) below
    /*  */"artnacab": {unicode: "\uE4B4"}, // Tenuto-accent above
    /*  */"artnacbl": {unicode: "\uE4B5"}, // Tenuto-accent below
    /*  */"ariab": {unicode: "\uE4B6"},    // Stress above
    /*  */"aribl": {unicode: "\uE4B7"},    // Stress below
    /*  */"arunab": {unicode: "\uE4B8"},   // Unstress above
    /*  */"arunbl": {unicode: "\uE4B9"},   // Unstress below
    /*  */"arlsvbab": {unicode: "\uE4BA"}, // Laissez vibrer (l.v.) above
    /*  */"arlsvbbl": {unicode: "\uE4BB"}, // Laissez vibrer (l.v.) below
    /*  */"armrtnab": {unicode: "\uE4BC"}, // Marcato-tenuto above
    /*  */"armrtnbl": {unicode: "\uE4BD"}, // Marcato-tenuto below
    /*  */"frab": {unicode: "\uE4C0"}, // Fermata above
    /*  */"frbl": {unicode: "\uE4C1"}, // Fermata below
    /*  */"frvrshab": {unicode: "\uE4C2"}, // Very short fermata above
    /*  */"frvrshbl": {unicode: "\uE4C3"}, // Very short fermata below
    /*  */"frshab": {unicode: "\uE4C4"}, // Short fermata above
    /*  */"frshbl": {unicode: "\uE4C5"}, // Short fermata below
    /*  */"frlnab": {unicode: "\uE4C6"}, // Long fermata above
    /*  */"frlnbl": {unicode: "\uE4C7"}, // Long fermata below
    /*  */"frvrlnab": {unicode: "\uE4C8"}, // Very long fermata above
    /*  */"frvrlnbl": {unicode: "\uE4C9"}, // Very long fermata below
    /*  */"frlnhnab": {unicode: "\uE4CA"}, // Long fermata (Henze) above
    /*  */"frlnhnbl": {unicode: "\uE4CB"}, // Long fermata (Henze) below
    /*  */"frshhnab": {unicode: "\uE4CC"}, // Short fermata (Henze) above
    /*  */"frshhnbl": {unicode: "\uE4CD"}, // Short fermata (Henze) below
    /*  */"brmrcm": {unicode: "\uE4CE"}, // Breath mark (comma)
    /*  */"brmrtc": {unicode: "\uE4CF"}, // Breath mark (tick-like)
    /*  */"brmrup": {unicode: "\uE4D0"}, // Breath mark (upbow-like)
    /*  */"cs": {unicode: "\uE4D1"}, // Caesura
    /*  */"csth": {unicode: "\uE4D2"}, // Thick caesura
    /*  */"cssh": {unicode: "\uE4D3"}, // Short caesura
    /*  */"cscr": {unicode: "\uE4D4"}, // Curved caesura
    /*  */"brmrsl": {unicode: "\uE4D5"}, // Breath mark (Salzedo)
    /*  */"crsg": {unicode: "\uE4D6"}, // Curlew (Britten)
    /*  */"cssnst": {unicode: "\uE4D7"}, // Single stroke caesura
    /*  */"rsmx": {unicode: "\uE4E0"}, // Maxima rest
    /*  */"rsln": {unicode: "\uE4E1"}, // Longa rest
    /*  */"rsdbwh": {unicode: "\uE4E2"}, // Double whole (breve) rest
    /*  */"rswh": {unicode: "\uE4E3"}, // Whole (semibreve) rest
    /*  */"rshf": {unicode: "\uE4E4"}, // Half (minim) rest
    /*  */"rsqr": {unicode: "\uE4E5"}, // Quarter (crotchet) rest
    /*  */"rs8": {unicode: "\uE4E6"}, // Eighth (quaver) rest
    /*  */"rs16": {unicode: "\uE4E7"}, // 16th (semiquaver) rest
    /*  */"rs32": {unicode: "\uE4E8"}, // 32nd (demisemiquaver) rest
    /*  */"rs64": {unicode: "\uE4E9"}, // 64th (hemidemisemiquaver) rest
    /*  */"rs128": {unicode: "\uE4EA"}, // 128th (semihemidemisemiquaver) rest
    /*  */"rs256": {unicode: "\uE4EB"}, // 256th rest
    /*  */"rs512": {unicode: "\uE4EC"}, // 512th rest
    /*  */"rs1024": {unicode: "\uE4ED"}, // 1024th rest
    /*  */"rsHbr": {unicode: "\uE4EE"}, // Multiple measure rest
    /*  */"rsHbrlf": {unicode: "\uE4EF"}, // H-bar, left half
    /*  */"rsHbrmd": {unicode: "\uE4F0"}, // H-bar, middle
    /*  */"rsHbrrt": {unicode: "\uE4F1"}, // H-bar, right half
    /*  */"rsqrol": {unicode: "\uE4F2"}, // Old-style quarter (crotchet) rest
    /*  */"rsdbwhlgln": {unicode: "\uE4F3"}, // Double whole rest on leger lines
    /*  */"rswhlgln": {unicode: "\uE4F4"}, // Whole rest on leger line
    /*  */"rshflgln": {unicode: "\uE4F5"}, // Half rest on leger line
    /*  */"rsqrZ": {unicode: "\uE4F6"}, // Z-style quarter (crotchet) rest
    /*  */"rp1br": {unicode: "\uE500"}, // Repeat last bar
    /*  */"rp2br": {unicode: "\uE501"}, // Repeat last two bars
    /*  */"rp4br": {unicode: "\uE502"}, // Repeat last four bars
    /*  */"rpbrupdt": {unicode: "\uE503"}, // Repeat bar upper dot
    /*  */"rpbrsl": {unicode: "\uE504"}, // Repeat bar slash
    /*  */"rpbrlwdt": {unicode: "\uE505"}, // Repeat bar lower dot
    /*  */"ot": {unicode: "\uE510"}, // Ottava
    /*  */"otal": {unicode: "\uE511"}, // Ottava alta
    /*  */"otbs": {unicode: "\uE512", width: 22}, // Ottava bassa
    /*  */"otbsba": {unicode: "\uE513"}, // Ottava bassa (ba)
    /*  */"qn": {unicode: "\uE514"}, // Quindicesima
    /*  */"qnal": {unicode: "\uE515"}, // Quindicesima alta
    /*  */"qnbs": {unicode: "\uE516"}, // Quindicesima bassa
    /*  */"vn": {unicode: "\uE517"}, // Ventiduesima
    /*  */"vnal": {unicode: "\uE518"}, // Ventiduesima alta
    /*  */"vnbs": {unicode: "\uE519"}, // Ventiduesima bassa
    /*  */"ocprlf": {unicode: "\uE51A"}, // Left parenthesis for octave signs
    /*  */"ocprrt": {unicode: "\uE51B"}, // Right parenthesis for octave signs
    /*  */"otbsvb": {unicode: "\uE51C", width: 22}, // Ottava bassa (8vb)
    /*  */"qnbsmb": {unicode: "\uE51D"}, // Quindicesima bassa (mb)
    /*  */"vnbsmb": {unicode: "\uE51E"}, // Ventiduesima bassa (mb)
    /*  */"ocbs": {unicode: "\uE51F"}, // Bassa
    /*  */"dypn": {unicode: "\uE520"}, // Piano
    /*  */"dymz": {unicode: "\uE521"}, // Mezzo
    /*  */"dyfr": {unicode: "\uE522"}, // Forte
    /*  */"dyrn": {unicode: "\uE523"}, // Rinforzando
    /*  */"dysf": {unicode: "\uE524"}, // Sforzando
    /*  */"dyZ": {unicode: "\uE525"}, // Z
    /*  */"dynn": {unicode: "\uE526"}, // Niente
    /*  */"dyPPPPPP": {unicode: "\uE527"}, // pppppp
    /*  */"dyPPPPP": {unicode: "\uE528"}, // ppppp
    /*  */"dyPPPP": {unicode: "\uE529"}, // pppp
    /*  */"dyPPP": {unicode: "\uE52A"}, // ppp
    /*  */"dyPP": {unicode: "\uE52B"}, // pp
    /*  */"dyMP": {unicode: "\uE52C"}, // mp
    /*  */"dyMF": {unicode: "\uE52D"}, // mf
    /*  */"dyPF": {unicode: "\uE52E"}, // pf
    /*  */"dyFF": {unicode: "\uE52F"}, // ff
    /*  */"dyFFF": {unicode: "\uE530"}, // fff
    /*  */"dyFFFF": {unicode: "\uE531"}, // ffff
    /*  */"dyFFFFF": {unicode: "\uE532"}, // fffff
    /*  */"dyFFFFFF": {unicode: "\uE533"}, // ffffff
    /*  */"dyfrpn": {unicode: "\uE534"}, // Forte-piano
    /*  */"dyfz": {unicode: "\uE535"}, // Forzando
    /*  */"dysf1": {unicode: "\uE536"}, // Sforzando 1
    /*  */"dysfpn": {unicode: "\uE537"}, // Sforzando-piano
    /*  */"dysfpp": {unicode: "\uE538"}, // Sforzando-pianissimo
    /*  */"dysz": {unicode: "\uE539"}, // Sforzato
    /*  */"dyszpn": {unicode: "\uE53A"}, // Sforzato-piano
    /*  */"dyszFF": {unicode: "\uE53B"}, // Sforzatissimo
    /*  */"dyrn1": {unicode: "\uE53C"}, // Rinforzando 1
    /*  */"dyrn2": {unicode: "\uE53D"}, // Rinforzando 2
    /*  */"dycrhr": {unicode: "\uE53E"}, // Crescendo
    /*  */"dydmhr": {unicode: "\uE53F"}, // Diminuendo
    /*  */"dymsdivc": {unicode: "\uE540"}, // Messa di voce
    /*  */"dynnfrhr": {unicode: "\uE541"}, // Niente (for hairpins)
    /*  */"dyhrprlf": {unicode: "\uE542"}, // Left parenthesis (for hairpins)
    /*  */"dyhrprrt": {unicode: "\uE543"}, // Right parenthesis (for hairpins)
    /*  */"dyhrbklf": {unicode: "\uE544"}, // Left bracket (for hairpins)
    /*  */"dyhrbkrt": {unicode: "\uE545"}, // Right bracket (for hairpins)
    /*  */"dycmspcl": {unicode: "\uE546"}, // Colon separator for combined dynamics
    /*  */"dycmsphy": {unicode: "\uE547"}, // Hyphen separator for combined dynamics
    /*  */"dycmspsp": {unicode: "\uE548"}, // Space separator for combined dynamics
    /*  */"dycmspsl": {unicode: "\uE549"}, // Slash separator for combined dynamics
    /*  */"lyelnr": {unicode: "\uE550"}, // Narrow elision
    /*  */"lyel": {unicode: "\uE551"}, // Elision
    /*  */"lyelwd": {unicode: "\uE552"}, // Wide elision
    /*  */"lyhybs": {unicode: "\uE553"}, // Baseline hyphen
    /*  */"lyhybsnnbr": {unicode: "\uE554"}, // Non-breaking baseline hyphen
    /*  */"lytxrp": {unicode: "\uE555"}, // Text repeats
    /*  */"grntacsmup": {unicode: "\uE560"}, // Slashed grace note stem up
    /*  */"grntacsmdn": {unicode: "\uE561"}, // Slashed grace note stem down
    /*  */"grntapsmup": {unicode: "\uE562"}, // Grace note stem up
    /*  */"grntapsmdn": {unicode: "\uE563"}, // Grace note stem down
    /*  */"grntslsmup": {unicode: "\uE564"}, // Slash for stem up grace note
    /*  */"grntslsmdn": {unicode: "\uE565"}, // Slash for stem down grace note
    /*  */"ortr": {unicode: "\uE566"}, // Trill
    /*  */"ortn": {unicode: "\uE567"}, // Turn
    /*  */"ortnin": {unicode: "\uE568"}, // Inverted turn
    /*  */"ortnsl": {unicode: "\uE569"}, // Turn with slash
    /*  */"ortnup": {unicode: "\uE56A"}, // Turn up
    /*  */"ortnupS": {unicode: "\uE56B"}, // Inverted turn up
    /*  */"orshtr": {unicode: "\uE56C"}, // Short trill
    /*  */"ormr": {unicode: "\uE56D"}, // Mordent
    /*  */"ortm": {unicode: "\uE56E"}, // Tremblement
    /*  */"orhy": {unicode: "\uE56F"}, // Haydn ornament
    /*  */"orprdevxV": {unicode: "\uE570"}, // Port de voix
    /*  */"orrtfchfcr": {unicode: "\uE571"}, // Right-facing half circle
    /*  */"orlffchfcr": {unicode: "\uE572"}, // Left-facing half circle
    /*  */"orrtfchk": {unicode: "\uE573"}, // Right-facing hook
    /*  */"orlffchk": {unicode: "\uE574"}, // Left-facing hook
    /*  */"orhkbfnt": {unicode: "\uE575"}, // Hook before note
    /*  */"orhkafnt": {unicode: "\uE576"}, // Hook after note
    /*  */"orupcr": {unicode: "\uE577"}, // Curve above
    /*  */"ordncr": {unicode: "\uE578"}, // Curve below
    /*  */"orshoblnbfnt": {unicode: "\uE579"}, // Short oblique straight line SW-NE
    /*  */"orshoblnafnt": {unicode: "\uE57A"}, // Short oblique straight line NW-SE
    /*  */"oroblnbfnt": {unicode: "\uE57B"}, // Oblique straight line SW-NE
    /*  */"oroblnafnt": {unicode: "\uE57C"}, // Oblique straight line NW-SE
    /*  */"ordboblnbfnt": {unicode: "\uE57D"}, // Double oblique straight lines SW-NE
    /*  */"ordboblnafnt": {unicode: "\uE57E"}, // Double oblique straight lines NW-SE
    /*  */"oroblnhrbfnt": {unicode: "\uE57F"}, // Oblique straight line tilted SW-NE
    /*  */"oroblnhrafnt": {unicode: "\uE580"}, // Oblique straight line tilted NW-SE
    /*  */"orcm": {unicode: "\uE581"}, // Comma
    /*  */"orsh3": {unicode: "\uE582"}, // Shake
    /*  */"orvrln": {unicode: "\uE583"}, // Vertical line
    /*  */"orshmf1": {unicode: "\uE584"}, // Shake (Muffat)
    /*  */"glup": {unicode: "\uE585"}, // Glissando up
    /*  */"gldn": {unicode: "\uE586"}, // Glissando down
    /*  */"orsc": {unicode: "\uE587"}, // Schleifer (long mordent)
    /*  */"orpncp": {unicode: "\uE588"}, // Pinc\u00e9 (Couperin)
    /*  */"ortmcp": {unicode: "\uE589"}, // Tremblement appuy\u00e9 (Couperin)
    /*  */"ortplfccst": {unicode: "\uE590"}, // Ornament top left concave stroke
    /*  */"ortplfcvst": {unicode: "\uE591"}, // Ornament top left convex stroke
    /*  */"orhglfccst": {unicode: "\uE592"}, // Ornament high left concave stroke
    /*  */"orhglfcvst": {unicode: "\uE593"}, // Ornament high left convex stroke
    /*  */"orlfvrst": {unicode: "\uE594"}, // Ornament left vertical stroke
    /*  */"orlfvrstwtcr": {unicode: "\uE595"}, // Ornament left vertical stroke with cross (+)
    /*  */"orlfshT": {unicode: "\uE596"}, // Ornament left shake t
    /*  */"orlfpl": {unicode: "\uE597"}, // Ornament left +
    /*  */"orlwlfccst": {unicode: "\uE598"}, // Ornament low left concave stroke
    /*  */"orlwlfcvst": {unicode: "\uE599"}, // Ornament low left convex stroke
    /*  */"orbtlfccst": {unicode: "\uE59A"}, // Ornament bottom left concave stroke
    /*  */"orbtlfccstlg": {unicode: "\uE59B"}, // Ornament bottom left concave stroke, large
    /*  */"orbtlfcvst": {unicode: "\uE59C"}, // Ornament bottom left convex stroke
    /*  */"orzgzglnnorten": {unicode: "\uE59D"}, // Ornament zig-zag line without right-hand end
    /*  */"orzgzglnwtrten": {unicode: "\uE59E"}, // Ornament zig-zag line with right-hand end
    /*  */"ormdvrst": {unicode: "\uE59F"}, // Ornament middle vertical stroke
    /*  */"ortprtccst": {unicode: "\uE5A0"}, // Ornament top right concave stroke
    /*  */"ortprtcvst": {unicode: "\uE5A1"}, // Ornament top right convex stroke
    /*  */"orhgrtccst": {unicode: "\uE5A2"}, // Ornament high right concave stroke
    /*  */"orhgrtcvst": {unicode: "\uE5A3"}, // Ornament high right convex stroke
    /*  */"orrtvrst": {unicode: "\uE5A4"}, // Ornament right vertical stroke
    /*  */"orlwrtccst": {unicode: "\uE5A5"}, // Ornament low right concave stroke
    /*  */"orlwrtcvst": {unicode: "\uE5A6"}, // Ornament low right convex stroke
    /*  */"orbtrtccst": {unicode: "\uE5A7"}, // Ornament bottom right concave stroke
    /*  */"orbtrtcvst": {unicode: "\uE5A8"}, // Ornament bottom right convex stroke
    /*  */"orprsl": {unicode: "\uE5B0"}, // Slide
    /*  */"orprdssl": {unicode: "\uE5B1"}, // Descending slide
    /*  */"orpraptr": {unicode: "\uE5B2"}, // Supported appoggiatura trill
    /*  */"orpraptrsf": {unicode: "\uE5B3"}, // Supported appoggiatura trill with two-note suffix
    /*  */"orprtntrDan": {unicode: "\uE5B4"}, // Turn-trill (D'Anglebert)
    /*  */"orprsltrDan": {unicode: "\uE5B5"}, // Slide-trill (D'Anglebert)
    /*  */"orprsltrmr": {unicode: "\uE5B6"}, // Slide-trill with one-note suffix (Marpurg)
    /*  */"orprtntrbc": {unicode: "\uE5B7"}, // Turn-trill with two-note suffix (J.S. Bach)
    /*  */"orprsltrbc": {unicode: "\uE5B8"}, // Slide-trill with two-note suffix (J.S. Bach)
    /*  */"orprsltrmf": {unicode: "\uE5B9"}, // Slide-trill (Muffat)
    /*  */"orprsltrsfmf": {unicode: "\uE5BA"}, // Slide-trill with two-note suffix (Muffat)
    /*  */"orprtrsfdn": {unicode: "\uE5BB"}, // Trill with two-note suffix (Dandrieu)
    /*  */"orprprdevxmr": {unicode: "\uE5BC"}, // Pre-beat port de voix followed by multiple mordent (Dandrieu)
    /*  */"orprtrwtmr": {unicode: "\uE5BD"}, // Trill with mordent
    /*  */"orprcd": {unicode: "\uE5BE"}, // Cadence
    /*  */"orprcdwttn": {unicode: "\uE5BF"}, // Cadence with turn
    /*  */"orprdbcdlwpr": {unicode: "\uE5C0"}, // Double cadence with lower prefix
    /*  */"orprcduppr": {unicode: "\uE5C1"}, // Cadence with upper prefix
    /*  */"orprcdupprtn": {unicode: "\uE5C2"}, // Cadence with upper prefix and turn
    /*  */"orprdbcduppr": {unicode: "\uE5C3"}, // Double cadence with upper prefix
    /*  */"orprdbcdupprtn": {unicode: "\uE5C4"}, // Double cadence with upper prefix and turn
    /*  */"orprmrrl": {unicode: "\uE5C5"}, // Mordent with release
    /*  */"orprmruppr": {unicode: "\uE5C6"}, // Mordent with upper prefix
    /*  */"orprinmruppr": {unicode: "\uE5C7"}, // Inverted mordent with upper prefix
    /*  */"orprtrlwsf": {unicode: "\uE5C8"}, // Trill with lower suffix
    /*  */"brsc": {unicode: "\uE5D0"}, // Scoop
    /*  */"brlfsh": {unicode: "\uE5D1"}, // Lift, short
    /*  */"brlfmd": {unicode: "\uE5D2"}, // Lift, medium
    /*  */"brlfln": {unicode: "\uE5D3"}, // Lift, long
    /*  */"brdtsh": {unicode: "\uE5D4"}, // Doit, short
    /*  */"brdtmd": {unicode: "\uE5D5"}, // Doit, medium
    /*  */"brdtln": {unicode: "\uE5D6"}, // Doit, long
    /*  */"brfllpsh": {unicode: "\uE5D7"}, // Lip fall, short
    /*  */"brfllpmd": {unicode: "\uE5D8"}, // Lip fall, medium
    /*  */"brfllpln": {unicode: "\uE5D9"}, // Lip fall, long
    /*  */"brflsmsh": {unicode: "\uE5DA"}, // Smooth fall, short
    /*  */"brflsmmd": {unicode: "\uE5DB"}, // Smooth fall, medium
    /*  */"brflsmln": {unicode: "\uE5DC"}, // Smooth fall, long
    /*  */"brflrgsh": {unicode: "\uE5DD"}, // Rough fall, short
    /*  */"brflrgmd": {unicode: "\uE5DE"}, // Rough fall, medium
    /*  */"brflrgln": {unicode: "\uE5DF"}, // Rough fall, long
    /*  */"brpl": {unicode: "\uE5E0"}, // Plop
    /*  */"brfl": {unicode: "\uE5E1"}, // Flip
    /*  */"brsm": {unicode: "\uE5E2"}, // Smear
    /*  */"brbn": {unicode: "\uE5E3"}, // Bend
    /*  */"brjztn": {unicode: "\uE5E4"}, // Jazz turn
    /*  */"brmtcl": {unicode: "\uE5E5"}, // Muted (closed)
    /*  */"brmthfcl": {unicode: "\uE5E6"}, // Half-muted (half-closed)
    /*  */"brmtop": {unicode: "\uE5E7"}, // Open
    /*  */"brhrmtcl": {unicode: "\uE5E8"}, // Harmon mute, stem in
    /*  */"brhrmtsmhflf": {unicode: "\uE5E9"}, // Harmon mute, stem extended, left
    /*  */"brhrmtsmhfrt": {unicode: "\uE5EA"}, // Harmon mute, stem extended, right
    /*  */"brhrmtsmop": {unicode: "\uE5EB"}, // Harmon mute, stem out
    /*  */"brlfsmsh": {unicode: "\uE5EC"}, // Smooth lift, short
    /*  */"brlfsmmd": {unicode: "\uE5ED"}, // Smooth lift, medium
    /*  */"brlfsmln": {unicode: "\uE5EE"}, // Smooth lift, long
    /*  */"brvltr": {unicode: "\uE5EF"}, // Valve trill
    /*  */"dbtnab": {unicode: "\uE5F0"}, // Double-tongue above
    /*  */"dbtnbl": {unicode: "\uE5F1"}, // Double-tongue below
    /*  */"trtnab": {unicode: "\uE5F2"}, // Triple-tongue above
    /*  */"trtnbl": {unicode: "\uE5F3"}, // Triple-tongue below
    /*  */"wnclhl": {unicode: "\uE5F4"}, // Closed hole
    /*  */"wnthqrclhl": {unicode: "\uE5F5"}, // Three-quarters closed hole
    /*  */"wnhfclhl1": {unicode: "\uE5F6"}, // Half-closed hole
    /*  */"wnhfclhl2": {unicode: "\uE5F7"}, // Half-closed hole 2
    /*  */"wnhfclhl3": {unicode: "\uE5F8"}, // Half-open hole
    /*  */"wnophl": {unicode: "\uE5F9"}, // Open hole
    /*  */"wntrky": {unicode: "\uE5FA"}, // Trill key
    /*  */"wnflem": {unicode: "\uE5FB"}, // Flatter embouchure
    /*  */"wnshem": {unicode: "\uE5FC"}, // Sharper embouchure
    /*  */"wnrlem": {unicode: "\uE5FD"}, // Relaxed embouchure
    /*  */"wnlsrlem": {unicode: "\uE5FE"}, // Somewhat relaxed embouchure
    /*  */"wnttem": {unicode: "\uE5FF"}, // Tight embouchure
    /*  */"wnlsttem": {unicode: "\uE600"}, // Somewhat tight embouchure
    /*  */"wnvrttem": {unicode: "\uE601"}, // Very tight embouchure
    /*  */"wnwkarpr": {unicode: "\uE602"}, // Very relaxed embouchure / weak air-pressure
    /*  */"wnstarpr": {unicode: "\uE603"}, // Very tight embouchure / strong air pressure
    /*  */"wnrdpsnr": {unicode: "\uE604"}, // Normal reed position
    /*  */"wnrdpsot": {unicode: "\uE605"}, // Very little reed (pull outwards)
    /*  */"wnrdpsin": {unicode: "\uE606"}, // Much more reed (push inwards)
    /*  */"wnmlblsm": {unicode: "\uE607"}, // Combining multiphonics (black) for stem
    /*  */"wnmlwtsm": {unicode: "\uE608"}, // Combining multiphonics (white) for stem
    /*  */"wnmlblwtsm": {unicode: "\uE609"}, // Combining multiphonics (black and white) for stem
    /*  */"wnmtpp": {unicode: "\uE60A"}, // Mouthpiece or hand pop
    /*  */"wnrmon": {unicode: "\uE60B"}, // Rim only
    /*  */"srdnbw": {unicode: "\uE610"}, // Down bow
    /*  */"srdnbwtr": {unicode: "\uE611"}, // Turned down bow
    /*  */"srupbw": {unicode: "\uE612"}, // Up bow
    /*  */"srupbwtr": {unicode: "\uE613"}, // Turned up bow
    /*  */"srhr": {unicode: "\uE614"}, // Harmonic
    /*  */"srhfhr": {unicode: "\uE615"}, // Half-harmonic
    /*  */"srmton": {unicode: "\uE616"}, // Mute on
    /*  */"srmtof": {unicode: "\uE617"}, // Mute off
    /*  */"srbwbhbr": {unicode: "\uE618"}, // Bow behind bridge (sul ponticello)
    /*  */"srbwonbr": {unicode: "\uE619"}, // Bow on top of bridge
    /*  */"srbwontl": {unicode: "\uE61A"}, // Bow on tailpiece
    /*  */"srovdnbw": {unicode: "\uE61B"}, // Overpressure, down bow
    /*  */"srovupbw": {unicode: "\uE61C"}, // Overpressure, up bow
    /*  */"srovpsdnbw": {unicode: "\uE61D"}, // Overpressure possibile, down bow
    /*  */"srovpsupbw": {unicode: "\uE61E"}, // Overpressure possibile, up bow
    /*  */"srovnodr": {unicode: "\uE61F"}, // Overpressure, no bow direction
    /*  */"srjtab": {unicode: "\uE620"}, // Jet\u00e9 (gettato) above
    /*  */"srjtbl": {unicode: "\uE621"}, // Jet\u00e9 (gettato) below
    /*  */"srft": {unicode: "\uE622"}, // Fouett\u00e9
    /*  */"srvbpl": {unicode: "\uE623"}, // Vibrato pulse accent (Saunders) for stem
    /*  */"srtmps": {unicode: "\uE624"}, // Thumb position
    /*  */"srtmpstr": {unicode: "\uE625"}, // Turned thumb position
    /*  */"srchbwdr": {unicode: "\uE626"}, // Change bow direction, indeterminate
    /*  */"srbwbhbronst": {unicode: "\uE627"}, // Bow behind bridge on one string
    /*  */"srbwbhbrtwsr": {unicode: "\uE628"}, // Bow behind bridge on two strings
    /*  */"srbwbhbrthsr": {unicode: "\uE629"}, // Bow behind bridge on three strings
    /*  */"srbwbhbrfrsr": {unicode: "\uE62A"}, // Bow behind bridge on four strings
    /*  */"plsnpzbl": {unicode: "\uE630"}, // Snap pizzicato below
    /*  */"plsnpzab": {unicode: "\uE631"}, // Snap pizzicato above
    /*  */"plbzpz": {unicode: "\uE632"}, // Buzz pizzicato
    /*  */"pllfhnpz": {unicode: "\uE633"}, // Left-hand pizzicato
    /*  */"arup": {unicode: "\uE634"}, // Arpeggiato up
    /*  */"ardn": {unicode: "\uE635"}, // Arpeggiato down
    /*  */"plwtfn": {unicode: "\uE636"}, // With fingernails
    /*  */"plfnfl": {unicode: "\uE637"}, // Fingernail flick
    /*  */"pldm": {unicode: "\uE638"}, // Damp
    /*  */"pldmal": {unicode: "\uE639"}, // Damp all
    /*  */"plpl": {unicode: "\uE63A"}, // Plectrum
    /*  */"pldmonsm": {unicode: "\uE63B"}, // Damp for stem
    /*  */"ar": {unicode: "\uE63C"}, // Arpeggiato
    /*  */"vcmtcl": {unicode: "\uE640"}, // Mouth closed
    /*  */"vcmtslop": {unicode: "\uE641"}, // Mouth slightly open
    /*  */"vcmtop": {unicode: "\uE642"}, // Mouth open
    /*  */"vcmtwdop": {unicode: "\uE643"}, // Mouth wide open
    /*  */"vcmtpr": {unicode: "\uE644"}, // Mouth pursed
    /*  */"vcsp": {unicode: "\uE645"}, // Sprechgesang
    /*  */"vcss": {unicode: "\uE646"}, // Combining sussurando for stem
    /*  */"vcnsvc": {unicode: "\uE647"}, // Nasal voice
    /*  */"vctnclsh": {unicode: "\uE648"}, // Tongue click (Stockhausen)
    /*  */"vcficlsh": {unicode: "\uE649"}, // Finger click (Stockhausen)
    /*  */"vctnficlsh": {unicode: "\uE64A"}, // Tongue and finger click (Stockhausen)
    /*  */"vchlgs": {unicode: "\uE64B"}, // Halb gesungen (semi-sprechgesang)
    /*  */"kbpdpd": {unicode: "\uE650"}, // Pedal mark
    /*  */"kbpdP": {unicode: "\uE651"}, // Pedal P
    /*  */"kbpdE": {unicode: "\uE652"}, // Pedal e
    /*  */"kbpdD": {unicode: "\uE653"}, // Pedal d
    /*  */"kbpddt": {unicode: "\uE654"}, // Pedal dot
    /*  */"kbpdup": {unicode: "\uE655"}, // Pedal up mark
    /*  */"kbpdhf": {unicode: "\uE656"}, // Half-pedal mark
    /*  */"kbpdupnt": {unicode: "\uE657"}, // Pedal up notch
    /*  */"kbpdhy": {unicode: "\uE658"}, // Pedal hyphen
    /*  */"kbpdss": {unicode: "\uE659"}, // Sostenuto pedal mark
    /*  */"kbpdS": {unicode: "\uE65A"}, // Pedal S
    /*  */"kbpdhf2": {unicode: "\uE65B"}, // Half pedal mark 1
    /*  */"kbpdhf3": {unicode: "\uE65C"}, // Half pedal mark 2
    /*  */"kbpdupsp": {unicode: "\uE65D"}, // Pedal up special
    /*  */"kblfpdpc": {unicode: "\uE65E"}, // Left pedal pictogram
    /*  */"kbmdpdpc": {unicode: "\uE65F"}, // Middle pedal pictogram
    /*  */"kbrtpdpc": {unicode: "\uE660"}, // Right pedal pictogram
    /*  */"kbpdhl1": {unicode: "\uE661"}, // Pedal heel 1
    /*  */"kbpdhl2": {unicode: "\uE662"}, // Pedal heel 2
    /*  */"kbpdhl3": {unicode: "\uE663"}, // Pedal heel 3 (Davis)
    /*  */"kbpdto1": {unicode: "\uE664"}, // Pedal toe 1
    /*  */"kbpdto2": {unicode: "\uE665"}, // Pedal toe 2
    /*  */"kbpdhlto": {unicode: "\uE666"}, // Pedal heel or toe
    /*  */"kbplin": {unicode: "\uE667"}, // Pluck strings inside piano (Maderna)
    /*  */"kbbb2dsab": {unicode: "\uE668"}, // Clavichord bebung, 2 finger movements (above)
    /*  */"kbbb2dsbl": {unicode: "\uE669"}, // Clavichord bebung, 2 finger movements (below)
    /*  */"kbbb3dsab": {unicode: "\uE66A"}, // Clavichord bebung, 3 finger movements (above)
    /*  */"kbbb3dsbl": {unicode: "\uE66B"}, // Clavichord bebung, 3 finger movements (below)
    /*  */"kbbb4dsab": {unicode: "\uE66C"}, // Clavichord bebung, 4 finger movements (above)
    /*  */"kbbb4dsbl": {unicode: "\uE66D"}, // Clavichord bebung, 4 finger movements (below)
    /*  */"kbplwtRH": {unicode: "\uE66E"}, // Play with right hand
    /*  */"kbplwtRHen": {unicode: "\uE66F"}, // Play with right hand (end)
    /*  */"kbplwtLH": {unicode: "\uE670"}, // Play with left hand
    /*  */"kbplwtLHen": {unicode: "\uE671"}, // Play with left hand (end)
    /*  */"kbpdhkst": {unicode: "\uE672"}, // Pedal hook start
    /*  */"kbpdhken": {unicode: "\uE673"}, // Pedal hook end
    /*  */"kbpdhltoto": {unicode: "\uE674"}, // Pedal heel to toe
    /*  */"kbpdtotohl": {unicode: "\uE675"}, // Pedal toe to heel
    /*  */"kbpdprlf": {unicode: "\uE676"}, // Left parenthesis for pedal marking
    /*  */"kbpdprrt": {unicode: "\uE677"}, // Right parenthesis for pedal marking
    /*  */"hppdrs": {unicode: "\uE680"}, // Harp pedal raised (flat)
    /*  */"hppdcn": {unicode: "\uE681"}, // Harp pedal centered (natural)
    /*  */"hppdlw": {unicode: "\uE682"}, // Harp pedal lowered (sharp)
    /*  */"hppddv": {unicode: "\uE683"}, // Harp pedal divider
    /*  */"hpslslwtsp": {unicode: "\uE684"}, // Slide with suppleness (Salzedo)
    /*  */"hpslobfl": {unicode: "\uE685"}, // Oboic flux (Salzedo)
    /*  */"hpslthef": {unicode: "\uE686"}, // Thunder effect (Salzedo)
    /*  */"hpslwhsn": {unicode: "\uE687"}, // Whistling sounds (Salzedo)
    /*  */"hpslmtsn": {unicode: "\uE688"}, // Metallic sounds (Salzedo)
    /*  */"hpsltatasn": {unicode: "\uE689"}, // Tam-tam sounds (Salzedo)
    /*  */"hpslplupen": {unicode: "\uE68A"}, // Play at upper end of strings (Salzedo)
    /*  */"hpsltmsn": {unicode: "\uE68B"}, // Timpanic sounds (Salzedo)
    /*  */"hpslmftt": {unicode: "\uE68C"}, // Muffle totally (Salzedo)
    /*  */"hpslflsnlf": {unicode: "\uE68D"}, // Fluidic sounds, left hand (Salzedo)
    /*  */"hpslflsnrt": {unicode: "\uE68E"}, // Fluidic sounds, right hand (Salzedo)
    /*  */"hpmtrd": {unicode: "\uE68F"}, // Metal rod pictogram
    /*  */"hptnky": {unicode: "\uE690"}, // Tuning key pictogram
    /*  */"hptnkyhn": {unicode: "\uE691"}, // Use handle of tuning key pictogram
    /*  */"hptnkysh": {unicode: "\uE692"}, // Use shank of tuning key pictogram
    /*  */"hptnkygl": {unicode: "\uE693"}, // Retune strings for glissando
    /*  */"hpstnssm": {unicode: "\uE694"}, // Combining string noise for stem
    /*  */"hpslalas": {unicode: "\uE695"}, // Ascending aeolian chords (Salzedo)
    /*  */"hpslalds": {unicode: "\uE696"}, // Descending aeolian chords (Salzedo)
    /*  */"hpsldmlwsr": {unicode: "\uE697"}, // Damp only low strings (Salzedo)
    /*  */"hpsldmbthn": {unicode: "\uE698"}, // Damp with both hands (Salzedo)
    /*  */"hpsldmbl": {unicode: "\uE699"}, // Damp below (Salzedo)
    /*  */"hpsldmab": {unicode: "\uE69A"}, // Damp above (Salzedo)
    /*  */"hpslmtsnonst": {unicode: "\uE69B"}, // Metallic sounds, one string (Salzedo)
    /*  */"hpslissn": {unicode: "\uE69C"}, // Isolated sounds (Salzedo)
    /*  */"hpslsndr": {unicode: "\uE69D"}, // Snare drum effect (Salzedo)
    /*  */"pcgl": {unicode: "\uE6A0"}, // Glockenspiel
    /*  */"pcxy": {unicode: "\uE6A1"}, // Xylophone
    /*  */"pcxytn": {unicode: "\uE6A2"}, // Tenor xylophone
    /*  */"pcxybs": {unicode: "\uE6A3"}, // Bass xylophone
    /*  */"pcxytr": {unicode: "\uE6A4"}, // Trough xylophone
    /*  */"pcxytntr": {unicode: "\uE6A5"}, // Trough tenor xylophone
    /*  */"pcmr": {unicode: "\uE6A6"}, // Marimba
    /*  */"pcvb": {unicode: "\uE6A7"}, // Vibraphone
    /*  */"pcvbmtof": {unicode: "\uE6A8"}, // Metallophone (vibraphone motor off)
    /*  */"pcemtr": {unicode: "\uE6A9"}, // Empty trapezoid
    /*  */"pcglsmbr": {unicode: "\uE6AA"}, // Glockenspiel (Smith Brindle)
    /*  */"pcxysmbr": {unicode: "\uE6AB"}, // Xylophone (Smith Brindle)
    /*  */"pcmrsmbr": {unicode: "\uE6AC"}, // Marimba (Smith Brindle)
    /*  */"pcvbsmbr": {unicode: "\uE6AD"}, // Vibraphone (Smith Brindle)
    /*  */"pccr": {unicode: "\uE6AE"}, // Crotales
    /*  */"pcstdr": {unicode: "\uE6AF"}, // Steel drums
    /*  */"pcce": {unicode: "\uE6B0"}, // Celesta
    /*  */"pclt": {unicode: "\uE6B1"}, // Lithophone
    /*  */"pctp": {unicode: "\uE6B2"}, // Tubaphone
    /*  */"pctbbl": {unicode: "\uE6C0"}, // Tubular bells
    /*  */"pcwnchgl": {unicode: "\uE6C1"}, // Wind chimes (glass)
    /*  */"pcch": {unicode: "\uE6C2"}, // Chimes
    /*  */"pcbmch": {unicode: "\uE6C3"}, // Bamboo tube chimes
    /*  */"pcshch": {unicode: "\uE6C4"}, // Shell chimes
    /*  */"pcgltbch": {unicode: "\uE6C5"}, // Glass tube chimes
    /*  */"pcglplch": {unicode: "\uE6C6"}, // Glass plate chimes
    /*  */"pcmttbch": {unicode: "\uE6C7"}, // Metal tube chimes
    /*  */"pcmtplch": {unicode: "\uE6C8"}, // Metal plate chimes
    /*  */"pctm": {unicode: "\uE6D0"}, // Timpani
    /*  */"pcsndr": {unicode: "\uE6D1"}, // Snare drum
    /*  */"pcsndrsnof": {unicode: "\uE6D2"}, // Snare drum, snares off
    /*  */"pcsndrml": {unicode: "\uE6D3"}, // Military snare drum
    /*  */"pcbsdr": {unicode: "\uE6D4"}, // Bass drum
    /*  */"pcbsdronsd": {unicode: "\uE6D5"}, // Bass drum on side
    /*  */"pctndr": {unicode: "\uE6D6"}, // Tenor drum
    /*  */"pctoto": {unicode: "\uE6D7"}, // Tom-tom
    /*  */"pctotoch": {unicode: "\uE6D8"}, // Chinese tom-tom
    /*  */"pctotojp": {unicode: "\uE6D9"}, // Japanese tom-tom
    /*  */"pctotoinam": {unicode: "\uE6DA"}, // Indo-American tom tom
    /*  */"pctn": {unicode: "\uE6DB"}, // Tambourine
    /*  */"pcti": {unicode: "\uE6DC"}, // Timbales
    /*  */"pcbn": {unicode: "\uE6DD"}, // Bongos
    /*  */"pccg": {unicode: "\uE6DE"}, // Conga
    /*  */"pclgdr": {unicode: "\uE6DF"}, // Log drum
    /*  */"pcsldr": {unicode: "\uE6E0"}, // Slit drum
    /*  */"pcbrdr": {unicode: "\uE6E1"}, // Brake drum
    /*  */"pcgbdr": {unicode: "\uE6E2"}, // Goblet drum (djembe, dumbek)
    /*  */"pctb": {unicode: "\uE6E3"}, // Indian tabla
    /*  */"pccu": {unicode: "\uE6E4"}, // Cuica
    /*  */"pcwdbl": {unicode: "\uE6F0"}, // Wood block
    /*  */"pctmbl": {unicode: "\uE6F1"}, // Temple blocks
    /*  */"pccl": {unicode: "\uE6F2"}, // Claves
    /*  */"pcgr": {unicode: "\uE6F3"}, // Guiro
    /*  */"pcrt": {unicode: "\uE6F4"}, // Ratchet
    /*  */"pcftrt": {unicode: "\uE6F5"}, // Football rattle
    /*  */"pcwh": {unicode: "\uE6F6"}, // Whip
    /*  */"pcbrcl": {unicode: "\uE6F7"}, // Board clapper
    /*  */"pccs": {unicode: "\uE6F8"}, // Castanets
    /*  */"pccswthn": {unicode: "\uE6F9"}, // Castanets with handle
    /*  */"pcqj": {unicode: "\uE6FA"}, // Quijada (jawbone)
    /*  */"pcbmsc": {unicode: "\uE6FB"}, // Bamboo scraper
    /*  */"pcrcrc": {unicode: "\uE6FC"}, // Reco-reco
    /*  */"pctr": {unicode: "\uE700"}, // Triangle
    /*  */"pcan": {unicode: "\uE701"}, // Anvil
    /*  */"pcslbl": {unicode: "\uE710"}, // Sleigh bell
    /*  */"pccwbl": {unicode: "\uE711"}, // Cow bell
    /*  */"pcal": {unicode: "\uE712"}, // Almglocken
    /*  */"pcblpl": {unicode: "\uE713"}, // Bell plate
    /*  */"pcbl": {unicode: "\uE714"}, // Bell
    /*  */"pchn": {unicode: "\uE715"}, // Handbell
    /*  */"pccc": {unicode: "\uE716"}, // Cencerro
    /*  */"pcag": {unicode: "\uE717"}, // Agogo
    /*  */"pcshbl": {unicode: "\uE718"}, // Shell bells
    /*  */"pcjnbl": {unicode: "\uE719"}, // Jingle bells
    /*  */"pcbltr": {unicode: "\uE71A"}, // Bell tree
    /*  */"pccrcy": {unicode: "\uE720"}, // Crash cymbals
    /*  */"pcsscy": {unicode: "\uE721"}, // Suspended cymbal
    /*  */"pchiht": {unicode: "\uE722"}, // Hi-hat
    /*  */"pchihtonst": {unicode: "\uE723"}, // Hi-hat cymbals on stand
    /*  */"pcszcy": {unicode: "\uE724"}, // Sizzle cymbal
    /*  */"pcvtht": {unicode: "\uE725"}, // Vietnamese hat cymbal
    /*  */"pcchcy": {unicode: "\uE726"}, // Chinese cymbal
    /*  */"pcficy": {unicode: "\uE727"}, // Finger cymbals
    /*  */"pccytn": {unicode: "\uE728"}, // Cymbal tongs
    /*  */"pcedofcy": {unicode: "\uE729"}, // Edge of cymbal
    /*  */"pcblofcy": {unicode: "\uE72A"}, // Bell of cymbal
    /*  */"pctata": {unicode: "\uE730"}, // Tam-tam
    /*  */"pctatawtbt": {unicode: "\uE731"}, // Tam-tam with beater (Smith Brindle)
    /*  */"pcgn": {unicode: "\uE732"}, // Gong
    /*  */"pcgnwtbt": {unicode: "\uE733"}, // Gong with button (nipple)
    /*  */"pcslbrongn": {unicode: "\uE734"}, // Slide brush on gong
    /*  */"pcfl": {unicode: "\uE740"}, // Flexatone
    /*  */"pcma": {unicode: "\uE741"}, // Maraca
    /*  */"pcms": {unicode: "\uE742"}, // Maracas
    /*  */"pccb": {unicode: "\uE743"}, // Cabasa
    /*  */"pcth": {unicode: "\uE744"}, // Thundersheet
    /*  */"pcvs": {unicode: "\uE745"}, // Vibraslap
    /*  */"pcss": {unicode: "\uE746"}, // Sistrum
    /*  */"pcrn": {unicode: "\uE747"}, // Rainstick
    /*  */"pcchrt": {unicode: "\uE748"}, // Chain rattle
    /*  */"pcslwh": {unicode: "\uE750"}, // Slide whistle
    /*  */"pcbrwh": {unicode: "\uE751"}, // Bird whistle
    /*  */"pcplwh": {unicode: "\uE752"}, // Police whistle
    /*  */"pcsr": {unicode: "\uE753"}, // Siren
    /*  */"pcwnmc": {unicode: "\uE754"}, // Wind machine
    /*  */"pccrhr": {unicode: "\uE755"}, // Car horn
    /*  */"pcklhr": {unicode: "\uE756"}, // Klaxon horn
    /*  */"pcdccl": {unicode: "\uE757"}, // Duck call
    /*  */"pcwnwh": {unicode: "\uE758"}, // Wind whistle (or mouth siren)
    /*  */"pcmg": {unicode: "\uE759"}, // Megaphone
    /*  */"pcltfl": {unicode: "\uE75A"}, // Lotus flute
    /*  */"pcpssh": {unicode: "\uE760"}, // Pistol shot
    /*  */"pccn": {unicode: "\uE761"}, // Cannon
    /*  */"pcsnbl": {unicode: "\uE762"}, // Sandpaper blocks
    /*  */"pclnrr": {unicode: "\uE763"}, // Lion's roar
    /*  */"pcglhp": {unicode: "\uE764"}, // Glass harp
    /*  */"pcglhm": {unicode: "\uE765"}, // Glass harmonica
    /*  */"pcmssw": {unicode: "\uE766"}, // Musical saw
    /*  */"pcjwhp": {unicode: "\uE767"}, // Jaw harp
    /*  */"pcbtsfxyup": {unicode: "\uE770"}, // Soft xylophone stick up
    /*  */"pcbtsfxydn": {unicode: "\uE771"}, // Soft xylophone stick down
    /*  */"pcbtsfxyrt": {unicode: "\uE772"}, // Soft xylophone stick right
    /*  */"pcbtsfxylf": {unicode: "\uE773"}, // Soft xylophone stick left
    /*  */"pcbtmdxyup": {unicode: "\uE774"}, // Medium xylophone stick up
    /*  */"pcbtmdxydn": {unicode: "\uE775"}, // Medium xylophone stick down
    /*  */"pcbtmdxyrt": {unicode: "\uE776"}, // Medium xylophone stick right
    /*  */"pcbtmdxylf": {unicode: "\uE777"}, // Medium xylophone stick left
    /*  */"pcbthrxyup": {unicode: "\uE778"}, // Hard xylophone stick up
    /*  */"pcbthrxydn": {unicode: "\uE779"}, // Hard xylophone stick down
    /*  */"pcbthrxyrt": {unicode: "\uE77A"}, // Hard xylophone stick right
    /*  */"pcbthrxylf": {unicode: "\uE77B"}, // Hard xylophone stick left
    /*  */"pcbtwdxyup": {unicode: "\uE77C"}, // Wood xylophone stick up
    /*  */"pcbtwdxydn": {unicode: "\uE77D"}, // Wood xylophone stick down
    /*  */"pcbtwdxyrt": {unicode: "\uE77E"}, // Wood xylophone stick right
    /*  */"pcbtwdxylf": {unicode: "\uE77F"}, // Wood xylophone stick left
    /*  */"pcbtsfglup": {unicode: "\uE780"}, // Soft glockenspiel stick up
    /*  */"pcbtsfgldn": {unicode: "\uE781"}, // Soft glockenspiel stick down
    /*  */"pcbtsfglrt": {unicode: "\uE782"}, // Soft glockenspiel stick right
    /*  */"pcbtsfgllf": {unicode: "\uE783"}, // Soft glockenspiel stick left
    /*  */"pcbthrglup": {unicode: "\uE784"}, // Hard glockenspiel stick up
    /*  */"pcbthrgldn": {unicode: "\uE785"}, // Hard glockenspiel stick down
    /*  */"pcbthrglrt": {unicode: "\uE786"}, // Hard glockenspiel stick right
    /*  */"pcbthrgllf": {unicode: "\uE787"}, // Hard glockenspiel stick left
    /*  */"pcbtsftmup": {unicode: "\uE788"}, // Soft timpani stick up
    /*  */"pcbtsftmdn": {unicode: "\uE789"}, // Soft timpani stick down
    /*  */"pcbtsftmrt": {unicode: "\uE78A"}, // Soft timpani stick right
    /*  */"pcbtsftmlf": {unicode: "\uE78B"}, // Soft timpani stick left
    /*  */"pcbtmdtmup": {unicode: "\uE78C"}, // Medium timpani stick up
    /*  */"pcbtmdtmdn": {unicode: "\uE78D"}, // Medium timpani stick down
    /*  */"pcbtmdtmrt": {unicode: "\uE78E"}, // Medium timpani stick right
    /*  */"pcbtmdtmlf": {unicode: "\uE78F"}, // Medium timpani stick left
    /*  */"pcbthrtmup": {unicode: "\uE790"}, // Hard timpani stick up
    /*  */"pcbthrtmdn": {unicode: "\uE791"}, // Hard timpani stick down
    /*  */"pcbthrtmrt": {unicode: "\uE792"}, // Hard timpani stick right
    /*  */"pcbthrtmlf": {unicode: "\uE793"}, // Hard timpani stick left
    /*  */"pcbtwdtmup": {unicode: "\uE794"}, // Wood timpani stick up
    /*  */"pcbtwdtmdn": {unicode: "\uE795"}, // Wood timpani stick down
    /*  */"pcbtwdtmrt": {unicode: "\uE796"}, // Wood timpani stick right
    /*  */"pcbtwdtmlf": {unicode: "\uE797"}, // Wood timpani stick left
    /*  */"pcbtsfbsdrup": {unicode: "\uE798"}, // Soft bass drum stick up
    /*  */"pcbtsfbsdrdn": {unicode: "\uE799"}, // Soft bass drum stick down
    /*  */"pcbtmdbsdrup": {unicode: "\uE79A"}, // Medium bass drum stick up
    /*  */"pcbtmdbsdrdn": {unicode: "\uE79B"}, // Medium bass drum stick down
    /*  */"pcbthrbsdrup": {unicode: "\uE79C"}, // Hard bass drum stick up
    /*  */"pcbthrbsdrdn": {unicode: "\uE79D"}, // Hard bass drum stick down
    /*  */"pcbtmtbsdrup": {unicode: "\uE79E"}, // Metal bass drum stick up
    /*  */"pcbtmtbsdrdn": {unicode: "\uE79F"}, // Metal bass drum stick down
    /*  */"pcbtdbbsdrup": {unicode: "\uE7A0"}, // Double bass drum stick up
    /*  */"pcbtdbbsdrdn": {unicode: "\uE7A1"}, // Double bass drum stick down
    /*  */"pcbtsfyrup": {unicode: "\uE7A2"}, // Soft yarn beater up
    /*  */"pcbtsfyrdn": {unicode: "\uE7A3"}, // Soft yarn beater down
    /*  */"pcbtsfyrrt": {unicode: "\uE7A4"}, // Soft yarn beater right
    /*  */"pcbtsfyrlf": {unicode: "\uE7A5"}, // Soft yarn beater left
    /*  */"pcbtmdyrup": {unicode: "\uE7A6"}, // Medium yarn beater up
    /*  */"pcbtmdyrdn": {unicode: "\uE7A7"}, // Medium yarn beater down
    /*  */"pcbtmdyrrt": {unicode: "\uE7A8"}, // Medium yarn beater right
    /*  */"pcbtmdyrlf": {unicode: "\uE7A9"}, // Medium yarn beater left
    /*  */"pcbthryrup": {unicode: "\uE7AA"}, // Hard yarn beater up
    /*  */"pcbthryrdn": {unicode: "\uE7AB"}, // Hard yarn beater down
    /*  */"pcbthryrrt": {unicode: "\uE7AC"}, // Hard yarn beater right
    /*  */"pcbthryrlf": {unicode: "\uE7AD"}, // Hard yarn beater left
    /*  */"pcbtspup": {unicode: "\uE7AE"}, // Superball beater up
    /*  */"pcbtspdn": {unicode: "\uE7AF"}, // Superball beater down
    /*  */"pcbtsprt": {unicode: "\uE7B0"}, // Superball beater right
    /*  */"pcbtsplf": {unicode: "\uE7B1"}, // Superball beater left
    /*  */"pcsp": {unicode: "\uE7B2"}, // Superball
    /*  */"pcwnhrup": {unicode: "\uE7B3"}, // Wound beater, hard core up
    /*  */"pcwnhrdn": {unicode: "\uE7B4"}, // Wound beater, hard core down
    /*  */"pcwnhrrt": {unicode: "\uE7B5"}, // Wound beater, hard core right
    /*  */"pcwnhrlf": {unicode: "\uE7B6"}, // Wound beater, hard core left
    /*  */"pcwnsfup": {unicode: "\uE7B7"}, // Wound beater, soft core up
    /*  */"pcwnsfdn": {unicode: "\uE7B8"}, // Wound beater, soft core down
    /*  */"pcwnsfrt": {unicode: "\uE7B9"}, // Wound beater, soft core right
    /*  */"pcwnsflf": {unicode: "\uE7BA"}, // Wound beater, soft core left
    /*  */"pcgmsfup": {unicode: "\uE7BB"}, // Soft gum beater, up
    /*  */"pcgmsfdn": {unicode: "\uE7BC"}, // Soft gum beater, down
    /*  */"pcgmsfrt": {unicode: "\uE7BD"}, // Soft gum beater, right
    /*  */"pcgmsflf": {unicode: "\uE7BE"}, // Soft gum beater, left
    /*  */"pcgmmdup": {unicode: "\uE7BF"}, // Medium gum beater, up
    /*  */"pcgmmddn": {unicode: "\uE7C0"}, // Medium gum beater, down
    /*  */"pcgmmdrt": {unicode: "\uE7C1"}, // Medium gum beater, right
    /*  */"pcgmmdlf": {unicode: "\uE7C2"}, // Medium gum beater, left
    /*  */"pcgmhrup": {unicode: "\uE7C3"}, // Hard gum beater, up
    /*  */"pcgmhrdn": {unicode: "\uE7C4"}, // Hard gum beater, down
    /*  */"pcgmhrrt": {unicode: "\uE7C5"}, // Hard gum beater, right
    /*  */"pcgmhrlf": {unicode: "\uE7C6"}, // Hard gum beater, left
    /*  */"pcbtmtup": {unicode: "\uE7C7"}, // Metal beater, up
    /*  */"pcbtmtdn": {unicode: "\uE7C8"}, // Metal beater down
    /*  */"pcbtmtrt": {unicode: "\uE7C9"}, // Metal beater, right
    /*  */"pcbtmtlf": {unicode: "\uE7CA"}, // Metal beater, left
    /*  */"pcbthmwdup": {unicode: "\uE7CB"}, // Wooden hammer, up
    /*  */"pcbthmwddn": {unicode: "\uE7CC"}, // Wooden hammer, down
    /*  */"pcbthmplup": {unicode: "\uE7CD"}, // Plastic hammer, up
    /*  */"pcbthmpldn": {unicode: "\uE7CE"}, // Plastic hammer, down
    /*  */"pcbthmmtup": {unicode: "\uE7CF"}, // Metal hammer, up
    /*  */"pcbthmmtdn": {unicode: "\uE7D0"}, // Metal hammer, down
    /*  */"pcbtsnstup": {unicode: "\uE7D1"}, // Snare sticks up
    /*  */"pcbtsnstdn": {unicode: "\uE7D2"}, // Snare sticks down
    /*  */"pcbtjzstup": {unicode: "\uE7D3"}, // Jazz sticks up
    /*  */"pcbtjzstdn": {unicode: "\uE7D4"}, // Jazz sticks down
    /*  */"pcbttrup": {unicode: "\uE7D5"}, // Triangle beater up
    /*  */"pcbttrdn": {unicode: "\uE7D6"}, // Triangle beater down
    /*  */"pcbtwrbrup": {unicode: "\uE7D7"}, // Wire brushes up
    /*  */"pcbtwrbrdn": {unicode: "\uE7D8"}, // Wire brushes down
    /*  */"pcbtbrmlup": {unicode: "\uE7D9"}, // Brass mallets up
    /*  */"pcbtbrmldn": {unicode: "\uE7DA"}, // Brass mallets down
    /*  */"pcbtsfxy": {unicode: "\uE7DB"}, // Soft xylophone beaters
    /*  */"pcbtspwdml": {unicode: "\uE7DC"}, // Spoon-shaped wooden mallet
    /*  */"pcbtgrsc": {unicode: "\uE7DD"}, // Guiro scraper
    /*  */"pcbtbw": {unicode: "\uE7DE"}, // Bow
    /*  */"pcbtml": {unicode: "\uE7DF"}, // Chime hammer up
    /*  */"pcbtmthm": {unicode: "\uE7E0"}, // Metal hammer
    /*  */"pcbthm": {unicode: "\uE7E1"}, // Hammer
    /*  */"pcbtknnd": {unicode: "\uE7E2"}, // Knitting needle
    /*  */"pcbthn": {unicode: "\uE7E3"}, // Hand
    /*  */"pcbtfi": {unicode: "\uE7E4"}, // Finger
    /*  */"pcbtfs": {unicode: "\uE7E5"}, // Fist
    /*  */"pcbtfn": {unicode: "\uE7E6"}, // Fingernails
    /*  */"pcco": {unicode: "\uE7E7"}, // Coins
    /*  */"pcdrst": {unicode: "\uE7E8"}, // Drum stick
    /*  */"pcbtcmpr": {unicode: "\uE7E9"}, // Combining parentheses for round beaters (padded)
    /*  */"pcbtcmdscr": {unicode: "\uE7EA"}, // Combining dashed circle for round beaters (plated)
    /*  */"pcbtbx": {unicode: "\uE7EB"}, // Box for percussion beater
    /*  */"pcbtmldn": {unicode: "\uE7EC"}, // Chime hammer down
    /*  */"pcbtbrmlrt": {unicode: "\uE7ED"}, // Brass mallets right
    /*  */"pcbtbrmllf": {unicode: "\uE7EE"}, // Brass mallets left
    /*  */"pcbttrpl": {unicode: "\uE7EF"}, // Triangle beater plain
    /*  */"pcstsh": {unicode: "\uE7F0"}, // Stick shot
    /*  */"pcsccntoed": {unicode: "\uE7F1"}, // Scrape from center to edge
    /*  */"pcscedtocn": {unicode: "\uE7F2"}, // Scrape from edge to center
    /*  */"pcscarrm": {unicode: "\uE7F3"}, // Scrape around rim (counter-clockwise)
    /*  */"pconrm": {unicode: "\uE7F4"}, // On rim
    /*  */"pcoprmsh": {unicode: "\uE7F5"}, // Closed / rim shot
    /*  */"pchfop1": {unicode: "\uE7F6"}, // Half-open
    /*  */"pchfop2": {unicode: "\uE7F7"}, // Half-open 2 (Weinberg)
    /*  */"pcop": {unicode: "\uE7F8"}, // Open
    /*  */"pcdm1": {unicode: "\uE7F9"}, // Damp
    /*  */"pcdm2": {unicode: "\uE7FA"}, // Damp 2
    /*  */"pcdm3": {unicode: "\uE7FB"}, // Damp 3
    /*  */"pcdm4": {unicode: "\uE7FC"}, // Damp 4
    /*  */"pcrmshonsm": {unicode: "\uE7FD"}, // Rim shot for stem
    /*  */"pccn1": {unicode: "\uE7FE"}, // Center (Weinberg)
    /*  */"pccn2": {unicode: "\uE7FF"}, // Center (Ghent)
    /*  */"pccn3": {unicode: "\uE800"}, // Center (Caltabiano)
    /*  */"pcrm1": {unicode: "\uE801"}, // Rim or edge (Weinberg)
    /*  */"pcrm2": {unicode: "\uE802"}, // Rim (Ghent)
    /*  */"pcrm3": {unicode: "\uE803"}, // Rim (Caltabiano)
    /*  */"pcnrps": {unicode: "\uE804"}, // Normal position (Caltabiano)
    /*  */"pcckcy": {unicode: "\uE805"}, // Choke (Weinberg)
    /*  */"pcrthnsq": {unicode: "\uE806"}, // Left hand (Agostini)
    /*  */"pclfhncr": {unicode: "\uE807"}, // Right hand (Agostini)
    /*  */"pcswsm": {unicode: "\uE808"}, // Combining swish for stem
    /*  */"pctnrtsm": {unicode: "\uE809"}, // Combining turn right for stem
    /*  */"pctnlfsm": {unicode: "\uE80A"}, // Combining turn left for stem
    /*  */"pctnrtlfsm": {unicode: "\uE80B"}, // Combining turn left or right for stem
    /*  */"pccrsm": {unicode: "\uE80C"}, // Combining crush for stem
    /*  */"pcddntsm": {unicode: "\uE80D"}, // Combining X for stem (dead note)
    /*  */"pcscarrmcl": {unicode: "\uE80E"}, // Scrape around rim (clockwise)
    /*  */"hnmr": {unicode: "\uE810"}, // Martellato
    /*  */"hnmrlf": {unicode: "\uE811"}, // Martellato lift
    /*  */"hnhnmr": {unicode: "\uE812"}, // Hand martellato
    /*  */"hnmtmr": {unicode: "\uE813"}, // Muted martellato
    /*  */"hnmlblss": {unicode: "\uE814"}, // Mallet, bell suspended
    /*  */"hnmlblontb": {unicode: "\uE815"}, // Mallet, bell on table
    /*  */"hnmllf": {unicode: "\uE816"}, // Mallet lift
    /*  */"hnpllf": {unicode: "\uE817"}, // Pluck lift
    /*  */"hnswup": {unicode: "\uE818"}, // Swing up
    /*  */"hnswdn": {unicode: "\uE819"}, // Swing down
    /*  */"hnsw": {unicode: "\uE81A"}, // Swing
    /*  */"hnec1": {unicode: "\uE81B"}, // Echo
    /*  */"hnec2": {unicode: "\uE81C"}, // Echo 2
    /*  */"hngy": {unicode: "\uE81D"}, // Gyro
    /*  */"hndm3": {unicode: "\uE81E"}, // Damp 3
    /*  */"hnbl": {unicode: "\uE81F"}, // Belltree
    /*  */"hntbsnbl": {unicode: "\uE820"}, // Table single handbell
    /*  */"hntbprbl": {unicode: "\uE821"}, // Table pair of handbells
    /*  */"gtvbbrsc": {unicode: "\uE830"}, // Guitar vibrato bar scoop
    /*  */"gtvbbrdp": {unicode: "\uE831"}, // Guitar vibrato bar dip
    /*  */"gtsh": {unicode: "\uE832"}, // Guitar shake
    /*  */"gtst0": {unicode: "\uE833"}, // String number 0
    /*  */"gtst1": {unicode: "\uE834"}, // String number 1
    /*  */"gtst2": {unicode: "\uE835"}, // String number 2
    /*  */"gtst3": {unicode: "\uE836"}, // String number 3
    /*  */"gtst4": {unicode: "\uE837"}, // String number 4
    /*  */"gtst5": {unicode: "\uE838"}, // String number 5
    /*  */"gtst6": {unicode: "\uE839"}, // String number 6
    /*  */"gtst7": {unicode: "\uE83A"}, // String number 7
    /*  */"gtst8": {unicode: "\uE83B"}, // String number 8
    /*  */"gtst9": {unicode: "\uE83C"}, // String number 9
    /*  */"gtoppd": {unicode: "\uE83D"}, // Open wah/volume pedal
    /*  */"gthfoppd": {unicode: "\uE83E"}, // Half-open wah/volume pedal
    /*  */"gtclpd": {unicode: "\uE83F"}, // Closed wah/volume pedal
    /*  */"gtlfhntp": {unicode: "\uE840"}, // Left-hand tapping
    /*  */"gtrthntp": {unicode: "\uE841"}, // Right-hand tapping
    /*  */"gtgl": {unicode: "\uE842"}, // Golpe (tapping the pick guard)
    /*  */"gtfdin": {unicode: "\uE843"}, // Fade in
    /*  */"gtfdot": {unicode: "\uE844"}, // Fade out
    /*  */"gtvlsw": {unicode: "\uE845"}, // Volume swell
    /*  */"gtstup": {unicode: "\uE846"}, // Strum direction up
    /*  */"gtstdn": {unicode: "\uE847"}, // Strum direction down
    /*  */"gtbrfl": {unicode: "\uE848"}, // Full barr\u00e9
    /*  */"gtbrhf": {unicode: "\uE849"}, // Half barr\u00e9
    /*  */"gtst10": {unicode: "\uE84A"}, // String number 10
    /*  */"gtst11": {unicode: "\uE84B"}, // String number 11
    /*  */"gtst12": {unicode: "\uE84C"}, // String number 12
    /*  */"gtst13": {unicode: "\uE84D"}, // String number 13
    /*  */"fr3st": {unicode: "\uE850"}, // 3-string fretboard
    /*  */"fr3stnt": {unicode: "\uE851"}, // 3-string fretboard at nut
    /*  */"fr4st": {unicode: "\uE852"}, // 4-string fretboard
    /*  */"fr4stnt": {unicode: "\uE853"}, // 4-string fretboard at nut
    /*  */"fr5st": {unicode: "\uE854"}, // 5-string fretboard
    /*  */"fr5stnt": {unicode: "\uE855"}, // 5-string fretboard at nut
    /*  */"fr6st": {unicode: "\uE856"}, // 6-string fretboard
    /*  */"fr6stnt": {unicode: "\uE857"}, // 6-string fretboard at nut
    /*  */"frflcr": {unicode: "\uE858"}, // Fingered fret (filled circle)
    /*  */"frX": {unicode: "\uE859"}, // String not played (X)
    /*  */"frO": {unicode: "\uE85A"}, // Open string (O)
    /*  */"anhp": {unicode: "\uE860"}, // Hauptstimme
    /*  */"annb": {unicode: "\uE861"}, // Nebenstimme
    /*  */"anstst": {unicode: "\uE862"}, // Start of stimme
    /*  */"anenst": {unicode: "\uE863"}, // End of stimme
    /*  */"anth": {unicode: "\uE864"}, // Theme
    /*  */"anthrt": {unicode: "\uE865"}, // Retrograde of theme
    /*  */"anthrtin": {unicode: "\uE866"}, // Retrograde inversion of theme
    /*  */"anthin": {unicode: "\uE867"}, // Inversion of theme
    /*  */"anth1": {unicode: "\uE868"}, // Theme 1
    /*  */"anin1": {unicode: "\uE869"}, // Inversion 1
    /*  */"anch": {unicode: "\uE86A"}, // Choralmelodie (Berg)
    /*  */"anhr": {unicode: "\uE86B"}, // Hauptrhythmus (Berg)
    /*  */"csdm": {unicode: "\uE870"}, // Diminished
    /*  */"cshfdm": {unicode: "\uE871"}, // Half-diminished
    /*  */"csag": {unicode: "\uE872"}, // Augmented
    /*  */"csmjsv": {unicode: "\uE873"}, // Major seventh
    /*  */"csmn": {unicode: "\uE874"}, // Minor
    /*  */"csprlftl": {unicode: "\uE875"}, // Double-height left parenthesis
    /*  */"csprrttl": {unicode: "\uE876"}, // Double-height right parenthesis
    /*  */"csbklftl": {unicode: "\uE877"}, // Double-height left bracket
    /*  */"csbkrttl": {unicode: "\uE878"}, // Double-height right bracket
    /*  */"csprlfvrtl": {unicode: "\uE879"}, // Triple-height left parenthesis
    /*  */"csprrtvrtl": {unicode: "\uE87A"}, // Triple-height right parenthesis
    /*  */"csalbssl": {unicode: "\uE87B"}, // Slash for altered bass note
    /*  */"csdgarsl": {unicode: "\uE87C"}, // Slash for chord symbols arranged diagonally
    /*  */"tp0": {unicode: "\uE880"}, // Tuplet 0
    /*  */"tp1": {unicode: "\uE881"}, // Tuplet 1
    /*  */"tp2": {unicode: "\uE882"}, // Tuplet 2
    /*  */"tp3": {unicode: "\uE883"}, // Tuplet 3
    /*  */"tp4": {unicode: "\uE884"}, // Tuplet 4
    /*  */"tp5": {unicode: "\uE885"}, // Tuplet 5
    /*  */"tp6": {unicode: "\uE886"}, // Tuplet 6
    /*  */"tp7": {unicode: "\uE887"}, // Tuplet 7
    /*  */"tp8": {unicode: "\uE888"}, // Tuplet 8
    /*  */"tp9": {unicode: "\uE889"}, // Tuplet 9
    /*  */"tpcl": {unicode: "\uE88A"}, // Tuplet colon
    /*  */"cnstbt": {unicode: "\uE890"}, // Strong beat or cue
    /*  */"cnlfbt": {unicode: "\uE891"}, // Left-hand beat or cue
    /*  */"cnrtbt": {unicode: "\uE892"}, // Right-hand beat or cue
    /*  */"cnwkbt": {unicode: "\uE893"}, // Weak beat or cue
    /*  */"cnbt2sm": {unicode: "\uE894"}, // Beat 2, simple time
    /*  */"cnbt3sm": {unicode: "\uE895"}, // Beat 3, simple time
    /*  */"cnbt4sm": {unicode: "\uE896"}, // Beat 4, simple time
    /*  */"cnbt2cm": {unicode: "\uE897"}, // Beat 2, compound time
    /*  */"cnbt3cm": {unicode: "\uE898"}, // Beat 3, compound time
    /*  */"cnbt4cm": {unicode: "\uE899"}, // Beat 4, compound time
    /*  */"cnun": {unicode: "\uE89A"}, // Unconducted/free passages
    /*  */"acRH3rnpc": {unicode: "\uE8A0"}, // Right hand, 3 ranks, 4' stop (piccolo)
    /*  */"acRH3rncl": {unicode: "\uE8A1"}, // Right hand, 3 ranks, 8' stop (clarinet)
    /*  */"acRH3rnuptr8": {unicode: "\uE8A2"}, // Right hand, 3 ranks, upper tremolo 8' stop
    /*  */"acRH3rnlwtr8": {unicode: "\uE8A3"}, // Right hand, 3 ranks, lower tremolo 8' stop
    /*  */"acRH3rnbs": {unicode: "\uE8A4"}, // Right hand, 3 ranks, 16' stop (bassoon)
    /*  */"acRH3rnob": {unicode: "\uE8A5"}, // Right hand, 3 ranks, 4' stop + 8' stop (oboe)
    /*  */"acRH3rnvl": {unicode: "\uE8A6"}, // Right hand, 3 ranks, 8' stop + upper tremolo 8' stop (violin)
    /*  */"acRH3rnimms": {unicode: "\uE8A7"}, // Right hand, 3 ranks, 4' stop + 8' stop + upper tremolo 8' stop (imitation musette)
    /*  */"acRH3rnatms": {unicode: "\uE8A8"}, // Right hand, 3 ranks, lower tremolo 8' stop + 8' stop + upper tremolo 8' stop (authentic musette)
    /*  */"acRH3rnor": {unicode: "\uE8A9"}, // Right hand, 3 ranks, 4' stop + 16' stop (organ)
    /*  */"acRH3rnhr": {unicode: "\uE8AA"}, // Right hand, 3 ranks, 4' stop + 8' stop + 16' stop (harmonium)
    /*  */"acRH3rnbn": {unicode: "\uE8AB"}, // Right hand, 3 ranks, 8' stop + 16' stop (bandone\u00f3n)
    /*  */"acRH3rnac": {unicode: "\uE8AC"}, // Right hand, 3 ranks, 8' stop + upper tremolo 8' stop + 16' stop (accordion)
    /*  */"acRH3rnms": {unicode: "\uE8AD"}, // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + upper tremolo 8' stop + 16' stop (master)
    /*  */"acRH3rntwch": {unicode: "\uE8AE"}, // Right hand, 3 ranks, lower tremolo 8' stop + upper tremolo 8' stop
    /*  */"acRH3rntrlw8ve": {unicode: "\uE8AF"}, // Right hand, 3 ranks, lower tremolo 8' stop + upper tremolo 8' stop + 16' stop
    /*  */"acRH3rntrup8ve": {unicode: "\uE8B0"}, // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + upper tremolo 8' stop
    /*  */"acRH3rndbtrlw8ve": {unicode: "\uE8B1"}, // Right hand, 3 ranks, lower tremolo 8' stop + 8' stop + upper tremolo 8' stop + 16' stop
    /*  */"acRH3rndbtrup8ve": {unicode: "\uE8B2"}, // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + 8' stop + upper tremolo 8' stop
    /*  */"acRH3rnflfc": {unicode: "\uE8B3"}, // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + 8' stop + upper tremolo 8' stop + 16' stop
    /*  */"acRH4rnsp": {unicode: "\uE8B4"}, // Right hand, 4 ranks, soprano
    /*  */"acRH4rnal": {unicode: "\uE8B5"}, // Right hand, 4 ranks, alto
    /*  */"acRH4rntn": {unicode: "\uE8B6"}, // Right hand, 4 ranks, tenor
    /*  */"acRH4rnms": {unicode: "\uE8B7"}, // Right hand, 4 ranks, master
    /*  */"acRH4rnsfbs": {unicode: "\uE8B8"}, // Right hand, 4 ranks, soft bass
    /*  */"acRH4rnsftn": {unicode: "\uE8B9"}, // Right hand, 4 ranks, soft tenor
    /*  */"acRH4rnbsal": {unicode: "\uE8BA"}, // Right hand, 4 ranks, bass/alto
    /*  */"acLH2rn8rn": {unicode: "\uE8BB"}, // Left hand, 2 ranks, 8' stop (round)
    /*  */"acLH2rn16rn": {unicode: "\uE8BC"}, // Left hand, 2 ranks, 16' stop (round)
    /*  */"acLH2rn8pl16rn": {unicode: "\uE8BD"}, // Left hand, 2 ranks, 8' stop + 16' stop (round)
    /*  */"acLH2rnmsrn": {unicode: "\uE8BE"}, // Left hand, 2 ranks, master (round)
    /*  */"acLH2rnmspl16rn": {unicode: "\uE8BF"}, // Left hand, 2 ranks, master + 16' stop (round)
    /*  */"acLH2rnflmsrn": {unicode: "\uE8C0"}, // Left hand, 2 ranks, full master (round)
    /*  */"acLH3rn8sq": {unicode: "\uE8C1"}, // Left hand, 3 ranks, 8' stop (square)
    /*  */"acLH3rn2sq": {unicode: "\uE8C2"}, // Left hand, 3 ranks, 2' stop (square)
    /*  */"acLH3rndb8sq": {unicode: "\uE8C3"}, // Left hand, 3 ranks, double 8' stop (square)
    /*  */"acLH3rn2pl8sq": {unicode: "\uE8C4"}, // Left hand, 3 ranks, 2' stop + 8' stop (square)
    /*  */"acLH3rnttsq": {unicode: "\uE8C5"}, // Left hand, 3 ranks, 2' stop + double 8' stop (tutti) (square)
    /*  */"accmRH3rnem": {unicode: "\uE8C6"}, // Combining right hand, 3 ranks, empty
    /*  */"accmRH4rnem": {unicode: "\uE8C7"}, // Combining right hand, 4 ranks, empty
    /*  */"accmLH2rnem": {unicode: "\uE8C8"}, // Combining left hand, 2 ranks, empty
    /*  */"accmLH3rnemsq": {unicode: "\uE8C9"}, // Combining left hand, 3 ranks, empty (square)
    /*  */"accmdt": {unicode: "\uE8CA"}, // Combining accordion coupler dot
    /*  */"acps": {unicode: "\uE8CB"}, // Push
    /*  */"acpl": {unicode: "\uE8CC"}, // Pull
    /*  */"acrc2": {unicode: "\uE8CD"}, // Ricochet (2 tones)
    /*  */"acrc3": {unicode: "\uE8CE"}, // Ricochet (3 tones)
    /*  */"acrc4": {unicode: "\uE8CF"}, // Ricochet (4 tones)
    /*  */"acrc5": {unicode: "\uE8D0"}, // Ricochet (5 tones)
    /*  */"acrc6": {unicode: "\uE8D1"}, // Ricochet (6 tones)
    /*  */"acrcsm2": {unicode: "\uE8D2"}, // Combining ricochet for stem (2 tones)
    /*  */"acrcsm3": {unicode: "\uE8D3"}, // Combining ricochet for stem (3 tones)
    /*  */"acrcsm4": {unicode: "\uE8D4"}, // Combining ricochet for stem (4 tones)
    /*  */"acrcsm5": {unicode: "\uE8D5"}, // Combining ricochet for stem (5 tones)
    /*  */"acrcsm6": {unicode: "\uE8D6"}, // Combining ricochet for stem (6 tones)
    /*  */"cnbgbm": {unicode: "\uE8E0"}, // Begin beam
    /*  */"cnenbm": {unicode: "\uE8E1"}, // End beam
    /*  */"cnbgti": {unicode: "\uE8E2"}, // Begin tie
    /*  */"cnenti": {unicode: "\uE8E3"}, // End tie
    /*  */"cnbgsl": {unicode: "\uE8E4"}, // Begin slur
    /*  */"cnensl": {unicode: "\uE8E5"}, // End slur
    /*  */"cnbgph": {unicode: "\uE8E6"}, // Begin phrase
    /*  */"cnenph": {unicode: "\uE8E7"}, // End phrase
    /*  */"chst": {unicode: "\uE8F0"}, // Plainchant staff
    /*  */"chstwd": {unicode: "\uE8F1"}, // Plainchant staff (wide)
    /*  */"chstnr": {unicode: "\uE8F2"}, // Plainchant staff (narrow)
    /*  */"chdvmn": {unicode: "\uE8F3"}, // Divisio minima
    /*  */"chdvmr": {unicode: "\uE8F4"}, // Divisio maior
    /*  */"chdvmx": {unicode: "\uE8F5"}, // Divisio maxima
    /*  */"chdvfn": {unicode: "\uE8F6"}, // Divisio finalis
    /*  */"chvr": {unicode: "\uE8F7"}, // Virgula
    /*  */"chcs": {unicode: "\uE8F8"}, // Caesura
    /*  */"mngc": {unicode: "\uE900"}, // Mensural G clef
    /*  */"mngcpt": {unicode: "\uE901"}, // Petrucci G clef
    /*  */"chfc": {unicode: "\uE902"}, // Plainchant F clef
    /*  */"mnfc": {unicode: "\uE903"}, // Mensural F clef
    /*  */"mnfcpt": {unicode: "\uE904"}, // Petrucci F clef
    /*  */"mncc": {unicode: "\uE905"}, // Mensural C clef
    /*  */"chcc": {unicode: "\uE906"}, // Plainchant C clef
    /*  */"mnccptpsls": {unicode: "\uE907"}, // Petrucci C clef, lowest position
    /*  */"mnccptpslw": {unicode: "\uE908"}, // Petrucci C clef, low position
    /*  */"mnccptpsmd": {unicode: "\uE909"}, // Petrucci C clef, middle position
    /*  */"mnccptpshg": {unicode: "\uE90A"}, // Petrucci C clef, high position
    /*  */"mnccptpshs": {unicode: "\uE90B"}, // Petrucci C clef, highest position
    /*  */"mnpl1": {unicode: "\uE910"}, // Tempus perfectum cum prolatione perfecta (9/8)
    /*  */"mnpl2": {unicode: "\uE911"}, // Tempus perfectum cum prolatione imperfecta (3/4)
    /*  */"mnpl3": {unicode: "\uE912"}, // Tempus perfectum cum prolatione imperfecta diminution 1 (3/8)
    /*  */"mnpl4": {unicode: "\uE913"}, // Tempus perfectum cum prolatione perfecta diminution 2 (9/16)
    /*  */"mnpl5": {unicode: "\uE914"}, // Tempus imperfectum cum prolatione perfecta (6/8)
    /*  */"mnpl6": {unicode: "\uE915"}, // Tempus imperfectum cum prolatione imperfecta (2/4)
    /*  */"mnpl7": {unicode: "\uE916"}, // Tempus imperfectum cum prolatione imperfecta diminution 1 (2/2)
    /*  */"mnpl8": {unicode: "\uE917"}, // Tempus imperfectum cum prolatione imperfecta diminution 2 (6/16)
    /*  */"mnpl9": {unicode: "\uE918"}, // Tempus imperfectum cum prolatione imperfecta diminution 3 (2/2)
    /*  */"mnpl10": {unicode: "\uE919"}, // Tempus imperfectum cum prolatione imperfecta diminution 4
    /*  */"mnpl11": {unicode: "\uE91A"}, // Tempus imperfectum cum prolatione imperfecta diminution 5
    /*  */"mnpptmpr": {unicode: "\uE91B"}, // Tempus perfectum
    /*  */"mnppprdp1": {unicode: "\uE91C"}, // Proportio dupla 1
    /*  */"mnppprdp2": {unicode: "\uE91D"}, // Proportio dupla 2
    /*  */"mnppprtr": {unicode: "\uE91E"}, // Proportio tripla
    /*  */"mnppprqd": {unicode: "\uE91F"}, // Proportio quadrupla
    /*  */"mnplcmdt": {unicode: "\uE920"}, // Combining dot
    /*  */"mnplcmtwds": {unicode: "\uE921"}, // Combining two dots
    /*  */"mnplcmthds": {unicode: "\uE922"}, // Combining three dots horizontal
    /*  */"mnplcmthdstr": {unicode: "\uE923"}, // Combining three dots triangular
    /*  */"mnplcmdtvd": {unicode: "\uE924"}, // Combining void dot
    /*  */"mnplcmst": {unicode: "\uE925"}, // Combining vertical stroke
    /*  */"mnpp1": {unicode: "\uE926"}, // Mensural proportion 1
    /*  */"mnpp2": {unicode: "\uE927"}, // Mensural proportion 2
    /*  */"mnpp3": {unicode: "\uE928"}, // Mensural proportion 3
    /*  */"mnpp4": {unicode: "\uE929"}, // Mensural proportion 4
    /*  */"mnppmn": {unicode: "\uE92A"}, // Mensural proportion minor
    /*  */"mnppmj": {unicode: "\uE92B"}, // Mensural proportion major
    /*  */"mnmdprvr": {unicode: "\uE92C"}, // Modus perfectum, vertical
    /*  */"mnmdimvr": {unicode: "\uE92D"}, // Modus imperfectum, vertical
    /*  */"mntmprhr": {unicode: "\uE92E"}, // Tempus perfectum, horizontal
    /*  */"mntmimhr": {unicode: "\uE92F"}, // Tempus imperfectum, horizontal
    /*  */"mnnhmxbl": {unicode: "\uE930"}, // Maxima notehead, black
    /*  */"mnnhmxvd": {unicode: "\uE931"}, // Maxima notehead, void
    /*  */"mnnhmxblvd": {unicode: "\uE932"}, // Maxima notehead, black and void
    /*  */"mnnhmxwt": {unicode: "\uE933"}, // Maxima notehead, white
    /*  */"mnnhlnbl": {unicode: "\uE934"}, // Longa/brevis notehead, black
    /*  */"mnnhlnvd": {unicode: "\uE935"}, // Longa/brevis notehead, void
    /*  */"mnnhlnblvd": {unicode: "\uE936"}, // Longa/brevis notehead, black and void
    /*  */"mnnhlnwt": {unicode: "\uE937"}, // Longa/brevis notehead, white
    /*  */"mnnhsbbl": {unicode: "\uE938"}, // Semibrevis notehead, black
    /*  */"mnnhsbvd": {unicode: "\uE939"}, // Semibrevis notehead, void
    /*  */"mnnhsbblvd": {unicode: "\uE93A"}, // Semibrevis notehead, black and void
    /*  */"mnnhsbblvdtr": {unicode: "\uE93B"}, // Semibrevis notehead, black and void (turned)
    /*  */"mnnhmnwt": {unicode: "\uE93C"}, // Minima notehead, white
    /*  */"mnnhsmwt": {unicode: "\uE93D"}, // Semiminima/fusa notehead, white
    /*  */"mncmsmup": {unicode: "\uE93E"}, // Combining stem up
    /*  */"mncmsmdn": {unicode: "\uE93F"}, // Combining stem down
    /*  */"mncmsmdg": {unicode: "\uE940"}, // Combining stem diagonal
    /*  */"mncmsmupflrt": {unicode: "\uE941"}, // Combining stem with flag right up
    /*  */"mncmsmdnflrt": {unicode: "\uE942"}, // Combining stem with flag right down
    /*  */"mncmsmupfllf": {unicode: "\uE943"}, // Combining stem with flag left up
    /*  */"mncmsmdnfllf": {unicode: "\uE944"}, // Combining stem with flag left down
    /*  */"mncmsmupflfl": {unicode: "\uE945"}, // Combining stem with flared flag up
    /*  */"mncmsmdnflfl": {unicode: "\uE946"}, // Combining stem with flared flag down
    /*  */"mncmsmupflex": {unicode: "\uE947"}, // Combining stem with extended flag up
    /*  */"mncmsmdnflex": {unicode: "\uE948"}, // Combining stem with extended flag down
    /*  */"mncmsmupflsm": {unicode: "\uE949"}, // Combining stem with semiminima flag up
    /*  */"mncmsmdnflsm": {unicode: "\uE94A"}, // Combining stem with semiminima flag down
    /*  */"mncmsmupflfs": {unicode: "\uE94B"}, // Combining stem with fusa flag up
    /*  */"mncmsmdnflfs": {unicode: "\uE94C"}, // Combining stem with fusa flag down
    /*  */"mnblmx": {unicode: "\uE950"}, // Black mensural maxima
    /*  */"mnblln": {unicode: "\uE951"}, // Black mensural longa
    /*  */"mnblbr": {unicode: "\uE952"}, // Black mensural brevis
    /*  */"mnblsb": {unicode: "\uE953"}, // Black mensural semibrevis
    /*  */"mnblmn": {unicode: "\uE954"}, // Black mensural minima
    /*  */"mnblsm": {unicode: "\uE955"}, // Black mensural semiminima
    /*  */"mnblbrvd": {unicode: "\uE956"}, // Black mensural void brevis
    /*  */"mnblsbvd": {unicode: "\uE957"}, // Black mensural void semibrevis
    /*  */"mnblmnvd": {unicode: "\uE958"}, // Black mensural void minima
    /*  */"mnblsbcd": {unicode: "\uE959"}, // Black mensural semibrevis caudata
    /*  */"mnbldr": {unicode: "\uE95A"}, // Black mensural dragma
    /*  */"mnblsbob": {unicode: "\uE95B"}, // Black mensural oblique semibrevis
    /*  */"mnwtmx": {unicode: "\uE95C"}, // White mensural maxima
    /*  */"mnwtln": {unicode: "\uE95D"}, // White mensural longa
    /*  */"mnwtbr": {unicode: "\uE95E"}, // White mensural brevis
    /*  */"mnwtmn": {unicode: "\uE95F"}, // White mensural minima
    /*  */"mnwtsm": {unicode: "\uE960"}, // White mensural semiminima
    /*  */"mnwtfs": {unicode: "\uE961"}, // White mensural fusa
    /*  */"mnwtsb": {unicode: "\uE962"}, // White mensural semibrevis
    /*  */"mnobas2bl": {unicode: "\uE970"}, // Oblique form, ascending 2nd, black
    /*  */"mnobas2vd": {unicode: "\uE971"}, // Oblique form, ascending 2nd, void
    /*  */"mnobas2blvd": {unicode: "\uE972"}, // Oblique form, ascending 2nd, black and void
    /*  */"mnobas2wt": {unicode: "\uE973"}, // Oblique form, ascending 2nd, white
    /*  */"mnobas3bl": {unicode: "\uE974"}, // Oblique form, ascending 3rd, black
    /*  */"mnobas3vd": {unicode: "\uE975"}, // Oblique form, ascending 3rd, void
    /*  */"mnobas3blvd": {unicode: "\uE976"}, // Oblique form, ascending 3rd, black and void
    /*  */"mnobas3wt": {unicode: "\uE977"}, // Oblique form, ascending 3rd, white
    /*  */"mnobas4bl": {unicode: "\uE978"}, // Oblique form, ascending 4th, black
    /*  */"mnobas4vd": {unicode: "\uE979"}, // Oblique form, ascending 4th, void
    /*  */"mnobas4blvd": {unicode: "\uE97A"}, // Oblique form, ascending 4th, black and void
    /*  */"mnobas4wt": {unicode: "\uE97B"}, // Oblique form, ascending 4th, white
    /*  */"mnobas5bl": {unicode: "\uE97C"}, // Oblique form, ascending 5th, black
    /*  */"mnobas5vd": {unicode: "\uE97D"}, // Oblique form, ascending 5th, void
    /*  */"mnobas5blvd": {unicode: "\uE97E"}, // Oblique form, ascending 5th, black and void
    /*  */"mnobas5wt": {unicode: "\uE97F"}, // Oblique form, ascending 5th, white
    /*  */"mnobds2bl": {unicode: "\uE980"}, // Oblique form, descending 2nd, black
    /*  */"mnobds2vd": {unicode: "\uE981"}, // Oblique form, descending 2nd, void
    /*  */"mnobds2blvd": {unicode: "\uE982"}, // Oblique form, descending 2nd, black and void
    /*  */"mnobds2wt": {unicode: "\uE983"}, // Oblique form, descending 2nd, white
    /*  */"mnobds3bl": {unicode: "\uE984"}, // Oblique form, descending 3rd, black
    /*  */"mnobds3vd": {unicode: "\uE985"}, // Oblique form, descending 3rd, void
    /*  */"mnobds3blvd": {unicode: "\uE986"}, // Oblique form, descending 3rd, black and void
    /*  */"mnobds3wt": {unicode: "\uE987"}, // Oblique form, descending 3rd, white
    /*  */"mnobds4bl": {unicode: "\uE988"}, // Oblique form, descending 4th, black
    /*  */"mnobds4vd": {unicode: "\uE989"}, // Oblique form, descending 4th, void
    /*  */"mnobds4blvd": {unicode: "\uE98A"}, // Oblique form, descending 4th, black and void
    /*  */"mnobds4wt": {unicode: "\uE98B"}, // Oblique form, descending 4th, white
    /*  */"mnobds5bl": {unicode: "\uE98C"}, // Oblique form, descending 5th, black
    /*  */"mnobds5vd": {unicode: "\uE98D"}, // Oblique form, descending 5th, void
    /*  */"mnobds5blvd": {unicode: "\uE98E"}, // Oblique form, descending 5th, black and void
    /*  */"mnobds5wt": {unicode: "\uE98F"}, // Oblique form, descending 5th, white
    /*  */"chpn": {unicode: "\uE990"}, // Punctum
    /*  */"chpnin": {unicode: "\uE991"}, // Punctum inclinatum
    /*  */"chpninac": {unicode: "\uE992"}, // Punctum inclinatum auctum
    /*  */"chpnindm": {unicode: "\uE993"}, // Punctum inclinatum deminutum
    /*  */"chacas": {unicode: "\uE994"}, // Punctum auctum, ascending
    /*  */"chacds": {unicode: "\uE995"}, // Punctum auctum, descending
    /*  */"chpnvr": {unicode: "\uE996"}, // Punctum virga
    /*  */"chpnvrrv": {unicode: "\uE997"}, // Punctum virga, reversed
    /*  */"chpncv": {unicode: "\uE998"}, // Punctum cavum
    /*  */"chpnln": {unicode: "\uE999"}, // Punctum linea
    /*  */"chpnlncv": {unicode: "\uE99A"}, // Punctum linea cavum
    /*  */"chql": {unicode: "\uE99B"}, // Quilisma
    /*  */"choras": {unicode: "\uE99C"}, // Oriscus ascending
    /*  */"chords": {unicode: "\uE99D"}, // Oriscus descending
    /*  */"chorlq": {unicode: "\uE99E"}, // Oriscus liquescens
    /*  */"chsp": {unicode: "\uE99F"}, // Strophicus
    /*  */"chspac": {unicode: "\uE9A0"}, // Strophicus auctus
    /*  */"chpndm": {unicode: "\uE9A1"}, // Punctum deminutum
    /*  */"chpdlw": {unicode: "\uE9B0"}, // Podatus, lower
    /*  */"chpdup": {unicode: "\uE9B1"}, // Podatus, upper
    /*  */"chdmup": {unicode: "\uE9B2"}, // Punctum deminutum, upper
    /*  */"chdmlw": {unicode: "\uE9B3"}, // Punctum deminutum, lower
    /*  */"chenlnas2": {unicode: "\uE9B4"}, // Entry line, ascending 2nd
    /*  */"chenlnas3": {unicode: "\uE9B5"}, // Entry line, ascending 3rd
    /*  */"chenlnas4": {unicode: "\uE9B6"}, // Entry line, ascending 4th
    /*  */"chenlnas5": {unicode: "\uE9B7"}, // Entry line, ascending 5th
    /*  */"chenlnas6": {unicode: "\uE9B8"}, // Entry line, ascending 6th
    /*  */"chlgds2": {unicode: "\uE9B9"}, // Ligated stroke, descending 2nd
    /*  */"chlgds3": {unicode: "\uE9BA"}, // Ligated stroke, descending 3rd
    /*  */"chlgds4": {unicode: "\uE9BB"}, // Ligated stroke, descending 4th
    /*  */"chlgds5": {unicode: "\uE9BC"}, // Ligated stroke, descending 5th
    /*  */"chcnlnas2": {unicode: "\uE9BD"}, // Connecting line, ascending 2nd
    /*  */"chcnlnas3": {unicode: "\uE9BE"}, // Connecting line, ascending 3rd
    /*  */"chcnlnas4": {unicode: "\uE9BF"}, // Connecting line, ascending 4th
    /*  */"chcnlnas5": {unicode: "\uE9C0"}, // Connecting line, ascending 5th
    /*  */"chcnlnas6": {unicode: "\uE9C1"}, // Connecting line, ascending 6th
    /*  */"chsplq2": {unicode: "\uE9C2"}, // Strophicus liquescens, 2nd
    /*  */"chsplq3": {unicode: "\uE9C3"}, // Strophicus liquescens, 3rd
    /*  */"chsplq4": {unicode: "\uE9C4"}, // Strophicus liquescens, 4th
    /*  */"chsplq5": {unicode: "\uE9C5"}, // Strophicus liquescens, 5th
    /*  */"chicab": {unicode: "\uE9D0"}, // Ictus above
    /*  */"chicbl": {unicode: "\uE9D1"}, // Ictus below
    /*  */"chcrab": {unicode: "\uE9D2"}, // Circulus above
    /*  */"chcrbl": {unicode: "\uE9D3"}, // Circulus below
    /*  */"chsmab": {unicode: "\uE9D4"}, // Semicirculus above
    /*  */"chsmbl": {unicode: "\uE9D5"}, // Semicirculus below
    /*  */"chacab": {unicode: "\uE9D6"}, // Accentus above
    /*  */"chacbl": {unicode: "\uE9D7"}, // Accentus below
    /*  */"chep": {unicode: "\uE9D8"}, // Episema
    /*  */"chag": {unicode: "\uE9D9"}, // Augmentum (mora)
    /*  */"mdrnflsfB": {unicode: "\uE9E0"}, // Flat, soft b (fa)
    /*  */"mdrnflhrB": {unicode: "\uE9E1"}, // Flat, hard b (mi)
    /*  */"mdrnnt": {unicode: "\uE9E2"}, // Natural
    /*  */"mdrnshcr": {unicode: "\uE9E3"}, // Croix
    /*  */"mdrnflwtdt": {unicode: "\uE9E4"}, // Flat with dot
    /*  */"mdrnntwtcr": {unicode: "\uE9E5"}, // Natural with interrupted cross
    /*  */"mnrsmx": {unicode: "\uE9F0"}, // Maxima rest
    /*  */"mnrslnpr": {unicode: "\uE9F1"}, // Longa perfecta rest
    /*  */"mnrslnim": {unicode: "\uE9F2"}, // Longa imperfecta rest
    /*  */"mnrsbr": {unicode: "\uE9F3"}, // Brevis rest
    /*  */"mnrssb": {unicode: "\uE9F4"}, // Semibrevis rest
    /*  */"mnrsmn": {unicode: "\uE9F5"}, // Minima rest
    /*  */"mnrssm": {unicode: "\uE9F6"}, // Semiminima rest
    /*  */"mnrsfs": {unicode: "\uE9F7"}, // Fusa rest
    /*  */"mnrssf": {unicode: "\uE9F8"}, // Semifusa rest
    /*  */"mnsgup": {unicode: "\uEA00"}, // Signum congruentiae up
    /*  */"mnsgdn": {unicode: "\uEA01"}, // Signum congruentiae down
    /*  */"mncsup": {unicode: "\uEA02"}, // Mensural custos up
    /*  */"mncsdn": {unicode: "\uEA03"}, // Mensural custos down
    /*  */"chcssmuppsls": {unicode: "\uEA04"}, // Plainchant custos, stem up, lowest position
    /*  */"chcssmuppslw": {unicode: "\uEA05"}, // Plainchant custos, stem up, low position
    /*  */"chcssmuppsmd": {unicode: "\uEA06"}, // Plainchant custos, stem up, middle position
    /*  */"chcssmdnpsmd": {unicode: "\uEA07"}, // Plainchant custos, stem down, middle position
    /*  */"chcssmdnpshg": {unicode: "\uEA08"}, // Plainchant custos, stem down, high position
    /*  */"chcssmdnpshs": {unicode: "\uEA09"}, // Plainchant custos, stem down, highest position
    /*  */"mncsch": {unicode: "\uEA0A"}, // Checkmark custos
    /*  */"mncstn": {unicode: "\uEA0B"}, // Turn-like custos
    /*  */"mnclstsq": {unicode: "\uEA0C"}, // Coloration start, square
    /*  */"mnclensq": {unicode: "\uEA0D"}, // Coloration end, square
    /*  */"mnclstrn": {unicode: "\uEA0E"}, // Coloration start, round
    /*  */"mnclenrn": {unicode: "\uEA0F"}, // Coloration end, round
    /*  */"mnalsg": {unicode: "\uEA10"}, // Alteration sign
    /*  */"orql": {unicode: "\uEA20"}, // Quilisma
    /*  */"oror": {unicode: "\uEA21"}, // Oriscus
    /*  */"mdrnlqCMN": {unicode: "\uEA22"}, // Liquescence
    /*  */"mdrnplCMN": {unicode: "\uEA23"}, // Plica
    /*  */"mdrnGclCMN": {unicode: "\uEA24"}, // G clef (Corpus Monodicum)
    /*  */"mdrnpnCMN": {unicode: "\uEA25"}, // Punctum (Corpus Monodicum)
    /*  */"mdrnlqasCMN": {unicode: "\uEA26"}, // Liquescent ascending (Corpus Monodicum)
    /*  */"mdrnlqdsCMN": {unicode: "\uEA27"}, // Liquescent descending (Corpus Monodicum)
    /*  */"mdrnqlCMN": {unicode: "\uEA28"}, // Quilisma (Corpus Monodicum)
    /*  */"mdrnspCMN": {unicode: "\uEA29"}, // Strophicus (Corpus Monodicum)
    /*  */"mdrnorCMN": {unicode: "\uEA2A"}, // Oriscus (Corpus Monodicum)
    /*  */"dsgr1": {unicode: "\uEA30"}, // Daseian graves 1
    /*  */"dsgr2": {unicode: "\uEA31"}, // Daseian graves 2
    /*  */"dsgr3": {unicode: "\uEA32"}, // Daseian graves 3
    /*  */"dsgr4": {unicode: "\uEA33"}, // Daseian graves 4
    /*  */"dsfn1": {unicode: "\uEA34"}, // Daseian finales 1
    /*  */"dsfn2": {unicode: "\uEA35"}, // Daseian finales 2
    /*  */"dsfn3": {unicode: "\uEA36"}, // Daseian finales 3
    /*  */"dsfn4": {unicode: "\uEA37"}, // Daseian finales 4
    /*  */"dssp1": {unicode: "\uEA38"}, // Daseian superiores 1
    /*  */"dssp2": {unicode: "\uEA39"}, // Daseian superiores 2
    /*  */"dssp3": {unicode: "\uEA3A"}, // Daseian superiores 3
    /*  */"dssp4": {unicode: "\uEA3B"}, // Daseian superiores 4
    /*  */"dsex1": {unicode: "\uEA3C"}, // Daseian excellentes 1
    /*  */"dsex2": {unicode: "\uEA3D"}, // Daseian excellentes 2
    /*  */"dsex3": {unicode: "\uEA3E"}, // Daseian excellentes 3
    /*  */"dsex4": {unicode: "\uEA3F"}, // Daseian excellentes 4
    /*  */"dsrs1": {unicode: "\uEA40"}, // Daseian residua 1
    /*  */"dsrs2": {unicode: "\uEA41"}, // Daseian residua 2
    /*  */"fg0": {unicode: "\uEA50"}, // Figured bass 0
    /*  */"fg1": {unicode: "\uEA51"}, // Figured bass 1
    /*  */"fg2": {unicode: "\uEA52"}, // Figured bass 2
    /*  */"fg2rs": {unicode: "\uEA53"}, // Figured bass 2 raised by half-step
    /*  */"fg3": {unicode: "\uEA54"}, // Figured bass 3
    /*  */"fg4": {unicode: "\uEA55"}, // Figured bass 4
    /*  */"fg4rs": {unicode: "\uEA56"}, // Figured bass 4 raised by half-step
    /*  */"fg5": {unicode: "\uEA57"}, // Figured bass 5
    /*  */"fg5rs1": {unicode: "\uEA58"}, // Figured bass 5 raised by half-step
    /*  */"fg5rs2": {unicode: "\uEA59"}, // Figured bass 5 raised by half-step 2
    /*  */"fg5rs3": {unicode: "\uEA5A"}, // Figured bass diminished 5
    /*  */"fg6": {unicode: "\uEA5B"}, // Figured bass 6
    /*  */"fg6rs": {unicode: "\uEA5C"}, // Figured bass 6 raised by half-step
    /*  */"fg7": {unicode: "\uEA5D"}, // Figured bass 7
    /*  */"fg7rs1": {unicode: "\uEA5E"}, // Figured bass 7 raised by half-step
    /*  */"fg7rs2": {unicode: "\uEA5F"}, // Figured bass 7 lowered by a half-step
    /*  */"fg8": {unicode: "\uEA60"}, // Figured bass 8
    /*  */"fg9": {unicode: "\uEA61"}, // Figured bass 9
    /*  */"fg9rs": {unicode: "\uEA62"}, // Figured bass 9 raised by half-step
    /*  */"fgdbfl": {unicode: "\uEA63"}, // Figured bass double flat
    /*  */"fgfl": {unicode: "\uEA64"}, // Figured bass flat
    /*  */"fgnt": {unicode: "\uEA65"}, // Figured bass natural
    /*  */"fgsh": {unicode: "\uEA66"}, // Figured bass sharp
    /*  */"fgdbsh": {unicode: "\uEA67"}, // Figured bass double sharp
    /*  */"fgbklf": {unicode: "\uEA68"}, // Figured bass [
    /*  */"fgbkrt": {unicode: "\uEA69"}, // Figured bass ]
    /*  */"fgprlf": {unicode: "\uEA6A"}, // Figured bass (
    /*  */"fgprrt": {unicode: "\uEA6B"}, // Figured bass )
    /*  */"fgpl": {unicode: "\uEA6C"}, // Figured bass +
    /*  */"fgcmrs": {unicode: "\uEA6D"}, // Combining raise
    /*  */"fgcmlw": {unicode: "\uEA6E"}, // Combining lower
    /*  */"fg6rs2": {unicode: "\uEA6F"}, // Figured bass 6 raised by half-step 2
    /*  */"fnzr": {unicode: "\uEA70"}, // Function theory 0
    /*  */"fnon": {unicode: "\uEA71"}, // Function theory 1
    /*  */"fntw": {unicode: "\uEA72"}, // Function theory 2
    /*  */"fnth": {unicode: "\uEA73"}, // Function theory 3
    /*  */"fnfr": {unicode: "\uEA74"}, // Function theory 4
    /*  */"fnfv": {unicode: "\uEA75"}, // Function theory 5
    /*  */"fnsx": {unicode: "\uEA76"}, // Function theory 6
    /*  */"fnsv": {unicode: "\uEA77"}, // Function theory 7
    /*  */"fnet": {unicode: "\uEA78"}, // Function theory 8
    /*  */"fnnn": {unicode: "\uEA79"}, // Function theory 9
    /*  */"fnlsth": {unicode: "\uEA7A"}, // Function theory less than
    /*  */"fnmn": {unicode: "\uEA7B"}, // Function theory minus
    /*  */"fngrth": {unicode: "\uEA7C"}, // Function theory greater than
    /*  */"fnSSup": {unicode: "\uEA7D"}, // Function theory major subdominant of subdominant
    /*  */"fnSSlw": {unicode: "\uEA7E"}, // Function theory minor subdominant of subdominant
    /*  */"fnDup": {unicode: "\uEA7F"}, // Function theory major dominant
    /*  */"fnDlw": {unicode: "\uEA80"}, // Function theory minor dominant
    /*  */"fnDD": {unicode: "\uEA81"}, // Function theory dominant of dominant
    /*  */"fnslDD": {unicode: "\uEA82"}, // Function theory double dominant seventh
    /*  */"fnGup": {unicode: "\uEA83"}, // Function theory G
    /*  */"fnGlw": {unicode: "\uEA84"}, // Function theory g
    /*  */"fnNup": {unicode: "\uEA85"}, // Function theory N
    /*  */"fnNlw": {unicode: "\uEA86"}, // Function theory n
    /*  */"fnPup": {unicode: "\uEA87"}, // Function theory P
    /*  */"fnPlw": {unicode: "\uEA88"}, // Function theory p
    /*  */"fnSup": {unicode: "\uEA89"}, // Function theory major subdominant
    /*  */"fnSlw": {unicode: "\uEA8A"}, // Function theory minor subdominant
    /*  */"fnTup": {unicode: "\uEA8B"}, // Function theory tonic
    /*  */"fnTlw": {unicode: "\uEA8C"}, // Function theory minor tonic
    /*  */"fnVup": {unicode: "\uEA8D"}, // Function theory V
    /*  */"fnVlw": {unicode: "\uEA8E"}, // Function theory v
    /*  */"fnbklf": {unicode: "\uEA8F"}, // Function theory bracket left
    /*  */"fnbkrt": {unicode: "\uEA90"}, // Function theory bracket right
    /*  */"fnprlf": {unicode: "\uEA91"}, // Function theory parenthesis left
    /*  */"fnprrt": {unicode: "\uEA92"}, // Function theory parenthesis right
    /*  */"fnanlf": {unicode: "\uEA93"}, // Function theory angle bracket left
    /*  */"fnanrt": {unicode: "\uEA94"}, // Function theory angle bracket right
    /*  */"fnrp1": {unicode: "\uEA95"}, // Function theory repetition 1
    /*  */"fnrp2": {unicode: "\uEA96"}, // Function theory repetition 2
    /*  */"fnrn": {unicode: "\uEA97"}, // Function theory prefix ring
    /*  */"fnpl": {unicode: "\uEA98"}, // Function theory prefix plus
    /*  */"fnFup": {unicode: "\uEA99"}, // Function theory F
    /*  */"fnIup": {unicode: "\uEA9A"}, // Function theory I
    /*  */"fnIlw": {unicode: "\uEA9B"}, // Function theory i
    /*  */"fnKup": {unicode: "\uEA9C"}, // Function theory K
    /*  */"fnKlw": {unicode: "\uEA9D"}, // Function theory k
    /*  */"fnLup": {unicode: "\uEA9E"}, // Function theory L
    /*  */"fnLlw": {unicode: "\uEA9F"}, // Function theory l
    /*  */"wgtrfs": {unicode: "\uEAA0"}, // Trill wiggle segment, fastest
    /*  */"wgtrfrst": {unicode: "\uEAA1"}, // Trill wiggle segment, faster still
    /*  */"wgtrfr": {unicode: "\uEAA2"}, // Trill wiggle segment, faster
    /*  */"wgtrft": {unicode: "\uEAA3"}, // Trill wiggle segment, fast
    /*  */"wgtr": {unicode: "\uEAA4"}, // Trill wiggle segment
    /*  */"wgtrsl": {unicode: "\uEAA5"}, // Trill wiggle segment, slow
    /*  */"wgtrsr": {unicode: "\uEAA6"}, // Trill wiggle segment, slower
    /*  */"wgtrsrst": {unicode: "\uEAA7"}, // Trill wiggle segment, slower still
    /*  */"wgtrss": {unicode: "\uEAA8"}, // Trill wiggle segment, slowest
    /*  */"wgarup": {unicode: "\uEAA9"}, // Arpeggiato wiggle segment, upwards
    /*  */"wgardn": {unicode: "\uEAAA"}, // Arpeggiato wiggle segment, downwards
    /*  */"wgarupsw": {unicode: "\uEAAB"}, // Arpeggiato upward swash
    /*  */"wgardnsw": {unicode: "\uEAAC"}, // Arpeggiato downward swash
    /*  */"wgarupar": {unicode: "\uEAAD"}, // Arpeggiato arrowhead up
    /*  */"wgardnar": {unicode: "\uEAAE"}, // Arpeggiato arrowhead down
    /*  */"wggl": {unicode: "\uEAAF"}, // Glissando wiggle segment
    /*  */"wgvb": {unicode: "\uEAB0"}, // Vibrato / shake wiggle segment
    /*  */"wgvbwd": {unicode: "\uEAB1"}, // Wide vibrato / shake wiggle segment
    /*  */"gtvbst": {unicode: "\uEAB2"}, // Vibrato wiggle segment
    /*  */"gtwdvbst": {unicode: "\uEAB3"}, // Wide vibrato wiggle segment
    /*  */"wgwvnr": {unicode: "\uEAB4"}, // Narrow wavy line segment
    /*  */"wgwv": {unicode: "\uEAB5"}, // Wavy line segment
    /*  */"wgwvwd": {unicode: "\uEAB6"}, // Wide wavy line segment
    /*  */"wgsqwvnr": {unicode: "\uEAB7"}, // Narrow square wave line segment
    /*  */"wgsqwv": {unicode: "\uEAB8"}, // Square wave line segment
    /*  */"wgsqwvwd": {unicode: "\uEAB9"}, // Wide square wave line segment
    /*  */"wgswnr": {unicode: "\uEABA"}, // Narrow sawtooth line segment
    /*  */"wgsw": {unicode: "\uEABB"}, // Sawtooth line segment
    /*  */"wgswwd": {unicode: "\uEABC"}, // Wide sawtooth line segment
    /*  */"wgglgr1": {unicode: "\uEABD"}, // Group glissando 1
    /*  */"wgglgr2": {unicode: "\uEABE"}, // Group glissando 2
    /*  */"wgglgr3": {unicode: "\uEABF"}, // Group glissando 3
    /*  */"wgcrcn": {unicode: "\uEAC0"}, // Constant circular motion segment
    /*  */"wgcrcnfl": {unicode: "\uEAC1"}, // Constant circular motion segment (flipped)
    /*  */"wgcrcnlg": {unicode: "\uEAC2"}, // Constant circular motion segment (large)
    /*  */"wgcrcnfllg": {unicode: "\uEAC3"}, // Constant circular motion segment (flipped, large)
    /*  */"wgcrst": {unicode: "\uEAC4"}, // Circular motion start
    /*  */"wgcrls": {unicode: "\uEAC5"}, // Circular motion segment, largest
    /*  */"wgcrlrst": {unicode: "\uEAC6"}, // Circular motion segment, larger still
    /*  */"wgcrlr": {unicode: "\uEAC7"}, // Circular motion segment, larger
    /*  */"wgcrlg": {unicode: "\uEAC8"}, // Circular motion segment, large
    /*  */"wgcr": {unicode: "\uEAC9"}, // Circular motion segment
    /*  */"wgcrsm": {unicode: "\uEACA"}, // Circular motion segment, small
    /*  */"wgcren": {unicode: "\uEACB"}, // Circular motion end
    /*  */"wgvbst": {unicode: "\uEACC"}, // Vibrato start
    /*  */"wgvbmsfs": {unicode: "\uEACD"}, // Vibrato smallest, fastest
    /*  */"wgvbmsfrst": {unicode: "\uEACE"}, // Vibrato smallest, faster still
    /*  */"wgvbmsfr": {unicode: "\uEACF"}, // Vibrato smallest, faster
    /*  */"wgvbmsft": {unicode: "\uEAD0"}, // Vibrato smallest, fast
    /*  */"wgvbmssl": {unicode: "\uEAD1"}, // Vibrato smallest, slow
    /*  */"wgvbmssr": {unicode: "\uEAD2"}, // Vibrato smallest, slower
    /*  */"wgvbmsss": {unicode: "\uEAD3"}, // Vibrato smallest, slowest
    /*  */"wgvbsmfs": {unicode: "\uEAD4"}, // Vibrato small, fastest
    /*  */"wgvbsmfrst": {unicode: "\uEAD5"}, // Vibrato small, faster still
    /*  */"wgvbsmfr": {unicode: "\uEAD6"}, // Vibrato small, faster
    /*  */"wgvbsmft": {unicode: "\uEAD7"}, // Vibrato small, fast
    /*  */"wgvbsmsl": {unicode: "\uEAD8"}, // Vibrato small, slow
    /*  */"wgvbsmsr": {unicode: "\uEAD9"}, // Vibrato small, slower
    /*  */"wgvbsmss": {unicode: "\uEADA"}, // Vibrato small, slowest
    /*  */"wgvbmdfs": {unicode: "\uEADB"}, // Vibrato medium, fastest
    /*  */"wgvbmdfrst": {unicode: "\uEADC"}, // Vibrato medium, faster still
    /*  */"wgvbmdfr": {unicode: "\uEADD"}, // Vibrato medium, faster
    /*  */"wgvbmdft": {unicode: "\uEADE"}, // Vibrato medium, fast
    /*  */"wgvbmdsl": {unicode: "\uEADF"}, // Vibrato medium, slow
    /*  */"wgvbmdsr": {unicode: "\uEAE0"}, // Vibrato medium, slower
    /*  */"wgvbmdss": {unicode: "\uEAE1"}, // Vibrato medium, slowest
    /*  */"wgvblgfs": {unicode: "\uEAE2"}, // Vibrato large, fastest
    /*  */"wgvblgfrst": {unicode: "\uEAE3"}, // Vibrato large, faster still
    /*  */"wgvblgfr": {unicode: "\uEAE4"}, // Vibrato large, faster
    /*  */"wgvblgft": {unicode: "\uEAE5"}, // Vibrato large, fast
    /*  */"wgvblgsl": {unicode: "\uEAE6"}, // Vibrato large, slow
    /*  */"wgvblgsr": {unicode: "\uEAE7"}, // Vibrato large, slower
    /*  */"wgvblgss": {unicode: "\uEAE8"}, // Vibrato large, slowest
    /*  */"wgvblsfs": {unicode: "\uEAE9"}, // Vibrato largest, fastest
    /*  */"wgvblsfrst": {unicode: "\uEAEA"}, // Vibrato largest, faster still
    /*  */"wgvblsfr": {unicode: "\uEAEB"}, // Vibrato largest, faster
    /*  */"wgvblsft": {unicode: "\uEAEC"}, // Vibrato largest, fast
    /*  */"wgvblssl": {unicode: "\uEAED"}, // Vibrato largest, slow
    /*  */"wgvblssr": {unicode: "\uEAEE"}, // Vibrato largest, slower
    /*  */"wgvblsss": {unicode: "\uEAEF"}, // Vibrato largest, slowest
    /*  */"wgrn1": {unicode: "\uEAF0"}, // Quasi-random squiggle 1
    /*  */"wgrn2": {unicode: "\uEAF1"}, // Quasi-random squiggle 2
    /*  */"wgrn3": {unicode: "\uEAF2"}, // Quasi-random squiggle 3
    /*  */"wgrn4": {unicode: "\uEAF3"}, // Quasi-random squiggle 4
    /*  */"bmacrt1": {unicode: "\uEAF4"}, // Accel./rit. beam 1 (widest)
    /*  */"bmacrt2": {unicode: "\uEAF5"}, // Accel./rit. beam 2
    /*  */"bmacrt3": {unicode: "\uEAF6"}, // Accel./rit. beam 3
    /*  */"bmacrt4": {unicode: "\uEAF7"}, // Accel./rit. beam 4
    /*  */"bmacrt5": {unicode: "\uEAF8"}, // Accel./rit. beam 5
    /*  */"bmacrt6": {unicode: "\uEAF9"}, // Accel./rit. beam 6
    /*  */"bmacrt7": {unicode: "\uEAFA"}, // Accel./rit. beam 7
    /*  */"bmacrt8": {unicode: "\uEAFB"}, // Accel./rit. beam 8
    /*  */"bmacrt9": {unicode: "\uEAFC"}, // Accel./rit. beam 9
    /*  */"bmacrt10": {unicode: "\uEAFD"}, // Accel./rit. beam 10
    /*  */"bmacrt11": {unicode: "\uEAFE"}, // Accel./rit. beam 11
    /*  */"bmacrt12": {unicode: "\uEAFF"}, // Accel./rit. beam 12
    /*  */"bmacrt13": {unicode: "\uEB00"}, // Accel./rit. beam 13
    /*  */"bmacrt14": {unicode: "\uEB01"}, // Accel./rit. beam 14
    /*  */"bmacrt15": {unicode: "\uEB02"}, // Accel./rit. beam 15 (narrowest)
    /*  */"bmacrtfn": {unicode: "\uEB03"}, // Accel./rit. beam terminating line
    /*  */"elmc": {unicode: "\uEB10"}, // Microphone
    /*  */"elhd": {unicode: "\uEB11"}, // Headphones
    /*  */"elhs": {unicode: "\uEB12"}, // Headset
    /*  */"elds": {unicode: "\uEB13"}, // Disc
    /*  */"eltp": {unicode: "\uEB14"}, // Tape
    /*  */"elmxcn": {unicode: "\uEB15"}, // Mixing console
    /*  */"elUSB": {unicode: "\uEB16"}, // USB connection
    /*  */"elvdcm": {unicode: "\uEB17"}, // Video camera
    /*  */"elmn": {unicode: "\uEB18"}, // Monitor
    /*  */"elpr": {unicode: "\uEB19"}, // Projector
    /*  */"elld": {unicode: "\uEB1A"}, // Loudspeaker
    /*  */"elcm": {unicode: "\uEB1B"}, // Camera
    /*  */"elpl": {unicode: "\uEB1C"}, // Play
    /*  */"elst": {unicode: "\uEB1D"}, // Stop
    /*  */"elps": {unicode: "\uEB1E"}, // Pause
    /*  */"elftfr": {unicode: "\uEB1F"}, // Fast-forward
    /*  */"elrw": {unicode: "\uEB20"}, // Rewind
    /*  */"elskfr": {unicode: "\uEB21"}, // Skip forwards
    /*  */"elskbc": {unicode: "\uEB22"}, // Skip backwards
    /*  */"ellp": {unicode: "\uEB23"}, // Loop
    /*  */"elrp": {unicode: "\uEB24"}, // Replay
    /*  */"elsh": {unicode: "\uEB25"}, // Shuffle
    /*  */"elmt": {unicode: "\uEB26"}, // Mute
    /*  */"elun": {unicode: "\uEB27"}, // Unmute
    /*  */"elmcmt": {unicode: "\uEB28"}, // Mute microphone
    /*  */"elmcun": {unicode: "\uEB29"}, // Unmute microphone
    /*  */"elpwonof": {unicode: "\uEB2A"}, // Power on/off
    /*  */"elej": {unicode: "\uEB2B"}, // Eject
    /*  */"elvlfd": {unicode: "\uEB2C"}, // Combining volume fader
    /*  */"elvlfdtm": {unicode: "\uEB2D"}, // Combining volume fader thumb
    /*  */"elvllv0": {unicode: "\uEB2E"}, // Volume level 0%
    /*  */"elvllv20": {unicode: "\uEB2F"}, // Volume level 20%
    /*  */"elvllv40": {unicode: "\uEB30"}, // Volume level 40%
    /*  */"elvllv60": {unicode: "\uEB31"}, // Volume level 60%
    /*  */"elvllv80": {unicode: "\uEB32"}, // Volume level 80%
    /*  */"elvllv100": {unicode: "\uEB33"}, // Volume level 100%
    /*  */"elMIDIin": {unicode: "\uEB34"}, // MIDI in
    /*  */"elMIDIot": {unicode: "\uEB35"}, // MIDI out
    /*  */"elMIDIcn0": {unicode: "\uEB36"}, // MIDI controller 0%
    /*  */"elMIDIcn20": {unicode: "\uEB37"}, // MIDI controller 20%
    /*  */"elMIDIcn40": {unicode: "\uEB38"}, // MIDI controller 40%
    /*  */"elMIDIcn60": {unicode: "\uEB39"}, // MIDI controller 60%
    /*  */"elMIDIcn80": {unicode: "\uEB3A"}, // MIDI controller 80%
    /*  */"elMIDIcn100": {unicode: "\uEB3B"}, // MIDI controller 100%
    /*  */"eladmn": {unicode: "\uEB3C"}, // Mono audio setup
    /*  */"eladst": {unicode: "\uEB3D"}, // Stereo audio setup
    /*  */"eladchon": {unicode: "\uEB3E"}, // One channel (mono)
    /*  */"eladchtw": {unicode: "\uEB3F"}, // Two channels (stereo)
    /*  */"eladchthfr": {unicode: "\uEB40"}, // Three channels (frontal)
    /*  */"eladchthsr": {unicode: "\uEB41"}, // Three channels (surround)
    /*  */"eladchfr": {unicode: "\uEB42"}, // Four channels
    /*  */"eladchfv": {unicode: "\uEB43"}, // Five channels
    /*  */"eladchsx": {unicode: "\uEB44"}, // Six channels (5.1 surround)
    /*  */"eladchsv": {unicode: "\uEB45"}, // Seven channels
    /*  */"eladchet": {unicode: "\uEB46"}, // Eight channels (7.1 surround)
    /*  */"ellnin": {unicode: "\uEB47"}, // Line in
    /*  */"ellnot": {unicode: "\uEB48"}, // Line out
    /*  */"eladin": {unicode: "\uEB49"}, // Audio in
    /*  */"eladot": {unicode: "\uEB4A"}, // Audio out
    /*  */"elvdin": {unicode: "\uEB4B"}, // Video in
    /*  */"elvdot": {unicode: "\uEB4C"}, // Video out
    /*  */"eldtin": {unicode: "\uEB4D"}, // Data in
    /*  */"eldtot": {unicode: "\uEB4E"}, // Data out
    /*  */"eldw": {unicode: "\uEB4F"}, // Download
    /*  */"elup": {unicode: "\uEB50"}, // Upload
    /*  */"arblup": {unicode: "\uEB60"}, // Black arrow up (N)
    /*  */"arbluprt": {unicode: "\uEB61"}, // Black arrow up-right (NE)
    /*  */"arblrt": {unicode: "\uEB62"}, // Black arrow right (E)
    /*  */"arbldnrt": {unicode: "\uEB63"}, // Black arrow down-right (SE)
    /*  */"arbldn": {unicode: "\uEB64"}, // Black arrow down (S)
    /*  */"arbldnlf": {unicode: "\uEB65"}, // Black arrow down-left (SW)
    /*  */"arbllf": {unicode: "\uEB66"}, // Black arrow left (W)
    /*  */"arbluplf": {unicode: "\uEB67"}, // Black arrow up-left (NW)
    /*  */"arwtup": {unicode: "\uEB68"}, // White arrow up (N)
    /*  */"arwtuprt": {unicode: "\uEB69"}, // White arrow up-right (NE)
    /*  */"arwtrt": {unicode: "\uEB6A"}, // White arrow right (E)
    /*  */"arwtdnrt": {unicode: "\uEB6B"}, // White arrow down-right (SE)
    /*  */"arwtdn": {unicode: "\uEB6C"}, // White arrow down (S)
    /*  */"arwtdnlf": {unicode: "\uEB6D"}, // White arrow down-left (SW)
    /*  */"arwtlf": {unicode: "\uEB6E"}, // White arrow left (W)
    /*  */"arwtuplf": {unicode: "\uEB6F"}, // White arrow up-left (NW)
    /*  */"aropup": {unicode: "\uEB70"}, // Open arrow up (N)
    /*  */"aropuprt": {unicode: "\uEB71"}, // Open arrow up-right (NE)
    /*  */"aroprt": {unicode: "\uEB72"}, // Open arrow right (E)
    /*  */"aropdnrt": {unicode: "\uEB73"}, // Open arrow down-right (SE)
    /*  */"aropdn": {unicode: "\uEB74"}, // Open arrow down (S)
    /*  */"aropdnlf": {unicode: "\uEB75"}, // Open arrow down-left (SW)
    /*  */"aroplf": {unicode: "\uEB76"}, // Open arrow left (W)
    /*  */"aropuplf": {unicode: "\uEB77"}, // Open arrow up-left (NW)
    /*  */"ahblup": {unicode: "\uEB78"}, // Black arrowhead up (N)
    /*  */"ahbluprt": {unicode: "\uEB79"}, // Black arrowhead up-right (NE)
    /*  */"ahblrt": {unicode: "\uEB7A"}, // Black arrowhead right (E)
    /*  */"ahbldnrt": {unicode: "\uEB7B"}, // Black arrowhead down-right (SE)
    /*  */"ahbldn": {unicode: "\uEB7C"}, // Black arrowhead down (S)
    /*  */"ahbldnlf": {unicode: "\uEB7D"}, // Black arrowhead down-left (SW)
    /*  */"ahbllf": {unicode: "\uEB7E"}, // Black arrowhead left (W)
    /*  */"ahbluplf": {unicode: "\uEB7F"}, // Black arrowhead up-left (NW)
    /*  */"ahwtup": {unicode: "\uEB80"}, // White arrowhead up (N)
    /*  */"ahwtuprt": {unicode: "\uEB81"}, // White arrowhead up-right (NE)
    /*  */"ahwtrt": {unicode: "\uEB82"}, // White arrowhead right (E)
    /*  */"ahwtdnrt": {unicode: "\uEB83"}, // White arrowhead down-right (SE)
    /*  */"ahwtdn": {unicode: "\uEB84"}, // White arrowhead down (S)
    /*  */"ahwtdnlf": {unicode: "\uEB85"}, // White arrowhead down-left (SW)
    /*  */"ahwtlf": {unicode: "\uEB86"}, // White arrowhead left (W)
    /*  */"ahwtuplf": {unicode: "\uEB87"}, // White arrowhead up-left (NW)
    /*  */"ahopup": {unicode: "\uEB88"}, // Open arrowhead up (N)
    /*  */"ahopuprt": {unicode: "\uEB89"}, // Open arrowhead up-right (NE)
    /*  */"ahoprt": {unicode: "\uEB8A"}, // Open arrowhead right (E)
    /*  */"ahopdnrt": {unicode: "\uEB8B"}, // Open arrowhead down-right (SE)
    /*  */"ahopdn": {unicode: "\uEB8C"}, // Open arrowhead down (S)
    /*  */"ahopdnlf": {unicode: "\uEB8D"}, // Open arrowhead down-left (SW)
    /*  */"ahoplf": {unicode: "\uEB8E"}, // Open arrowhead left (W)
    /*  */"ahopuplf": {unicode: "\uEB8F"}, // Open arrowhead up-left (NW)
    /*  */"stpsrs1": {unicode: "\uEB90", width: 0}, // Raise 1 staff position
    /*  */"stpsrs2": {unicode: "\uEB91", width: 0}, // Raise 2 staff positions
    /*  */"stpsrs3": {unicode: "\uEB92", width: 0}, // Raise 3 staff positions
    /*  */"stpsrs4": {unicode: "\uEB93", width: 0}, // Raise 4 staff positions
    /*  */"stpsrs5": {unicode: "\uEB94", width: 0}, // Raise 5 staff positions
    /*  */"stpsrs6": {unicode: "\uEB95", width: 0}, // Raise 6 staff positions
    /*  */"stpsrs7": {unicode: "\uEB96", width: 0}, // Raise 7 staff positions
    /*  */"stpsrs8": {unicode: "\uEB97", width: 0}, // Raise 8 staff positions
    /*  */"stpslw1": {unicode: "\uEB98", width: 0}, // Lower 1 staff position
    /*  */"stpslw2": {unicode: "\uEB99", width: 0}, // Lower 2 staff positions
    /*  */"stpslw3": {unicode: "\uEB9A", width: 0}, // Lower 3 staff positions
    /*  */"stpslw4": {unicode: "\uEB9B", width: 0}, // Lower 4 staff positions
    /*  */"stpslw5": {unicode: "\uEB9C", width: 0}, // Lower 5 staff positions
    /*  */"stpslw6": {unicode: "\uEB9D", width: 0}, // Lower 6 staff positions
    /*  */"stpslw7": {unicode: "\uEB9E", width: 0}, // Lower 7 staff positions
    /*  */"stpslw8": {unicode: "\uEB9F", width: 0}, // Lower 8 staff positions
    /*  */"ltst6ln": {unicode: "\uEBA0"}, // Lute tablature staff, 6 courses
    /*  */"ltst6lnwd": {unicode: "\uEBA1"}, // Lute tablature staff, 6 courses (wide)
    /*  */"ltst6lnnr": {unicode: "\uEBA2"}, // Lute tablature staff, 6 courses (narrow)
    /*  */"ltblstrp": {unicode: "\uEBA3"}, // Lute tablature start repeat barline
    /*  */"ltblenrp": {unicode: "\uEBA4"}, // Lute tablature end repeat barline
    /*  */"ltblfn": {unicode: "\uEBA5"}, // Lute tablature final barline
    /*  */"ltdrdbwh": {unicode: "\uEBA6"}, // Double whole note (breve) duration sign
    /*  */"ltdrwh": {unicode: "\uEBA7"}, // Whole note (semibreve) duration sign
    /*  */"ltdrhf": {unicode: "\uEBA8"}, // Half note (minim) duration sign
    /*  */"ltdrqr": {unicode: "\uEBA9"}, // Quarter note (crotchet) duration sign
    /*  */"ltdr8": {unicode: "\uEBAA"}, // Eighth note (quaver) duration sign
    /*  */"ltdr16": {unicode: "\uEBAB"}, // 16th note (semiquaver) duration sign
    /*  */"ltdr32": {unicode: "\uEBAC"}, // 32nd note (demisemiquaver) duration sign
    /*  */"ltfiRHtm": {unicode: "\uEBAD"}, // Right-hand fingering, thumb
    /*  */"ltfiRHfr": {unicode: "\uEBAE"}, // Right-hand fingering, first finger
    /*  */"ltfiRHsc": {unicode: "\uEBAF"}, // Right-hand fingering, second finger
    /*  */"ltfiRHth": {unicode: "\uEBB0"}, // Right-hand fingering, third finger
    /*  */"ltfrfrA": {unicode: "\uEBC0"}, // Open string (a)
    /*  */"ltfrfrB": {unicode: "\uEBC1"}, // First fret (b)
    /*  */"ltfrfrC": {unicode: "\uEBC2"}, // Second fret (c)
    /*  */"ltfrfrD": {unicode: "\uEBC3"}, // Third fret (d)
    /*  */"ltfrfrE": {unicode: "\uEBC4"}, // Fourth fret (e)
    /*  */"ltfrfrF": {unicode: "\uEBC5"}, // Fifth fret (f)
    /*  */"ltfrfrG": {unicode: "\uEBC6"}, // Sixth fret (g)
    /*  */"ltfrfrH": {unicode: "\uEBC7"}, // Seventh fret (h)
    /*  */"ltfrfrI": {unicode: "\uEBC8"}, // Eighth fret (i)
    /*  */"ltfrfrK": {unicode: "\uEBC9"}, // Ninth fret (k)
    /*  */"ltfrfrL": {unicode: "\uEBCA"}, // 10th fret (l)
    /*  */"ltfrfrM": {unicode: "\uEBCB"}, // 11th fret (m)
    /*  */"ltfrfrN": {unicode: "\uEBCC"}, // 12th fret (n)
    /*  */"ltfr7cr": {unicode: "\uEBCD"}, // Seventh course (diapason)
    /*  */"ltfr8cr": {unicode: "\uEBCE"}, // Eighth course (diapason)
    /*  */"ltfr9cr": {unicode: "\uEBCF"}, // Ninth course (diapason)
    /*  */"ltfr10cr": {unicode: "\uEBD0"}, // 10th course (diapason)
    /*  */"ltfrmrup": {unicode: "\uEBD1"}, // Mordent with upper auxiliary
    /*  */"ltfrmrlw": {unicode: "\uEBD2"}, // Mordent with lower auxiliary
    /*  */"ltfrmrin": {unicode: "\uEBD3"}, // Inverted mordent
    /*  */"ltfrapbl": {unicode: "\uEBD4"}, // Appoggiatura from below
    /*  */"ltfrapab": {unicode: "\uEBD5"}, // Appoggiatura from above
    /*  */"ltitfr0": {unicode: "\uEBE0"}, // Open string (0)
    /*  */"ltitfr1": {unicode: "\uEBE1"}, // First fret (1)
    /*  */"ltitfr2": {unicode: "\uEBE2"}, // Second fret (2)
    /*  */"ltitfr3": {unicode: "\uEBE3"}, // Third fret (3)
    /*  */"ltitfr4": {unicode: "\uEBE4"}, // Fourth fret (4)
    /*  */"ltitfr5": {unicode: "\uEBE5"}, // Fifth fret (5)
    /*  */"ltitfr6": {unicode: "\uEBE6"}, // Sixth fret (6)
    /*  */"ltitfr7": {unicode: "\uEBE7"}, // Seventh fret (7)
    /*  */"ltitfr8": {unicode: "\uEBE8"}, // Eighth fret (8)
    /*  */"ltitfr9": {unicode: "\uEBE9"}, // Ninth fret (9)
    /*  */"ltittmft": {unicode: "\uEBEA"}, // Fast tempo indication (de Mudarra)
    /*  */"ltittmsmft": {unicode: "\uEBEB"}, // Somewhat fast tempo indication (de Narvaez)
    /*  */"ltittmntftnrsl": {unicode: "\uEBEC"}, // Neither fast nor slow tempo indication (de Mudarra)
    /*  */"ltittmsl": {unicode: "\uEBED"}, // Slow tempo indication (de Mudarra)
    /*  */"ltittmvrsl": {unicode: "\uEBEE"}, // Very slow indication (de Narvaez)
    /*  */"ltittmtr": {unicode: "\uEBEF"}, // Triple time indication
    /*  */"ltitclFfaut": {unicode: "\uEBF0"}, // F fa ut clef
    /*  */"ltitclCslfaut": {unicode: "\uEBF1"}, // C sol fa ut clef
    /*  */"ltittr": {unicode: "\uEBF2"}, // Single-finger tremolo or mordent
    /*  */"ltithlnt": {unicode: "\uEBF3"}, // Hold note
    /*  */"ltithlfi": {unicode: "\uEBF4"}, // Hold finger in place
    /*  */"ltitrlfi": {unicode: "\uEBF5"}, // Release finger
    /*  */"ltitvb": {unicode: "\uEBF6"}, // Vibrato (verre cass\u00e9)
    /*  */"ltgrAlw": {unicode: "\uEC00"}, // 5th course, 1st fret (a)
    /*  */"ltgrBlw": {unicode: "\uEC01"}, // 4th course, 1st fret (b)
    /*  */"ltgrClw": {unicode: "\uEC02"}, // 3rd course, 1st fret (c)
    /*  */"ltgrDlw": {unicode: "\uEC03"}, // 2nd course, 1st fret (d)
    /*  */"ltgrElw": {unicode: "\uEC04"}, // 1st course, 1st fret (e)
    /*  */"ltgrFlw": {unicode: "\uEC05"}, // 5th course, 2nd fret (f)
    /*  */"ltgrGlw": {unicode: "\uEC06"}, // 4th course, 2nd fret (g)
    /*  */"ltgrHlw": {unicode: "\uEC07"}, // 3rd course, 2nd fret (h)
    /*  */"ltgrIlw": {unicode: "\uEC08"}, // 2nd course, 2nd fret (i)
    /*  */"ltgrKlw": {unicode: "\uEC09"}, // 1st course, 2nd fret (k)
    /*  */"ltgrLlw": {unicode: "\uEC0A"}, // 5th course, 3rd fret (l)
    /*  */"ltgrMlw": {unicode: "\uEC0B"}, // 4th course, 3rd fret (m)
    /*  */"ltgrNlw": {unicode: "\uEC0C"}, // 3rd course, 3rd fret (n)
    /*  */"ltgrOlw": {unicode: "\uEC0D"}, // 2nd course, 3rd fret (o)
    /*  */"ltgrPlw": {unicode: "\uEC0E"}, // 1st course, 3rd fret (p)
    /*  */"ltgrQlw": {unicode: "\uEC0F"}, // 5th course, 4th fret (q)
    /*  */"ltgrRlw": {unicode: "\uEC10"}, // 4th course, 4th fret (r)
    /*  */"ltgrSlw": {unicode: "\uEC11"}, // 3rd course, 4th fret (s)
    /*  */"ltgrTlw": {unicode: "\uEC12"}, // 2nd course, 4th fret (t)
    /*  */"ltgrVlw": {unicode: "\uEC13"}, // 1st course, 4th fret (v)
    /*  */"ltgrXlw": {unicode: "\uEC14"}, // 5th course, 5th fret (x)
    /*  */"ltgrYlw": {unicode: "\uEC15"}, // 4th course, 5th fret (y)
    /*  */"ltgrZlw": {unicode: "\uEC16"}, // 3rd course, 5th fret (z)
    /*  */"ltgrAup": {unicode: "\uEC17"}, // 6th course, 1st fret (A)
    /*  */"ltgrBup": {unicode: "\uEC18"}, // 6th course, 2nd fret (B)
    /*  */"ltgrCup": {unicode: "\uEC19"}, // 6th course, 3rd fret (C)
    /*  */"ltgrDup": {unicode: "\uEC1A"}, // 6th course, 4th fret (D)
    /*  */"ltgrEup": {unicode: "\uEC1B"}, // 6th course, 5th fret (E)
    /*  */"ltgrFup": {unicode: "\uEC1C"}, // 6th course, 6th fret (F)
    /*  */"ltgrGup": {unicode: "\uEC1D"}, // 6th course, 7th fret (G)
    /*  */"ltgrHup": {unicode: "\uEC1E"}, // 6th course, 8th fret (H)
    /*  */"ltgrIup": {unicode: "\uEC1F"}, // 6th course, 9th fret (I)
    /*  */"ltgrKup": {unicode: "\uEC20"}, // 6th course, 10th fret (K)
    /*  */"ltgrLup": {unicode: "\uEC21"}, // 6th course, 11th fret (L)
    /*  */"ltgrMup": {unicode: "\uEC22"}, // 6th course, 12th fret (M)
    /*  */"ltgrNup": {unicode: "\uEC23"}, // 6th course, 13th fret (N)
    /*  */"kvCcl": {unicode: "\uEC30"}, // Kievan C clef (tse-fa-ut)
    /*  */"kvensy": {unicode: "\uEC31"}, // Kievan ending symbol
    /*  */"kvntrc": {unicode: "\uEC32"}, // Kievan reciting note
    /*  */"kvntwh": {unicode: "\uEC33"}, // Kievan whole note
    /*  */"kvntwhfn": {unicode: "\uEC34"}, // Kievan final whole note
    /*  */"kvnthfstln": {unicode: "\uEC35"}, // Kievan half note (on staff line)
    /*  */"kvnthfstsp": {unicode: "\uEC36"}, // Kievan half note (in staff space)
    /*  */"kvntqrsmup": {unicode: "\uEC37"}, // Kievan quarter note, stem up
    /*  */"kvntqrsmdn": {unicode: "\uEC38"}, // Kievan quarter note, stem down
    /*  */"kvnt8smup": {unicode: "\uEC39"}, // Kievan eighth note, stem up
    /*  */"kvnt8smdn": {unicode: "\uEC3A"}, // Kievan eighth note, stem down
    /*  */"kvntbm": {unicode: "\uEC3B"}, // Kievan beam
    /*  */"kvagdt": {unicode: "\uEC3C"}, // Kievan augmentation dot
    /*  */"kvacsh": {unicode: "\uEC3D"}, // Kievan sharp
    /*  */"kvacfl": {unicode: "\uEC3E"}, // Kievan flat
    /*  */"kdhndo": {unicode: "\uEC40"}, // Do hand sign
    /*  */"kdhnre": {unicode: "\uEC41"}, // Re hand sign
    /*  */"kdhnmi": {unicode: "\uEC42"}, // Mi hand sign
    /*  */"kdhnfa": {unicode: "\uEC43"}, // Fa hand sign
    /*  */"kdhnso": {unicode: "\uEC44"}, // So hand sign
    /*  */"kdhnla": {unicode: "\uEC45"}, // La hand sign
    /*  */"kdhnti": {unicode: "\uEC46"}, // Ti hand sign
    /*  */"smsh": {unicode: "\uEC50"}, // Sharp stem up
    /*  */"smshwt": {unicode: "\uEC51"}, // Sharp (white) stem up
    /*  */"smfl": {unicode: "\uEC52"}, // Flat
    /*  */"smflwt": {unicode: "\uEC53"}, // Flat (white)
    /*  */"smhssh": {unicode: "\uEC54"}, // Sharp history sign
    /*  */"smhsdbsh": {unicode: "\uEC55"}, // Double sharp history sign
    /*  */"smhsfl": {unicode: "\uEC56"}, // Flat history sign
    /*  */"smhsdbfl": {unicode: "\uEC57"}, // Double flat history sign
    /*  */"smnt": {unicode: "\uEC58"}, // Natural (N)
    /*  */"smshdn": {unicode: "\uEC59"}, // Sharp stem down
    /*  */"smshwtdn": {unicode: "\uEC5A"}, // Sharp (white) stem down
    /*  */"msdontph": {unicode: "\uEC60"}, // Do not photocopy
    /*  */"msdontcp": {unicode: "\uEC61"}, // Do not copy
    /*  */"msey": {unicode: "\uEC62"}, // Eyeglasses
    /*  */"mtmdarlf": {unicode: "\uEC63"}, // Left-pointing arrow for metric modulation
    /*  */"mtmdarrt": {unicode: "\uEC64"}, // Right-pointing arrow for metric modulation
    /*  */"tmsgbklf": {unicode: "\uEC80"}, // Left bracket for whole time signature
    /*  */"tmsgbkrt": {unicode: "\uEC81"}, // Right bracket for whole time signature
    /*  */"tmsgbklfsm": {unicode: "\uEC82"}, // Left bracket for numerator only
    /*  */"tmsgbkrtsm": {unicode: "\uEC83"}, // Right bracket for numerator only
    /*  */"tmsgsl": {unicode: "\uEC84"}, // Time signature slash separator
    /*  */"tmsgct2": {unicode: "\uEC85"}, // Cut time (Bach)
    /*  */"tmsgct3": {unicode: "\uEC86"}, // Cut triple time (9/8)
    /*  */"oclc": {unicode: "\uEC90"}, // Loco
    /*  */"ocbsA": {unicode: "\uEC91"}, // a (baseline)
    /*  */"ocspA": {unicode: "\uEC92"}, // a (superscript)
    /*  */"ocbsB": {unicode: "\uEC93"}, // b (baseline)
    /*  */"ocspB": {unicode: "\uEC94"}, // b (superscript)
    /*  */"ocbsM": {unicode: "\uEC95"}, // m (baseline)
    /*  */"ocspM": {unicode: "\uEC96"}, // m (superscript)
    /*  */"ocbsV": {unicode: "\uEC97"}, // v (baseline)
    /*  */"ocspV": {unicode: "\uEC98"}, // v (superscript)
    /*  */"mtntdbwh": {unicode: "\uECA0"}, // Double whole note (breve)
    /*  */"mtntdbwhsq": {unicode: "\uECA1"}, // Double whole note (square)
    /*  */"mtntwh": {unicode: "\uECA2"}, // Whole note (semibreve)
    /*  */"mtnthfup": {unicode: "\uECA3"}, // Half note (minim) stem up
    /*  */"mtnthfdn": {unicode: "\uECA4"}, // Half note (minim) stem down
    /*  */"mtntqrup": {unicode: "\uECA5"}, // Quarter note (crotchet) stem up
    /*  */"mtntqrdn": {unicode: "\uECA6"}, // Quarter note (crotchet) stem down
    /*  */"mtnt8up": {unicode: "\uECA7"}, // Eighth note (quaver) stem up
    /*  */"mtnt8dn": {unicode: "\uECA8"}, // Eighth note (quaver) stem down
    /*  */"mtnt16up": {unicode: "\uECA9"}, // 16th note (semiquaver) stem up
    /*  */"mtnt16dn": {unicode: "\uECAA"}, // 16th note (semiquaver) stem down
    /*  */"mtnt32up": {unicode: "\uECAB"}, // 32nd note (demisemiquaver) stem up
    /*  */"mtnt32dn": {unicode: "\uECAC"}, // 32nd note (demisemiquaver) stem down
    /*  */"mtnt64up": {unicode: "\uECAD"}, // 64th note (hemidemisemiquaver) stem up
    /*  */"mtnt64dn": {unicode: "\uECAE"}, // 64th note (hemidemisemiquaver) stem down
    /*  */"mtnt128up": {unicode: "\uECAF"}, // 128th note (semihemidemisemiquaver) stem up
    /*  */"mtnt128dn": {unicode: "\uECB0"}, // 128th note (semihemidemisemiquaver) stem down
    /*  */"mtnt256up": {unicode: "\uECB1"}, // 256th note (demisemihemidemisemiquaver) stem up
    /*  */"mtnt256dn": {unicode: "\uECB2"}, // 256th note (demisemihemidemisemiquaver) stem down
    /*  */"mtnt512up": {unicode: "\uECB3"}, // 512th note (hemidemisemihemidemisemiquaver) stem up
    /*  */"mtnt512dn": {unicode: "\uECB4"}, // 512th note (hemidemisemihemidemisemiquaver) stem down
    /*  */"mtnt1024up": {unicode: "\uECB5"}, // 1024th note (semihemidemisemihemidemisemiquaver) stem up
    /*  */"mtnt1024dn": {unicode: "\uECB6"}, // 1024th note (semihemidemisemihemidemisemiquaver) stem down
    /*  */"mtagdt": {unicode: "\uECB7"}, // Augmentation dot
    /*  */"fg7dm": {unicode: "\uECC0"}, // Figured bass 7 diminished
    /*  */"fgtrfl": {unicode: "\uECC1"}, // Figured bass triple flat
    /*  */"fgtrsh": {unicode: "\uECC2"}, // Figured bass triple sharp
    /*  */"ntshrndbwh": {unicode: "\uECD0"}, // Round double whole (4-shape sol; 7-shape so)
    /*  */"ntshsqdbwh": {unicode: "\uECD1"}, // Square double whole (4-shape la; Aikin 7-shape la)
    /*  */"ntshtrrtdbwh": {unicode: "\uECD2"}, // Triangle right double whole (stem down; 4-shape fa; 7-shape fa)
    /*  */"ntshtrlfdbwh": {unicode: "\uECD3"}, // Triangle left double whole (stem up; 4-shape fa; 7-shape fa)
    /*  */"ntshdmdbwh": {unicode: "\uECD4"}, // Diamond double whole (4-shape mi; 7-shape mi)
    /*  */"ntshtrupdbwh": {unicode: "\uECD5"}, // Triangle up double whole (Aikin 7-shape do)
    /*  */"ntshmndbwh": {unicode: "\uECD6"}, // Moon double whole (Aikin 7-shape re)
    /*  */"ntshtrrndbwh": {unicode: "\uECD7"}, // Triangle-round white (Aikin 7-shape ti)
    /*  */"ntshksdbwh": {unicode: "\uECD8"}, // Inverted keystone double whole (Walker 7-shape do)
    /*  */"ntshqrmndbwh": {unicode: "\uECD9"}, // Quarter moon double whole (Walker 7-shape re)
    /*  */"ntshistrdbwh": {unicode: "\uECDA"}, // Isosceles triangle double whole (Walker 7-shape ti)
    /*  */"ntshmnlfdbwh": {unicode: "\uECDB"}, // Moon left double whole (Funk 7-shape do)
    /*  */"ntshahlfdbwh": {unicode: "\uECDC"}, // Arrowhead left double whole (Funk 7-shape re)
    /*  */"ntshtrrnlfdbwh": {unicode: "\uECDD"}, // Triangle-round left double whole (Funk 7-shape ti)
    /*  */"tmsg0tr": {unicode: "\uECE0"}, // Turned time signature 0
    /*  */"tmsg1tr": {unicode: "\uECE1"}, // Turned time signature 1
    /*  */"tmsg2tr": {unicode: "\uECE2"}, // Turned time signature 2
    /*  */"tmsg3tr": {unicode: "\uECE3"}, // Turned time signature 3
    /*  */"tmsg4tr": {unicode: "\uECE4"}, // Turned time signature 4
    /*  */"tmsg5tr": {unicode: "\uECE5"}, // Turned time signature 5
    /*  */"tmsg6tr": {unicode: "\uECE6"}, // Turned time signature 6
    /*  */"tmsg7tr": {unicode: "\uECE7"}, // Turned time signature 7
    /*  */"tmsg8tr": {unicode: "\uECE8"}, // Turned time signature 8
    /*  */"tmsg9tr": {unicode: "\uECE9"}, // Turned time signature 9
    /*  */"tmsgcntr": {unicode: "\uECEA"}, // Turned common time
    /*  */"tmsgctcntr": {unicode: "\uECEB"}, // Turned cut time
    /*  */"tmsg0rv": {unicode: "\uECF0"}, // Reversed time signature 0
    /*  */"tmsg1rv": {unicode: "\uECF1"}, // Reversed time signature 1
    /*  */"tmsg2rv": {unicode: "\uECF2"}, // Reversed time signature 2
    /*  */"tmsg3rv": {unicode: "\uECF3"}, // Reversed time signature 3
    /*  */"tmsg4rv": {unicode: "\uECF4"}, // Reversed time signature 4
    /*  */"tmsg5rv": {unicode: "\uECF5"}, // Reversed time signature 5
    /*  */"tmsg6rv": {unicode: "\uECF6"}, // Reversed time signature 6
    /*  */"tmsg7rv": {unicode: "\uECF7"}, // Reversed time signature 7
    /*  */"tmsg8rv": {unicode: "\uECF8"}, // Reversed time signature 8
    /*  */"tmsg9rv": {unicode: "\uECF9"}, // Reversed time signature 9
    /*  */"tmsgcnrv": {unicode: "\uECFA"}, // Reversed common time
    /*  */"tmsgctcnrv": {unicode: "\uECFB"}, // Reversed cut time
    /*  */"fnMup": {unicode: "\uED00"}, // Function theory M
    /*  */"fnMlw": {unicode: "\uED01"}, // Function theory m
    /*  */"fnNupsp": {unicode: "\uED02"}, // Function theory superscript N
    /*  */"fnRlw": {unicode: "\uED03"}, // Function theory r
    /*  */"fi0": {unicode: "\uED10"}, // Fingering 0 (open string)
    /*  */"fi1": {unicode: "\uED11"}, // Fingering 1 (thumb)
    /*  */"fi2": {unicode: "\uED12"}, // Fingering 2 (index finger)
    /*  */"fi3": {unicode: "\uED13"}, // Fingering 3 (middle finger)
    /*  */"fi4": {unicode: "\uED14"}, // Fingering 4 (ring finger)
    /*  */"fi5": {unicode: "\uED15"}, // Fingering 5 (little finger)
    /*  */"fiTup": {unicode: "\uED16"}, // Fingering T (left-hand thumb for guitar)
    /*  */"fiPlw": {unicode: "\uED17"}, // Fingering p (pulgar; right-hand thumb for guitar)
    /*  */"fiTlw": {unicode: "\uED18"}, // Fingering t (right-hand thumb for guitar)
    /*  */"fiIlw": {unicode: "\uED19"}, // Fingering i (indicio; right-hand index finger for guitar)
    /*  */"fiMlw": {unicode: "\uED1A"}, // Fingering m (medio; right-hand middle finger for guitar)
    /*  */"fiAlw": {unicode: "\uED1B"}, // Fingering a (anular; right-hand ring finger for guitar)
    /*  */"fiClw": {unicode: "\uED1C"}, // Fingering c (right-hand little finger for guitar)
    /*  */"fiXlw": {unicode: "\uED1D"}, // Fingering x (right-hand little finger for guitar)
    /*  */"fiElw": {unicode: "\uED1E"}, // Fingering e (right-hand little finger for guitar)
    /*  */"fiOlw": {unicode: "\uED1F"}, // Fingering o (right-hand little finger for guitar)
    /*  */"fisbab": {unicode: "\uED20"}, // Finger substitution above
    /*  */"fisbbl": {unicode: "\uED21"}, // Finger substitution below
    /*  */"fisbds": {unicode: "\uED22"}, // Finger substitution dash
    /*  */"fimlnt": {unicode: "\uED23"}, // Multiple notes played by thumb or single finger
    /*  */"fi6": {unicode: "\uED24"}, // Fingering 6
    /*  */"fi7": {unicode: "\uED25"}, // Fingering 7
    /*  */"fi8": {unicode: "\uED26"}, // Fingering 8
    /*  */"fi9": {unicode: "\uED27"}, // Fingering 9
    /*  */"filfpr": {unicode: "\uED28"}, // Fingering left parenthesis
    /*  */"firtpr": {unicode: "\uED29"}, // Fingering right parenthesis
    /*  */"filfbk": {unicode: "\uED2A"}, // Fingering left bracket
    /*  */"firtbk": {unicode: "\uED2B"}, // Fingering right bracket
    /*  */"fispmddt": {unicode: "\uED2C"}, // Fingering middle dot separator
    /*  */"fispmddtwt": {unicode: "\uED2D"}, // Fingering white middle dot separator
    /*  */"fispsl": {unicode: "\uED2E"}, // Fingering forward slash separator
    /*  */"acdbflar": {unicode: "\uED30"}, // Arabic double flat
    /*  */"acthqrtnflar": {unicode: "\uED31"}, // Arabic three-quarter-tones flat
    /*  */"acflar": {unicode: "\uED32"}, // Arabic half-tone flat
    /*  */"acqrtnflar": {unicode: "\uED33"}, // Arabic quarter-tone flat
    /*  */"acntar": {unicode: "\uED34"}, // Arabic natural
    /*  */"acqrtnshar": {unicode: "\uED35"}, // Arabic quarter-tone sharp
    /*  */"acshar": {unicode: "\uED36"}, // Arabic half-tone sharp
    /*  */"acthqrtnshar": {unicode: "\uED37"}, // Arabic three-quarter-tones sharp
    /*  */"acdbshar": {unicode: "\uED38"}, // Arabic double sharp
    /*  */"arsfacab": {unicode: "\uED40"}, // Soft accent above
    /*  */"arsfacbl": {unicode: "\uED41"}, // Soft accent below
    /*  */"arsfacstab": {unicode: "\uED42"}, // Soft accent-staccato above
    /*  */"arsfacstbl": {unicode: "\uED43"}, // Soft accent-staccato below
    /*  */"arsfactnab": {unicode: "\uED44"}, // Soft accent-tenuto above
    /*  */"arsfactnbl": {unicode: "\uED45"}, // Soft accent-tenuto below
    /*  */"arsfactnstab": {unicode: "\uED46"}, // Soft accent-tenuto-staccato above
    /*  */"arsfactnstbl": {unicode: "\uED47"}, // Soft accent-tenuto-staccato below
    /*  */"acrssh": {unicode: "\uED50"}, // Raised (Stockhausen)
    /*  */"aclwsh": {unicode: "\uED51"}, // Lowered (Stockhausen)
    /*  */"acflrssh": {unicode: "\uED52"}, // Raised flat (Stockhausen)
    /*  */"acfllwsh": {unicode: "\uED53"}, // Lowered flat (Stockhausen)
    /*  */"acntrssh": {unicode: "\uED54"}, // Raised natural (Stockhausen)
    /*  */"acntlwsh": {unicode: "\uED55"}, // Lowered natural (Stockhausen)
    /*  */"acshrssh": {unicode: "\uED56"}, // Raised sharp (Stockhausen)
    /*  */"acshlwsh": {unicode: "\uED57"}, // Lowered sharp (Stockhausen)
    /*  */"aconqrtnshsh": {unicode: "\uED58"}, // One-quarter-tone sharp (Stockhausen)
    /*  */"aconqrtnflsh": {unicode: "\uED59"}, // One-quarter-tone flat (Stockhausen)
    /*  */"acthqrtnshsh": {unicode: "\uED5A"}, // Three-quarter-tones sharp (Stockhausen)
    /*  */"acflrpspsh": {unicode: "\uED5B"}, // Repeated flat, note in space (Stockhausen)
    /*  */"acflrplnsh": {unicode: "\uED5C"}, // Repeated flat, note on line (Stockhausen)
    /*  */"acshrpspsh": {unicode: "\uED5D"}, // Repeated sharp, note in space (Stockhausen)
    /*  */"acshrplnsh": {unicode: "\uED5E"}, // Repeated sharp, note on line (Stockhausen)
    /*  */"csacfl": {unicode: "\uED60"}, // Flat
    /*  */"csacnt": {unicode: "\uED61"}, // Natural
    /*  */"csacsh": {unicode: "\uED62"}, // Sharp
    /*  */"csacdbsh": {unicode: "\uED63"}, // Double sharp
    /*  */"csacdbfl": {unicode: "\uED64"}, // Double flat
    /*  */"csactrsh": {unicode: "\uED65"}, // Triple sharp
    /*  */"csactrfl": {unicode: "\uED66"}, // Triple flat
    /*  */"indrcl": {unicode: "\uED70"}, // Indian drum clef
    /*  */"fi0it": {unicode: "\uED80"}, // Fingering 0 italic (open string)
    /*  */"fi1it": {unicode: "\uED81"}, // Fingering 1 italic (thumb)
    /*  */"fi2it": {unicode: "\uED82"}, // Fingering 2 italic (index finger)
    /*  */"fi3it": {unicode: "\uED83"}, // Fingering 3 italic (middle finger)
    /*  */"fi4it": {unicode: "\uED84"}, // Fingering 4 italic (ring finger)
    /*  */"fi5it": {unicode: "\uED85"}, // Fingering 5 italic (little finger)
    /*  */"fi6it": {unicode: "\uED86"}, // Fingering 6 italic
    /*  */"fi7it": {unicode: "\uED87"}, // Fingering 7 italic
    /*  */"fi8it": {unicode: "\uED88"}, // Fingering 8 italic
    /*  */"fi9it": {unicode: "\uED89"}, // Fingering 9 italic
    /*  */"filfprit": {unicode: "\uED8A"}, // Fingering left parenthesis italic
    /*  */"firtprit": {unicode: "\uED8B"}, // Fingering right parenthesis italic
    /*  */"filfbkit": {unicode: "\uED8C"}, // Fingering left bracket italic
    /*  */"firtbkit": {unicode: "\uED8D"}, // Fingering right bracket italic
    /*  */"fiQlw": {unicode: "\uED8E"}, // Fingering q (right-hand little finger for guitar)
    /*  */"fiSlw": {unicode: "\uED8F"}, // Fingering s (right-hand little finger for guitar)
    /*  */"knst": {unicode: "\uEDA0"}, // Step
    /*  */"kntp": {unicode: "\uEDA1"}, // Tap
    /*  */"knhp": {unicode: "\uEDA2"}, // Hop
    /*  */"knlp": {unicode: "\uEDA3"}, // Leap
    /*  */"knjmtg": {unicode: "\uEDA4"}, // Jump-together
    /*  */"knjmap": {unicode: "\uEDA5"}, // Jump-apart
    /*  */"knbrfr": {unicode: "\uEDA6"}, // Brush-forward
    /*  */"knbrbc": {unicode: "\uEDA7"}, // Brush-backward
    /*  */"kngrtp": {unicode: "\uEDA8"}, // Grace-tap
    /*  */"knfl": {unicode: "\uEDA9"}, // Flat
    /*  */"knhl": {unicode: "\uEDAA"}, // Heel
    /*  */"knto": {unicode: "\uEDAB"}, // Toe
    /*  */"knknot": {unicode: "\uEDAC"}, // Knee-outward
    /*  */"knknin": {unicode: "\uEDAD"}, // Knee-inward
    /*  */"knsc": {unicode: "\uEDAE"}, // Scrape
    /*  */"kntr": {unicode: "\uEDAF"}, // Trench
    /*  */"knflhp": {unicode: "\uEDB0"}, // Flea-hop
    /*  */"knfltp": {unicode: "\uEDB1"}, // Flea-tap
    /*  */"kndrst": {unicode: "\uEDB2"}, // Draw-step
    /*  */"kndrtp": {unicode: "\uEDB3"}, // Draw-tap
    /*  */"knslst": {unicode: "\uEDB4"}, // Slide-step
    /*  */"knsltp": {unicode: "\uEDB5"}, // Slide-tap
    /*  */"knhldr": {unicode: "\uEDB6"}, // Heel-drop
    /*  */"kntodr": {unicode: "\uEDB7"}, // Toe-drop
    /*  */"kncl": {unicode: "\uEDB8"}, // Clap
    /*  */"knsn": {unicode: "\uEDB9"}, // Snap
    /*  */"kndbsn": {unicode: "\uEDBA"}, // Double-snap
    /*  */"knhlcl": {unicode: "\uEDBB"}, // Heel-click
    /*  */"kntocl": {unicode: "\uEDBC"}, // Toe-click
    /*  */"knlfcr": {unicode: "\uEDBD"}, // Left-cross
    /*  */"knrtcr": {unicode: "\uEDBE"}, // Right-cross
    /*  */"knlfct": {unicode: "\uEDBF"}, // Left-catch
    /*  */"knrtct": {unicode: "\uEDC0"}, // Right-catch
    /*  */"knlftost": {unicode: "\uEDC1"}, // Left-toe-strike
    /*  */"knrttost": {unicode: "\uEDC2"}, // Right-toe-strike
    /*  */"knsa": {unicode: "\uEDC3"}, // Stamp
    /*  */"knhlst": {unicode: "\uEDC4"}, // Heel-step
    /*  */"kntost": {unicode: "\uEDC5"}, // Toe-step
    /*  */"knblch": {unicode: "\uEDC6"}, // Ball-change
    /*  */"knstsa": {unicode: "\uEDC7"}, // Step-stamp
    /*  */"knsasa": {unicode: "\uEDC8"}, // Stamp-stamp
    /*  */"knhlch": {unicode: "\uEDC9"}, // Heel-change
    /*  */"knso": {unicode: "\uEDCA"}, // Stomp
    /*  */"knhltp": {unicode: "\uEDCB"}, // Heel-tap
    /*  */"kntotp": {unicode: "\uEDCC"}, // Toe-tap
    /*  */"knbldg": {unicode: "\uEDCD"}, // Ball-dig
    /*  */"knsm": {unicode: "\uEDCE"}, // Slam
    /*  */"knfm": {unicode: "\uEDCF"}, // Flam
    /*  */"kngrtphp": {unicode: "\uEDD0"}, // Grace-tap-hop
    /*  */"kngrtpch": {unicode: "\uEDD1"}, // Grace-tap-change
    /*  */"knlpflft": {unicode: "\uEDD2"}, // Leap-flat-foot
    /*  */"kngrtpsa": {unicode: "\uEDD3"}, // Grace-tap-stamp
    /*  */"knlphlcl": {unicode: "\uEDD4"}, // Leap-heel-click
    /*  */"knfp": {unicode: "\uEDD5"}, // Flap
    /*  */"knrp": {unicode: "\uEDD6"}, // Rip
    /*  */"knfpst": {unicode: "\uEDD7"}, // Flap-step
    /*  */"knbcfp": {unicode: "\uEDD8"}, // Back-flap
    /*  */"knsp": {unicode: "\uEDD9"}, // Slap
    /*  */"knbcrp": {unicode: "\uEDDA"}, // Back-rip
    /*  */"knsobr": {unicode: "\uEDDB"}, // Stomp-brush
    /*  */"knsf": {unicode: "\uEDDC"}, // Scuff
    /*  */"knch": {unicode: "\uEDDD"}, // Chug
    /*  */"knps": {unicode: "\uEDDE"}, // Push
    /*  */"knzi": {unicode: "\uEDDF"}, // Zink
    /*  */"knrf": {unicode: "\uEDE0"}, // Riff
    /*  */"knbcrf": {unicode: "\uEDE1"}, // Back-riff
    /*  */"knbcch": {unicode: "\uEDE2"}, // Back-chug
    /*  */"knpl": {unicode: "\uEDE3"}, // Pull
    /*  */"knza": {unicode: "\uEDE4"}, // Zank
    /*  */"knsh": {unicode: "\uEDE5"}, // Shuffle
    /*  */"knse": {unicode: "\uEDE6"}, // Scuffle
    /*  */"knrl": {unicode: "\uEDE7"}, // Riffle
    /*  */"knre": {unicode: "\uEDE8"}, // Ripple
    /*  */"knwn": {unicode: "\uEDE9"}, // Wing
    /*  */"knwnch": {unicode: "\uEDEA"}, // Wing-change
    /*  */"kndbwn": {unicode: "\uEDEB"}, // Double-wing
    /*  */"knovthtp": {unicode: "\uEDEC"}, // Over-the-top
    /*  */"knovthtptp": {unicode: "\uEDED"}, // Over-the-top-tap
    /*  */"knlfft": {unicode: "\uEDEE"}, // Left-foot
    /*  */"knrtft": {unicode: "\uEDEF"}, // Right-foot
    /*  */"knlftn": {unicode: "\uEDF0"}, // Left-turn
    /*  */"knrttn": {unicode: "\uEDF1"}, // Right-turn
    /*  */"orgrCup": {unicode: "\uEE00"}, // German organ tablature great C
    /*  */"orgrcsup": {unicode: "\uEE01"}, // German organ tablature great Cis
    /*  */"orgrDup": {unicode: "\uEE02"}, // German organ tablature great D
    /*  */"orgrdsup": {unicode: "\uEE03"}, // German organ tablature great Dis
    /*  */"orgrEup": {unicode: "\uEE04"}, // German organ tablature great E
    /*  */"orgrFup": {unicode: "\uEE05"}, // German organ tablature great F
    /*  */"orgrfsup": {unicode: "\uEE06"}, // German organ tablature great Fis
    /*  */"orgrGup": {unicode: "\uEE07"}, // German organ tablature great G
    /*  */"orgrgsup": {unicode: "\uEE08"}, // German organ tablature great Gis
    /*  */"orgrAup": {unicode: "\uEE09"}, // German organ tablature great A
    /*  */"orgrBup": {unicode: "\uEE0A"}, // German organ tablature great B
    /*  */"orgrHup": {unicode: "\uEE0B"}, // German organ tablature great H
    /*  */"orgrClw": {unicode: "\uEE0C"}, // German organ tablature small C
    /*  */"orgrcslw": {unicode: "\uEE0D"}, // German organ tablature small Cis
    /*  */"orgrDlw": {unicode: "\uEE0E"}, // German organ tablature small D
    /*  */"orgrdslw": {unicode: "\uEE0F"}, // German organ tablature small Dis
    /*  */"orgrElw": {unicode: "\uEE10"}, // German organ tablature small E
    /*  */"orgrFlw": {unicode: "\uEE11"}, // German organ tablature small F
    /*  */"orgrfslw": {unicode: "\uEE12"}, // German organ tablature small Fis
    /*  */"orgrGlw": {unicode: "\uEE13"}, // German organ tablature small G
    /*  */"orgrgslw": {unicode: "\uEE14"}, // German organ tablature small Gis
    /*  */"orgrAlw": {unicode: "\uEE15"}, // German organ tablature small A
    /*  */"orgrBlw": {unicode: "\uEE16"}, // German organ tablature small B
    /*  */"orgrHlw": {unicode: "\uEE17"}, // German organ tablature small H
    /*  */"orgrocup": {unicode: "\uEE18"}, // Combining single octave line above
    /*  */"orgr2ocup": {unicode: "\uEE19"}, // Combining double octave line above
    /*  */"orgrocdn": {unicode: "\uEE1A"}, // Combining single octave line below
    /*  */"orgrti": {unicode: "\uEE1B"}, // Tie
    /*  */"orgragdt": {unicode: "\uEE1C"}, // Rhythm Dot
    /*  */"orgrbxsbrs": {unicode: "\uEE1D"}, // Semibrevis Rest Buxheimer Orgelbuch
    /*  */"orgrbxmnrs": {unicode: "\uEE1E"}, // Minima Rest Buxheimer Orgelbuch
    /*  */"orgrsbrs": {unicode: "\uEE1F"}, // Semibrevis Rest
    /*  */"orgrmnrs": {unicode: "\uEE20"}, // Minima Rest
    /*  */"orgrsmrs": {unicode: "\uEE21"}, // Semiminima Rest
    /*  */"orgrfsrs": {unicode: "\uEE22"}, // Fusa Rest
    /*  */"orgrsfrs": {unicode: "\uEE23"}, // Semifusa Rest
    /*  */"orgrbxbr3": {unicode: "\uEE24"}, // Brevis (Ternary) Buxheimer Orgelbuch
    /*  */"orgrbxbr2": {unicode: "\uEE25"}, // Brevis (Binary) Buxheimer Orgelbuch
    /*  */"orgrbxsb": {unicode: "\uEE26"}, // Semibrevis Buxheimer Orgelbuch
    /*  */"orgrsb": {unicode: "\uEE27"}, // Semibrevis
    /*  */"orgrmn": {unicode: "\uEE28"}, // Minima
    /*  */"orgrsm": {unicode: "\uEE29"}, // Semiminima
    /*  */"orgrfs": {unicode: "\uEE2A"}, // Fusa
    /*  */"orgrsf": {unicode: "\uEE2B"}, // Semifusa
    /*  */"orgr2mn": {unicode: "\uEE2C"}, // Two Minimae
    /*  */"orgr2sm": {unicode: "\uEE2D"}, // Two Semiminimae
    /*  */"orgr2fs": {unicode: "\uEE2E"}, // Two Fusae
    /*  */"orgr2sf": {unicode: "\uEE2F"}, // Two Semifusae
    /*  */"orgr3mn": {unicode: "\uEE30"}, // Three Minimae
    /*  */"orgr3sm": {unicode: "\uEE31"}, // Three Semiminimae
    /*  */"orgr3fs": {unicode: "\uEE32"}, // Three Fusae
    /*  */"orgr3sf": {unicode: "\uEE33"}, // Three Semifusae
    /*  */"orgr4mn": {unicode: "\uEE34"}, // Four Minimae
    /*  */"orgr4sm": {unicode: "\uEE35"}, // Four Semiminimae
    /*  */"orgr4fs": {unicode: "\uEE36"}, // Four Fusae
    /*  */"orgr4sf": {unicode: "\uEE37"}, // Four Semifusae
    /*  */"orgr5mn": {unicode: "\uEE38"}, // Five Minimae
    /*  */"orgr5sm": {unicode: "\uEE39"}, // Five Semiminimae
    /*  */"orgr5fs": {unicode: "\uEE3A"}, // Five Fusae
    /*  */"orgr5sf": {unicode: "\uEE3B"}, // Five Semifusae
    /*  */"orgr6mn": {unicode: "\uEE3C"}, // Six Minimae
    /*  */"orgr6sm": {unicode: "\uEE3D"}, // Six Semiminimae
    /*  */"orgr6fs": {unicode: "\uEE3E"}, // Six Fusae
    /*  */"orgr6sf": {unicode: "\uEE3F"}, // Six Semifusae
    /*  */"accmlw29lmcm": {unicode: "\uEE50"}, // Combining lower by one 29-limit comma
    /*  */"accmrs29lmcm": {unicode: "\uEE51"}, // Combining raise by one 29-limit comma
    /*  */"accmlw37qr": {unicode: "\uEE52"}, // Combining lower by one 37-limit quartertone
    /*  */"accmrs37qr": {unicode: "\uEE53"}, // Combining raise by one 37-limit quartertone
    /*  */"accmlw41cm": {unicode: "\uEE54"}, // Combining lower by one 41-limit comma
    /*  */"accmrs41cm": {unicode: "\uEE55"}, // Combining raise by one 41-limit comma
    /*  */"accmlw43cm": {unicode: "\uEE56"}, // Combining lower by one 43-limit comma
    /*  */"accmrs43cm": {unicode: "\uEE57"}, // Combining raise by one 43-limit comma
    /*  */"accmlw47qr": {unicode: "\uEE58"}, // Combining lower by one 47-limit quartertone
    /*  */"accmrs47qr": {unicode: "\uEE59"}, // Combining raise by one 47-limit quartertone
    /*  */"acupandnup": {unicode: "\uEE60"}, // Accidental up
    /*  */"acupandndn": {unicode: "\uEE61"}, // Accidental down
    /*  */"acupandnmr": {unicode: "\uEE62"}, // Accidental more
    /*  */"acupandnls": {unicode: "\uEE63"}, // Accidental less
    /*  */"achbqrtnhg": {unicode: "\uEE64"}, // Quarter-tone higher (Alois H\u00e1ba)
    /*  */"achbflqrtnhg": {unicode: "\uEE65"}, // Quarter-tone higher (Alois H\u00e1ba)
    /*  */"achbshthqrtnhg": {unicode: "\uEE66"}, // Three quarter-tones higher (Alois H\u00e1ba)
    /*  */"achbqrtnlw": {unicode: "\uEE67"}, // Quarter-tone lower (Alois H\u00e1ba)
    /*  */"achbshqrtnlw": {unicode: "\uEE68"}, // Quarter-tone lower (Alois H\u00e1ba)
    /*  */"achbflthqrtnlw": {unicode: "\uEE69"}, // Three quarter-tones lower (Alois H\u00e1ba)
    /*  */"swrdnhblfm": {unicode: "\uEE70"}, // Swiss rudiments flam black notehead
    /*  */"swrdnhhffm": {unicode: "\uEE71"}, // Swiss rudiments flam half (minim) notehead
    /*  */"swrdnhbldb": {unicode: "\uEE72"}, // Swiss rudiments doubl\u00e9 black notehead
    /*  */"swrdnhhfdb": {unicode: "\uEE73"}, // Swiss rudiments doubl\u00e9 half (minim) notehead
    /*  */"srdnbwtwbd": {unicode: "\uEE80"}, // Down bow, towards body
    /*  */"srupbwtwbd": {unicode: "\uEE81"}, // Up bow, towards body
    /*  */"srdnbwawfrbd": {unicode: "\uEE82"}, // Down bow, away from body
    /*  */"srupbwawfrbd": {unicode: "\uEE83"}, // Up bow, away from body
    /*  */"srdnbwbybr": {unicode: "\uEE84"}, // Down bow, beyond bridge
    /*  */"srupbwbybr": {unicode: "\uEE85"}, // Up bow, beyond bridge
    /*  */"srscprin": {unicode: "\uEE86"}, // Scrape, parallel inward
    /*  */"srscprot": {unicode: "\uEE87"}, // Scrape, parallel outward
    /*  */"srsccrcl": {unicode: "\uEE88"}, // Scrape, circular clockwise
    /*  */"srsccrcn": {unicode: "\uEE89"}, // Scrape, circular counter-clockwise
    /*  */"srtrchin": {unicode: "\uEE8A"}, // Triple chop, inward
    /*  */"srtrchot": {unicode: "\uEE8B"}, // Triple chop, outward
    /*  */"mnpp5": {unicode: "\uEE90"}, // Mensural proportion 5
    /*  */"mnpp6": {unicode: "\uEE91"}, // Mensural proportion 6
    /*  */"mnpp7": {unicode: "\uEE92"}, // Mensural proportion 7
    /*  */"mnpp8": {unicode: "\uEE93"}, // Mensural proportion 8
    /*  */"mnpp9": {unicode: "\uEE94"}, // Mensural proportion 9
    /*  */"nhnnsn": {unicode: "\uEEA0"}, // Sine notehead (Nancarrow)
    /*  */"nhcwthntsrwh": {unicode: "\uEEA1"}, // 2/3 note (third note series, Cowell)
    /*  */"nhcwthntsrhf": {unicode: "\uEEA2"}, // 1/3 note (third note series, Cowell)
    /*  */"nhcwthntsrbl": {unicode: "\uEEA3"}, // 1/6 note (third note series, Cowell)
    /*  */"nhcwffntsrwh": {unicode: "\uEEA4"}, // 4/5 note (fifth note series, Cowell)
    /*  */"nhcwffntsrhf": {unicode: "\uEEA5"}, // 2/5 note (fifth note series, Cowell)
    /*  */"nhcwffntsrbl": {unicode: "\uEEA6"}, // 1/5 note (fifth note series, Cowell)
    /*  */"nhcwsvntsrwh": {unicode: "\uEEA7"}, // 4/7 note (seventh note series, Cowell)
    /*  */"nhcwsvntsrhf": {unicode: "\uEEA8"}, // 2/7 note (seventh note series, Cowell)
    /*  */"nhcwsvntsrbl": {unicode: "\uEEA9"}, // 1/7 note (seventh note series, Cowell)
    /*  */"nhcwnnntsrwh": {unicode: "\uEEAA"}, // 8/9 note (ninth note series, Cowell)
    /*  */"nhcwnnntsrhf": {unicode: "\uEEAB"}, // 4/9 note (ninth note series, Cowell)
    /*  */"nhcwnnntsrbl": {unicode: "\uEEAC"}, // 2/9 note (ninth note series, Cowell)
    /*  */"nhcwelntsrwh": {unicode: "\uEEAD"}, // 8/11 note (eleventh note series, Cowell)
    /*  */"nhcwelntsrhf": {unicode: "\uEEAE"}, // 4/11 note (eleventh note series, Cowell)
    /*  */"nhcwelsrbl": {unicode: "\uEEAF"}, // 2/11 note (eleventh note series, Cowell)
    /*  */"nhcwttntsrwh": {unicode: "\uEEB0"}, // 8/13 note (thirteenth note series, Cowell)
    /*  */"nhcwttntsrhf": {unicode: "\uEEB1"}, // 4/13 note (thirteenth note series, Cowell)
    /*  */"nhcwttntsrbl": {unicode: "\uEEB2"}, // 2/13 note (thirteenth note series, Cowell)
    /*  */"nhcwftntsrwh": {unicode: "\uEEB3"}, // 8/15 note (fifteenth note series, Cowell)
    /*  */"nhcwftntsrhf": {unicode: "\uEEB4"}, // 4/15 note (fifteenth note series, Cowell)
    /*  */"nhcwftntsrbl": {unicode: "\uEEB5"}, // 2/15 note (fifteenth note series, Cowell)
    /*  */"ntdiwh": {unicode: "\uEEE0"}, // Di (whole note)
    /*  */"ntriwh": {unicode: "\uEEE1"}, // Ri (whole note)
    /*  */"ntrawh": {unicode: "\uEEE2"}, // Ra (whole note)
    /*  */"ntmewh": {unicode: "\uEEE3"}, // Me (whole note)
    /*  */"ntfiwh": {unicode: "\uEEE4"}, // Fi (whole note)
    /*  */"ntsewh": {unicode: "\uEEE5"}, // Se (whole note)
    /*  */"ntliwh": {unicode: "\uEEE6"}, // Li (whole note)
    /*  */"ntlewh": {unicode: "\uEEE7"}, // Le (whole note)
    /*  */"nttewh": {unicode: "\uEEE8"}, // Te (whole note)
    /*  */"ntdihf": {unicode: "\uEEE9"}, // Di (half note)
    /*  */"ntrihf": {unicode: "\uEEEA"}, // Ri (half note)
    /*  */"ntrahf": {unicode: "\uEEEB"}, // Ra (half note)
    /*  */"ntmehf": {unicode: "\uEEEC"}, // Me (half note)
    /*  */"ntfihf": {unicode: "\uEEED"}, // Fi (half note)
    /*  */"ntsehf": {unicode: "\uEEEE"}, // Se (half note)
    /*  */"ntlihf": {unicode: "\uEEEF"}, // Li (half note)
    /*  */"ntlehf": {unicode: "\uEEF0"}, // Le (half note)
    /*  */"nttehf": {unicode: "\uEEF1"}, // Te (half note)
    /*  */"ntdibl": {unicode: "\uEEF2"}, // Di (black note)
    /*  */"ntribl": {unicode: "\uEEF3"}, // Ri (black note)
    /*  */"ntrabl": {unicode: "\uEEF4"}, // Ra (black note)
    /*  */"ntmebl": {unicode: "\uEEF5"}, // Me (black note)
    /*  */"ntfibl": {unicode: "\uEEF6"}, // Fi (black note)
    /*  */"ntsebl": {unicode: "\uEEF7"}, // Se (black note)
    /*  */"ntlibl": {unicode: "\uEEF8"}, // Li (black note)
    /*  */"ntlebl": {unicode: "\uEEF9"}, // Le (black note)
    /*  */"nttebl": {unicode: "\uEEFA"}, // Te (black note)
    /*  */"scdg1": {unicode: "\uEF00"}, // Scale degree 1
    /*  */"scdg2": {unicode: "\uEF01"}, // Scale degree 2
    /*  */"scdg3": {unicode: "\uEF02"}, // Scale degree 3
    /*  */"scdg4": {unicode: "\uEF03"}, // Scale degree 4
    /*  */"scdg5": {unicode: "\uEF04"}, // Scale degree 5
    /*  */"scdg6": {unicode: "\uEF05"}, // Scale degree 6
    /*  */"scdg7": {unicode: "\uEF06"}, // Scale degree 7
    /*  */"scdg8": {unicode: "\uEF07"}, // Scale degree 8
    /*  */"scdg9": {unicode: "\uEF08"}, // Scale degree 9
} as Record<Codeword, Symbol>

export {
    SMuFL_MAP,
}
