import {INITIAL_SMARTS} from "./constants"
import {smarts} from "./globals"

const resetSmarts = () => {
    // @ts-ignore
    Object.entries(INITIAL_SMARTS).forEach(([key, value]: [string, string]): void => smarts[key] = value)
}

export {
    resetSmarts,
}
