import {loadFonts, setupPackageRoot} from "../src"

loadFonts().then((): void => {
    const root: HTMLSpanElement = setupPackageRoot()
    document.body.appendChild(root)
})
