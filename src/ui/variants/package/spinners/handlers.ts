import {DEFAULT_BLOCK_MODE_FONT_SIZE} from "../../../display"
import {components} from "../globals"
import {setStaffCodeCookie} from "../initial"
import {Initial} from "../types"

const handleSizeSpinnerChange = (event: Event): void => {
    const target = event.target! as HTMLInputElement
    const size = parseFloat(target.value)
    components.display.style.fontSize = `${size * DEFAULT_BLOCK_MODE_FONT_SIZE}em`
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
