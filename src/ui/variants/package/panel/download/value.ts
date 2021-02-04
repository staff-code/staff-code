import {DEFAULT_INITIAL_IMAGE_TYPE} from "../../../../constants"
import {ImageType} from "../../../../types"
import {components} from "../../globals"

const getImageType = (): ImageType =>
    !components.imageSelect ?
        DEFAULT_INITIAL_IMAGE_TYPE :
        components.imageSelect.value as ImageType

export {
    getImageType,
}
