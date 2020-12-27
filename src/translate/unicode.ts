import {Word} from "@sagittal/general"
import {Symbol, Unicode} from "./codes"
import {EMPTY_UNICODE} from "./constants"
import {shouldNotBeDisplayed} from "./smarts"

const computeUnicode = ({unicode}: Symbol): Unicode & Word =>
    shouldNotBeDisplayed(unicode) ?
        EMPTY_UNICODE as Unicode & Word :
        unicode

export {
    computeUnicode,
}
