import {Link} from "@sagittal/general"
import {JSDOM} from "jsdom"

const mockDom = ({url}: {url?: Link} = {}): void => {
    globalThis.window = new JSDOM("", {url}).window as unknown as Window & typeof globalThis
    globalThis.document = globalThis.window.document
    globalThis.navigator = globalThis.window.navigator
    globalThis.history = globalThis.window.history

    // @ts-ignore
    globalThis.navigator.clipboard = {}
}

export {
    mockDom,
}
