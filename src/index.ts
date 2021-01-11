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
/*
[quote]
And maybe we can make exceptions in the vertical offset of the symbol in the case of symbols that only project up too far,
or only project down too far (like 128th , 512th or 1024th notes or stems).

I don't mind that some symbols overflow their box upward and/or downward,
 provided they don't overlap other symbols.
That seems like a good use of space.
So that suggests another possibility.
A run of tall symbols(like G clefs) could be staggered.
Every second one shifted a little to the right.
[/quote]

Yeah I think if you want to prevent individual overflow without compromising the overall aesthetic
it'll come down to a table of exceptions. I'd like it to be as simple as possible.
Perhaps a symbol can either be offset up, down, right, or left by a fixed amount. I'll try that.

-----

We should see "~|( sanai 17C" (no commas) (if I've remembered those correctly).
 But "~|(" should be what you get when you click.

(listed in order of their length is not a bad idea)

-----

Make the triangle that collapses it, stay visible, not scroll with the reference content.


-----

We'll need a section for non-SMuFL StaffCode commands.
Maybe it should be the first section after the list of ranges links.

-------


[b]StaffCode commands (not SMuFL)[/b]
[table=1]
[tr][td]        [/td][td][font=Roboto mono]ston[/font][/td][td][b]st[/b]aff [b]on[/b][/td][/tr]
[tr][td]    [/td][td][font=Roboto mono]stof[/font][/td][td][b]st[/b]aff [b]of[/b]f[/td][/tr]
[tr][td]    [/td][td][font=Roboto mono]sp0..sp7[/font][/td][td]set [b]sp[/b]acing [b]0..7[/b] octals[/td][/tr]
[tr][td]    [/td][td][font=Roboto mono];[/font][/td][td]advance[/td][/tr]
[tr][td]    [/td][td][font=Roboto mono]0;..24;[/font][/td][td][b]0..24[/b] octals advance[/td][/tr]
[tr][td]    [/td][td][font=Roboto mono]en;[/font][/td][td][b]en[/b]d-of-staff advance[/td][/tr]
[tr][td]    [/td][td][font=Roboto mono]br;[/font][/td][td]line [b]br[/b]eak advance[/td][/tr]

-----

Remove the indent and bullet from the start of all the section links.

-----

Then elide any of those links that still word-wrap, until they don't.
This probably only requires changing "accidental" and "accidentals" to "acc..."
in the Sagittal sections from Promethean onward.

-----

I noticed an issue on mobile.
If you go straight for the reference and start tapping to insert,
you end up inserting stuff at the beginning of the input, not the end.
 On desktop, it seems, the text cursor defaults to the end of the input, but on mobile it starts at the beginning.
 I'll just need to find a way to force mobile to start at the end, too.

-----

It would be good if the "back to top" links were a little further to the left (by about half their own width),
so I at least get to see the "back" part of them on my phone without horizontal scrolling.
(reference should just fit in mobile)

----

We could get maybe 4 more links on-screen when the Reference initially opens, if we:
[list]
[*]Set the words "SMuFL sections" at the same size as all the section headings.
[*]Remove the blank lines (or excessive line-height) above it and below it.
[*]Move the text "Click any row to insert that code ." to immediately after the words "SMuFL sections",
 on the same line. But keep it unbolded and in the point size it's in now.
[*]Change it to "(Click to insert code)".
[/list]


-----------

There seems excessive vertical space between each section heading and its table.
[/quote]

That's just default margin for heading elements.
I think you're right that it would look better with the bottom margin overridden to be smaller.


-----

After I click a section link, there seems excessive vertical space above the section heading.
I'd prefer to see more of its table.

The existing vertical space between the end of one table and the section heading for the next is good.
[/quote]

Okay, I'll just have to rework how that spacing is created.
I think if it's all exerted by the previous table, then the anchor
(which I already made sure was the same vertical position as the visible title)
 will link you so that there's no space above the section title.


-------

For the best look, the point size of Bravura Text SC used in the Reference,
should be some simple ratio of that used for the output (when size=1).
 I think 3/4 of the size will work best.

-----

Just make every section heading into [a link to the official SMuFL pages].
The heading "[b]StaffCode command[/b] (not SMuFL)" can link to our tutorial,
or some other page of ours that resembles a SMuFL table (but makes it clear it isn't).

------

Retaining the glyph names intact should be less important when we have links to the actual SMuFL tables.
 I think it's better to separate the words and threat these entries as mnemonics for the codes.
 Even expand "acc" out to "accidental" if that works better (but I really don't thing it necessary).
If you don't separate the words, half the emboldened letters will be uppercase when they are lowercase in the staffCode.


-----

[quote="Dave Keenan" post_id=3398 time=1610274967 user_id=2]
[url=https://w3c.github.io/smufl/gitbook/tables/staves.html][b]Staves[/b][/url] (and leger lines)
Following [b]ston[/b] ([b]st[/b]aff [b]on[/b]) StaffCode generates staff pieces and leger lines automatically,
and any staff-piece code will change what kind of staff is generated.
 The default is [b]st5ln[/b] ([b]st[/b]aff [b]5[/b] [b]l[/b]i[b]n[/b]es).
 See also [b]chst[/b] ([url=][b]ch[/b]ant [b]st[/b]aff[/url]) and
  [b]ltst6ln[/b] ([url=][b]l[/b]u[b]t[/b]e [b]st[/b]aff [b]6[/b] [b]l[/b]i[b]n[/b]es[/url]).

[url=https://w3c.github.io/smufl/gitbook/tables/clefs.html][b]Clefs[/b][/url]
StaffCode maps note names C1 D1 E1 .. C7 to staff positions based on the preceding clef and its staff position.
If there has been no clef, treble staff positioning is used.

[url=https://w3c.github.io/smufl/gitbook/tables/combining-staff-positions.html][b]Combining staff positions[/b][/url]
These are invisible characters that move the following symbol up or down if possible.
StaffCode generates them from note names C1 D1 E1 .. C7 based on the preceding clef and its staff position.
They can also be used directly, relative to the middle staff line.
See also [url=]Combining staff positions supplement[/url].

[b]Combining staff positions supplement[/b] (not SMuFL)
SMuFL does not allow staff positions corresponding to more than 2 leger lines.
 And it does not allow symbols on the middle staff line without advancing.
 So StaffCode adds the following additional positions.

[b]Leger line supplement[/b] (not SMuFL)
SMuFL does not have suitable leger line for all note and notehead symbols, so StaffCode adds the following.
 StaffCode will generate them automatically following [b]ston[/b] ([b]st[/b]aff [b]on[/b]).
[/quote]

------

[quote][quote]
On my phone, when I tap a link in the Reference, whether it is a section link or a "back to top" link,
the Reference field is moved to the top of the screen, pushing the input and output fields off the top out of view.
[/quote]

Huh. That sounds crazy. I think I understand that it's not rearranging elements in the DOM, right?
It's just scrolling the input and output out of view?[/quote]

Yes, it's just scrolling. Forcing me to drag it back down again so I can see the the input and output again.

-------

...eliminate the borders between the cells that have the symbols,
so we don't have borders interfering with the (staggered) symbols when they spill above or below their cells.
I just realised that, if you can eliminate the borders between the symbol cells,
then the best way to obtain the stagger would be to actually have two columns for symbols

-----

We could be kind to EHEJIPN and delete the "29Limit" from accidentalCombiningLower23Limit29LimitComma and
accidentalCombiningRaise23Limit29LimitComma before we generate auto staffCodes for them,
and before we separate the words to make the mnemonic in the reference.
(and fix the VIbrato one)

----

...when a symbol has more than one alias, and we list them all (space separated),
we should grey those which will not be inserted by a click. The ungreyed one should come first.

------

I figured the ranges needed to be unrolled so the user could click to insert specific ones.

StaffCode commands (not SMuFL)
"Auto stem direction" means stem down for middle line and above, otherwise stem up.

------
 */
