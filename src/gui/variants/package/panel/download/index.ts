export {buildDownloadButton} from "./button"
export {downloadSvg} from "./handlers"
export {DOWNLOAD_CSS} from "./css"

// TODO: FEATURE IMPROVE, LOW PRIORITY: ABILITY TO DOWNLOAD AS PNG
//  I appreciate your intent to scope the work even smaller than me.
//  I'm on board in spirit.
//  But it will work out that this feature will require less work and be more consistent with other
//  GUI components if it does end up having the ability to surface.
//  I mean, that if I'm going to store the value somewhere, it might as well be in an input like the other ones,
//  Whether or not it's ever attached to the DOM for the user to see.
//  - So it would be a radio button that appears below the button
