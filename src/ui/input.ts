const ABOUT_FORTY_CHARS_WIDE_PX = 300
const ABOUT_THIRTEEN_LINES_HIGH_PX = 200

const setupInput = (input: HTMLTextAreaElement): void => {
    input.style.width = `${ABOUT_FORTY_CHARS_WIDE_PX}px`
    input.style.height = `${ABOUT_THIRTEEN_LINES_HIGH_PX}px`
}

export {
    setupInput,
}
