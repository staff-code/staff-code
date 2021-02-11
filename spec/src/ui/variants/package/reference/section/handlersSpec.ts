import {Maybe, Sentence, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../../../../../bin"
import {debugCodeSentence, SMART_ADVANCE_COMMAND_CODE} from "../../../../../../../src/translate/codes"
import {components} from "../../../../../../../src/ui/variants/package/globals"
import {getPreviousInputState} from "../../../../../../../src/ui/variants/package/panel"
import {handleReferenceInsert} from "../../../../../../../src/ui/variants/package/reference/section"
import {mockDom} from "../../../../../../helpers/mockDom"
import {setupBasicStaffCodePackageVariantForTest} from "../../../../../../helpers/src/ui/variants/package/setup"

describe("handleReferenceInsert", (): void => {
    const buildInsertionEvent = (code: Code & Word = "nhsqbllg" as Code & Word): MouseEvent => ({
        composedPath: (): HTMLElement[] => ([
            {tagName: "U"},
            {tagName: "TD"},
            {
                tagName: "TR",
                children: [
                    {tagName: "TD" /*glyph cell*/},
                    {
                        tagName: "TD", getAttribute: (attributeName: string): Maybe<Code & Word> => {
                            return attributeName === "sc-code" ? code : undefined
                        },
                    },
                    {tagName: "TD" /*mnemonic cell*/},
                ],
            } as unknown as HTMLElement & ParentNode,
        ] as HTMLElement[]),
    }) as unknown as MouseEvent

    beforeEach((): void => {
        mockDom()
        setupBasicStaffCodePackageVariantForTest()
    })

    it("does nothing if a part of the reference which is not a section row is clicked", (): void => {
        const event = {
            composedPath: (): HTMLElement[] => ([
                {tagName: "DIV"},
                {tagName: "DIV"},
                {tagName: "DIV"},
                {tagName: "SPAN"},
                {tagName: "BODY"},
                {tagName: "HTML"},
            ] as HTMLElement[]),
        } as unknown as MouseEvent

        handleReferenceInsert(event)

        expect(components.display.textContent).toBe("")
    })

    it("updates the display if the part of the reference that was clicked is a section row; it updates it with the data from the code cell of that row", (): void => {
        handleReferenceInsert(buildInsertionEvent())
        const actualDisplayText = debugCodeSentence(components.display.textContent as Unicode & Sentence)

        expect(actualDisplayText).toBe("nhsqbllg 16;")
    })

    it("saves the previous input value and text cursor position within the input", (): void => {
        components.input.value = "13 chars long"

        expect(getPreviousInputState().value).toBe("")
        expect(getPreviousInputState().position).toBeNaN()

        handleReferenceInsert(buildInsertionEvent())

        expect(getPreviousInputState().value).toBe("13 chars long")
        expect(getPreviousInputState().position).toBe(13)
    })

    it("inserts at the correct position, buffering space if necessary", (): void => {
        components.input.value = "13 chars long"
        components.input.selectionStart = 5

        handleReferenceInsert(buildInsertionEvent())

        expect(components.input.value).toBe("13 ch nhsqbllg ars long")
    })

    it("buffers only on the right side if appropriate", (): void => {
        components.input.value = "13 chars long"
        components.input.selectionStart = 9

        handleReferenceInsert(buildInsertionEvent())

        expect(components.input.value).toBe("13 chars nhsqbllg long")
    })

    it("buffers only on the right side if appropriate", (): void => {
        components.input.value = "13 chars long"
        components.input.selectionStart = 8

        handleReferenceInsert(buildInsertionEvent())

        expect(components.input.value).toBe("13 chars nhsqbllg long")
    })

    it("does not add a space at the end of the input or if following a newline", (): void => {
        components.input.value = "13 chars long\n"

        handleReferenceInsert(buildInsertionEvent())

        expect(components.input.value).toBe("13 chars long\nnhsqbllg")
    })

    it("does not add a space at the beginning of the input", (): void => {
        components.input.value = "13 chars long"
        components.input.selectionStart = 0

        handleReferenceInsert(buildInsertionEvent())

        expect(components.input.value).toBe("nhsqbllg 13 chars long")
    })

    it("does not add a space if the inserted code is the smart advance semicolon", (): void => {
        components.input.value = "13 chars long"
        components.input.selectionStart = 5

        handleReferenceInsert(buildInsertionEvent(SMART_ADVANCE_COMMAND_CODE))

        expect(components.input.value).toBe("13 ch;ars long")
    })

    it("does not remove a space if the inserted code is the smart advance semicolon", (): void => {
        components.input.value = "13 chars long"
        components.input.selectionStart = 8

        handleReferenceInsert(buildInsertionEvent(SMART_ADVANCE_COMMAND_CODE))

        expect(components.input.value).toBe("13 chars; long")
    })
})
