export {
    transferInputToDisplay, setupPackageRoot, loadFontsThen, downloadSvg, StaffCodeOptions, StaffCodeCallback,
} from "./ui"
export {
    computeUnicodeLiteral,
    Octals,
    Code,
    Unicode,
    computeInputSentenceUnicode,
    UnicodeLiteral,
    computeUnicodeFromUnicodeLiteral,
} from "./translate"

// tslint:disable

// TODO: FEATURE IMPROVE, READY TO GO: LIST ALL ALIASES IN CODE CELL
/*
We should see "~|( sanai 17C" (no commas) (if I've remembered those correctly).
But "~|(" should be what you get when you click.

(listed in order of their length is not a bad idea)

And when a symbol has more than one alias, and we list them all (space separated),
we should grey those which will not be inserted by a click. The ungreyed one should come first.
*/


// TODO: BUG, READY TO GO: DAVE'S WEIRD SCROLLING EXPERIENCE ON MOBILE
/*
[quote][quote]
On my phone, when I tap a link in the Reference, whether it is a section link or a "back to top" link,
the Reference field is moved to the top of the screen, pushing the input and output fields off the top out of view.
[/quote]

Huh. That sounds crazy. I think I understand that it's not rearranging elements in the DOM, right?
It's just scrolling the input and output out of view?[/quote]

Yes, it's just scrolling. Forcing me to drag it back down again so I can see the the input and output again.
 */
