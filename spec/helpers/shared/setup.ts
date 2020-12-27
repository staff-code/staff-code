process.env.TEST_MODE = "true"

import {
    catchBadMainDescriptions,
    catchBadSpecFiles,
    catchEmptyFiles,
    customMatchers,
    DEFAULT_IO_SETTINGS,
    DEFAULT_SCRIPT_SETTINGS,
    Filename,
    ioSettings,
    LogTarget,
    program,
    scriptSettings,
    setAllPropertiesOfObjectOnAnother,
    slowReporter,
    specNameReporter,
    specReporter,
} from "@sagittal/general"


program.allowUnknownOption()


Error.stackTraceLimit = Infinity


jasmine.getEnv()
    .clearReporters()

jasmine.getEnv()
    .addReporter(specReporter)
jasmine.getEnv()
    .addReporter(slowReporter)
jasmine.getEnv()
    .addReporter(specNameReporter)


// Another reason to disable these except on CI is that if you use fdescribe in a spec with multiple
// Top-level describes, it will report a problem because it doesn't recognize fdescribe to reset what it's matching
// Already have this to-do in Asana somewhere though.
catchBadMainDescriptions("spec/src" as Filename)

catchBadSpecFiles()

catchEmptyFiles("src" as Filename)
catchEmptyFiles("spec/src" as Filename)


beforeAll((): void => {
    process.env.TEST_MODE = "true"
    jasmine.addMatchers(customMatchers)
})

beforeEach((): void => {
    setAllPropertiesOfObjectOnAnother({objectToChange: ioSettings, objectWithProperties: DEFAULT_IO_SETTINGS})
    setAllPropertiesOfObjectOnAnother({
        objectToChange: scriptSettings,
        objectWithProperties: {
            ...DEFAULT_SCRIPT_SETTINGS,
            logTargets: {[LogTarget.SPEC]: true},
        },
    })
})
