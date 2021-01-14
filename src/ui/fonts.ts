import {FontName} from "@sagittal/general"
import {WEB_APP_URL} from "./constants"

const DEFAULT_FONT = "Bravura Text BB" as FontName

const loadFontsThen = (fn: () => void): void => {
    let fontsLoaded = false
    const woff = new FontFace("Bravura Text BB", `url('assets/fonts/BravuraTextBB.woff'), url('${WEB_APP_URL}/assets/fonts/BravuraTextBB.woff')`)
    woff.load().then((): void => {
        document.fonts.add(woff)
        if (!fontsLoaded) {
            fn()
            fontsLoaded = true
        }
    })
    const otf = new FontFace("Bravura Text BB", `url('assets/fonts/BravuraTextBB.otf'), url('${WEB_APP_URL}/assets/fonts/BravuraTextBB.otf')`)
    otf.load().then((): void => {
        document.fonts.add(otf)
        if (!fontsLoaded) {
            fn()
            fontsLoaded = true
        }
    })
}

export {
    DEFAULT_FONT,
    loadFontsThen,
}
