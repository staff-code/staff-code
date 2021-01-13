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

  table tr.no-code {
    background-color: inherit;
  }

  table tr.no-code td {
    border: none;
  }

  .sc-reference-expander {
    cursor: pointer;
  }

  .sc-reference-wrapper {
    background: white;
    width: 100%;
    max-width: 600px;
    border-top: 1px solid #bbbbbb;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  .sc-reference {
    height: 0;
    overflow-y: hidden;
    box-sizing: border-box;
  }

  .sc-reference-banner {
    margin: 0 2px;
  }

  .sc-reference-wrapper.open {
    border: 1px solid #bbbbbb;
  }

  .sc-reference-wrapper.open .sc-reference {
    height: 432px;
    padding: 20px 10px;
    overflow-y: auto;
  }

  .sc-reference-wrapper.open .sc-reference-expander img {
    transform: rotate(90deg);
  }

  .sc-reference-expander img {
    vertical-align: top;
  }

  .sc-title {
    float: right;
    font-weight: bold;
    position: relative;
    cursor: default;
  }

  .sc-title .sc-about {
    display: none;
    background: white;
    border: 1px solid #bbbbbb;
    font-weight: normal;
    font-size: 0.75em;
    padding: 0.5em;
    position: absolute;
    right: 0;
    width: 200px;
    text-align: right;
  }

  .sc-reference-wrapper.open .sc-title:hover .sc-about {
    display: block;
  }

  .sc-section-intro {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sc-section-intro a {
    display: inline-block;
    white-space: nowrap;
    padding-left: 10px;
  }
  
  .sc-section-explanation {
    padding: 10px 0;
  }

  table {
    border-collapse: collapse;
    margin-bottom: 30px;
  }

  tr {
    cursor: pointer;
  }

  tr:nth-child(even) td:nth-child(1) {
    text-align: left;
    padding-left: 0.33em;
  }

  tr:nth-child(odd) td:nth-child(1) {
    text-align: right;
    padding-right: 1.33em;
  }

  /* glyph cell */

  td:nth-child(1) {
    padding: 2px 5px;
    font-family: Bravura Text BB;
    font-size: 1.6666em;
    width: 1em;
    text-align: center;
    line-height: 0.75; /* so that they don't massively increase height of the rows */
  }

  /* code cell */

  td:nth-child(2) {
    font-family: Roboto Mono;
    border: 1px solid #bbbbbb;
    font-size: 13.333px;
    padding: 0 3px;
  }

  /* mnemonic cell */

  td:nth-child(3) {
    border: 1px solid #bbbbbb;
    padding: 0 3px;
  }
`

export {
    REFERENCE_CSS,
}
