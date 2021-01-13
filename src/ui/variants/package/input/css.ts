import {Px} from "@sagittal/general"

// TODO, CLEAN, READY TO GO: SHOULD PROBABLY HAVE CSS VARS FOR BORDER COLOR, ETC.
//  But if you use them widely, then this css` trick is not going to work anymore, as it has failed here, due to ${}'ing

const ABOUT_FORTY_FIVE_CHARS_WIDE_PX: Px = 340 as Px
const ABOUT_THREE_LINES_HIGH_PX: Px = 50 as Px

const INPUT_CSS = `
  .sc-input {
    width: ${ABOUT_FORTY_FIVE_CHARS_WIDE_PX}px;
    height: ${ABOUT_THREE_LINES_HIGH_PX}px;
    font-family: Roboto Mono;
    border: 1px solid #bbbbbb;
    border-radius: 3px;
    margin-bottom: 5px;
  }
  
  .sc-input:focus {
    outline-color: #88bbff;
  }
`

export {
    INPUT_CSS,
}
