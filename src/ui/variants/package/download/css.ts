import {css} from "@sagittal/general"

const DOWNLOAD_CSS = css`
  .sc-download {
    margin: 2px;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 0.75em;
  }

  .sc-download img {
    height: 1em;
    vertical-align: middle;
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
