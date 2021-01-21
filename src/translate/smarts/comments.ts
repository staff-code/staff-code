import {Io, Word} from "@sagittal/general"
import {smarts} from "./globals"

const computeIsCommentingAndUpdateSmarts = (input: Io & Word): boolean => {
    const wasCommenting = smarts.commenting

    if (input.match(/^{/)) {
        if (input.match(/}$/)) {
            return true
        } else {
            smarts.commenting = true
        }
    } else if (input.match(/}$/)) {
        smarts.commenting = false
    }

    return wasCommenting || smarts.commenting
}

export {
    computeIsCommentingAndUpdateSmarts,
}
