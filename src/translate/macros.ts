import {Io, isUndefined, RecordKey, Word} from "@sagittal/general"

const MACRO_INPUTS: Record<RecordKey<Io & Word>, Array<Io & Word>> = {
    "trcl": ["stpsrs0", "Gcl"],
    "bscl": ["stpsrs0", "Fcl"],
    "alcl": ["stpsrs0", "Ccl"],
    "tncl": ["stpsrs2", "Ccl"],
} as Record<Io & Word, Array<Io & Word>>

const processMacros = (inputs: Array<Io & Word>): Array<Io & Word> => {
    const postMacroInputs = [] as Array<Io & Word>

    inputs.forEach((input: Io & Word): void => {
        const macroInputs = MACRO_INPUTS[input]

        if (isUndefined(macroInputs)) {
            postMacroInputs.push(input)
        } else {
            postMacroInputs.push(...macroInputs)
        }
    })

    return postMacroInputs
}

export {
    processMacros,
}
