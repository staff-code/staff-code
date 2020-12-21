const ABOUT_FORTY_CHARS_WIDE_PX = 200
const PHI = (1 + Math.sqrt(5)) / 2
const ABOUT_THIRTY_LINES_HIGH_PX = ABOUT_FORTY_CHARS_WIDE_PX * PHI

const setupInput = (input: HTMLTextAreaElement): void => {
    input.style.width = `${ABOUT_FORTY_CHARS_WIDE_PX}px`
    input.style.height = `${ABOUT_THIRTY_LINES_HIGH_PX}px`
}

export {
    setupInput,
}
