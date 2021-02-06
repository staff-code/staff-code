export {loadFonts} from "./fonts"
export {setupPackageRoot, downloadImage} from "./variants"
export {translateInputToDisplay} from "./translate"
export {StaffCodeOptions, StaffCodeCallback} from "./types"

// TODO: magic # update
/* tslint:disable:max-line-length */
/*
By zooming in on a long horizontal series of sagittal shafts, I found that the pixel alignment is more accurate in the forum if the magic number is changed from 1.13 to 1.12.

    So please change this in the source code and instructions to:

    [_]staff={SIMPLETEXT1;optional} font={SIMPLETEXT2;optional} size={SIMPLETEXT3;defaultValue=1.1[color=#FF0000]2[/color]}]{TEXT}[/staff]

        And don't forget to change the bbCode help line to:

        Convert staffCodes into a music notation figure: [_]staff]ston [color=#FF0000]tr[/color]cl ; F4 # ; nt[/staff]

Don't copy and paste the above as they have escapes and colours, just edit what you've got.

 */

// TODO: example updates
//  I don't think you should delete the spaces before the semicolons in the example.
//  That's like an advanced feature for lazy people who know what they are doing. :)
