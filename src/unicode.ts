import {shouldNotBeDisplayed} from "./smarts"
import {EMPTY_UNICODE, Symbol, Unicode} from "./symbols"

const computeUnicode = ({unicode}: Symbol): Unicode =>
    shouldNotBeDisplayed(unicode) ? EMPTY_UNICODE : unicode

export {
    computeUnicode,
}
