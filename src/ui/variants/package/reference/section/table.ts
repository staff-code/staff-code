import {ReferenceRow} from "../../../../../../bin"
import {setupCodeCell} from "./code"
import {EMPTY_CODE_CELL} from "./constants"
import {EXCLUDED_CODES} from "./exceptions"

const buildSectionTable = (sectionData: ReferenceRow[]): HTMLTableElement => {
    const table = document.createElement("table")

    sectionData.forEach(([unicode, code, mnemonic]: ReferenceRow): void => {
        if (EXCLUDED_CODES[code]) return

        const row = table.insertRow()

        // TODO, FEATURE IMPROVE, BLOCKED: FONT REVISION; EMOJI FIX
        //  Let's YOLO and put all the ligatures in the [i]other [/i]private use areas
        //  U+F0000..U+FFFFD and U+100000..U+10FFFD which have 65,534 code points each.
        //  Hell, let's just generate 31 CSP ligatures for every damn symbol in the font.
        //  Those two private use areas give enough room to do that for up to 65534*2/31 = 4228 symbols.
        //  (Yes, strangely, 65534 happens to be an exact multiple of 31).
        //  - Blocked because maybe Dave is going to handle the relocation of these? Or maybe it's part of scripting?
        //  Yeah, right, that's it. I'll still do it, but it will part of the FontForge phase

        const unicodeCell = row.insertCell()
        unicodeCell.innerHTML = unicode
        row.appendChild(unicodeCell)

        const codeCell = row.insertCell()
        setupCodeCell(codeCell, unicode, code)
        if (code === EMPTY_CODE_CELL) row.classList.add("no-code")
        row.appendChild(codeCell)

        const mnemonicCell = row.insertCell()
        mnemonicCell.innerHTML = mnemonic
        row.appendChild(mnemonicCell)
    })

    return table
}

export {
    buildSectionTable,
}
