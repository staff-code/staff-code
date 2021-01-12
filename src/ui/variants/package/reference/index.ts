export {buildReferenceExpander} from "./expander"
export {REFERENCE_CSS} from "./css"

// TODO: BUG, BLOCKED: DAVE'S WEIRD SCROLLING EXPERIENCE ON MOBILE
//  - On my phone, when I tap a link in the Reference, whether it is a section link or a "back to top" link,
//  The Reference field is moved to the top of the screen, pushing the input and output fields off the top out of view.
//  - Huh. That sounds crazy. I think I understand that it's not rearranging elements in the DOM, right?
//  It's just scrolling the input and output out of view?
//  - Yes, it's just scrolling. Forcing me to drag it back down again so I can see the the input and output again.
//  - Blocked, though, because I can't reproduce it.
