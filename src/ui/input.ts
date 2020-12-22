const ABOUT_FORTY_CHARS_WIDE_PX = 300
const ABOUT_THIRTY_LINES_HIGH_PX = 250

const setupInput = (input: HTMLTextAreaElement): void => {
    input.style.width = `${ABOUT_FORTY_CHARS_WIDE_PX}px`
    input.style.height = `${ABOUT_THIRTY_LINES_HIGH_PX}px`
    // TODO: FEATURE IMPROVE, BLOCKED: MOBILE RESIZABILITY OF INPUT FIELD
    //  Just waiting to see if Dave thinks this is important
}

export {
    setupInput,
}
