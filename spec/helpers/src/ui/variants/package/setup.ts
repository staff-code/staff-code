import {components} from "../../../../../../src/ui/variants/package/globals"

const setupBasicStaffCodePackageVariantForTest = (): void => {
    components.root = document.createElement("span")

    components.input = document.createElement("textarea")
    components.input.classList.add("sc-input")
    components.root.appendChild(components.input)

    components.display = document.createElement("div")
    components.display.classList.add("sc-display")
    components.root.appendChild(components.display)
}

export {
    setupBasicStaffCodePackageVariantForTest,
}
