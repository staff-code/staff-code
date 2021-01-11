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
We should see "~|( sanai 17C" (no commas) (if I've remembered those correctly).
 But "~|(" should be what you get when you click.

(listed in order of their length is not a bad idea)

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

The heading "[b]StaffCode command[/b] (not SMuFL)" can link to our tutorial,
or some other page of ours that resembles a SMuFL table (but makes it clear it isn't).


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


----

...when a symbol has more than one alias, and we list them all (space separated),
we should grey those which will not be inserted by a click. The ungreyed one should come first.

------

I figured the ranges needed to be unrolled so the user could click to insert specific ones.

StaffCode commands (not SMuFL)
"Auto stem direction" means stem down for middle line and above, otherwise stem up.
 */
