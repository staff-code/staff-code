import {ImageType} from "../../../../types"
import {components, staffCodeConfig} from "../../globals"
import {setStaffCodeCookie} from "../../initial"
import {Initial} from "../../types"

const buildImageOption = (optionImageType: ImageType): HTMLOptionElement => {
    const {initial: {imageType: selectedImageType}} = staffCodeConfig

    const imageOption = document.createElement("option")
    imageOption.value = optionImageType
    imageOption.textContent = optionImageType
    imageOption.selected = optionImageType === selectedImageType

    return imageOption
}

const buildImageSelect = (): HTMLSelectElement => {
    const imageSelect = document.createElement("select")
    components.imageSelect = imageSelect
    imageSelect.addEventListener("change", (): void => {
        setStaffCodeCookie(Initial.IMAGE_TYPE, imageSelect.value)
    })

    const svgOption = buildImageOption(ImageType.SVG)
    imageSelect.appendChild(svgOption)

    const pngOption = buildImageOption(ImageType.PNG)
    imageSelect.appendChild(pngOption)

    return imageSelect
}

export {
    buildImageSelect,
}
