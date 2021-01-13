import {Px} from "@sagittal/general"

const ABOUT_FORTY_CHARS_WIDE_PX: Px = 300 as Px
const ABOUT_THREE_LINES_HIGH_PX: Px = 50 as Px

const INPUT_CSS = `
  .sc-input {
    width: ${ABOUT_FORTY_CHARS_WIDE_PX}px;
    height: ${ABOUT_THREE_LINES_HIGH_PX}px;
    font-family: Roboto Mono;
  }
  
  .sc-input:focus {
    outline-color: #88bbff;
  }
`

export {
    INPUT_CSS,
}
