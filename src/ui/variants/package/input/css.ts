import {Px} from "@sagittal/general"

// TODO: Can we have Roboto mono in the input field too.

const ABOUT_FORTY_CHARS_WIDE_PX: Px = 300 as Px
const ABOUT_THREE_LINES_HIGH_PX: Px = 50 as Px

const INPUT_CSS = `
    .sc-input {
      width: ${ABOUT_FORTY_CHARS_WIDE_PX}px;
      height: ${ABOUT_THREE_LINES_HIGH_PX}px;
    }
`

export {
    INPUT_CSS,
}
