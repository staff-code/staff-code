import {Em, Multiplier, Px} from "@sagittal/general"
import {computeFontSize} from "../../font"
import {getSize} from "../spinners"

const emToPx = (em: Em): Px =>
    em * 16 as Px

const computeFontSizeForTextToSvg = (): Px =>
    emToPx(computeFontSize(getSize() as Multiplier<Em>))

export {
    computeFontSizeForTextToSvg,
}
