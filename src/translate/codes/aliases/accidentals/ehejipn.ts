import {RecordKey} from "@sagittal/general"
import {SMuFL_MAP} from "../../smufl"
import {Codeword, Symbol} from "../../types"

// See: https://w3c.github.io/smufl/gitbook/tables/extended-helmholtz-ellis-accidentals-just-intonation.html
// All EHEJIPN staffCodes start with a dot (full-stop). Unicodes are successive below.

const EHEJIPN_ACCIDENTAL_ALIASES_MAP: Record<RecordKey<Codeword>, Symbol> = {
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
    ".L": SMuFL_MAP["aclwonspcm"],
    ".P": SMuFL_MAP["acrsonspcm"],
    ".LL": SMuFL_MAP["aclwtwspcm"],
    ".PP": SMuFL_MAP["acrstwspcm"],
    ".d": SMuFL_MAP["aclwonunqr"],
    ".t": SMuFL_MAP["acrsonunqr"],
    ".dd": SMuFL_MAP["aclwontrqr"],
    ".tt": SMuFL_MAP["acrsontrqr"],
    ".\\\\": SMuFL_MAP["accmlw17sc"],
    ".//": SMuFL_MAP["accmrs17sc"],
    ".\\": SMuFL_MAP["accmlw19sc"],
    "./": SMuFL_MAP["accmrs19sc"],
    ".\\|/": SMuFL_MAP["accmlw23lm29lmcm"],
    "./|\\": SMuFL_MAP["accmrs23lm29lmcm"],
    ".<|": SMuFL_MAP["accmlw31sc"],
    ".|>": SMuFL_MAP["accmrs31sc"],
    ".{": SMuFL_MAP["accmopcrbr"],
    ".}": SMuFL_MAP["accmclcrbr"],
    ".bbt": SMuFL_MAP["acdbfleqtm"],
    ".bt": SMuFL_MAP["acfleqtm"],
    ".nt": SMuFL_MAP["acnteqtm"],
    ".#t": SMuFL_MAP["acsheqtm"],
    ".xt": SMuFL_MAP["acdbsheqtm"],
    ".dt": SMuFL_MAP["acqrfleqtm"],
    ".+t": SMuFL_MAP["acqrsheqtm"],
    ".\\\\\\": SMuFL_MAP["accmlw53lmcm"],
    ".///": SMuFL_MAP["accmrs53lmcm"],
    ".~": SMuFL_MAP["acentl"],
    ".~~": SMuFL_MAP["acenaleqto"],
    ".=": SMuFL_MAP["aceneq"],
    ".\\||/": SMuFL_MAP["accmlw29lmcm"],
    "./||\\": SMuFL_MAP["accmrs29lmcm"],
    ".s|": SMuFL_MAP["accmlw37qr"],
    ".z|": SMuFL_MAP["accmrs37qr"],
    ".-": SMuFL_MAP["accmlw41cm"],
    ".+": SMuFL_MAP["accmrs41cm"],
    ".^": SMuFL_MAP["accmlw43cm"],
    ".v": SMuFL_MAP["accmrs43cm"],
    ".JJ": SMuFL_MAP["accmlw47qr"],
    ".77": SMuFL_MAP["accmrs47qr"],

    // For convenience of EHEJIPN users, conventional accidentals with dots at the start of their codes
    // See: https://w3c.github.io/smufl/gitbook/tables/standard-accidentals-12-edo.html
    ".bb": SMuFL_MAP["acdbfl"],
    ".b": SMuFL_MAP["acfl"],
    ".n": SMuFL_MAP["acnt"],
    ".#": SMuFL_MAP["acsh"],
    ".x": SMuFL_MAP["acdbsh"], // *
    ".<b": SMuFL_MAP["acthqrtnflzm"], // **
    ".>#": SMuFL_MAP["acthqrtnshst"],
} as Record<Codeword, Symbol>

// * Not the same as "x", the (Sagittal-compatible) large double-sharp.
// ** Not the same as "<b", the (Sagittal-compatible) sesquiflat.

export {
    EHEJIPN_ACCIDENTAL_ALIASES_MAP,
}
