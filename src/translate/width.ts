import {Word} from "@sagittal/general"
import {Code} from "../../bin"
import {computeUnicodeForCode} from "./codes"
import {computeUnicodeWidth, Octals} from "./smarts"

const computeCodeWordWidth = (codeWord: Code & Word): Octals => 
    computeUnicodeWidth(computeUnicodeForCode(codeWord))

export {
    computeCodeWordWidth
}
