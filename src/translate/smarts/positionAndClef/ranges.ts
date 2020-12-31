import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"

const isInLegerLineRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE022" && unicode <= "\uE024"

const isInNoteheadNoteClusterIndividualNotesOrBeamedGroupsOfNotesRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE0A0" && unicode <= "\uE1F6"

const isInSimplifiedMusicNotationNoteheadsRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uEC50" && unicode <= "\uEC53"

const isInMoreSimplifiedMusicNotationNoteheadsRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uEC59" && unicode <= "\uEC5A"

const isInMedievalRenaissanceMensuralNoteheadsRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE930" && unicode <= "\uE93D"

const isInMedievalRenaissanceMensuralIndividualNotesRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE950" && unicode <= "\uE96F"

const isInMedievalRenaissanceMensuralObliqueFormsPlainchantSingleNoteFormsRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE970" && unicode <= "\uE9AF"

const isInShapeNoteNoteheadsSupplementRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uECD0" && unicode <= "\uECDF"

const isInTechniquesNoteheadsRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uEE70" && unicode <= "\uEE7F"

const isInNoteheadsSupplementRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uEE70" && unicode <= "\uEE7F"

const isInNoteheadNoteStemOrBeamedGroupsOfNotesRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE0A0" && unicode <= "\uE21F"

const isInSpacingRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE388" && unicode <= "\uE38F"

const isInOtherSagittalControlledNowForStaffCodeFeaturesRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE40C" && unicode <= "\uE41F"

const isInFlagsAccidentalsArticulationHoldsPausesOrRestsRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE240" && unicode <= "\uE4FF"
    && !isInSpacingRange(unicode)
    && !isInOtherSagittalControlledNowForStaffCodeFeaturesRange(unicode)

const isInMedievalAndRenaissanceRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE900" && unicode <= "\uEA1F"

const isInKievanSquareNotationRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uEC30" && unicode <= "\uEC3F"

export {
    isInNoteheadNoteStemOrBeamedGroupsOfNotesRange,
    isInFlagsAccidentalsArticulationHoldsPausesOrRestsRange,
    isInKievanSquareNotationRange,
    isInLegerLineRange,
    isInMedievalAndRenaissanceRange,
    isInNoteheadNoteClusterIndividualNotesOrBeamedGroupsOfNotesRange,
    isInMedievalRenaissanceMensuralNoteheadsRange,
    isInMedievalRenaissanceMensuralIndividualNotesRange,
    isInMedievalRenaissanceMensuralObliqueFormsPlainchantSingleNoteFormsRange,
    isInTechniquesNoteheadsRange,
    isInSimplifiedMusicNotationNoteheadsRange,
    isInMoreSimplifiedMusicNotationNoteheadsRange,
    isInShapeNoteNoteheadsSupplementRange,
    isInNoteheadsSupplementRange,
}
