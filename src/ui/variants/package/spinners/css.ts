import {css} from "@sagittal/general"

const SPINNER_CSS = css`
  .sc-spinner {
    display: inline-block;
    margin-right: 5px;
  }

  .sc-spinner label {
    width: 2em;
    display: inline-block;
    font-family: sans-serif;
    font-size: 0.75em;
  }

  .sc-spinner input {
    width: 3em;
    border: 1px solid #bbbbbb;
    border-radius: 3px;
    padding: 2px;
  }

  .sc-spinner input:focus {
    outline-color: #88bbff;
  }
`

export {
    SPINNER_CSS,
}
