import {BLANK, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../../../../../bin"
import {setupCodeCell} from "../../../../../../../src/ui/variants/package/reference/section/code"
import {mockDom} from "../../../../../../helpers/mockDom"

const collectActualAliases = (codeCell: HTMLTableCellElement): Array<Code & Word> => {
    const aliases = [] as Array<Code & Word>
    codeCell.querySelectorAll("span")!.forEach((aliasSpan: HTMLSpanElement): void => {
        aliases.push(aliasSpan.textContent as Code & Word)
    })

    return aliases
}

describe("setupCodeCell", (): void => {
    beforeEach((): void => {
        mockDom()
    })

    it("sets the attribute which is read by the insertion handler to the code", (): void => {
        const codeCell = document.createElement("td")
        const unicode = "" as Unicode & Word
        const code = "ntqrup" as Code & Word

        setupCodeCell(codeCell, unicode, code)
        const actualInsertionCode = codeCell.getAttribute("sc-code")

        const expectedInsertionCode = "ntqrup"
        expect(actualInsertionCode).toBe(expectedInsertionCode)
    })

    it("when the code cell is indicated to be empty with the special ellipses code, i.e. it is not intended to insert anything into the display when clicked (such as placeholder rows eliding continuua of codes) sets its attribute — the one which is read by the insertion handler — to blank", (): void => {
        const codeCell = document.createElement("td")
        const unicode = "" as Unicode & Word
        const code = "..." as Code & Word

        setupCodeCell(codeCell, unicode, code)
        const actualInsertionCode = codeCell.getAttribute("sc-code")

        const expectedInsertionCode = BLANK
        expect(actualInsertionCode).toBe(expectedInsertionCode)
    })

    it("when the code is one of a couple special exceptions, this happens", (): void => {
        const codeCell = document.createElement("td")
        const unicode = "" as Unicode & Word
        const code = "nt4" as Code & Word

        setupCodeCell(codeCell, unicode, code)
        const actualAliases = collectActualAliases(codeCell)
        const actualInsertionCode = codeCell.getAttribute("sc-code")

        const expectedAliases = ["nt", "nt4"] as Array<Code & Word>
        expect(actualAliases).toEqual(expectedAliases)

        const expectedInsertionCode = "nt"
        expect(actualInsertionCode).toBe(expectedInsertionCode)
    })

    it("when the unicode is one of many with normal aliases, it lists its aliases in the best order (shortest to longest), doesn't include the original code itself, and would insert the first of the aliases (by saving it as the sc-code attribute)", (): void => {
        const codeCell = document.createElement("td")
        const unicode = "" as Unicode & Word
        const code = "acdbfl" as Code & Word

        setupCodeCell(codeCell, unicode, code)
        const actualAliases = collectActualAliases(codeCell)
        const actualInsertionCode = codeCell.getAttribute("sc-code")

        const expectedAliases = ["bb", ".bb", "dbfl"] as Array<Code & Word>
        expect(actualAliases).toEqual(expectedAliases)

        const expectedInsertionCode = "bb"
        expect(actualInsertionCode).toBe(expectedInsertionCode)
    })

    it("makes an exception for Sagittal sharps, sorting the ASCII version first even though it's longer than the Sagispeak alias", (): void => {
        const codeCell = document.createElement("td")
        const unicode = "" as Unicode & Word
        const code = "acsgsh" as Code & Word

        setupCodeCell(codeCell, unicode, code)
        const actualAliases = collectActualAliases(codeCell)
        const actualInsertionCode = codeCell.getAttribute("sc-code")

        const expectedAliases = ["/||\\", "shp"] as Array<Code & Word>
        expect(actualAliases).toEqual(expectedAliases)

        const expectedInsertionCode = "/||\\"
        expect(actualInsertionCode).toBe(expectedInsertionCode)
    })

    it("ensures that Sagittal comma name aliases come last, even if they are shorter than the Sagispeak aliases               ", (): void => {
        const codeCell = document.createElement("td")
        const unicode = "" as Unicode & Word
        const code = "acsg17cmup" as Code & Word

        setupCodeCell(codeCell, unicode, code)
        const actualAliases = collectActualAliases(codeCell)
        const actualInsertionCode = codeCell.getAttribute("sc-code")

        const expectedAliases = ["~|(", "sanai", "17C"] as Array<Code & Word>
        expect(actualAliases).toEqual(expectedAliases)

        const expectedInsertionCode = "~|("
        expect(actualInsertionCode).toBe(expectedInsertionCode)
    })

})
