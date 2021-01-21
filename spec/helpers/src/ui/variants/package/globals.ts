import {cleanObject} from "@sagittal/general"
import {components, staffCodeConfig} from "../../../../../../src/ui/variants/package/globals"

afterEach((): void => {
    cleanObject(components as unknown as Record<string, unknown>)
    cleanObject(staffCodeConfig as unknown as Record<string, unknown>)
})
