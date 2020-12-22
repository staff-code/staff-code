import {Io} from "@sagittal/general"
import {smarts} from "./globals"

const isCommenting = (inputWord: Io): boolean => {
    const wasCommenting = smarts.commenting

    if (inputWord.match(/^{/)) {
        smarts.commenting = true
    } else if (inputWord.match(/}$/)) {
        smarts.commenting = false
    }

    return wasCommenting || smarts.commenting
}

export {
    isCommenting,
}
