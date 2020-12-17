// tslint:disable max-line-length

import {Code, Symbol} from "../types"

const SAGITTAL_ACCIDENTAL_MAP: Record<Code, Symbol> = {
    /*U+E300*/[Code[`|(`]]: {unicode: "", width: 7, description: "5:7 kleisma up, (5:7k, ~11:13k, 7C less 5C)"},
    /*U+E301*/[Code[`!(`]]: {unicode: "", width: 7, description: "5:7 kleisma down"},
    /*U+E302*/[Code[`/|`]]: {unicode: "", width: 7, description: "5 comma up, (5C), 1° up [22 27 29 34 41 46 53 96-EDOs], 1/12-tone up"},
    /*U+E303*/[Code[`\\!`]]: {unicode: "", width: 7, description: "5 comma down, 1° down [22 27 29 34 41 46 53 96-EDOs], 1/12-tone down"},
    /*U+E304*/[Code[`|)`]]: {unicode: "", width: 7, description: "7 comma up, (7C), 1° up [43-EDO], 2° up [72-EDO], 1/6-tone up"},
    /*U+E305*/[Code[`!)`]]: {unicode: "", width: 7, description: "7 comma down, 1° down [43-EDO], 2° down [72-EDO], 1/6-tone down"},
    /*U+E306*/[Code[`//|`]]: {unicode: "", width: 10, description: "25 small diesis up, (25S, ~5:13S, ~37S, 5C plus 5C), 2° up [53-EDO]"},
    /*U+E307*/[Code[`\\\\!`]]: {unicode: "", width: 10, description: "25 small diesis down, 2° down [53-EDO]"},
    /*U+E308*/[Code[`/|)`]]: {unicode: "", width: 11, description: "35 medium diesis up, (35M, ~13M, ~125M, 5C plus 7C), 2/9-tone up"},
    /*U+E309*/[Code[`\\!)`]]: {unicode: "", width: 11, description: "35 medium diesis down, 1°[50] 2°[27] down, 2/9-tone down"},
    /*U+E30A*/[Code[`/|\\`]]: {unicode: "", width: 13, description: "11 medium diesis up, (11M), 1°[17 31] 2°46 up, 1/4-tone up"},
    /*U+E30B*/[Code[`\\!/`]]: {unicode: "", width: 13, description: "11 medium diesis down, 1°[17 31] 2°46 down, 1/4-tone down"},
    /*U+E30C*/[Code[`(|)`]]: {unicode: "", width: 13, description: "11 large diesis up, (11L), (sharp less 11M), 3° up [46-EDO]"},
    /*U+E30D*/[Code[`(!)`]]: {unicode: "", width: 13, description: "11 large diesis down, 3° down [46-EDO]"},
    /*U+E30E*/[Code[`(|\\`]]: {unicode: "", width: 14, description: "35 large diesis up, (35L, ~13L, ~125L, sharp less 35M), 2°50 up"},
    /*U+E30F*/[Code[`(!/`]]: {unicode: "", width: 14, description: "35 large diesis down, 2° down [50-EDO], 5/18-tone down"},

    /*U+E310*/[Code[`)||(`]]: {unicode: "", description: "Sharp 25S-down, 3° up [53-EDO]"},
    /*U+E311*/[Code[`)!!(`]]: {unicode: "", description: "Flat 25S-up, 3° down [53-EDO]"},
    /*U+E312*/[Code[`||)`]]: {unicode: "", description: "Sharp 7C-down, 2° up [43-EDO], 4° up [72-EDO], 1/3-tone up"},
    /*U+E313*/[Code[`!!)`]]: {unicode: "", description: "Flat 7C-up, 2° down [43-EDO], 4° down [72-EDO], 1/3-tone down"},
    /*U+E314*/[Code[`||\\`]]: {unicode: "", description: "Sharp 5C-down, 2°[22 29] 3°[27 34 41] 4°[39 46 53] 5°[72] 7°[96] up, 5/12-tone up"},
    /*U+E315*/[Code[`!!/`]]: {unicode: "", description: "Flat 5C-up, 2°[22 29] 3°[27 34 41] 4°[39 46 53] 5°[72] 7°[96] down, 5/12-tone down"},
    /*U+E316*/[Code[`/||)`]]: {unicode: "", description: "Sharp 5:7k-down"},
    /*U+E317*/[Code[`\\!!)`]]: {unicode: "", description: "Flat 5:7k-up"},
    /*U+E318*/[Code[`/||\\`]]: {unicode: "", description: "Sharp, (apotome up)[almost all-EDOs], 1/2-tone up"},
    /*U+E319*/[Code[`\\!!/`]]: {unicode: "", description: "Flat, (apotome down)[almost all-EDOs], 1/2-tone down"},
    /*U+E31C*/[Code[`|||(`]]: {unicode: "", description: "Sharp 5:7k-up"},
    /*U+E31D*/[Code[`!!!(`]]: {unicode: "", description: "Flat 5:7k-down"},
    /*U+E31E*/[Code[`/|||`]]: {unicode: "", description: "Sharp 5C-up, 4°[22 29] 5°[27 34 41] 6°[39 46 53] up, 7/12-tone up"},
    /*U+E31F*/[Code[`\\!!!`]]: {unicode: "", description: "Flat 5C-down, 4°[22 29] 5°[27 34 41] 6°[39 46 53] down, 7/12-tone down"},
    /*U+E320*/[Code[`|||)`]]: {unicode: "", description: "Sharp 7C-up, 4° up [43-EDO], 8° up [72-EDO], 2/3-tone up"},
    /*U+E321*/[Code[`!!!)`]]: {unicode: "", description: "Flat 7C-down, 4° down [43-EDO], 8° down [72-EDO], 2/3-tone down"},
    /*U+E322*/[Code[`//|||`]]: {unicode: "", description: "Sharp 25S-up, 7° up [53-EDO]"},
    /*U+E323*/[Code[`\\\\!!!`]]: {unicode: "", description: "Flat 25S-down, 7° down [53-EDO]"},
    /*U+E324*/[Code[`/|||)`]]: {unicode: "", description: "Sharp 35M-up, 4° up [50-EDO], 6° up [27-EDO], 13/18-tone up"},
    /*U+E325*/[Code[`\\!!!)`]]: {unicode: "", description: "Flat 35M-down, 4° down [50-EDO], 6° down [27-EDO], 13/18-tone down"},
    /*U+E326*/[Code[`/|||\\`]]: {unicode: "", description: "Sharp 11M-up, 3° up [17 31-EDOs], 7° up [46-EDO], 3/4-tone up"},
    /*U+E327*/[Code[`\\!!!/`]]: {unicode: "", description: "Flat 11M-down, 3° down [17 31-EDOs], 7° down [46-EDO], 3/4-tone down"},
    /*U+E328*/[Code[`(|||)`]]: {unicode: "", description: "Sharp 11L-up, 8° up [46-EDO]"},
    /*U+E329*/[Code[`(!!!)`]]: {unicode: "", description: "Flat 11L-down, 8° up [46-EDO]"},
    /*U+E32A*/[Code[`(|||\\`]]: {unicode: "", description: "Sharp 35L-up, 5° up [50-EDO]"},
    /*U+E32B*/[Code[`(!!!/`]]: {unicode: "", description: "Flat 35L-down, 5° down [50-EDO]"},
    /*U+E32C*/[Code[`)X(`]]: {unicode: "", description: "Double sharp 25S-down, 8°up [53-EDO]"},
    /*U+E32D*/[Code[`)Y(`]]: {unicode: "", description: "Double flat 25S-up, 8°down [53-EDO]"},
    /*U+E32E*/[Code[`X)`]]: {unicode: "", description: "Double sharp 7C-down, 5°[43] 10°[72] up, 5/6-tone up"},
    /*U+E32F*/[Code[`Y)`]]: {unicode: "", description: "Double flat 7C-up, 5° down [43-EDO], 10° down [72-EDO], 5/6-tone down"},
    /*U+E330*/[Code[`X\\`]]: {unicode: "", description: "Double sharp 5C-down, 5°[22 29] 7°[34 41] 9°53 up, 11/12 tone up"},
    /*U+E331*/[Code[`Y/`]]: {unicode: "", description: "Double flat 5C-up, 5°[22 29] 7°[34 41] 9°53 down, 11/12 tone down"},
    /*U+E332*/[Code[`/X)`]]: {unicode: "", description: "Double sharp 5:7k-down"},
    /*U+E333*/[Code[`\\Y)`]]: {unicode: "", description: "Double flat 5:7k-up"},
    /*U+E334*/[Code[`/X\\`]]: {unicode: "", description: "Double sharp, (2 apotomes up)[almost all-EDOs], whole-tone up"},
    /*U+E335*/[Code[`\\Y/`]]: {unicode: "", description: "Double flat, (2 apotomes down)[almost all-EDOs], whole-tone down"},

    /*U+E340*/[Code[`)|(`]]: {unicode: "", description: "7:11 kleisma up, (7:11k)"},
    /*U+E341*/[Code[`)!(`]]: {unicode: "", description: "7:11 kleisma down"},
    /*U+E342*/[Code[`~|(`]]: {unicode: "", description: "17 comma up, (17C)"},
    /*U+E343*/[Code[`~!(`]]: {unicode: "", description: "17 comma down"},
    /*U+E344*/[Code[`|\\`]]: {unicode: "", description: "55 comma up, (55C, 11M less 5C), 3°up [96-EDO], 3/16-tone up"},
    /*U+E345*/[Code[`!/`]]: {unicode: "", description: "55 comma down, 3° down [96-EDO], 3/16-tone down"},
    /*U+E346*/[Code[`(|`]]: {unicode: "", description: "7:11 comma up, (7:11C, ~13:17S, ~29S, 11L less 7C), 1° up [60-EDO]"},
    /*U+E347*/[Code[`(!`]]: {unicode: "", description: "7:11 comma down, 1° down [60-EDO], 1/10-tone down"},
    /*U+E348*/[Code[`(|(`]]: {unicode: "", description: "5:11 small diesis up, (5:11S, ~7:13S, ~11:17S, 5:7k plus 7:11C)"},
    /*U+E349*/[Code[`(!(`]]: {unicode: "", description: "5:11 small diesis down"},
    /*U+E34A*/[Code[`~||(`]]: {unicode: "", description: "Sharp 5:11S-down"},
    /*U+E34B*/[Code[`~!!(`]]: {unicode: "", description: "Flat 5:11S-up"},
    /*U+E34C*/[Code[`)||~`]]: {unicode: "", description: "Sharp 7:11C-down, 4° up [60-EDO], 2/5-tone up"},
    /*U+E34D*/[Code[`)!!~`]]: {unicode: "", description: "Flat 7:11C-up, 4° down [60-EDO], 2/5-tone down"},
    /*U+E34E*/[Code[`/||`]]: {unicode: "", description: "Sharp 55C-down, 5° up [96-EDO], 5/16-tone up"},
    /*U+E34F*/[Code[`\\!!`]]: {unicode: "", description: "Flat 55C-up, 5° down [96-EDO], 5/16-tone down"},
    /*U+E350*/[Code[`(||(`]]: {unicode: "", description: "Sharp 17C-down"},
    /*U+E351*/[Code[`(!!(`]]: {unicode: "", description: "Flat 17C-up"},
    /*U+E352*/[Code[`//||`]]: {unicode: "", description: "Sharp 7:11k-down"},
    /*U+E353*/[Code[`\\\\!!`]]: {unicode: "", description: "Flat 7:11k-up"},
    /*U+E354*/[Code[`)|||(`]]: {unicode: "", description: "Sharp 7:11k-up"},
    /*U+E355*/[Code[`)!!!(`]]: {unicode: "", description: "Flat 7:11k-down"},
    /*U+E356*/[Code[`~|||(`]]: {unicode: "", description: "Sharp 17C-up"},
    /*U+E357*/[Code[`~!!!(`]]: {unicode: "", description: "Flat 17C-down"},
    /*U+E358*/[Code[`|||\\`]]: {unicode: "", description: "Sharp 55C-up, 11° up [96-EDO], 11/16-tone up"},
    /*U+E359*/[Code[`!!!/`]]: {unicode: "", description: "Flat 55C-down, 11° down [96-EDO], 11/16-tone down"},
    /*U+E35A*/[Code[`(|||`]]: {unicode: "", description: "Sharp 7:11C-up, 6° up [60-EDO], 3/5- tone up"},
    /*U+E35B*/[Code[`(!!!`]]: {unicode: "", description: "Flat 7:11C-down, 6° down [60-EDO], 3/5- tone down"},
    /*U+E35C*/[Code[`(|||(`]]: {unicode: "", description: "Sharp 5:11S-up"},
    /*U+E35D*/[Code[`(!!!(`]]: {unicode: "", description: "Flat 5:11S-down"},
    /*U+E35E*/[Code[`~X(`]]: {unicode: "", description: "Double sharp 5:11S-down"},
    /*U+E35F*/[Code[`~Y(`]]: {unicode: "", description: "Double flat 5:11S-up"},
    /*U+E360*/[Code[`)X~`]]: {unicode: "", description: "Double sharp 7:11C-down, 9° up [60-EDO], 9/10-tone up"},
    /*U+E361*/[Code[`)Y~`]]: {unicode: "", description: "Double flat 7:11C-up, 9° down [60-EDO], 9/10-tone down"},
    /*U+E362*/[Code[`/X`]]: {unicode: "", description: "Double sharp 55C-down, 13° up [96-EDO], 13/16-tone up"},
    /*U+E363*/[Code[`\\Y`]]: {unicode: "", description: "Double flat 55C-up, 13° down [96-EDO], 13/16-tone down"},
    /*U+E364*/[Code[`(X(`]]: {unicode: "", description: "Double sharp 17C-down"},
    /*U+E365*/[Code[`(Y(`]]: {unicode: "", description: "Double flat 17C-up"},
    /*U+E366*/[Code[`//X`]]: {unicode: "", description: "Double sharp 7:11k-down"},
    /*U+E367*/[Code[`\\\\Y`]]: {unicode: "", description: "Double flat 7:11k-up"},

    /*U+E370*/[Code[`|~`]]: {unicode: "", description: "23 comma up, (23C), 2° up [96-EDO], 1/8-tone up"},
    /*U+E371*/[Code[`!~`]]: {unicode: "", description: "23 comma down, 2° down [96-EDO], 1/8-tone down"},
    /*U+E372*/[Code[`)/|`]]: {unicode: "", description: "5:19 comma up, (5:19C, 5C plus 19s), 1/20-tone up"},
    /*U+E373*/[Code[`)\\!`]]: {unicode: "", description: "5:19 comma down, 1/20-tone down"},
    /*U+E374*/[Code[`/|~`]]: {unicode: "", description: "5:23 small diesis up, (5:23S, 5C plus 23C), 2° up [60-EDO], 1/5-tone up"},
    /*U+E375*/[Code[`\\!~`]]: {unicode: "", description: "5:23 small diesis down, 2° down [60-EDO], 1/5-tone down"},
    /*U+E376*/[Code[`||~`]]: {unicode: "", description: "Sharp 5:23S-down, 3° up [60-EDO], 3/10-tone up"},
    /*U+E377*/[Code[`!!~`]]: {unicode: "", description: "Flat 5:23S-up, 3° down [60-EDO], 3/10-tone down"},
    /*U+E378*/[Code[`)||)`]]: {unicode: "", description: "Sharp 5:19C-down, 9/20-tone up"},
    /*U+E379*/[Code[`)!!)`]]: {unicode: "", description: "Flat 5:19C-up, 9/20-tone down"},
    /*U+E37A*/[Code[`/||~`]]: {unicode: "", description: "Sharp 23C-down, 6° up [96-EDO], 3/8-tone up"},
    /*U+E37B*/[Code[`\\!!~`]]: {unicode: "", description: "Flat 23C-up, 6° down [96-EDO], 3/8-tone down"},
    /*U+E37C*/[Code[`|||~`]]: {unicode: "", description: "Sharp 23C-up, 10° up [96-EDO], 5/8-tone up"},
    /*U+E37D*/[Code[`!!!~`]]: {unicode: "", description: "Flat 23C-down, 10° down [96-EDO], 5/8-tone down"},
    /*U+E37E*/[Code[`)/|||`]]: {unicode: "", description: "Sharp 5:19C-up, 11/20-tone up"},
    /*U+E37F*/[Code[`)\\!!!`]]: {unicode: "", description: "Flat 5:19C-down, 11/20-tone down"},
    /*U+E380*/[Code[`/|||~`]]: {unicode: "", description: "Sharp 5:23S-up, 7° up [60-EDO], 7/10-tone up"},
    /*U+E381*/[Code[`\\!!!~`]]: {unicode: "", description: "Flat 5:23S-down, 7° down [60-EDO], 7/10-tone down"},
    /*U+E382*/[Code[`X~`]]: {unicode: "", description: "Double sharp 5:23S-down, 8° up [60-EDO], 4/5-tone up"},
    /*U+E383*/[Code[`Y~`]]: {unicode: "", description: "Double flat 5:23S-up, 8° down [60-EDO], 4/5-tone down"},
    /*U+E384*/[Code[`)X)`]]: {unicode: "", description: "Double sharp 5:19C-down, 19/20-tone up"},
    /*U+E385*/[Code[`)Y)`]]: {unicode: "", description: "Double flat 5:19C-up, 19/20-tone down"},
    /*U+E386*/[Code[`/X~`]]: {unicode: "", description: "Double sharp 23C-down, 14°up [96-EDO], 7/8-tone up"},
    /*U+E387*/[Code[`\\Y~`]]: {unicode: "", description: "Double flat 23C-up, 14° down [96-EDO], 7/8-tone down"},

    /*U+E390*/[Code[`)|`]]: {unicode: "", description: "19 schisma up, (19s)"},
    /*U+E391*/[Code[`)!`]]: {unicode: "", description: "19 schisma down"},
    /*U+E392*/[Code[`~|`]]: {unicode: "", description: "17 kleisma up, (17k)"},
    /*U+E393*/[Code[`~!`]]: {unicode: "", description: "17 kleisma down"},
    /*U+E394*/[Code[`)~|`]]: {unicode: "", description: "143 comma up, (143C, 13L less 11M)"},
    /*U+E395*/[Code[`)~!`]]: {unicode: "", description: "143 comma down"},
    /*U+E396*/[Code[`~~|`]]: {unicode: "", description: "11:49 comma up, (11:49C, 11M less 49S)"},
    /*U+E397*/[Code[`~~!`]]: {unicode: "", description: "11:49 comma down"},
    /*U+E398*/[Code[`)|~`]]: {unicode: "", description: "19 comma up, (19C)"},
    /*U+E399*/[Code[`)!~`]]: {unicode: "", description: "19 comma down"},
    /*U+E39A*/[Code[`)|)`]]: {unicode: "", description: "7:19 comma up, (7:19C, 7C less 19s)"},
    /*U+E39B*/[Code[`)!)`]]: {unicode: "", description: "7:19 comma down"},
    /*U+E39C*/[Code[`~|)`]]: {unicode: "", description: "49 small diesis up, (49S, ~31S)"},
    /*U+E39D*/[Code[`~!)`]]: {unicode: "", description: "49 small diesis down"},
    /*U+E39E*/[Code[`~|\\`]]: {unicode: "", description: "23 small diesis up, (23S)"},
    /*U+E39F*/[Code[`~!/`]]: {unicode: "", description: "23 small diesis down"},
    /*U+E3A0*/[Code[`)//|`]]: {unicode: "", description: "5:13 medium diesis up, (5:13M, ~37M, 5C plus 13C)"},
    /*U+E3A1*/[Code[`)\\\\!`]]: {unicode: "", description: "5:13 medium diesis down"},
    /*U+E3A2*/[Code[`(|~`]]: {unicode: "", description: "11:19 medium diesis up, (11:19M, 11M plus 19s)"},
    /*U+E3A3*/[Code[`(!~`]]: {unicode: "", description: "11:19 medium diesis down"},
    /*U+E3A4*/[Code[`(/|`]]: {unicode: "", description: "49 medium diesis up, (49M, ~31M, 7C plus 7C)"},
    /*U+E3A5*/[Code[`(\\!`]]: {unicode: "", description: "49 medium diesis down"},
    /*U+E3A6*/[Code[`)/|\\`]]: {unicode: "", description: "5:49 medium diesis up, (5:49M, half apotome)"},
    /*U+E3A7*/[Code[`)\\!/`]]: {unicode: "", description: "5:49 medium diesis down"},
    /*U+E3A8*/[Code[`|\\)`]]: {unicode: "", description: "49 large diesis up, (49L, ~31L, apotome less 49M)"},
    /*U+E3A9*/[Code[`!/)`]]: {unicode: "", description: "49 large diesis down"},
    /*U+E3AA*/[Code[`|\\\\`]]: {unicode: "", description: "11:19 large diesis up, (11:19L, apotome less 11:19M)"},
    /*U+E3AB*/[Code[`!//`]]: {unicode: "", description: "11:19 large diesis down"},
    /*U+E3AC*/[Code[`)|\\\\`]]: {unicode: "", description: "5:13 large diesis up, (5:13L, ~37L, apotome less 5:13M)"},
    /*U+E3AD*/[Code[`)!//`]]: {unicode: "", description: "5:13 large diesis down"},

    /*U+E3B0*/[Code[`)~||`]]: {unicode: "", description: "Sharp 23S-down"},
    /*U+E3B1*/[Code[`)~!!`]]: {unicode: "", description: "Flat 23S-up"},
    /*U+E3B2*/[Code[`~~||`]]: {unicode: "", description: "Sharp 49S-down"},
    /*U+E3B3*/[Code[`~~!!`]]: {unicode: "", description: "Flat 49S-up"},
    /*U+E3B4*/[Code[`)/||`]]: {unicode: "", description: "Sharp 7:19C-down"},
    /*U+E3B5*/[Code[`)\\!!`]]: {unicode: "", description: "Flat 7:19C-up"},
    /*U+E3B6*/[Code[`(||`]]: {unicode: "", description: "Sharp 19C-down"},
    /*U+E3B7*/[Code[`(!!`]]: {unicode: "", description: "Flat 19C-up"},
    /*U+E3B8*/[Code[`~||)`]]: {unicode: "", description: "Sharp 11:49C-down"},
    /*U+E3B9*/[Code[`~!!)`]]: {unicode: "", description: "Flat 11:49C-up"},
    /*U+E3BA*/[Code[`~||\\`]]: {unicode: "", description: "Sharp 143C-down"},
    /*U+E3BB*/[Code[`~!!/`]]: {unicode: "", description: "Flat 143C-up"},
    /*U+E3BC*/[Code[`)//||`]]: {unicode: "", description: "Sharp 17k-down"},
    /*U+E3BD*/[Code[`)\\\\!!`]]: {unicode: "", description: "Flat 17k-up"},
    /*U+E3BE*/[Code[`(||~`]]: {unicode: "", description: "Sharp 19s-down"},
    /*U+E3BF*/[Code[`(!!~`]]: {unicode: "", description: "Flat 19s-up"},
    /*U+E3C0*/[Code[`)|||`]]: {unicode: "", description: "Sharp 19s-up"},
    /*U+E3C1*/[Code[`)!!!`]]: {unicode: "", description: "Flat 19s-down"},
    /*U+E3C2*/[Code[`~|||`]]: {unicode: "", description: "Sharp 17k-up"},
    /*U+E3C3*/[Code[`~!!!`]]: {unicode: "", description: "Flat 17k-down"},
    /*U+E3C4*/[Code[`)~|||`]]: {unicode: "", description: "Sharp 143C-up"},
    /*U+E3C5*/[Code[`)~!!!`]]: {unicode: "", description: "Flat 143C-down"},
    /*U+E3C6*/[Code[`~~|||`]]: {unicode: "", description: "Sharp 11:49C-up"},
    /*U+E3C7*/[Code[`~~!!!`]]: {unicode: "", description: "Flat 11:49C-down"},
    /*U+E3C8*/[Code[`)|||~`]]: {unicode: "", description: "Sharp 19C-up"},
    /*U+E3C9*/[Code[`)!!!~`]]: {unicode: "", description: "Flat 19C-down"},
    /*U+E3CA*/[Code[`)|||)`]]: {unicode: "", description: "Sharp 7:19C-up"},
    /*U+E3CB*/[Code[`)!!!)`]]: {unicode: "", description: "Flat 7:19C-down"},
    /*U+E3CC*/[Code[`~|||)`]]: {unicode: "", description: "Sharp 49S-up"},
    /*U+E3CD*/[Code[`~!!!)`]]: {unicode: "", description: "Flat 49S-down"},
    /*U+E3CE*/[Code[`~|||\\`]]: {unicode: "", description: "Sharp 23S-up"},
    /*U+E3CF*/[Code[`~!!!/`]]: {unicode: "", description: "Flat 23S-down"},
    /*U+E3D0*/[Code[`)//|||`]]: {unicode: "", description: "Sharp 5:13M-up"},
    /*U+E3D1*/[Code[`)\\\\!!!`]]: {unicode: "", description: "Flat 5:13M-down"},
    /*U+E3D2*/[Code[`(|||~`]]: {unicode: "", description: "Sharp 11:19M-up"},
    /*U+E3D3*/[Code[`(!!!~`]]: {unicode: "", description: "Flat 11:19M-down"},
    /*U+E3D4*/[Code[`(/|||`]]: {unicode: "", description: "Sharp 49M-up"},
    /*U+E3D5*/[Code[`(\\!!!`]]: {unicode: "", description: "Flat 49M-down"},
    /*U+E3D6*/[Code[`)/|||\\`]]: {unicode: "", description: "Sharp 5:49M-up, (one and a half apotomes)"},
    /*U+E3D7*/[Code[`)\\!!!/`]]: {unicode: "", description: "Flat 5:49M-down"},
    /*U+E3D8*/[Code[`|||\\)`]]: {unicode: "", description: "Sharp 49L-up"},
    /*U+E3D9*/[Code[`!!!/)`]]: {unicode: "", description: "Flat 49L-down"},
    /*U+E3DA*/[Code[`|||\\\\`]]: {unicode: "", description: "Sharp 11:19L-up"},
    /*U+E3DB*/[Code[`!!!//`]]: {unicode: "", description: "Flat 11:19L-down"},
    /*U+E3DC*/[Code[`)|||\\\\`]]: {unicode: "", description: "Sharp 5:13L-up"},
    /*U+E3DD*/[Code[`)!!!//`]]: {unicode: "", description: "Flat 5:13L-down"},
    /*U+E3E0*/[Code[`)~X`]]: {unicode: "", description: "Double sharp 23S-down"},
    /*U+E3E1*/[Code[`)~Y`]]: {unicode: "", description: "Double flat 23S-up"},
    /*U+E3E2*/[Code[`~~X`]]: {unicode: "", description: "Double sharp 49S-down"},
    /*U+E3E3*/[Code[`~~Y`]]: {unicode: "", description: "Double flat 49S-up"},
    /*U+E3E4*/[Code[`)/X`]]: {unicode: "", description: "Double sharp 7:19C-down"},
    /*U+E3E5*/[Code[`)\\Y`]]: {unicode: "", description: "Double flat 7:19C-up"},
    /*U+E3E6*/[Code[`(X`]]: {unicode: "", description: "Double sharp 19C-down"},
    /*U+E3E7*/[Code[`(Y`]]: {unicode: "", description: "Double flat 19C-up"},
    /*U+E3E8*/[Code[`~X)`]]: {unicode: "", description: "Double sharp 11:49C-down"},
    /*U+E3E9*/[Code[`~Y)`]]: {unicode: "", description: "Double flat 11:49C-up"},
    /*U+E3EA*/[Code[`~X\\`]]: {unicode: "", description: "Double sharp 143C-down"},
    /*U+E3EB*/[Code[`~Y/`]]: {unicode: "", description: "Double flat 143C-up"},
    /*U+E3EC*/[Code[`)//X`]]: {unicode: "", description: "Double sharp 17k-down"},
    /*U+E3ED*/[Code[`)\\\\Y`]]: {unicode: "", description: "Double flat 17k-up"},
    /*U+E3EE*/[Code[`(X~`]]: {unicode: "", description: "Double sharp 19s-down"},
    /*U+E3EF*/[Code[`(Y~`]]: {unicode: "", description: "Double flat 19s-up"},

    /*U+E3F0*/[Code[`|`]]: {unicode: "", description: "Shaft up, (natural for use with only diacritics up)"},
    /*U+E3F1*/[Code[`!`]]: {unicode: "", description: "Shaft down, (natural for use with only diacritics down)"},
    /*U+E3F2*/[Code[`'`]]: {unicode: "", description: "Acute, 5 schisma up (5s), 2 cents up"},
    /*U+E3F3*/[Code[`.`]]: {unicode: "", description: "Grave, 5 schisma down, 2 cents down"},

    /*U+E3F4*/[Code[`\``]]: {unicode: "", description: "1 mina up, 5.7.13-schismina up, 0.42 cents up"},
    /*U+E3F5*/[Code[`,`]]: {unicode: "", description: "1 mina down, 5.7.13-schismina down, 0.42 cents down"},
    /*U+E3F6*/[Code[`\`\``]]: {unicode: "", description: "2 minas up, 65:77-schismina up, 0.83 cents up"},
    /*U+E3F7*/[Code[`,,`]]: {unicode: "", description: "2 minas down, 65:77-schismina down, 0.83 cents down"},

    /*U+E3F8*/[Code[`@1`]]: {unicode: "", description: "1 tina up, 7²⋅11⋅19/5-schismina up, 0.17 cents up"},
    /*U+E3F9*/[Code[`l1`]]: {unicode: "", description: "1 tina down, 7²⋅11⋅19/5-schismina down, 0.17 cents down"},
    /*U+E3FA*/[Code[`@2`]]: {unicode: "", description: "2 tinas up, 1/(7³⋅17)-schismina up, 0.30 cents up"},
    /*U+E3FB*/[Code[`l2`]]: {unicode: "", description: "2 tinas down, 1/(7³⋅17)-schismina down, 0.30 cents down"},
    /*U+E3FC*/[Code[`@3`]]: {unicode: "", description: "3 tinas up, 1 mina up, 1/(5⋅7⋅13)-schismina up, 0.42 cents up"},
    /*U+E3FD*/[Code[`l3`]]: {unicode: "", description: "3 tinas down, 1 mina down, 1/(5⋅7⋅13)-schismina down, 0.42 cents down"},
    /*U+E3FE*/[Code[`@4`]]: {unicode: "", description: "4 tinas up, 5²⋅11²/7-schismina up, 0.57 cents up"},
    /*U+E3FF*/[Code[`l4`]]: {unicode: "", description: "4 tinas down, 5²⋅11²/7-schismina down, 0.57 cents down"},
    /*U+E400*/[Code[`@5`]]: {unicode: "", description: "5 tinas up, 7⁴/25-schismina up, 0.72 cents up"},
    /*U+E401*/[Code[`l5`]]: {unicode: "", description: "5 tinas down, 7⁴/25-schismina down, 0.72 cents down"},
    /*U+E402*/[Code[`@6`]]: {unicode: "", description: "6 tinas up, 2 minas up, 65/77-schismina up, 0.83 cents up"},
    /*U+E403*/[Code[`l6`]]: {unicode: "", description: "6 tinas down, 2 minas down, 65/77-schismina down, 0.83 cents down"},
    /*U+E404*/[Code[`@7`]]: {unicode: "", description: "7 tinas up, 7/(5²⋅17)-schismina up, 1.02 cents up"},
    /*U+E405*/[Code[`l7`]]: {unicode: "", description: "7 tinas down, 7/(5²⋅17)-schismina down, 1.02 cents down"},
    /*U+E406*/[Code[`@8`]]: {unicode: "", description: "8 tinas up, 11⋅17/(5²⋅7)-schismina up, 1.14 cents up"},
    /*U+E407*/[Code[`l8`]]: {unicode: "", description: "8 tinas down, 11⋅17/(5²⋅7)-schismina down, 1.14 cents down"},
    /*U+E408*/[Code[`@9`]]: {unicode: "", description: "9 tinas up, 1/(7²⋅11)-schismina up, 1.26 cents up"},
    /*U+E409*/[Code[`l9`]]: {unicode: "", description: "9 tinas down, 1/(7²⋅11)-schismina down, 1.26 cents down"},
    /*U+E40A*/[Code[`@.`]]: {unicode: "", description: "fractional tina up, 77/(5⋅37)-schismina up, 0.08 cents up"},
    /*U+E40B*/[Code[`l.`]]: {unicode: "", description: "fractional tina down, 77/(5⋅37)-schismina down, 0.08 cents down"},
} as Record<Code, Symbol>

export {
    SAGITTAL_ACCIDENTAL_MAP,
}
