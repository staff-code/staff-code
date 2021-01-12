import {css} from "@sagittal/general"

// TODO: I suppose it's too much to ask that only the triangle, and possibly the word "Reference",
//  Cause the Reference to expand and collapse? Not the word StaffCode and not the blank space in between.
//  Also, I'm pretty sure that as long as it's this way, you can't see the alt-text for StaffCode on mobile.

const REFERENCE_CSS = css`
  .sc-reference {
    padding: 20px 10px;
  }

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

  summary {
    position: sticky;
    top: 0;
    z-index: 9999;
    background: white;
    cursor: pointer;
    outline: none;
  }

  details {
    position: relative;
    width: 100%;
    max-width: 600px;
    overflow-y: auto;
    border-top: 1px solid;
    margin-bottom: 10px;
  }

  details[open] {
    height: 432px;
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

  /* title link to SMuFL */

  .sc-section-title a:nth-child(1) {
    text-decoration: inherit;
    color: inherit;
  }

  .sc-section-title:hover a:nth-child(1) h3 {
    text-decoration: underline;
    color: blue;
  }
  
  /* back to top link */

  .sc-section-title a:nth-child(2) {
    margin-top: 20px;
    min-width: 100px;
  }

  .sc-section-title h3 {
    margin-top: 20px;
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
    border: 1px solid;
    font-size: 13.333px;
    padding: 0 3px;
  }

  /* mnemonic cell */

  td:nth-child(3) {
    font-family: Roboto;
    border: 1px solid;
    font-size: 13.333px;
    padding: 0 3px;
  }
`

export {
    REFERENCE_CSS,
}
