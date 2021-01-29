// tslint:disable no-reaching-imports

// In order to make these font files content-hashable, passing through webpack as imports instead of copy-webpack-plugin
// I have essentially created a module here which can only be handled with webpack. So it breaks when running the tests.
// And it also breaks when running scripts in the bin/ folder. Basically, anything in Node, through tsc / ts-node, can't
// Handle this module. And I can't figure out how to short-circuit it. So instead I just dance around it, avoiding
// Importing whenever I can, by simply importing from ...src/translate instead of ...src (and tslint-disabling, for the
// No-reaching-imports rule.

// @ts-ignore
import bravuraTextScOtf from "../../assets/fonts/BravuraTextSC.otf"
// @ts-ignore
import bravuraTextScWoff from "../../assets/fonts/BravuraTextSC.woff"
import {BRAVURA_TEXT_SC, BRAVURA_TEXT_SC_OTF, BRAVURA_TEXT_SC_WOFF, WEB_APP_URL} from "./constants"

const loadFonts = (): Promise<void> => {
    return new Promise((resolve: () => void, reject: () => void): void => {
        const webpackContentHashedWoffForApp = new FontFace(BRAVURA_TEXT_SC, `url('${bravuraTextScWoff}`)
        webpackContentHashedWoffForApp.load().then((): void => {
            document.fonts.add(webpackContentHashedWoffForApp)
            resolve()
        }).catch((): void => {
            const notContentHashedWoffForPackageOrBBCode = new FontFace(BRAVURA_TEXT_SC, `url('${BRAVURA_TEXT_SC_WOFF}')`)
            notContentHashedWoffForPackageOrBBCode.load().then((): void => {
                document.fonts.add(notContentHashedWoffForPackageOrBBCode)
                resolve()
            }).catch((): void => {
                reject()
            })
        })

        const webpackContentHashedOtfForApp = new FontFace(BRAVURA_TEXT_SC, `url('${bravuraTextScOtf}`)
        webpackContentHashedOtfForApp.load().then((): void => {
            document.fonts.add(webpackContentHashedOtfForApp)
            resolve()
        }).catch((): void => {
            const notContentHashedOtfForPackageOrBBCode = new FontFace(BRAVURA_TEXT_SC, `url('${BRAVURA_TEXT_SC_OTF}')`)
            notContentHashedOtfForPackageOrBBCode.load().then((): void => {
                document.fonts.add(notContentHashedOtfForPackageOrBBCode)
                resolve()
            }).catch((): void => {
                reject()
            })
        })
    })
}

export {
    loadFonts,
}
