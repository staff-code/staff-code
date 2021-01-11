import {css} from "@sagittal/general"

const REFERENCE_CSS = css`
  h3 {
    display: inline-block;  
    padding-right: 10px;
    margin: 0 0 5px 0;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 30px 0;
  }

  table tr:hover {
    background-color: #eeeeee;
  }

  summary {
    cursor: pointer;
    outline: none;
  }

  details {
    width: 100%;
    max-width: 600px;
    overflow-y: auto;
    border-top: 1px solid;
    margin-bottom: 10px;
  }

  details[open] {
    height: 520px;
  }

  .sc-about {
    float: right;
    font-weight: bold;
    position: relative;
  }

  .sc-about .sc-tooltip {
    display: none;
    background: white;
    border: solid 1px;
    font-weight: normal;
    font-size: 0.75em;
    padding: 0.5em;
    position: absolute;
    right: 0;
    width: 200px;
    text-align: right;
  }

  details[open] .sc-about:hover .sc-tooltip {
    display: block;
  }

  .sc-section-title div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sc-section-title a:first-child {
    text-decoration: inherit;
    color: inherit;
  }

  table {
    border-collapse: collapse;
    margin-bottom: 30px;
  }

  tr:nth-child(even) td:nth-child(1) {
    text-align: left;
    padding-left: 0.33em;
  }

  tr:nth-child(odd) td:nth-child(1) {
    text-align: right;
    padding-right: 1.33em;
  }

  /* glyph */

  td:nth-child(1) {
    padding: 2px 5px;
    font-family: Bravura Text BB;
    font-size: 1.875em; /* 3/4 * default 2.5 when size = 1 */
    width: 1em;
    text-align: center;
    line-height: 0.9; /* so that they don't massively increase height of the rows */
  }

  /* code */

  td:nth-child(2) {
    font-family: Roboto Mono;
    border: 1px solid;
  }

  /* mnemonic */

  td:nth-child(3) {
    font-family: Roboto;
    border: 1px solid;
  }
`

export {
    REFERENCE_CSS,
}
