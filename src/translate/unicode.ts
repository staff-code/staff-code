import {Symbol, Unicode} from "./codes"
import {EMPTY_UNICODE} from "./constants"
import {shouldNotBeDisplayed} from "./smarts"

const computeUnicode = ({unicode}: Symbol): Unicode =>
    shouldNotBeDisplayed(unicode) ? EMPTY_UNICODE : unicode

export {
    computeUnicode,
}
