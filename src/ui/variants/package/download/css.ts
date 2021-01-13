import {css} from "@sagittal/general"

const DOWNLOAD_CSS = css`
  .sc-download {
    margin: 2px;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 0.75em;
    border: none;
    color: white;
    background-color: #2EA44F;
    padding: 4px 6px 2px 6px;
    border-radius: 3px;
    outline: none;
  }
  
  .sc-download:hover {
    background-color: #2C974B;
  }
  
  .sc-download:active {
    background-color: #2EA44F;
  }
  
  .sc-download svg {
    height: 1em;
    vertical-align: middle;
    margin-right: -3px;
  }

  .sc-svg {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  .sc-cloned-svg {
    position: relative;
    top: 0;
    left: 0;
  }
`

export {
    DOWNLOAD_CSS,
}
