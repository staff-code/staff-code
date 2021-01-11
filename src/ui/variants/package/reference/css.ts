import {css} from "@sagittal/general"

const REFERENCE_CSS = css`
  table tr:hover {
    background-color: #eeeeee;
  }

  summary {
    cursor: pointer;
    outline: none;
  }

  details {
    width: 550px;
    overflow-y: auto;
    border-top: 1px solid;
    margin-bottom: 10px;
  }

  details[open] {
    height: 450px;
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

  table {
    border-collapse: collapse;
  }
  
  td {
    border: 1px solid;
  }

  /* glyph */
  td:nth-child(1) {
    padding: 2px 5px;
    font-family: Bravura Text BB;
    width: 3em;
    text-align: center;
  }

  /* code */
  td:nth-child(2) {
    font-family: "Roboto Mono";
    padding: 2px;
  }

  /* glyph name */
  td:nth-child(3) {
    padding: 2px 5px;
  }
`

export {
    REFERENCE_CSS,
}
