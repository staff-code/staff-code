import {Name} from "@sagittal/general"
import {computeMnemonic} from "../../../bin/reference/mnemonic"
import {Unicode} from "../../../src"

describe("computeMnemonic", (): void => {
    it("creates a mnemonic from the glyph name, splitting words and bolding those which are used in the code             ", (): void => {
        const glyphName = "systemDividerLong" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        const expected = "<b>s</b><b>y</b>stem <b>d</b>i<b>v</b>ider <b>l</b>o<b>n</b>g"
        expect(actual).toBe(expected)
    })

    it("works for codes with single-char words", (): void => {
        const glyphName = "gClef" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        const expected = "<b>G</b> <b>c</b><b>l</b>ef"
        expect(actual).toBe(expected)
    })
})
