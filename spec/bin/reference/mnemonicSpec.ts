import {Name, Sentence} from "@sagittal/general"
import {glyphNames} from "../../../bin/globals"
import {Mnemonic} from "../../../bin/reference"
import {computeMnemonic} from "../../../bin/reference/mnemonic"
import {Unicode} from "../../../src"

describe("computeMnemonic", (): void => {
    it("creates a mnemonic from the glyph name, splitting words and bolding those which are used in the code             ", (): void => {
        const glyphName = "systemDividerLong" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        const expected = "<b>s</b><b>y</b>stem <b>d</b>i<b>v</b>ider <b>l</b>o<b>n</b>g" as Mnemonic & Sentence
        expect(actual).toBe(expected)
    })

    it("works for codes with single-char words", (): void => {
        const glyphName = "gClef" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        const expected = "<b>G</b> <b>c</b><b>l</b>ef" as Mnemonic & Sentence
        expect(actual).toBe(expected)
    })

    it("rejoins multi-digit numbers", (): void => {
        const glyphName = "accSagittalFlat11LDown" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        const expected = "<b>a</b><b>c</b>c <b>s</b>a<b>g</b>ittal <b>f</b><b>l</b>at <b>1</b><b>1</b> <b>L</b> <b>d</b>ow<b>n</b>" as Mnemonic & Sentence
        expect(actual).toBe(expected)
    })
})
