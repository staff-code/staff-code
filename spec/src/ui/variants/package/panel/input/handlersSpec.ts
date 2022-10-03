import {doOnNextEventLoop, Ms} from "@sagittal/general"
import {components} from "../../../../../../../src/ui/variants/package/globals"
import {setPreviousInputState} from "../../../../../../../src/ui/variants/package/panel"
import {
    handleInput,
    handleKeydown,
    handleKeyup,
    shouldTranslate,
} from "../../../../../../../src/ui/variants/package/panel/input/handlers"
import {mockDom} from "../../../../../../helpers/mockDom"
import {setupBasicStaffCodePackageVariantForTest} from "../../../../../../helpers/src/ui/variants/package/setup"

describe("shouldTranslate", (): void => {
    beforeEach((): void => {
        handleKeyup()
        mockDom()
        setupBasicStaffCodePackageVariantForTest()
    })

    describe("change amount", (): void => {
        it("is true when the change is greater than one char, even if the length is the same", (): void => {
            components.input.value = "13 chars long"
            setPreviousInputState()
            components.input.value = "13 diffs long"

            const actual = shouldTranslate()

            expect(actual).toBeTruthy()
        })

        it("is false when the change is only one char", (): void => {
            components.input.value = "13 chars long"
            setPreviousInputState()
            components.input.value = "13 chars long?"

            const actual = shouldTranslate()

            expect(actual).toBeFalsy()
        })
    })

    describe("which key (if any)", (): void => {
        it("is true when the pressed key should trigger translation", (): void => {
            const event = {code: "Semicolon"} as KeyboardEvent
            handleKeydown(event)

            const actual = shouldTranslate()

            expect(actual).toBeTruthy()
        })

        it("is false when the pressed key should not trigger translation", (): void => {
            const event = {code: "d"} as KeyboardEvent
            handleKeydown(event)

            const actual = shouldTranslate()

            expect(actual).toBeFalsy()
        })
    })

    describe("text cursor position", (): void => {
        it("is true when the cursor is not at the end of the input", (): void => {
            components.input.value = "13 chars long"
            setPreviousInputState()
            components.input.selectionStart = 4

            const actual = shouldTranslate()

            expect(actual).toBeTruthy()
        })

        it("is false when the cursor is not at the end of the input", (): void => {
            components.input.value = "13 chars long"
            setPreviousInputState()
            components.input.selectionStart = 13

            const actual = shouldTranslate()

            expect(actual).toBeFalsy()
        })
    })

    it("is false with all the false conditions", (): void => {
        components.input.value = "13 chars long"
        setPreviousInputState()
        components.input.value = "13 chars long?"
        components.input.selectionStart = 14
        const event = {code: "Slash", shiftKey: true} as KeyboardEvent
        handleKeydown(event)

        const actual = shouldTranslate()

        expect(actual).toBeFalsy()
    })

    it("is true with all the true conditions", (): void => {
        components.input.value = "13 chars long"
        setPreviousInputState()
        components.input.value = "13 ; long"
        const event = {code: "Enter"} as KeyboardEvent
        handleKeydown(event)
        components.input.selectionStart = 4

        const actual = shouldTranslate()

        expect(actual).toBeTruthy()
    })

    it("is true with any false condition and any true condition", (): void => {
        components.input.value = "13 chars long"
        setPreviousInputState()
        components.input.value = "13 chars ?"                           // Change amount:   would trigger. enough to do.
        const event = {code: "Slash", shiftKey: true} as KeyboardEvent  // Key down:        wouldn't trigger
        handleKeydown(event)
        components.input.selectionStart = 10                            // Cursor position: wouldn't trigger

        const actual = shouldTranslate()

        expect(actual).toBeTruthy()
    })
})

describe("handleInput", (): void => {
    const DOUBLE_THE_TIME_IT_SHOULD_ACTUALLY_TAKE_IN_THE_APP_TO_BE_SAFE = 200 as Ms

    beforeEach((): void => {
        handleKeyup()
        mockDom()
        setupBasicStaffCodePackageVariantForTest()
    })

    it("does nothing if it should not update", (done: DoneFn): void => {
        components.input.value = "13 chars long"
        setPreviousInputState()

        handleInput()
        doOnNextEventLoop((): void => {
            expect(components.display.textContent).toBe("")
            done()
        }, DOUBLE_THE_TIME_IT_SHOULD_ACTUALLY_TAKE_IN_THE_APP_TO_BE_SAFE).then()
    })

    it("translates the input to the display if it should update", (done: DoneFn): void => {
        components.input.value = "13 chars long"
        setPreviousInputState()
        const event = {code: "Space"} as KeyboardEvent
        handleKeydown(event)

        handleInput()
        doOnNextEventLoop((): void => {
            expect(components.display.textContent).toBe("  1 3 c  h  a r  s l  o n  g ")
            done()
        }, DOUBLE_THE_TIME_IT_SHOULD_ACTUALLY_TAKE_IN_THE_APP_TO_BE_SAFE).then()
    })
})
