import {RecordKey, Word} from "@sagittal/general"
import {SMuFL_MAP} from "../../smufl"
import {Code, Unicode} from "../../types"

// TODO: FEATURE IMPROVE, BLOCKED: COMMA NAME ALIASES FOR SAGITTAL
//  I think we still need the short-form comma based names.
//  Use "^" for powers and "*" or full-stop for multiply. Use the standard factorisation rules we agreed.
//  `npm run analyze-ji-pitches -- --ordered-fields commaClass,name` to get comma names for StaffCode from script group
//  Then this below is the list to put in ji-pitches.txt, with bare shafts as 1/1 and spaces deleted, and no Magratheans
//  So you'll have to do the Magratheans yourself because there's no way I'm building those into the script group yet
//  - Oh wait, actually though, what you really want is just macros for all of the Olympian commas
//  Waiting on Dave's thoughts on which exactly to do (super and sub, up to largest single shaft? or Evo vs Revo stuff?)
/*
|(
!(
/|
\!
|)
!)
//|
\\!
/|)
\!)
/|\
\!/
(|)
(!)
(|\
(!/
)||(
)!!(
||)
!!)
||\
!!/
/||)
\!!)
/||\
\!!/
|||(
!!!(
/|||
\!!!
|||)
!!!)
//|||
\\!!!
/|||)
\!!!)
/|||\
\!!!/
(|||)
(!!!)
(|||\
(!!!/
)X(
)Y(
X)
Y)
X\
Y/
/X)
\Y)
/X\
\Y/
)|(
)!(
~|(
~!(
|\
!/
(|
(!
(|(
(!(
~||(
~!!(
)||~
)!!~
/||
\!!
(||(
(!!(
//||
\\!!
)|||(
)!!!(
~|||(
~!!!(
|||\
!!!/
(|||
(!!!
(|||(
(!!!(
~X(
~Y(
)X~
)Y~
/X
\Y
(X(
(Y(
//X
\\Y
|~
!~
)/|
)\!
/|~
\!~
||~
!!~
)||)
)!!)
/||~
\!!~
|||~
!!!~
)/|||
)\!!!
/|||~
\!!!~
X~
Y~
)X)
)Y)
/X~
\Y~
)|
)!
~|
~!
)~|
)~!
~~|
~~!
)|~
)!~
)|)
)!)
~|)
~!)
~|\
~!/
)//|
)\\!
(|~
(!~
(/|
(\!
)/|\
)\!/
|\)
!/)
|\\
!//
)|\\
)!//
)~||
)~!!
~~||
~~!!
)/||
)\!!
(||
(!!
~||)
~!!)
~||\
~!!/
)//||
)\\!!
(||~
(!!~
)|||
)!!!
~|||
~!!!
)~|||
)~!!!
~~|||
~~!!!
)|||~
)!!!~
)|||)
)!!!)
~|||)
~!!!)
~|||\
~!!!/
)//|||
)\\!!!
(|||~
(!!!~
(/|||
(\!!!
)/|||\
)\!!!/
|||\)
!!!/)
|||\\
!!!//
)|||\\
)!!!//
)~X
)~Y
~~X
~~Y
)/X
)\Y
(X
(Y
~X)
~Y)
~X\
~Y/
)//X
)\\Y
(X~
(Y~
1
1
'
.
`
,
``
,,
 */

const SAGITTAL_LONG_ASCII_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "|(": SMuFL_MAP["acsg5V7klup"],
    "!(": SMuFL_MAP["acsg5V7kldn"],
    "/|": SMuFL_MAP["acsg5cmup"],
    "\\!": SMuFL_MAP["acsg5cmdn"],
    "|)": SMuFL_MAP["acsg7cmup"],
    "!)": SMuFL_MAP["acsg7cmdn"],
    "//|": SMuFL_MAP["acsg25smdsup"],
    "\\\\!": SMuFL_MAP["acsg25smdsdn"],
    "/|)": SMuFL_MAP["acsg35mddsup"],
    "\\!)": SMuFL_MAP["acsg35mddsdn"],
    "/|\\": SMuFL_MAP["acsg11mddsup"],
    "\\!/": SMuFL_MAP["acsg11mddsdn"],
    "(|)": SMuFL_MAP["acsg11lgdsup"],
    "(!)": SMuFL_MAP["acsg11lgdsdn"],
    "(|\\": SMuFL_MAP["acsg35lgdsup"],
    "(!/": SMuFL_MAP["acsg35lgdsdn"],
    ")||(": SMuFL_MAP["acsgsh25Sdn"],
    ")!!(": SMuFL_MAP["acsgfl25Sup"],
    "||)": SMuFL_MAP["acsgsh7Cdn"],
    "!!)": SMuFL_MAP["acsgfl7Cup"],
    "||\\": SMuFL_MAP["acsgsh5Cdn"],
    "!!/": SMuFL_MAP["acsgfl5Cup"],
    "/||)": SMuFL_MAP["acsgsh5V7Kdn"],
    "\\!!)": SMuFL_MAP["acsgfl5V7Kup"],
    "/||\\": SMuFL_MAP["acsgsh"],
    "\\!!/": SMuFL_MAP["acsgfl"],
    "|||(": SMuFL_MAP["acsgsh5V7Kup"],
    "!!!(": SMuFL_MAP["acsgfl5V7Kdn"],
    "/|||": SMuFL_MAP["acsgsh5Cup"],
    "\\!!!": SMuFL_MAP["acsgfl5Cdn"],
    "|||)": SMuFL_MAP["acsgsh7Cup"],
    "!!!)": SMuFL_MAP["acsgfl7Cdn"],
    "//|||": SMuFL_MAP["acsgsh25Sup"],
    "\\\\!!!": SMuFL_MAP["acsgfl25Sdn"],
    "/|||)": SMuFL_MAP["acsgsh35Mup"],
    "\\!!!)": SMuFL_MAP["acsgfl35Mdn"],
    "/|||\\": SMuFL_MAP["acsgsh11Mup"],
    "\\!!!/": SMuFL_MAP["acsgfl11Mdn"],
    "(|||)": SMuFL_MAP["acsgsh11Lup"],
    "(!!!)": SMuFL_MAP["acsgfl11Ldn"],
    "(|||\\": SMuFL_MAP["acsgsh35Lup"],
    "(!!!/": SMuFL_MAP["acsgfl35Ldn"],
    ")X(": SMuFL_MAP["acsgdbsh25Sdn"],
    ")Y(": SMuFL_MAP["acsgdbfl25Sup"],
    "X)": SMuFL_MAP["acsgdbsh7Cdn"],
    "Y)": SMuFL_MAP["acsgdbfl7Cup"],
    "X\\": SMuFL_MAP["acsgdbsh5Cdn"],
    "Y/": SMuFL_MAP["acsgdbfl5Cup"],
    "/X)": SMuFL_MAP["acsgdbsh5V7Kdn"],
    "\\Y)": SMuFL_MAP["acsgdbfl5V7Kup"],
    "/X\\": SMuFL_MAP["acsgdbsh"],
    "\\Y/": SMuFL_MAP["acsgdbfl"],
    ")|(": SMuFL_MAP["acsg7V11klup"],
    ")!(": SMuFL_MAP["acsg7V11kldn"],
    "~|(": SMuFL_MAP["acsg17cmup"],
    "~!(": SMuFL_MAP["acsg17cmdn"],
    "|\\": SMuFL_MAP["acsg55cmup"],
    "!/": SMuFL_MAP["acsg55cmdn"],
    "(|": SMuFL_MAP["acsg7V11cmup"],
    "(!": SMuFL_MAP["acsg7V11cmdn"],
    "(|(": SMuFL_MAP["acsg5V11smdsup"],
    "(!(": SMuFL_MAP["acsg5V11smdsdn"],
    "~||(": SMuFL_MAP["acsgsh5V11Sdn"],
    "~!!(": SMuFL_MAP["acsgfl5V11Sup"],
    ")||~": SMuFL_MAP["acsgsh7V11Cdn"],
    ")!!~": SMuFL_MAP["acsgfl7V11Cup"],
    "/||": SMuFL_MAP["acsgsh55Cdn"],
    "\\!!": SMuFL_MAP["acsgfl55Cup"],
    "(||(": SMuFL_MAP["acsgsh17Cdn"],
    "(!!(": SMuFL_MAP["acsgfl17Cup"],
    "//||": SMuFL_MAP["acsgsh7V11Kdn"],
    "\\\\!!": SMuFL_MAP["acsgfl7V11Kup"],
    ")|||(": SMuFL_MAP["acsgsh7V11Kup"],
    ")!!!(": SMuFL_MAP["acsgfl7V11Kdn"],
    "~|||(": SMuFL_MAP["acsgsh17Cup"],
    "~!!!(": SMuFL_MAP["acsgfl17Cdn"],
    "|||\\": SMuFL_MAP["acsgsh55Cup"],
    "!!!/": SMuFL_MAP["acsgfl55Cdn"],
    "(|||": SMuFL_MAP["acsgsh7V11Cup"],
    "(!!!": SMuFL_MAP["acsgfl7V11Cdn"],
    "(|||(": SMuFL_MAP["acsgsh5V11Sup"],
    "(!!!(": SMuFL_MAP["acsgfl5V11Sdn"],
    "~X(": SMuFL_MAP["acsgdbsh5V11Sdn"],
    "~Y(": SMuFL_MAP["acsgdbfl5V11Sup"],
    ")X~": SMuFL_MAP["acsgdbsh7V11Cdn"],
    ")Y~": SMuFL_MAP["acsgdbfl7V11Cup"],
    "/X": SMuFL_MAP["acsgdbsh55Cdn"],
    "\\Y": SMuFL_MAP["acsgdbfl55Cup"],
    "(X(": SMuFL_MAP["acsgdbsh17Cdn"],
    "(Y(": SMuFL_MAP["acsgdbfl17Cup"],
    "//X": SMuFL_MAP["acsgdbsh7V11Kdn"],
    "\\\\Y": SMuFL_MAP["acsgdbfl7V11Kup"],
    "|~": SMuFL_MAP["acsg23cmup"],
    "!~": SMuFL_MAP["acsg23cmdn"],
    ")/|": SMuFL_MAP["acsg5V19cmup"],
    ")\\!": SMuFL_MAP["acsg5V19cmdn"],
    "/|~": SMuFL_MAP["acsg5V23smdsup"],
    "\\!~": SMuFL_MAP["acsg5V23smdsdn"],
    "||~": SMuFL_MAP["acsgsh5V23Sdn"],
    "!!~": SMuFL_MAP["acsgfl5V23Sup"],
    ")||)": SMuFL_MAP["acsgsh5V19Cdn"],
    ")!!)": SMuFL_MAP["acsgfl5V19Cup"],
    "/||~": SMuFL_MAP["acsgsh23Cdn"],
    "\\!!~": SMuFL_MAP["acsgfl23Cup"],
    "|||~": SMuFL_MAP["acsgsh23Cup"],
    "!!!~": SMuFL_MAP["acsgfl23Cdn"],
    ")/|||": SMuFL_MAP["acsgsh5V19Cup"],
    ")\\!!!": SMuFL_MAP["acsgfl5V19Cdn"],
    "/|||~": SMuFL_MAP["acsgsh5V23Sup"],
    "\\!!!~": SMuFL_MAP["acsgfl5V23Sdn"],
    "X~": SMuFL_MAP["acsgdbsh5V23Sdn"],
    "Y~": SMuFL_MAP["acsgdbfl5V23Sup"],
    ")X)": SMuFL_MAP["acsgdbsh5V19Cdn"],
    ")Y)": SMuFL_MAP["acsgdbfl5V19Cup"],
    "/X~": SMuFL_MAP["acsgdbsh23Cdn"],
    "\\Y~": SMuFL_MAP["acsgdbfl23Cup"],
    ")|": SMuFL_MAP["acsg19scup"],
    ")!": SMuFL_MAP["acsg19scdn"],
    "~|": SMuFL_MAP["acsg17klup"],
    "~!": SMuFL_MAP["acsg17kldn"],
    ")~|": SMuFL_MAP["acsg143cmup"],
    ")~!": SMuFL_MAP["acsg143cmdn"],
    "~~|": SMuFL_MAP["acsg11V49cmup"],
    "~~!": SMuFL_MAP["acsg11V49cmdn"],
    ")|~": SMuFL_MAP["acsg19cmup"],
    ")!~": SMuFL_MAP["acsg19cmdn"],
    ")|)": SMuFL_MAP["acsg7V19cmup"],
    ")!)": SMuFL_MAP["acsg7V19cmdn"],
    "~|)": SMuFL_MAP["acsg49smdsup"],
    "~!)": SMuFL_MAP["acsg49smdsdn"],
    "~|\\": SMuFL_MAP["acsg23smdsup"],
    "~!/": SMuFL_MAP["acsg23smdsdn"],
    ")//|": SMuFL_MAP["acsg5V13mddsup"],
    ")\\\\!": SMuFL_MAP["acsg5V13mddsdn"],
    "(|~": SMuFL_MAP["acsg11V19mddsup"],
    "(!~": SMuFL_MAP["acsg11V19mddsdn"],
    "(/|": SMuFL_MAP["acsg49mddsup"],
    "(\\!": SMuFL_MAP["acsg49mddsdn"],
    ")/|\\": SMuFL_MAP["acsg5V49mddsup"],
    ")\\!/": SMuFL_MAP["acsg5V49mddsdn"],
    "|\\)": SMuFL_MAP["acsg49lgdsup"],
    "!/)": SMuFL_MAP["acsg49lgdsdn"],
    "|\\\\": SMuFL_MAP["acsg11V19lgdsup"],
    "!//": SMuFL_MAP["acsg11V19lgdsdn"],
    ")|\\\\": SMuFL_MAP["acsg5V13lgdsup"],
    ")!//": SMuFL_MAP["acsg5V13lgdsdn"],
    ")~||": SMuFL_MAP["acsgsh23Sdn"],
    ")~!!": SMuFL_MAP["acsgfl23Sup"],
    "~~||": SMuFL_MAP["acsgsh49Sdn"],
    "~~!!": SMuFL_MAP["acsgfl49Sup"],
    ")/||": SMuFL_MAP["acsgsh7V19Cdn"],
    ")\\!!": SMuFL_MAP["acsgfl7V19Cup"],
    "(||": SMuFL_MAP["acsgsh19Cdn"],
    "(!!": SMuFL_MAP["acsgfl19Cup"],
    "~||)": SMuFL_MAP["acsgsh11V49Cdn"],
    "~!!)": SMuFL_MAP["acsgfl11V49Cup"],
    "~||\\": SMuFL_MAP["acsgsh143Cdn"],
    "~!!/": SMuFL_MAP["acsgfl143Cup"],
    ")//||": SMuFL_MAP["acsgsh17Kdn"],
    ")\\\\!!": SMuFL_MAP["acsgfl17Kup"],
    "(||~": SMuFL_MAP["acsgsh19Sdn"],
    "(!!~": SMuFL_MAP["acsgfl19Sup"],
    ")|||": SMuFL_MAP["acsgsh19Sup"],
    ")!!!": SMuFL_MAP["acsgfl19Sdn"],
    "~|||": SMuFL_MAP["acsgsh17Kup"],
    "~!!!": SMuFL_MAP["acsgfl17Kdn"],
    ")~|||": SMuFL_MAP["acsgsh143Cup"],
    ")~!!!": SMuFL_MAP["acsgfl143Cdn"],
    "~~|||": SMuFL_MAP["acsgsh11V49Cup"],
    "~~!!!": SMuFL_MAP["acsgfl11V49Cdn"],
    ")|||~": SMuFL_MAP["acsgsh19Cup"],
    ")!!!~": SMuFL_MAP["acsgfl19Cdn"],
    ")|||)": SMuFL_MAP["acsgsh7V19Cup"],
    ")!!!)": SMuFL_MAP["acsgfl7V19Cdn"],
    "~|||)": SMuFL_MAP["acsgsh49Sup"],
    "~!!!)": SMuFL_MAP["acsgfl49Sdn"],
    "~|||\\": SMuFL_MAP["acsgsh23Sup"],
    "~!!!/": SMuFL_MAP["acsgfl23Sdn"],
    ")//|||": SMuFL_MAP["acsgsh5V13Mup"],
    ")\\\\!!!": SMuFL_MAP["acsgfl5V13Mdn"],
    "(|||~": SMuFL_MAP["acsgsh11V19Mup"],
    "(!!!~": SMuFL_MAP["acsgfl11V19Mdn"],
    "(/|||": SMuFL_MAP["acsgsh49Mup"],
    "(\\!!!": SMuFL_MAP["acsgfl49Mdn"],
    ")/|||\\": SMuFL_MAP["acsgsh5V49Mup"],
    ")\\!!!/": SMuFL_MAP["acsgfl5V49Mdn"],
    "|||\\)": SMuFL_MAP["acsgsh49Lup"],
    "!!!/)": SMuFL_MAP["acsgfl49Ldn"],
    "|||\\\\": SMuFL_MAP["acsgsh11V19Lup"],
    "!!!//": SMuFL_MAP["acsgfl11V19Ldn"],
    ")|||\\\\": SMuFL_MAP["acsgsh5V13Lup"],
    ")!!!//": SMuFL_MAP["acsgfl5V13Ldn"],
    ")~X": SMuFL_MAP["acsgdbsh23Sdn"],
    ")~Y": SMuFL_MAP["acsgdbfl23Sup"],
    "~~X": SMuFL_MAP["acsgdbsh49Sdn"],
    "~~Y": SMuFL_MAP["acsgdbfl49Sup"],
    ")/X": SMuFL_MAP["acsgdbsh7V19Cdn"],
    ")\\Y": SMuFL_MAP["acsgdbfl7V19Cup"],
    "(X": SMuFL_MAP["acsgdbsh19Cdn"],
    "(Y": SMuFL_MAP["acsgdbfl19Cup"],
    "~X)": SMuFL_MAP["acsgdbsh11V49Cdn"],
    "~Y)": SMuFL_MAP["acsgdbfl11V49Cup"],
    "~X\\": SMuFL_MAP["acsgdbsh143Cdn"],
    "~Y/": SMuFL_MAP["acsgdbfl143Cup"],
    ")//X": SMuFL_MAP["acsgdbsh17Kdn"],
    ")\\\\Y": SMuFL_MAP["acsgdbfl17Kup"],
    "(X~": SMuFL_MAP["acsgdbsh19Sdn"],
    "(Y~": SMuFL_MAP["acsgdbfl19Sup"],
    "|": SMuFL_MAP["acsgshup"],
    "!": SMuFL_MAP["acsgshdn"],
    "'": SMuFL_MAP["acsgac"],
    ".": SMuFL_MAP["acsggr"],
    "\`": SMuFL_MAP["acsg1mnup"],
    ",": SMuFL_MAP["acsg1mndn"],
    "\`\`": SMuFL_MAP["acsg2mnup"],
    ",,": SMuFL_MAP["acsg2mndn"],
    "@1": SMuFL_MAP["acsg1tnup"],
    "l1": SMuFL_MAP["acsg1tndn"],
    "@2": SMuFL_MAP["acsg2tnup"],
    "l2": SMuFL_MAP["acsg2tndn"],
    "@3": SMuFL_MAP["acsg3tnup"],
    "l3": SMuFL_MAP["acsg3tndn"],
    "@4": SMuFL_MAP["acsg4tnup"],
    "l4": SMuFL_MAP["acsg4tndn"],
    "@5": SMuFL_MAP["acsg5tnup"],
    "l5": SMuFL_MAP["acsg5tndn"],
    "@6": SMuFL_MAP["acsg6tnup"],
    "l6": SMuFL_MAP["acsg6tndn"],
    "@7": SMuFL_MAP["acsg7tnup"],
    "l7": SMuFL_MAP["acsg7tndn"],
    "@8": SMuFL_MAP["acsg8tnup"],
    "l8": SMuFL_MAP["acsg8tndn"],
    "@9": SMuFL_MAP["acsg9tnup"],
    "l9": SMuFL_MAP["acsg9tndn"],
    "@.": SMuFL_MAP["acsgfrtnup"],
    "l.": SMuFL_MAP["acsgfrtndn"],
} as Record<Code & Word, Unicode & Word>

const SAGITTAL_SAGISPEAK_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "nai": SMuFL_MAP["acsg5V7klup"],
    "nao": SMuFL_MAP["acsg5V7kldn"],
    "pai": SMuFL_MAP["acsg5cmup"],
    "pao": SMuFL_MAP["acsg5cmdn"],
    "tai": SMuFL_MAP["acsg7cmup"],
    "tao": SMuFL_MAP["acsg7cmdn"],
    "phai": SMuFL_MAP["acsg25smdsup"],
    "phao": SMuFL_MAP["acsg25smdsdn"],
    "patai": SMuFL_MAP["acsg35mddsup"],
    "patao": SMuFL_MAP["acsg35mddsdn"],
    "pakai": SMuFL_MAP["acsg11mddsup"],
    "pakao": SMuFL_MAP["acsg11mddsdn"],
    "jatai": SMuFL_MAP["acsg11lgdsup"],
    "jatao": SMuFL_MAP["acsg11lgdsdn"],
    "jakai": SMuFL_MAP["acsg35lgdsup"],
    "jakao": SMuFL_MAP["acsg35lgdsdn"],
    "phaoshp": SMuFL_MAP["acsgsh25Sdn"],
    "phaiflt": SMuFL_MAP["acsgfl25Sup"],
    "taoshp": SMuFL_MAP["acsgsh7Cdn"],
    "taiflt": SMuFL_MAP["acsgfl7Cup"],
    "paoshp": SMuFL_MAP["acsgsh5Cdn"],
    "paiflt": SMuFL_MAP["acsgfl5Cup"],
    "naoshp": SMuFL_MAP["acsgsh5V7Kdn"],
    "naiflt": SMuFL_MAP["acsgfl5V7Kup"],
    "shp": SMuFL_MAP["acsgsh"],
    "flt": SMuFL_MAP["acsgfl"],
    "naishp": SMuFL_MAP["acsgsh5V7Kup"],
    "naoflt": SMuFL_MAP["acsgfl5V7Kdn"],
    "paishp": SMuFL_MAP["acsgsh5Cup"],
    "paoflt": SMuFL_MAP["acsgfl5Cdn"],
    "taishp": SMuFL_MAP["acsgsh7Cup"],
    "taoflt": SMuFL_MAP["acsgfl7Cdn"],
    "phaishp": SMuFL_MAP["acsgsh25Sup"],
    "phaoflt": SMuFL_MAP["acsgfl25Sdn"],
    "pataishp": SMuFL_MAP["acsgsh35Mup"],
    "pataoflt": SMuFL_MAP["acsgfl35Mdn"],
    "pakaishp": SMuFL_MAP["acsgsh11Mup"],
    "pakaoflt": SMuFL_MAP["acsgfl11Mdn"],
    "jataishp": SMuFL_MAP["acsgsh11Lup"],
    "jataoflt": SMuFL_MAP["acsgfl11Ldn"],
    "jakaishp": SMuFL_MAP["acsgsh35Lup"],
    "jakaoflt": SMuFL_MAP["acsgfl35Ldn"],
    "phaodblshp": SMuFL_MAP["acsgdbsh25Sdn"],
    "phaidblflt": SMuFL_MAP["acsgdbfl25Sup"],
    "taodblshp": SMuFL_MAP["acsgdbsh7Cdn"],
    "taidblflt": SMuFL_MAP["acsgdbfl7Cup"],
    "paodblshp": SMuFL_MAP["acsgdbsh5Cdn"],
    "paidblflt": SMuFL_MAP["acsgdbfl5Cup"],
    "naodblshp": SMuFL_MAP["acsgdbsh5V7Kdn"],
    "naidblflt": SMuFL_MAP["acsgdbfl5V7Kup"],
    "dblshp": SMuFL_MAP["acsgdbsh"],
    "dblflt": SMuFL_MAP["acsgdbfl"],
    "ranai": SMuFL_MAP["acsg7V11klup"],
    "ranao": SMuFL_MAP["acsg7V11kldn"],
    "sanai": SMuFL_MAP["acsg17cmup"],
    "sanao": SMuFL_MAP["acsg17cmdn"],
    "kai": SMuFL_MAP["acsg55cmup"],
    "kao": SMuFL_MAP["acsg55cmdn"],
    "jai": SMuFL_MAP["acsg7V11cmup"],
    "jao": SMuFL_MAP["acsg7V11cmdn"],
    "janai": SMuFL_MAP["acsg5V11smdsup"],
    "janao": SMuFL_MAP["acsg5V11smdsdn"],
    "janaoshp": SMuFL_MAP["acsgsh5V11Sdn"],
    "janaiflt": SMuFL_MAP["acsgfl5V11Sup"],
    "jaoshp": SMuFL_MAP["acsgsh7V11Cdn"],
    "jaiflt": SMuFL_MAP["acsgfl7V11Cup"],
    "kaoshp": SMuFL_MAP["acsgsh55Cdn"],
    "kaiflt": SMuFL_MAP["acsgfl55Cup"],
    "sanaoshp": SMuFL_MAP["acsgsh17Cdn"],
    "sanaiflt": SMuFL_MAP["acsgfl17Cup"],
    "ranaoshp": SMuFL_MAP["acsgsh7V11Kdn"],
    "ranaiflt": SMuFL_MAP["acsgfl7V11Kup"],
    "ranaishp": SMuFL_MAP["acsgsh7V11Kup"],
    "ranaoflt": SMuFL_MAP["acsgfl7V11Kdn"],
    "sanaishp": SMuFL_MAP["acsgsh17Cup"],
    "sanaoflt": SMuFL_MAP["acsgfl17Cdn"],
    "kaishp": SMuFL_MAP["acsgsh55Cup"],
    "kaoflt": SMuFL_MAP["acsgfl55Cdn"],
    "jaishp": SMuFL_MAP["acsgsh7V11Cup"],
    "jaoflt": SMuFL_MAP["acsgfl7V11Cdn"],
    "janaishp": SMuFL_MAP["acsgsh5V11Sup"],
    "janaoflt": SMuFL_MAP["acsgfl5V11Sdn"],
    "janaodblshp": SMuFL_MAP["acsgdbsh5V11Sdn"],
    "janaidblflt": SMuFL_MAP["acsgdbfl5V11Sup"],
    "jaodblshp": SMuFL_MAP["acsgdbsh7V11Cdn"],
    "jaidblflt": SMuFL_MAP["acsgdbfl7V11Cup"],
    "kaodblshp": SMuFL_MAP["acsgdbsh55Cdn"],
    "kaidblflt": SMuFL_MAP["acsgdbfl55Cup"],
    "sanaodblshp": SMuFL_MAP["acsgdbsh17Cdn"],
    "sanaidblflt": SMuFL_MAP["acsgdbfl17Cup"],
    "ranaodblshp": SMuFL_MAP["acsgdbsh7V11Kdn"],
    "ranaidblflt": SMuFL_MAP["acsgdbfl7V11Kup"],
    "zai": SMuFL_MAP["acsg23cmup"],
    "zao": SMuFL_MAP["acsg23cmdn"],
    "prai": SMuFL_MAP["acsg5V19cmup"],
    "prao": SMuFL_MAP["acsg5V19cmdn"],
    "pazai": SMuFL_MAP["acsg5V23smdsup"],
    "pazao": SMuFL_MAP["acsg5V23smdsdn"],
    "pazaoshp": SMuFL_MAP["acsgsh5V23Sdn"],
    "pazaiflt": SMuFL_MAP["acsgfl5V23Sup"],
    "praoshp": SMuFL_MAP["acsgsh5V19Cdn"],
    "praiflt": SMuFL_MAP["acsgfl5V19Cup"],
    "zaoshp": SMuFL_MAP["acsgsh23Cdn"],
    "zaiflt": SMuFL_MAP["acsgfl23Cup"],
    "zaishp": SMuFL_MAP["acsgsh23Cup"],
    "zaoflt": SMuFL_MAP["acsgfl23Cdn"],
    "praishp": SMuFL_MAP["acsgsh5V19Cup"],
    "praoflt": SMuFL_MAP["acsgfl5V19Cdn"],
    "pazaishp": SMuFL_MAP["acsgsh5V23Sup"],
    "pazaoflt": SMuFL_MAP["acsgfl5V23Sdn"],
    "pazaodblshp": SMuFL_MAP["acsgdbsh5V23Sdn"],
    "pazaidblflt": SMuFL_MAP["acsgdbfl5V23Sup"],
    "praodblshp": SMuFL_MAP["acsgdbsh5V19Cdn"],
    "praidblflt": SMuFL_MAP["acsgdbfl5V19Cup"],
    "zaodblshp": SMuFL_MAP["acsgdbsh23Cdn"],
    "zaidblflt": SMuFL_MAP["acsgdbfl23Cup"],
    "rai": SMuFL_MAP["acsg19scup"],
    "rao": SMuFL_MAP["acsg19scdn"],
    "sai": SMuFL_MAP["acsg17klup"],
    "sao": SMuFL_MAP["acsg17kldn"],
    "srai": SMuFL_MAP["acsg143cmup"],
    "srao": SMuFL_MAP["acsg143cmdn"],
    "shai": SMuFL_MAP["acsg11V49cmup"],
    "shao": SMuFL_MAP["acsg11V49cmdn"],
    "razai": SMuFL_MAP["acsg19cmup"],
    "razao": SMuFL_MAP["acsg19cmdn"],
    "ratai": SMuFL_MAP["acsg7V19cmup"],
    "ratao": SMuFL_MAP["acsg7V19cmdn"],
    "satai": SMuFL_MAP["acsg49smdsup"],
    "satao": SMuFL_MAP["acsg49smdsdn"],
    "sakai": SMuFL_MAP["acsg23smdsup"],
    "sakao": SMuFL_MAP["acsg23smdsdn"],
    "phrai": SMuFL_MAP["acsg5V13mddsup"],
    "phrao": SMuFL_MAP["acsg5V13mddsdn"],
    "jazai": SMuFL_MAP["acsg11V19mddsup"],
    "jazao": SMuFL_MAP["acsg11V19mddsdn"],
    "jpai": SMuFL_MAP["acsg49mddsup"],
    "jpao": SMuFL_MAP["acsg49mddsdn"],
    "prakai": SMuFL_MAP["acsg5V49mddsup"],
    "prakao": SMuFL_MAP["acsg5V49mddsdn"],
    "ktai": SMuFL_MAP["acsg49lgdsup"],
    "ktao": SMuFL_MAP["acsg49lgdsdn"],
    "khai": SMuFL_MAP["acsg11V19lgdsup"],
    "khao": SMuFL_MAP["acsg11V19lgdsdn"],
    "rakhai": SMuFL_MAP["acsg5V13lgdsup"],
    "rakhao": SMuFL_MAP["acsg5V13lgdsdn"],
    "sakaoshp": SMuFL_MAP["acsgsh23Sdn"],
    "sakaiflt": SMuFL_MAP["acsgfl23Sup"],
    "sataoshp": SMuFL_MAP["acsgsh49Sdn"],
    "sataiflt": SMuFL_MAP["acsgfl49Sup"],
    "rataoshp": SMuFL_MAP["acsgsh7V19Cdn"],
    "rataiflt": SMuFL_MAP["acsgfl7V19Cup"],
    "razaoshp": SMuFL_MAP["acsgsh19Cdn"],
    "razaiflt": SMuFL_MAP["acsgfl19Cup"],
    "shaoshp": SMuFL_MAP["acsgsh11V49Cdn"],
    "shaiflt": SMuFL_MAP["acsgfl11V49Cup"],
    "sraoshp": SMuFL_MAP["acsgsh143Cdn"],
    "sraiflt": SMuFL_MAP["acsgfl143Cup"],
    "saoshp": SMuFL_MAP["acsgsh17Kdn"],
    "saiflt": SMuFL_MAP["acsgfl17Kup"],
    "raoshp": SMuFL_MAP["acsgsh19Sdn"],
    "raiflt": SMuFL_MAP["acsgfl19Sup"],
    "raishp": SMuFL_MAP["acsgsh19Sup"],
    "raoflt": SMuFL_MAP["acsgfl19Sdn"],
    "saishp": SMuFL_MAP["acsgsh17Kup"],
    "saoflt": SMuFL_MAP["acsgfl17Kdn"],
    "sraishp": SMuFL_MAP["acsgsh143Cup"],
    "sraoflt": SMuFL_MAP["acsgfl143Cdn"],
    "shaishp": SMuFL_MAP["acsgsh11V49Cup"],
    "shaoflt": SMuFL_MAP["acsgfl11V49Cdn"],
    "razaishp": SMuFL_MAP["acsgsh19Cup"],
    "razaoflt": SMuFL_MAP["acsgfl19Cdn"],
    "rataishp": SMuFL_MAP["acsgsh7V19Cup"],
    "rataoflt": SMuFL_MAP["acsgfl7V19Cdn"],
    "sataishp": SMuFL_MAP["acsgsh49Sup"],
    "sataoflt": SMuFL_MAP["acsgfl49Sdn"],
    "sakaishp": SMuFL_MAP["acsgsh23Sup"],
    "sakaoflt": SMuFL_MAP["acsgfl23Sdn"],
    "phraishp": SMuFL_MAP["acsgsh5V13Mup"],
    "phraoflt": SMuFL_MAP["acsgfl5V13Mdn"],
    "jazaishp": SMuFL_MAP["acsgsh11V19Mup"],
    "jazaoflt": SMuFL_MAP["acsgfl11V19Mdn"],
    "jpaishp": SMuFL_MAP["acsgsh49Mup"],
    "jpaoflt": SMuFL_MAP["acsgfl49Mdn"],
    "prakaishp": SMuFL_MAP["acsgsh5V49Mup"],
    "prakaoflt": SMuFL_MAP["acsgfl5V49Mdn"],
    "ktaishp": SMuFL_MAP["acsgsh49Lup"],
    "ktaoflt": SMuFL_MAP["acsgfl49Ldn"],
    "khaishp": SMuFL_MAP["acsgsh11V19Lup"],
    "khaoflt": SMuFL_MAP["acsgfl11V19Ldn"],
    "rakhaishp": SMuFL_MAP["acsgsh5V13Lup"],
    "rakhaoflt": SMuFL_MAP["acsgfl5V13Ldn"],
    "sakaodblshp": SMuFL_MAP["acsgdbsh23Sdn"],
    "sakaidblflt": SMuFL_MAP["acsgdbfl23Sup"],
    "sataodblshp": SMuFL_MAP["acsgdbsh49Sdn"],
    "sataidblflt": SMuFL_MAP["acsgdbfl49Sup"],
    "rataodblshp": SMuFL_MAP["acsgdbsh7V19Cdn"],
    "rataidblflt": SMuFL_MAP["acsgdbfl7V19Cup"],
    "razaodblshp": SMuFL_MAP["acsgdbsh19Cdn"],
    "razaidblflt": SMuFL_MAP["acsgdbfl19Cup"],
    "shaodblshp": SMuFL_MAP["acsgdbsh11V49Cdn"],
    "shaidblflt": SMuFL_MAP["acsgdbfl11V49Cup"],
    "sraodblshp": SMuFL_MAP["acsgdbsh143Cdn"],
    "sraidblflt": SMuFL_MAP["acsgdbfl143Cup"],
    "saodblshp": SMuFL_MAP["acsgdbsh17Kdn"],
    "saidblflt": SMuFL_MAP["acsgdbfl17Kup"],
    "raodblshp": SMuFL_MAP["acsgdbsh19Sdn"],
    "raidblflt": SMuFL_MAP["acsgdbfl19Sup"],
    "ai": SMuFL_MAP["acsgshup"],
    "ao": SMuFL_MAP["acsgshdn"],
    "bi": SMuFL_MAP["acsgac"],
    "bo": SMuFL_MAP["acsggr"],
    "mi": SMuFL_MAP["acsg1mnup"],
    "mo": SMuFL_MAP["acsg1mndn"],
    "mimi": SMuFL_MAP["acsg2mnup"],
    "momo": SMuFL_MAP["acsg2mndn"],
    "qui": SMuFL_MAP["acsg1tnup"],
    "quo": SMuFL_MAP["acsg1tndn"],
    "quiqui": SMuFL_MAP["acsg2tnup"],
    "quoquo": SMuFL_MAP["acsg2tndn"],
    "mitn": SMuFL_MAP["acsg3tnup"],
    "motn": SMuFL_MAP["acsg3tndn"],
    "quimi": SMuFL_MAP["acsg4tnup"],
    "quomo": SMuFL_MAP["acsg4tndn"],
    "quiquimi": SMuFL_MAP["acsg5tnup"],
    "quoquomo": SMuFL_MAP["acsg5tndn"],
    "mimitn": SMuFL_MAP["acsg6tnup"],
    "momotn": SMuFL_MAP["acsg6tndn"],
    "quimimi": SMuFL_MAP["acsg7tnup"],
    "quomomo": SMuFL_MAP["acsg7tndn"],
    "quiquimimi": SMuFL_MAP["acsg8tnup"],
    "quoquomomo": SMuFL_MAP["acsg8tndn"],
    "mimimi": SMuFL_MAP["acsg9tnup"],
    "momomo": SMuFL_MAP["acsg9tndn"],
    "i": SMuFL_MAP["acsgfrtnup"],
    "o": SMuFL_MAP["acsgfrtndn"],
} as Record<Code & Word, Unicode & Word>

const SAGITTAL_SECONDARY_SAGISPEAK_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "fai": SMuFL_MAP["acsg25smdsup"],
    "fao": SMuFL_MAP["acsg25smdsdn"],
    "gai": SMuFL_MAP["acsg35mddsup"],
    "gao": SMuFL_MAP["acsg35mddsdn"],
    "vai": SMuFL_MAP["acsg11mddsup"],
    "vao": SMuFL_MAP["acsg11mddsdn"],
    "wai": SMuFL_MAP["acsg11lgdsup"],
    "wao": SMuFL_MAP["acsg11lgdsdn"],
    "dai": SMuFL_MAP["acsg35lgdsup"],
    "dao": SMuFL_MAP["acsg35lgdsdn"],
    "faoshp": SMuFL_MAP["acsgsh25Sdn"],
    "faiflt": SMuFL_MAP["acsgfl25Sup"],
    "faishp": SMuFL_MAP["acsgsh25Sup"],
    "faoflt": SMuFL_MAP["acsgfl25Sdn"],
    "gaishp": SMuFL_MAP["acsgsh35Mup"],
    "gaoflt": SMuFL_MAP["acsgfl35Mdn"],
    "vaishp": SMuFL_MAP["acsgsh11Mup"],
    "vaoflt": SMuFL_MAP["acsgfl11Mdn"],
    "waishp": SMuFL_MAP["acsgsh11Lup"],
    "waoflt": SMuFL_MAP["acsgfl11Ldn"],
    "daishp": SMuFL_MAP["acsgsh35Lup"],
    "daoflt": SMuFL_MAP["acsgfl35Ldn"],
    "faodblshp": SMuFL_MAP["acsgdbsh25Sdn"],
    "faidblflt": SMuFL_MAP["acsgdbfl25Sup"],
    "slai": SMuFL_MAP["acsg143cmup"],
    "slao": SMuFL_MAP["acsg143cmdn"],
    "frai": SMuFL_MAP["acsg5V13mddsup"],
    "frao": SMuFL_MAP["acsg5V13mddsdn"],
    "vrai": SMuFL_MAP["acsg5V49mddsup"],
    "vrao": SMuFL_MAP["acsg5V49mddsdn"],
    "chai": SMuFL_MAP["acsg11V19lgdsup"],
    "chao": SMuFL_MAP["acsg11V19lgdsdn"],
    "rachai": SMuFL_MAP["acsg5V13lgdsup"],
    "rachao": SMuFL_MAP["acsg5V13lgdsdn"],
    "slaoshp": SMuFL_MAP["acsgsh143Cdn"],
    "slaiflt": SMuFL_MAP["acsgfl143Cup"],
    "slaishp": SMuFL_MAP["acsgsh143Cup"],
    "slaoflt": SMuFL_MAP["acsgfl143Cdn"],
    "fraishp": SMuFL_MAP["acsgsh5V13Mup"],
    "fraoflt": SMuFL_MAP["acsgfl5V13Mdn"],
    "vraishp": SMuFL_MAP["acsgsh5V49Mup"],
    "vraoflt": SMuFL_MAP["acsgfl5V49Mdn"],
    "chaishp": SMuFL_MAP["acsgsh11V19Lup"],
    "chaoflt": SMuFL_MAP["acsgfl11V19Ldn"],
    "rachaishp": SMuFL_MAP["acsgsh5V13Lup"],
    "rachaoflt": SMuFL_MAP["acsgfl5V13Ldn"],
    "slaodblshp": SMuFL_MAP["acsgdbsh143Cdn"],
    "slaidblflt": SMuFL_MAP["acsgdbfl143Cup"],
} as Record<Code & Word, Unicode & Word>

const SAGITTAL_ACCIDENTAL_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    ...SAGITTAL_LONG_ASCII_ALIASES_MAP,
    ...SAGITTAL_SAGISPEAK_ALIASES_MAP,
    ...SAGITTAL_SECONDARY_SAGISPEAK_ALIASES_MAP,
}

export {
    SAGITTAL_ACCIDENTAL_ALIASES_MAP,
}
