import {loadFontsThen, setupPackageRoot} from "../src"

loadFontsThen((): void => {
    const root: HTMLSpanElement = setupPackageRoot()
    document.body.appendChild(root)
})
