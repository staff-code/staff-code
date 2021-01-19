import {Em, formatEm, Multiplier} from "@sagittal/general"
import {computeFontSize} from "../font"
import {components} from "../globals"
import {setStaffCodeCookie} from "../initial"
import {Initial} from "../types"

const handleSizeSpinnerChange = (event: Event): void => {
    const target = event.target! as HTMLInputElement
    const size = parseFloat(target.value) as Multiplier<Em>
    components.display.style.fontSize = `${formatEm(computeFontSize(size))}`
    setStaffCodeCookie(Initial.SIZE, JSON.stringify(size))
}

const handleLineSpinnerChange = (event: Event): void => {
    const target = event.target! as HTMLInputElement
    const line = target.value
    components.display.style.lineHeight = line
    setStaffCodeCookie(Initial.LINE, line)
}

export {
    handleSizeSpinnerChange,
    handleLineSpinnerChange,
}
