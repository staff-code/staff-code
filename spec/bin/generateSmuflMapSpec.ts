import {generateSmuflMap} from "../../bin/generateSmuflMap"
import {SMuFL_MAP} from "../../src"

// todo: finish this
// tslint:disable-next-line ban
xdescribe("generateSmuflMap", (): void => {
    it("matches", (): void => {
        const actual = generateSmuflMap()

        expect(actual).toEqual(SMuFL_MAP)
    })
})

// todo: some leger stuff might still need to be moved, I forget what though. constants or codes, or something
