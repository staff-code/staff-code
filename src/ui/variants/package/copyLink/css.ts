import {css} from "@sagittal/general"

const COPY_LINK_CSS = css`
  .sc-copy-link {
    margin: 2px;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 0.75em;
    border: none;
    color: white;
    background-color: #0366CC;
    padding: 3px 6px;
    border-radius: 3px;
    outline: none;
    position: relative;
  }
  
  .sc-copy-link:hover {
    background-color: #035FC8;
  }
  
  .sc-copy-link:active {
    background-color: #0366CC;
  }

  .sc-copy-link div {
    display: none;
  }
  
  .sc-copy-link:active div {
    display: block;
    position: absolute;
    background-color: white;
    border: 1px solid #bbbbbb;
    top: 35px;
    left: -9px;
    width: 80px;
    color: mediumvioletred;
  }
`

export {
    COPY_LINK_CSS,
}
