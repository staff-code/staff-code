// tslint:disable

import {Code, Symbol} from "./types"

const SMuFL_MAP: Record<Code, Symbol> = {
    /* 	 */[Code[`chtb`]]: {unicode: "\u0009"}, // character tabulation
    /* \n */[Code[`lnfd`]]: {unicode: "\u000A"},    // line feed
    /*  */[Code[`lntb`]]: {unicode: "\u000B"}, // line tabulation
    /*  */[Code[`frfd`]]: {unicode: "\u000C"}, // form feed
    /*  */[Code[`crrt`]]: {unicode: "\u000D"},  // carriage return
    /*  */[Code[`sp`]]: {unicode: "\u0020"},    // space
    /*  */[Code[`nxln`]]: {unicode: "\u0085"}, // next line
    /*   */[Code[`nobrsp`]]: {unicode: "\u00A0"},   // no-break space
    /*   */[Code[`ogspmr`]]: {unicode: "\u1680"},   // ogham space mark
    /*   */[Code[`lnsp`]]: {unicode: "\u2028"}, // line separator
    /*   */[Code[`prsp`]]: {unicode: "\u2029"}, // paragraph separator
    /*   */[Code[`nrnobrsp`]]: {unicode: "\u202F"}, // narrow no-break space
    /*   */[Code[`mdmtsp`]]: {unicode: "\u205F"},   // medium mathematical space
    /*  */[Code[`br`]]: {unicode: "\uE000"},   // Brace
    /*  */[Code[`rvbr`]]: {unicode: "\uE001"}, // Reversed brace
    /*  */[Code[`bk`]]: {unicode: "\uE002"},   // Bracket
    /*  */[Code[`bktp`]]: {unicode: "\uE003"}, // Bracket top
    /*  */[Code[`bkbt`]]: {unicode: "\uE004"}, // Bracket bottom
    /*  */[Code[`rvbktp`]]: {unicode: "\uE005"},   // Reversed bracket top
    /*  */[Code[`rvbkbt`]]: {unicode: "\uE006"},   // Reversed bracket bottom
    /*  */[Code[`sydv`]]: {unicode: "\uE007"}, // System divider
    /*  */[Code[`sydvln`]]: {unicode: "\uE008"},   // Long system divider
    /*  */[Code[`sydvexln`]]: {unicode: "\uE009"}, // Extra long system divider
    /*  */[Code[`spbrdv`]]: {unicode: "\uE00A"},   // Split bar divider (bar spans a system break)
    /*  */[Code[`stdvardn`]]: {unicode: "\uE00B"}, // Staff divide arrow down
    /*  */[Code[`stdvarup`]]: {unicode: "\uE00C"}, // Staff divide arrow up
    /*  */[Code[`stdvarupdn`]]: {unicode: "\uE00D"},   // Staff divide arrows
    /*  */[Code[`st1ln`]]: {unicode: "\uE010"},    // 1-line staff
    /*  */[Code[`st2ln`]]: {unicode: "\uE011"},    // 2-line staff
    /*  */[Code[`st3ln`]]: {unicode: "\uE012"},    // 3-line staff
    /*  */[Code[`st4ln`]]: {unicode: "\uE013"},    // 4-line staff
    /*  */[Code[`st5ln`]]: {unicode: "\uE014", width: 0},  // 5-line staff
    /*  */[Code[`st6ln`]]: {unicode: "\uE015"},    // 6-line staff
    /*  */[Code[`st1lnwd`]]: {unicode: "\uE016"},  // 1-line staff (wide)
    /*  */[Code[`st2lnwd`]]: {unicode: "\uE017"},  // 2-line staff (wide)
    /*  */[Code[`st3lnwd`]]: {unicode: "\uE018"},  // 3-line staff (wide)
    /*  */[Code[`st4lnwd`]]: {unicode: "\uE019"},  // 4-line staff (wide)
    /*  */[Code[`st5lnwd`]]: {unicode: "\uE01A", width: 0},    // 5-line staff (wide)
    /*  */[Code[`st6lnwd`]]: {unicode: "\uE01B"},  // 6-line staff (wide)
    /*  */[Code[`st1lnnr`]]: {unicode: "\uE01C"},  // 1-line staff (narrow)
    /*  */[Code[`st2lnnr`]]: {unicode: "\uE01D"},  // 2-line staff (narrow)
    /*  */[Code[`st3lnnr`]]: {unicode: "\uE01E"},  // 3-line staff (narrow)
    /*  */[Code[`st4lnnr`]]: {unicode: "\uE01F"},  // 4-line staff (narrow)
    /*  */[Code[`st5lnnr`]]: {unicode: "\uE020", width: 0},    // 5-line staff (narrow)
    /*  */[Code[`st6lnnr`]]: {unicode: "\uE021"},  // 6-line staff (narrow)
    /*  */[Code[`lgln`]]: {unicode: "\uE022", width: 11},  // Leger line
    /*  */[Code[`lglnwd`]]: {unicode: "\uE023"},   // Leger line (wide)
    /*  */[Code[`lglnnr`]]: {unicode: "\uE024"},   // Leger line (narrow)
    /*  */[Code[`blsn`]]: {unicode: "\uE030", width: 0},   // Single barline
    /*  */[Code[`bldb`]]: {unicode: "\uE031", width: 3},   // Double barline
    /*  */[Code[`blfn`]]: {unicode: "\uE032"}, // Final barline
    /*  */[Code[`blrvfn`]]: {unicode: "\uE033"},   // Reverse final barline
    /*  */[Code[`blhv`]]: {unicode: "\uE034"}, // Heavy barline
    /*  */[Code[`blhvhv`]]: {unicode: "\uE035"},   // Heavy double barline
    /*  */[Code[`blds`]]: {unicode: "\uE036"}, // Dashed barline
    /*  */[Code[`bldt`]]: {unicode: "\uE037"}, // Dotted barline
    /*  */[Code[`blsh`]]: {unicode: "\uE038"}, // Short barline
    /*  */[Code[`bltc`]]: {unicode: "\uE039"}, // Tick barline
    /*  */[Code[`rplf`]]: {unicode: "\uE040"}, // Left (start) repeat sign
    /*  */[Code[`rprt`]]: {unicode: "\uE041"}, // Right (end) repeat sign
    /*  */[Code[`rprtlf`]]: {unicode: "\uE042"},   // Right and left repeat sign
    /*  */[Code[`rpds`]]: {unicode: "\uE043"}, // Repeat dots
    /*  */[Code[`rpdt`]]: {unicode: "\uE044"}, // Single repeat dot
    /*  */[Code[`dlsg`]]: {unicode: "\uE045"}, // Dal segno
    /*  */[Code[`dacp`]]: {unicode: "\uE046"}, // Da capo
    /*  */[Code[`sg`]]: {unicode: "\uE047"},   // Segno
    /*  */[Code[`cd`]]: {unicode: "\uE048"},   // Coda
    /*  */[Code[`cdsq`]]: {unicode: "\uE049"}, // Square coda
    /*  */[Code[`sgsr1`]]: {unicode: "\uE04A"},    // Segno (serpent)
    /*  */[Code[`sgsr2`]]: {unicode: "\uE04B"},    // Segno (serpent with vertical lines)
    /*  */[Code[`lfrpsm`]]: {unicode: "\uE04C"},   // Left repeat sign within bar
    /*  */[Code[`rtrpsm`]]: {unicode: "\uE04D"},   // Right repeat sign within bar
    /*  */[Code[`Gcl`]]: {unicode: "\uE050", width: 22},   // G clef
    /*  */[Code[`Gcl15mb`]]: {unicode: "\uE051"},  // G clef quindicesima bassa
    /*  */[Code[`Gcl8vb`]]: {unicode: "\uE052"},   // G clef ottava bassa
    /*  */[Code[`Gcl8va`]]: {unicode: "\uE053"},   // G clef ottava alta
    /*  */[Code[`Gcl15ma`]]: {unicode: "\uE054"},  // G clef quindicesima alta
    /*  */[Code[`Gcl8vbol`]]: {unicode: "\uE055"}, // G clef ottava bassa (old style)
    /*  */[Code[`Gcl8vbCcl`]]: {unicode: "\uE056"},    // G clef ottava bassa with C clef
    /*  */[Code[`Gcl8vbpr`]]: {unicode: "\uE057"}, // G clef, optionally ottava bassa
    /*  */[Code[`Gcllgnmbl`]]: {unicode: "\uE058"},    // Combining G clef, number below
    /*  */[Code[`Gcllgnmab`]]: {unicode: "\uE059"},    // Combining G clef, number above
    /*  */[Code[`Gclarup`]]: {unicode: "\uE05A"},  // G clef, arrow up
    /*  */[Code[`Gclardn`]]: {unicode: "\uE05B"},  // G clef, arrow down
    /*  */[Code[`Ccl`]]: {unicode: "\uE05C", width: 22},   // C clef
    /*  */[Code[`Ccl8vb`]]: {unicode: "\uE05D"},   // C clef ottava bassa
    /*  */[Code[`Cclarup`]]: {unicode: "\uE05E"},  // C clef, arrow up
    /*  */[Code[`Cclardn`]]: {unicode: "\uE05F"},  // C clef, arrow down
    /*  */[Code[`Cclsq`]]: {unicode: "\uE060"},    // C clef (19th century)
    /*  */[Code[`Cclcm`]]: {unicode: "\uE061"},    // Combining C clef
    /*  */[Code[`Fcl`]]: {unicode: "\uE062", width: 22},   // F clef
    /*  */[Code[`Fcl15mb`]]: {unicode: "\uE063"},  // F clef quindicesima bassa
    /*  */[Code[`Fcl8vb`]]: {unicode: "\uE064"},   // F clef ottava bassa
    /*  */[Code[`Fcl8va`]]: {unicode: "\uE065"},   // F clef ottava alta
    /*  */[Code[`Fcl15ma`]]: {unicode: "\uE066"},  // F clef quindicesima alta
    /*  */[Code[`Fclarup`]]: {unicode: "\uE067"},  // F clef, arrow up
    /*  */[Code[`Fclardn`]]: {unicode: "\uE068"},  // F clef, arrow down
    /*  */[Code[`unprcl1`]]: {unicode: "\uE069"},  // Unpitched percussion clef 1
    /*  */[Code[`unprcl2`]]: {unicode: "\uE06A"},  // Unpitched percussion clef 2
    /*  */[Code[`smprcl1`]]: {unicode: "\uE06B"},  // Semi-pitched percussion clef 1
    /*  */[Code[`smprcl2`]]: {unicode: "\uE06C"},  // Semi-pitched percussion clef 2
    /*  */[Code[`6sttbcl`]]: {unicode: "\uE06D"},  // 6-string tab clef
    /*  */[Code[`4sttbcl`]]: {unicode: "\uE06E"},  // 4-string tab clef
    /*  */[Code[`sccl`]]: {unicode: "\uE06F"}, // Sch\u00e4ffer clef
    /*  */[Code[`scprcl`]]: {unicode: "\uE070"},   // Sch\u00e4ffer previous clef
    /*  */[Code[`scGcltoFcl`]]: {unicode: "\uE071"},   // Sch\u00e4ffer G clef to F clef change
    /*  */[Code[`scFcltoGcl`]]: {unicode: "\uE072"},   // Sch\u00e4ffer F clef to G clef change
    /*  */[Code[`Gclrv`]]: {unicode: "\uE073"},    // Reversed G clef
    /*  */[Code[`Gcltr`]]: {unicode: "\uE074"},    // Turned G clef
    /*  */[Code[`Cclrv`]]: {unicode: "\uE075"},    // Reversed C clef
    /*  */[Code[`Fclrv`]]: {unicode: "\uE076"},    // Reversed F clef
    /*  */[Code[`Fcltr`]]: {unicode: "\uE077"},    // Turned F clef
    /*  */[Code[`brcl`]]: {unicode: "\uE078"}, // Bridge clef
    /*  */[Code[`acdtcl`]]: {unicode: "\uE079"},   // Diatonic accordion clef
    /*  */[Code[`Gclch`]]: {unicode: "\uE07A"},    // G clef change
    /*  */[Code[`Cclch`]]: {unicode: "\uE07B"},    // C clef change
    /*  */[Code[`Fclch`]]: {unicode: "\uE07C"},    // F clef change
    /*  */[Code[`cl8`]]: {unicode: "\uE07D"},  // 8 for clefs
    /*  */[Code[`cl15`]]: {unicode: "\uE07E"}, // 15 for clefs
    /*  */[Code[`clchcm`]]: {unicode: "\uE07F"},   // Combining clef change
    /*  */[Code[`tmsg0`]]: {unicode: "\uE080", width: 15}, // Time signature 0
    /*  */[Code[`tmsg1`]]: {unicode: "\uE081", width: 15}, // Time signature 1
    /*  */[Code[`tmsg2`]]: {unicode: "\uE082", width: 15}, // Time signature 2
    /*  */[Code[`tmsg3`]]: {unicode: "\uE083", width: 15}, // Time signature 3
    /*  */[Code[`tmsg4`]]: {unicode: "\uE084", width: 15}, // Time signature 4
    /*  */[Code[`tmsg5`]]: {unicode: "\uE085", width: 15}, // Time signature 5
    /*  */[Code[`tmsg6`]]: {unicode: "\uE086", width: 15}, // Time signature 6
    /*  */[Code[`tmsg7`]]: {unicode: "\uE087", width: 15}, // Time signature 7
    /*  */[Code[`tmsg8`]]: {unicode: "\uE088", width: 15}, // Time signature 8
    /*  */[Code[`tmsg9`]]: {unicode: "\uE089", width: 15}, // Time signature 9
    /*  */[Code[`tmsgcn`]]: {unicode: "\uE08A", width: 15},    // Common time
    /*  */[Code[`tmsgctcn`]]: {unicode: "\uE08B"}, // Cut time
    /*  */[Code[`tmsgpl`]]: {unicode: "\uE08C"},   // Time signature +
    /*  */[Code[`tmsgplsm`]]: {unicode: "\uE08D"}, // Time signature + (for numerators)
    /*  */[Code[`tmsgfrsl`]]: {unicode: "\uE08E"}, // Time signature fraction slash
    /*  */[Code[`tmsgeq`]]: {unicode: "\uE08F"},   // Time signature equals
    /*  */[Code[`tmsgmn`]]: {unicode: "\uE090"},   // Time signature minus
    /*  */[Code[`tmsgml`]]: {unicode: "\uE091"},   // Time signature multiply
    /*  */[Code[`tmsgprlfsm`]]: {unicode: "\uE092"},   // Left parenthesis for numerator only
    /*  */[Code[`tmsgprrtsm`]]: {unicode: "\uE093"},   // Right parenthesis for numerator only
    /*  */[Code[`tmsgprlf`]]: {unicode: "\uE094"}, // Left parenthesis for whole time signature
    /*  */[Code[`tmsgprrt`]]: {unicode: "\uE095"}, // Right parenthesis for whole time signature
    /*  */[Code[`tmsgcm`]]: {unicode: "\uE096"},   // Time signature comma
    /*  */[Code[`tmsgfrqr`]]: {unicode: "\uE097"}, // Time signature fraction \u00bc
    /*  */[Code[`tmsgfrhf`]]: {unicode: "\uE098"}, // Time signature fraction \u00bd
    /*  */[Code[`tmsgfrthqr`]]: {unicode: "\uE099"},   // Time signature fraction \u00be
    /*  */[Code[`tmsgfronth`]]: {unicode: "\uE09A"},   // Time signature fraction \u2153
    /*  */[Code[`tmsgfrtwth`]]: {unicode: "\uE09B"},   // Time signature fraction \u2154
    /*  */[Code[`tmsgX`]]: {unicode: "\uE09C"},    // Open time signature
    /*  */[Code[`tmsgoppn`]]: {unicode: "\uE09D"}, // Open time signature (Penderecki)
    /*  */[Code[`tmsgcmnm`]]: {unicode: "\uE09E", width: 0},   // Control character for numerator digit
    /*  */[Code[`tmsgcmdn`]]: {unicode: "\uE09F", width: 0},   // Control character for denominator digit
    /*  */[Code[`nhdbwh`]]: {unicode: "\uE0A0"},   // Double whole (breve) notehead
    /*  */[Code[`nhdbwhsq`]]: {unicode: "\uE0A1"}, // Double whole (breve) notehead (square)
    /*  */[Code[`nhwh`]]: {unicode: "\uE0A2"}, // Whole (semibreve) notehead
    /*  */[Code[`nhhf`]]: {unicode: "\uE0A3"}, // Half (minim) notehead
    /*  */[Code[`nhbl`]]: {unicode: "\uE0A4"}, // Black notehead
    /*  */[Code[`nhnl`]]: {unicode: "\uE0A5"}, // Null notehead
    /*  */[Code[`nhXdbwh`]]: {unicode: "\uE0A6"},  // X notehead double whole
    /*  */[Code[`nhXwh`]]: {unicode: "\uE0A7"},    // X notehead whole
    /*  */[Code[`nhXhf`]]: {unicode: "\uE0A8"},    // X notehead half
    /*  */[Code[`nhXbl`]]: {unicode: "\uE0A9"},    // X notehead black
    /*  */[Code[`nhXor`]]: {unicode: "\uE0AA"},    // Ornate X notehead
    /*  */[Code[`nhXorel`]]: {unicode: "\uE0AB"},  // Ornate X notehead in ellipse
    /*  */[Code[`nhpldbwh`]]: {unicode: "\uE0AC"}, // Plus notehead double whole
    /*  */[Code[`nhplwh`]]: {unicode: "\uE0AD"},   // Plus notehead whole
    /*  */[Code[`nhplhf`]]: {unicode: "\uE0AE"},   // Plus notehead half
    /*  */[Code[`nhplbl`]]: {unicode: "\uE0AF"},   // Plus notehead black
    /*  */[Code[`nhcrXdbwh`]]: {unicode: "\uE0B0"},    // Circle X double whole
    /*  */[Code[`nhcrXwh`]]: {unicode: "\uE0B1"},  // Circle X whole
    /*  */[Code[`nhcrXhf`]]: {unicode: "\uE0B2"},  // Circle X half
    /*  */[Code[`nhcrX`]]: {unicode: "\uE0B3"},    // Circle X notehead
    /*  */[Code[`nhdbwhwtX`]]: {unicode: "\uE0B4"},    // Double whole notehead with X
    /*  */[Code[`nhwhwtX`]]: {unicode: "\uE0B5"},  // Whole notehead with X
    /*  */[Code[`nhhfwtX`]]: {unicode: "\uE0B6"},  // Half notehead with X
    /*  */[Code[`nhvdwtX`]]: {unicode: "\uE0B7"},  // Void notehead with X
    /*  */[Code[`nhsqwt`]]: {unicode: "\uE0B8"},   // Square notehead white
    /*  */[Code[`nhsqbl`]]: {unicode: "\uE0B9"},   // Square notehead black
    /*  */[Code[`nhtrupdbwh`]]: {unicode: "\uE0BA"},   // Triangle notehead up double whole
    /*  */[Code[`nhtrupwh`]]: {unicode: "\uE0BB"}, // Triangle notehead up whole
    /*  */[Code[`nhtruphf`]]: {unicode: "\uE0BC"}, // Triangle notehead up half
    /*  */[Code[`nhtrupwt`]]: {unicode: "\uE0BD"}, // Triangle notehead up white
    /*  */[Code[`nhtrupbl`]]: {unicode: "\uE0BE"}, // Triangle notehead up black
    /*  */[Code[`nhtrlfwt`]]: {unicode: "\uE0BF"}, // Triangle notehead left white
    /*  */[Code[`nhtrlfbl`]]: {unicode: "\uE0C0"}, // Triangle notehead left black
    /*  */[Code[`nhtrrtwt`]]: {unicode: "\uE0C1"}, // Triangle notehead right white
    /*  */[Code[`nhtrrtbl`]]: {unicode: "\uE0C2"}, // Triangle notehead right black
    /*  */[Code[`nhtrdndbwh`]]: {unicode: "\uE0C3"},   // Triangle notehead down double whole
    /*  */[Code[`nhtrdnwh`]]: {unicode: "\uE0C4"}, // Triangle notehead down whole
    /*  */[Code[`nhtrdnhf`]]: {unicode: "\uE0C5"}, // Triangle notehead down half
    /*  */[Code[`nhtrdnwt`]]: {unicode: "\uE0C6"}, // Triangle notehead down white
    /*  */[Code[`nhtrdnbl`]]: {unicode: "\uE0C7"}, // Triangle notehead down black
    /*  */[Code[`nhtruprtwt`]]: {unicode: "\uE0C8"},   // Triangle notehead up right white
    /*  */[Code[`nhtruprtbl`]]: {unicode: "\uE0C9"},   // Triangle notehead up right black
    /*  */[Code[`nhmnwt`]]: {unicode: "\uE0CA"},   // Moon notehead white
    /*  */[Code[`nhmnbl`]]: {unicode: "\uE0CB"},   // Moon notehead black
    /*  */[Code[`nhtrrndnwt`]]: {unicode: "\uE0CC"},   // Triangle-round notehead down white
    /*  */[Code[`nhtrrndnbl`]]: {unicode: "\uE0CD"},   // Triangle-round notehead down black
    /*  */[Code[`nhpr`]]: {unicode: "\uE0CE"}, // Parenthesis notehead
    /*  */[Code[`nhslbl1`]]: {unicode: "\uE0CF"},  // Slashed black notehead (bottom left to top right)
    /*  */[Code[`nhslbl2`]]: {unicode: "\uE0D0"},  // Slashed black notehead (top left to bottom right)
    /*  */[Code[`nhslhf1`]]: {unicode: "\uE0D1"},  // Slashed half notehead (bottom left to top right)
    /*  */[Code[`nhslhf2`]]: {unicode: "\uE0D2"},  // Slashed half notehead (top left to bottom right)
    /*  */[Code[`nhslwh1`]]: {unicode: "\uE0D3"},  // Slashed whole notehead (bottom left to top right)
    /*  */[Code[`nhslwh2`]]: {unicode: "\uE0D4"},  // Slashed whole notehead (top left to bottom right)
    /*  */[Code[`nhsldbwh1`]]: {unicode: "\uE0D5"},    // Slashed double whole notehead (bottom left to top right)
    /*  */[Code[`nhsldbwh2`]]: {unicode: "\uE0D6"},    // Slashed double whole notehead (top left to bottom right)
    /*  */[Code[`nhdmdbwh`]]: {unicode: "\uE0D7"}, // Diamond double whole notehead
    /*  */[Code[`nhdmwh`]]: {unicode: "\uE0D8"},   // Diamond whole notehead
    /*  */[Code[`nhdmhf`]]: {unicode: "\uE0D9"},   // Diamond half notehead
    /*  */[Code[`nhdmhfwd`]]: {unicode: "\uE0DA"}, // Diamond half notehead (wide)
    /*  */[Code[`nhdmbl`]]: {unicode: "\uE0DB"},   // Diamond black notehead
    /*  */[Code[`nhdmblwd`]]: {unicode: "\uE0DC"}, // Diamond black notehead (wide)
    /*  */[Code[`nhdmwt`]]: {unicode: "\uE0DD"},   // Diamond white notehead
    /*  */[Code[`nhdmwtwd`]]: {unicode: "\uE0DE"}, // Diamond white notehead (wide)
    /*  */[Code[`nhdmdbwhol`]]: {unicode: "\uE0DF"},   // Diamond double whole notehead (old)
    /*  */[Code[`nhdmwhol`]]: {unicode: "\uE0E0"}, // Diamond whole notehead (old)
    /*  */[Code[`nhdmhfol`]]: {unicode: "\uE0E1"}, // Diamond half notehead (old)
    /*  */[Code[`nhdmblol`]]: {unicode: "\uE0E2"}, // Diamond black notehead (old)
    /*  */[Code[`nhdmhffl`]]: {unicode: "\uE0E3"}, // Half-filled diamond notehead
    /*  */[Code[`nhcrbl`]]: {unicode: "\uE0E4"},   // Circled black notehead
    /*  */[Code[`nhcrhf`]]: {unicode: "\uE0E5"},   // Circled half notehead
    /*  */[Code[`nhcrwh`]]: {unicode: "\uE0E6"},   // Circled whole notehead
    /*  */[Code[`nhcrdbwh`]]: {unicode: "\uE0E7"}, // Circled double whole notehead
    /*  */[Code[`nhcrbllg`]]: {unicode: "\uE0E8"}, // Black notehead in large circle
    /*  */[Code[`nhcrhflg`]]: {unicode: "\uE0E9"}, // Half notehead in large circle
    /*  */[Code[`nhcrwhlg`]]: {unicode: "\uE0EA"}, // Whole notehead in large circle
    /*  */[Code[`nhcrdbwhlg`]]: {unicode: "\uE0EB"},   // Double whole notehead in large circle
    /*  */[Code[`nhcrXlg`]]: {unicode: "\uE0EC"},  // Cross notehead in large circle
    /*  */[Code[`nhlgarupdbwh`]]: {unicode: "\uE0ED"}, // Large arrow up (highest pitch) double whole notehead
    /*  */[Code[`nhlgarupwh`]]: {unicode: "\uE0EE"},   // Large arrow up (highest pitch) whole notehead
    /*  */[Code[`nhlgaruphf`]]: {unicode: "\uE0EF"},   // Large arrow up (highest pitch) half notehead
    /*  */[Code[`nhlgarupbl`]]: {unicode: "\uE0F0"},   // Large arrow up (highest pitch) black notehead
    /*  */[Code[`nhlgardndbwh`]]: {unicode: "\uE0F1"}, // Large arrow down (lowest pitch) double whole notehead
    /*  */[Code[`nhlgardnwh`]]: {unicode: "\uE0F2"},   // Large arrow down (lowest pitch) whole notehead
    /*  */[Code[`nhlgardnhf`]]: {unicode: "\uE0F3"},   // Large arrow down (lowest pitch) half notehead
    /*  */[Code[`nhlgardnbl`]]: {unicode: "\uE0F4"},   // Large arrow down (lowest pitch) black notehead
    /*  */[Code[`nhprlf`]]: {unicode: "\uE0F5"},   // Opening parenthesis
    /*  */[Code[`nhprrt`]]: {unicode: "\uE0F6"},   // Closing parenthesis
    /*  */[Code[`nhcrsl`]]: {unicode: "\uE0F7"},   // Circle slash notehead
    /*  */[Code[`nhhvX`]]: {unicode: "\uE0F8"},    // Heavy X notehead
    /*  */[Code[`nhhvXht`]]: {unicode: "\uE0F9"},  // Heavy X with hat notehead
    /*  */[Code[`nhwhfl`]]: {unicode: "\uE0FA"},   // Filled whole (semibreve) notehead
    /*  */[Code[`nhhffl`]]: {unicode: "\uE0FB"},   // Filled half (minim) notehead
    /*  */[Code[`nhdmop`]]: {unicode: "\uE0FC"},   // Open diamond notehead
    /*  */[Code[`nhslvren`]]: {unicode: "\uE100"}, // Slash with vertical ends
    /*  */[Code[`nhslhren`]]: {unicode: "\uE101"}, // Slash with horizontal ends
    /*  */[Code[`nhslwtwh`]]: {unicode: "\uE102"}, // White slash whole
    /*  */[Code[`nhslwthf`]]: {unicode: "\uE103"}, // White slash half
    /*  */[Code[`nhsldmwt`]]: {unicode: "\uE104"}, // Large white diamond
    /*  */[Code[`nhslvrensm`]]: {unicode: "\uE105"},   // Small slash with vertical ends
    /*  */[Code[`nhslX`]]: {unicode: "\uE106"},    // Large X notehead
    /*  */[Code[`nhslvrenmt`]]: {unicode: "\uE107"},   // Muted slash with vertical ends
    /*  */[Code[`nhslhrenmt`]]: {unicode: "\uE108"},   // Muted slash with horizontal ends
    /*  */[Code[`nhslwtmt`]]: {unicode: "\uE109"}, // Muted white slash
    /*  */[Code[`nhslwtdbwh`]]: {unicode: "\uE10A"},   // White slash double whole
    /*  */[Code[`nhrnbllg`]]: {unicode: "\uE110"}, // Large round black notehead
    /*  */[Code[`nhrnwtlg`]]: {unicode: "\uE111"}, // Large round white notehead
    /*  */[Code[`nhrnwtwtdtlg`]]: {unicode: "\uE112"}, // Large round white notehead with dot
    /*  */[Code[`nhrnbl`]]: {unicode: "\uE113"},   // Round black notehead
    /*  */[Code[`nhrnwt`]]: {unicode: "\uE114"},   // Round white notehead
    /*  */[Code[`nhrnwtwtdt`]]: {unicode: "\uE115"},   // Round white notehead with dot
    /*  */[Code[`nhrnblsllg`]]: {unicode: "\uE116"},   // Large round black notehead, slashed
    /*  */[Code[`nhrnwtsllg`]]: {unicode: "\uE117"},   // Large round white notehead, slashed
    /*  */[Code[`nhrnblsl`]]: {unicode: "\uE118"}, // Round black notehead, slashed
    /*  */[Code[`nhrnwtsl`]]: {unicode: "\uE119"}, // Round white notehead, slashed
    /*  */[Code[`nhsqbllg`]]: {unicode: "\uE11A"}, // Large square black notehead
    /*  */[Code[`nhsqblwt`]]: {unicode: "\uE11B"}, // Large square white notehead
    /*  */[Code[`nhrnbldbsl`]]: {unicode: "\uE11C"},   // Round black notehead, double slashed
    /*  */[Code[`nhrnwtdbsl`]]: {unicode: "\uE11D"},   // Round white notehead, double slashed
    /*  */[Code[`nhclsqwt`]]: {unicode: "\uE120"}, // Cluster notehead white (square)
    /*  */[Code[`nhclsqbl`]]: {unicode: "\uE121"}, // Cluster notehead black (square)
    /*  */[Code[`nhclrnwt`]]: {unicode: "\uE122"}, // Cluster notehead white (round)
    /*  */[Code[`nhclrnbl`]]: {unicode: "\uE123"}, // Cluster notehead black (round)
    /*  */[Code[`nhcldbwh2`]]: {unicode: "\uE124"},    // Double whole note cluster, 2nd
    /*  */[Code[`nhclwh2`]]: {unicode: "\uE125"},  // Whole note cluster, 2nd
    /*  */[Code[`nhclhf2`]]: {unicode: "\uE126"},  // Half note cluster, 2nd
    /*  */[Code[`nhclqr2`]]: {unicode: "\uE127"},  // Quarter note cluster, 2nd
    /*  */[Code[`nhcldbwh3`]]: {unicode: "\uE128"},    // Double whole note cluster, 3rd
    /*  */[Code[`nhclwh3`]]: {unicode: "\uE129"},  // Whole note cluster, 3rd
    /*  */[Code[`nhclhf3`]]: {unicode: "\uE12A"},  // Half note cluster, 3rd
    /*  */[Code[`nhclqr3`]]: {unicode: "\uE12B"},  // Quarter note cluster, 3rd
    /*  */[Code[`nhcldbwhtp`]]: {unicode: "\uE12C"},   // Combining double whole note cluster, top
    /*  */[Code[`nhcldbwhmd`]]: {unicode: "\uE12D"},   // Combining double whole note cluster, middle
    /*  */[Code[`nhcldbwhbt`]]: {unicode: "\uE12E"},   // Combining double whole note cluster, bottom
    /*  */[Code[`nhclwhtp`]]: {unicode: "\uE12F"}, // Combining whole note cluster, top
    /*  */[Code[`nhclwhmd`]]: {unicode: "\uE130"}, // Combining whole note cluster, middle
    /*  */[Code[`nhclwhbt`]]: {unicode: "\uE131"}, // Combining whole note cluster, bottom
    /*  */[Code[`nhclhftp`]]: {unicode: "\uE132"}, // Combining half note cluster, top
    /*  */[Code[`nhclhfmd`]]: {unicode: "\uE133"}, // Combining half note cluster, middle
    /*  */[Code[`nhclhfbt`]]: {unicode: "\uE134"}, // Combining half note cluster, bottom
    /*  */[Code[`nhclqrtp`]]: {unicode: "\uE135"}, // Combining quarter note cluster, top
    /*  */[Code[`nhclqrmd`]]: {unicode: "\uE136"}, // Combining quarter note cluster, middle
    /*  */[Code[`nhclqrbt`]]: {unicode: "\uE137"}, // Combining quarter note cluster, bottom
    /*  */[Code[`nhdmclwt2`]]: {unicode: "\uE138"},    // White diamond cluster, 2nd
    /*  */[Code[`nhdmclbl2`]]: {unicode: "\uE139"},    // Black diamond cluster, 2nd
    /*  */[Code[`nhdmclwt3`]]: {unicode: "\uE13A"},    // White diamond cluster, 3rd
    /*  */[Code[`nhdmclbl3`]]: {unicode: "\uE13B"},    // Black diamond cluster, 3rd
    /*  */[Code[`nhdmclwttp`]]: {unicode: "\uE13C"},   // Combining white diamond cluster, top
    /*  */[Code[`nhdmclwtmd`]]: {unicode: "\uE13D"},   // Combining white diamond cluster, middle
    /*  */[Code[`nhdmclwtbt`]]: {unicode: "\uE13E"},   // Combining white diamond cluster, bottom
    /*  */[Code[`nhdmclbltp`]]: {unicode: "\uE13F"},   // Combining black diamond cluster, top
    /*  */[Code[`nhdmclblmd`]]: {unicode: "\uE140"},   // Combining black diamond cluster, middle
    /*  */[Code[`nhdmclblbt`]]: {unicode: "\uE141"},   // Combining black diamond cluster, bottom
    /*  */[Code[`nhrcclbltp`]]: {unicode: "\uE142"},   // Combining black rectangular cluster, top
    /*  */[Code[`nhrcclblmd`]]: {unicode: "\uE143"},   // Combining black rectangular cluster, middle
    /*  */[Code[`nhrcclblbt`]]: {unicode: "\uE144"},   // Combining black rectangular cluster, bottom
    /*  */[Code[`nhrcclwttp`]]: {unicode: "\uE145"},   // Combining white rectangular cluster, top
    /*  */[Code[`nhrcclwtmd`]]: {unicode: "\uE146"},   // Combining white rectangular cluster, middle
    /*  */[Code[`nhrcclwtbt`]]: {unicode: "\uE147"},   // Combining white rectangular cluster, bottom
    /*  */[Code[`ntdowh`]]: {unicode: "\uE150"},   // Do (whole note)
    /*  */[Code[`ntrewh`]]: {unicode: "\uE151"},   // Re (whole note)
    /*  */[Code[`ntmiwh`]]: {unicode: "\uE152"},   // Mi (whole note)
    /*  */[Code[`ntfawh`]]: {unicode: "\uE153"},   // Fa (whole note)
    /*  */[Code[`ntsowh`]]: {unicode: "\uE154"},   // So (whole note)
    /*  */[Code[`ntlawh`]]: {unicode: "\uE155"},   // La (whole note)
    /*  */[Code[`nttiwh`]]: {unicode: "\uE156"},   // Ti (whole note)
    /*  */[Code[`ntsiwh`]]: {unicode: "\uE157"},   // Si (whole note)
    /*  */[Code[`ntdohf`]]: {unicode: "\uE158"},   // Do (half note)
    /*  */[Code[`ntrehf`]]: {unicode: "\uE159"},   // Re (half note)
    /*  */[Code[`ntmihf`]]: {unicode: "\uE15A"},   // Mi (half note)
    /*  */[Code[`ntfahf`]]: {unicode: "\uE15B"},   // Fa (half note)
    /*  */[Code[`ntsohf`]]: {unicode: "\uE15C"},   // So (half note)
    /*  */[Code[`ntlahf`]]: {unicode: "\uE15D"},   // La (half note)
    /*  */[Code[`nttihf`]]: {unicode: "\uE15E"},   // Ti (half note)
    /*  */[Code[`ntsihf`]]: {unicode: "\uE15F"},   // Si (half note)
    /*  */[Code[`ntdobl`]]: {unicode: "\uE160"},   // Do (black note)
    /*  */[Code[`ntrebl`]]: {unicode: "\uE161"},   // Re (black note)
    /*  */[Code[`ntmibl`]]: {unicode: "\uE162"},   // Mi (black note)
    /*  */[Code[`ntfabl`]]: {unicode: "\uE163"},   // Fa (black note)
    /*  */[Code[`ntsobl`]]: {unicode: "\uE164"},   // So (black note)
    /*  */[Code[`ntlabl`]]: {unicode: "\uE165"},   // La (black note)
    /*  */[Code[`nttibl`]]: {unicode: "\uE166"},   // Ti (black note)
    /*  */[Code[`ntsibl`]]: {unicode: "\uE167"},   // Si (black note)
    /*  */[Code[`ntAflwh`]]: {unicode: "\uE168"},  // A flat (whole note)
    /*  */[Code[`ntAwh`]]: {unicode: "\uE169"},    // A (whole note)
    /*  */[Code[`ntAshwh`]]: {unicode: "\uE16A"},  // A sharp (whole note)
    /*  */[Code[`ntBflwh`]]: {unicode: "\uE16B"},  // B flat (whole note)
    /*  */[Code[`ntBwh`]]: {unicode: "\uE16C"},    // B (whole note)
    /*  */[Code[`ntBshwh`]]: {unicode: "\uE16D"},  // B sharp (whole note)
    /*  */[Code[`ntCflwh`]]: {unicode: "\uE16E"},  // C flat (whole note)
    /*  */[Code[`ntCwh`]]: {unicode: "\uE16F"},    // C (whole note)
    /*  */[Code[`ntCshwh`]]: {unicode: "\uE170"},  // C sharp (whole note)
    /*  */[Code[`ntDflwh`]]: {unicode: "\uE171"},  // D flat (whole note)
    /*  */[Code[`ntDwh`]]: {unicode: "\uE172"},    // D (whole note)
    /*  */[Code[`ntDshwh`]]: {unicode: "\uE173"},  // D sharp (whole note)
    /*  */[Code[`ntEflwh`]]: {unicode: "\uE174"},  // E flat (whole note)
    /*  */[Code[`ntEwh`]]: {unicode: "\uE175"},    // E (whole note)
    /*  */[Code[`ntEshwh`]]: {unicode: "\uE176"},  // E sharp (whole note)
    /*  */[Code[`ntFflwh`]]: {unicode: "\uE177"},  // F flat (whole note)
    /*  */[Code[`ntFwh`]]: {unicode: "\uE178"},    // F (whole note)
    /*  */[Code[`ntFshwh`]]: {unicode: "\uE179"},  // F sharp (whole note)
    /*  */[Code[`ntGflwh`]]: {unicode: "\uE17A"},  // G flat (whole note)
    /*  */[Code[`ntGwh`]]: {unicode: "\uE17B"},    // G (whole note)
    /*  */[Code[`ntGshwh`]]: {unicode: "\uE17C"},  // G sharp (whole note)
    /*  */[Code[`ntHwh`]]: {unicode: "\uE17D"},    // H (whole note)
    /*  */[Code[`ntHshwh`]]: {unicode: "\uE17E"},  // H sharp (whole note)
    /*  */[Code[`ntAflhf`]]: {unicode: "\uE17F"},  // A flat (half note)
    /*  */[Code[`ntAhf`]]: {unicode: "\uE180"},    // A (half note)
    /*  */[Code[`ntAshhf`]]: {unicode: "\uE181"},  // A sharp (half note)
    /*  */[Code[`ntBflhf`]]: {unicode: "\uE182"},  // B flat (half note)
    /*  */[Code[`ntBhf`]]: {unicode: "\uE183"},    // B (half note)
    /*  */[Code[`ntBshhf`]]: {unicode: "\uE184"},  // B sharp (half note)
    /*  */[Code[`ntCflhf`]]: {unicode: "\uE185"},  // C flat (half note)
    /*  */[Code[`ntChf`]]: {unicode: "\uE186"},    // C (half note)
    /*  */[Code[`ntCshhf`]]: {unicode: "\uE187"},  // C sharp (half note)
    /*  */[Code[`ntDflhf`]]: {unicode: "\uE188"},  // D flat (half note)
    /*  */[Code[`ntDhf`]]: {unicode: "\uE189"},    // D (half note)
    /*  */[Code[`ntDshhf`]]: {unicode: "\uE18A"},  // D sharp (half note)
    /*  */[Code[`ntEflhf`]]: {unicode: "\uE18B"},  // E flat (half note)
    /*  */[Code[`ntEhf`]]: {unicode: "\uE18C"},    // E (half note)
    /*  */[Code[`ntEshhf`]]: {unicode: "\uE18D"},  // E sharp (half note)
    /*  */[Code[`ntFflhf`]]: {unicode: "\uE18E"},  // F flat (half note)
    /*  */[Code[`ntFhf`]]: {unicode: "\uE18F"},    // F (half note)
    /*  */[Code[`ntFshhf`]]: {unicode: "\uE190"},  // F sharp (half note)
    /*  */[Code[`ntGflhf`]]: {unicode: "\uE191"},  // G flat (half note)
    /*  */[Code[`ntGhf`]]: {unicode: "\uE192"},    // G (half note)
    /*  */[Code[`ntGshhf`]]: {unicode: "\uE193"},  // G sharp (half note)
    /*  */[Code[`ntHhf`]]: {unicode: "\uE194"},    // H (half note)
    /*  */[Code[`ntHshhf`]]: {unicode: "\uE195"},  // H sharp (half note)
    /*  */[Code[`ntAflbl`]]: {unicode: "\uE196"},  // A flat (black note)
    /*  */[Code[`ntAbl`]]: {unicode: "\uE197"},    // A (black note)
    /*  */[Code[`ntAshbl`]]: {unicode: "\uE198"},  // A sharp (black note)
    /*  */[Code[`ntBflbl`]]: {unicode: "\uE199"},  // B flat (black note)
    /*  */[Code[`ntBbl`]]: {unicode: "\uE19A"},    // B (black note)
    /*  */[Code[`ntBshbl`]]: {unicode: "\uE19B"},  // B sharp (black note)
    /*  */[Code[`ntCflbl`]]: {unicode: "\uE19C"},  // C flat (black note)
    /*  */[Code[`ntCbl`]]: {unicode: "\uE19D"},    // C (black note)
    /*  */[Code[`ntCshbl`]]: {unicode: "\uE19E"},  // C sharp (black note)
    /*  */[Code[`ntDflbl`]]: {unicode: "\uE19F"},  // D flat (black note)
    /*  */[Code[`ntDbl`]]: {unicode: "\uE1A0"},    // D (black note)
    /*  */[Code[`ntDshbl`]]: {unicode: "\uE1A1"},  // D sharp (black note)
    /*  */[Code[`ntEflbl`]]: {unicode: "\uE1A2"},  // E flat (black note)
    /*  */[Code[`ntEbl`]]: {unicode: "\uE1A3"},    // E (black note)
    /*  */[Code[`ntEshbl`]]: {unicode: "\uE1A4"},  // E sharp (black note)
    /*  */[Code[`ntFflbl`]]: {unicode: "\uE1A5"},  // F flat (black note)
    /*  */[Code[`ntFbl`]]: {unicode: "\uE1A6"},    // F (black note)
    /*  */[Code[`ntFshbl`]]: {unicode: "\uE1A7"},  // F sharp (black note)
    /*  */[Code[`ntGflbl`]]: {unicode: "\uE1A8"},  // G flat (black note)
    /*  */[Code[`ntGbl`]]: {unicode: "\uE1A9"},    // G (black note)
    /*  */[Code[`ntGshbl`]]: {unicode: "\uE1AA"},  // G sharp (black note)
    /*  */[Code[`ntHbl`]]: {unicode: "\uE1AB"},    // H (black note)
    /*  */[Code[`ntHshbl`]]: {unicode: "\uE1AC"},  // H sharp (black note)
    /*  */[Code[`ntemwh`]]: {unicode: "\uE1AD"},   // Empty whole note
    /*  */[Code[`ntemhf`]]: {unicode: "\uE1AE"},   // Empty half note
    /*  */[Code[`ntembl`]]: {unicode: "\uE1AF"},   // Empty black note
    /*  */[Code[`ntshrnwt`]]: {unicode: "\uE1B0"}, // Round white (4-shape sol; 7-shape so)
    /*  */[Code[`ntshrnbl`]]: {unicode: "\uE1B1"}, // Round black (4-shape sol; 7-shape so)
    /*  */[Code[`ntshsqwt`]]: {unicode: "\uE1B2"}, // Square white (4-shape la; Aikin 7-shape la)
    /*  */[Code[`ntshsqbl`]]: {unicode: "\uE1B3"}, // Square black (4-shape la; Aikin 7-shape la)
    /*  */[Code[`ntshtrrtwt`]]: {unicode: "\uE1B4"},   // Triangle right white (stem down; 4-shape fa; 7-shape fa)
    /*  */[Code[`ntshtrrtbl`]]: {unicode: "\uE1B5"},   // Triangle right black (stem down; 4-shape fa; 7-shape fa)
    /*  */[Code[`ntshtrlfwt`]]: {unicode: "\uE1B6"},   // Triangle left white (stem up; 4-shape fa; 7-shape fa)
    /*  */[Code[`ntshtrlfbl`]]: {unicode: "\uE1B7"},   // Triangle left black (stem up; 4-shape fa; 7-shape fa)
    /*  */[Code[`ntshdmwt`]]: {unicode: "\uE1B8"}, // Diamond white (4-shape mi; 7-shape mi)
    /*  */[Code[`ntshdmbl`]]: {unicode: "\uE1B9"}, // Diamond black (4-shape mi; 7-shape mi)
    /*  */[Code[`ntshtrupwt`]]: {unicode: "\uE1BA"},   // Triangle up white (Aikin 7-shape do)
    /*  */[Code[`ntshtrupbl`]]: {unicode: "\uE1BB"},   // Triangle up black (Aikin 7-shape do)
    /*  */[Code[`ntshmnwt`]]: {unicode: "\uE1BC"}, // Moon white (Aikin 7-shape re)
    /*  */[Code[`ntshmnbl`]]: {unicode: "\uE1BD"}, // Moon black (Aikin 7-shape re)
    /*  */[Code[`ntshtrrnwt`]]: {unicode: "\uE1BE"},   // Triangle-round white (Aikin 7-shape ti)
    /*  */[Code[`ntshtrrnbl`]]: {unicode: "\uE1BF"},   // Triangle-round black (Aikin 7-shape ti)
    /*  */[Code[`ntshkswt`]]: {unicode: "\uE1C0"}, // Inverted keystone white (Walker 7-shape do)
    /*  */[Code[`ntshksbl`]]: {unicode: "\uE1C1"}, // Inverted keystone black (Walker 7-shape do)
    /*  */[Code[`ntshqrmnwt`]]: {unicode: "\uE1C2"},   // Quarter moon white (Walker 7-shape re)
    /*  */[Code[`ntshqrmnbl`]]: {unicode: "\uE1C3"},   // Quarter moon black (Walker 7-shape re)
    /*  */[Code[`ntshistrwt`]]: {unicode: "\uE1C4"},   // Isosceles triangle white (Walker 7-shape ti)
    /*  */[Code[`ntshistrbl`]]: {unicode: "\uE1C5"},   // Isosceles triangle black (Walker 7-shape ti)
    /*  */[Code[`ntshmnlfwt`]]: {unicode: "\uE1C6"},   // Moon left white (Funk 7-shape do)
    /*  */[Code[`ntshmnlfbl`]]: {unicode: "\uE1C7"},   // Moon left black (Funk 7-shape do)
    /*  */[Code[`ntshahlfwt`]]: {unicode: "\uE1C8"},   // Arrowhead left white (Funk 7-shape re)
    /*  */[Code[`ntshahlfbl`]]: {unicode: "\uE1C9"},   // Arrowhead left black (Funk 7-shape re)
    /*  */[Code[`ntshtrrnlfwt`]]: {unicode: "\uE1CA"}, // Triangle-round left white (Funk 7-shape ti)
    /*  */[Code[`ntshtrrnlfbl`]]: {unicode: "\uE1CB"}, // Triangle-round left black (Funk 7-shape ti)
    /*  */[Code[`ntdbwh`]]: {unicode: "\uE1D0", width: 21},    // Double whole note (breve)
    /*  */[Code[`ntdbwhsq`]]: {unicode: "\uE1D1"}, // Double whole note (square)
    /*  */[Code[`ntwh`]]: {unicode: "\uE1D2", width: 11},  // Whole note (semibreve)
    /*  */[Code[`nthfup`]]: {unicode: "\uE1D3", width: 11},    // Half note (minim) stem up
    /*  */[Code[`nthfdn`]]: {unicode: "\uE1D4", width: 11},    // Half note (minim) stem down
    /*  */[Code[`ntqrup`]]: {unicode: "\uE1D5", width: 11},    // Quarter note (crotchet) stem up
    /*  */[Code[`ntqrdn`]]: {unicode: "\uE1D6", width: 11},    // Quarter note (crotchet) stem down
    /*  */[Code[`nt8up`]]: {unicode: "\uE1D7", width: 19}, // Eighth note (quaver) stem up
    /*  */[Code[`nt8dn`]]: {unicode: "\uE1D8", width: 11}, // Eighth note (quaver) stem down
    /*  */[Code[`nt16up`]]: {unicode: "\uE1D9", width: 19},    // 16th note (semiquaver) stem up
    /*  */[Code[`nt16dn`]]: {unicode: "\uE1DA", width: 11},    // 16th note (semiquaver) stem down
    /*  */[Code[`nt32up`]]: {unicode: "\uE1DB"},   // 32nd note (demisemiquaver) stem up
    /*  */[Code[`nt32dn`]]: {unicode: "\uE1DC"},   // 32nd note (demisemiquaver) stem down
    /*  */[Code[`nt64up`]]: {unicode: "\uE1DD"},   // 64th note (hemidemisemiquaver) stem up
    /*  */[Code[`nt64dn`]]: {unicode: "\uE1DE"},   // 64th note (hemidemisemiquaver) stem down
    /*  */[Code[`nt128up`]]: {unicode: "\uE1DF"},  // 128th note (semihemidemisemiquaver) stem up
    /*  */[Code[`nt128dn`]]: {unicode: "\uE1E0"},  // 128th note (semihemidemisemiquaver) stem down
    /*  */[Code[`nt256up`]]: {unicode: "\uE1E1"},  // 256th note (demisemihemidemisemiquaver) stem up
    /*  */[Code[`nt256dn`]]: {unicode: "\uE1E2"},  // 256th note (demisemihemidemisemiquaver) stem down
    /*  */[Code[`nt512up`]]: {unicode: "\uE1E3"},  // 512th note (hemidemisemihemidemisemiquaver) stem up
    /*  */[Code[`nt512dn`]]: {unicode: "\uE1E4"},  // 512th note (hemidemisemihemidemisemiquaver) stem down
    /*  */[Code[`nt1024up`]]: {unicode: "\uE1E5"}, // 1024th note (semihemidemisemihemidemisemiquaver) stem up
    /*  */[Code[`nt1024dn`]]: {unicode: "\uE1E6"}, // 1024th note (semihemidemisemihemidemisemiquaver) stem down
    /*  */[Code[`agdt`]]: {unicode: "\uE1E7"}, // Augmentation dot
    /*  */[Code[`txblntshsm`]]: {unicode: "\uE1F0"},   // Black note, short stem
    /*  */[Code[`txblntlnsm`]]: {unicode: "\uE1F1"},   // Black note, long stem
    /*  */[Code[`txblntfr8shsm`]]: {unicode: "\uE1F2"},    // Black note, fractional 8th beam, short stem
    /*  */[Code[`txblntfr8lnsm`]]: {unicode: "\uE1F3"},    // Black note, fractional 8th beam, long stem
    /*  */[Code[`txblntfr16shsm`]]: {unicode: "\uE1F4"},   // Black note, fractional 16th beam, short stem
    /*  */[Code[`txblntfr16lnsm`]]: {unicode: "\uE1F5"},   // Black note, fractional 16th beam, long stem
    /*  */[Code[`txblntfr32lnsm`]]: {unicode: "\uE1F6"},   // Black note, fractional 32nd beam, long stem
    /*  */[Code[`txcn8bmshsm`]]: {unicode: "\uE1F7"},  // Continuing 8th beam for short stem
    /*  */[Code[`txcn8bmlnsm`]]: {unicode: "\uE1F8"},  // Continuing 8th beam for long stem
    /*  */[Code[`txcn16bmshsm`]]: {unicode: "\uE1F9"}, // Continuing 16th beam for short stem
    /*  */[Code[`txcn16bmlnsm`]]: {unicode: "\uE1FA"}, // Continuing 16th beam for long stem
    /*  */[Code[`txcn32bmlnsm`]]: {unicode: "\uE1FB"}, // Continuing 32nd beam for long stem
    /*  */[Code[`txagdt`]]: {unicode: "\uE1FC"},   // Augmentation dot
    /*  */[Code[`txti`]]: {unicode: "\uE1FD"}, // Tie
    /*  */[Code[`txtpbkstshsm`]]: {unicode: "\uE1FE"}, // Tuplet bracket start for short stem
    /*  */[Code[`txtp3shsm`]]: {unicode: "\uE1FF"},    // Tuplet number 3 for short stem
    /*  */[Code[`txtpbkenshsm`]]: {unicode: "\uE200"}, // Tuplet bracket end for short stem
    /*  */[Code[`txtpbkstlnsm`]]: {unicode: "\uE201"}, // Tuplet bracket start for long stem
    /*  */[Code[`txtp3lnsm`]]: {unicode: "\uE202"},    // Tuplet number 3 for long stem
    /*  */[Code[`txtpbkenlnsm`]]: {unicode: "\uE203"}, // Tuplet bracket end for long stem
    /*  */[Code[`txhdblntshsm`]]: {unicode: "\uE204"}, // Headless black note, short stem
    /*  */[Code[`txhdblntlnsm`]]: {unicode: "\uE205"}, // Headless black note, long stem
    /*  */[Code[`txhdblntfr8shsm`]]: {unicode: "\uE206"},  // Headless black note, fractional 8th beam, short stem
    /*  */[Code[`txhdblntfr8lnsm`]]: {unicode: "\uE207"},  // Headless black note, fractional 8th beam, long stem
    /*  */[Code[`txhdblntfr16shsm`]]: {unicode: "\uE208"}, // Headless black note, fractional 16th beam, short stem
    /*  */[Code[`txhdblntfr16lnsm`]]: {unicode: "\uE209"}, // Headless black note, fractional 16th beam, long stem
    /*  */[Code[`txhdblntfr32lnsm`]]: {unicode: "\uE20A"}, // Headless black note, fractional 32nd beam, long stem
    /*  */[Code[`sm`]]: {unicode: "\uE210"},   // Combining stem
    /*  */[Code[`smsp`]]: {unicode: "\uE211"}, // Combining sprechgesang stem
    /*  */[Code[`smsw`]]: {unicode: "\uE212"}, // Combining swished stem
    /*  */[Code[`smpntr`]]: {unicode: "\uE213"},   // Combining Penderecki unmeasured tremolo stem
    /*  */[Code[`smslpn`]]: {unicode: "\uE214"},   // Combining sul ponticello (bow behind bridge) stem
    /*  */[Code[`smbwonbr`]]: {unicode: "\uE215"}, // Combining bow on bridge stem
    /*  */[Code[`smbwontl`]]: {unicode: "\uE216"}, // Combining bow on tailpiece stem
    /*  */[Code[`smbzrl`]]: {unicode: "\uE217"},   // Combining buzz roll stem
    /*  */[Code[`smdm`]]: {unicode: "\uE218"}, // Combining damp stem
    /*  */[Code[`smvbpl`]]: {unicode: "\uE219"},   // Combining vibrato pulse accent (Saunders) stem
    /*  */[Code[`smmlbl`]]: {unicode: "\uE21A"},   // Combining multiphonics (black) stem
    /*  */[Code[`smmlwt`]]: {unicode: "\uE21B"},   // Combining multiphonics (white) stem
    /*  */[Code[`smmlblwt`]]: {unicode: "\uE21C"}, // Combining multiphonics (black and white) stem
    /*  */[Code[`smss`]]: {unicode: "\uE21D"}, // Combining sussurando stem
    /*  */[Code[`smrmsh`]]: {unicode: "\uE21E"},   // Combining rim shot stem
    /*  */[Code[`smhpstns`]]: {unicode: "\uE21F"}, // Combining harp string noise stem
    /*  */[Code[`tr1`]]: {unicode: "\uE220"},  // Combining tremolo 1
    /*  */[Code[`tr2`]]: {unicode: "\uE221"},  // Combining tremolo 2
    /*  */[Code[`tr3`]]: {unicode: "\uE222"},  // Combining tremolo 3
    /*  */[Code[`tr4`]]: {unicode: "\uE223"},  // Combining tremolo 4
    /*  */[Code[`tr5`]]: {unicode: "\uE224"},  // Combining tremolo 5
    /*  */[Code[`trfn1`]]: {unicode: "\uE225"},    // Fingered tremolo 1
    /*  */[Code[`trfn2`]]: {unicode: "\uE226"},    // Fingered tremolo 2
    /*  */[Code[`trfn3`]]: {unicode: "\uE227"},    // Fingered tremolo 3
    /*  */[Code[`trfn4`]]: {unicode: "\uE228"},    // Fingered tremolo 4
    /*  */[Code[`trfn5`]]: {unicode: "\uE229"},    // Fingered tremolo 5
    /*  */[Code[`bzrl`]]: {unicode: "\uE22A"}, // Buzz roll
    /*  */[Code[`pntr`]]: {unicode: "\uE22B"}, // Penderecki unmeasured tremolo
    /*  */[Code[`untr`]]: {unicode: "\uE22C"}, // Wieniawski unmeasured tremolo
    /*  */[Code[`untrsm`]]: {unicode: "\uE22D"},   // Wieniawski unmeasured tremolo (simpler)
    /*  */[Code[`trdvds2`]]: {unicode: "\uE22E"},  // Divide measured tremolo by 2
    /*  */[Code[`trdvds3`]]: {unicode: "\uE22F"},  // Divide measured tremolo by 3
    /*  */[Code[`trdvds4`]]: {unicode: "\uE230"},  // Divide measured tremolo by 4
    /*  */[Code[`trdvds6`]]: {unicode: "\uE231"},  // Divide measured tremolo by 6
    /*  */[Code[`shtr`]]: {unicode: "\uE232"}, // Stockhausen irregular tremolo (\"Morsen\", like Morse code)
    /*  */[Code[`onhnrlst`]]: {unicode: "\uE233"}, // One-handed roll (Stevens)
    /*  */[Code[`dbltrlst`]]: {unicode: "\uE234"}, // Double lateral roll (Stevens)
    /*  */[Code[`fl8up`]]: {unicode: "\uE240"},    // Combining flag 1 (8th) above
    /*  */[Code[`fl8dn`]]: {unicode: "\uE241"},    // Combining flag 1 (8th) below
    /*  */[Code[`fl16up`]]: {unicode: "\uE242"},   // Combining flag 2 (16th) above
    /*  */[Code[`fl16dn`]]: {unicode: "\uE243"},   // Combining flag 2 (16th) below
    /*  */[Code[`fl32up`]]: {unicode: "\uE244"},   // Combining flag 3 (32nd) above
    /*  */[Code[`fl32dn`]]: {unicode: "\uE245"},   // Combining flag 3 (32nd) below
    /*  */[Code[`fl64up`]]: {unicode: "\uE246"},   // Combining flag 4 (64th) above
    /*  */[Code[`fl64dn`]]: {unicode: "\uE247"},   // Combining flag 4 (64th) below
    /*  */[Code[`fl128up`]]: {unicode: "\uE248"},  // Combining flag 5 (128th) above
    /*  */[Code[`fl128dn`]]: {unicode: "\uE249"},  // Combining flag 5 (128th) below
    /*  */[Code[`fl256up`]]: {unicode: "\uE24A"},  // Combining flag 6 (256th) above
    /*  */[Code[`fl256dn`]]: {unicode: "\uE24B"},  // Combining flag 6 (256th) below
    /*  */[Code[`fl512up`]]: {unicode: "\uE24C"},  // Combining flag 7 (512th) above
    /*  */[Code[`fl512dn`]]: {unicode: "\uE24D"},  // Combining flag 7 (512th) below
    /*  */[Code[`fl1024up`]]: {unicode: "\uE24E"}, // Combining flag 8 (1024th) above
    /*  */[Code[`fl1024dn`]]: {unicode: "\uE24F"}, // Combining flag 8 (1024th) below
    /*  */[Code[`flinup`]]: {unicode: "\uE250"},   // Internal combining flag above
    /*  */[Code[`flindn`]]: {unicode: "\uE251"},   // Internal combining flag below
    /*  */[Code[`acfl`]]: {unicode: "\uE260", width: 7},   // Flat
    /*  */[Code[`acnt`]]: {unicode: "\uE261", width: 5},   // Natural
    /*  */[Code[`acsh`]]: {unicode: "\uE262", width: 8},   // Sharp
    /*  */[Code[`acdbsh`]]: {unicode: "\uE263", width: 8}, // Double sharp
    /*  */[Code[`acdbfl`]]: {unicode: "\uE264", width: 13},    // Double flat
    /*  */[Code[`actrsh`]]: {unicode: "\uE265"},   // Triple sharp
    /*  */[Code[`actrfl`]]: {unicode: "\uE266"},   // Triple flat
    /*  */[Code[`acntfl`]]: {unicode: "\uE267"},   // Natural flat
    /*  */[Code[`acntsh`]]: {unicode: "\uE268"},   // Natural sharp
    /*  */[Code[`acshsh`]]: {unicode: "\uE269"},   // Sharp sharp
    /*  */[Code[`acprlf`]]: {unicode: "\uE26A"},   // Accidental parenthesis, left
    /*  */[Code[`acprrt`]]: {unicode: "\uE26B"},   // Accidental parenthesis, right
    /*  */[Code[`acbklf`]]: {unicode: "\uE26C"},   // Accidental bracket, left
    /*  */[Code[`acbkrt`]]: {unicode: "\uE26D"},   // Accidental bracket, right
    /*  */[Code[`acqrtnflarup`]]: {unicode: "\uE270"}, // Quarter-tone flat
    /*  */[Code[`acthqrtnflardn`]]: {unicode: "\uE271"},   // Three-quarter-tones flat
    /*  */[Code[`acqrtnshntarup`]]: {unicode: "\uE272"},   // Quarter-tone sharp
    /*  */[Code[`acqrtnflntardn`]]: {unicode: "\uE273"},   // Quarter-tone flat
    /*  */[Code[`acthqrtnsharup`]]: {unicode: "\uE274"},   // Three-quarter-tones sharp
    /*  */[Code[`acqrtnshardn`]]: {unicode: "\uE275"}, // Quarter-tone sharp
    /*  */[Code[`acfvqrtnsharup`]]: {unicode: "\uE276"},   // Five-quarter-tones sharp
    /*  */[Code[`acthqrtnshardn`]]: {unicode: "\uE277"},   // Three-quarter-tones sharp
    /*  */[Code[`acthqrtnflarup`]]: {unicode: "\uE278"},   // Three-quarter-tones flat
    /*  */[Code[`acfvqrtnflardn`]]: {unicode: "\uE279"},   // Five-quarter-tones flat
    /*  */[Code[`acarup`]]: {unicode: "\uE27A"},   // Arrow up (raise by one quarter-tone)
    /*  */[Code[`acardn`]]: {unicode: "\uE27B"},   // Arrow down (lower by one quarter-tone)
    /*  */[Code[`acqrtnflst`]]: {unicode: "\uE280"},   // Reversed flat (quarter-tone flat) (Stein)
    /*  */[Code[`acthqrtnflzm`]]: {unicode: "\uE281"}, // Reversed flat and flat (three-quarter-tones flat) (Zimmermann)
    /*  */[Code[`acqrtnshst`]]: {unicode: "\uE282"},   // Half sharp (quarter-tone sharp) (Stein)
    /*  */[Code[`acthqrtnshst`]]: {unicode: "\uE283"}, // One and a half sharps (three-quarter-tones sharp) (Stein)
    /*  */[Code[`acnrrvfl`]]: {unicode: "\uE284"}, // Narrow reversed flat(quarter-tone flat)
    /*  */[Code[`acnrrvflanfl`]]: {unicode: "\uE285"}, // Narrow reversed flat and flat(three-quarter-tones flat)
    /*  */[Code[`acrvflarup`]]: {unicode: "\uE290"},   // Reversed flat with arrow up
    /*  */[Code[`acrvflardn`]]: {unicode: "\uE291"},   // Reversed flat with arrow down
    /*  */[Code[`acflrvflarup`]]: {unicode: "\uE292"}, // Filled reversed flat with arrow up
    /*  */[Code[`acflrvflardn`]]: {unicode: "\uE293"}, // Filled reversed flat with arrow down
    /*  */[Code[`acrvflanflarup`]]: {unicode: "\uE294"},   // Reversed flat and flat with arrow up
    /*  */[Code[`acrvflanflardn`]]: {unicode: "\uE295"},   // Reversed flat and flat with arrow down
    /*  */[Code[`acflrvflanfl`]]: {unicode: "\uE296"}, // Filled reversed flat and flat
    /*  */[Code[`acflrvflanflarup`]]: {unicode: "\uE297"}, // Filled reversed flat and flat with arrow up
    /*  */[Code[`acflrvflanflardn`]]: {unicode: "\uE298"}, // Filled reversed flat and flat with arrow down
    /*  */[Code[`achfsharup`]]: {unicode: "\uE299"},   // Half sharp with arrow up
    /*  */[Code[`achfshardn`]]: {unicode: "\uE29A"},   // Half sharp with arrow down
    /*  */[Code[`aconanAhfsharup`]]: {unicode: "\uE29B"},  // One and a half sharps with arrow up
    /*  */[Code[`aconanAhfshardn`]]: {unicode: "\uE29C"},  // One and a half sharps with arrow down
    /*  */[Code[`acsm12dn`]]: {unicode: "\uE2A0"}, // 1/12 tone low
    /*  */[Code[`acsm6dn`]]: {unicode: "\uE2A1"},  // 1/6 tone low
    /*  */[Code[`acsm4dn`]]: {unicode: "\uE2A2"},  // 1/4 tone low
    /*  */[Code[`acsm12up`]]: {unicode: "\uE2A3"}, // 1/12 tone high
    /*  */[Code[`acsm6up`]]: {unicode: "\uE2A4"},  // 1/6 tone high
    /*  */[Code[`acsm4up`]]: {unicode: "\uE2A5"},  // 1/4 tone high
    /*  */[Code[`acjnpl`]]: {unicode: "\uE2B0"},   // Plus (raise by 81:80)
    /*  */[Code[`acjnmn`]]: {unicode: "\uE2B1"},   // Minus (lower by 81:80)
    /*  */[Code[`acjnel`]]: {unicode: "\uE2B2"},   // Inverted seven (raise by 36:35)
    /*  */[Code[`acjnsv`]]: {unicode: "\uE2B3"},   // Seven (lower by 36:35)
    /*  */[Code[`acjnup`]]: {unicode: "\uE2B4"},   // Up arrow (raise by 33:32)
    /*  */[Code[`acjndn`]]: {unicode: "\uE2B5"},   // Down arrow (lower by 33:32)
    /*  */[Code[`acjn13`]]: {unicode: "\uE2B6"},   // Thirteen (raise by 65:64)
    /*  */[Code[`acjn31`]]: {unicode: "\uE2B7"},   // Inverted 13 (lower by 65:64)
    /*  */[Code[`acdbflonardn`]]: {unicode: "\uE2C0"}, // Double flat lowered by one syntonic comma
    /*  */[Code[`acflonardn`]]: {unicode: "\uE2C1"},   // Flat lowered by one syntonic comma
    /*  */[Code[`acntonardn`]]: {unicode: "\uE2C2"},   // Natural lowered by one syntonic comma
    /*  */[Code[`acshonardn`]]: {unicode: "\uE2C3"},   // Sharp lowered by one syntonic comma
    /*  */[Code[`acdbshonardn`]]: {unicode: "\uE2C4"}, // Double sharp lowered by one syntonic comma
    /*  */[Code[`acdbflonarup`]]: {unicode: "\uE2C5"}, // Double flat raised by one syntonic comma
    /*  */[Code[`acflonarup`]]: {unicode: "\uE2C6"},   // Flat raised by one syntonic comma
    /*  */[Code[`acntonarup`]]: {unicode: "\uE2C7"},   // Natural raised by one syntonic comma
    /*  */[Code[`acshonarup`]]: {unicode: "\uE2C8"},   // Sharp raised by one syntonic comma
    /*  */[Code[`acdbshonarup`]]: {unicode: "\uE2C9"}, // Double sharp raised by one syntonic comma
    /*  */[Code[`acdbfltwardn`]]: {unicode: "\uE2CA"}, // Double flat lowered by two syntonic commas
    /*  */[Code[`acfltwardn`]]: {unicode: "\uE2CB"},   // Flat lowered by two syntonic commas
    /*  */[Code[`acnttwardn`]]: {unicode: "\uE2CC"},   // Natural lowered by two syntonic commas
    /*  */[Code[`acshtwardn`]]: {unicode: "\uE2CD"},   // Sharp lowered by two syntonic commas
    /*  */[Code[`acdbshtwardn`]]: {unicode: "\uE2CE"}, // Double sharp lowered by two syntonic commas
    /*  */[Code[`acdbfltwarup`]]: {unicode: "\uE2CF"}, // Double flat raised by two syntonic commas
    /*  */[Code[`acfltwarup`]]: {unicode: "\uE2D0"},   // Flat raised by two syntonic commas
    /*  */[Code[`acnttwarup`]]: {unicode: "\uE2D1"},   // Natural raised by two syntonic commas
    /*  */[Code[`acshtwarup`]]: {unicode: "\uE2D2"},   // Sharp raised by two syntonic commas
    /*  */[Code[`acdbshtwarup`]]: {unicode: "\uE2D3"}, // Double sharp raised by two syntonic commas
    /*  */[Code[`acdbflthardn`]]: {unicode: "\uE2D4"}, // Double flat lowered by three syntonic commas
    /*  */[Code[`acflthardn`]]: {unicode: "\uE2D5"},   // Flat lowered by three syntonic commas
    /*  */[Code[`acntthardn`]]: {unicode: "\uE2D6"},   // Natural lowered by three syntonic commas
    /*  */[Code[`acshthardn`]]: {unicode: "\uE2D7"},   // Sharp lowered by three syntonic commas
    /*  */[Code[`acdbshthardn`]]: {unicode: "\uE2D8"}, // Double sharp lowered by three syntonic commas
    /*  */[Code[`acdbfltharup`]]: {unicode: "\uE2D9"}, // Double flat raised by three syntonic commas
    /*  */[Code[`acfltharup`]]: {unicode: "\uE2DA"},   // Flat raised by three syntonic commas
    /*  */[Code[`acnttharup`]]: {unicode: "\uE2DB"},   // Natural raised by three syntonic commas
    /*  */[Code[`acshtharup`]]: {unicode: "\uE2DC"},   // Sharp raised by three syntonic commas
    /*  */[Code[`acdbshtharup`]]: {unicode: "\uE2DD"}, // Double sharp raised by three syntonic commas
    /*  */[Code[`aclwonspcm`]]: {unicode: "\uE2DE"},   // Lower by one septimal comma
    /*  */[Code[`acrsonspcm`]]: {unicode: "\uE2DF"},   // Raise by one septimal comma
    /*  */[Code[`aclwtwspcm`]]: {unicode: "\uE2E0"},   // Lower by two septimal commas
    /*  */[Code[`acrstwspcm`]]: {unicode: "\uE2E1"},   // Raise by two septimal commas
    /*  */[Code[`aclwonunqr`]]: {unicode: "\uE2E2"},   // Lower by one undecimal quartertone
    /*  */[Code[`acrsonunqr`]]: {unicode: "\uE2E3"},   // Raise by one undecimal quartertone
    /*  */[Code[`aclwontrqr`]]: {unicode: "\uE2E4"},   // Lower by one tridecimal quartertone
    /*  */[Code[`acrsontrqr`]]: {unicode: "\uE2E5"},   // Raise by one tridecimal quartertone
    /*  */[Code[`accmlw17sc`]]: {unicode: "\uE2E6"},   // Combining lower by one 17-limit schisma
    /*  */[Code[`accmrs17sc`]]: {unicode: "\uE2E7"},   // Combining raise by one 17-limit schisma
    /*  */[Code[`accmlw19sc`]]: {unicode: "\uE2E8"},   // Combining lower by one 19-limit schisma
    /*  */[Code[`accmrs19sc`]]: {unicode: "\uE2E9"},   // Combining raise by one 19-limit schisma
    /*  */[Code[`accmlw23lm29lmcm`]]: {unicode: "\uE2EA"}, // Combining lower by one 23-limit comma
    /*  */[Code[`accmrs23lm29lmcm`]]: {unicode: "\uE2EB"}, // Combining raise by one 23-limit comma
    /*  */[Code[`accmlw31sc`]]: {unicode: "\uE2EC"},   // Combining lower by one 31-limit schisma
    /*  */[Code[`accmrs31sc`]]: {unicode: "\uE2ED"},   // Combining raise by one 31-limit schisma
    /*  */[Code[`accmopcrbr`]]: {unicode: "\uE2EE"},   // Combining open curly brace
    /*  */[Code[`accmclcrbr`]]: {unicode: "\uE2EF"},   // Combining close curly brace
    /*  */[Code[`acdbfleqtm`]]: {unicode: "\uE2F0"},   // Double flat equal tempered semitone
    /*  */[Code[`acfleqtm`]]: {unicode: "\uE2F1"}, // Flat equal tempered semitone
    /*  */[Code[`acnteqtm`]]: {unicode: "\uE2F2"}, // Natural equal tempered semitone
    /*  */[Code[`acsheqtm`]]: {unicode: "\uE2F3"}, // Sharp equal tempered semitone
    /*  */[Code[`acdbsheqtm`]]: {unicode: "\uE2F4"},   // Double sharp equal tempered semitone
    /*  */[Code[`acqrfleqtm`]]: {unicode: "\uE2F5"},   // Lower by one equal tempered quarter-tone
    /*  */[Code[`acqrsheqtm`]]: {unicode: "\uE2F6"},   // Raise by one equal tempered quarter tone
    /*  */[Code[`accmlw53lmcm`]]: {unicode: "\uE2F7"}, // Combining lower by one 53-limit comma
    /*  */[Code[`accmrs53lmcm`]]: {unicode: "\uE2F8"}, // Combining raise by one 53-limit comma
    /*  */[Code[`acentl`]]: {unicode: "\uE2F9"},   // Enharmonically reinterpret accidental tilde
    /*  */[Code[`acenaleqto`]]: {unicode: "\uE2FA"},   // Enharmonically reinterpret accidental almost equal to
    /*  */[Code[`aceneq`]]: {unicode: "\uE2FB"},   // Enharmonically reinterpret accidental equals
    /*  */[Code[`acsg5V7klup`]]: {unicode: "\uE300", width: 5},    // 5:7 kleisma up, (5:7k, ~11:13k, 7C\u00a0less\u00a05C)
    /*  */[Code[`acsg5V7kldn`]]: {unicode: "\uE301", width: 5},    // 5:7 kleisma down
    /*  */[Code[`acsg5cmup`]]: {unicode: "\uE302", width: 5},  // 5 comma up, (5C), 1\u00b0 up [22 27 29 34 41 46 53 96 EDOs], 1/12-tone up
    /*  */[Code[`acsg5cmdn`]]: {unicode: "\uE303", width: 5},  // 5 comma down, 1\u00b0 down [22 27 29 34 41 46 53 96 EDOs], 1/12-tone down
    /*  */[Code[`acsg7cmup`]]: {unicode: "\uE304", width: 5},  // 7 comma up, (7C), 1\u00b0 up [43 EDO], 2\u00b0 up [72 EDO], 1/6-tone up
    /*  */[Code[`acsg7cmdn`]]: {unicode: "\uE305", width: 5},  // 7 comma down, 1\u00b0 down [43 EDO], 2\u00b0 down [72 EDO], 1/6-tone down
    /*  */[Code[`acsg25smdsup`]]: {unicode: "\uE306", width: 8},   // 25 small diesis up, (25S, ~5:13S, ~37S, 5C\u00a0plus\u00a05C), 2\u00b0 up [53 EDO]
    /*  */[Code[`acsg25smdsdn`]]: {unicode: "\uE307", width: 8},   // 25 small diesis down, 2\u00b0 down [53 EDO]
    /*  */[Code[`acsg35mddsup`]]: {unicode: "\uE308", width: 9},   // 35 medium diesis up, (35M, ~13M, ~125M, 5C\u00a0plus\u00a07C), 2/9-tone up
    /*  */[Code[`acsg35mddsdn`]]: {unicode: "\uE309", width: 9},   // 35 medium diesis down, 1\u00b0[50] 2\u00b0[27] down, 2/9-tone down
    /*  */[Code[`acsg11mddsup`]]: {unicode: "\uE30A", width: 11},  // 11 medium diesis up, (11M), 1\u00b0[17 31] 2\u00b046 up, 1/4-tone up
    /*  */[Code[`acsg11mddsdn`]]: {unicode: "\uE30B", width: 11},  // 11 medium diesis down, 1\u00b0[17 31] 2\u00b046 down, 1/4-tone down
    /*  */[Code[`acsg11lgdsup`]]: {unicode: "\uE30C", width: 11},  // 11 large diesis up, (11L), (sharp less 11M), 3\u00b0 up [46 EDO]
    /*  */[Code[`acsg11lgdsdn`]]: {unicode: "\uE30D", width: 11},  // 11 large diesis down, 3\u00b0 down [46 EDO]
    /*  */[Code[`acsg35lgdsup`]]: {unicode: "\uE30E", width: 12},  // 35 large diesis up, (35L, ~13L, ~125L,  sharp less 35M), 2\u00b050 up
    /*  */[Code[`acsg35lgdsdn`]]: {unicode: "\uE30F", width: 12},  // 35 large diesis down, 2\u00b0 down [50 EDO], 5/18-tone down
    /*  */[Code[`acsgsh25Sdn`]]: {unicode: "\uE310"},  // Sharp 25S-down, 3\u00b0 up [53 EDO]
    /*  */[Code[`acsgfl25Sup`]]: {unicode: "\uE311"},  // Flat 25S-up, 3\u00b0 down [53 EDO]
    /*  */[Code[`acsgsh7Cdn`]]: {unicode: "\uE312"},   // Sharp 7C-down, 2\u00b0 up [43 EDO], 4\u00b0 up [72 EDO], 1/3-tone up
    /*  */[Code[`acsgfl7Cup`]]: {unicode: "\uE313"},   // Flat 7C-up, 2\u00b0 down [43 EDO], 4\u00b0 down [72 EDO], 1/3-tone down
    /*  */[Code[`acsgsh5Cdn`]]: {unicode: "\uE314"},   // Sharp 5C-down, 2\u00b0[22 29] 3\u00b0[27 34 41] 4\u00b0[39 46 53] 5\u00b0[72] 7\u00b0[96] up, 5/12-tone up
    /*  */[Code[`acsgfl5Cup`]]: {unicode: "\uE315"},   // Flat 5C-up, 2\u00b0[22 29] 3\u00b0[27 34 41] 4\u00b0[39 46 53] 5\u00b072 7\u00b0[96] down, 5/12-tone down
    /*  */[Code[`acsgsh5V7Kdn`]]: {unicode: "\uE316"}, // Sharp 5:7k-down
    /*  */[Code[`acsgfl5V7Kup`]]: {unicode: "\uE317"}, // Flat 5:7k-up
    /*  */[Code[`acsgsh`]]: {unicode: "\uE318"},   // Sharp, (apotome up)[almost all EDOs], 1/2-tone up
    /*  */[Code[`acsgfl`]]: {unicode: "\uE319"},   // Flat, (apotome down)[almost all EDOs], 1/2-tone down
    /*  */[Code[`acsgsh5V7Kup`]]: {unicode: "\uE31C"}, // Sharp 5:7k-up
    /*  */[Code[`acsgfl5V7Kdn`]]: {unicode: "\uE31D"}, // Flat 5:7k-down
    /*  */[Code[`acsgsh5Cup`]]: {unicode: "\uE31E"},   // Sharp 5C-up, 4\u00b0[22 29] 5\u00b0[27 34 41] 6\u00b0[39 46 53] up, 7/12-tone up
    /*  */[Code[`acsgfl5Cdn`]]: {unicode: "\uE31F"},   // Flat 5C-down, 4\u00b0[22 29] 5\u00b0[27 34 41] 6\u00b0[39 46 53] down, 7/12-tone down
    /*  */[Code[`acsgsh7Cup`]]: {unicode: "\uE320"},   // Sharp 7C-up, 4\u00b0 up [43 EDO], 8\u00b0 up [72 EDO], 2/3-tone up
    /*  */[Code[`acsgfl7Cdn`]]: {unicode: "\uE321"},   // Flat 7C-down, 4\u00b0 down [43 EDO], 8\u00b0 down [72 EDO], 2/3-tone down
    /*  */[Code[`acsgsh25Sup`]]: {unicode: "\uE322"},  // Sharp 25S-up, 7\u00b0 up [53 EDO]
    /*  */[Code[`acsgfl25Sdn`]]: {unicode: "\uE323"},  // Flat 25S-down, 7\u00b0 down [53 EDO]
    /*  */[Code[`acsgsh35Mup`]]: {unicode: "\uE324"},  // Sharp 35M-up, 4\u00b0 up [50 EDO], 6\u00b0 up [27 EDO], 13/18-tone up
    /*  */[Code[`acsgfl35Mdn`]]: {unicode: "\uE325"},  // Flat 35M-down, 4\u00b0 down [50 EDO], 6\u00b0 down [27 EDO], 13/18-tone down
    /*  */[Code[`acsgsh11Mup`]]: {unicode: "\uE326"},  // Sharp 11M-up, 3\u00b0 up [17 31 EDOs], 7\u00b0 up [46 EDO], 3/4-tone up
    /*  */[Code[`acsgfl11Mdn`]]: {unicode: "\uE327"},  // Flat 11M-down, 3\u00b0 down [17 31 EDOs], 7\u00b0 down [46 EDO], 3/4-tone down
    /*  */[Code[`acsgsh11Lup`]]: {unicode: "\uE328"},  // Sharp 11L-up, 8\u00b0 up [46 EDO]
    /*  */[Code[`acsgfl11Ldn`]]: {unicode: "\uE329"},  // Flat 11L-down, 8\u00b0 up [46 EDO]
    /*  */[Code[`acsgsh35Lup`]]: {unicode: "\uE32A"},  // Sharp 35L-up, 5\u00b0 up [50 EDO]
    /*  */[Code[`acsgfl35Ldn`]]: {unicode: "\uE32B"},  // Flat 35L-down, 5\u00b0 down [50 EDO]
    /*  */[Code[`acsgdbsh25Sdn`]]: {unicode: "\uE32C"},    // Double sharp 25S-down, 8\u00b0up [53 EDO]
    /*  */[Code[`acsgdbfl25Sup`]]: {unicode: "\uE32D"},    // Double flat 25S-up, 8\u00b0down [53 EDO]
    /*  */[Code[`acsgdbsh7Cdn`]]: {unicode: "\uE32E"}, // Double sharp 7C-down, 5\u00b0[43] 10\u00b0[72] up, 5/6-tone up
    /*  */[Code[`acsgdbfl7Cup`]]: {unicode: "\uE32F"}, // Double flat 7C-up, 5\u00b0 down [43 EDO], 10\u00b0 down [72 EDO], 5/6-tone down
    /*  */[Code[`acsgdbsh5Cdn`]]: {unicode: "\uE330"}, // Double sharp 5C-down, 5\u00b0[22 29] 7\u00b0[34 41] 9\u00b053 up, 11/12 tone up
    /*  */[Code[`acsgdbfl5Cup`]]: {unicode: "\uE331"}, // Double flat 5C-up, 5\u00b0[22 29] 7\u00b0[34 41] 9\u00b053 down, 11/12 tone down
    /*  */[Code[`acsgdbsh5V7Kdn`]]: {unicode: "\uE332"},   // Double sharp 5:7k-down
    /*  */[Code[`acsgdbfl5V7Kup`]]: {unicode: "\uE333"},   // Double flat 5:7k-up
    /*  */[Code[`acsgdbsh`]]: {unicode: "\uE334"}, // Double sharp, (2 apotomes up)[almost all EDOs], whole-tone up
    /*  */[Code[`acsgdbfl`]]: {unicode: "\uE335"}, // Double flat, (2 apotomes down)[almost all EDOs], whole-tone down
    /*  */[Code[`acsg7V11klup`]]: {unicode: "\uE340"}, // 7:11 kleisma up, (7:11k, ~29k)
    /*  */[Code[`acsg7V11kldn`]]: {unicode: "\uE341"}, // 7:11 kleisma down
    /*  */[Code[`acsg17cmup`]]: {unicode: "\uE342"},   // 17 comma up, (17C)
    /*  */[Code[`acsg17cmdn`]]: {unicode: "\uE343"},   // 17 comma down
    /*  */[Code[`acsg55cmup`]]: {unicode: "\uE344"},   // 55 comma up, (55C, 11M less 5C), 3\u00b0up [96 EDO], 3/16-tone up
    /*  */[Code[`acsg55cmdn`]]: {unicode: "\uE345"},   // 55 comma down, 3\u00b0 down [96 EDO], 3/16-tone down
    /*  */[Code[`acsg7V11cmup`]]: {unicode: "\uE346"}, // 7:11 comma up, (7:11C, ~13:17S, ~29S, 11L less 7C), 1\u00b0 up [60 EDO]
    /*  */[Code[`acsg7V11cmdn`]]: {unicode: "\uE347"}, // 7:11 comma down, 1\u00b0 down [60 EDO], 1/10-tone down
    /*  */[Code[`acsg5V11smdsup`]]: {unicode: "\uE348"},   // 5:11 small diesis up, (5:11S, ~7:13S, ~11:17S, 5:7k plus 7:11C)
    /*  */[Code[`acsg5V11smdsdn`]]: {unicode: "\uE349"},   // 5:11 small diesis down
    /*  */[Code[`acsgsh5V11Sdn`]]: {unicode: "\uE34A"},    // Sharp 5:11S-down
    /*  */[Code[`acsgfl5V11Sup`]]: {unicode: "\uE34B"},    // Flat 5:11S-up
    /*  */[Code[`acsgsh7V11Cdn`]]: {unicode: "\uE34C"},    // Sharp 7:11C-down, 4\u00b0 up [60 EDO], 2/5-tone up
    /*  */[Code[`acsgfl7V11Cup`]]: {unicode: "\uE34D"},    // Flat 7:11C-up, 4\u00b0 down [60 EDO], 2/5-tone down
    /*  */[Code[`acsgsh55Cdn`]]: {unicode: "\uE34E"},  // Sharp 55C-down, 5\u00b0 up [96 EDO], 5/16-tone up
    /*  */[Code[`acsgfl55Cup`]]: {unicode: "\uE34F"},  // Flat 55C-up, 5\u00b0 down [96 EDO], 5/16-tone down
    /*  */[Code[`acsgsh17Cdn`]]: {unicode: "\uE350"},  // Sharp 17C-down
    /*  */[Code[`acsgfl17Cup`]]: {unicode: "\uE351"},  // Flat 17C-up
    /*  */[Code[`acsgsh7V11Kdn`]]: {unicode: "\uE352"},    // Sharp 7:11k-down
    /*  */[Code[`acsgfl7V11Kup`]]: {unicode: "\uE353"},    // Flat 7:11k-up
    /*  */[Code[`acsgsh7V11Kup`]]: {unicode: "\uE354"},    // Sharp 7:11k-up
    /*  */[Code[`acsgfl7V11Kdn`]]: {unicode: "\uE355"},    // Flat 7:11k-down
    /*  */[Code[`acsgsh17Cup`]]: {unicode: "\uE356"},  // Sharp 17C-up
    /*  */[Code[`acsgfl17Cdn`]]: {unicode: "\uE357"},  // Flat 17C-down
    /*  */[Code[`acsgsh55Cup`]]: {unicode: "\uE358"},  // Sharp 55C-up, 11\u00b0 up [96 EDO], 11/16-tone up
    /*  */[Code[`acsgfl55Cdn`]]: {unicode: "\uE359"},  // Flat 55C-down, 11\u00b0 down [96 EDO], 11/16-tone down
    /*  */[Code[`acsgsh7V11Cup`]]: {unicode: "\uE35A"},    // Sharp 7:11C-up, 6\u00b0 up [60 EDO], 3/5- tone up
    /*  */[Code[`acsgfl7V11Cdn`]]: {unicode: "\uE35B"},    // Flat 7:11C-down, 6\u00b0 down [60 EDO], 3/5- tone down
    /*  */[Code[`acsgsh5V11Sup`]]: {unicode: "\uE35C"},    // Sharp 5:11S-up
    /*  */[Code[`acsgfl5V11Sdn`]]: {unicode: "\uE35D"},    // Flat 5:11S-down
    /*  */[Code[`acsgdbsh5V11Sdn`]]: {unicode: "\uE35E"},  // Double sharp 5:11S-down
    /*  */[Code[`acsgdbfl5V11Sup`]]: {unicode: "\uE35F"},  // Double flat 5:11S-up
    /*  */[Code[`acsgdbsh7V11Cdn`]]: {unicode: "\uE360"},  // Double sharp 7:11C-down, 9\u00b0 up [60 EDO], 9/10-tone up
    /*  */[Code[`acsgdbfl7V11Cup`]]: {unicode: "\uE361"},  // Double flat 7:11C-up, 9\u00b0 down [60 EDO], 9/10-tone down
    /*  */[Code[`acsgdbsh55Cdn`]]: {unicode: "\uE362"},    // Double sharp 55C-down, 13\u00b0 up [96 EDO], 13/16-tone up
    /*  */[Code[`acsgdbfl55Cup`]]: {unicode: "\uE363"},    // Double flat 55C-up, 13\u00b0 down [96 EDO], 13/16-tone down
    /*  */[Code[`acsgdbsh17Cdn`]]: {unicode: "\uE364"},    // Double sharp 17C-down
    /*  */[Code[`acsgdbfl17Cup`]]: {unicode: "\uE365"},    // Double flat 17C-up
    /*  */[Code[`acsgdbsh7V11Kdn`]]: {unicode: "\uE366"},  // Double sharp 7:11k-down
    /*  */[Code[`acsgdbfl7V11Kup`]]: {unicode: "\uE367"},  // Double flat 7:11k-up
    /*  */[Code[`acsg23cmup`]]: {unicode: "\uE370"},   // 23 comma up, (23C), 2\u00b0 up [96 EDO], 1/8-tone up
    /*  */[Code[`acsg23cmdn`]]: {unicode: "\uE371"},   // 23 comma down, 2\u00b0 down [96 EDO], 1/8-tone down
    /*  */[Code[`acsg5V19cmup`]]: {unicode: "\uE372"}, // 5:19 comma up, (5:19C, 5C plus 19s), 1/20-tone up
    /*  */[Code[`acsg5V19cmdn`]]: {unicode: "\uE373"}, // 5:19 comma down, 1/20-tone down
    /*  */[Code[`acsg5V23smdsup`]]: {unicode: "\uE374"},   // 5:23 small diesis up, (5:23S, 5C plus 23C), 2\u00b0 up [60 EDO], 1/5-tone up
    /*  */[Code[`acsg5V23smdsdn`]]: {unicode: "\uE375"},   // 5:23 small diesis down, 2\u00b0 down [60 EDO], 1/5-tone down
    /*  */[Code[`acsgsh5V23Sdn`]]: {unicode: "\uE376"},    // Sharp 5:23S-down, 3\u00b0 up [60 EDO], 3/10-tone up
    /*  */[Code[`acsgfl5V23Sup`]]: {unicode: "\uE377"},    // Flat 5:23S-up, 3\u00b0 down [60 EDO], 3/10-tone down
    /*  */[Code[`acsgsh5V19Cdn`]]: {unicode: "\uE378"},    // Sharp 5:19C-down, 9/20-tone up
    /*  */[Code[`acsgfl5V19Cup`]]: {unicode: "\uE379"},    // Flat 5:19C-up, 9/20-tone down
    /*  */[Code[`acsgsh23Cdn`]]: {unicode: "\uE37A"},  // Sharp 23C-down, 6\u00b0 up [96 EDO], 3/8-tone up
    /*  */[Code[`acsgfl23Cup`]]: {unicode: "\uE37B"},  // Flat 23C-up, 6\u00b0 down [96 EDO], 3/8-tone down
    /*  */[Code[`acsgsh23Cup`]]: {unicode: "\uE37C"},  // Sharp 23C-up, 10\u00b0 up [96 EDO], 5/8-tone up
    /*  */[Code[`acsgfl23Cdn`]]: {unicode: "\uE37D"},  // Flat 23C-down, 10\u00b0 down [96 EDO], 5/8-tone down
    /*  */[Code[`acsgsh5V19Cup`]]: {unicode: "\uE37E"},    // Sharp 5:19C-up, 11/20-tone up
    /*  */[Code[`acsgfl5V19Cdn`]]: {unicode: "\uE37F"},    // Flat 5:19C-down, 11/20-tone down
    /*  */[Code[`acsgsh5V23Sup`]]: {unicode: "\uE380"},    // Sharp 5:23S-up, 7\u00b0 up [60 EDO], 7/10-tone up
    /*  */[Code[`acsgfl5V23Sdn`]]: {unicode: "\uE381"},    // Flat 5:23S-down, 7\u00b0 down [60 EDO], 7/10-tone down
    /*  */[Code[`acsgdbsh5V23Sdn`]]: {unicode: "\uE382"},  // Double sharp 5:23S-down, 8\u00b0 up [60 EDO], 4/5-tone up
    /*  */[Code[`acsgdbfl5V23Sup`]]: {unicode: "\uE383"},  // Double flat 5:23S-up, 8\u00b0 down  [60 EDO], 4/5-tone down
    /*  */[Code[`acsgdbsh5V19Cdn`]]: {unicode: "\uE384"},  // Double sharp 5:19C-down, 19/20-tone up
    /*  */[Code[`acsgdbfl5V19Cup`]]: {unicode: "\uE385"},  // Double flat 5:19C-up, 19/20-tone down
    /*  */[Code[`acsgdbsh23Cdn`]]: {unicode: "\uE386"},    // Double sharp 23C-down, 14\u00b0up [96 EDO], 7/8-tone up
    /*  */[Code[`acsgdbfl23Cup`]]: {unicode: "\uE387"},    // Double flat 23C-up, 14\u00b0 down [96 EDO], 7/8-tone down
    /*  */[Code[`acsg19scup`]]: {unicode: "\uE390"},   // 19 schisma up, (19s)
    /*  */[Code[`acsg19scdn`]]: {unicode: "\uE391"},   // 19 schisma down
    /*  */[Code[`acsg17klup`]]: {unicode: "\uE392"},   // 17 kleisma up, (17k)
    /*  */[Code[`acsg17kldn`]]: {unicode: "\uE393"},   // 17 kleisma down
    /*  */[Code[`acsg143cmup`]]: {unicode: "\uE394"},  // 143 comma up, (143C, 13L less 11M)
    /*  */[Code[`acsg143cmdn`]]: {unicode: "\uE395"},  // 143 comma down
    /*  */[Code[`acsg11V49cmup`]]: {unicode: "\uE396"},    // 11:49 comma up, (11:49C, 11M less 49C)
    /*  */[Code[`acsg11V49cmdn`]]: {unicode: "\uE397"},    // 11:49 comma down
    /*  */[Code[`acsg19cmup`]]: {unicode: "\uE398"},   // 19 comma up, (19C)
    /*  */[Code[`acsg19cmdn`]]: {unicode: "\uE399"},   // 19 comma down
    /*  */[Code[`acsg7V19cmup`]]: {unicode: "\uE39A"}, // 7:19 comma up, (7:19C, 7C less 19s)
    /*  */[Code[`acsg7V19cmdn`]]: {unicode: "\uE39B"}, // 7:19 comma down
    /*  */[Code[`acsg49smdsup`]]: {unicode: "\uE39C"}, // 49 small diesis up, (49S, ~31S)
    /*  */[Code[`acsg49smdsdn`]]: {unicode: "\uE39D"}, // 49 small diesis down
    /*  */[Code[`acsg23smdsup`]]: {unicode: "\uE39E"}, // 23 small diesis up, (23S)
    /*  */[Code[`acsg23smdsdn`]]: {unicode: "\uE39F"}, // 23 small diesis down
    /*  */[Code[`acsg5V13mddsup`]]: {unicode: "\uE3A0"},   // 5:13 medium diesis up, (5:13M, ~37M, 5C plus 13C)
    /*  */[Code[`acsg5V13mddsdn`]]: {unicode: "\uE3A1"},   // 5:13 medium diesis down
    /*  */[Code[`acsg11V19mddsup`]]: {unicode: "\uE3A2"},  // 11:19 medium diesis up, (11:19M, 11M plus 19s)
    /*  */[Code[`acsg11V19mddsdn`]]: {unicode: "\uE3A3"},  // 11:19 medium diesis down
    /*  */[Code[`acsg49mddsup`]]: {unicode: "\uE3A4"}, // 49 medium diesis up, (49M, ~31M, 7C plus 7C)
    /*  */[Code[`acsg49mddsdn`]]: {unicode: "\uE3A5"}, // 49 medium diesis down
    /*  */[Code[`acsg5V49mddsup`]]: {unicode: "\uE3A6"},   // 5:49 medium diesis up, (5:49M, half apotome)
    /*  */[Code[`acsg5V49mddsdn`]]: {unicode: "\uE3A7"},   // 5:49 medium diesis down
    /*  */[Code[`acsg49lgdsup`]]: {unicode: "\uE3A8"}, // 49 large diesis up, (49L, ~31L, apotome less 49M)
    /*  */[Code[`acsg49lgdsdn`]]: {unicode: "\uE3A9"}, // 49 large diesis down
    /*  */[Code[`acsg11V19lgdsup`]]: {unicode: "\uE3AA"},  // 11:19 large diesis up, (11:19L, apotome less 11:19M)
    /*  */[Code[`acsg11V19lgdsdn`]]: {unicode: "\uE3AB"},  // 11:19 large diesis down
    /*  */[Code[`acsg5V13lgdsup`]]: {unicode: "\uE3AC"},   // 5:13 large diesis up, (5:13L, ~37L, apotome less 5:13M)
    /*  */[Code[`acsg5V13lgdsdn`]]: {unicode: "\uE3AD"},   // 5:13 large diesis down
    /*  */[Code[`acsgsh23Sdn`]]: {unicode: "\uE3B0"},  // Sharp 23S-down
    /*  */[Code[`acsgfl23Sup`]]: {unicode: "\uE3B1"},  // Flat 23S-up
    /*  */[Code[`acsgsh49Sdn`]]: {unicode: "\uE3B2"},  // Sharp 49S-down
    /*  */[Code[`acsgfl49Sup`]]: {unicode: "\uE3B3"},  // Flat 49S-up
    /*  */[Code[`acsgsh7V19Cdn`]]: {unicode: "\uE3B4"},    // Sharp 7:19C-down
    /*  */[Code[`acsgfl7V19Cup`]]: {unicode: "\uE3B5"},    // Flat 7:19C-up
    /*  */[Code[`acsgsh19Cdn`]]: {unicode: "\uE3B6"},  // Sharp 19C-down
    /*  */[Code[`acsgfl19Cup`]]: {unicode: "\uE3B7"},  // Flat 19C-up
    /*  */[Code[`acsgsh11V49Cdn`]]: {unicode: "\uE3B8"},   // Sharp 11:49C-down
    /*  */[Code[`acsgfl11V49Cup`]]: {unicode: "\uE3B9"},   // Flat 11:49C-up
    /*  */[Code[`acsgsh143Cdn`]]: {unicode: "\uE3BA"}, // Sharp 143C-down
    /*  */[Code[`acsgfl143Cup`]]: {unicode: "\uE3BB"}, // Flat 143C-up
    /*  */[Code[`acsgsh17Kdn`]]: {unicode: "\uE3BC"},  // Sharp 17k-down
    /*  */[Code[`acsgfl17Kup`]]: {unicode: "\uE3BD"},  // Flat 17k-up
    /*  */[Code[`acsgsh19Sdn`]]: {unicode: "\uE3BE"},  // Sharp 19s-down
    /*  */[Code[`acsgfl19Sup`]]: {unicode: "\uE3BF"},  // Flat 19s-up
    /*  */[Code[`acsgsh19Sup`]]: {unicode: "\uE3C0"},  // Sharp 19s-up
    /*  */[Code[`acsgfl19Sdn`]]: {unicode: "\uE3C1"},  // Flat 19s-down
    /*  */[Code[`acsgsh17Kup`]]: {unicode: "\uE3C2"},  // Sharp 17k-up
    /*  */[Code[`acsgfl17Kdn`]]: {unicode: "\uE3C3"},  // Flat 17k-down
    /*  */[Code[`acsgsh143Cup`]]: {unicode: "\uE3C4"}, // Sharp 143C-up
    /*  */[Code[`acsgfl143Cdn`]]: {unicode: "\uE3C5"}, // Flat 143C-down
    /*  */[Code[`acsgsh11V49Cup`]]: {unicode: "\uE3C6"},   // Sharp 11:49C-up
    /*  */[Code[`acsgfl11V49Cdn`]]: {unicode: "\uE3C7"},   // Flat 11:49C-down
    /*  */[Code[`acsgsh19Cup`]]: {unicode: "\uE3C8"},  // Sharp 19C-up
    /*  */[Code[`acsgfl19Cdn`]]: {unicode: "\uE3C9"},  // Flat 19C-down
    /*  */[Code[`acsgsh7V19Cup`]]: {unicode: "\uE3CA"},    // Sharp 7:19C-up
    /*  */[Code[`acsgfl7V19Cdn`]]: {unicode: "\uE3CB"},    // Flat 7:19C-down
    /*  */[Code[`acsgsh49Sup`]]: {unicode: "\uE3CC"},  // Sharp 49S-up
    /*  */[Code[`acsgfl49Sdn`]]: {unicode: "\uE3CD"},  // Flat 49S-down
    /*  */[Code[`acsgsh23Sup`]]: {unicode: "\uE3CE"},  // Sharp 23S-up
    /*  */[Code[`acsgfl23Sdn`]]: {unicode: "\uE3CF"},  // Flat 23S-down
    /*  */[Code[`acsgsh5V13Mup`]]: {unicode: "\uE3D0"},    // Sharp 5:13M-up
    /*  */[Code[`acsgfl5V13Mdn`]]: {unicode: "\uE3D1"},    // Flat 5:13M-down
    /*  */[Code[`acsgsh11V19Mup`]]: {unicode: "\uE3D2"},   // Sharp 11:19M-up
    /*  */[Code[`acsgfl11V19Mdn`]]: {unicode: "\uE3D3"},   // Flat 11:19M-down
    /*  */[Code[`acsgsh49Mup`]]: {unicode: "\uE3D4"},  // Sharp 49M-up
    /*  */[Code[`acsgfl49Mdn`]]: {unicode: "\uE3D5"},  // Flat 49M-down
    /*  */[Code[`acsgsh5V49Mup`]]: {unicode: "\uE3D6"},    // Sharp 5:49M-up, (one and a half apotomes)
    /*  */[Code[`acsgfl5V49Mdn`]]: {unicode: "\uE3D7"},    // Flat 5:49M-down
    /*  */[Code[`acsgsh49Lup`]]: {unicode: "\uE3D8"},  // Sharp 49L-up
    /*  */[Code[`acsgfl49Ldn`]]: {unicode: "\uE3D9"},  // Flat 49L-down
    /*  */[Code[`acsgsh11V19Lup`]]: {unicode: "\uE3DA"},   // Sharp 11:19L-up
    /*  */[Code[`acsgfl11V19Ldn`]]: {unicode: "\uE3DB"},   // Flat 11:19L-down
    /*  */[Code[`acsgsh5V13Lup`]]: {unicode: "\uE3DC"},    // Sharp 5:13L-up
    /*  */[Code[`acsgfl5V13Ldn`]]: {unicode: "\uE3DD"},    // Flat 5:13L-down
    /*  */[Code[`acsgdbsh23Sdn`]]: {unicode: "\uE3E0"},    // Double sharp 23S-down
    /*  */[Code[`acsgdbfl23Sup`]]: {unicode: "\uE3E1"},    // Double flat 23S-up
    /*  */[Code[`acsgdbsh49Sdn`]]: {unicode: "\uE3E2"},    // Double sharp 49S-down
    /*  */[Code[`acsgdbfl49Sup`]]: {unicode: "\uE3E3"},    // Double flat 49S-up
    /*  */[Code[`acsgdbsh7V19Cdn`]]: {unicode: "\uE3E4"},  // Double sharp 7:19C-down
    /*  */[Code[`acsgdbfl7V19Cup`]]: {unicode: "\uE3E5"},  // Double flat 7:19C-up
    /*  */[Code[`acsgdbsh19Cdn`]]: {unicode: "\uE3E6"},    // Double sharp 19C-down
    /*  */[Code[`acsgdbfl19Cup`]]: {unicode: "\uE3E7"},    // Double flat 19C-up
    /*  */[Code[`acsgdbsh11V49Cdn`]]: {unicode: "\uE3E8"}, // Double sharp 11:49C-down
    /*  */[Code[`acsgdbfl11V49Cup`]]: {unicode: "\uE3E9"}, // Double flat 11:49C-up
    /*  */[Code[`acsgdbsh143Cdn`]]: {unicode: "\uE3EA"},   // Double sharp 143C-down
    /*  */[Code[`acsgdbfl143Cup`]]: {unicode: "\uE3EB"},   // Double flat 143C-up
    /*  */[Code[`acsgdbsh17Kdn`]]: {unicode: "\uE3EC"},    // Double sharp 17k-down
    /*  */[Code[`acsgdbfl17Kup`]]: {unicode: "\uE3ED"},    // Double flat 17k-up
    /*  */[Code[`acsgdbsh19Sdn`]]: {unicode: "\uE3EE"},    // Double sharp 19s-down
    /*  */[Code[`acsgdbfl19Sup`]]: {unicode: "\uE3EF"},    // Double flat 19s-up
    /*  */[Code[`acsgshup`]]: {unicode: "\uE3F0"}, // Shaft up, (natural for use with only diacritics up)
    /*  */[Code[`acsgshdn`]]: {unicode: "\uE3F1"}, // Shaft down, (natural for use with only diacritics down)
    /*  */[Code[`acsgac`]]: {unicode: "\uE3F2"},   // Acute, 5 schisma up (5s), 2 cents up
    /*  */[Code[`acsggr`]]: {unicode: "\uE3F3"},   // Grave, 5 schisma down, 2 cents down
    /*  */[Code[`acsg1mnup`]]: {unicode: "\uE3F4"},    // 1 mina up, 1/(5\u22c57\u22c513)-schismina up, 0.42 cents up
    /*  */[Code[`acsg1mndn`]]: {unicode: "\uE3F5"},    // 1 mina down, 1/(5\u22c57\u22c513)-schismina down, 0.42 cents down
    /*  */[Code[`acsg2mnup`]]: {unicode: "\uE3F6"},    // 2 minas up, 65/77-schismina up, 0.83 cents up
    /*  */[Code[`acsg2mndn`]]: {unicode: "\uE3F7"},    // 2 minas down, 65/77-schismina down, 0.83 cents down
    /*  */[Code[`acsg1tnup`]]: {unicode: "\uE3F8"},    // 1 tina up, 7\u00b2\u22c511\u22c519/5-schismina up, 0.17 cents up
    /*  */[Code[`acsg1tndn`]]: {unicode: "\uE3F9"},    // 1 tina down, 7\u00b2\u22c511\u22c519/5-schismina down, 0.17 cents down
    /*  */[Code[`acsg2tnup`]]: {unicode: "\uE3FA"},    // 2 tinas up, 1/(7\u00b3\u22c517)-schismina up, 0.30 cents up
    /*  */[Code[`acsg2tndn`]]: {unicode: "\uE3FB"},    // 2 tinas down, 1/(7\u00b3\u22c517)-schismina down, 0.30 cents down
    /*  */[Code[`acsg3tnup`]]: {unicode: "\uE3FC"},    // 3 tinas up, 1 mina up, 1/(5\u22c57\u22c513)-schismina up, 0.42 cents up
    /*  */[Code[`acsg3tndn`]]: {unicode: "\uE3FD"},    // 3 tinas down, 1 mina down, 1/(5\u22c57\u22c513)-schismina down, 0.42 cents down
    /*  */[Code[`acsg4tnup`]]: {unicode: "\uE3FE"},    // 4 tinas up, 5\u00b2\u22c511\u00b2/7-schismina up, 0.57 cents up
    /*  */[Code[`acsg4tndn`]]: {unicode: "\uE3FF"},    // 4 tinas down, 5\u00b2\u22c511\u00b2/7-schismina down, 0.57 cents down
    /*  */[Code[`acsg5tnup`]]: {unicode: "\uE400"},    // 5 tinas up, 7\u2074/25-schismina up, 0.72 cents up
    /*  */[Code[`acsg5tndn`]]: {unicode: "\uE401"},    // 5 tinas down, 7\u2074/25-schismina down, 0.72 cents down
    /*  */[Code[`acsg6tnup`]]: {unicode: "\uE402"},    // 6 tinas up, 2 minas up, 65/77-schismina up, 0.83 cents up
    /*  */[Code[`acsg6tndn`]]: {unicode: "\uE403"},    // 6 tinas down, 2 minas down, 65/77-schismina down, 0.83 cents down
    /*  */[Code[`acsg7tnup`]]: {unicode: "\uE404"},    // 7 tinas up, 7/(5\u00b2\u22c517)-schismina up, 1.02 cents up
    /*  */[Code[`acsg7tndn`]]: {unicode: "\uE405"},    // 7 tinas down, 7/(5\u00b2\u22c517)-schismina down, 1.02 cents down
    /*  */[Code[`acsg8tnup`]]: {unicode: "\uE406"},    // 8 tinas up, 11\u22c517/(5\u00b2\u22c57)-schismina up, 1.14 cents up
    /*  */[Code[`acsg8tndn`]]: {unicode: "\uE407"},    // 8 tinas down, 11\u22c517/(5\u00b2\u22c57)-schismina down, 1.14 cents down
    /*  */[Code[`acsg9tnup`]]: {unicode: "\uE408"},    // 9 tinas up, 1/(7\u00b2\u22c511)-schismina up, 1.26 cents up
    /*  */[Code[`acsg9tndn`]]: {unicode: "\uE409"},    // 9 tinas down, 1/(7\u00b2\u22c511)-schismina down, 1.26 cents down
    /*  */[Code[`acsgfrtnup`]]: {unicode: "\uE40A"},   // Fractional tina up, 77/(5\u22c537)-schismina up, 0.08 cents up
    /*  */[Code[`acsgfrtndn`]]: {unicode: "\uE40B"},   // Fractional tina down, 77/(5\u22c537)-schismina down, 0.08 cents down
    /*  */[Code[`acwy1twsh`]]: {unicode: "\uE420"},    // 1/12 tone sharp
    /*  */[Code[`acwy2twsh`]]: {unicode: "\uE421"},    // 1/6 tone sharp
    /*  */[Code[`acwy3twsh`]]: {unicode: "\uE422"},    // 1/4 tone sharp
    /*  */[Code[`acwy4twsh`]]: {unicode: "\uE423"},    // 1/3 tone sharp
    /*  */[Code[`acwy5twsh`]]: {unicode: "\uE424"},    // 5/12 tone sharp
    /*  */[Code[`acwy6twsh`]]: {unicode: "\uE425"},    // 1/2 tone sharp
    /*  */[Code[`acwy7twsh`]]: {unicode: "\uE426"},    // 7/12 tone sharp
    /*  */[Code[`acwy8twsh`]]: {unicode: "\uE427"},    // 2/3 tone sharp
    /*  */[Code[`acwy9twsh`]]: {unicode: "\uE428"},    // 3/4 tone sharp
    /*  */[Code[`acwy10twsh`]]: {unicode: "\uE429"},   // 5/6 tone sharp
    /*  */[Code[`acwy11twsh`]]: {unicode: "\uE42A"},   // 11/12 tone sharp
    /*  */[Code[`acwy1twfl`]]: {unicode: "\uE42B"},    // 1/12 tone flat
    /*  */[Code[`acwy2twfl`]]: {unicode: "\uE42C"},    // 1/6 tone flat
    /*  */[Code[`acwy3twfl`]]: {unicode: "\uE42D"},    // 1/4 tone flat
    /*  */[Code[`acwy4twfl`]]: {unicode: "\uE42E"},    // 1/3 tone flat
    /*  */[Code[`acwy5twfl`]]: {unicode: "\uE42F"},    // 5/12 tone flat
    /*  */[Code[`acwy6twfl`]]: {unicode: "\uE430"},    // 1/2 tone flat
    /*  */[Code[`acwy7twfl`]]: {unicode: "\uE431"},    // 7/12 tone flat
    /*  */[Code[`acwy8twfl`]]: {unicode: "\uE432"},    // 2/3 tone flat
    /*  */[Code[`acwy9twfl`]]: {unicode: "\uE433"},    // 3/4 tone flat
    /*  */[Code[`acwy10twfl`]]: {unicode: "\uE434"},   // 5/6 tone flat
    /*  */[Code[`acwy11twfl`]]: {unicode: "\uE435"},   // 11/12 tone flat
    /*  */[Code[`acbymcfl`]]: {unicode: "\uE440"}, // B\u00fcy\u00fck m\u00fccenneb (flat)
    /*  */[Code[`ackcmcfl`]]: {unicode: "\uE441"}, // K\u00fc\u00e7\u00fck m\u00fccenneb (flat)
    /*  */[Code[`acbkfl`]]: {unicode: "\uE442"},   // Bakiye (flat)
    /*  */[Code[`ackmfl`]]: {unicode: "\uE443"},   // Koma (flat)
    /*  */[Code[`ackmsh`]]: {unicode: "\uE444"},   // Koma (sharp)
    /*  */[Code[`acbksh`]]: {unicode: "\uE445"},   // Bakiye (sharp)
    /*  */[Code[`ackcmcsh`]]: {unicode: "\uE446"}, // K\u00fc\u00e7\u00fck m\u00fccenneb (sharp)
    /*  */[Code[`acbymcsh`]]: {unicode: "\uE447"}, // B\u00fcy\u00fck m\u00fccenneb (sharp)
    /*  */[Code[`ac1cmsh`]]: {unicode: "\uE450"},  // 1-comma sharp
    /*  */[Code[`ac2cmsh`]]: {unicode: "\uE451"},  // 2-comma sharp
    /*  */[Code[`ac3cmsh`]]: {unicode: "\uE452"},  // 3-comma sharp
    /*  */[Code[`ac5cmsh`]]: {unicode: "\uE453"},  // 5-comma sharp
    /*  */[Code[`ac1cmfl`]]: {unicode: "\uE454"},  // 1-comma flat
    /*  */[Code[`ac2cmfl`]]: {unicode: "\uE455"},  // 2-comma flat
    /*  */[Code[`ac3cmfl`]]: {unicode: "\uE456"},  // 3-comma flat
    /*  */[Code[`ac4cmfl`]]: {unicode: "\uE457"},  // 4-comma flat
    /*  */[Code[`ackr`]]: {unicode: "\uE460"}, // Koron (quarter tone flat)
    /*  */[Code[`acsr`]]: {unicode: "\uE461"}, // Sori (quarter tone sharp)
    /*  */[Code[`acxnonthtnsh`]]: {unicode: "\uE470"}, // One-third-tone sharp (Xenakis)
    /*  */[Code[`acxntwthtnsh`]]: {unicode: "\uE471"}, // Two-third-tones sharp (Xenakis)
    /*  */[Code[`acqrtnshbs`]]: {unicode: "\uE472"},   // Quarter tone sharp (Bussotti)
    /*  */[Code[`acshonhrst`]]: {unicode: "\uE473"},   // One or three quarter tones sharp
    /*  */[Code[`acthqrtnshbs`]]: {unicode: "\uE474"}, // Three quarter tones sharp (Bussotti)
    /*  */[Code[`acqrtnshwg`]]: {unicode: "\uE475"},   // Quarter tone sharp with wiggly tail
    /*  */[Code[`actvsh`]]: {unicode: "\uE476"},   // Byzantine-style Bu\u0308yu\u0308k mu\u0308cenneb sharp (Tavener)
    /*  */[Code[`actvfl`]]: {unicode: "\uE477"},   // Byzantine-style Bakiye flat (Tavener)
    /*  */[Code[`acqrtnflpn`]]: {unicode: "\uE478"},   // Quarter tone flat (Penderecki)
    /*  */[Code[`accmslup`]]: {unicode: "\uE479"}, // Syntonic/Didymus comma (80:81) up (Bosanquet)
    /*  */[Code[`accmsldn`]]: {unicode: "\uE47A"}, // Syntonic/Didymus comma (80:81) down (Bosanquet)
    /*  */[Code[`acwlpl`]]: {unicode: "\uE47B"},   // Wilson plus (5 comma up)
    /*  */[Code[`acwlmn`]]: {unicode: "\uE47C"},   // Wilson minus (5 comma down)
    /*  */[Code[`aclgdbsh`]]: {unicode: "\uE47D", width: 11},  // Large double sharp
    /*  */[Code[`acqrtnsh4`]]: {unicode: "\uE47E"},    // Quarter-tone sharp
    /*  */[Code[`acqrtnfl4`]]: {unicode: "\uE47F"},    // Quarter-tone flat
    /*  */[Code[`acqrtnflflrv`]]: {unicode: "\uE480"}, // Filled reversed flat (quarter-tone flat)
    /*  */[Code[`acshrv`]]: {unicode: "\uE481"},   // Reversed sharp
    /*  */[Code[`acntrv`]]: {unicode: "\uE482"},   // Reversed natural
    /*  */[Code[`acdbflrv`]]: {unicode: "\uE483"}, // Reversed double flat
    /*  */[Code[`acfltr`]]: {unicode: "\uE484"},   // Turned flat
    /*  */[Code[`acdbfltr`]]: {unicode: "\uE485"}, // Turned double flat
    /*  */[Code[`acthqrtnflgr`]]: {unicode: "\uE486"}, // Three-quarter-tones flat (Grisey)
    /*  */[Code[`acthqrtnfltr`]]: {unicode: "\uE487"}, // Three-quarter-tones flat (Tartini)
    /*  */[Code[`acqrtnflvnbl`]]: {unicode: "\uE488"}, // Quarter-tone flat (van Blankenburg)
    /*  */[Code[`acthqrtnflcp`]]: {unicode: "\uE489"}, // Three-quarter-tones flat (Couper)
    /*  */[Code[`aconthtnshfr`]]: {unicode: "\uE48A"}, // One-third-tone sharp (Ferneyhough)
    /*  */[Code[`aconthtnflfr`]]: {unicode: "\uE48B"}, // One-third-tone flat (Ferneyhough)
    /*  */[Code[`actwthtnshfr`]]: {unicode: "\uE48C"}, // Two-third-tones sharp (Ferneyhough)
    /*  */[Code[`actwthtnflfr`]]: {unicode: "\uE48D"}, // Two-third-tones flat (Ferneyhough)
    /*  */[Code[`aconqrtnshfr`]]: {unicode: "\uE48E"}, // One-quarter-tone sharp (Ferneyhough)
    /*  */[Code[`aconqrtnflfr`]]: {unicode: "\uE48F"}, // One-quarter-tone flat (Ferneyhough)
    /*  */[Code[`aracab`]]: {unicode: "\uE4A0"},   // Accent above
    /*  */[Code[`aracbl`]]: {unicode: "\uE4A1"},   // Accent below
    /*  */[Code[`arstab`]]: {unicode: "\uE4A2"},   // Staccato above
    /*  */[Code[`arstbl`]]: {unicode: "\uE4A3"},   // Staccato below
    /*  */[Code[`artnab`]]: {unicode: "\uE4A4"},   // Tenuto above
    /*  */[Code[`artnbl`]]: {unicode: "\uE4A5"},   // Tenuto below
    /*  */[Code[`arssab`]]: {unicode: "\uE4A6"},   // Staccatissimo above
    /*  */[Code[`arssbl`]]: {unicode: "\uE4A7"},   // Staccatissimo below
    /*  */[Code[`arsswdab`]]: {unicode: "\uE4A8"}, // Staccatissimo wedge above
    /*  */[Code[`arsswdbl`]]: {unicode: "\uE4A9"}, // Staccatissimo wedge below
    /*  */[Code[`arssstab`]]: {unicode: "\uE4AA"}, // Staccatissimo stroke above
    /*  */[Code[`arssstbl`]]: {unicode: "\uE4AB"}, // Staccatissimo stroke below
    /*  */[Code[`armrab`]]: {unicode: "\uE4AC"},   // Marcato above
    /*  */[Code[`armrbl`]]: {unicode: "\uE4AD"},   // Marcato below
    /*  */[Code[`armrstab`]]: {unicode: "\uE4AE"}, // Marcato-staccato above
    /*  */[Code[`armrstbl`]]: {unicode: "\uE4AF"}, // Marcato-staccato below
    /*  */[Code[`aracstab`]]: {unicode: "\uE4B0"}, // Accent-staccato above
    /*  */[Code[`aracstbl`]]: {unicode: "\uE4B1"}, // Accent-staccato below
    /*  */[Code[`artnstab`]]: {unicode: "\uE4B2"}, // Lour\u00e9 (tenuto-staccato) above
    /*  */[Code[`artnstbl`]]: {unicode: "\uE4B3"}, // Lour\u00e9 (tenuto-staccato) below
    /*  */[Code[`artnacab`]]: {unicode: "\uE4B4"}, // Tenuto-accent above
    /*  */[Code[`artnacbl`]]: {unicode: "\uE4B5"}, // Tenuto-accent below
    /*  */[Code[`ariab`]]: {unicode: "\uE4B6"},    // Stress above
    /*  */[Code[`aribl`]]: {unicode: "\uE4B7"},    // Stress below
    /*  */[Code[`arunab`]]: {unicode: "\uE4B8"},   // Unstress above
    /*  */[Code[`arunbl`]]: {unicode: "\uE4B9"},   // Unstress below
    /*  */[Code[`arlsvbab`]]: {unicode: "\uE4BA"}, // Laissez vibrer (l.v.) above
    /*  */[Code[`arlsvbbl`]]: {unicode: "\uE4BB"}, // Laissez vibrer (l.v.) below
    /*  */[Code[`armrtnab`]]: {unicode: "\uE4BC"}, // Marcato-tenuto above
    /*  */[Code[`armrtnbl`]]: {unicode: "\uE4BD"}, // Marcato-tenuto below
    /*  */[Code[`frab`]]: {unicode: "\uE4C0"}, // Fermata above
    /*  */[Code[`frbl`]]: {unicode: "\uE4C1"}, // Fermata below
    /*  */[Code[`frvrshab`]]: {unicode: "\uE4C2"}, // Very short fermata above
    /*  */[Code[`frvrshbl`]]: {unicode: "\uE4C3"}, // Very short fermata below
    /*  */[Code[`frshab`]]: {unicode: "\uE4C4"}, // Short fermata above
    /*  */[Code[`frshbl`]]: {unicode: "\uE4C5"}, // Short fermata below
    /*  */[Code[`frlnab`]]: {unicode: "\uE4C6"}, // Long fermata above
    /*  */[Code[`frlnbl`]]: {unicode: "\uE4C7"}, // Long fermata below
    /*  */[Code[`frvrlnab`]]: {unicode: "\uE4C8"}, // Very long fermata above
    /*  */[Code[`frvrlnbl`]]: {unicode: "\uE4C9"}, // Very long fermata below
    /*  */[Code[`frlnhnab`]]: {unicode: "\uE4CA"}, // Long fermata (Henze) above
    /*  */[Code[`frlnhnbl`]]: {unicode: "\uE4CB"}, // Long fermata (Henze) below
    /*  */[Code[`frshhnab`]]: {unicode: "\uE4CC"}, // Short fermata (Henze) above
    /*  */[Code[`frshhnbl`]]: {unicode: "\uE4CD"}, // Short fermata (Henze) below
    /*  */[Code[`brmrcm`]]: {unicode: "\uE4CE"}, // Breath mark (comma)
    /*  */[Code[`brmrtc`]]: {unicode: "\uE4CF"}, // Breath mark (tick-like)
    /*  */[Code[`brmrup`]]: {unicode: "\uE4D0"}, // Breath mark (upbow-like)
    /*  */[Code[`cs`]]: {unicode: "\uE4D1"}, // Caesura
    /*  */[Code[`csth`]]: {unicode: "\uE4D2"}, // Thick caesura
    /*  */[Code[`cssh`]]: {unicode: "\uE4D3"}, // Short caesura
    /*  */[Code[`cscr`]]: {unicode: "\uE4D4"}, // Curved caesura
    /*  */[Code[`brmrsl`]]: {unicode: "\uE4D5"}, // Breath mark (Salzedo)
    /*  */[Code[`crsg`]]: {unicode: "\uE4D6"}, // Curlew (Britten)
    /*  */[Code[`cssnst`]]: {unicode: "\uE4D7"}, // Single stroke caesura
    /*  */[Code[`rsmx`]]: {unicode: "\uE4E0"}, // Maxima rest
    /*  */[Code[`rsln`]]: {unicode: "\uE4E1"}, // Longa rest
    /*  */[Code[`rsdbwh`]]: {unicode: "\uE4E2"}, // Double whole (breve) rest
    /*  */[Code[`rswh`]]: {unicode: "\uE4E3"}, // Whole (semibreve) rest
    /*  */[Code[`rshf`]]: {unicode: "\uE4E4"}, // Half (minim) rest
    /*  */[Code[`rsqr`]]: {unicode: "\uE4E5"}, // Quarter (crotchet) rest
    /*  */[Code[`rs8`]]: {unicode: "\uE4E6"}, // Eighth (quaver) rest
    /*  */[Code[`rs16`]]: {unicode: "\uE4E7"}, // 16th (semiquaver) rest
    /*  */[Code[`rs32`]]: {unicode: "\uE4E8"}, // 32nd (demisemiquaver) rest
    /*  */[Code[`rs64`]]: {unicode: "\uE4E9"}, // 64th (hemidemisemiquaver) rest
    /*  */[Code[`rs128`]]: {unicode: "\uE4EA"}, // 128th (semihemidemisemiquaver) rest
    /*  */[Code[`rs256`]]: {unicode: "\uE4EB"}, // 256th rest
    /*  */[Code[`rs512`]]: {unicode: "\uE4EC"}, // 512th rest
    /*  */[Code[`rs1024`]]: {unicode: "\uE4ED"}, // 1024th rest
    /*  */[Code[`rsHbr`]]: {unicode: "\uE4EE"}, // Multiple measure rest
    /*  */[Code[`rsHbrlf`]]: {unicode: "\uE4EF"}, // H-bar, left half
    /*  */[Code[`rsHbrmd`]]: {unicode: "\uE4F0"}, // H-bar, middle
    /*  */[Code[`rsHbrrt`]]: {unicode: "\uE4F1"}, // H-bar, right half
    /*  */[Code[`rsqrol`]]: {unicode: "\uE4F2"}, // Old-style quarter (crotchet) rest
    /*  */[Code[`rsdbwhlgln`]]: {unicode: "\uE4F3"}, // Double whole rest on leger lines
    /*  */[Code[`rswhlgln`]]: {unicode: "\uE4F4"}, // Whole rest on leger line
    /*  */[Code[`rshflgln`]]: {unicode: "\uE4F5"}, // Half rest on leger line
    /*  */[Code[`rsqrZ`]]: {unicode: "\uE4F6"}, // Z-style quarter (crotchet) rest
    /*  */[Code[`rp1br`]]: {unicode: "\uE500"}, // Repeat last bar
    /*  */[Code[`rp2br`]]: {unicode: "\uE501"}, // Repeat last two bars
    /*  */[Code[`rp4br`]]: {unicode: "\uE502"}, // Repeat last four bars
    /*  */[Code[`rpbrupdt`]]: {unicode: "\uE503"}, // Repeat bar upper dot
    /*  */[Code[`rpbrsl`]]: {unicode: "\uE504"}, // Repeat bar slash
    /*  */[Code[`rpbrlwdt`]]: {unicode: "\uE505"}, // Repeat bar lower dot
    /*  */[Code[`ot`]]: {unicode: "\uE510"}, // Ottava
    /*  */[Code[`otal`]]: {unicode: "\uE511"}, // Ottava alta
    /*  */[Code[`otbs`]]: {unicode: "\uE512", width: 22}, // Ottava bassa
    /*  */[Code[`otbsba`]]: {unicode: "\uE513"}, // Ottava bassa (ba)
    /*  */[Code[`qn`]]: {unicode: "\uE514"}, // Quindicesima
    /*  */[Code[`qnal`]]: {unicode: "\uE515"}, // Quindicesima alta
    /*  */[Code[`qnbs`]]: {unicode: "\uE516"}, // Quindicesima bassa
    /*  */[Code[`vn`]]: {unicode: "\uE517"}, // Ventiduesima
    /*  */[Code[`vnal`]]: {unicode: "\uE518"}, // Ventiduesima alta
    /*  */[Code[`vnbs`]]: {unicode: "\uE519"}, // Ventiduesima bassa
    /*  */[Code[`ocprlf`]]: {unicode: "\uE51A"}, // Left parenthesis for octave signs
    /*  */[Code[`ocprrt`]]: {unicode: "\uE51B"}, // Right parenthesis for octave signs
    /*  */[Code[`otbsvb`]]: {unicode: "\uE51C", width: 22}, // Ottava bassa (8vb)
    /*  */[Code[`qnbsmb`]]: {unicode: "\uE51D"}, // Quindicesima bassa (mb)
    /*  */[Code[`vnbsmb`]]: {unicode: "\uE51E"}, // Ventiduesima bassa (mb)
    /*  */[Code[`ocbs`]]: {unicode: "\uE51F"}, // Bassa
    /*  */[Code[`dypn`]]: {unicode: "\uE520"}, // Piano
    /*  */[Code[`dymz`]]: {unicode: "\uE521"}, // Mezzo
    /*  */[Code[`dyfr`]]: {unicode: "\uE522"}, // Forte
    /*  */[Code[`dyrn`]]: {unicode: "\uE523"}, // Rinforzando
    /*  */[Code[`dysf`]]: {unicode: "\uE524"}, // Sforzando
    /*  */[Code[`dyZ`]]: {unicode: "\uE525"}, // Z
    /*  */[Code[`dynn`]]: {unicode: "\uE526"}, // Niente
    /*  */[Code[`dyPPPPPP`]]: {unicode: "\uE527"}, // pppppp
    /*  */[Code[`dyPPPPP`]]: {unicode: "\uE528"}, // ppppp
    /*  */[Code[`dyPPPP`]]: {unicode: "\uE529"}, // pppp
    /*  */[Code[`dyPPP`]]: {unicode: "\uE52A"}, // ppp
    /*  */[Code[`dyPP`]]: {unicode: "\uE52B"}, // pp
    /*  */[Code[`dyMP`]]: {unicode: "\uE52C"}, // mp
    /*  */[Code[`dyMF`]]: {unicode: "\uE52D"}, // mf
    /*  */[Code[`dyPF`]]: {unicode: "\uE52E"}, // pf
    /*  */[Code[`dyFF`]]: {unicode: "\uE52F"}, // ff
    /*  */[Code[`dyFFF`]]: {unicode: "\uE530"}, // fff
    /*  */[Code[`dyFFFF`]]: {unicode: "\uE531"}, // ffff
    /*  */[Code[`dyFFFFF`]]: {unicode: "\uE532"}, // fffff
    /*  */[Code[`dyFFFFFF`]]: {unicode: "\uE533"}, // ffffff
    /*  */[Code[`dyfrpn`]]: {unicode: "\uE534"}, // Forte-piano
    /*  */[Code[`dyfz`]]: {unicode: "\uE535"}, // Forzando
    /*  */[Code[`dysf1`]]: {unicode: "\uE536"}, // Sforzando 1
    /*  */[Code[`dysfpn`]]: {unicode: "\uE537"}, // Sforzando-piano
    /*  */[Code[`dysfpp`]]: {unicode: "\uE538"}, // Sforzando-pianissimo
    /*  */[Code[`dysz`]]: {unicode: "\uE539"}, // Sforzato
    /*  */[Code[`dyszpn`]]: {unicode: "\uE53A"}, // Sforzato-piano
    /*  */[Code[`dyszFF`]]: {unicode: "\uE53B"}, // Sforzatissimo
    /*  */[Code[`dyrn1`]]: {unicode: "\uE53C"}, // Rinforzando 1
    /*  */[Code[`dyrn2`]]: {unicode: "\uE53D"}, // Rinforzando 2
    /*  */[Code[`dycrhr`]]: {unicode: "\uE53E"}, // Crescendo
    /*  */[Code[`dydmhr`]]: {unicode: "\uE53F"}, // Diminuendo
    /*  */[Code[`dymsdivc`]]: {unicode: "\uE540"}, // Messa di voce
    /*  */[Code[`dynnfrhr`]]: {unicode: "\uE541"}, // Niente (for hairpins)
    /*  */[Code[`dyhrprlf`]]: {unicode: "\uE542"}, // Left parenthesis (for hairpins)
    /*  */[Code[`dyhrprrt`]]: {unicode: "\uE543"}, // Right parenthesis (for hairpins)
    /*  */[Code[`dyhrbklf`]]: {unicode: "\uE544"}, // Left bracket (for hairpins)
    /*  */[Code[`dyhrbkrt`]]: {unicode: "\uE545"}, // Right bracket (for hairpins)
    /*  */[Code[`dycmspcl`]]: {unicode: "\uE546"}, // Colon separator for combined dynamics
    /*  */[Code[`dycmsphy`]]: {unicode: "\uE547"}, // Hyphen separator for combined dynamics
    /*  */[Code[`dycmspsp`]]: {unicode: "\uE548"}, // Space separator for combined dynamics
    /*  */[Code[`dycmspsl`]]: {unicode: "\uE549"}, // Slash separator for combined dynamics
    /*  */[Code[`lyelnr`]]: {unicode: "\uE550"}, // Narrow elision
    /*  */[Code[`lyel`]]: {unicode: "\uE551"}, // Elision
    /*  */[Code[`lyelwd`]]: {unicode: "\uE552"}, // Wide elision
    /*  */[Code[`lyhybs`]]: {unicode: "\uE553"}, // Baseline hyphen
    /*  */[Code[`lyhybsnnbr`]]: {unicode: "\uE554"}, // Non-breaking baseline hyphen
    /*  */[Code[`lytxrp`]]: {unicode: "\uE555"}, // Text repeats
    /*  */[Code[`grntacsmup`]]: {unicode: "\uE560"}, // Slashed grace note stem up
    /*  */[Code[`grntacsmdn`]]: {unicode: "\uE561"}, // Slashed grace note stem down
    /*  */[Code[`grntapsmup`]]: {unicode: "\uE562"}, // Grace note stem up
    /*  */[Code[`grntapsmdn`]]: {unicode: "\uE563"}, // Grace note stem down
    /*  */[Code[`grntslsmup`]]: {unicode: "\uE564"}, // Slash for stem up grace note
    /*  */[Code[`grntslsmdn`]]: {unicode: "\uE565"}, // Slash for stem down grace note
    /*  */[Code[`ortr`]]: {unicode: "\uE566"}, // Trill
    /*  */[Code[`ortn`]]: {unicode: "\uE567"}, // Turn
    /*  */[Code[`ortnin`]]: {unicode: "\uE568"}, // Inverted turn
    /*  */[Code[`ortnsl`]]: {unicode: "\uE569"}, // Turn with slash
    /*  */[Code[`ortnup`]]: {unicode: "\uE56A"}, // Turn up
    /*  */[Code[`ortnupS`]]: {unicode: "\uE56B"}, // Inverted turn up
    /*  */[Code[`orshtr`]]: {unicode: "\uE56C"}, // Short trill
    /*  */[Code[`ormr`]]: {unicode: "\uE56D"}, // Mordent
    /*  */[Code[`ortm`]]: {unicode: "\uE56E"}, // Tremblement
    /*  */[Code[`orhy`]]: {unicode: "\uE56F"}, // Haydn ornament
    /*  */[Code[`orprdevxV`]]: {unicode: "\uE570"}, // Port de voix
    /*  */[Code[`orrtfchfcr`]]: {unicode: "\uE571"}, // Right-facing half circle
    /*  */[Code[`orlffchfcr`]]: {unicode: "\uE572"}, // Left-facing half circle
    /*  */[Code[`orrtfchk`]]: {unicode: "\uE573"}, // Right-facing hook
    /*  */[Code[`orlffchk`]]: {unicode: "\uE574"}, // Left-facing hook
    /*  */[Code[`orhkbfnt`]]: {unicode: "\uE575"}, // Hook before note
    /*  */[Code[`orhkafnt`]]: {unicode: "\uE576"}, // Hook after note
    /*  */[Code[`orupcr`]]: {unicode: "\uE577"}, // Curve above
    /*  */[Code[`ordncr`]]: {unicode: "\uE578"}, // Curve below
    /*  */[Code[`orshoblnbfnt`]]: {unicode: "\uE579"}, // Short oblique straight line SW-NE
    /*  */[Code[`orshoblnafnt`]]: {unicode: "\uE57A"}, // Short oblique straight line NW-SE
    /*  */[Code[`oroblnbfnt`]]: {unicode: "\uE57B"}, // Oblique straight line SW-NE
    /*  */[Code[`oroblnafnt`]]: {unicode: "\uE57C"}, // Oblique straight line NW-SE
    /*  */[Code[`ordboblnbfnt`]]: {unicode: "\uE57D"}, // Double oblique straight lines SW-NE
    /*  */[Code[`ordboblnafnt`]]: {unicode: "\uE57E"}, // Double oblique straight lines NW-SE
    /*  */[Code[`oroblnhrbfnt`]]: {unicode: "\uE57F"}, // Oblique straight line tilted SW-NE
    /*  */[Code[`oroblnhrafnt`]]: {unicode: "\uE580"}, // Oblique straight line tilted NW-SE
    /*  */[Code[`orcm`]]: {unicode: "\uE581"}, // Comma
    /*  */[Code[`orsh3`]]: {unicode: "\uE582"}, // Shake
    /*  */[Code[`orvrln`]]: {unicode: "\uE583"}, // Vertical line
    /*  */[Code[`orshmf1`]]: {unicode: "\uE584"}, // Shake (Muffat)
    /*  */[Code[`glup`]]: {unicode: "\uE585"}, // Glissando up
    /*  */[Code[`gldn`]]: {unicode: "\uE586"}, // Glissando down
    /*  */[Code[`orsc`]]: {unicode: "\uE587"}, // Schleifer (long mordent)
    /*  */[Code[`orpncp`]]: {unicode: "\uE588"}, // Pinc\u00e9 (Couperin)
    /*  */[Code[`ortmcp`]]: {unicode: "\uE589"}, // Tremblement appuy\u00e9 (Couperin)
    /*  */[Code[`ortplfccst`]]: {unicode: "\uE590"}, // Ornament top left concave stroke
    /*  */[Code[`ortplfcvst`]]: {unicode: "\uE591"}, // Ornament top left convex stroke
    /*  */[Code[`orhglfccst`]]: {unicode: "\uE592"}, // Ornament high left concave stroke
    /*  */[Code[`orhglfcvst`]]: {unicode: "\uE593"}, // Ornament high left convex stroke
    /*  */[Code[`orlfvrst`]]: {unicode: "\uE594"}, // Ornament left vertical stroke
    /*  */[Code[`orlfvrstwtcr`]]: {unicode: "\uE595"}, // Ornament left vertical stroke with cross (+)
    /*  */[Code[`orlfshT`]]: {unicode: "\uE596"}, // Ornament left shake t
    /*  */[Code[`orlfpl`]]: {unicode: "\uE597"}, // Ornament left +
    /*  */[Code[`orlwlfccst`]]: {unicode: "\uE598"}, // Ornament low left concave stroke
    /*  */[Code[`orlwlfcvst`]]: {unicode: "\uE599"}, // Ornament low left convex stroke
    /*  */[Code[`orbtlfccst`]]: {unicode: "\uE59A"}, // Ornament bottom left concave stroke
    /*  */[Code[`orbtlfccstlg`]]: {unicode: "\uE59B"}, // Ornament bottom left concave stroke, large
    /*  */[Code[`orbtlfcvst`]]: {unicode: "\uE59C"}, // Ornament bottom left convex stroke
    /*  */[Code[`orzgzglnnorten`]]: {unicode: "\uE59D"}, // Ornament zig-zag line without right-hand end
    /*  */[Code[`orzgzglnwtrten`]]: {unicode: "\uE59E"}, // Ornament zig-zag line with right-hand end
    /*  */[Code[`ormdvrst`]]: {unicode: "\uE59F"}, // Ornament middle vertical stroke
    /*  */[Code[`ortprtccst`]]: {unicode: "\uE5A0"}, // Ornament top right concave stroke
    /*  */[Code[`ortprtcvst`]]: {unicode: "\uE5A1"}, // Ornament top right convex stroke
    /*  */[Code[`orhgrtccst`]]: {unicode: "\uE5A2"}, // Ornament high right concave stroke
    /*  */[Code[`orhgrtcvst`]]: {unicode: "\uE5A3"}, // Ornament high right convex stroke
    /*  */[Code[`orrtvrst`]]: {unicode: "\uE5A4"}, // Ornament right vertical stroke
    /*  */[Code[`orlwrtccst`]]: {unicode: "\uE5A5"}, // Ornament low right concave stroke
    /*  */[Code[`orlwrtcvst`]]: {unicode: "\uE5A6"}, // Ornament low right convex stroke
    /*  */[Code[`orbtrtccst`]]: {unicode: "\uE5A7"}, // Ornament bottom right concave stroke
    /*  */[Code[`orbtrtcvst`]]: {unicode: "\uE5A8"}, // Ornament bottom right convex stroke
    /*  */[Code[`orprsl`]]: {unicode: "\uE5B0"}, // Slide
    /*  */[Code[`orprdssl`]]: {unicode: "\uE5B1"}, // Descending slide
    /*  */[Code[`orpraptr`]]: {unicode: "\uE5B2"}, // Supported appoggiatura trill
    /*  */[Code[`orpraptrsf`]]: {unicode: "\uE5B3"}, // Supported appoggiatura trill with two-note suffix
    /*  */[Code[`orprtntrDan`]]: {unicode: "\uE5B4"}, // Turn-trill (D'Anglebert)
    /*  */[Code[`orprsltrDan`]]: {unicode: "\uE5B5"}, // Slide-trill (D'Anglebert)
    /*  */[Code[`orprsltrmr`]]: {unicode: "\uE5B6"}, // Slide-trill with one-note suffix (Marpurg)
    /*  */[Code[`orprtntrbc`]]: {unicode: "\uE5B7"}, // Turn-trill with two-note suffix (J.S. Bach)
    /*  */[Code[`orprsltrbc`]]: {unicode: "\uE5B8"}, // Slide-trill with two-note suffix (J.S. Bach)
    /*  */[Code[`orprsltrmf`]]: {unicode: "\uE5B9"}, // Slide-trill (Muffat)
    /*  */[Code[`orprsltrsfmf`]]: {unicode: "\uE5BA"}, // Slide-trill with two-note suffix (Muffat)
    /*  */[Code[`orprtrsfdn`]]: {unicode: "\uE5BB"}, // Trill with two-note suffix (Dandrieu)
    /*  */[Code[`orprprdevxmr`]]: {unicode: "\uE5BC"}, // Pre-beat port de voix followed by multiple mordent (Dandrieu)
    /*  */[Code[`orprtrwtmr`]]: {unicode: "\uE5BD"}, // Trill with mordent
    /*  */[Code[`orprcd`]]: {unicode: "\uE5BE"}, // Cadence
    /*  */[Code[`orprcdwttn`]]: {unicode: "\uE5BF"}, // Cadence with turn
    /*  */[Code[`orprdbcdlwpr`]]: {unicode: "\uE5C0"}, // Double cadence with lower prefix
    /*  */[Code[`orprcduppr`]]: {unicode: "\uE5C1"}, // Cadence with upper prefix
    /*  */[Code[`orprcdupprtn`]]: {unicode: "\uE5C2"}, // Cadence with upper prefix and turn
    /*  */[Code[`orprdbcduppr`]]: {unicode: "\uE5C3"}, // Double cadence with upper prefix
    /*  */[Code[`orprdbcdupprtn`]]: {unicode: "\uE5C4"}, // Double cadence with upper prefix and turn
    /*  */[Code[`orprmrrl`]]: {unicode: "\uE5C5"}, // Mordent with release
    /*  */[Code[`orprmruppr`]]: {unicode: "\uE5C6"}, // Mordent with upper prefix
    /*  */[Code[`orprinmruppr`]]: {unicode: "\uE5C7"}, // Inverted mordent with upper prefix
    /*  */[Code[`orprtrlwsf`]]: {unicode: "\uE5C8"}, // Trill with lower suffix
    /*  */[Code[`brsc`]]: {unicode: "\uE5D0"}, // Scoop
    /*  */[Code[`brlfsh`]]: {unicode: "\uE5D1"}, // Lift, short
    /*  */[Code[`brlfmd`]]: {unicode: "\uE5D2"}, // Lift, medium
    /*  */[Code[`brlfln`]]: {unicode: "\uE5D3"}, // Lift, long
    /*  */[Code[`brdtsh`]]: {unicode: "\uE5D4"}, // Doit, short
    /*  */[Code[`brdtmd`]]: {unicode: "\uE5D5"}, // Doit, medium
    /*  */[Code[`brdtln`]]: {unicode: "\uE5D6"}, // Doit, long
    /*  */[Code[`brfllpsh`]]: {unicode: "\uE5D7"}, // Lip fall, short
    /*  */[Code[`brfllpmd`]]: {unicode: "\uE5D8"}, // Lip fall, medium
    /*  */[Code[`brfllpln`]]: {unicode: "\uE5D9"}, // Lip fall, long
    /*  */[Code[`brflsmsh`]]: {unicode: "\uE5DA"}, // Smooth fall, short
    /*  */[Code[`brflsmmd`]]: {unicode: "\uE5DB"}, // Smooth fall, medium
    /*  */[Code[`brflsmln`]]: {unicode: "\uE5DC"}, // Smooth fall, long
    /*  */[Code[`brflrgsh`]]: {unicode: "\uE5DD"}, // Rough fall, short
    /*  */[Code[`brflrgmd`]]: {unicode: "\uE5DE"}, // Rough fall, medium
    /*  */[Code[`brflrgln`]]: {unicode: "\uE5DF"}, // Rough fall, long
    /*  */[Code[`brpl`]]: {unicode: "\uE5E0"}, // Plop
    /*  */[Code[`brfl`]]: {unicode: "\uE5E1"}, // Flip
    /*  */[Code[`brsm`]]: {unicode: "\uE5E2"}, // Smear
    /*  */[Code[`brbn`]]: {unicode: "\uE5E3"}, // Bend
    /*  */[Code[`brjztn`]]: {unicode: "\uE5E4"}, // Jazz turn
    /*  */[Code[`brmtcl`]]: {unicode: "\uE5E5"}, // Muted (closed)
    /*  */[Code[`brmthfcl`]]: {unicode: "\uE5E6"}, // Half-muted (half-closed)
    /*  */[Code[`brmtop`]]: {unicode: "\uE5E7"}, // Open
    /*  */[Code[`brhrmtcl`]]: {unicode: "\uE5E8"}, // Harmon mute, stem in
    /*  */[Code[`brhrmtsmhflf`]]: {unicode: "\uE5E9"}, // Harmon mute, stem extended, left
    /*  */[Code[`brhrmtsmhfrt`]]: {unicode: "\uE5EA"}, // Harmon mute, stem extended, right
    /*  */[Code[`brhrmtsmop`]]: {unicode: "\uE5EB"}, // Harmon mute, stem out
    /*  */[Code[`brlfsmsh`]]: {unicode: "\uE5EC"}, // Smooth lift, short
    /*  */[Code[`brlfsmmd`]]: {unicode: "\uE5ED"}, // Smooth lift, medium
    /*  */[Code[`brlfsmln`]]: {unicode: "\uE5EE"}, // Smooth lift, long
    /*  */[Code[`brvltr`]]: {unicode: "\uE5EF"}, // Valve trill
    /*  */[Code[`dbtnab`]]: {unicode: "\uE5F0"}, // Double-tongue above
    /*  */[Code[`dbtnbl`]]: {unicode: "\uE5F1"}, // Double-tongue below
    /*  */[Code[`trtnab`]]: {unicode: "\uE5F2"}, // Triple-tongue above
    /*  */[Code[`trtnbl`]]: {unicode: "\uE5F3"}, // Triple-tongue below
    /*  */[Code[`wnclhl`]]: {unicode: "\uE5F4"}, // Closed hole
    /*  */[Code[`wnthqrclhl`]]: {unicode: "\uE5F5"}, // Three-quarters closed hole
    /*  */[Code[`wnhfclhl1`]]: {unicode: "\uE5F6"}, // Half-closed hole
    /*  */[Code[`wnhfclhl2`]]: {unicode: "\uE5F7"}, // Half-closed hole 2
    /*  */[Code[`wnhfclhl3`]]: {unicode: "\uE5F8"}, // Half-open hole
    /*  */[Code[`wnophl`]]: {unicode: "\uE5F9"}, // Open hole
    /*  */[Code[`wntrky`]]: {unicode: "\uE5FA"}, // Trill key
    /*  */[Code[`wnflem`]]: {unicode: "\uE5FB"}, // Flatter embouchure
    /*  */[Code[`wnshem`]]: {unicode: "\uE5FC"}, // Sharper embouchure
    /*  */[Code[`wnrlem`]]: {unicode: "\uE5FD"}, // Relaxed embouchure
    /*  */[Code[`wnlsrlem`]]: {unicode: "\uE5FE"}, // Somewhat relaxed embouchure
    /*  */[Code[`wnttem`]]: {unicode: "\uE5FF"}, // Tight embouchure
    /*  */[Code[`wnlsttem`]]: {unicode: "\uE600"}, // Somewhat tight embouchure
    /*  */[Code[`wnvrttem`]]: {unicode: "\uE601"}, // Very tight embouchure
    /*  */[Code[`wnwkarpr`]]: {unicode: "\uE602"}, // Very relaxed embouchure / weak air-pressure
    /*  */[Code[`wnstarpr`]]: {unicode: "\uE603"}, // Very tight embouchure / strong air pressure
    /*  */[Code[`wnrdpsnr`]]: {unicode: "\uE604"}, // Normal reed position
    /*  */[Code[`wnrdpsot`]]: {unicode: "\uE605"}, // Very little reed (pull outwards)
    /*  */[Code[`wnrdpsin`]]: {unicode: "\uE606"}, // Much more reed (push inwards)
    /*  */[Code[`wnmlblsm`]]: {unicode: "\uE607"}, // Combining multiphonics (black) for stem
    /*  */[Code[`wnmlwtsm`]]: {unicode: "\uE608"}, // Combining multiphonics (white) for stem
    /*  */[Code[`wnmlblwtsm`]]: {unicode: "\uE609"}, // Combining multiphonics (black and white) for stem
    /*  */[Code[`wnmtpp`]]: {unicode: "\uE60A"}, // Mouthpiece or hand pop
    /*  */[Code[`wnrmon`]]: {unicode: "\uE60B"}, // Rim only
    /*  */[Code[`srdnbw`]]: {unicode: "\uE610"}, // Down bow
    /*  */[Code[`srdnbwtr`]]: {unicode: "\uE611"}, // Turned down bow
    /*  */[Code[`srupbw`]]: {unicode: "\uE612"}, // Up bow
    /*  */[Code[`srupbwtr`]]: {unicode: "\uE613"}, // Turned up bow
    /*  */[Code[`srhr`]]: {unicode: "\uE614"}, // Harmonic
    /*  */[Code[`srhfhr`]]: {unicode: "\uE615"}, // Half-harmonic
    /*  */[Code[`srmton`]]: {unicode: "\uE616"}, // Mute on
    /*  */[Code[`srmtof`]]: {unicode: "\uE617"}, // Mute off
    /*  */[Code[`srbwbhbr`]]: {unicode: "\uE618"}, // Bow behind bridge (sul ponticello)
    /*  */[Code[`srbwonbr`]]: {unicode: "\uE619"}, // Bow on top of bridge
    /*  */[Code[`srbwontl`]]: {unicode: "\uE61A"}, // Bow on tailpiece
    /*  */[Code[`srovdnbw`]]: {unicode: "\uE61B"}, // Overpressure, down bow
    /*  */[Code[`srovupbw`]]: {unicode: "\uE61C"}, // Overpressure, up bow
    /*  */[Code[`srovpsdnbw`]]: {unicode: "\uE61D"}, // Overpressure possibile, down bow
    /*  */[Code[`srovpsupbw`]]: {unicode: "\uE61E"}, // Overpressure possibile, up bow
    /*  */[Code[`srovnodr`]]: {unicode: "\uE61F"}, // Overpressure, no bow direction
    /*  */[Code[`srjtab`]]: {unicode: "\uE620"}, // Jet\u00e9 (gettato) above
    /*  */[Code[`srjtbl`]]: {unicode: "\uE621"}, // Jet\u00e9 (gettato) below
    /*  */[Code[`srft`]]: {unicode: "\uE622"}, // Fouett\u00e9
    /*  */[Code[`srvbpl`]]: {unicode: "\uE623"}, // Vibrato pulse accent (Saunders) for stem
    /*  */[Code[`srtmps`]]: {unicode: "\uE624"}, // Thumb position
    /*  */[Code[`srtmpstr`]]: {unicode: "\uE625"}, // Turned thumb position
    /*  */[Code[`srchbwdr`]]: {unicode: "\uE626"}, // Change bow direction, indeterminate
    /*  */[Code[`srbwbhbronst`]]: {unicode: "\uE627"}, // Bow behind bridge on one string
    /*  */[Code[`srbwbhbrtwsr`]]: {unicode: "\uE628"}, // Bow behind bridge on two strings
    /*  */[Code[`srbwbhbrthsr`]]: {unicode: "\uE629"}, // Bow behind bridge on three strings
    /*  */[Code[`srbwbhbrfrsr`]]: {unicode: "\uE62A"}, // Bow behind bridge on four strings
    /*  */[Code[`plsnpzbl`]]: {unicode: "\uE630"}, // Snap pizzicato below
    /*  */[Code[`plsnpzab`]]: {unicode: "\uE631"}, // Snap pizzicato above
    /*  */[Code[`plbzpz`]]: {unicode: "\uE632"}, // Buzz pizzicato
    /*  */[Code[`pllfhnpz`]]: {unicode: "\uE633"}, // Left-hand pizzicato
    /*  */[Code[`arup`]]: {unicode: "\uE634"}, // Arpeggiato up
    /*  */[Code[`ardn`]]: {unicode: "\uE635"}, // Arpeggiato down
    /*  */[Code[`plwtfn`]]: {unicode: "\uE636"}, // With fingernails
    /*  */[Code[`plfnfl`]]: {unicode: "\uE637"}, // Fingernail flick
    /*  */[Code[`pldm`]]: {unicode: "\uE638"}, // Damp
    /*  */[Code[`pldmal`]]: {unicode: "\uE639"}, // Damp all
    /*  */[Code[`plpl`]]: {unicode: "\uE63A"}, // Plectrum
    /*  */[Code[`pldmonsm`]]: {unicode: "\uE63B"}, // Damp for stem
    /*  */[Code[`ar`]]: {unicode: "\uE63C"}, // Arpeggiato
    /*  */[Code[`vcmtcl`]]: {unicode: "\uE640"}, // Mouth closed
    /*  */[Code[`vcmtslop`]]: {unicode: "\uE641"}, // Mouth slightly open
    /*  */[Code[`vcmtop`]]: {unicode: "\uE642"}, // Mouth open
    /*  */[Code[`vcmtwdop`]]: {unicode: "\uE643"}, // Mouth wide open
    /*  */[Code[`vcmtpr`]]: {unicode: "\uE644"}, // Mouth pursed
    /*  */[Code[`vcsp`]]: {unicode: "\uE645"}, // Sprechgesang
    /*  */[Code[`vcss`]]: {unicode: "\uE646"}, // Combining sussurando for stem
    /*  */[Code[`vcnsvc`]]: {unicode: "\uE647"}, // Nasal voice
    /*  */[Code[`vctnclsh`]]: {unicode: "\uE648"}, // Tongue click (Stockhausen)
    /*  */[Code[`vcficlsh`]]: {unicode: "\uE649"}, // Finger click (Stockhausen)
    /*  */[Code[`vctnficlsh`]]: {unicode: "\uE64A"}, // Tongue and finger click (Stockhausen)
    /*  */[Code[`vchlgs`]]: {unicode: "\uE64B"}, // Halb gesungen (semi-sprechgesang)
    /*  */[Code[`kbpdpd`]]: {unicode: "\uE650"}, // Pedal mark
    /*  */[Code[`kbpdP`]]: {unicode: "\uE651"}, // Pedal P
    /*  */[Code[`kbpdE`]]: {unicode: "\uE652"}, // Pedal e
    /*  */[Code[`kbpdD`]]: {unicode: "\uE653"}, // Pedal d
    /*  */[Code[`kbpddt`]]: {unicode: "\uE654"}, // Pedal dot
    /*  */[Code[`kbpdup`]]: {unicode: "\uE655"}, // Pedal up mark
    /*  */[Code[`kbpdhf`]]: {unicode: "\uE656"}, // Half-pedal mark
    /*  */[Code[`kbpdupnt`]]: {unicode: "\uE657"}, // Pedal up notch
    /*  */[Code[`kbpdhy`]]: {unicode: "\uE658"}, // Pedal hyphen
    /*  */[Code[`kbpdss`]]: {unicode: "\uE659"}, // Sostenuto pedal mark
    /*  */[Code[`kbpdS`]]: {unicode: "\uE65A"}, // Pedal S
    /*  */[Code[`kbpdhf2`]]: {unicode: "\uE65B"}, // Half pedal mark 1
    /*  */[Code[`kbpdhf3`]]: {unicode: "\uE65C"}, // Half pedal mark 2
    /*  */[Code[`kbpdupsp`]]: {unicode: "\uE65D"}, // Pedal up special
    /*  */[Code[`kblfpdpc`]]: {unicode: "\uE65E"}, // Left pedal pictogram
    /*  */[Code[`kbmdpdpc`]]: {unicode: "\uE65F"}, // Middle pedal pictogram
    /*  */[Code[`kbrtpdpc`]]: {unicode: "\uE660"}, // Right pedal pictogram
    /*  */[Code[`kbpdhl1`]]: {unicode: "\uE661"}, // Pedal heel 1
    /*  */[Code[`kbpdhl2`]]: {unicode: "\uE662"}, // Pedal heel 2
    /*  */[Code[`kbpdhl3`]]: {unicode: "\uE663"}, // Pedal heel 3 (Davis)
    /*  */[Code[`kbpdto1`]]: {unicode: "\uE664"}, // Pedal toe 1
    /*  */[Code[`kbpdto2`]]: {unicode: "\uE665"}, // Pedal toe 2
    /*  */[Code[`kbpdhlto`]]: {unicode: "\uE666"}, // Pedal heel or toe
    /*  */[Code[`kbplin`]]: {unicode: "\uE667"}, // Pluck strings inside piano (Maderna)
    /*  */[Code[`kbbb2dsab`]]: {unicode: "\uE668"}, // Clavichord bebung, 2 finger movements (above)
    /*  */[Code[`kbbb2dsbl`]]: {unicode: "\uE669"}, // Clavichord bebung, 2 finger movements (below)
    /*  */[Code[`kbbb3dsab`]]: {unicode: "\uE66A"}, // Clavichord bebung, 3 finger movements (above)
    /*  */[Code[`kbbb3dsbl`]]: {unicode: "\uE66B"}, // Clavichord bebung, 3 finger movements (below)
    /*  */[Code[`kbbb4dsab`]]: {unicode: "\uE66C"}, // Clavichord bebung, 4 finger movements (above)
    /*  */[Code[`kbbb4dsbl`]]: {unicode: "\uE66D"}, // Clavichord bebung, 4 finger movements (below)
    /*  */[Code[`kbplwtRH`]]: {unicode: "\uE66E"}, // Play with right hand
    /*  */[Code[`kbplwtRHen`]]: {unicode: "\uE66F"}, // Play with right hand (end)
    /*  */[Code[`kbplwtLH`]]: {unicode: "\uE670"}, // Play with left hand
    /*  */[Code[`kbplwtLHen`]]: {unicode: "\uE671"}, // Play with left hand (end)
    /*  */[Code[`kbpdhkst`]]: {unicode: "\uE672"}, // Pedal hook start
    /*  */[Code[`kbpdhken`]]: {unicode: "\uE673"}, // Pedal hook end
    /*  */[Code[`kbpdhltoto`]]: {unicode: "\uE674"}, // Pedal heel to toe
    /*  */[Code[`kbpdtotohl`]]: {unicode: "\uE675"}, // Pedal toe to heel
    /*  */[Code[`kbpdprlf`]]: {unicode: "\uE676"}, // Left parenthesis for pedal marking
    /*  */[Code[`kbpdprrt`]]: {unicode: "\uE677"}, // Right parenthesis for pedal marking
    /*  */[Code[`hppdrs`]]: {unicode: "\uE680"}, // Harp pedal raised (flat)
    /*  */[Code[`hppdcn`]]: {unicode: "\uE681"}, // Harp pedal centered (natural)
    /*  */[Code[`hppdlw`]]: {unicode: "\uE682"}, // Harp pedal lowered (sharp)
    /*  */[Code[`hppddv`]]: {unicode: "\uE683"}, // Harp pedal divider
    /*  */[Code[`hpslslwtsp`]]: {unicode: "\uE684"}, // Slide with suppleness (Salzedo)
    /*  */[Code[`hpslobfl`]]: {unicode: "\uE685"}, // Oboic flux (Salzedo)
    /*  */[Code[`hpslthef`]]: {unicode: "\uE686"}, // Thunder effect (Salzedo)
    /*  */[Code[`hpslwhsn`]]: {unicode: "\uE687"}, // Whistling sounds (Salzedo)
    /*  */[Code[`hpslmtsn`]]: {unicode: "\uE688"}, // Metallic sounds (Salzedo)
    /*  */[Code[`hpsltatasn`]]: {unicode: "\uE689"}, // Tam-tam sounds (Salzedo)
    /*  */[Code[`hpslplupen`]]: {unicode: "\uE68A"}, // Play at upper end of strings (Salzedo)
    /*  */[Code[`hpsltmsn`]]: {unicode: "\uE68B"}, // Timpanic sounds (Salzedo)
    /*  */[Code[`hpslmftt`]]: {unicode: "\uE68C"}, // Muffle totally (Salzedo)
    /*  */[Code[`hpslflsnlf`]]: {unicode: "\uE68D"}, // Fluidic sounds, left hand (Salzedo)
    /*  */[Code[`hpslflsnrt`]]: {unicode: "\uE68E"}, // Fluidic sounds, right hand (Salzedo)
    /*  */[Code[`hpmtrd`]]: {unicode: "\uE68F"}, // Metal rod pictogram
    /*  */[Code[`hptnky`]]: {unicode: "\uE690"}, // Tuning key pictogram
    /*  */[Code[`hptnkyhn`]]: {unicode: "\uE691"}, // Use handle of tuning key pictogram
    /*  */[Code[`hptnkysh`]]: {unicode: "\uE692"}, // Use shank of tuning key pictogram
    /*  */[Code[`hptnkygl`]]: {unicode: "\uE693"}, // Retune strings for glissando
    /*  */[Code[`hpstnssm`]]: {unicode: "\uE694"}, // Combining string noise for stem
    /*  */[Code[`hpslalas`]]: {unicode: "\uE695"}, // Ascending aeolian chords (Salzedo)
    /*  */[Code[`hpslalds`]]: {unicode: "\uE696"}, // Descending aeolian chords (Salzedo)
    /*  */[Code[`hpsldmlwsr`]]: {unicode: "\uE697"}, // Damp only low strings (Salzedo)
    /*  */[Code[`hpsldmbthn`]]: {unicode: "\uE698"}, // Damp with both hands (Salzedo)
    /*  */[Code[`hpsldmbl`]]: {unicode: "\uE699"}, // Damp below (Salzedo)
    /*  */[Code[`hpsldmab`]]: {unicode: "\uE69A"}, // Damp above (Salzedo)
    /*  */[Code[`hpslmtsnonst`]]: {unicode: "\uE69B"}, // Metallic sounds, one string (Salzedo)
    /*  */[Code[`hpslissn`]]: {unicode: "\uE69C"}, // Isolated sounds (Salzedo)
    /*  */[Code[`hpslsndr`]]: {unicode: "\uE69D"}, // Snare drum effect (Salzedo)
    /*  */[Code[`pcgl`]]: {unicode: "\uE6A0"}, // Glockenspiel
    /*  */[Code[`pcxy`]]: {unicode: "\uE6A1"}, // Xylophone
    /*  */[Code[`pcxytn`]]: {unicode: "\uE6A2"}, // Tenor xylophone
    /*  */[Code[`pcxybs`]]: {unicode: "\uE6A3"}, // Bass xylophone
    /*  */[Code[`pcxytr`]]: {unicode: "\uE6A4"}, // Trough xylophone
    /*  */[Code[`pcxytntr`]]: {unicode: "\uE6A5"}, // Trough tenor xylophone
    /*  */[Code[`pcmr`]]: {unicode: "\uE6A6"}, // Marimba
    /*  */[Code[`pcvb`]]: {unicode: "\uE6A7"}, // Vibraphone
    /*  */[Code[`pcvbmtof`]]: {unicode: "\uE6A8"}, // Metallophone (vibraphone motor off)
    /*  */[Code[`pcemtr`]]: {unicode: "\uE6A9"}, // Empty trapezoid
    /*  */[Code[`pcglsmbr`]]: {unicode: "\uE6AA"}, // Glockenspiel (Smith Brindle)
    /*  */[Code[`pcxysmbr`]]: {unicode: "\uE6AB"}, // Xylophone (Smith Brindle)
    /*  */[Code[`pcmrsmbr`]]: {unicode: "\uE6AC"}, // Marimba (Smith Brindle)
    /*  */[Code[`pcvbsmbr`]]: {unicode: "\uE6AD"}, // Vibraphone (Smith Brindle)
    /*  */[Code[`pccr`]]: {unicode: "\uE6AE"}, // Crotales
    /*  */[Code[`pcstdr`]]: {unicode: "\uE6AF"}, // Steel drums
    /*  */[Code[`pcce`]]: {unicode: "\uE6B0"}, // Celesta
    /*  */[Code[`pclt`]]: {unicode: "\uE6B1"}, // Lithophone
    /*  */[Code[`pctp`]]: {unicode: "\uE6B2"}, // Tubaphone
    /*  */[Code[`pctbbl`]]: {unicode: "\uE6C0"}, // Tubular bells
    /*  */[Code[`pcwnchgl`]]: {unicode: "\uE6C1"}, // Wind chimes (glass)
    /*  */[Code[`pcch`]]: {unicode: "\uE6C2"}, // Chimes
    /*  */[Code[`pcbmch`]]: {unicode: "\uE6C3"}, // Bamboo tube chimes
    /*  */[Code[`pcshch`]]: {unicode: "\uE6C4"}, // Shell chimes
    /*  */[Code[`pcgltbch`]]: {unicode: "\uE6C5"}, // Glass tube chimes
    /*  */[Code[`pcglplch`]]: {unicode: "\uE6C6"}, // Glass plate chimes
    /*  */[Code[`pcmttbch`]]: {unicode: "\uE6C7"}, // Metal tube chimes
    /*  */[Code[`pcmtplch`]]: {unicode: "\uE6C8"}, // Metal plate chimes
    /*  */[Code[`pctm`]]: {unicode: "\uE6D0"}, // Timpani
    /*  */[Code[`pcsndr`]]: {unicode: "\uE6D1"}, // Snare drum
    /*  */[Code[`pcsndrsnof`]]: {unicode: "\uE6D2"}, // Snare drum, snares off
    /*  */[Code[`pcsndrml`]]: {unicode: "\uE6D3"}, // Military snare drum
    /*  */[Code[`pcbsdr`]]: {unicode: "\uE6D4"}, // Bass drum
    /*  */[Code[`pcbsdronsd`]]: {unicode: "\uE6D5"}, // Bass drum on side
    /*  */[Code[`pctndr`]]: {unicode: "\uE6D6"}, // Tenor drum
    /*  */[Code[`pctoto`]]: {unicode: "\uE6D7"}, // Tom-tom
    /*  */[Code[`pctotoch`]]: {unicode: "\uE6D8"}, // Chinese tom-tom
    /*  */[Code[`pctotojp`]]: {unicode: "\uE6D9"}, // Japanese tom-tom
    /*  */[Code[`pctotoinam`]]: {unicode: "\uE6DA"}, // Indo-American tom tom
    /*  */[Code[`pctn`]]: {unicode: "\uE6DB"}, // Tambourine
    /*  */[Code[`pcti`]]: {unicode: "\uE6DC"}, // Timbales
    /*  */[Code[`pcbn`]]: {unicode: "\uE6DD"}, // Bongos
    /*  */[Code[`pccg`]]: {unicode: "\uE6DE"}, // Conga
    /*  */[Code[`pclgdr`]]: {unicode: "\uE6DF"}, // Log drum
    /*  */[Code[`pcsldr`]]: {unicode: "\uE6E0"}, // Slit drum
    /*  */[Code[`pcbrdr`]]: {unicode: "\uE6E1"}, // Brake drum
    /*  */[Code[`pcgbdr`]]: {unicode: "\uE6E2"}, // Goblet drum (djembe, dumbek)
    /*  */[Code[`pctb`]]: {unicode: "\uE6E3"}, // Indian tabla
    /*  */[Code[`pccu`]]: {unicode: "\uE6E4"}, // Cuica
    /*  */[Code[`pcwdbl`]]: {unicode: "\uE6F0"}, // Wood block
    /*  */[Code[`pctmbl`]]: {unicode: "\uE6F1"}, // Temple blocks
    /*  */[Code[`pccl`]]: {unicode: "\uE6F2"}, // Claves
    /*  */[Code[`pcgr`]]: {unicode: "\uE6F3"}, // Guiro
    /*  */[Code[`pcrt`]]: {unicode: "\uE6F4"}, // Ratchet
    /*  */[Code[`pcftrt`]]: {unicode: "\uE6F5"}, // Football rattle
    /*  */[Code[`pcwh`]]: {unicode: "\uE6F6"}, // Whip
    /*  */[Code[`pcbrcl`]]: {unicode: "\uE6F7"}, // Board clapper
    /*  */[Code[`pccs`]]: {unicode: "\uE6F8"}, // Castanets
    /*  */[Code[`pccswthn`]]: {unicode: "\uE6F9"}, // Castanets with handle
    /*  */[Code[`pcqj`]]: {unicode: "\uE6FA"}, // Quijada (jawbone)
    /*  */[Code[`pcbmsc`]]: {unicode: "\uE6FB"}, // Bamboo scraper
    /*  */[Code[`pcrcrc`]]: {unicode: "\uE6FC"}, // Reco-reco
    /*  */[Code[`pctr`]]: {unicode: "\uE700"}, // Triangle
    /*  */[Code[`pcan`]]: {unicode: "\uE701"}, // Anvil
    /*  */[Code[`pcslbl`]]: {unicode: "\uE710"}, // Sleigh bell
    /*  */[Code[`pccwbl`]]: {unicode: "\uE711"}, // Cow bell
    /*  */[Code[`pcal`]]: {unicode: "\uE712"}, // Almglocken
    /*  */[Code[`pcblpl`]]: {unicode: "\uE713"}, // Bell plate
    /*  */[Code[`pcbl`]]: {unicode: "\uE714"}, // Bell
    /*  */[Code[`pchn`]]: {unicode: "\uE715"}, // Handbell
    /*  */[Code[`pccc`]]: {unicode: "\uE716"}, // Cencerro
    /*  */[Code[`pcag`]]: {unicode: "\uE717"}, // Agogo
    /*  */[Code[`pcshbl`]]: {unicode: "\uE718"}, // Shell bells
    /*  */[Code[`pcjnbl`]]: {unicode: "\uE719"}, // Jingle bells
    /*  */[Code[`pcbltr`]]: {unicode: "\uE71A"}, // Bell tree
    /*  */[Code[`pccrcy`]]: {unicode: "\uE720"}, // Crash cymbals
    /*  */[Code[`pcsscy`]]: {unicode: "\uE721"}, // Suspended cymbal
    /*  */[Code[`pchiht`]]: {unicode: "\uE722"}, // Hi-hat
    /*  */[Code[`pchihtonst`]]: {unicode: "\uE723"}, // Hi-hat cymbals on stand
    /*  */[Code[`pcszcy`]]: {unicode: "\uE724"}, // Sizzle cymbal
    /*  */[Code[`pcvtht`]]: {unicode: "\uE725"}, // Vietnamese hat cymbal
    /*  */[Code[`pcchcy`]]: {unicode: "\uE726"}, // Chinese cymbal
    /*  */[Code[`pcficy`]]: {unicode: "\uE727"}, // Finger cymbals
    /*  */[Code[`pccytn`]]: {unicode: "\uE728"}, // Cymbal tongs
    /*  */[Code[`pcedofcy`]]: {unicode: "\uE729"}, // Edge of cymbal
    /*  */[Code[`pcblofcy`]]: {unicode: "\uE72A"}, // Bell of cymbal
    /*  */[Code[`pctata`]]: {unicode: "\uE730"}, // Tam-tam
    /*  */[Code[`pctatawtbt`]]: {unicode: "\uE731"}, // Tam-tam with beater (Smith Brindle)
    /*  */[Code[`pcgn`]]: {unicode: "\uE732"}, // Gong
    /*  */[Code[`pcgnwtbt`]]: {unicode: "\uE733"}, // Gong with button (nipple)
    /*  */[Code[`pcslbrongn`]]: {unicode: "\uE734"}, // Slide brush on gong
    /*  */[Code[`pcfl`]]: {unicode: "\uE740"}, // Flexatone
    /*  */[Code[`pcma`]]: {unicode: "\uE741"}, // Maraca
    /*  */[Code[`pcms`]]: {unicode: "\uE742"}, // Maracas
    /*  */[Code[`pccb`]]: {unicode: "\uE743"}, // Cabasa
    /*  */[Code[`pcth`]]: {unicode: "\uE744"}, // Thundersheet
    /*  */[Code[`pcvs`]]: {unicode: "\uE745"}, // Vibraslap
    /*  */[Code[`pcss`]]: {unicode: "\uE746"}, // Sistrum
    /*  */[Code[`pcrn`]]: {unicode: "\uE747"}, // Rainstick
    /*  */[Code[`pcchrt`]]: {unicode: "\uE748"}, // Chain rattle
    /*  */[Code[`pcslwh`]]: {unicode: "\uE750"}, // Slide whistle
    /*  */[Code[`pcbrwh`]]: {unicode: "\uE751"}, // Bird whistle
    /*  */[Code[`pcplwh`]]: {unicode: "\uE752"}, // Police whistle
    /*  */[Code[`pcsr`]]: {unicode: "\uE753"}, // Siren
    /*  */[Code[`pcwnmc`]]: {unicode: "\uE754"}, // Wind machine
    /*  */[Code[`pccrhr`]]: {unicode: "\uE755"}, // Car horn
    /*  */[Code[`pcklhr`]]: {unicode: "\uE756"}, // Klaxon horn
    /*  */[Code[`pcdccl`]]: {unicode: "\uE757"}, // Duck call
    /*  */[Code[`pcwnwh`]]: {unicode: "\uE758"}, // Wind whistle (or mouth siren)
    /*  */[Code[`pcmg`]]: {unicode: "\uE759"}, // Megaphone
    /*  */[Code[`pcltfl`]]: {unicode: "\uE75A"}, // Lotus flute
    /*  */[Code[`pcpssh`]]: {unicode: "\uE760"}, // Pistol shot
    /*  */[Code[`pccn`]]: {unicode: "\uE761"}, // Cannon
    /*  */[Code[`pcsnbl`]]: {unicode: "\uE762"}, // Sandpaper blocks
    /*  */[Code[`pclnrr`]]: {unicode: "\uE763"}, // Lion's roar
    /*  */[Code[`pcglhp`]]: {unicode: "\uE764"}, // Glass harp
    /*  */[Code[`pcglhm`]]: {unicode: "\uE765"}, // Glass harmonica
    /*  */[Code[`pcmssw`]]: {unicode: "\uE766"}, // Musical saw
    /*  */[Code[`pcjwhp`]]: {unicode: "\uE767"}, // Jaw harp
    /*  */[Code[`pcbtsfxyup`]]: {unicode: "\uE770"}, // Soft xylophone stick up
    /*  */[Code[`pcbtsfxydn`]]: {unicode: "\uE771"}, // Soft xylophone stick down
    /*  */[Code[`pcbtsfxyrt`]]: {unicode: "\uE772"}, // Soft xylophone stick right
    /*  */[Code[`pcbtsfxylf`]]: {unicode: "\uE773"}, // Soft xylophone stick left
    /*  */[Code[`pcbtmdxyup`]]: {unicode: "\uE774"}, // Medium xylophone stick up
    /*  */[Code[`pcbtmdxydn`]]: {unicode: "\uE775"}, // Medium xylophone stick down
    /*  */[Code[`pcbtmdxyrt`]]: {unicode: "\uE776"}, // Medium xylophone stick right
    /*  */[Code[`pcbtmdxylf`]]: {unicode: "\uE777"}, // Medium xylophone stick left
    /*  */[Code[`pcbthrxyup`]]: {unicode: "\uE778"}, // Hard xylophone stick up
    /*  */[Code[`pcbthrxydn`]]: {unicode: "\uE779"}, // Hard xylophone stick down
    /*  */[Code[`pcbthrxyrt`]]: {unicode: "\uE77A"}, // Hard xylophone stick right
    /*  */[Code[`pcbthrxylf`]]: {unicode: "\uE77B"}, // Hard xylophone stick left
    /*  */[Code[`pcbtwdxyup`]]: {unicode: "\uE77C"}, // Wood xylophone stick up
    /*  */[Code[`pcbtwdxydn`]]: {unicode: "\uE77D"}, // Wood xylophone stick down
    /*  */[Code[`pcbtwdxyrt`]]: {unicode: "\uE77E"}, // Wood xylophone stick right
    /*  */[Code[`pcbtwdxylf`]]: {unicode: "\uE77F"}, // Wood xylophone stick left
    /*  */[Code[`pcbtsfglup`]]: {unicode: "\uE780"}, // Soft glockenspiel stick up
    /*  */[Code[`pcbtsfgldn`]]: {unicode: "\uE781"}, // Soft glockenspiel stick down
    /*  */[Code[`pcbtsfglrt`]]: {unicode: "\uE782"}, // Soft glockenspiel stick right
    /*  */[Code[`pcbtsfgllf`]]: {unicode: "\uE783"}, // Soft glockenspiel stick left
    /*  */[Code[`pcbthrglup`]]: {unicode: "\uE784"}, // Hard glockenspiel stick up
    /*  */[Code[`pcbthrgldn`]]: {unicode: "\uE785"}, // Hard glockenspiel stick down
    /*  */[Code[`pcbthrglrt`]]: {unicode: "\uE786"}, // Hard glockenspiel stick right
    /*  */[Code[`pcbthrgllf`]]: {unicode: "\uE787"}, // Hard glockenspiel stick left
    /*  */[Code[`pcbtsftmup`]]: {unicode: "\uE788"}, // Soft timpani stick up
    /*  */[Code[`pcbtsftmdn`]]: {unicode: "\uE789"}, // Soft timpani stick down
    /*  */[Code[`pcbtsftmrt`]]: {unicode: "\uE78A"}, // Soft timpani stick right
    /*  */[Code[`pcbtsftmlf`]]: {unicode: "\uE78B"}, // Soft timpani stick left
    /*  */[Code[`pcbtmdtmup`]]: {unicode: "\uE78C"}, // Medium timpani stick up
    /*  */[Code[`pcbtmdtmdn`]]: {unicode: "\uE78D"}, // Medium timpani stick down
    /*  */[Code[`pcbtmdtmrt`]]: {unicode: "\uE78E"}, // Medium timpani stick right
    /*  */[Code[`pcbtmdtmlf`]]: {unicode: "\uE78F"}, // Medium timpani stick left
    /*  */[Code[`pcbthrtmup`]]: {unicode: "\uE790"}, // Hard timpani stick up
    /*  */[Code[`pcbthrtmdn`]]: {unicode: "\uE791"}, // Hard timpani stick down
    /*  */[Code[`pcbthrtmrt`]]: {unicode: "\uE792"}, // Hard timpani stick right
    /*  */[Code[`pcbthrtmlf`]]: {unicode: "\uE793"}, // Hard timpani stick left
    /*  */[Code[`pcbtwdtmup`]]: {unicode: "\uE794"}, // Wood timpani stick up
    /*  */[Code[`pcbtwdtmdn`]]: {unicode: "\uE795"}, // Wood timpani stick down
    /*  */[Code[`pcbtwdtmrt`]]: {unicode: "\uE796"}, // Wood timpani stick right
    /*  */[Code[`pcbtwdtmlf`]]: {unicode: "\uE797"}, // Wood timpani stick left
    /*  */[Code[`pcbtsfbsdrup`]]: {unicode: "\uE798"}, // Soft bass drum stick up
    /*  */[Code[`pcbtsfbsdrdn`]]: {unicode: "\uE799"}, // Soft bass drum stick down
    /*  */[Code[`pcbtmdbsdrup`]]: {unicode: "\uE79A"}, // Medium bass drum stick up
    /*  */[Code[`pcbtmdbsdrdn`]]: {unicode: "\uE79B"}, // Medium bass drum stick down
    /*  */[Code[`pcbthrbsdrup`]]: {unicode: "\uE79C"}, // Hard bass drum stick up
    /*  */[Code[`pcbthrbsdrdn`]]: {unicode: "\uE79D"}, // Hard bass drum stick down
    /*  */[Code[`pcbtmtbsdrup`]]: {unicode: "\uE79E"}, // Metal bass drum stick up
    /*  */[Code[`pcbtmtbsdrdn`]]: {unicode: "\uE79F"}, // Metal bass drum stick down
    /*  */[Code[`pcbtdbbsdrup`]]: {unicode: "\uE7A0"}, // Double bass drum stick up
    /*  */[Code[`pcbtdbbsdrdn`]]: {unicode: "\uE7A1"}, // Double bass drum stick down
    /*  */[Code[`pcbtsfyrup`]]: {unicode: "\uE7A2"}, // Soft yarn beater up
    /*  */[Code[`pcbtsfyrdn`]]: {unicode: "\uE7A3"}, // Soft yarn beater down
    /*  */[Code[`pcbtsfyrrt`]]: {unicode: "\uE7A4"}, // Soft yarn beater right
    /*  */[Code[`pcbtsfyrlf`]]: {unicode: "\uE7A5"}, // Soft yarn beater left
    /*  */[Code[`pcbtmdyrup`]]: {unicode: "\uE7A6"}, // Medium yarn beater up
    /*  */[Code[`pcbtmdyrdn`]]: {unicode: "\uE7A7"}, // Medium yarn beater down
    /*  */[Code[`pcbtmdyrrt`]]: {unicode: "\uE7A8"}, // Medium yarn beater right
    /*  */[Code[`pcbtmdyrlf`]]: {unicode: "\uE7A9"}, // Medium yarn beater left
    /*  */[Code[`pcbthryrup`]]: {unicode: "\uE7AA"}, // Hard yarn beater up
    /*  */[Code[`pcbthryrdn`]]: {unicode: "\uE7AB"}, // Hard yarn beater down
    /*  */[Code[`pcbthryrrt`]]: {unicode: "\uE7AC"}, // Hard yarn beater right
    /*  */[Code[`pcbthryrlf`]]: {unicode: "\uE7AD"}, // Hard yarn beater left
    /*  */[Code[`pcbtspup`]]: {unicode: "\uE7AE"}, // Superball beater up
    /*  */[Code[`pcbtspdn`]]: {unicode: "\uE7AF"}, // Superball beater down
    /*  */[Code[`pcbtsprt`]]: {unicode: "\uE7B0"}, // Superball beater right
    /*  */[Code[`pcbtsplf`]]: {unicode: "\uE7B1"}, // Superball beater left
    /*  */[Code[`pcsp`]]: {unicode: "\uE7B2"}, // Superball
    /*  */[Code[`pcwnhrup`]]: {unicode: "\uE7B3"}, // Wound beater, hard core up
    /*  */[Code[`pcwnhrdn`]]: {unicode: "\uE7B4"}, // Wound beater, hard core down
    /*  */[Code[`pcwnhrrt`]]: {unicode: "\uE7B5"}, // Wound beater, hard core right
    /*  */[Code[`pcwnhrlf`]]: {unicode: "\uE7B6"}, // Wound beater, hard core left
    /*  */[Code[`pcwnsfup`]]: {unicode: "\uE7B7"}, // Wound beater, soft core up
    /*  */[Code[`pcwnsfdn`]]: {unicode: "\uE7B8"}, // Wound beater, soft core down
    /*  */[Code[`pcwnsfrt`]]: {unicode: "\uE7B9"}, // Wound beater, soft core right
    /*  */[Code[`pcwnsflf`]]: {unicode: "\uE7BA"}, // Wound beater, soft core left
    /*  */[Code[`pcgmsfup`]]: {unicode: "\uE7BB"}, // Soft gum beater, up
    /*  */[Code[`pcgmsfdn`]]: {unicode: "\uE7BC"}, // Soft gum beater, down
    /*  */[Code[`pcgmsfrt`]]: {unicode: "\uE7BD"}, // Soft gum beater, right
    /*  */[Code[`pcgmsflf`]]: {unicode: "\uE7BE"}, // Soft gum beater, left
    /*  */[Code[`pcgmmdup`]]: {unicode: "\uE7BF"}, // Medium gum beater, up
    /*  */[Code[`pcgmmddn`]]: {unicode: "\uE7C0"}, // Medium gum beater, down
    /*  */[Code[`pcgmmdrt`]]: {unicode: "\uE7C1"}, // Medium gum beater, right
    /*  */[Code[`pcgmmdlf`]]: {unicode: "\uE7C2"}, // Medium gum beater, left
    /*  */[Code[`pcgmhrup`]]: {unicode: "\uE7C3"}, // Hard gum beater, up
    /*  */[Code[`pcgmhrdn`]]: {unicode: "\uE7C4"}, // Hard gum beater, down
    /*  */[Code[`pcgmhrrt`]]: {unicode: "\uE7C5"}, // Hard gum beater, right
    /*  */[Code[`pcgmhrlf`]]: {unicode: "\uE7C6"}, // Hard gum beater, left
    /*  */[Code[`pcbtmtup`]]: {unicode: "\uE7C7"}, // Metal beater, up
    /*  */[Code[`pcbtmtdn`]]: {unicode: "\uE7C8"}, // Metal beater down
    /*  */[Code[`pcbtmtrt`]]: {unicode: "\uE7C9"}, // Metal beater, right
    /*  */[Code[`pcbtmtlf`]]: {unicode: "\uE7CA"}, // Metal beater, left
    /*  */[Code[`pcbthmwdup`]]: {unicode: "\uE7CB"}, // Wooden hammer, up
    /*  */[Code[`pcbthmwddn`]]: {unicode: "\uE7CC"}, // Wooden hammer, down
    /*  */[Code[`pcbthmplup`]]: {unicode: "\uE7CD"}, // Plastic hammer, up
    /*  */[Code[`pcbthmpldn`]]: {unicode: "\uE7CE"}, // Plastic hammer, down
    /*  */[Code[`pcbthmmtup`]]: {unicode: "\uE7CF"}, // Metal hammer, up
    /*  */[Code[`pcbthmmtdn`]]: {unicode: "\uE7D0"}, // Metal hammer, down
    /*  */[Code[`pcbtsnstup`]]: {unicode: "\uE7D1"}, // Snare sticks up
    /*  */[Code[`pcbtsnstdn`]]: {unicode: "\uE7D2"}, // Snare sticks down
    /*  */[Code[`pcbtjzstup`]]: {unicode: "\uE7D3"}, // Jazz sticks up
    /*  */[Code[`pcbtjzstdn`]]: {unicode: "\uE7D4"}, // Jazz sticks down
    /*  */[Code[`pcbttrup`]]: {unicode: "\uE7D5"}, // Triangle beater up
    /*  */[Code[`pcbttrdn`]]: {unicode: "\uE7D6"}, // Triangle beater down
    /*  */[Code[`pcbtwrbrup`]]: {unicode: "\uE7D7"}, // Wire brushes up
    /*  */[Code[`pcbtwrbrdn`]]: {unicode: "\uE7D8"}, // Wire brushes down
    /*  */[Code[`pcbtbrmlup`]]: {unicode: "\uE7D9"}, // Brass mallets up
    /*  */[Code[`pcbtbrmldn`]]: {unicode: "\uE7DA"}, // Brass mallets down
    /*  */[Code[`pcbtsfxy`]]: {unicode: "\uE7DB"}, // Soft xylophone beaters
    /*  */[Code[`pcbtspwdml`]]: {unicode: "\uE7DC"}, // Spoon-shaped wooden mallet
    /*  */[Code[`pcbtgrsc`]]: {unicode: "\uE7DD"}, // Guiro scraper
    /*  */[Code[`pcbtbw`]]: {unicode: "\uE7DE"}, // Bow
    /*  */[Code[`pcbtml`]]: {unicode: "\uE7DF"}, // Chime hammer up
    /*  */[Code[`pcbtmthm`]]: {unicode: "\uE7E0"}, // Metal hammer
    /*  */[Code[`pcbthm`]]: {unicode: "\uE7E1"}, // Hammer
    /*  */[Code[`pcbtknnd`]]: {unicode: "\uE7E2"}, // Knitting needle
    /*  */[Code[`pcbthn`]]: {unicode: "\uE7E3"}, // Hand
    /*  */[Code[`pcbtfi`]]: {unicode: "\uE7E4"}, // Finger
    /*  */[Code[`pcbtfs`]]: {unicode: "\uE7E5"}, // Fist
    /*  */[Code[`pcbtfn`]]: {unicode: "\uE7E6"}, // Fingernails
    /*  */[Code[`pcco`]]: {unicode: "\uE7E7"}, // Coins
    /*  */[Code[`pcdrst`]]: {unicode: "\uE7E8"}, // Drum stick
    /*  */[Code[`pcbtcmpr`]]: {unicode: "\uE7E9"}, // Combining parentheses for round beaters (padded)
    /*  */[Code[`pcbtcmdscr`]]: {unicode: "\uE7EA"}, // Combining dashed circle for round beaters (plated)
    /*  */[Code[`pcbtbx`]]: {unicode: "\uE7EB"}, // Box for percussion beater
    /*  */[Code[`pcbtmldn`]]: {unicode: "\uE7EC"}, // Chime hammer down
    /*  */[Code[`pcbtbrmlrt`]]: {unicode: "\uE7ED"}, // Brass mallets right
    /*  */[Code[`pcbtbrmllf`]]: {unicode: "\uE7EE"}, // Brass mallets left
    /*  */[Code[`pcbttrpl`]]: {unicode: "\uE7EF"}, // Triangle beater plain
    /*  */[Code[`pcstsh`]]: {unicode: "\uE7F0"}, // Stick shot
    /*  */[Code[`pcsccntoed`]]: {unicode: "\uE7F1"}, // Scrape from center to edge
    /*  */[Code[`pcscedtocn`]]: {unicode: "\uE7F2"}, // Scrape from edge to center
    /*  */[Code[`pcscarrm`]]: {unicode: "\uE7F3"}, // Scrape around rim (counter-clockwise)
    /*  */[Code[`pconrm`]]: {unicode: "\uE7F4"}, // On rim
    /*  */[Code[`pcoprmsh`]]: {unicode: "\uE7F5"}, // Closed / rim shot
    /*  */[Code[`pchfop1`]]: {unicode: "\uE7F6"}, // Half-open
    /*  */[Code[`pchfop2`]]: {unicode: "\uE7F7"}, // Half-open 2 (Weinberg)
    /*  */[Code[`pcop`]]: {unicode: "\uE7F8"}, // Open
    /*  */[Code[`pcdm1`]]: {unicode: "\uE7F9"}, // Damp
    /*  */[Code[`pcdm2`]]: {unicode: "\uE7FA"}, // Damp 2
    /*  */[Code[`pcdm3`]]: {unicode: "\uE7FB"}, // Damp 3
    /*  */[Code[`pcdm4`]]: {unicode: "\uE7FC"}, // Damp 4
    /*  */[Code[`pcrmshonsm`]]: {unicode: "\uE7FD"}, // Rim shot for stem
    /*  */[Code[`pccn1`]]: {unicode: "\uE7FE"}, // Center (Weinberg)
    /*  */[Code[`pccn2`]]: {unicode: "\uE7FF"}, // Center (Ghent)
    /*  */[Code[`pccn3`]]: {unicode: "\uE800"}, // Center (Caltabiano)
    /*  */[Code[`pcrm1`]]: {unicode: "\uE801"}, // Rim or edge (Weinberg)
    /*  */[Code[`pcrm2`]]: {unicode: "\uE802"}, // Rim (Ghent)
    /*  */[Code[`pcrm3`]]: {unicode: "\uE803"}, // Rim (Caltabiano)
    /*  */[Code[`pcnrps`]]: {unicode: "\uE804"}, // Normal position (Caltabiano)
    /*  */[Code[`pcckcy`]]: {unicode: "\uE805"}, // Choke (Weinberg)
    /*  */[Code[`pcrthnsq`]]: {unicode: "\uE806"}, // Left hand (Agostini)
    /*  */[Code[`pclfhncr`]]: {unicode: "\uE807"}, // Right hand (Agostini)
    /*  */[Code[`pcswsm`]]: {unicode: "\uE808"}, // Combining swish for stem
    /*  */[Code[`pctnrtsm`]]: {unicode: "\uE809"}, // Combining turn right for stem
    /*  */[Code[`pctnlfsm`]]: {unicode: "\uE80A"}, // Combining turn left for stem
    /*  */[Code[`pctnrtlfsm`]]: {unicode: "\uE80B"}, // Combining turn left or right for stem
    /*  */[Code[`pccrsm`]]: {unicode: "\uE80C"}, // Combining crush for stem
    /*  */[Code[`pcddntsm`]]: {unicode: "\uE80D"}, // Combining X for stem (dead note)
    /*  */[Code[`pcscarrmcl`]]: {unicode: "\uE80E"}, // Scrape around rim (clockwise)
    /*  */[Code[`hnmr`]]: {unicode: "\uE810"}, // Martellato
    /*  */[Code[`hnmrlf`]]: {unicode: "\uE811"}, // Martellato lift
    /*  */[Code[`hnhnmr`]]: {unicode: "\uE812"}, // Hand martellato
    /*  */[Code[`hnmtmr`]]: {unicode: "\uE813"}, // Muted martellato
    /*  */[Code[`hnmlblss`]]: {unicode: "\uE814"}, // Mallet, bell suspended
    /*  */[Code[`hnmlblontb`]]: {unicode: "\uE815"}, // Mallet, bell on table
    /*  */[Code[`hnmllf`]]: {unicode: "\uE816"}, // Mallet lift
    /*  */[Code[`hnpllf`]]: {unicode: "\uE817"}, // Pluck lift
    /*  */[Code[`hnswup`]]: {unicode: "\uE818"}, // Swing up
    /*  */[Code[`hnswdn`]]: {unicode: "\uE819"}, // Swing down
    /*  */[Code[`hnsw`]]: {unicode: "\uE81A"}, // Swing
    /*  */[Code[`hnec1`]]: {unicode: "\uE81B"}, // Echo
    /*  */[Code[`hnec2`]]: {unicode: "\uE81C"}, // Echo 2
    /*  */[Code[`hngy`]]: {unicode: "\uE81D"}, // Gyro
    /*  */[Code[`hndm3`]]: {unicode: "\uE81E"}, // Damp 3
    /*  */[Code[`hnbl`]]: {unicode: "\uE81F"}, // Belltree
    /*  */[Code[`hntbsnbl`]]: {unicode: "\uE820"}, // Table single handbell
    /*  */[Code[`hntbprbl`]]: {unicode: "\uE821"}, // Table pair of handbells
    /*  */[Code[`gtvbbrsc`]]: {unicode: "\uE830"}, // Guitar vibrato bar scoop
    /*  */[Code[`gtvbbrdp`]]: {unicode: "\uE831"}, // Guitar vibrato bar dip
    /*  */[Code[`gtsh`]]: {unicode: "\uE832"}, // Guitar shake
    /*  */[Code[`gtst0`]]: {unicode: "\uE833"}, // String number 0
    /*  */[Code[`gtst1`]]: {unicode: "\uE834"}, // String number 1
    /*  */[Code[`gtst2`]]: {unicode: "\uE835"}, // String number 2
    /*  */[Code[`gtst3`]]: {unicode: "\uE836"}, // String number 3
    /*  */[Code[`gtst4`]]: {unicode: "\uE837"}, // String number 4
    /*  */[Code[`gtst5`]]: {unicode: "\uE838"}, // String number 5
    /*  */[Code[`gtst6`]]: {unicode: "\uE839"}, // String number 6
    /*  */[Code[`gtst7`]]: {unicode: "\uE83A"}, // String number 7
    /*  */[Code[`gtst8`]]: {unicode: "\uE83B"}, // String number 8
    /*  */[Code[`gtst9`]]: {unicode: "\uE83C"}, // String number 9
    /*  */[Code[`gtoppd`]]: {unicode: "\uE83D"}, // Open wah/volume pedal
    /*  */[Code[`gthfoppd`]]: {unicode: "\uE83E"}, // Half-open wah/volume pedal
    /*  */[Code[`gtclpd`]]: {unicode: "\uE83F"}, // Closed wah/volume pedal
    /*  */[Code[`gtlfhntp`]]: {unicode: "\uE840"}, // Left-hand tapping
    /*  */[Code[`gtrthntp`]]: {unicode: "\uE841"}, // Right-hand tapping
    /*  */[Code[`gtgl`]]: {unicode: "\uE842"}, // Golpe (tapping the pick guard)
    /*  */[Code[`gtfdin`]]: {unicode: "\uE843"}, // Fade in
    /*  */[Code[`gtfdot`]]: {unicode: "\uE844"}, // Fade out
    /*  */[Code[`gtvlsw`]]: {unicode: "\uE845"}, // Volume swell
    /*  */[Code[`gtstup`]]: {unicode: "\uE846"}, // Strum direction up
    /*  */[Code[`gtstdn`]]: {unicode: "\uE847"}, // Strum direction down
    /*  */[Code[`gtbrfl`]]: {unicode: "\uE848"}, // Full barr\u00e9
    /*  */[Code[`gtbrhf`]]: {unicode: "\uE849"}, // Half barr\u00e9
    /*  */[Code[`gtst10`]]: {unicode: "\uE84A"}, // String number 10
    /*  */[Code[`gtst11`]]: {unicode: "\uE84B"}, // String number 11
    /*  */[Code[`gtst12`]]: {unicode: "\uE84C"}, // String number 12
    /*  */[Code[`gtst13`]]: {unicode: "\uE84D"}, // String number 13
    /*  */[Code[`fr3st`]]: {unicode: "\uE850"}, // 3-string fretboard
    /*  */[Code[`fr3stnt`]]: {unicode: "\uE851"}, // 3-string fretboard at nut
    /*  */[Code[`fr4st`]]: {unicode: "\uE852"}, // 4-string fretboard
    /*  */[Code[`fr4stnt`]]: {unicode: "\uE853"}, // 4-string fretboard at nut
    /*  */[Code[`fr5st`]]: {unicode: "\uE854"}, // 5-string fretboard
    /*  */[Code[`fr5stnt`]]: {unicode: "\uE855"}, // 5-string fretboard at nut
    /*  */[Code[`fr6st`]]: {unicode: "\uE856"}, // 6-string fretboard
    /*  */[Code[`fr6stnt`]]: {unicode: "\uE857"}, // 6-string fretboard at nut
    /*  */[Code[`frflcr`]]: {unicode: "\uE858"}, // Fingered fret (filled circle)
    /*  */[Code[`frX`]]: {unicode: "\uE859"}, // String not played (X)
    /*  */[Code[`frO`]]: {unicode: "\uE85A"}, // Open string (O)
    /*  */[Code[`anhp`]]: {unicode: "\uE860"}, // Hauptstimme
    /*  */[Code[`annb`]]: {unicode: "\uE861"}, // Nebenstimme
    /*  */[Code[`anstst`]]: {unicode: "\uE862"}, // Start of stimme
    /*  */[Code[`anenst`]]: {unicode: "\uE863"}, // End of stimme
    /*  */[Code[`anth`]]: {unicode: "\uE864"}, // Theme
    /*  */[Code[`anthrt`]]: {unicode: "\uE865"}, // Retrograde of theme
    /*  */[Code[`anthrtin`]]: {unicode: "\uE866"}, // Retrograde inversion of theme
    /*  */[Code[`anthin`]]: {unicode: "\uE867"}, // Inversion of theme
    /*  */[Code[`anth1`]]: {unicode: "\uE868"}, // Theme 1
    /*  */[Code[`anin1`]]: {unicode: "\uE869"}, // Inversion 1
    /*  */[Code[`anch`]]: {unicode: "\uE86A"}, // Choralmelodie (Berg)
    /*  */[Code[`anhr`]]: {unicode: "\uE86B"}, // Hauptrhythmus (Berg)
    /*  */[Code[`csdm`]]: {unicode: "\uE870"}, // Diminished
    /*  */[Code[`cshfdm`]]: {unicode: "\uE871"}, // Half-diminished
    /*  */[Code[`csag`]]: {unicode: "\uE872"}, // Augmented
    /*  */[Code[`csmjsv`]]: {unicode: "\uE873"}, // Major seventh
    /*  */[Code[`csmn`]]: {unicode: "\uE874"}, // Minor
    /*  */[Code[`csprlftl`]]: {unicode: "\uE875"}, // Double-height left parenthesis
    /*  */[Code[`csprrttl`]]: {unicode: "\uE876"}, // Double-height right parenthesis
    /*  */[Code[`csbklftl`]]: {unicode: "\uE877"}, // Double-height left bracket
    /*  */[Code[`csbkrttl`]]: {unicode: "\uE878"}, // Double-height right bracket
    /*  */[Code[`csprlfvrtl`]]: {unicode: "\uE879"}, // Triple-height left parenthesis
    /*  */[Code[`csprrtvrtl`]]: {unicode: "\uE87A"}, // Triple-height right parenthesis
    /*  */[Code[`csalbssl`]]: {unicode: "\uE87B"}, // Slash for altered bass note
    /*  */[Code[`csdgarsl`]]: {unicode: "\uE87C"}, // Slash for chord symbols arranged diagonally
    /*  */[Code[`tp0`]]: {unicode: "\uE880"}, // Tuplet 0
    /*  */[Code[`tp1`]]: {unicode: "\uE881"}, // Tuplet 1
    /*  */[Code[`tp2`]]: {unicode: "\uE882"}, // Tuplet 2
    /*  */[Code[`tp3`]]: {unicode: "\uE883"}, // Tuplet 3
    /*  */[Code[`tp4`]]: {unicode: "\uE884"}, // Tuplet 4
    /*  */[Code[`tp5`]]: {unicode: "\uE885"}, // Tuplet 5
    /*  */[Code[`tp6`]]: {unicode: "\uE886"}, // Tuplet 6
    /*  */[Code[`tp7`]]: {unicode: "\uE887"}, // Tuplet 7
    /*  */[Code[`tp8`]]: {unicode: "\uE888"}, // Tuplet 8
    /*  */[Code[`tp9`]]: {unicode: "\uE889"}, // Tuplet 9
    /*  */[Code[`tpcl`]]: {unicode: "\uE88A"}, // Tuplet colon
    /*  */[Code[`cnstbt`]]: {unicode: "\uE890"}, // Strong beat or cue
    /*  */[Code[`cnlfbt`]]: {unicode: "\uE891"}, // Left-hand beat or cue
    /*  */[Code[`cnrtbt`]]: {unicode: "\uE892"}, // Right-hand beat or cue
    /*  */[Code[`cnwkbt`]]: {unicode: "\uE893"}, // Weak beat or cue
    /*  */[Code[`cnbt2sm`]]: {unicode: "\uE894"}, // Beat 2, simple time
    /*  */[Code[`cnbt3sm`]]: {unicode: "\uE895"}, // Beat 3, simple time
    /*  */[Code[`cnbt4sm`]]: {unicode: "\uE896"}, // Beat 4, simple time
    /*  */[Code[`cnbt2cm`]]: {unicode: "\uE897"}, // Beat 2, compound time
    /*  */[Code[`cnbt3cm`]]: {unicode: "\uE898"}, // Beat 3, compound time
    /*  */[Code[`cnbt4cm`]]: {unicode: "\uE899"}, // Beat 4, compound time
    /*  */[Code[`cnun`]]: {unicode: "\uE89A"}, // Unconducted/free passages
    /*  */[Code[`acRH3rnpc`]]: {unicode: "\uE8A0"}, // Right hand, 3 ranks, 4' stop (piccolo)
    /*  */[Code[`acRH3rncl`]]: {unicode: "\uE8A1"}, // Right hand, 3 ranks, 8' stop (clarinet)
    /*  */[Code[`acRH3rnuptr8`]]: {unicode: "\uE8A2"}, // Right hand, 3 ranks, upper tremolo 8' stop
    /*  */[Code[`acRH3rnlwtr8`]]: {unicode: "\uE8A3"}, // Right hand, 3 ranks, lower tremolo 8' stop
    /*  */[Code[`acRH3rnbs`]]: {unicode: "\uE8A4"}, // Right hand, 3 ranks, 16' stop (bassoon)
    /*  */[Code[`acRH3rnob`]]: {unicode: "\uE8A5"}, // Right hand, 3 ranks, 4' stop + 8' stop (oboe)
    /*  */[Code[`acRH3rnvl`]]: {unicode: "\uE8A6"}, // Right hand, 3 ranks, 8' stop + upper tremolo 8' stop (violin)
    /*  */[Code[`acRH3rnimms`]]: {unicode: "\uE8A7"}, // Right hand, 3 ranks, 4' stop + 8' stop + upper tremolo 8' stop (imitation musette)
    /*  */[Code[`acRH3rnatms`]]: {unicode: "\uE8A8"}, // Right hand, 3 ranks, lower tremolo 8' stop + 8' stop + upper tremolo 8' stop (authentic musette)
    /*  */[Code[`acRH3rnor`]]: {unicode: "\uE8A9"}, // Right hand, 3 ranks, 4' stop + 16' stop (organ)
    /*  */[Code[`acRH3rnhr`]]: {unicode: "\uE8AA"}, // Right hand, 3 ranks, 4' stop + 8' stop + 16' stop (harmonium)
    /*  */[Code[`acRH3rnbn`]]: {unicode: "\uE8AB"}, // Right hand, 3 ranks, 8' stop + 16' stop (bandone\u00f3n)
    /*  */[Code[`acRH3rnac`]]: {unicode: "\uE8AC"}, // Right hand, 3 ranks, 8' stop + upper tremolo 8' stop + 16' stop (accordion)
    /*  */[Code[`acRH3rnms`]]: {unicode: "\uE8AD"}, // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + upper tremolo 8' stop + 16' stop (master)
    /*  */[Code[`acRH3rntwch`]]: {unicode: "\uE8AE"}, // Right hand, 3 ranks, lower tremolo 8' stop + upper tremolo 8' stop
    /*  */[Code[`acRH3rntrlw8ve`]]: {unicode: "\uE8AF"}, // Right hand, 3 ranks, lower tremolo 8' stop + upper tremolo 8' stop + 16' stop
    /*  */[Code[`acRH3rntrup8ve`]]: {unicode: "\uE8B0"}, // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + upper tremolo 8' stop
    /*  */[Code[`acRH3rndbtrlw8ve`]]: {unicode: "\uE8B1"}, // Right hand, 3 ranks, lower tremolo 8' stop + 8' stop + upper tremolo 8' stop + 16' stop
    /*  */[Code[`acRH3rndbtrup8ve`]]: {unicode: "\uE8B2"}, // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + 8' stop + upper tremolo 8' stop
    /*  */[Code[`acRH3rnflfc`]]: {unicode: "\uE8B3"}, // Right hand, 3 ranks, 4' stop + lower tremolo 8' stop + 8' stop + upper tremolo 8' stop + 16' stop
    /*  */[Code[`acRH4rnsp`]]: {unicode: "\uE8B4"}, // Right hand, 4 ranks, soprano
    /*  */[Code[`acRH4rnal`]]: {unicode: "\uE8B5"}, // Right hand, 4 ranks, alto
    /*  */[Code[`acRH4rntn`]]: {unicode: "\uE8B6"}, // Right hand, 4 ranks, tenor
    /*  */[Code[`acRH4rnms`]]: {unicode: "\uE8B7"}, // Right hand, 4 ranks, master
    /*  */[Code[`acRH4rnsfbs`]]: {unicode: "\uE8B8"}, // Right hand, 4 ranks, soft bass
    /*  */[Code[`acRH4rnsftn`]]: {unicode: "\uE8B9"}, // Right hand, 4 ranks, soft tenor
    /*  */[Code[`acRH4rnbsal`]]: {unicode: "\uE8BA"}, // Right hand, 4 ranks, bass/alto
    /*  */[Code[`acLH2rn8rn`]]: {unicode: "\uE8BB"}, // Left hand, 2 ranks, 8' stop (round)
    /*  */[Code[`acLH2rn16rn`]]: {unicode: "\uE8BC"}, // Left hand, 2 ranks, 16' stop (round)
    /*  */[Code[`acLH2rn8pl16rn`]]: {unicode: "\uE8BD"}, // Left hand, 2 ranks, 8' stop + 16' stop (round)
    /*  */[Code[`acLH2rnmsrn`]]: {unicode: "\uE8BE"}, // Left hand, 2 ranks, master (round)
    /*  */[Code[`acLH2rnmspl16rn`]]: {unicode: "\uE8BF"}, // Left hand, 2 ranks, master + 16' stop (round)
    /*  */[Code[`acLH2rnflmsrn`]]: {unicode: "\uE8C0"}, // Left hand, 2 ranks, full master (round)
    /*  */[Code[`acLH3rn8sq`]]: {unicode: "\uE8C1"}, // Left hand, 3 ranks, 8' stop (square)
    /*  */[Code[`acLH3rn2sq`]]: {unicode: "\uE8C2"}, // Left hand, 3 ranks, 2' stop (square)
    /*  */[Code[`acLH3rndb8sq`]]: {unicode: "\uE8C3"}, // Left hand, 3 ranks, double 8' stop (square)
    /*  */[Code[`acLH3rn2pl8sq`]]: {unicode: "\uE8C4"}, // Left hand, 3 ranks, 2' stop + 8' stop (square)
    /*  */[Code[`acLH3rnttsq`]]: {unicode: "\uE8C5"}, // Left hand, 3 ranks, 2' stop + double 8' stop (tutti) (square)
    /*  */[Code[`accmRH3rnem`]]: {unicode: "\uE8C6"}, // Combining right hand, 3 ranks, empty
    /*  */[Code[`accmRH4rnem`]]: {unicode: "\uE8C7"}, // Combining right hand, 4 ranks, empty
    /*  */[Code[`accmLH2rnem`]]: {unicode: "\uE8C8"}, // Combining left hand, 2 ranks, empty
    /*  */[Code[`accmLH3rnemsq`]]: {unicode: "\uE8C9"}, // Combining left hand, 3 ranks, empty (square)
    /*  */[Code[`accmdt`]]: {unicode: "\uE8CA"}, // Combining accordion coupler dot
    /*  */[Code[`acps`]]: {unicode: "\uE8CB"}, // Push
    /*  */[Code[`acpl`]]: {unicode: "\uE8CC"}, // Pull
    /*  */[Code[`acrc2`]]: {unicode: "\uE8CD"}, // Ricochet (2 tones)
    /*  */[Code[`acrc3`]]: {unicode: "\uE8CE"}, // Ricochet (3 tones)
    /*  */[Code[`acrc4`]]: {unicode: "\uE8CF"}, // Ricochet (4 tones)
    /*  */[Code[`acrc5`]]: {unicode: "\uE8D0"}, // Ricochet (5 tones)
    /*  */[Code[`acrc6`]]: {unicode: "\uE8D1"}, // Ricochet (6 tones)
    /*  */[Code[`acrcsm2`]]: {unicode: "\uE8D2"}, // Combining ricochet for stem (2 tones)
    /*  */[Code[`acrcsm3`]]: {unicode: "\uE8D3"}, // Combining ricochet for stem (3 tones)
    /*  */[Code[`acrcsm4`]]: {unicode: "\uE8D4"}, // Combining ricochet for stem (4 tones)
    /*  */[Code[`acrcsm5`]]: {unicode: "\uE8D5"}, // Combining ricochet for stem (5 tones)
    /*  */[Code[`acrcsm6`]]: {unicode: "\uE8D6"}, // Combining ricochet for stem (6 tones)
    /*  */[Code[`cnbgbm`]]: {unicode: "\uE8E0"}, // Begin beam
    /*  */[Code[`cnenbm`]]: {unicode: "\uE8E1"}, // End beam
    /*  */[Code[`cnbgti`]]: {unicode: "\uE8E2"}, // Begin tie
    /*  */[Code[`cnenti`]]: {unicode: "\uE8E3"}, // End tie
    /*  */[Code[`cnbgsl`]]: {unicode: "\uE8E4"}, // Begin slur
    /*  */[Code[`cnensl`]]: {unicode: "\uE8E5"}, // End slur
    /*  */[Code[`cnbgph`]]: {unicode: "\uE8E6"}, // Begin phrase
    /*  */[Code[`cnenph`]]: {unicode: "\uE8E7"}, // End phrase
    /*  */[Code[`chst`]]: {unicode: "\uE8F0"}, // Plainchant staff
    /*  */[Code[`chstwd`]]: {unicode: "\uE8F1"}, // Plainchant staff (wide)
    /*  */[Code[`chstnr`]]: {unicode: "\uE8F2"}, // Plainchant staff (narrow)
    /*  */[Code[`chdvmn`]]: {unicode: "\uE8F3"}, // Divisio minima
    /*  */[Code[`chdvmr`]]: {unicode: "\uE8F4"}, // Divisio maior
    /*  */[Code[`chdvmx`]]: {unicode: "\uE8F5"}, // Divisio maxima
    /*  */[Code[`chdvfn`]]: {unicode: "\uE8F6"}, // Divisio finalis
    /*  */[Code[`chvr`]]: {unicode: "\uE8F7"}, // Virgula
    /*  */[Code[`chcs`]]: {unicode: "\uE8F8"}, // Caesura
    /*  */[Code[`mngc`]]: {unicode: "\uE900"}, // Mensural G clef
    /*  */[Code[`mngcpt`]]: {unicode: "\uE901"}, // Petrucci G clef
    /*  */[Code[`chfc`]]: {unicode: "\uE902"}, // Plainchant F clef
    /*  */[Code[`mnfc`]]: {unicode: "\uE903"}, // Mensural F clef
    /*  */[Code[`mnfcpt`]]: {unicode: "\uE904"}, // Petrucci F clef
    /*  */[Code[`mncc`]]: {unicode: "\uE905"}, // Mensural C clef
    /*  */[Code[`chcc`]]: {unicode: "\uE906"}, // Plainchant C clef
    /*  */[Code[`mnccptpsls`]]: {unicode: "\uE907"}, // Petrucci C clef, lowest position
    /*  */[Code[`mnccptpslw`]]: {unicode: "\uE908"}, // Petrucci C clef, low position
    /*  */[Code[`mnccptpsmd`]]: {unicode: "\uE909"}, // Petrucci C clef, middle position
    /*  */[Code[`mnccptpshg`]]: {unicode: "\uE90A"}, // Petrucci C clef, high position
    /*  */[Code[`mnccptpshs`]]: {unicode: "\uE90B"}, // Petrucci C clef, highest position
    /*  */[Code[`mnpl1`]]: {unicode: "\uE910"}, // Tempus perfectum cum prolatione perfecta (9/8)
    /*  */[Code[`mnpl2`]]: {unicode: "\uE911"}, // Tempus perfectum cum prolatione imperfecta (3/4)
    /*  */[Code[`mnpl3`]]: {unicode: "\uE912"}, // Tempus perfectum cum prolatione imperfecta diminution 1 (3/8)
    /*  */[Code[`mnpl4`]]: {unicode: "\uE913"}, // Tempus perfectum cum prolatione perfecta diminution 2 (9/16)
    /*  */[Code[`mnpl5`]]: {unicode: "\uE914"}, // Tempus imperfectum cum prolatione perfecta (6/8)
    /*  */[Code[`mnpl6`]]: {unicode: "\uE915"}, // Tempus imperfectum cum prolatione imperfecta (2/4)
    /*  */[Code[`mnpl7`]]: {unicode: "\uE916"}, // Tempus imperfectum cum prolatione imperfecta diminution 1 (2/2)
    /*  */[Code[`mnpl8`]]: {unicode: "\uE917"}, // Tempus imperfectum cum prolatione imperfecta diminution 2 (6/16)
    /*  */[Code[`mnpl9`]]: {unicode: "\uE918"}, // Tempus imperfectum cum prolatione imperfecta diminution 3 (2/2)
    /*  */[Code[`mnpl10`]]: {unicode: "\uE919"}, // Tempus imperfectum cum prolatione imperfecta diminution 4
    /*  */[Code[`mnpl11`]]: {unicode: "\uE91A"}, // Tempus imperfectum cum prolatione imperfecta diminution 5
    /*  */[Code[`mnpptmpr`]]: {unicode: "\uE91B"}, // Tempus perfectum
    /*  */[Code[`mnppprdp1`]]: {unicode: "\uE91C"}, // Proportio dupla 1
    /*  */[Code[`mnppprdp2`]]: {unicode: "\uE91D"}, // Proportio dupla 2
    /*  */[Code[`mnppprtr`]]: {unicode: "\uE91E"}, // Proportio tripla
    /*  */[Code[`mnppprqd`]]: {unicode: "\uE91F"}, // Proportio quadrupla
    /*  */[Code[`mnplcmdt`]]: {unicode: "\uE920"}, // Combining dot
    /*  */[Code[`mnplcmtwds`]]: {unicode: "\uE921"}, // Combining two dots
    /*  */[Code[`mnplcmthds`]]: {unicode: "\uE922"}, // Combining three dots horizontal
    /*  */[Code[`mnplcmthdstr`]]: {unicode: "\uE923"}, // Combining three dots triangular
    /*  */[Code[`mnplcmdtvd`]]: {unicode: "\uE924"}, // Combining void dot
    /*  */[Code[`mnplcmst`]]: {unicode: "\uE925"}, // Combining vertical stroke
    /*  */[Code[`mnpp1`]]: {unicode: "\uE926"}, // Mensural proportion 1
    /*  */[Code[`mnpp2`]]: {unicode: "\uE927"}, // Mensural proportion 2
    /*  */[Code[`mnpp3`]]: {unicode: "\uE928"}, // Mensural proportion 3
    /*  */[Code[`mnpp4`]]: {unicode: "\uE929"}, // Mensural proportion 4
    /*  */[Code[`mnppmn`]]: {unicode: "\uE92A"}, // Mensural proportion minor
    /*  */[Code[`mnppmj`]]: {unicode: "\uE92B"}, // Mensural proportion major
    /*  */[Code[`mnmdprvr`]]: {unicode: "\uE92C"}, // Modus perfectum, vertical
    /*  */[Code[`mnmdimvr`]]: {unicode: "\uE92D"}, // Modus imperfectum, vertical
    /*  */[Code[`mntmprhr`]]: {unicode: "\uE92E"}, // Tempus perfectum, horizontal
    /*  */[Code[`mntmimhr`]]: {unicode: "\uE92F"}, // Tempus imperfectum, horizontal
    /*  */[Code[`mnnhmxbl`]]: {unicode: "\uE930"}, // Maxima notehead, black
    /*  */[Code[`mnnhmxvd`]]: {unicode: "\uE931"}, // Maxima notehead, void
    /*  */[Code[`mnnhmxblvd`]]: {unicode: "\uE932"}, // Maxima notehead, black and void
    /*  */[Code[`mnnhmxwt`]]: {unicode: "\uE933"}, // Maxima notehead, white
    /*  */[Code[`mnnhlnbl`]]: {unicode: "\uE934"}, // Longa/brevis notehead, black
    /*  */[Code[`mnnhlnvd`]]: {unicode: "\uE935"}, // Longa/brevis notehead, void
    /*  */[Code[`mnnhlnblvd`]]: {unicode: "\uE936"}, // Longa/brevis notehead, black and void
    /*  */[Code[`mnnhlnwt`]]: {unicode: "\uE937"}, // Longa/brevis notehead, white
    /*  */[Code[`mnnhsbbl`]]: {unicode: "\uE938"}, // Semibrevis notehead, black
    /*  */[Code[`mnnhsbvd`]]: {unicode: "\uE939"}, // Semibrevis notehead, void
    /*  */[Code[`mnnhsbblvd`]]: {unicode: "\uE93A"}, // Semibrevis notehead, black and void
    /*  */[Code[`mnnhsbblvdtr`]]: {unicode: "\uE93B"}, // Semibrevis notehead, black and void (turned)
    /*  */[Code[`mnnhmnwt`]]: {unicode: "\uE93C"}, // Minima notehead, white
    /*  */[Code[`mnnhsmwt`]]: {unicode: "\uE93D"}, // Semiminima/fusa notehead, white
    /*  */[Code[`mncmsmup`]]: {unicode: "\uE93E"}, // Combining stem up
    /*  */[Code[`mncmsmdn`]]: {unicode: "\uE93F"}, // Combining stem down
    /*  */[Code[`mncmsmdg`]]: {unicode: "\uE940"}, // Combining stem diagonal
    /*  */[Code[`mncmsmupflrt`]]: {unicode: "\uE941"}, // Combining stem with flag right up
    /*  */[Code[`mncmsmdnflrt`]]: {unicode: "\uE942"}, // Combining stem with flag right down
    /*  */[Code[`mncmsmupfllf`]]: {unicode: "\uE943"}, // Combining stem with flag left up
    /*  */[Code[`mncmsmdnfllf`]]: {unicode: "\uE944"}, // Combining stem with flag left down
    /*  */[Code[`mncmsmupflfl`]]: {unicode: "\uE945"}, // Combining stem with flared flag up
    /*  */[Code[`mncmsmdnflfl`]]: {unicode: "\uE946"}, // Combining stem with flared flag down
    /*  */[Code[`mncmsmupflex`]]: {unicode: "\uE947"}, // Combining stem with extended flag up
    /*  */[Code[`mncmsmdnflex`]]: {unicode: "\uE948"}, // Combining stem with extended flag down
    /*  */[Code[`mncmsmupflsm`]]: {unicode: "\uE949"}, // Combining stem with semiminima flag up
    /*  */[Code[`mncmsmdnflsm`]]: {unicode: "\uE94A"}, // Combining stem with semiminima flag down
    /*  */[Code[`mncmsmupflfs`]]: {unicode: "\uE94B"}, // Combining stem with fusa flag up
    /*  */[Code[`mncmsmdnflfs`]]: {unicode: "\uE94C"}, // Combining stem with fusa flag down
    /*  */[Code[`mnblmx`]]: {unicode: "\uE950"}, // Black mensural maxima
    /*  */[Code[`mnblln`]]: {unicode: "\uE951"}, // Black mensural longa
    /*  */[Code[`mnblbr`]]: {unicode: "\uE952"}, // Black mensural brevis
    /*  */[Code[`mnblsb`]]: {unicode: "\uE953"}, // Black mensural semibrevis
    /*  */[Code[`mnblmn`]]: {unicode: "\uE954"}, // Black mensural minima
    /*  */[Code[`mnblsm`]]: {unicode: "\uE955"}, // Black mensural semiminima
    /*  */[Code[`mnblbrvd`]]: {unicode: "\uE956"}, // Black mensural void brevis
    /*  */[Code[`mnblsbvd`]]: {unicode: "\uE957"}, // Black mensural void semibrevis
    /*  */[Code[`mnblmnvd`]]: {unicode: "\uE958"}, // Black mensural void minima
    /*  */[Code[`mnblsbcd`]]: {unicode: "\uE959"}, // Black mensural semibrevis caudata
    /*  */[Code[`mnbldr`]]: {unicode: "\uE95A"}, // Black mensural dragma
    /*  */[Code[`mnblsbob`]]: {unicode: "\uE95B"}, // Black mensural oblique semibrevis
    /*  */[Code[`mnwtmx`]]: {unicode: "\uE95C"}, // White mensural maxima
    /*  */[Code[`mnwtln`]]: {unicode: "\uE95D"}, // White mensural longa
    /*  */[Code[`mnwtbr`]]: {unicode: "\uE95E"}, // White mensural brevis
    /*  */[Code[`mnwtmn`]]: {unicode: "\uE95F"}, // White mensural minima
    /*  */[Code[`mnwtsm`]]: {unicode: "\uE960"}, // White mensural semiminima
    /*  */[Code[`mnwtfs`]]: {unicode: "\uE961"}, // White mensural fusa
    /*  */[Code[`mnwtsb`]]: {unicode: "\uE962"}, // White mensural semibrevis
    /*  */[Code[`mnobas2bl`]]: {unicode: "\uE970"}, // Oblique form, ascending 2nd, black
    /*  */[Code[`mnobas2vd`]]: {unicode: "\uE971"}, // Oblique form, ascending 2nd, void
    /*  */[Code[`mnobas2blvd`]]: {unicode: "\uE972"}, // Oblique form, ascending 2nd, black and void
    /*  */[Code[`mnobas2wt`]]: {unicode: "\uE973"}, // Oblique form, ascending 2nd, white
    /*  */[Code[`mnobas3bl`]]: {unicode: "\uE974"}, // Oblique form, ascending 3rd, black
    /*  */[Code[`mnobas3vd`]]: {unicode: "\uE975"}, // Oblique form, ascending 3rd, void
    /*  */[Code[`mnobas3blvd`]]: {unicode: "\uE976"}, // Oblique form, ascending 3rd, black and void
    /*  */[Code[`mnobas3wt`]]: {unicode: "\uE977"}, // Oblique form, ascending 3rd, white
    /*  */[Code[`mnobas4bl`]]: {unicode: "\uE978"}, // Oblique form, ascending 4th, black
    /*  */[Code[`mnobas4vd`]]: {unicode: "\uE979"}, // Oblique form, ascending 4th, void
    /*  */[Code[`mnobas4blvd`]]: {unicode: "\uE97A"}, // Oblique form, ascending 4th, black and void
    /*  */[Code[`mnobas4wt`]]: {unicode: "\uE97B"}, // Oblique form, ascending 4th, white
    /*  */[Code[`mnobas5bl`]]: {unicode: "\uE97C"}, // Oblique form, ascending 5th, black
    /*  */[Code[`mnobas5vd`]]: {unicode: "\uE97D"}, // Oblique form, ascending 5th, void
    /*  */[Code[`mnobas5blvd`]]: {unicode: "\uE97E"}, // Oblique form, ascending 5th, black and void
    /*  */[Code[`mnobas5wt`]]: {unicode: "\uE97F"}, // Oblique form, ascending 5th, white
    /*  */[Code[`mnobds2bl`]]: {unicode: "\uE980"}, // Oblique form, descending 2nd, black
    /*  */[Code[`mnobds2vd`]]: {unicode: "\uE981"}, // Oblique form, descending 2nd, void
    /*  */[Code[`mnobds2blvd`]]: {unicode: "\uE982"}, // Oblique form, descending 2nd, black and void
    /*  */[Code[`mnobds2wt`]]: {unicode: "\uE983"}, // Oblique form, descending 2nd, white
    /*  */[Code[`mnobds3bl`]]: {unicode: "\uE984"}, // Oblique form, descending 3rd, black
    /*  */[Code[`mnobds3vd`]]: {unicode: "\uE985"}, // Oblique form, descending 3rd, void
    /*  */[Code[`mnobds3blvd`]]: {unicode: "\uE986"}, // Oblique form, descending 3rd, black and void
    /*  */[Code[`mnobds3wt`]]: {unicode: "\uE987"}, // Oblique form, descending 3rd, white
    /*  */[Code[`mnobds4bl`]]: {unicode: "\uE988"}, // Oblique form, descending 4th, black
    /*  */[Code[`mnobds4vd`]]: {unicode: "\uE989"}, // Oblique form, descending 4th, void
    /*  */[Code[`mnobds4blvd`]]: {unicode: "\uE98A"}, // Oblique form, descending 4th, black and void
    /*  */[Code[`mnobds4wt`]]: {unicode: "\uE98B"}, // Oblique form, descending 4th, white
    /*  */[Code[`mnobds5bl`]]: {unicode: "\uE98C"}, // Oblique form, descending 5th, black
    /*  */[Code[`mnobds5vd`]]: {unicode: "\uE98D"}, // Oblique form, descending 5th, void
    /*  */[Code[`mnobds5blvd`]]: {unicode: "\uE98E"}, // Oblique form, descending 5th, black and void
    /*  */[Code[`mnobds5wt`]]: {unicode: "\uE98F"}, // Oblique form, descending 5th, white
    /*  */[Code[`chpn`]]: {unicode: "\uE990"}, // Punctum
    /*  */[Code[`chpnin`]]: {unicode: "\uE991"}, // Punctum inclinatum
    /*  */[Code[`chpninac`]]: {unicode: "\uE992"}, // Punctum inclinatum auctum
    /*  */[Code[`chpnindm`]]: {unicode: "\uE993"}, // Punctum inclinatum deminutum
    /*  */[Code[`chacas`]]: {unicode: "\uE994"}, // Punctum auctum, ascending
    /*  */[Code[`chacds`]]: {unicode: "\uE995"}, // Punctum auctum, descending
    /*  */[Code[`chpnvr`]]: {unicode: "\uE996"}, // Punctum virga
    /*  */[Code[`chpnvrrv`]]: {unicode: "\uE997"}, // Punctum virga, reversed
    /*  */[Code[`chpncv`]]: {unicode: "\uE998"}, // Punctum cavum
    /*  */[Code[`chpnln`]]: {unicode: "\uE999"}, // Punctum linea
    /*  */[Code[`chpnlncv`]]: {unicode: "\uE99A"}, // Punctum linea cavum
    /*  */[Code[`chql`]]: {unicode: "\uE99B"}, // Quilisma
    /*  */[Code[`choras`]]: {unicode: "\uE99C"}, // Oriscus ascending
    /*  */[Code[`chords`]]: {unicode: "\uE99D"}, // Oriscus descending
    /*  */[Code[`chorlq`]]: {unicode: "\uE99E"}, // Oriscus liquescens
    /*  */[Code[`chsp`]]: {unicode: "\uE99F"}, // Strophicus
    /*  */[Code[`chspac`]]: {unicode: "\uE9A0"}, // Strophicus auctus
    /*  */[Code[`chpndm`]]: {unicode: "\uE9A1"}, // Punctum deminutum
    /*  */[Code[`chpdlw`]]: {unicode: "\uE9B0"}, // Podatus, lower
    /*  */[Code[`chpdup`]]: {unicode: "\uE9B1"}, // Podatus, upper
    /*  */[Code[`chdmup`]]: {unicode: "\uE9B2"}, // Punctum deminutum, upper
    /*  */[Code[`chdmlw`]]: {unicode: "\uE9B3"}, // Punctum deminutum, lower
    /*  */[Code[`chenlnas2`]]: {unicode: "\uE9B4"}, // Entry line, ascending 2nd
    /*  */[Code[`chenlnas3`]]: {unicode: "\uE9B5"}, // Entry line, ascending 3rd
    /*  */[Code[`chenlnas4`]]: {unicode: "\uE9B6"}, // Entry line, ascending 4th
    /*  */[Code[`chenlnas5`]]: {unicode: "\uE9B7"}, // Entry line, ascending 5th
    /*  */[Code[`chenlnas6`]]: {unicode: "\uE9B8"}, // Entry line, ascending 6th
    /*  */[Code[`chlgds2`]]: {unicode: "\uE9B9"}, // Ligated stroke, descending 2nd
    /*  */[Code[`chlgds3`]]: {unicode: "\uE9BA"}, // Ligated stroke, descending 3rd
    /*  */[Code[`chlgds4`]]: {unicode: "\uE9BB"}, // Ligated stroke, descending 4th
    /*  */[Code[`chlgds5`]]: {unicode: "\uE9BC"}, // Ligated stroke, descending 5th
    /*  */[Code[`chcnlnas2`]]: {unicode: "\uE9BD"}, // Connecting line, ascending 2nd
    /*  */[Code[`chcnlnas3`]]: {unicode: "\uE9BE"}, // Connecting line, ascending 3rd
    /*  */[Code[`chcnlnas4`]]: {unicode: "\uE9BF"}, // Connecting line, ascending 4th
    /*  */[Code[`chcnlnas5`]]: {unicode: "\uE9C0"}, // Connecting line, ascending 5th
    /*  */[Code[`chcnlnas6`]]: {unicode: "\uE9C1"}, // Connecting line, ascending 6th
    /*  */[Code[`chsplq2`]]: {unicode: "\uE9C2"}, // Strophicus liquescens, 2nd
    /*  */[Code[`chsplq3`]]: {unicode: "\uE9C3"}, // Strophicus liquescens, 3rd
    /*  */[Code[`chsplq4`]]: {unicode: "\uE9C4"}, // Strophicus liquescens, 4th
    /*  */[Code[`chsplq5`]]: {unicode: "\uE9C5"}, // Strophicus liquescens, 5th
    /*  */[Code[`chicab`]]: {unicode: "\uE9D0"}, // Ictus above
    /*  */[Code[`chicbl`]]: {unicode: "\uE9D1"}, // Ictus below
    /*  */[Code[`chcrab`]]: {unicode: "\uE9D2"}, // Circulus above
    /*  */[Code[`chcrbl`]]: {unicode: "\uE9D3"}, // Circulus below
    /*  */[Code[`chsmab`]]: {unicode: "\uE9D4"}, // Semicirculus above
    /*  */[Code[`chsmbl`]]: {unicode: "\uE9D5"}, // Semicirculus below
    /*  */[Code[`chacab`]]: {unicode: "\uE9D6"}, // Accentus above
    /*  */[Code[`chacbl`]]: {unicode: "\uE9D7"}, // Accentus below
    /*  */[Code[`chep`]]: {unicode: "\uE9D8"}, // Episema
    /*  */[Code[`chag`]]: {unicode: "\uE9D9"}, // Augmentum (mora)
    /*  */[Code[`mdrnflsfB`]]: {unicode: "\uE9E0"}, // Flat, soft b (fa)
    /*  */[Code[`mdrnflhrB`]]: {unicode: "\uE9E1"}, // Flat, hard b (mi)
    /*  */[Code[`mdrnnt`]]: {unicode: "\uE9E2"}, // Natural
    /*  */[Code[`mdrnshcr`]]: {unicode: "\uE9E3"}, // Croix
    /*  */[Code[`mdrnflwtdt`]]: {unicode: "\uE9E4"}, // Flat with dot
    /*  */[Code[`mdrnntwtcr`]]: {unicode: "\uE9E5"}, // Natural with interrupted cross
    /*  */[Code[`mnrsmx`]]: {unicode: "\uE9F0"}, // Maxima rest
    /*  */[Code[`mnrslnpr`]]: {unicode: "\uE9F1"}, // Longa perfecta rest
    /*  */[Code[`mnrslnim`]]: {unicode: "\uE9F2"}, // Longa imperfecta rest
    /*  */[Code[`mnrsbr`]]: {unicode: "\uE9F3"}, // Brevis rest
    /*  */[Code[`mnrssb`]]: {unicode: "\uE9F4"}, // Semibrevis rest
    /*  */[Code[`mnrsmn`]]: {unicode: "\uE9F5"}, // Minima rest
    /*  */[Code[`mnrssm`]]: {unicode: "\uE9F6"}, // Semiminima rest
    /*  */[Code[`mnrsfs`]]: {unicode: "\uE9F7"}, // Fusa rest
    /*  */[Code[`mnrssf`]]: {unicode: "\uE9F8"}, // Semifusa rest
    /*  */[Code[`mnsgup`]]: {unicode: "\uEA00"}, // Signum congruentiae up
    /*  */[Code[`mnsgdn`]]: {unicode: "\uEA01"}, // Signum congruentiae down
    /*  */[Code[`mncsup`]]: {unicode: "\uEA02"}, // Mensural custos up
    /*  */[Code[`mncsdn`]]: {unicode: "\uEA03"}, // Mensural custos down
    /*  */[Code[`chcssmuppsls`]]: {unicode: "\uEA04"}, // Plainchant custos, stem up, lowest position
    /*  */[Code[`chcssmuppslw`]]: {unicode: "\uEA05"}, // Plainchant custos, stem up, low position
    /*  */[Code[`chcssmuppsmd`]]: {unicode: "\uEA06"}, // Plainchant custos, stem up, middle position
    /*  */[Code[`chcssmdnpsmd`]]: {unicode: "\uEA07"}, // Plainchant custos, stem down, middle position
    /*  */[Code[`chcssmdnpshg`]]: {unicode: "\uEA08"}, // Plainchant custos, stem down, high position
    /*  */[Code[`chcssmdnpshs`]]: {unicode: "\uEA09"}, // Plainchant custos, stem down, highest position
    /*  */[Code[`mncsch`]]: {unicode: "\uEA0A"}, // Checkmark custos
    /*  */[Code[`mncstn`]]: {unicode: "\uEA0B"}, // Turn-like custos
    /*  */[Code[`mnclstsq`]]: {unicode: "\uEA0C"}, // Coloration start, square
    /*  */[Code[`mnclensq`]]: {unicode: "\uEA0D"}, // Coloration end, square
    /*  */[Code[`mnclstrn`]]: {unicode: "\uEA0E"}, // Coloration start, round
    /*  */[Code[`mnclenrn`]]: {unicode: "\uEA0F"}, // Coloration end, round
    /*  */[Code[`mnalsg`]]: {unicode: "\uEA10"}, // Alteration sign
    /*  */[Code[`orql`]]: {unicode: "\uEA20"}, // Quilisma
    /*  */[Code[`oror`]]: {unicode: "\uEA21"}, // Oriscus
    /*  */[Code[`mdrnlqCMN`]]: {unicode: "\uEA22"}, // Liquescence
    /*  */[Code[`mdrnplCMN`]]: {unicode: "\uEA23"}, // Plica
    /*  */[Code[`mdrnGclCMN`]]: {unicode: "\uEA24"}, // G clef (Corpus Monodicum)
    /*  */[Code[`mdrnpnCMN`]]: {unicode: "\uEA25"}, // Punctum (Corpus Monodicum)
    /*  */[Code[`mdrnlqasCMN`]]: {unicode: "\uEA26"}, // Liquescent ascending (Corpus Monodicum)
    /*  */[Code[`mdrnlqdsCMN`]]: {unicode: "\uEA27"}, // Liquescent descending (Corpus Monodicum)
    /*  */[Code[`mdrnqlCMN`]]: {unicode: "\uEA28"}, // Quilisma (Corpus Monodicum)
    /*  */[Code[`mdrnspCMN`]]: {unicode: "\uEA29"}, // Strophicus (Corpus Monodicum)
    /*  */[Code[`mdrnorCMN`]]: {unicode: "\uEA2A"}, // Oriscus (Corpus Monodicum)
    /*  */[Code[`dsgr1`]]: {unicode: "\uEA30"}, // Daseian graves 1
    /*  */[Code[`dsgr2`]]: {unicode: "\uEA31"}, // Daseian graves 2
    /*  */[Code[`dsgr3`]]: {unicode: "\uEA32"}, // Daseian graves 3
    /*  */[Code[`dsgr4`]]: {unicode: "\uEA33"}, // Daseian graves 4
    /*  */[Code[`dsfn1`]]: {unicode: "\uEA34"}, // Daseian finales 1
    /*  */[Code[`dsfn2`]]: {unicode: "\uEA35"}, // Daseian finales 2
    /*  */[Code[`dsfn3`]]: {unicode: "\uEA36"}, // Daseian finales 3
    /*  */[Code[`dsfn4`]]: {unicode: "\uEA37"}, // Daseian finales 4
    /*  */[Code[`dssp1`]]: {unicode: "\uEA38"}, // Daseian superiores 1
    /*  */[Code[`dssp2`]]: {unicode: "\uEA39"}, // Daseian superiores 2
    /*  */[Code[`dssp3`]]: {unicode: "\uEA3A"}, // Daseian superiores 3
    /*  */[Code[`dssp4`]]: {unicode: "\uEA3B"}, // Daseian superiores 4
    /*  */[Code[`dsex1`]]: {unicode: "\uEA3C"}, // Daseian excellentes 1
    /*  */[Code[`dsex2`]]: {unicode: "\uEA3D"}, // Daseian excellentes 2
    /*  */[Code[`dsex3`]]: {unicode: "\uEA3E"}, // Daseian excellentes 3
    /*  */[Code[`dsex4`]]: {unicode: "\uEA3F"}, // Daseian excellentes 4
    /*  */[Code[`dsrs1`]]: {unicode: "\uEA40"}, // Daseian residua 1
    /*  */[Code[`dsrs2`]]: {unicode: "\uEA41"}, // Daseian residua 2
    /*  */[Code[`fg0`]]: {unicode: "\uEA50"}, // Figured bass 0
    /*  */[Code[`fg1`]]: {unicode: "\uEA51"}, // Figured bass 1
    /*  */[Code[`fg2`]]: {unicode: "\uEA52"}, // Figured bass 2
    /*  */[Code[`fg2rs`]]: {unicode: "\uEA53"}, // Figured bass 2 raised by half-step
    /*  */[Code[`fg3`]]: {unicode: "\uEA54"}, // Figured bass 3
    /*  */[Code[`fg4`]]: {unicode: "\uEA55"}, // Figured bass 4
    /*  */[Code[`fg4rs`]]: {unicode: "\uEA56"}, // Figured bass 4 raised by half-step
    /*  */[Code[`fg5`]]: {unicode: "\uEA57"}, // Figured bass 5
    /*  */[Code[`fg5rs1`]]: {unicode: "\uEA58"}, // Figured bass 5 raised by half-step
    /*  */[Code[`fg5rs2`]]: {unicode: "\uEA59"}, // Figured bass 5 raised by half-step 2
    /*  */[Code[`fg5rs3`]]: {unicode: "\uEA5A"}, // Figured bass diminished 5
    /*  */[Code[`fg6`]]: {unicode: "\uEA5B"}, // Figured bass 6
    /*  */[Code[`fg6rs`]]: {unicode: "\uEA5C"}, // Figured bass 6 raised by half-step
    /*  */[Code[`fg7`]]: {unicode: "\uEA5D"}, // Figured bass 7
    /*  */[Code[`fg7rs1`]]: {unicode: "\uEA5E"}, // Figured bass 7 raised by half-step
    /*  */[Code[`fg7rs2`]]: {unicode: "\uEA5F"}, // Figured bass 7 lowered by a half-step
    /*  */[Code[`fg8`]]: {unicode: "\uEA60"}, // Figured bass 8
    /*  */[Code[`fg9`]]: {unicode: "\uEA61"}, // Figured bass 9
    /*  */[Code[`fg9rs`]]: {unicode: "\uEA62"}, // Figured bass 9 raised by half-step
    /*  */[Code[`fgdbfl`]]: {unicode: "\uEA63"}, // Figured bass double flat
    /*  */[Code[`fgfl`]]: {unicode: "\uEA64"}, // Figured bass flat
    /*  */[Code[`fgnt`]]: {unicode: "\uEA65"}, // Figured bass natural
    /*  */[Code[`fgsh`]]: {unicode: "\uEA66"}, // Figured bass sharp
    /*  */[Code[`fgdbsh`]]: {unicode: "\uEA67"}, // Figured bass double sharp
    /*  */[Code[`fgbklf`]]: {unicode: "\uEA68"}, // Figured bass [
    /*  */[Code[`fgbkrt`]]: {unicode: "\uEA69"}, // Figured bass ]
    /*  */[Code[`fgprlf`]]: {unicode: "\uEA6A"}, // Figured bass (
    /*  */[Code[`fgprrt`]]: {unicode: "\uEA6B"}, // Figured bass )
    /*  */[Code[`fgpl`]]: {unicode: "\uEA6C"}, // Figured bass +
    /*  */[Code[`fgcmrs`]]: {unicode: "\uEA6D"}, // Combining raise
    /*  */[Code[`fgcmlw`]]: {unicode: "\uEA6E"}, // Combining lower
    /*  */[Code[`fg6rs2`]]: {unicode: "\uEA6F"}, // Figured bass 6 raised by half-step 2
    /*  */[Code[`fnzr`]]: {unicode: "\uEA70"}, // Function theory 0
    /*  */[Code[`fnon`]]: {unicode: "\uEA71"}, // Function theory 1
    /*  */[Code[`fntw`]]: {unicode: "\uEA72"}, // Function theory 2
    /*  */[Code[`fnth`]]: {unicode: "\uEA73"}, // Function theory 3
    /*  */[Code[`fnfr`]]: {unicode: "\uEA74"}, // Function theory 4
    /*  */[Code[`fnfv`]]: {unicode: "\uEA75"}, // Function theory 5
    /*  */[Code[`fnsx`]]: {unicode: "\uEA76"}, // Function theory 6
    /*  */[Code[`fnsv`]]: {unicode: "\uEA77"}, // Function theory 7
    /*  */[Code[`fnet`]]: {unicode: "\uEA78"}, // Function theory 8
    /*  */[Code[`fnnn`]]: {unicode: "\uEA79"}, // Function theory 9
    /*  */[Code[`fnlsth`]]: {unicode: "\uEA7A"}, // Function theory less than
    /*  */[Code[`fnmn`]]: {unicode: "\uEA7B"}, // Function theory minus
    /*  */[Code[`fngrth`]]: {unicode: "\uEA7C"}, // Function theory greater than
    /*  */[Code[`fnSSup`]]: {unicode: "\uEA7D"}, // Function theory major subdominant of subdominant
    /*  */[Code[`fnSSlw`]]: {unicode: "\uEA7E"}, // Function theory minor subdominant of subdominant
    /*  */[Code[`fnDup`]]: {unicode: "\uEA7F"}, // Function theory major dominant
    /*  */[Code[`fnDlw`]]: {unicode: "\uEA80"}, // Function theory minor dominant
    /*  */[Code[`fnDD`]]: {unicode: "\uEA81"}, // Function theory dominant of dominant
    /*  */[Code[`fnslDD`]]: {unicode: "\uEA82"}, // Function theory double dominant seventh
    /*  */[Code[`fnGup`]]: {unicode: "\uEA83"}, // Function theory G
    /*  */[Code[`fnGlw`]]: {unicode: "\uEA84"}, // Function theory g
    /*  */[Code[`fnNup`]]: {unicode: "\uEA85"}, // Function theory N
    /*  */[Code[`fnNlw`]]: {unicode: "\uEA86"}, // Function theory n
    /*  */[Code[`fnPup`]]: {unicode: "\uEA87"}, // Function theory P
    /*  */[Code[`fnPlw`]]: {unicode: "\uEA88"}, // Function theory p
    /*  */[Code[`fnSup`]]: {unicode: "\uEA89"}, // Function theory major subdominant
    /*  */[Code[`fnSlw`]]: {unicode: "\uEA8A"}, // Function theory minor subdominant
    /*  */[Code[`fnTup`]]: {unicode: "\uEA8B"}, // Function theory tonic
    /*  */[Code[`fnTlw`]]: {unicode: "\uEA8C"}, // Function theory minor tonic
    /*  */[Code[`fnVup`]]: {unicode: "\uEA8D"}, // Function theory V
    /*  */[Code[`fnVlw`]]: {unicode: "\uEA8E"}, // Function theory v
    /*  */[Code[`fnbklf`]]: {unicode: "\uEA8F"}, // Function theory bracket left
    /*  */[Code[`fnbkrt`]]: {unicode: "\uEA90"}, // Function theory bracket right
    /*  */[Code[`fnprlf`]]: {unicode: "\uEA91"}, // Function theory parenthesis left
    /*  */[Code[`fnprrt`]]: {unicode: "\uEA92"}, // Function theory parenthesis right
    /*  */[Code[`fnanlf`]]: {unicode: "\uEA93"}, // Function theory angle bracket left
    /*  */[Code[`fnanrt`]]: {unicode: "\uEA94"}, // Function theory angle bracket right
    /*  */[Code[`fnrp1`]]: {unicode: "\uEA95"}, // Function theory repetition 1
    /*  */[Code[`fnrp2`]]: {unicode: "\uEA96"}, // Function theory repetition 2
    /*  */[Code[`fnrn`]]: {unicode: "\uEA97"}, // Function theory prefix ring
    /*  */[Code[`fnpl`]]: {unicode: "\uEA98"}, // Function theory prefix plus
    /*  */[Code[`fnFup`]]: {unicode: "\uEA99"}, // Function theory F
    /*  */[Code[`fnIup`]]: {unicode: "\uEA9A"}, // Function theory I
    /*  */[Code[`fnIlw`]]: {unicode: "\uEA9B"}, // Function theory i
    /*  */[Code[`fnKup`]]: {unicode: "\uEA9C"}, // Function theory K
    /*  */[Code[`fnKlw`]]: {unicode: "\uEA9D"}, // Function theory k
    /*  */[Code[`fnLup`]]: {unicode: "\uEA9E"}, // Function theory L
    /*  */[Code[`fnLlw`]]: {unicode: "\uEA9F"}, // Function theory l
    /*  */[Code[`wgtrfs`]]: {unicode: "\uEAA0"}, // Trill wiggle segment, fastest
    /*  */[Code[`wgtrfrst`]]: {unicode: "\uEAA1"}, // Trill wiggle segment, faster still
    /*  */[Code[`wgtrfr`]]: {unicode: "\uEAA2"}, // Trill wiggle segment, faster
    /*  */[Code[`wgtrft`]]: {unicode: "\uEAA3"}, // Trill wiggle segment, fast
    /*  */[Code[`wgtr`]]: {unicode: "\uEAA4"}, // Trill wiggle segment
    /*  */[Code[`wgtrsl`]]: {unicode: "\uEAA5"}, // Trill wiggle segment, slow
    /*  */[Code[`wgtrsr`]]: {unicode: "\uEAA6"}, // Trill wiggle segment, slower
    /*  */[Code[`wgtrsrst`]]: {unicode: "\uEAA7"}, // Trill wiggle segment, slower still
    /*  */[Code[`wgtrss`]]: {unicode: "\uEAA8"}, // Trill wiggle segment, slowest
    /*  */[Code[`wgarup`]]: {unicode: "\uEAA9"}, // Arpeggiato wiggle segment, upwards
    /*  */[Code[`wgardn`]]: {unicode: "\uEAAA"}, // Arpeggiato wiggle segment, downwards
    /*  */[Code[`wgarupsw`]]: {unicode: "\uEAAB"}, // Arpeggiato upward swash
    /*  */[Code[`wgardnsw`]]: {unicode: "\uEAAC"}, // Arpeggiato downward swash
    /*  */[Code[`wgarupar`]]: {unicode: "\uEAAD"}, // Arpeggiato arrowhead up
    /*  */[Code[`wgardnar`]]: {unicode: "\uEAAE"}, // Arpeggiato arrowhead down
    /*  */[Code[`wggl`]]: {unicode: "\uEAAF"}, // Glissando wiggle segment
    /*  */[Code[`wgvb`]]: {unicode: "\uEAB0"}, // Vibrato / shake wiggle segment
    /*  */[Code[`wgvbwd`]]: {unicode: "\uEAB1"}, // Wide vibrato / shake wiggle segment
    /*  */[Code[`gtvbst`]]: {unicode: "\uEAB2"}, // Vibrato wiggle segment
    /*  */[Code[`gtwdvbst`]]: {unicode: "\uEAB3"}, // Wide vibrato wiggle segment
    /*  */[Code[`wgwvnr`]]: {unicode: "\uEAB4"}, // Narrow wavy line segment
    /*  */[Code[`wgwv`]]: {unicode: "\uEAB5"}, // Wavy line segment
    /*  */[Code[`wgwvwd`]]: {unicode: "\uEAB6"}, // Wide wavy line segment
    /*  */[Code[`wgsqwvnr`]]: {unicode: "\uEAB7"}, // Narrow square wave line segment
    /*  */[Code[`wgsqwv`]]: {unicode: "\uEAB8"}, // Square wave line segment
    /*  */[Code[`wgsqwvwd`]]: {unicode: "\uEAB9"}, // Wide square wave line segment
    /*  */[Code[`wgswnr`]]: {unicode: "\uEABA"}, // Narrow sawtooth line segment
    /*  */[Code[`wgsw`]]: {unicode: "\uEABB"}, // Sawtooth line segment
    /*  */[Code[`wgswwd`]]: {unicode: "\uEABC"}, // Wide sawtooth line segment
    /*  */[Code[`wgglgr1`]]: {unicode: "\uEABD"}, // Group glissando 1
    /*  */[Code[`wgglgr2`]]: {unicode: "\uEABE"}, // Group glissando 2
    /*  */[Code[`wgglgr3`]]: {unicode: "\uEABF"}, // Group glissando 3
    /*  */[Code[`wgcrcn`]]: {unicode: "\uEAC0"}, // Constant circular motion segment
    /*  */[Code[`wgcrcnfl`]]: {unicode: "\uEAC1"}, // Constant circular motion segment (flipped)
    /*  */[Code[`wgcrcnlg`]]: {unicode: "\uEAC2"}, // Constant circular motion segment (large)
    /*  */[Code[`wgcrcnfllg`]]: {unicode: "\uEAC3"}, // Constant circular motion segment (flipped, large)
    /*  */[Code[`wgcrst`]]: {unicode: "\uEAC4"}, // Circular motion start
    /*  */[Code[`wgcrls`]]: {unicode: "\uEAC5"}, // Circular motion segment, largest
    /*  */[Code[`wgcrlrst`]]: {unicode: "\uEAC6"}, // Circular motion segment, larger still
    /*  */[Code[`wgcrlr`]]: {unicode: "\uEAC7"}, // Circular motion segment, larger
    /*  */[Code[`wgcrlg`]]: {unicode: "\uEAC8"}, // Circular motion segment, large
    /*  */[Code[`wgcr`]]: {unicode: "\uEAC9"}, // Circular motion segment
    /*  */[Code[`wgcrsm`]]: {unicode: "\uEACA"}, // Circular motion segment, small
    /*  */[Code[`wgcren`]]: {unicode: "\uEACB"}, // Circular motion end
    /*  */[Code[`wgvbst`]]: {unicode: "\uEACC"}, // Vibrato start
    /*  */[Code[`wgvbmsfs`]]: {unicode: "\uEACD"}, // Vibrato smallest, fastest
    /*  */[Code[`wgvbmsfrst`]]: {unicode: "\uEACE"}, // Vibrato smallest, faster still
    /*  */[Code[`wgvbmsfr`]]: {unicode: "\uEACF"}, // Vibrato smallest, faster
    /*  */[Code[`wgvbmsft`]]: {unicode: "\uEAD0"}, // Vibrato smallest, fast
    /*  */[Code[`wgvbmssl`]]: {unicode: "\uEAD1"}, // Vibrato smallest, slow
    /*  */[Code[`wgvbmssr`]]: {unicode: "\uEAD2"}, // Vibrato smallest, slower
    /*  */[Code[`wgvbmsss`]]: {unicode: "\uEAD3"}, // Vibrato smallest, slowest
    /*  */[Code[`wgvbsmfs`]]: {unicode: "\uEAD4"}, // Vibrato small, fastest
    /*  */[Code[`wgvbsmfrst`]]: {unicode: "\uEAD5"}, // Vibrato small, faster still
    /*  */[Code[`wgvbsmfr`]]: {unicode: "\uEAD6"}, // Vibrato small, faster
    /*  */[Code[`wgvbsmft`]]: {unicode: "\uEAD7"}, // Vibrato small, fast
    /*  */[Code[`wgvbsmsl`]]: {unicode: "\uEAD8"}, // Vibrato small, slow
    /*  */[Code[`wgvbsmsr`]]: {unicode: "\uEAD9"}, // Vibrato small, slower
    /*  */[Code[`wgvbsmss`]]: {unicode: "\uEADA"}, // Vibrato small, slowest
    /*  */[Code[`wgvbmdfs`]]: {unicode: "\uEADB"}, // Vibrato medium, fastest
    /*  */[Code[`wgvbmdfrst`]]: {unicode: "\uEADC"}, // Vibrato medium, faster still
    /*  */[Code[`wgvbmdfr`]]: {unicode: "\uEADD"}, // Vibrato medium, faster
    /*  */[Code[`wgvbmdft`]]: {unicode: "\uEADE"}, // Vibrato medium, fast
    /*  */[Code[`wgvbmdsl`]]: {unicode: "\uEADF"}, // Vibrato medium, slow
    /*  */[Code[`wgvbmdsr`]]: {unicode: "\uEAE0"}, // Vibrato medium, slower
    /*  */[Code[`wgvbmdss`]]: {unicode: "\uEAE1"}, // Vibrato medium, slowest
    /*  */[Code[`wgvblgfs`]]: {unicode: "\uEAE2"}, // Vibrato large, fastest
    /*  */[Code[`wgvblgfrst`]]: {unicode: "\uEAE3"}, // Vibrato large, faster still
    /*  */[Code[`wgvblgfr`]]: {unicode: "\uEAE4"}, // Vibrato large, faster
    /*  */[Code[`wgvblgft`]]: {unicode: "\uEAE5"}, // Vibrato large, fast
    /*  */[Code[`wgvblgsl`]]: {unicode: "\uEAE6"}, // Vibrato large, slow
    /*  */[Code[`wgvblgsr`]]: {unicode: "\uEAE7"}, // Vibrato large, slower
    /*  */[Code[`wgvblgss`]]: {unicode: "\uEAE8"}, // Vibrato large, slowest
    /*  */[Code[`wgvblsfs`]]: {unicode: "\uEAE9"}, // Vibrato largest, fastest
    /*  */[Code[`wgvblsfrst`]]: {unicode: "\uEAEA"}, // Vibrato largest, faster still
    /*  */[Code[`wgvblsfr`]]: {unicode: "\uEAEB"}, // Vibrato largest, faster
    /*  */[Code[`wgvblsft`]]: {unicode: "\uEAEC"}, // Vibrato largest, fast
    /*  */[Code[`wgvblssl`]]: {unicode: "\uEAED"}, // Vibrato largest, slow
    /*  */[Code[`wgvblssr`]]: {unicode: "\uEAEE"}, // Vibrato largest, slower
    /*  */[Code[`wgvblsss`]]: {unicode: "\uEAEF"}, // Vibrato largest, slowest
    /*  */[Code[`wgrn1`]]: {unicode: "\uEAF0"}, // Quasi-random squiggle 1
    /*  */[Code[`wgrn2`]]: {unicode: "\uEAF1"}, // Quasi-random squiggle 2
    /*  */[Code[`wgrn3`]]: {unicode: "\uEAF2"}, // Quasi-random squiggle 3
    /*  */[Code[`wgrn4`]]: {unicode: "\uEAF3"}, // Quasi-random squiggle 4
    /*  */[Code[`bmacrt1`]]: {unicode: "\uEAF4"}, // Accel./rit. beam 1 (widest)
    /*  */[Code[`bmacrt2`]]: {unicode: "\uEAF5"}, // Accel./rit. beam 2
    /*  */[Code[`bmacrt3`]]: {unicode: "\uEAF6"}, // Accel./rit. beam 3
    /*  */[Code[`bmacrt4`]]: {unicode: "\uEAF7"}, // Accel./rit. beam 4
    /*  */[Code[`bmacrt5`]]: {unicode: "\uEAF8"}, // Accel./rit. beam 5
    /*  */[Code[`bmacrt6`]]: {unicode: "\uEAF9"}, // Accel./rit. beam 6
    /*  */[Code[`bmacrt7`]]: {unicode: "\uEAFA"}, // Accel./rit. beam 7
    /*  */[Code[`bmacrt8`]]: {unicode: "\uEAFB"}, // Accel./rit. beam 8
    /*  */[Code[`bmacrt9`]]: {unicode: "\uEAFC"}, // Accel./rit. beam 9
    /*  */[Code[`bmacrt10`]]: {unicode: "\uEAFD"}, // Accel./rit. beam 10
    /*  */[Code[`bmacrt11`]]: {unicode: "\uEAFE"}, // Accel./rit. beam 11
    /*  */[Code[`bmacrt12`]]: {unicode: "\uEAFF"}, // Accel./rit. beam 12
    /*  */[Code[`bmacrt13`]]: {unicode: "\uEB00"}, // Accel./rit. beam 13
    /*  */[Code[`bmacrt14`]]: {unicode: "\uEB01"}, // Accel./rit. beam 14
    /*  */[Code[`bmacrt15`]]: {unicode: "\uEB02"}, // Accel./rit. beam 15 (narrowest)
    /*  */[Code[`bmacrtfn`]]: {unicode: "\uEB03"}, // Accel./rit. beam terminating line
    /*  */[Code[`elmc`]]: {unicode: "\uEB10"}, // Microphone
    /*  */[Code[`elhd`]]: {unicode: "\uEB11"}, // Headphones
    /*  */[Code[`elhs`]]: {unicode: "\uEB12"}, // Headset
    /*  */[Code[`elds`]]: {unicode: "\uEB13"}, // Disc
    /*  */[Code[`eltp`]]: {unicode: "\uEB14"}, // Tape
    /*  */[Code[`elmxcn`]]: {unicode: "\uEB15"}, // Mixing console
    /*  */[Code[`elUSB`]]: {unicode: "\uEB16"}, // USB connection
    /*  */[Code[`elvdcm`]]: {unicode: "\uEB17"}, // Video camera
    /*  */[Code[`elmn`]]: {unicode: "\uEB18"}, // Monitor
    /*  */[Code[`elpr`]]: {unicode: "\uEB19"}, // Projector
    /*  */[Code[`elld`]]: {unicode: "\uEB1A"}, // Loudspeaker
    /*  */[Code[`elcm`]]: {unicode: "\uEB1B"}, // Camera
    /*  */[Code[`elpl`]]: {unicode: "\uEB1C"}, // Play
    /*  */[Code[`elst`]]: {unicode: "\uEB1D"}, // Stop
    /*  */[Code[`elps`]]: {unicode: "\uEB1E"}, // Pause
    /*  */[Code[`elftfr`]]: {unicode: "\uEB1F"}, // Fast-forward
    /*  */[Code[`elrw`]]: {unicode: "\uEB20"}, // Rewind
    /*  */[Code[`elskfr`]]: {unicode: "\uEB21"}, // Skip forwards
    /*  */[Code[`elskbc`]]: {unicode: "\uEB22"}, // Skip backwards
    /*  */[Code[`ellp`]]: {unicode: "\uEB23"}, // Loop
    /*  */[Code[`elrp`]]: {unicode: "\uEB24"}, // Replay
    /*  */[Code[`elsh`]]: {unicode: "\uEB25"}, // Shuffle
    /*  */[Code[`elmt`]]: {unicode: "\uEB26"}, // Mute
    /*  */[Code[`elun`]]: {unicode: "\uEB27"}, // Unmute
    /*  */[Code[`elmcmt`]]: {unicode: "\uEB28"}, // Mute microphone
    /*  */[Code[`elmcun`]]: {unicode: "\uEB29"}, // Unmute microphone
    /*  */[Code[`elpwonof`]]: {unicode: "\uEB2A"}, // Power on/off
    /*  */[Code[`elej`]]: {unicode: "\uEB2B"}, // Eject
    /*  */[Code[`elvlfd`]]: {unicode: "\uEB2C"}, // Combining volume fader
    /*  */[Code[`elvlfdtm`]]: {unicode: "\uEB2D"}, // Combining volume fader thumb
    /*  */[Code[`elvllv0`]]: {unicode: "\uEB2E"}, // Volume level 0%
    /*  */[Code[`elvllv20`]]: {unicode: "\uEB2F"}, // Volume level 20%
    /*  */[Code[`elvllv40`]]: {unicode: "\uEB30"}, // Volume level 40%
    /*  */[Code[`elvllv60`]]: {unicode: "\uEB31"}, // Volume level 60%
    /*  */[Code[`elvllv80`]]: {unicode: "\uEB32"}, // Volume level 80%
    /*  */[Code[`elvllv100`]]: {unicode: "\uEB33"}, // Volume level 100%
    /*  */[Code[`elMIDIin`]]: {unicode: "\uEB34"}, // MIDI in
    /*  */[Code[`elMIDIot`]]: {unicode: "\uEB35"}, // MIDI out
    /*  */[Code[`elMIDIcn0`]]: {unicode: "\uEB36"}, // MIDI controller 0%
    /*  */[Code[`elMIDIcn20`]]: {unicode: "\uEB37"}, // MIDI controller 20%
    /*  */[Code[`elMIDIcn40`]]: {unicode: "\uEB38"}, // MIDI controller 40%
    /*  */[Code[`elMIDIcn60`]]: {unicode: "\uEB39"}, // MIDI controller 60%
    /*  */[Code[`elMIDIcn80`]]: {unicode: "\uEB3A"}, // MIDI controller 80%
    /*  */[Code[`elMIDIcn100`]]: {unicode: "\uEB3B"}, // MIDI controller 100%
    /*  */[Code[`eladmn`]]: {unicode: "\uEB3C"}, // Mono audio setup
    /*  */[Code[`eladst`]]: {unicode: "\uEB3D"}, // Stereo audio setup
    /*  */[Code[`eladchon`]]: {unicode: "\uEB3E"}, // One channel (mono)
    /*  */[Code[`eladchtw`]]: {unicode: "\uEB3F"}, // Two channels (stereo)
    /*  */[Code[`eladchthfr`]]: {unicode: "\uEB40"}, // Three channels (frontal)
    /*  */[Code[`eladchthsr`]]: {unicode: "\uEB41"}, // Three channels (surround)
    /*  */[Code[`eladchfr`]]: {unicode: "\uEB42"}, // Four channels
    /*  */[Code[`eladchfv`]]: {unicode: "\uEB43"}, // Five channels
    /*  */[Code[`eladchsx`]]: {unicode: "\uEB44"}, // Six channels (5.1 surround)
    /*  */[Code[`eladchsv`]]: {unicode: "\uEB45"}, // Seven channels
    /*  */[Code[`eladchet`]]: {unicode: "\uEB46"}, // Eight channels (7.1 surround)
    /*  */[Code[`ellnin`]]: {unicode: "\uEB47"}, // Line in
    /*  */[Code[`ellnot`]]: {unicode: "\uEB48"}, // Line out
    /*  */[Code[`eladin`]]: {unicode: "\uEB49"}, // Audio in
    /*  */[Code[`eladot`]]: {unicode: "\uEB4A"}, // Audio out
    /*  */[Code[`elvdin`]]: {unicode: "\uEB4B"}, // Video in
    /*  */[Code[`elvdot`]]: {unicode: "\uEB4C"}, // Video out
    /*  */[Code[`eldtin`]]: {unicode: "\uEB4D"}, // Data in
    /*  */[Code[`eldtot`]]: {unicode: "\uEB4E"}, // Data out
    /*  */[Code[`eldw`]]: {unicode: "\uEB4F"}, // Download
    /*  */[Code[`elup`]]: {unicode: "\uEB50"}, // Upload
    /*  */[Code[`arblup`]]: {unicode: "\uEB60"}, // Black arrow up (N)
    /*  */[Code[`arbluprt`]]: {unicode: "\uEB61"}, // Black arrow up-right (NE)
    /*  */[Code[`arblrt`]]: {unicode: "\uEB62"}, // Black arrow right (E)
    /*  */[Code[`arbldnrt`]]: {unicode: "\uEB63"}, // Black arrow down-right (SE)
    /*  */[Code[`arbldn`]]: {unicode: "\uEB64"}, // Black arrow down (S)
    /*  */[Code[`arbldnlf`]]: {unicode: "\uEB65"}, // Black arrow down-left (SW)
    /*  */[Code[`arbllf`]]: {unicode: "\uEB66"}, // Black arrow left (W)
    /*  */[Code[`arbluplf`]]: {unicode: "\uEB67"}, // Black arrow up-left (NW)
    /*  */[Code[`arwtup`]]: {unicode: "\uEB68"}, // White arrow up (N)
    /*  */[Code[`arwtuprt`]]: {unicode: "\uEB69"}, // White arrow up-right (NE)
    /*  */[Code[`arwtrt`]]: {unicode: "\uEB6A"}, // White arrow right (E)
    /*  */[Code[`arwtdnrt`]]: {unicode: "\uEB6B"}, // White arrow down-right (SE)
    /*  */[Code[`arwtdn`]]: {unicode: "\uEB6C"}, // White arrow down (S)
    /*  */[Code[`arwtdnlf`]]: {unicode: "\uEB6D"}, // White arrow down-left (SW)
    /*  */[Code[`arwtlf`]]: {unicode: "\uEB6E"}, // White arrow left (W)
    /*  */[Code[`arwtuplf`]]: {unicode: "\uEB6F"}, // White arrow up-left (NW)
    /*  */[Code[`aropup`]]: {unicode: "\uEB70"}, // Open arrow up (N)
    /*  */[Code[`aropuprt`]]: {unicode: "\uEB71"}, // Open arrow up-right (NE)
    /*  */[Code[`aroprt`]]: {unicode: "\uEB72"}, // Open arrow right (E)
    /*  */[Code[`aropdnrt`]]: {unicode: "\uEB73"}, // Open arrow down-right (SE)
    /*  */[Code[`aropdn`]]: {unicode: "\uEB74"}, // Open arrow down (S)
    /*  */[Code[`aropdnlf`]]: {unicode: "\uEB75"}, // Open arrow down-left (SW)
    /*  */[Code[`aroplf`]]: {unicode: "\uEB76"}, // Open arrow left (W)
    /*  */[Code[`aropuplf`]]: {unicode: "\uEB77"}, // Open arrow up-left (NW)
    /*  */[Code[`ahblup`]]: {unicode: "\uEB78"}, // Black arrowhead up (N)
    /*  */[Code[`ahbluprt`]]: {unicode: "\uEB79"}, // Black arrowhead up-right (NE)
    /*  */[Code[`ahblrt`]]: {unicode: "\uEB7A"}, // Black arrowhead right (E)
    /*  */[Code[`ahbldnrt`]]: {unicode: "\uEB7B"}, // Black arrowhead down-right (SE)
    /*  */[Code[`ahbldn`]]: {unicode: "\uEB7C"}, // Black arrowhead down (S)
    /*  */[Code[`ahbldnlf`]]: {unicode: "\uEB7D"}, // Black arrowhead down-left (SW)
    /*  */[Code[`ahbllf`]]: {unicode: "\uEB7E"}, // Black arrowhead left (W)
    /*  */[Code[`ahbluplf`]]: {unicode: "\uEB7F"}, // Black arrowhead up-left (NW)
    /*  */[Code[`ahwtup`]]: {unicode: "\uEB80"}, // White arrowhead up (N)
    /*  */[Code[`ahwtuprt`]]: {unicode: "\uEB81"}, // White arrowhead up-right (NE)
    /*  */[Code[`ahwtrt`]]: {unicode: "\uEB82"}, // White arrowhead right (E)
    /*  */[Code[`ahwtdnrt`]]: {unicode: "\uEB83"}, // White arrowhead down-right (SE)
    /*  */[Code[`ahwtdn`]]: {unicode: "\uEB84"}, // White arrowhead down (S)
    /*  */[Code[`ahwtdnlf`]]: {unicode: "\uEB85"}, // White arrowhead down-left (SW)
    /*  */[Code[`ahwtlf`]]: {unicode: "\uEB86"}, // White arrowhead left (W)
    /*  */[Code[`ahwtuplf`]]: {unicode: "\uEB87"}, // White arrowhead up-left (NW)
    /*  */[Code[`ahopup`]]: {unicode: "\uEB88"}, // Open arrowhead up (N)
    /*  */[Code[`ahopuprt`]]: {unicode: "\uEB89"}, // Open arrowhead up-right (NE)
    /*  */[Code[`ahoprt`]]: {unicode: "\uEB8A"}, // Open arrowhead right (E)
    /*  */[Code[`ahopdnrt`]]: {unicode: "\uEB8B"}, // Open arrowhead down-right (SE)
    /*  */[Code[`ahopdn`]]: {unicode: "\uEB8C"}, // Open arrowhead down (S)
    /*  */[Code[`ahopdnlf`]]: {unicode: "\uEB8D"}, // Open arrowhead down-left (SW)
    /*  */[Code[`ahoplf`]]: {unicode: "\uEB8E"}, // Open arrowhead left (W)
    /*  */[Code[`ahopuplf`]]: {unicode: "\uEB8F"}, // Open arrowhead up-left (NW)
    /*  */[Code[`stpsrs1`]]: {unicode: "\uEB90", width: 0}, // Raise 1 staff position
    /*  */[Code[`stpsrs2`]]: {unicode: "\uEB91", width: 0}, // Raise 2 staff positions
    /*  */[Code[`stpsrs3`]]: {unicode: "\uEB92", width: 0}, // Raise 3 staff positions
    /*  */[Code[`stpsrs4`]]: {unicode: "\uEB93", width: 0}, // Raise 4 staff positions
    /*  */[Code[`stpsrs5`]]: {unicode: "\uEB94", width: 0}, // Raise 5 staff positions
    /*  */[Code[`stpsrs6`]]: {unicode: "\uEB95", width: 0}, // Raise 6 staff positions
    /*  */[Code[`stpsrs7`]]: {unicode: "\uEB96", width: 0}, // Raise 7 staff positions
    /*  */[Code[`stpsrs8`]]: {unicode: "\uEB97", width: 0}, // Raise 8 staff positions
    /*  */[Code[`stpslw1`]]: {unicode: "\uEB98", width: 0}, // Lower 1 staff position
    /*  */[Code[`stpslw2`]]: {unicode: "\uEB99", width: 0}, // Lower 2 staff positions
    /*  */[Code[`stpslw3`]]: {unicode: "\uEB9A", width: 0}, // Lower 3 staff positions
    /*  */[Code[`stpslw4`]]: {unicode: "\uEB9B", width: 0}, // Lower 4 staff positions
    /*  */[Code[`stpslw5`]]: {unicode: "\uEB9C", width: 0}, // Lower 5 staff positions
    /*  */[Code[`stpslw6`]]: {unicode: "\uEB9D", width: 0}, // Lower 6 staff positions
    /*  */[Code[`stpslw7`]]: {unicode: "\uEB9E", width: 0}, // Lower 7 staff positions
    /*  */[Code[`stpslw8`]]: {unicode: "\uEB9F", width: 0}, // Lower 8 staff positions
    /*  */[Code[`ltst6ln`]]: {unicode: "\uEBA0"}, // Lute tablature staff, 6 courses
    /*  */[Code[`ltst6lnwd`]]: {unicode: "\uEBA1"}, // Lute tablature staff, 6 courses (wide)
    /*  */[Code[`ltst6lnnr`]]: {unicode: "\uEBA2"}, // Lute tablature staff, 6 courses (narrow)
    /*  */[Code[`ltblstrp`]]: {unicode: "\uEBA3"}, // Lute tablature start repeat barline
    /*  */[Code[`ltblenrp`]]: {unicode: "\uEBA4"}, // Lute tablature end repeat barline
    /*  */[Code[`ltblfn`]]: {unicode: "\uEBA5"}, // Lute tablature final barline
    /*  */[Code[`ltdrdbwh`]]: {unicode: "\uEBA6"}, // Double whole note (breve) duration sign
    /*  */[Code[`ltdrwh`]]: {unicode: "\uEBA7"}, // Whole note (semibreve) duration sign
    /*  */[Code[`ltdrhf`]]: {unicode: "\uEBA8"}, // Half note (minim) duration sign
    /*  */[Code[`ltdrqr`]]: {unicode: "\uEBA9"}, // Quarter note (crotchet) duration sign
    /*  */[Code[`ltdr8`]]: {unicode: "\uEBAA"}, // Eighth note (quaver) duration sign
    /*  */[Code[`ltdr16`]]: {unicode: "\uEBAB"}, // 16th note (semiquaver) duration sign
    /*  */[Code[`ltdr32`]]: {unicode: "\uEBAC"}, // 32nd note (demisemiquaver) duration sign
    /*  */[Code[`ltfiRHtm`]]: {unicode: "\uEBAD"}, // Right-hand fingering, thumb
    /*  */[Code[`ltfiRHfr`]]: {unicode: "\uEBAE"}, // Right-hand fingering, first finger
    /*  */[Code[`ltfiRHsc`]]: {unicode: "\uEBAF"}, // Right-hand fingering, second finger
    /*  */[Code[`ltfiRHth`]]: {unicode: "\uEBB0"}, // Right-hand fingering, third finger
    /*  */[Code[`ltfrfrA`]]: {unicode: "\uEBC0"}, // Open string (a)
    /*  */[Code[`ltfrfrB`]]: {unicode: "\uEBC1"}, // First fret (b)
    /*  */[Code[`ltfrfrC`]]: {unicode: "\uEBC2"}, // Second fret (c)
    /*  */[Code[`ltfrfrD`]]: {unicode: "\uEBC3"}, // Third fret (d)
    /*  */[Code[`ltfrfrE`]]: {unicode: "\uEBC4"}, // Fourth fret (e)
    /*  */[Code[`ltfrfrF`]]: {unicode: "\uEBC5"}, // Fifth fret (f)
    /*  */[Code[`ltfrfrG`]]: {unicode: "\uEBC6"}, // Sixth fret (g)
    /*  */[Code[`ltfrfrH`]]: {unicode: "\uEBC7"}, // Seventh fret (h)
    /*  */[Code[`ltfrfrI`]]: {unicode: "\uEBC8"}, // Eighth fret (i)
    /*  */[Code[`ltfrfrK`]]: {unicode: "\uEBC9"}, // Ninth fret (k)
    /*  */[Code[`ltfrfrL`]]: {unicode: "\uEBCA"}, // 10th fret (l)
    /*  */[Code[`ltfrfrM`]]: {unicode: "\uEBCB"}, // 11th fret (m)
    /*  */[Code[`ltfrfrN`]]: {unicode: "\uEBCC"}, // 12th fret (n)
    /*  */[Code[`ltfr7cr`]]: {unicode: "\uEBCD"}, // Seventh course (diapason)
    /*  */[Code[`ltfr8cr`]]: {unicode: "\uEBCE"}, // Eighth course (diapason)
    /*  */[Code[`ltfr9cr`]]: {unicode: "\uEBCF"}, // Ninth course (diapason)
    /*  */[Code[`ltfr10cr`]]: {unicode: "\uEBD0"}, // 10th course (diapason)
    /*  */[Code[`ltfrmrup`]]: {unicode: "\uEBD1"}, // Mordent with upper auxiliary
    /*  */[Code[`ltfrmrlw`]]: {unicode: "\uEBD2"}, // Mordent with lower auxiliary
    /*  */[Code[`ltfrmrin`]]: {unicode: "\uEBD3"}, // Inverted mordent
    /*  */[Code[`ltfrapbl`]]: {unicode: "\uEBD4"}, // Appoggiatura from below
    /*  */[Code[`ltfrapab`]]: {unicode: "\uEBD5"}, // Appoggiatura from above
    /*  */[Code[`ltitfr0`]]: {unicode: "\uEBE0"}, // Open string (0)
    /*  */[Code[`ltitfr1`]]: {unicode: "\uEBE1"}, // First fret (1)
    /*  */[Code[`ltitfr2`]]: {unicode: "\uEBE2"}, // Second fret (2)
    /*  */[Code[`ltitfr3`]]: {unicode: "\uEBE3"}, // Third fret (3)
    /*  */[Code[`ltitfr4`]]: {unicode: "\uEBE4"}, // Fourth fret (4)
    /*  */[Code[`ltitfr5`]]: {unicode: "\uEBE5"}, // Fifth fret (5)
    /*  */[Code[`ltitfr6`]]: {unicode: "\uEBE6"}, // Sixth fret (6)
    /*  */[Code[`ltitfr7`]]: {unicode: "\uEBE7"}, // Seventh fret (7)
    /*  */[Code[`ltitfr8`]]: {unicode: "\uEBE8"}, // Eighth fret (8)
    /*  */[Code[`ltitfr9`]]: {unicode: "\uEBE9"}, // Ninth fret (9)
    /*  */[Code[`ltittmft`]]: {unicode: "\uEBEA"}, // Fast tempo indication (de Mudarra)
    /*  */[Code[`ltittmsmft`]]: {unicode: "\uEBEB"}, // Somewhat fast tempo indication (de Narvaez)
    /*  */[Code[`ltittmntftnrsl`]]: {unicode: "\uEBEC"}, // Neither fast nor slow tempo indication (de Mudarra)
    /*  */[Code[`ltittmsl`]]: {unicode: "\uEBED"}, // Slow tempo indication (de Mudarra)
    /*  */[Code[`ltittmvrsl`]]: {unicode: "\uEBEE"}, // Very slow indication (de Narvaez)
    /*  */[Code[`ltittmtr`]]: {unicode: "\uEBEF"}, // Triple time indication
    /*  */[Code[`ltitclFfaut`]]: {unicode: "\uEBF0"}, // F fa ut clef
    /*  */[Code[`ltitclCslfaut`]]: {unicode: "\uEBF1"}, // C sol fa ut clef
    /*  */[Code[`ltittr`]]: {unicode: "\uEBF2"}, // Single-finger tremolo or mordent
    /*  */[Code[`ltithlnt`]]: {unicode: "\uEBF3"}, // Hold note
    /*  */[Code[`ltithlfi`]]: {unicode: "\uEBF4"}, // Hold finger in place
    /*  */[Code[`ltitrlfi`]]: {unicode: "\uEBF5"}, // Release finger
    /*  */[Code[`ltitvb`]]: {unicode: "\uEBF6"}, // Vibrato (verre cass\u00e9)
    /*  */[Code[`ltgrAlw`]]: {unicode: "\uEC00"}, // 5th course, 1st fret (a)
    /*  */[Code[`ltgrBlw`]]: {unicode: "\uEC01"}, // 4th course, 1st fret (b)
    /*  */[Code[`ltgrClw`]]: {unicode: "\uEC02"}, // 3rd course, 1st fret (c)
    /*  */[Code[`ltgrDlw`]]: {unicode: "\uEC03"}, // 2nd course, 1st fret (d)
    /*  */[Code[`ltgrElw`]]: {unicode: "\uEC04"}, // 1st course, 1st fret (e)
    /*  */[Code[`ltgrFlw`]]: {unicode: "\uEC05"}, // 5th course, 2nd fret (f)
    /*  */[Code[`ltgrGlw`]]: {unicode: "\uEC06"}, // 4th course, 2nd fret (g)
    /*  */[Code[`ltgrHlw`]]: {unicode: "\uEC07"}, // 3rd course, 2nd fret (h)
    /*  */[Code[`ltgrIlw`]]: {unicode: "\uEC08"}, // 2nd course, 2nd fret (i)
    /*  */[Code[`ltgrKlw`]]: {unicode: "\uEC09"}, // 1st course, 2nd fret (k)
    /*  */[Code[`ltgrLlw`]]: {unicode: "\uEC0A"}, // 5th course, 3rd fret (l)
    /*  */[Code[`ltgrMlw`]]: {unicode: "\uEC0B"}, // 4th course, 3rd fret (m)
    /*  */[Code[`ltgrNlw`]]: {unicode: "\uEC0C"}, // 3rd course, 3rd fret (n)
    /*  */[Code[`ltgrOlw`]]: {unicode: "\uEC0D"}, // 2nd course, 3rd fret (o)
    /*  */[Code[`ltgrPlw`]]: {unicode: "\uEC0E"}, // 1st course, 3rd fret (p)
    /*  */[Code[`ltgrQlw`]]: {unicode: "\uEC0F"}, // 5th course, 4th fret (q)
    /*  */[Code[`ltgrRlw`]]: {unicode: "\uEC10"}, // 4th course, 4th fret (r)
    /*  */[Code[`ltgrSlw`]]: {unicode: "\uEC11"}, // 3rd course, 4th fret (s)
    /*  */[Code[`ltgrTlw`]]: {unicode: "\uEC12"}, // 2nd course, 4th fret (t)
    /*  */[Code[`ltgrVlw`]]: {unicode: "\uEC13"}, // 1st course, 4th fret (v)
    /*  */[Code[`ltgrXlw`]]: {unicode: "\uEC14"}, // 5th course, 5th fret (x)
    /*  */[Code[`ltgrYlw`]]: {unicode: "\uEC15"}, // 4th course, 5th fret (y)
    /*  */[Code[`ltgrZlw`]]: {unicode: "\uEC16"}, // 3rd course, 5th fret (z)
    /*  */[Code[`ltgrAup`]]: {unicode: "\uEC17"}, // 6th course, 1st fret (A)
    /*  */[Code[`ltgrBup`]]: {unicode: "\uEC18"}, // 6th course, 2nd fret (B)
    /*  */[Code[`ltgrCup`]]: {unicode: "\uEC19"}, // 6th course, 3rd fret (C)
    /*  */[Code[`ltgrDup`]]: {unicode: "\uEC1A"}, // 6th course, 4th fret (D)
    /*  */[Code[`ltgrEup`]]: {unicode: "\uEC1B"}, // 6th course, 5th fret (E)
    /*  */[Code[`ltgrFup`]]: {unicode: "\uEC1C"}, // 6th course, 6th fret (F)
    /*  */[Code[`ltgrGup`]]: {unicode: "\uEC1D"}, // 6th course, 7th fret (G)
    /*  */[Code[`ltgrHup`]]: {unicode: "\uEC1E"}, // 6th course, 8th fret (H)
    /*  */[Code[`ltgrIup`]]: {unicode: "\uEC1F"}, // 6th course, 9th fret (I)
    /*  */[Code[`ltgrKup`]]: {unicode: "\uEC20"}, // 6th course, 10th fret (K)
    /*  */[Code[`ltgrLup`]]: {unicode: "\uEC21"}, // 6th course, 11th fret (L)
    /*  */[Code[`ltgrMup`]]: {unicode: "\uEC22"}, // 6th course, 12th fret (M)
    /*  */[Code[`ltgrNup`]]: {unicode: "\uEC23"}, // 6th course, 13th fret (N)
    /*  */[Code[`kvCcl`]]: {unicode: "\uEC30"}, // Kievan C clef (tse-fa-ut)
    /*  */[Code[`kvensy`]]: {unicode: "\uEC31"}, // Kievan ending symbol
    /*  */[Code[`kvntrc`]]: {unicode: "\uEC32"}, // Kievan reciting note
    /*  */[Code[`kvntwh`]]: {unicode: "\uEC33"}, // Kievan whole note
    /*  */[Code[`kvntwhfn`]]: {unicode: "\uEC34"}, // Kievan final whole note
    /*  */[Code[`kvnthfstln`]]: {unicode: "\uEC35"}, // Kievan half note (on staff line)
    /*  */[Code[`kvnthfstsp`]]: {unicode: "\uEC36"}, // Kievan half note (in staff space)
    /*  */[Code[`kvntqrsmup`]]: {unicode: "\uEC37"}, // Kievan quarter note, stem up
    /*  */[Code[`kvntqrsmdn`]]: {unicode: "\uEC38"}, // Kievan quarter note, stem down
    /*  */[Code[`kvnt8smup`]]: {unicode: "\uEC39"}, // Kievan eighth note, stem up
    /*  */[Code[`kvnt8smdn`]]: {unicode: "\uEC3A"}, // Kievan eighth note, stem down
    /*  */[Code[`kvntbm`]]: {unicode: "\uEC3B"}, // Kievan beam
    /*  */[Code[`kvagdt`]]: {unicode: "\uEC3C"}, // Kievan augmentation dot
    /*  */[Code[`kvacsh`]]: {unicode: "\uEC3D"}, // Kievan sharp
    /*  */[Code[`kvacfl`]]: {unicode: "\uEC3E"}, // Kievan flat
    /*  */[Code[`kdhndo`]]: {unicode: "\uEC40"}, // Do hand sign
    /*  */[Code[`kdhnre`]]: {unicode: "\uEC41"}, // Re hand sign
    /*  */[Code[`kdhnmi`]]: {unicode: "\uEC42"}, // Mi hand sign
    /*  */[Code[`kdhnfa`]]: {unicode: "\uEC43"}, // Fa hand sign
    /*  */[Code[`kdhnso`]]: {unicode: "\uEC44"}, // So hand sign
    /*  */[Code[`kdhnla`]]: {unicode: "\uEC45"}, // La hand sign
    /*  */[Code[`kdhnti`]]: {unicode: "\uEC46"}, // Ti hand sign
    /*  */[Code[`smsh`]]: {unicode: "\uEC50"}, // Sharp stem up
    /*  */[Code[`smshwt`]]: {unicode: "\uEC51"}, // Sharp (white) stem up
    /*  */[Code[`smfl`]]: {unicode: "\uEC52"}, // Flat
    /*  */[Code[`smflwt`]]: {unicode: "\uEC53"}, // Flat (white)
    /*  */[Code[`smhssh`]]: {unicode: "\uEC54"}, // Sharp history sign
    /*  */[Code[`smhsdbsh`]]: {unicode: "\uEC55"}, // Double sharp history sign
    /*  */[Code[`smhsfl`]]: {unicode: "\uEC56"}, // Flat history sign
    /*  */[Code[`smhsdbfl`]]: {unicode: "\uEC57"}, // Double flat history sign
    /*  */[Code[`smnt`]]: {unicode: "\uEC58"}, // Natural (N)
    /*  */[Code[`smshdn`]]: {unicode: "\uEC59"}, // Sharp stem down
    /*  */[Code[`smshwtdn`]]: {unicode: "\uEC5A"}, // Sharp (white) stem down
    /*  */[Code[`msdontph`]]: {unicode: "\uEC60"}, // Do not photocopy
    /*  */[Code[`msdontcp`]]: {unicode: "\uEC61"}, // Do not copy
    /*  */[Code[`msey`]]: {unicode: "\uEC62"}, // Eyeglasses
    /*  */[Code[`mtmdarlf`]]: {unicode: "\uEC63"}, // Left-pointing arrow for metric modulation
    /*  */[Code[`mtmdarrt`]]: {unicode: "\uEC64"}, // Right-pointing arrow for metric modulation
    /*  */[Code[`tmsgbklf`]]: {unicode: "\uEC80"}, // Left bracket for whole time signature
    /*  */[Code[`tmsgbkrt`]]: {unicode: "\uEC81"}, // Right bracket for whole time signature
    /*  */[Code[`tmsgbklfsm`]]: {unicode: "\uEC82"}, // Left bracket for numerator only
    /*  */[Code[`tmsgbkrtsm`]]: {unicode: "\uEC83"}, // Right bracket for numerator only
    /*  */[Code[`tmsgsl`]]: {unicode: "\uEC84"}, // Time signature slash separator
    /*  */[Code[`tmsgct2`]]: {unicode: "\uEC85"}, // Cut time (Bach)
    /*  */[Code[`tmsgct3`]]: {unicode: "\uEC86"}, // Cut triple time (9/8)
    /*  */[Code[`oclc`]]: {unicode: "\uEC90"}, // Loco
    /*  */[Code[`ocbsA`]]: {unicode: "\uEC91"}, // a (baseline)
    /*  */[Code[`ocspA`]]: {unicode: "\uEC92"}, // a (superscript)
    /*  */[Code[`ocbsB`]]: {unicode: "\uEC93"}, // b (baseline)
    /*  */[Code[`ocspB`]]: {unicode: "\uEC94"}, // b (superscript)
    /*  */[Code[`ocbsM`]]: {unicode: "\uEC95"}, // m (baseline)
    /*  */[Code[`ocspM`]]: {unicode: "\uEC96"}, // m (superscript)
    /*  */[Code[`ocbsV`]]: {unicode: "\uEC97"}, // v (baseline)
    /*  */[Code[`ocspV`]]: {unicode: "\uEC98"}, // v (superscript)
    /*  */[Code[`mtntdbwh`]]: {unicode: "\uECA0"}, // Double whole note (breve)
    /*  */[Code[`mtntdbwhsq`]]: {unicode: "\uECA1"}, // Double whole note (square)
    /*  */[Code[`mtntwh`]]: {unicode: "\uECA2"}, // Whole note (semibreve)
    /*  */[Code[`mtnthfup`]]: {unicode: "\uECA3"}, // Half note (minim) stem up
    /*  */[Code[`mtnthfdn`]]: {unicode: "\uECA4"}, // Half note (minim) stem down
    /*  */[Code[`mtntqrup`]]: {unicode: "\uECA5"}, // Quarter note (crotchet) stem up
    /*  */[Code[`mtntqrdn`]]: {unicode: "\uECA6"}, // Quarter note (crotchet) stem down
    /*  */[Code[`mtnt8up`]]: {unicode: "\uECA7"}, // Eighth note (quaver) stem up
    /*  */[Code[`mtnt8dn`]]: {unicode: "\uECA8"}, // Eighth note (quaver) stem down
    /*  */[Code[`mtnt16up`]]: {unicode: "\uECA9"}, // 16th note (semiquaver) stem up
    /*  */[Code[`mtnt16dn`]]: {unicode: "\uECAA"}, // 16th note (semiquaver) stem down
    /*  */[Code[`mtnt32up`]]: {unicode: "\uECAB"}, // 32nd note (demisemiquaver) stem up
    /*  */[Code[`mtnt32dn`]]: {unicode: "\uECAC"}, // 32nd note (demisemiquaver) stem down
    /*  */[Code[`mtnt64up`]]: {unicode: "\uECAD"}, // 64th note (hemidemisemiquaver) stem up
    /*  */[Code[`mtnt64dn`]]: {unicode: "\uECAE"}, // 64th note (hemidemisemiquaver) stem down
    /*  */[Code[`mtnt128up`]]: {unicode: "\uECAF"}, // 128th note (semihemidemisemiquaver) stem up
    /*  */[Code[`mtnt128dn`]]: {unicode: "\uECB0"}, // 128th note (semihemidemisemiquaver) stem down
    /*  */[Code[`mtnt256up`]]: {unicode: "\uECB1"}, // 256th note (demisemihemidemisemiquaver) stem up
    /*  */[Code[`mtnt256dn`]]: {unicode: "\uECB2"}, // 256th note (demisemihemidemisemiquaver) stem down
    /*  */[Code[`mtnt512up`]]: {unicode: "\uECB3"}, // 512th note (hemidemisemihemidemisemiquaver) stem up
    /*  */[Code[`mtnt512dn`]]: {unicode: "\uECB4"}, // 512th note (hemidemisemihemidemisemiquaver) stem down
    /*  */[Code[`mtnt1024up`]]: {unicode: "\uECB5"}, // 1024th note (semihemidemisemihemidemisemiquaver) stem up
    /*  */[Code[`mtnt1024dn`]]: {unicode: "\uECB6"}, // 1024th note (semihemidemisemihemidemisemiquaver) stem down
    /*  */[Code[`mtagdt`]]: {unicode: "\uECB7"}, // Augmentation dot
    /*  */[Code[`fg7dm`]]: {unicode: "\uECC0"}, // Figured bass 7 diminished
    /*  */[Code[`fgtrfl`]]: {unicode: "\uECC1"}, // Figured bass triple flat
    /*  */[Code[`fgtrsh`]]: {unicode: "\uECC2"}, // Figured bass triple sharp
    /*  */[Code[`ntshrndbwh`]]: {unicode: "\uECD0"}, // Round double whole (4-shape sol; 7-shape so)
    /*  */[Code[`ntshsqdbwh`]]: {unicode: "\uECD1"}, // Square double whole (4-shape la; Aikin 7-shape la)
    /*  */[Code[`ntshtrrtdbwh`]]: {unicode: "\uECD2"}, // Triangle right double whole (stem down; 4-shape fa; 7-shape fa)
    /*  */[Code[`ntshtrlfdbwh`]]: {unicode: "\uECD3"}, // Triangle left double whole (stem up; 4-shape fa; 7-shape fa)
    /*  */[Code[`ntshdmdbwh`]]: {unicode: "\uECD4"}, // Diamond double whole (4-shape mi; 7-shape mi)
    /*  */[Code[`ntshtrupdbwh`]]: {unicode: "\uECD5"}, // Triangle up double whole (Aikin 7-shape do)
    /*  */[Code[`ntshmndbwh`]]: {unicode: "\uECD6"}, // Moon double whole (Aikin 7-shape re)
    /*  */[Code[`ntshtrrndbwh`]]: {unicode: "\uECD7"}, // Triangle-round white (Aikin 7-shape ti)
    /*  */[Code[`ntshksdbwh`]]: {unicode: "\uECD8"}, // Inverted keystone double whole (Walker 7-shape do)
    /*  */[Code[`ntshqrmndbwh`]]: {unicode: "\uECD9"}, // Quarter moon double whole (Walker 7-shape re)
    /*  */[Code[`ntshistrdbwh`]]: {unicode: "\uECDA"}, // Isosceles triangle double whole (Walker 7-shape ti)
    /*  */[Code[`ntshmnlfdbwh`]]: {unicode: "\uECDB"}, // Moon left double whole (Funk 7-shape do)
    /*  */[Code[`ntshahlfdbwh`]]: {unicode: "\uECDC"}, // Arrowhead left double whole (Funk 7-shape re)
    /*  */[Code[`ntshtrrnlfdbwh`]]: {unicode: "\uECDD"}, // Triangle-round left double whole (Funk 7-shape ti)
    /*  */[Code[`tmsg0tr`]]: {unicode: "\uECE0"}, // Turned time signature 0
    /*  */[Code[`tmsg1tr`]]: {unicode: "\uECE1"}, // Turned time signature 1
    /*  */[Code[`tmsg2tr`]]: {unicode: "\uECE2"}, // Turned time signature 2
    /*  */[Code[`tmsg3tr`]]: {unicode: "\uECE3"}, // Turned time signature 3
    /*  */[Code[`tmsg4tr`]]: {unicode: "\uECE4"}, // Turned time signature 4
    /*  */[Code[`tmsg5tr`]]: {unicode: "\uECE5"}, // Turned time signature 5
    /*  */[Code[`tmsg6tr`]]: {unicode: "\uECE6"}, // Turned time signature 6
    /*  */[Code[`tmsg7tr`]]: {unicode: "\uECE7"}, // Turned time signature 7
    /*  */[Code[`tmsg8tr`]]: {unicode: "\uECE8"}, // Turned time signature 8
    /*  */[Code[`tmsg9tr`]]: {unicode: "\uECE9"}, // Turned time signature 9
    /*  */[Code[`tmsgcntr`]]: {unicode: "\uECEA"}, // Turned common time
    /*  */[Code[`tmsgctcntr`]]: {unicode: "\uECEB"}, // Turned cut time
    /*  */[Code[`tmsg0rv`]]: {unicode: "\uECF0"}, // Reversed time signature 0
    /*  */[Code[`tmsg1rv`]]: {unicode: "\uECF1"}, // Reversed time signature 1
    /*  */[Code[`tmsg2rv`]]: {unicode: "\uECF2"}, // Reversed time signature 2
    /*  */[Code[`tmsg3rv`]]: {unicode: "\uECF3"}, // Reversed time signature 3
    /*  */[Code[`tmsg4rv`]]: {unicode: "\uECF4"}, // Reversed time signature 4
    /*  */[Code[`tmsg5rv`]]: {unicode: "\uECF5"}, // Reversed time signature 5
    /*  */[Code[`tmsg6rv`]]: {unicode: "\uECF6"}, // Reversed time signature 6
    /*  */[Code[`tmsg7rv`]]: {unicode: "\uECF7"}, // Reversed time signature 7
    /*  */[Code[`tmsg8rv`]]: {unicode: "\uECF8"}, // Reversed time signature 8
    /*  */[Code[`tmsg9rv`]]: {unicode: "\uECF9"}, // Reversed time signature 9
    /*  */[Code[`tmsgcnrv`]]: {unicode: "\uECFA"}, // Reversed common time
    /*  */[Code[`tmsgctcnrv`]]: {unicode: "\uECFB"}, // Reversed cut time
    /*  */[Code[`fnMup`]]: {unicode: "\uED00"}, // Function theory M
    /*  */[Code[`fnMlw`]]: {unicode: "\uED01"}, // Function theory m
    /*  */[Code[`fnNupsp`]]: {unicode: "\uED02"}, // Function theory superscript N
    /*  */[Code[`fnRlw`]]: {unicode: "\uED03"}, // Function theory r
    /*  */[Code[`fi0`]]: {unicode: "\uED10"}, // Fingering 0 (open string)
    /*  */[Code[`fi1`]]: {unicode: "\uED11"}, // Fingering 1 (thumb)
    /*  */[Code[`fi2`]]: {unicode: "\uED12"}, // Fingering 2 (index finger)
    /*  */[Code[`fi3`]]: {unicode: "\uED13"}, // Fingering 3 (middle finger)
    /*  */[Code[`fi4`]]: {unicode: "\uED14"}, // Fingering 4 (ring finger)
    /*  */[Code[`fi5`]]: {unicode: "\uED15"}, // Fingering 5 (little finger)
    /*  */[Code[`fiTup`]]: {unicode: "\uED16"}, // Fingering T (left-hand thumb for guitar)
    /*  */[Code[`fiPlw`]]: {unicode: "\uED17"}, // Fingering p (pulgar; right-hand thumb for guitar)
    /*  */[Code[`fiTlw`]]: {unicode: "\uED18"}, // Fingering t (right-hand thumb for guitar)
    /*  */[Code[`fiIlw`]]: {unicode: "\uED19"}, // Fingering i (indicio; right-hand index finger for guitar)
    /*  */[Code[`fiMlw`]]: {unicode: "\uED1A"}, // Fingering m (medio; right-hand middle finger for guitar)
    /*  */[Code[`fiAlw`]]: {unicode: "\uED1B"}, // Fingering a (anular; right-hand ring finger for guitar)
    /*  */[Code[`fiClw`]]: {unicode: "\uED1C"}, // Fingering c (right-hand little finger for guitar)
    /*  */[Code[`fiXlw`]]: {unicode: "\uED1D"}, // Fingering x (right-hand little finger for guitar)
    /*  */[Code[`fiElw`]]: {unicode: "\uED1E"}, // Fingering e (right-hand little finger for guitar)
    /*  */[Code[`fiOlw`]]: {unicode: "\uED1F"}, // Fingering o (right-hand little finger for guitar)
    /*  */[Code[`fisbab`]]: {unicode: "\uED20"}, // Finger substitution above
    /*  */[Code[`fisbbl`]]: {unicode: "\uED21"}, // Finger substitution below
    /*  */[Code[`fisbds`]]: {unicode: "\uED22"}, // Finger substitution dash
    /*  */[Code[`fimlnt`]]: {unicode: "\uED23"}, // Multiple notes played by thumb or single finger
    /*  */[Code[`fi6`]]: {unicode: "\uED24"}, // Fingering 6
    /*  */[Code[`fi7`]]: {unicode: "\uED25"}, // Fingering 7
    /*  */[Code[`fi8`]]: {unicode: "\uED26"}, // Fingering 8
    /*  */[Code[`fi9`]]: {unicode: "\uED27"}, // Fingering 9
    /*  */[Code[`filfpr`]]: {unicode: "\uED28"}, // Fingering left parenthesis
    /*  */[Code[`firtpr`]]: {unicode: "\uED29"}, // Fingering right parenthesis
    /*  */[Code[`filfbk`]]: {unicode: "\uED2A"}, // Fingering left bracket
    /*  */[Code[`firtbk`]]: {unicode: "\uED2B"}, // Fingering right bracket
    /*  */[Code[`fispmddt`]]: {unicode: "\uED2C"}, // Fingering middle dot separator
    /*  */[Code[`fispmddtwt`]]: {unicode: "\uED2D"}, // Fingering white middle dot separator
    /*  */[Code[`fispsl`]]: {unicode: "\uED2E"}, // Fingering forward slash separator
    /*  */[Code[`acdbflar`]]: {unicode: "\uED30"}, // Arabic double flat
    /*  */[Code[`acthqrtnflar`]]: {unicode: "\uED31"}, // Arabic three-quarter-tones flat
    /*  */[Code[`acflar`]]: {unicode: "\uED32"}, // Arabic half-tone flat
    /*  */[Code[`acqrtnflar`]]: {unicode: "\uED33"}, // Arabic quarter-tone flat
    /*  */[Code[`acntar`]]: {unicode: "\uED34"}, // Arabic natural
    /*  */[Code[`acqrtnshar`]]: {unicode: "\uED35"}, // Arabic quarter-tone sharp
    /*  */[Code[`acshar`]]: {unicode: "\uED36"}, // Arabic half-tone sharp
    /*  */[Code[`acthqrtnshar`]]: {unicode: "\uED37"}, // Arabic three-quarter-tones sharp
    /*  */[Code[`acdbshar`]]: {unicode: "\uED38"}, // Arabic double sharp
    /*  */[Code[`arsfacab`]]: {unicode: "\uED40"}, // Soft accent above
    /*  */[Code[`arsfacbl`]]: {unicode: "\uED41"}, // Soft accent below
    /*  */[Code[`arsfacstab`]]: {unicode: "\uED42"}, // Soft accent-staccato above
    /*  */[Code[`arsfacstbl`]]: {unicode: "\uED43"}, // Soft accent-staccato below
    /*  */[Code[`arsfactnab`]]: {unicode: "\uED44"}, // Soft accent-tenuto above
    /*  */[Code[`arsfactnbl`]]: {unicode: "\uED45"}, // Soft accent-tenuto below
    /*  */[Code[`arsfactnstab`]]: {unicode: "\uED46"}, // Soft accent-tenuto-staccato above
    /*  */[Code[`arsfactnstbl`]]: {unicode: "\uED47"}, // Soft accent-tenuto-staccato below
    /*  */[Code[`acrssh`]]: {unicode: "\uED50"}, // Raised (Stockhausen)
    /*  */[Code[`aclwsh`]]: {unicode: "\uED51"}, // Lowered (Stockhausen)
    /*  */[Code[`acflrssh`]]: {unicode: "\uED52"}, // Raised flat (Stockhausen)
    /*  */[Code[`acfllwsh`]]: {unicode: "\uED53"}, // Lowered flat (Stockhausen)
    /*  */[Code[`acntrssh`]]: {unicode: "\uED54"}, // Raised natural (Stockhausen)
    /*  */[Code[`acntlwsh`]]: {unicode: "\uED55"}, // Lowered natural (Stockhausen)
    /*  */[Code[`acshrssh`]]: {unicode: "\uED56"}, // Raised sharp (Stockhausen)
    /*  */[Code[`acshlwsh`]]: {unicode: "\uED57"}, // Lowered sharp (Stockhausen)
    /*  */[Code[`aconqrtnshsh`]]: {unicode: "\uED58"}, // One-quarter-tone sharp (Stockhausen)
    /*  */[Code[`aconqrtnflsh`]]: {unicode: "\uED59"}, // One-quarter-tone flat (Stockhausen)
    /*  */[Code[`acthqrtnshsh`]]: {unicode: "\uED5A"}, // Three-quarter-tones sharp (Stockhausen)
    /*  */[Code[`acflrpspsh`]]: {unicode: "\uED5B"}, // Repeated flat, note in space (Stockhausen)
    /*  */[Code[`acflrplnsh`]]: {unicode: "\uED5C"}, // Repeated flat, note on line (Stockhausen)
    /*  */[Code[`acshrpspsh`]]: {unicode: "\uED5D"}, // Repeated sharp, note in space (Stockhausen)
    /*  */[Code[`acshrplnsh`]]: {unicode: "\uED5E"}, // Repeated sharp, note on line (Stockhausen)
    /*  */[Code[`csacfl`]]: {unicode: "\uED60"}, // Flat
    /*  */[Code[`csacnt`]]: {unicode: "\uED61"}, // Natural
    /*  */[Code[`csacsh`]]: {unicode: "\uED62"}, // Sharp
    /*  */[Code[`csacdbsh`]]: {unicode: "\uED63"}, // Double sharp
    /*  */[Code[`csacdbfl`]]: {unicode: "\uED64"}, // Double flat
    /*  */[Code[`csactrsh`]]: {unicode: "\uED65"}, // Triple sharp
    /*  */[Code[`csactrfl`]]: {unicode: "\uED66"}, // Triple flat
    /*  */[Code[`indrcl`]]: {unicode: "\uED70"}, // Indian drum clef
    /*  */[Code[`fi0it`]]: {unicode: "\uED80"}, // Fingering 0 italic (open string)
    /*  */[Code[`fi1it`]]: {unicode: "\uED81"}, // Fingering 1 italic (thumb)
    /*  */[Code[`fi2it`]]: {unicode: "\uED82"}, // Fingering 2 italic (index finger)
    /*  */[Code[`fi3it`]]: {unicode: "\uED83"}, // Fingering 3 italic (middle finger)
    /*  */[Code[`fi4it`]]: {unicode: "\uED84"}, // Fingering 4 italic (ring finger)
    /*  */[Code[`fi5it`]]: {unicode: "\uED85"}, // Fingering 5 italic (little finger)
    /*  */[Code[`fi6it`]]: {unicode: "\uED86"}, // Fingering 6 italic
    /*  */[Code[`fi7it`]]: {unicode: "\uED87"}, // Fingering 7 italic
    /*  */[Code[`fi8it`]]: {unicode: "\uED88"}, // Fingering 8 italic
    /*  */[Code[`fi9it`]]: {unicode: "\uED89"}, // Fingering 9 italic
    /*  */[Code[`filfprit`]]: {unicode: "\uED8A"}, // Fingering left parenthesis italic
    /*  */[Code[`firtprit`]]: {unicode: "\uED8B"}, // Fingering right parenthesis italic
    /*  */[Code[`filfbkit`]]: {unicode: "\uED8C"}, // Fingering left bracket italic
    /*  */[Code[`firtbkit`]]: {unicode: "\uED8D"}, // Fingering right bracket italic
    /*  */[Code[`fiQlw`]]: {unicode: "\uED8E"}, // Fingering q (right-hand little finger for guitar)
    /*  */[Code[`fiSlw`]]: {unicode: "\uED8F"}, // Fingering s (right-hand little finger for guitar)
    /*  */[Code[`knst`]]: {unicode: "\uEDA0"}, // Step
    /*  */[Code[`kntp`]]: {unicode: "\uEDA1"}, // Tap
    /*  */[Code[`knhp`]]: {unicode: "\uEDA2"}, // Hop
    /*  */[Code[`knlp`]]: {unicode: "\uEDA3"}, // Leap
    /*  */[Code[`knjmtg`]]: {unicode: "\uEDA4"}, // Jump-together
    /*  */[Code[`knjmap`]]: {unicode: "\uEDA5"}, // Jump-apart
    /*  */[Code[`knbrfr`]]: {unicode: "\uEDA6"}, // Brush-forward
    /*  */[Code[`knbrbc`]]: {unicode: "\uEDA7"}, // Brush-backward
    /*  */[Code[`kngrtp`]]: {unicode: "\uEDA8"}, // Grace-tap
    /*  */[Code[`knfl`]]: {unicode: "\uEDA9"}, // Flat
    /*  */[Code[`knhl`]]: {unicode: "\uEDAA"}, // Heel
    /*  */[Code[`knto`]]: {unicode: "\uEDAB"}, // Toe
    /*  */[Code[`knknot`]]: {unicode: "\uEDAC"}, // Knee-outward
    /*  */[Code[`knknin`]]: {unicode: "\uEDAD"}, // Knee-inward
    /*  */[Code[`knsc`]]: {unicode: "\uEDAE"}, // Scrape
    /*  */[Code[`kntr`]]: {unicode: "\uEDAF"}, // Trench
    /*  */[Code[`knflhp`]]: {unicode: "\uEDB0"}, // Flea-hop
    /*  */[Code[`knfltp`]]: {unicode: "\uEDB1"}, // Flea-tap
    /*  */[Code[`kndrst`]]: {unicode: "\uEDB2"}, // Draw-step
    /*  */[Code[`kndrtp`]]: {unicode: "\uEDB3"}, // Draw-tap
    /*  */[Code[`knslst`]]: {unicode: "\uEDB4"}, // Slide-step
    /*  */[Code[`knsltp`]]: {unicode: "\uEDB5"}, // Slide-tap
    /*  */[Code[`knhldr`]]: {unicode: "\uEDB6"}, // Heel-drop
    /*  */[Code[`kntodr`]]: {unicode: "\uEDB7"}, // Toe-drop
    /*  */[Code[`kncl`]]: {unicode: "\uEDB8"}, // Clap
    /*  */[Code[`knsn`]]: {unicode: "\uEDB9"}, // Snap
    /*  */[Code[`kndbsn`]]: {unicode: "\uEDBA"}, // Double-snap
    /*  */[Code[`knhlcl`]]: {unicode: "\uEDBB"}, // Heel-click
    /*  */[Code[`kntocl`]]: {unicode: "\uEDBC"}, // Toe-click
    /*  */[Code[`knlfcr`]]: {unicode: "\uEDBD"}, // Left-cross
    /*  */[Code[`knrtcr`]]: {unicode: "\uEDBE"}, // Right-cross
    /*  */[Code[`knlfct`]]: {unicode: "\uEDBF"}, // Left-catch
    /*  */[Code[`knrtct`]]: {unicode: "\uEDC0"}, // Right-catch
    /*  */[Code[`knlftost`]]: {unicode: "\uEDC1"}, // Left-toe-strike
    /*  */[Code[`knrttost`]]: {unicode: "\uEDC2"}, // Right-toe-strike
    /*  */[Code[`knsa`]]: {unicode: "\uEDC3"}, // Stamp
    /*  */[Code[`knhlst`]]: {unicode: "\uEDC4"}, // Heel-step
    /*  */[Code[`kntost`]]: {unicode: "\uEDC5"}, // Toe-step
    /*  */[Code[`knblch`]]: {unicode: "\uEDC6"}, // Ball-change
    /*  */[Code[`knstsa`]]: {unicode: "\uEDC7"}, // Step-stamp
    /*  */[Code[`knsasa`]]: {unicode: "\uEDC8"}, // Stamp-stamp
    /*  */[Code[`knhlch`]]: {unicode: "\uEDC9"}, // Heel-change
    /*  */[Code[`knso`]]: {unicode: "\uEDCA"}, // Stomp
    /*  */[Code[`knhltp`]]: {unicode: "\uEDCB"}, // Heel-tap
    /*  */[Code[`kntotp`]]: {unicode: "\uEDCC"}, // Toe-tap
    /*  */[Code[`knbldg`]]: {unicode: "\uEDCD"}, // Ball-dig
    /*  */[Code[`knsm`]]: {unicode: "\uEDCE"}, // Slam
    /*  */[Code[`knfm`]]: {unicode: "\uEDCF"}, // Flam
    /*  */[Code[`kngrtphp`]]: {unicode: "\uEDD0"}, // Grace-tap-hop
    /*  */[Code[`kngrtpch`]]: {unicode: "\uEDD1"}, // Grace-tap-change
    /*  */[Code[`knlpflft`]]: {unicode: "\uEDD2"}, // Leap-flat-foot
    /*  */[Code[`kngrtpsa`]]: {unicode: "\uEDD3"}, // Grace-tap-stamp
    /*  */[Code[`knlphlcl`]]: {unicode: "\uEDD4"}, // Leap-heel-click
    /*  */[Code[`knfp`]]: {unicode: "\uEDD5"}, // Flap
    /*  */[Code[`knrp`]]: {unicode: "\uEDD6"}, // Rip
    /*  */[Code[`knfpst`]]: {unicode: "\uEDD7"}, // Flap-step
    /*  */[Code[`knbcfp`]]: {unicode: "\uEDD8"}, // Back-flap
    /*  */[Code[`knsp`]]: {unicode: "\uEDD9"}, // Slap
    /*  */[Code[`knbcrp`]]: {unicode: "\uEDDA"}, // Back-rip
    /*  */[Code[`knsobr`]]: {unicode: "\uEDDB"}, // Stomp-brush
    /*  */[Code[`knsf`]]: {unicode: "\uEDDC"}, // Scuff
    /*  */[Code[`knch`]]: {unicode: "\uEDDD"}, // Chug
    /*  */[Code[`knps`]]: {unicode: "\uEDDE"}, // Push
    /*  */[Code[`knzi`]]: {unicode: "\uEDDF"}, // Zink
    /*  */[Code[`knrf`]]: {unicode: "\uEDE0"}, // Riff
    /*  */[Code[`knbcrf`]]: {unicode: "\uEDE1"}, // Back-riff
    /*  */[Code[`knbcch`]]: {unicode: "\uEDE2"}, // Back-chug
    /*  */[Code[`knpl`]]: {unicode: "\uEDE3"}, // Pull
    /*  */[Code[`knza`]]: {unicode: "\uEDE4"}, // Zank
    /*  */[Code[`knsh`]]: {unicode: "\uEDE5"}, // Shuffle
    /*  */[Code[`knse`]]: {unicode: "\uEDE6"}, // Scuffle
    /*  */[Code[`knrl`]]: {unicode: "\uEDE7"}, // Riffle
    /*  */[Code[`knre`]]: {unicode: "\uEDE8"}, // Ripple
    /*  */[Code[`knwn`]]: {unicode: "\uEDE9"}, // Wing
    /*  */[Code[`knwnch`]]: {unicode: "\uEDEA"}, // Wing-change
    /*  */[Code[`kndbwn`]]: {unicode: "\uEDEB"}, // Double-wing
    /*  */[Code[`knovthtp`]]: {unicode: "\uEDEC"}, // Over-the-top
    /*  */[Code[`knovthtptp`]]: {unicode: "\uEDED"}, // Over-the-top-tap
    /*  */[Code[`knlfft`]]: {unicode: "\uEDEE"}, // Left-foot
    /*  */[Code[`knrtft`]]: {unicode: "\uEDEF"}, // Right-foot
    /*  */[Code[`knlftn`]]: {unicode: "\uEDF0"}, // Left-turn
    /*  */[Code[`knrttn`]]: {unicode: "\uEDF1"}, // Right-turn
    /*  */[Code[`orgrCup`]]: {unicode: "\uEE00"}, // German organ tablature great C
    /*  */[Code[`orgrcsup`]]: {unicode: "\uEE01"}, // German organ tablature great Cis
    /*  */[Code[`orgrDup`]]: {unicode: "\uEE02"}, // German organ tablature great D
    /*  */[Code[`orgrdsup`]]: {unicode: "\uEE03"}, // German organ tablature great Dis
    /*  */[Code[`orgrEup`]]: {unicode: "\uEE04"}, // German organ tablature great E
    /*  */[Code[`orgrFup`]]: {unicode: "\uEE05"}, // German organ tablature great F
    /*  */[Code[`orgrfsup`]]: {unicode: "\uEE06"}, // German organ tablature great Fis
    /*  */[Code[`orgrGup`]]: {unicode: "\uEE07"}, // German organ tablature great G
    /*  */[Code[`orgrgsup`]]: {unicode: "\uEE08"}, // German organ tablature great Gis
    /*  */[Code[`orgrAup`]]: {unicode: "\uEE09"}, // German organ tablature great A
    /*  */[Code[`orgrBup`]]: {unicode: "\uEE0A"}, // German organ tablature great B
    /*  */[Code[`orgrHup`]]: {unicode: "\uEE0B"}, // German organ tablature great H
    /*  */[Code[`orgrClw`]]: {unicode: "\uEE0C"}, // German organ tablature small C
    /*  */[Code[`orgrcslw`]]: {unicode: "\uEE0D"}, // German organ tablature small Cis
    /*  */[Code[`orgrDlw`]]: {unicode: "\uEE0E"}, // German organ tablature small D
    /*  */[Code[`orgrdslw`]]: {unicode: "\uEE0F"}, // German organ tablature small Dis
    /*  */[Code[`orgrElw`]]: {unicode: "\uEE10"}, // German organ tablature small E
    /*  */[Code[`orgrFlw`]]: {unicode: "\uEE11"}, // German organ tablature small F
    /*  */[Code[`orgrfslw`]]: {unicode: "\uEE12"}, // German organ tablature small Fis
    /*  */[Code[`orgrGlw`]]: {unicode: "\uEE13"}, // German organ tablature small G
    /*  */[Code[`orgrgslw`]]: {unicode: "\uEE14"}, // German organ tablature small Gis
    /*  */[Code[`orgrAlw`]]: {unicode: "\uEE15"}, // German organ tablature small A
    /*  */[Code[`orgrBlw`]]: {unicode: "\uEE16"}, // German organ tablature small B
    /*  */[Code[`orgrHlw`]]: {unicode: "\uEE17"}, // German organ tablature small H
    /*  */[Code[`orgrocup`]]: {unicode: "\uEE18"}, // Combining single octave line above
    /*  */[Code[`orgr2ocup`]]: {unicode: "\uEE19"}, // Combining double octave line above
    /*  */[Code[`orgrocdn`]]: {unicode: "\uEE1A"}, // Combining single octave line below
    /*  */[Code[`orgrti`]]: {unicode: "\uEE1B"}, // Tie
    /*  */[Code[`orgragdt`]]: {unicode: "\uEE1C"}, // Rhythm Dot
    /*  */[Code[`orgrbxsbrs`]]: {unicode: "\uEE1D"}, // Semibrevis Rest Buxheimer Orgelbuch
    /*  */[Code[`orgrbxmnrs`]]: {unicode: "\uEE1E"}, // Minima Rest Buxheimer Orgelbuch
    /*  */[Code[`orgrsbrs`]]: {unicode: "\uEE1F"}, // Semibrevis Rest
    /*  */[Code[`orgrmnrs`]]: {unicode: "\uEE20"}, // Minima Rest
    /*  */[Code[`orgrsmrs`]]: {unicode: "\uEE21"}, // Semiminima Rest
    /*  */[Code[`orgrfsrs`]]: {unicode: "\uEE22"}, // Fusa Rest
    /*  */[Code[`orgrsfrs`]]: {unicode: "\uEE23"}, // Semifusa Rest
    /*  */[Code[`orgrbxbr3`]]: {unicode: "\uEE24"}, // Brevis (Ternary) Buxheimer Orgelbuch
    /*  */[Code[`orgrbxbr2`]]: {unicode: "\uEE25"}, // Brevis (Binary) Buxheimer Orgelbuch
    /*  */[Code[`orgrbxsb`]]: {unicode: "\uEE26"}, // Semibrevis Buxheimer Orgelbuch
    /*  */[Code[`orgrsb`]]: {unicode: "\uEE27"}, // Semibrevis
    /*  */[Code[`orgrmn`]]: {unicode: "\uEE28"}, // Minima
    /*  */[Code[`orgrsm`]]: {unicode: "\uEE29"}, // Semiminima
    /*  */[Code[`orgrfs`]]: {unicode: "\uEE2A"}, // Fusa
    /*  */[Code[`orgrsf`]]: {unicode: "\uEE2B"}, // Semifusa
    /*  */[Code[`orgr2mn`]]: {unicode: "\uEE2C"}, // Two Minimae
    /*  */[Code[`orgr2sm`]]: {unicode: "\uEE2D"}, // Two Semiminimae
    /*  */[Code[`orgr2fs`]]: {unicode: "\uEE2E"}, // Two Fusae
    /*  */[Code[`orgr2sf`]]: {unicode: "\uEE2F"}, // Two Semifusae
    /*  */[Code[`orgr3mn`]]: {unicode: "\uEE30"}, // Three Minimae
    /*  */[Code[`orgr3sm`]]: {unicode: "\uEE31"}, // Three Semiminimae
    /*  */[Code[`orgr3fs`]]: {unicode: "\uEE32"}, // Three Fusae
    /*  */[Code[`orgr3sf`]]: {unicode: "\uEE33"}, // Three Semifusae
    /*  */[Code[`orgr4mn`]]: {unicode: "\uEE34"}, // Four Minimae
    /*  */[Code[`orgr4sm`]]: {unicode: "\uEE35"}, // Four Semiminimae
    /*  */[Code[`orgr4fs`]]: {unicode: "\uEE36"}, // Four Fusae
    /*  */[Code[`orgr4sf`]]: {unicode: "\uEE37"}, // Four Semifusae
    /*  */[Code[`orgr5mn`]]: {unicode: "\uEE38"}, // Five Minimae
    /*  */[Code[`orgr5sm`]]: {unicode: "\uEE39"}, // Five Semiminimae
    /*  */[Code[`orgr5fs`]]: {unicode: "\uEE3A"}, // Five Fusae
    /*  */[Code[`orgr5sf`]]: {unicode: "\uEE3B"}, // Five Semifusae
    /*  */[Code[`orgr6mn`]]: {unicode: "\uEE3C"}, // Six Minimae
    /*  */[Code[`orgr6sm`]]: {unicode: "\uEE3D"}, // Six Semiminimae
    /*  */[Code[`orgr6fs`]]: {unicode: "\uEE3E"}, // Six Fusae
    /*  */[Code[`orgr6sf`]]: {unicode: "\uEE3F"}, // Six Semifusae
    /*  */[Code[`accmlw29lmcm`]]: {unicode: "\uEE50"}, // Combining lower by one 29-limit comma
    /*  */[Code[`accmrs29lmcm`]]: {unicode: "\uEE51"}, // Combining raise by one 29-limit comma
    /*  */[Code[`accmlw37qr`]]: {unicode: "\uEE52"}, // Combining lower by one 37-limit quartertone
    /*  */[Code[`accmrs37qr`]]: {unicode: "\uEE53"}, // Combining raise by one 37-limit quartertone
    /*  */[Code[`accmlw41cm`]]: {unicode: "\uEE54"}, // Combining lower by one 41-limit comma
    /*  */[Code[`accmrs41cm`]]: {unicode: "\uEE55"}, // Combining raise by one 41-limit comma
    /*  */[Code[`accmlw43cm`]]: {unicode: "\uEE56"}, // Combining lower by one 43-limit comma
    /*  */[Code[`accmrs43cm`]]: {unicode: "\uEE57"}, // Combining raise by one 43-limit comma
    /*  */[Code[`accmlw47qr`]]: {unicode: "\uEE58"}, // Combining lower by one 47-limit quartertone
    /*  */[Code[`accmrs47qr`]]: {unicode: "\uEE59"}, // Combining raise by one 47-limit quartertone
    /*  */[Code[`acupandnup`]]: {unicode: "\uEE60"}, // Accidental up
    /*  */[Code[`acupandndn`]]: {unicode: "\uEE61"}, // Accidental down
    /*  */[Code[`acupandnmr`]]: {unicode: "\uEE62"}, // Accidental more
    /*  */[Code[`acupandnls`]]: {unicode: "\uEE63"}, // Accidental less
    /*  */[Code[`achbqrtnhg`]]: {unicode: "\uEE64"}, // Quarter-tone higher (Alois H\u00e1ba)
    /*  */[Code[`achbflqrtnhg`]]: {unicode: "\uEE65"}, // Quarter-tone higher (Alois H\u00e1ba)
    /*  */[Code[`achbshthqrtnhg`]]: {unicode: "\uEE66"}, // Three quarter-tones higher (Alois H\u00e1ba)
    /*  */[Code[`achbqrtnlw`]]: {unicode: "\uEE67"}, // Quarter-tone lower (Alois H\u00e1ba)
    /*  */[Code[`achbshqrtnlw`]]: {unicode: "\uEE68"}, // Quarter-tone lower (Alois H\u00e1ba)
    /*  */[Code[`achbflthqrtnlw`]]: {unicode: "\uEE69"}, // Three quarter-tones lower (Alois H\u00e1ba)
    /*  */[Code[`swrdnhblfm`]]: {unicode: "\uEE70"}, // Swiss rudiments flam black notehead
    /*  */[Code[`swrdnhhffm`]]: {unicode: "\uEE71"}, // Swiss rudiments flam half (minim) notehead
    /*  */[Code[`swrdnhbldb`]]: {unicode: "\uEE72"}, // Swiss rudiments doubl\u00e9 black notehead
    /*  */[Code[`swrdnhhfdb`]]: {unicode: "\uEE73"}, // Swiss rudiments doubl\u00e9 half (minim) notehead
    /*  */[Code[`srdnbwtwbd`]]: {unicode: "\uEE80"}, // Down bow, towards body
    /*  */[Code[`srupbwtwbd`]]: {unicode: "\uEE81"}, // Up bow, towards body
    /*  */[Code[`srdnbwawfrbd`]]: {unicode: "\uEE82"}, // Down bow, away from body
    /*  */[Code[`srupbwawfrbd`]]: {unicode: "\uEE83"}, // Up bow, away from body
    /*  */[Code[`srdnbwbybr`]]: {unicode: "\uEE84"}, // Down bow, beyond bridge
    /*  */[Code[`srupbwbybr`]]: {unicode: "\uEE85"}, // Up bow, beyond bridge
    /*  */[Code[`srscprin`]]: {unicode: "\uEE86"}, // Scrape, parallel inward
    /*  */[Code[`srscprot`]]: {unicode: "\uEE87"}, // Scrape, parallel outward
    /*  */[Code[`srsccrcl`]]: {unicode: "\uEE88"}, // Scrape, circular clockwise
    /*  */[Code[`srsccrcn`]]: {unicode: "\uEE89"}, // Scrape, circular counter-clockwise
    /*  */[Code[`srtrchin`]]: {unicode: "\uEE8A"}, // Triple chop, inward
    /*  */[Code[`srtrchot`]]: {unicode: "\uEE8B"}, // Triple chop, outward
    /*  */[Code[`mnpp5`]]: {unicode: "\uEE90"}, // Mensural proportion 5
    /*  */[Code[`mnpp6`]]: {unicode: "\uEE91"}, // Mensural proportion 6
    /*  */[Code[`mnpp7`]]: {unicode: "\uEE92"}, // Mensural proportion 7
    /*  */[Code[`mnpp8`]]: {unicode: "\uEE93"}, // Mensural proportion 8
    /*  */[Code[`mnpp9`]]: {unicode: "\uEE94"}, // Mensural proportion 9
    /*  */[Code[`nhnnsn`]]: {unicode: "\uEEA0"}, // Sine notehead (Nancarrow)
    /*  */[Code[`nhcwthntsrwh`]]: {unicode: "\uEEA1"}, // 2/3 note (third note series, Cowell)
    /*  */[Code[`nhcwthntsrhf`]]: {unicode: "\uEEA2"}, // 1/3 note (third note series, Cowell)
    /*  */[Code[`nhcwthntsrbl`]]: {unicode: "\uEEA3"}, // 1/6 note (third note series, Cowell)
    /*  */[Code[`nhcwffntsrwh`]]: {unicode: "\uEEA4"}, // 4/5 note (fifth note series, Cowell)
    /*  */[Code[`nhcwffntsrhf`]]: {unicode: "\uEEA5"}, // 2/5 note (fifth note series, Cowell)
    /*  */[Code[`nhcwffntsrbl`]]: {unicode: "\uEEA6"}, // 1/5 note (fifth note series, Cowell)
    /*  */[Code[`nhcwsvntsrwh`]]: {unicode: "\uEEA7"}, // 4/7 note (seventh note series, Cowell)
    /*  */[Code[`nhcwsvntsrhf`]]: {unicode: "\uEEA8"}, // 2/7 note (seventh note series, Cowell)
    /*  */[Code[`nhcwsvntsrbl`]]: {unicode: "\uEEA9"}, // 1/7 note (seventh note series, Cowell)
    /*  */[Code[`nhcwnnntsrwh`]]: {unicode: "\uEEAA"}, // 8/9 note (ninth note series, Cowell)
    /*  */[Code[`nhcwnnntsrhf`]]: {unicode: "\uEEAB"}, // 4/9 note (ninth note series, Cowell)
    /*  */[Code[`nhcwnnntsrbl`]]: {unicode: "\uEEAC"}, // 2/9 note (ninth note series, Cowell)
    /*  */[Code[`nhcwelntsrwh`]]: {unicode: "\uEEAD"}, // 8/11 note (eleventh note series, Cowell)
    /*  */[Code[`nhcwelntsrhf`]]: {unicode: "\uEEAE"}, // 4/11 note (eleventh note series, Cowell)
    /*  */[Code[`nhcwelsrbl`]]: {unicode: "\uEEAF"}, // 2/11 note (eleventh note series, Cowell)
    /*  */[Code[`nhcwttntsrwh`]]: {unicode: "\uEEB0"}, // 8/13 note (thirteenth note series, Cowell)
    /*  */[Code[`nhcwttntsrhf`]]: {unicode: "\uEEB1"}, // 4/13 note (thirteenth note series, Cowell)
    /*  */[Code[`nhcwttntsrbl`]]: {unicode: "\uEEB2"}, // 2/13 note (thirteenth note series, Cowell)
    /*  */[Code[`nhcwftntsrwh`]]: {unicode: "\uEEB3"}, // 8/15 note (fifteenth note series, Cowell)
    /*  */[Code[`nhcwftntsrhf`]]: {unicode: "\uEEB4"}, // 4/15 note (fifteenth note series, Cowell)
    /*  */[Code[`nhcwftntsrbl`]]: {unicode: "\uEEB5"}, // 2/15 note (fifteenth note series, Cowell)
    /*  */[Code[`ntdiwh`]]: {unicode: "\uEEE0"}, // Di (whole note)
    /*  */[Code[`ntriwh`]]: {unicode: "\uEEE1"}, // Ri (whole note)
    /*  */[Code[`ntrawh`]]: {unicode: "\uEEE2"}, // Ra (whole note)
    /*  */[Code[`ntmewh`]]: {unicode: "\uEEE3"}, // Me (whole note)
    /*  */[Code[`ntfiwh`]]: {unicode: "\uEEE4"}, // Fi (whole note)
    /*  */[Code[`ntsewh`]]: {unicode: "\uEEE5"}, // Se (whole note)
    /*  */[Code[`ntliwh`]]: {unicode: "\uEEE6"}, // Li (whole note)
    /*  */[Code[`ntlewh`]]: {unicode: "\uEEE7"}, // Le (whole note)
    /*  */[Code[`nttewh`]]: {unicode: "\uEEE8"}, // Te (whole note)
    /*  */[Code[`ntdihf`]]: {unicode: "\uEEE9"}, // Di (half note)
    /*  */[Code[`ntrihf`]]: {unicode: "\uEEEA"}, // Ri (half note)
    /*  */[Code[`ntrahf`]]: {unicode: "\uEEEB"}, // Ra (half note)
    /*  */[Code[`ntmehf`]]: {unicode: "\uEEEC"}, // Me (half note)
    /*  */[Code[`ntfihf`]]: {unicode: "\uEEED"}, // Fi (half note)
    /*  */[Code[`ntsehf`]]: {unicode: "\uEEEE"}, // Se (half note)
    /*  */[Code[`ntlihf`]]: {unicode: "\uEEEF"}, // Li (half note)
    /*  */[Code[`ntlehf`]]: {unicode: "\uEEF0"}, // Le (half note)
    /*  */[Code[`nttehf`]]: {unicode: "\uEEF1"}, // Te (half note)
    /*  */[Code[`ntdibl`]]: {unicode: "\uEEF2"}, // Di (black note)
    /*  */[Code[`ntribl`]]: {unicode: "\uEEF3"}, // Ri (black note)
    /*  */[Code[`ntrabl`]]: {unicode: "\uEEF4"}, // Ra (black note)
    /*  */[Code[`ntmebl`]]: {unicode: "\uEEF5"}, // Me (black note)
    /*  */[Code[`ntfibl`]]: {unicode: "\uEEF6"}, // Fi (black note)
    /*  */[Code[`ntsebl`]]: {unicode: "\uEEF7"}, // Se (black note)
    /*  */[Code[`ntlibl`]]: {unicode: "\uEEF8"}, // Li (black note)
    /*  */[Code[`ntlebl`]]: {unicode: "\uEEF9"}, // Le (black note)
    /*  */[Code[`nttebl`]]: {unicode: "\uEEFA"}, // Te (black note)
    /*  */[Code[`scdg1`]]: {unicode: "\uEF00"}, // Scale degree 1
    /*  */[Code[`scdg2`]]: {unicode: "\uEF01"}, // Scale degree 2
    /*  */[Code[`scdg3`]]: {unicode: "\uEF02"}, // Scale degree 3
    /*  */[Code[`scdg4`]]: {unicode: "\uEF03"}, // Scale degree 4
    /*  */[Code[`scdg5`]]: {unicode: "\uEF04"}, // Scale degree 5
    /*  */[Code[`scdg6`]]: {unicode: "\uEF05"}, // Scale degree 6
    /*  */[Code[`scdg7`]]: {unicode: "\uEF06"}, // Scale degree 7
    /*  */[Code[`scdg8`]]: {unicode: "\uEF07"}, // Scale degree 8
    /*  */[Code[`scdg9`]]: {unicode: "\uEF08"}, // Scale degree 9
} as Record<Code, Symbol>

export {
    SMuFL_MAP,
}
