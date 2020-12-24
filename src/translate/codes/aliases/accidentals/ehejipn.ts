import {SMuFL_MAP} from "../../smufl"
import {Code, Symbol} from "../../types"

// See: https://w3c.github.io/smufl/gitbook/tables/extended-helmholtz-ellis-accidentals-just-intonation.html
// All EHEJIPN staffCodes start with a dot (full-stop). Unicodes are successive below.

const EHEJIPN_ACCIDENTAL_ALIASES_MAP: Record<Code, Symbol> = {
    [Code[`.bbv`]]: SMuFL_MAP[Code[`acdbflonardn`]],
    [Code[`.bv`]]: SMuFL_MAP[Code[`acflonardn`]],
    [Code[`.nv`]]: SMuFL_MAP[Code[`acntonardn`]],
    [Code[`.#v`]]: SMuFL_MAP[Code[`acshonardn`]],
    [Code[`.xv`]]: SMuFL_MAP[Code[`acdbshonardn`]],
    [Code[`.bb^`]]: SMuFL_MAP[Code[`acdbflonarup`]],
    [Code[`.b^`]]: SMuFL_MAP[Code[`acflonarup`]],
    [Code[`.n^`]]: SMuFL_MAP[Code[`acntonarup`]],
    [Code[`.#^`]]: SMuFL_MAP[Code[`acshonarup`]],
    [Code[`.x^`]]: SMuFL_MAP[Code[`acdbshonarup`]],
    [Code[`.bbvv`]]: SMuFL_MAP[Code[`acdbfltwardn`]],
    [Code[`.bvv`]]: SMuFL_MAP[Code[`acfltwardn`]],
    [Code[`.nvv`]]: SMuFL_MAP[Code[`acnttwardn`]],
    [Code[`.#vv`]]: SMuFL_MAP[Code[`acshtwardn`]],
    [Code[`.xvv`]]: SMuFL_MAP[Code[`acdbshtwardn`]],
    [Code[`.bb^^`]]: SMuFL_MAP[Code[`acdbfltwarup`]],
    [Code[`.b^^`]]: SMuFL_MAP[Code[`acfltwarup`]],
    [Code[`.n^^`]]: SMuFL_MAP[Code[`acnttwarup`]],
    [Code[`.#^^`]]: SMuFL_MAP[Code[`acshtwarup`]],
    [Code[`.x^^`]]: SMuFL_MAP[Code[`acdbshtwarup`]],
    [Code[`.bbvvv`]]: SMuFL_MAP[Code[`acdbflthardn`]],
    [Code[`.bvvv`]]: SMuFL_MAP[Code[`acflthardn`]],
    [Code[`.nvvv`]]: SMuFL_MAP[Code[`acntthardn`]],
    [Code[`.#vvv`]]: SMuFL_MAP[Code[`acshthardn`]],
    [Code[`.xvvv`]]: SMuFL_MAP[Code[`acdbshthardn`]],
    [Code[`.bb^^^`]]: SMuFL_MAP[Code[`acdbfltharup`]],
    [Code[`.b^^^`]]: SMuFL_MAP[Code[`acfltharup`]],
    [Code[`.n^^^`]]: SMuFL_MAP[Code[`acnttharup`]],
    [Code[`.#^^^`]]: SMuFL_MAP[Code[`acshtharup`]],
    [Code[`.x^^^`]]: SMuFL_MAP[Code[`acdbshtharup`]],
    [Code[`.L`]]: SMuFL_MAP[Code[`aclwonspcm`]],
    [Code[`.P`]]: SMuFL_MAP[Code[`acrsonspcm`]],
    [Code[`.LL`]]: SMuFL_MAP[Code[`aclwtwspcm`]],
    [Code[`.PP`]]: SMuFL_MAP[Code[`acrstwspcm`]],
    [Code[`.d`]]: SMuFL_MAP[Code[`aclwonunqr`]],
    [Code[`.t`]]: SMuFL_MAP[Code[`acrsonunqr`]],
    [Code[`.dd`]]: SMuFL_MAP[Code[`aclwontrqr`]],
    [Code[`.tt`]]: SMuFL_MAP[Code[`acrsontrqr`]],
    [Code[`.\\\\`]]: SMuFL_MAP[Code[`accmlw17sc`]],
    [Code[`.//`]]: SMuFL_MAP[Code[`accmrs17sc`]],
    [Code[`.\\`]]: SMuFL_MAP[Code[`accmlw19sc`]],
    [Code[`./`]]: SMuFL_MAP[Code[`accmrs19sc`]],
    [Code[`.\\|/`]]: SMuFL_MAP[Code[`accmlw23lm29lmcm`]],
    [Code[`./|\\`]]: SMuFL_MAP[Code[`accmrs23lm29lmcm`]],
    [Code[`.<|`]]: SMuFL_MAP[Code[`accmlw31sc`]],
    [Code[`.|>`]]: SMuFL_MAP[Code[`accmrs31sc`]],
    [Code[`.{`]]: SMuFL_MAP[Code[`accmopcrbr`]],
    [Code[`.}`]]: SMuFL_MAP[Code[`accmclcrbr`]],
    [Code[`.bbt`]]: SMuFL_MAP[Code[`acdbfleqtm`]],
    [Code[`.bt`]]: SMuFL_MAP[Code[`acfleqtm`]],
    [Code[`.nt`]]: SMuFL_MAP[Code[`acnteqtm`]],
    [Code[`.#t`]]: SMuFL_MAP[Code[`acsheqtm`]],
    [Code[`.xt`]]: SMuFL_MAP[Code[`acdbsheqtm`]],
    [Code[`.dt`]]: SMuFL_MAP[Code[`acqrfleqtm`]],
    [Code[`.+t`]]: SMuFL_MAP[Code[`acqrsheqtm`]],
    [Code[`.\\\\\\`]]: SMuFL_MAP[Code[`accmlw53lmcm`]],
    [Code[`.///`]]: SMuFL_MAP[Code[`accmrs53lmcm`]],
    [Code[`.~`]]: SMuFL_MAP[Code[`acentl`]],
    [Code[`.~~`]]: SMuFL_MAP[Code[`acenaleqto`]],
    [Code[`.=`]]: SMuFL_MAP[Code[`aceneq`]],
    [Code[`.\\||/`]]: SMuFL_MAP[Code[`accmlw29lmcm`]],
    [Code[`./||\\`]]: SMuFL_MAP[Code[`accmrs29lmcm`]],
    [Code[`.s|`]]: SMuFL_MAP[Code[`accmlw37qr`]],
    [Code[`.z|`]]: SMuFL_MAP[Code[`accmrs37qr`]],
    [Code[`.-`]]: SMuFL_MAP[Code[`accmlw41cm`]],
    [Code[`.+`]]: SMuFL_MAP[Code[`accmrs41cm`]],
    [Code[`.^`]]: SMuFL_MAP[Code[`accmlw43cm`]],
    [Code[`.v`]]: SMuFL_MAP[Code[`accmrs43cm`]],
    [Code[`.JJ`]]: SMuFL_MAP[Code[`accmlw47qr`]],
    [Code[`.77`]]: SMuFL_MAP[Code[`accmrs47qr`]],

    // For convenience of EHEJIPN users, conventional accidentals with dots at the start of their codes
    // See: https://w3c.github.io/smufl/gitbook/tables/standard-accidentals-12-edo.html
    [Code[`.bb`]]: SMuFL_MAP[Code[`acdbfl`]],
    [Code[`.b`]]: SMuFL_MAP[Code[`acfl`]],
    [Code[`.n`]]: SMuFL_MAP[Code[`acnt`]],
    [Code[`.#`]]: SMuFL_MAP[Code[`acsh`]],
    [Code[`.x`]]: SMuFL_MAP[Code[`acdbsh`]], // *
    [Code[`.<b`]]: SMuFL_MAP[Code[`acthqrtnflzm`]], // **
    [Code[`.>#`]]: SMuFL_MAP[Code[`acthqrtnshst`]],
} as Record<Code, Symbol>

// * Not the same as "x", the (Sagittal-compatible) large double-sharp.
// ** Not the same as "<b", the (Sagittal-compatible) sesquiflat.

export {
    EHEJIPN_ACCIDENTAL_ALIASES_MAP,
}
