import {BLANK, Filename, Html, Sentence} from "@sagittal/general"
import * as fs from "fs"
import sanitize from "sanitize-filename"
import {Unicode} from "../../../../../../../src"
import {components} from "../../../../../../../src/ui/variants/package/globals"
import {computeSvgStringFromInput} from "../../../../../../../src/ui/variants/package/panel/download/vectorize"
import {mockDom, unmockDom} from "../../../../../../helpers/mockDom"
import CustomReporterResult = jasmine.CustomReporterResult

const thisJasmine = jasmine as unknown as {currentTest: jasmine.CustomReporterResult}

const SVG_VISUAL_TEST_DIR = "spec/visual/svg"

describe("computeSvgStringFromInput", (): void => {
    // This is the material you might want if you need to add more tests.
    /*
    const SVG_VISUAL_TEST_INDEX = `${SVG_VISUAL_TEST_DIR}/index.html`

    beforeAll((): void => {
        fs.rmdirSync(SVG_VISUAL_TEST_DIR, {recursive: true})
        fs.mkdirSync(SVG_VISUAL_TEST_DIR)
        fs.writeFileSync(SVG_VISUAL_TEST_INDEX, "<body>" + NEWLINE)
    })

    afterAll((): void => {
        fs.appendFileSync(SVG_VISUAL_TEST_INDEX, "</body>" + NEWLINE)
    })

    const saveVisualRegressionSpecSvg = (svgString: Html, currentTest: CustomReporterResult): void => {
        const testName = currentTest.fullName.replace(/computeSvgStringFromInput /, BLANK)
        let fileName = sanitize(testName).replace(/ /g, "_")
        fs.writeFileSync(`${SVG_VISUAL_TEST_DIR}/${fileName}.svg`, svgString)
        fs.appendFileSync(SVG_VISUAL_TEST_INDEX, `<div>${testName}</div>` + NEWLINE)
        fs.appendFileSync(SVG_VISUAL_TEST_INDEX, `<img src="./${fileName}.svg"/>` + NEWLINE)
    }
    */

    const readSnapshot = (currentTest: CustomReporterResult): Html => {
        const testName = currentTest.fullName.replace(/computeSvgStringFromInput /, BLANK)
        let fileName = sanitize(testName).replace(/ /g, "_")

        return fs
            .readFileSync(`${SVG_VISUAL_TEST_DIR}/${fileName}.svg` as Filename, {encoding: "utf8"})
            .replace(/\r/g, BLANK) as Html
    }

    it("works for multiline StaffCodes", async (): Promise<void> => {
        const unicodeSentence = "   　\n　" as Unicode & Sentence

        const actual = await computeSvgStringFromInput(unicodeSentence)

        const expected = readSnapshot(thisJasmine.currentTest)
        expect(actual).toBe(expected)
    })

    it("leger left overhang cut off unless you add manual advance at the start like this", async (): Promise<void> => {
        const unicodeSentence = " 　" as Unicode & Sentence

        const actual = await computeSvgStringFromInput(unicodeSentence)

        const expected = readSnapshot(thisJasmine.currentTest)
        expect(actual).toBe(expected)
    })

    // TODO: FEATURE IMPROVE, READY TO GO: BETTER SOLUTION THAN PADDING
    //  For the same reason that CSS styling wasn't working elsewhere, that I posted about on the forum recently
    //  Padding should never have been the proper solution. You should instead have it shift everybody down by that
    //  And over by that, and add to the height and width by 2x that
    it("works for a double barline at the end", async (): Promise<void> => {
        const unicodeSentence = "　    " as Unicode & Sentence

        const actual = await computeSvgStringFromInput(unicodeSentence)

        const expected = readSnapshot(thisJasmine.currentTest)
        expect(actual).toBe(expected)
    })

    it("for a small line height, it may look a little weird", async (): Promise<void> => {
        mockDom()
        components.lineSpinner = document.createElement("input")
        components.lineSpinner.value = "1"
        unmockDom()

        const unicodeSentence = "   　\n　" as Unicode & Sentence

        const actual = await computeSvgStringFromInput(unicodeSentence)

        const expected = readSnapshot(thisJasmine.currentTest)
        expect(actual).toBe(expected)
    })
})
