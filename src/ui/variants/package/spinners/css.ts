import {css} from "@sagittal/general"

const SPINNER_CSS = css`
  .sc-spinner {
    display: inline-block;
    margin-right: 2px;
  }

  .sc-spinner label {
    width: 2em;
    display: inline-block;
    font-family: sans-serif;
    font-size: 0.75em;
  }

  .sc-spinner input {
    width: 3em;
  }
  
  .sc-spinner input:focus {
    outline-color: #88bbff;
  }
`

export {
    SPINNER_CSS,
}
