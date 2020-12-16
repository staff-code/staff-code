import {INITIAL_SMARTS} from "./constants"
import {Smarts} from "./types"

const smarts: Smarts = JSON.parse(JSON.stringify(INITIAL_SMARTS))

export {
    smarts,
}
