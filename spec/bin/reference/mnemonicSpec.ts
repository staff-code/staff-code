import {Name} from "@sagittal/general"
import {Mnemonic} from "../../../bin/reference"
import {computeMnemonic} from "../../../bin/reference/mnemonic"
import {Unicode} from "../../../src"

describe("computeMnemonic", (): void => {
    it("creates a mnemonic from the glyph name, splitting words and bolding those which are used in the code             ", (): void => {
        const glyphName = "systemDividerLong" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: sydvln
        const expected = "<b>s</b><b>y</b>stem <b>d</b>i<b>v</b>ider <b>l</b>o<b>n</b>g" as Mnemonic
        expect(actual).toBe(expected)
    })

    it("works for codes with single-char words", (): void => {
        const glyphName = "gClef" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: Gcl
        const expected = "<b>G</b> <b>c</b><b>l</b>ef" as Mnemonic
        expect(actual).toBe(expected)
    })

    it("rejoins multi-digit numbers", (): void => {
        const glyphName = "accSagittalFlat11LDown" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: acsgfl11Ldn
        const expected = "<b>a</b><b>c</b>c <b>s</b>a<b>g</b>ittal <b>f</b><b>l</b>at <b>1</b><b>1</b><b>L</b> <b>d</b>ow<b>n</b>" as Mnemonic
        expect(actual).toBe(expected)
    })

    it("rejoins three-digit numbers too, aye yaye yaye", (): void => {
        const glyphName = "accSagittal143CommaUp" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: acsg143cmup
        const expected = "<b>a</b><b>c</b>c <b>s</b>a<b>g</b>ittal <b>1</b><b>4</b><b>3</b> <b>c</b>o<b>m</b>ma <b>u</b><b>p</b>" as Mnemonic
        expect(actual).toBe(expected)
    })

    it("rejoins ordinal suffixes too, aye yaye yaye yaye yaye", (): void => {
        const glyphName = "note8thUp" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: nt8up
        const expected = "<b>n</b>o<b>t</b>e <b>8</b>th <b>u</b><b>p</b>" as Mnemonic
        expect(actual).toBe(expected)
    })

    it("ignores ordinal suffixes when bolding, aye yaye yaye yaye yaye yaye yaye", (): void => {
        const glyphName = "flag32ndDown" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: fl32dn
        const expected = "<b>f</b><b>l</b>ag <b>3</b><b>2</b>nd <b>d</b>ow<b>n</b>"
        expect(actual).toBe(expected)
    })

    it("handles other letter sequences in words that start with numbers, aye yaye yaye yaye yaye yaye yaye yaye yaye      ", (): void => {
        const glyphName = "gClef8vbCClef" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: Gcl8vbCcl
        const expected = "<b>G</b> <b>c</b><b>l</b>ef <b>8</b><b>v</b><b>b</b> <b>C</b> <b>c</b><b>l</b>ef"
        expect(actual).toBe(expected)
    })

    it("handles Sagittal comma names with 'V's well", (): void => {
        const glyphName = "accSagittal5v7KleismaUp" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: acsg5V7klup
        const expected = "<b>a</b><b>c</b>c <b>s</b>a<b>g</b>ittal <b>5</b><b>v</b><b>7</b> <b>k</b><b>l</b>eisma <b>u</b><b>p</b>"
        expect(actual).toBe(expected)
    })

    it("consistently spaces Sagittal comma names", (): void => {
        const glyphName = "accSagittalSharp25SDown" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: acsgsh25Sdn
        const expected = "<b>a</b><b>c</b>c <b>s</b>a<b>g</b>ittal <b>s</b><b>h</b>arp <b>2</b><b>5</b><b>S</b> <b>d</b>ow<b>n</b>"
        expect(actual).toBe(expected)
    })

    it("doesn't capitalize the V's in Sagittal comma names", (): void => {
        const glyphName = "accSagittalSharp5v19CUp" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: acsgsh5V19Cup
        const expected = "<b>a</b><b>c</b>c <b>s</b>a<b>g</b>ittal <b>s</b><b>h</b>arp <b>5</b><b>v</b><b>1</b><b>9</b><b>C</b> <b>u</b><b>p</b>"
        expect(actual).toBe(expected)
    })

    it("doesn't mess this one up", (): void => {
        const glyphName = "6stringTabClef" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: 6sttbcl
        const expected = "<b>6</b> <b>s</b><b>t</b>ring <b>t</b>a<b>b</b> <b>c</b><b>l</b>ef"
        expect(actual).toBe(expected)
    })
})
