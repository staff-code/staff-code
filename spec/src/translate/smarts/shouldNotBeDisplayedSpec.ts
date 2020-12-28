import {Word} from "@sagittal/general"
import {Code, computeUnicodeForCode} from "../../../../src/translate/codes"
import {shouldNotBeDisplayed} from "../../../../src/translate/smarts"

describe("shouldNotBeDisplayed", (): void => {
    it("returns true for positions, because smart position takes care of putting the position character down                  ", (): void => {
        const unicode = computeUnicodeForCode("up1" as Code & Word)

        expect(shouldNotBeDisplayed(unicode)).toBeTruthy()
    })

    it("returns true for position supplements too", (): void => {
        const unicode = computeUnicodeForCode("up15" as Code & Word)

        expect(shouldNotBeDisplayed(unicode)).toBeTruthy()
    })
})
