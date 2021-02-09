import {Io, noop, Sentence} from "@sagittal/general"
import {Unicode} from "../../../../../../../src"
import {getStaffCodeCookie} from "../../../../../../../src/ui/variants/package/initial"
import {buildStaffCodeCallback} from "../../../../../../../src/ui/variants/package/panel/input/callback"
import {Initial} from "../../../../../../../src/ui/variants/package/types"
import {mockDom} from "../../../../../../helpers/mockDom"

describe("buildStaffCodeCallback", (): void => {
    const inputSentence = "howdy pahdnah" as Io & Sentence
    const unicodeSentence = "" as Unicode & Sentence

    it("returns a callback which contains whatever callback the user has requested with the same arguments               ", (): void => {
        mockDom()

        const callback = jasmine.createSpy()

        const actual = buildStaffCodeCallback(callback)
        actual(inputSentence, unicodeSentence)

        expect(callback).toHaveBeenCalledWith(inputSentence, unicodeSentence)
    })

    it("also (this is only in the case of the package variant) updates the cookie for the codes", (): void => {
        mockDom()

        const actual = buildStaffCodeCallback(noop)
        actual(inputSentence, unicodeSentence)

        expect(getStaffCodeCookie(Initial.CODES)).toBe("howdy pahdnah")
    })
})
