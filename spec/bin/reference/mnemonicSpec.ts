import {Name} from "@sagittal/general"
import {Mnemonic} from "../../../bin/reference"
import {computeMnemonic} from "../../../bin/reference/mnemonic"
import {Unicode} from "../../../src"

describe("computeMnemonic", (): void => {
    it("creates a mnemonic from the glyph name, splitting words and bolding those which are used in the code             ", (): void => {
        const glyphName = "systemDividerLong" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // TODO: try underline instead of bold

        // Code: sydvln
        const expected = "<u>s</u><u>y</u>stem <u>d</u>i<u>v</u>ider <u>l</u>o<u>n</u>g" as Mnemonic
        expect(actual).toBe(expected)
    })

    it("works for codes with single-char words", (): void => {
        const glyphName = "gClef" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: Gcl
        const expected = "<u>G</u> <u>c</u><u>l</u>ef" as Mnemonic
        expect(actual).toBe(expected)
    })

    it("rejoins multi-digit numbers", (): void => {
        const glyphName = "accSagittalFlat11LDown" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: acsgfl11Ldn
        const expected = "<u>a</u><u>c</u>c <u>s</u>a<u>g</u>ittal <u>f</u><u>l</u>at <u>1</u><u>1</u><u>L</u> <u>d</u>ow<u>n</u>" as Mnemonic
        expect(actual).toBe(expected)
    })

    it("rejoins three-digit numbers too, aye yaye yaye", (): void => {
        const glyphName = "accSagittal143CommaUp" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: acsg143cmup
        const expected = "<u>a</u><u>c</u>c <u>s</u>a<u>g</u>ittal <u>1</u><u>4</u><u>3</u> <u>c</u>o<u>m</u>ma <u>u</u><u>p</u>" as Mnemonic
        expect(actual).toBe(expected)
    })

    it("rejoins ordinal suffixes too, aye yaye yaye yaye yaye", (): void => {
        const glyphName = "note8thUp" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: nt8up
        const expected = "<u>n</u>o<u>t</u>e <u>8</u>th <u>u</u><u>p</u>" as Mnemonic
        expect(actual).toBe(expected)
    })

    it("ignores ordinal suffixes when bolding, aye yaye yaye yaye yaye yaye yaye", (): void => {
        const glyphName = "flag32ndDown" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: fl32dn
        const expected = "<u>f</u><u>l</u>ag <u>3</u><u>2</u>nd <u>d</u>ow<u>n</u>"
        expect(actual).toBe(expected)
    })

    it("handles other letter sequences in words that start with numbers, aye yaye yaye yaye yaye yaye yaye yaye yaye      ", (): void => {
        const glyphName = "gClef8vbCClef" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: Gcl8vbCcl
        const expected = "<u>G</u> <u>c</u><u>l</u>ef <u>8</u><u>v</u><u>b</u> <u>C</u> <u>c</u><u>l</u>ef"
        expect(actual).toBe(expected)
    })

    it("handles Sagittal comma names with 'V's well", (): void => {
        const glyphName = "accSagittal5v7KleismaUp" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: acsg5V7klup
        const expected = "<u>a</u><u>c</u>c <u>s</u>a<u>g</u>ittal <u>5</u><u>v</u><u>7</u> <u>k</u><u>l</u>eisma <u>u</u><u>p</u>"
        expect(actual).toBe(expected)
    })

    it("consistently spaces Sagittal comma names", (): void => {
        const glyphName = "accSagittalSharp25SDown" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: acsgsh25Sdn
        const expected = "<u>a</u><u>c</u>c <u>s</u>a<u>g</u>ittal <u>s</u><u>h</u>arp <u>2</u><u>5</u><u>S</u> <u>d</u>ow<u>n</u>"
        expect(actual).toBe(expected)
    })

    it("doesn't capitalize the V's in Sagittal comma names", (): void => {
        const glyphName = "accSagittalSharp5v19CUp" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: acsgsh5V19Cup
        const expected = "<u>a</u><u>c</u>c <u>s</u>a<u>g</u>ittal <u>s</u><u>h</u>arp <u>5</u><u>v</u><u>1</u><u>9</u><u>C</u> <u>u</u><u>p</u>"
        expect(actual).toBe(expected)
    })

    it("doesn't mess this one up", (): void => {
        const glyphName = "6stringTabClef" as Name<Unicode>

        const actual = computeMnemonic(glyphName)

        // Code: 6sttbcl
        const expected = "<u>6</u> <u>s</u><u>t</u>ring <u>t</u>a<u>b</u> <u>c</u><u>l</u>ef"
        expect(actual).toBe(expected)
    })
})
