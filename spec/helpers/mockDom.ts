import {Link} from "@sagittal/general"
import {JSDOM} from "jsdom"
import {WEB_APP_URL} from "../../src/ui/constants"

const mockDom = ({url}: {url?: Link} = {url: WEB_APP_URL}): void => {
    globalThis.window = new JSDOM("", {url}).window as unknown as Window & typeof globalThis

    globalThis.document = globalThis.window.document
    globalThis.navigator = globalThis.window.navigator
    globalThis.history = globalThis.window.history
}

const unmockDom = (): void => {
    // @ts-ignore
    globalThis.window = undefined
    // @ts-ignore
    globalThis.document = undefined
    // @ts-ignore
    globalThis.navigator = undefined
    // @ts-ignore
    globalThis.history = undefined
}

afterEach((): void => {
    unmockDom()
})

export {
    mockDom,
    unmockDom,
}
