import {setAllPropertiesOfObjectOnAnother} from "@sagittal/general"
import {INITIAL_SMARTS, smarts} from "../../../src/translate/smarts"

afterEach((): void => {
    setAllPropertiesOfObjectOnAnother({objectToChange: smarts, objectWithProperties: INITIAL_SMARTS})
})
