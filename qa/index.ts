import {Io, Maybe} from "@sagittal/general"
import {loadFontsThen, setupPackageRoot} from "../src"

const initialText = new URLSearchParams(window.location.search).get("codes") || undefined as Maybe<Io>

loadFontsThen((): void => {
    const root: HTMLSpanElement = setupPackageRoot({initialText})
    document.body.appendChild(root)
})
