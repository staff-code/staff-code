// tslint:disable comment-format max-line-length

import {BLANK, Filename, Html, NEWLINE, Sentence} from "@sagittal/general"
import * as fs from "fs"
import sanitize from "sanitize-filename"
import {Unicode} from "../../../../../../../src/translate"
import {components} from "../../../../../../../src/ui/variants/package/globals"
import {computeSvgStringFromInput} from "../../../../../../../src/ui/variants/package/panel/download/vectorize"
import {mockDom, unmockDom} from "../../../../../../helpers/mockDom"
import CustomReporterResult = jasmine.CustomReporterResult

const UPDATE = false

const thisJasmine = jasmine as unknown as {currentTest: jasmine.CustomReporterResult}

const SVG_VISUAL_TEST_DIR = "spec/visual/svg"
const SVG_VISUAL_TEST_INDEX = `${SVG_VISUAL_TEST_DIR}/index.html`

const computeSnapshotTestName = (currentTest: CustomReporterResult): string =>
    sanitize(currentTest.fullName.replace(/computeSvgStringFromInput /, BLANK))

const computeSnapshotFileName = (snapshotTestName: string): Filename =>
    snapshotTestName.replace(/ /g, "_") as Filename

const updateSnapshot = (svgString: Html, currentTest: CustomReporterResult): void => {
    const snapshotTestName = computeSnapshotTestName(currentTest)
    const snapshotFileName = computeSnapshotFileName(snapshotTestName)

    fs.writeFileSync(`${SVG_VISUAL_TEST_DIR}/${snapshotFileName}.svg`, svgString)
    fs.appendFileSync(SVG_VISUAL_TEST_INDEX, `<div>${snapshotTestName}</div>` + NEWLINE)
    fs.appendFileSync(SVG_VISUAL_TEST_INDEX, `<img src="./${snapshotFileName}.svg"/>` + NEWLINE)
}

const readSnapshot = (currentTest: CustomReporterResult): Html => {
    const snapshotTestName = computeSnapshotTestName(currentTest)
    const snapshotFileName = computeSnapshotFileName(snapshotTestName)

    return fs
        .readFileSync(`${SVG_VISUAL_TEST_DIR}/${snapshotFileName}.svg` as Filename, {encoding: "utf8"})
        .replace(/\r/g, BLANK) as Html
}

describe("computeSvgStringFromInput", (): void => {
    beforeAll((): void => {
        if (!UPDATE) return
        fs.rmdirSync(SVG_VISUAL_TEST_DIR, {recursive: true})
        fs.mkdirSync(SVG_VISUAL_TEST_DIR)
        fs.writeFileSync(SVG_VISUAL_TEST_INDEX, "<body>" + NEWLINE)
    })

    afterAll((): void => {
        if (!UPDATE) return
        fs.appendFileSync(SVG_VISUAL_TEST_INDEX, "</body>" + NEWLINE)
    })

    it("works for multiline StaffCodes", async (): Promise<void> => {
        const unicodeSentence = "   　\n　" as Unicode & Sentence

        const actual = await computeSvgStringFromInput(unicodeSentence)

        if (UPDATE) updateSnapshot(actual, thisJasmine.currentTest)
        const expected = readSnapshot(thisJasmine.currentTest)
        expect(actual).toBe(expected)
    })

    it("leger left overhang cut off unless you add manual advance at the start like this", async (): Promise<void> => {
        const unicodeSentence = " 　" as Unicode & Sentence

        const actual = await computeSvgStringFromInput(unicodeSentence)

        if (UPDATE) updateSnapshot(actual, thisJasmine.currentTest)
        const expected = readSnapshot(thisJasmine.currentTest)
        expect(actual).toBe(expected)
    })

    it("works for a double barline at the end", async (): Promise<void> => {
        const unicodeSentence = "　    " as Unicode & Sentence

        const actual = await computeSvgStringFromInput(unicodeSentence)

        if (UPDATE) updateSnapshot(actual, thisJasmine.currentTest)
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

        if (UPDATE) updateSnapshot(actual, thisJasmine.currentTest)
        const expected = readSnapshot(thisJasmine.currentTest)
        expect(actual).toBe(expected)
    })

    it("can vertically position various types of glyphs on stave lines (not all of these work yet)", async (): Promise<void> => {
        const unicodeSentence = "                                　" as Unicode & Sentence

        const actual = await computeSvgStringFromInput(unicodeSentence)

        if (UPDATE) updateSnapshot(actual, thisJasmine.currentTest)
        const expected = readSnapshot(thisJasmine.currentTest)
        expect(actual).toBe(expected)
    })
})
