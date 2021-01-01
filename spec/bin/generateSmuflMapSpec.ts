import {generateSmuflMap} from "../../bin/generateSmuflMap"
import {SMuFL_MAP} from "../../src"

// TODO: FEATURE IMPROVE, TOUGH AND LOW PRIORITY: STAFF CODE AUTOMATICALLY STAYS UP-TO-DATE WITH SMuFL
//  "Make a javascript tool that does, at transpile time, what my spreadsheet does, to glyphNames.json.
//  That way, it would automatically generate new codes and widths for every new release of SMuFL/Bravura.
//  I'm not saying you should do this any time soon, or ever, but I thought I should mention the possibility. :)"
//  - So, currently, in deploy.sh, we update the SMuFL/Bravura data in the repo, so widths will be updated.
//  But we need this map here to be computable from glyphnames.json, using a JS impl of Dave's autogen'd naming scheme.
//  Whenever you get to this, you can refer to the SMuFL1.4StaffCode.xlsx file at the root of this repo.
//  You can use this note below (taken from the forum: http://forum.sagittal.org/viewtopic.php?p=3145#p3145)
//  To basically lay out the processing rules. And to confirm you did it correctly, check the generated names against
//  What you already pulled into the repo below.
//  But you'll need to refer to that Excel file to know the 78 (maybe actually 79) words which were special-cased.
// tslint:disable max-line-length
/*
It was done by starting with the glyph name and first removing ordinal suffixes like st, nd, rd, th, from numbers.
Then separating words and numbers according to camel-case rules, making all words lowercase.
Then for each word, keeping the first character but replacing any subsequent "ight" with "t" and deleting any subsequent vowel a e i o u.
Then if it is not a number, taking only the first two characters.
If it consist of a single character, that character is uppercased.
Then all the abbreviations for the individual words are concatenated.
There were only 78 words whose abbreviations had to be special-cased in a lookup table to avoid clashes, and to account for some vowel digraphs like ow ey al ah oh.
The longest staffCodes are 16 characters, they are in both Sagittal and EHEJIPN.
 */

// tslint:disable-next-line ban
xdescribe("generateSmuflMap", (): void => {
    it("matches", (): void => {
        const actual = generateSmuflMap()

        expect(actual).toEqual(SMuFL_MAP)
    })
})
