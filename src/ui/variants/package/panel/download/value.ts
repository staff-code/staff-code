import {ImageType} from "../../../../types"
import {components} from "../../globals"
import {computeInitialImageType} from "../../initial"

const getImageType = (): ImageType =>
    !components.imageSelect ?
        computeInitialImageType() :
        components.imageSelect.value as ImageType

export {
    getImageType,
}
