import {RecordKey, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../../../bin"
import {SMuFL_MAP} from "../../smufl"

// See: https://w3c.github.io/smufl/latest/tables/extended-helmholtz-ellis-accidentals-just-intonation.html
// All EHEJIPN staffCodes start with a dot (full-stop). Unicodes are successive below.

const EHEJIPN_ACCIDENTAL_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    ".bbv": SMuFL_MAP["acdbflonardn"],
    ".bv": SMuFL_MAP["acflonardn"],
    ".nv": SMuFL_MAP["acntonardn"],
    ".#v": SMuFL_MAP["acshonardn"],
    ".xv": SMuFL_MAP["acdbshonardn"],
    ".bb^": SMuFL_MAP["acdbflonarup"],
    ".b^": SMuFL_MAP["acflonarup"],
    ".n^": SMuFL_MAP["acntonarup"],
    ".#^": SMuFL_MAP["acshonarup"],
    ".x^": SMuFL_MAP["acdbshonarup"],
    ".bbvv": SMuFL_MAP["acdbfltwardn"],
    ".bvv": SMuFL_MAP["acfltwardn"],
    ".nvv": SMuFL_MAP["acnttwardn"],
    ".#vv": SMuFL_MAP["acshtwardn"],
    ".xvv": SMuFL_MAP["acdbshtwardn"],
    ".bb^^": SMuFL_MAP["acdbfltwarup"],
    ".b^^": SMuFL_MAP["acfltwarup"],
    ".n^^": SMuFL_MAP["acnttwarup"],
    ".#^^": SMuFL_MAP["acshtwarup"],
    ".x^^": SMuFL_MAP["acdbshtwarup"],
    ".bbvvv": SMuFL_MAP["acdbflthardn"],
    ".bvvv": SMuFL_MAP["acflthardn"],
    ".nvvv": SMuFL_MAP["acntthardn"],
    ".#vvv": SMuFL_MAP["acshthardn"],
    ".xvvv": SMuFL_MAP["acdbshthardn"],
    ".bb^^^": SMuFL_MAP["acdbfltharup"],
    ".b^^^": SMuFL_MAP["acfltharup"],
    ".n^^^": SMuFL_MAP["acnttharup"],
    ".#^^^": SMuFL_MAP["acshtharup"],
    ".x^^^": SMuFL_MAP["acdbshtharup"],
    ".L": SMuFL_MAP["aclronspcm"],
    ".P": SMuFL_MAP["acrsonspcm"],
    ".LL": SMuFL_MAP["aclrtwspcm"],
    ".PP": SMuFL_MAP["acrstwspcm"],
    ".d": SMuFL_MAP["aclronunqr"],
    ".t": SMuFL_MAP["acrsonunqr"],
    ".d|": SMuFL_MAP["aclrontrqr"],
    ".t|": SMuFL_MAP["acrsontrqr"],
    ".\\\\": SMuFL_MAP["accmlr17sc"],
    ".//": SMuFL_MAP["accmrs17sc"],
    ".\\": SMuFL_MAP["accmlr19sc"],
    "./": SMuFL_MAP["accmrs19sc"],
    ".|v": SMuFL_MAP["accmlr23lmcm"],
    ".|^": SMuFL_MAP["accmrs23lmcm"],
    ".<|": SMuFL_MAP["accmlr31sc"],
    ".|>": SMuFL_MAP["accmrs31sc"],
    ".{": SMuFL_MAP["accmopcrbr"],
    ".}": SMuFL_MAP["accmclcrbr"],
    ".bbT": SMuFL_MAP["acdbfleqtm"],
    ".bT": SMuFL_MAP["acfleqtm"],
    ".nT": SMuFL_MAP["acnteqtm"],
    ".#T": SMuFL_MAP["acsheqtm"],
    ".xT": SMuFL_MAP["acdbsheqtm"],
    ".dT": SMuFL_MAP["acqrfleqtm"],
    ".tT": SMuFL_MAP["acqrsheqtm"],
    ".\\\\\\": SMuFL_MAP["accmlr53lmcm"],
    ".///": SMuFL_MAP["accmrs53lmcm"],
    ".~": SMuFL_MAP["acentl"],
    ".~~": SMuFL_MAP["acenaleqto"],
    ".=": SMuFL_MAP["aceneq"],
    ".|v|": SMuFL_MAP["accmlr29lmcm"],
    ".|^|": SMuFL_MAP["accmrs29lmcm"],
    ".s|": SMuFL_MAP["accmlr37qr"],
    ".z|": SMuFL_MAP["accmrs37qr"],
    ".-": SMuFL_MAP["accmlr41cm"],
    ".+": SMuFL_MAP["accmrs41cm"],
    ".v": SMuFL_MAP["accmlr43cm"],
    ".^": SMuFL_MAP["accmrs43cm"],
    ".JJ": SMuFL_MAP["accmlr47qr"],
    ".77": SMuFL_MAP["accmrs47qr"],

    // For convenience of EHEJIPN users, conventional accidentals with dots at the start of their codes
    // See: https://w3c.github.io/smufl/latest/tables/standard-accidentals-12-edo.html
    ".bb": SMuFL_MAP["acdbfl"],
    ".b": SMuFL_MAP["acfl"],
    ".n": SMuFL_MAP["acnt"],
    ".#": SMuFL_MAP["acsh"],
    ".x": SMuFL_MAP["acdbsh"], // *
    ".db": SMuFL_MAP["acthqrtnflzm"], // **
    ".t#": SMuFL_MAP["acthqrtnshst"],
} as Record<Code & Word, Unicode & Word>

// * Not the same as "x", the (Sagittal-compatible) large double-sharp.
// ** Not the same as "db", the (Sagittal-compatible) sesquiflat.

export {
    EHEJIPN_ACCIDENTAL_ALIASES_MAP,
}
