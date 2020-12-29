StaffCode installation instructions

- Drag `BravuraTextBB.otf` and `BravuraTextBB.woff` to your `assets/fonts` folder.
- Drag `staffCode.js` to your `assets/javascripts` folder.
- In Admin Control Panel -> Posting -> BBCodes click "Add a new BBCode". This one is for the display mode.
- Fill in the BBCode usage field with:

{{STAFF_BBCODE_USAGE}}

- Fill in the "HTML Replacement" field with:

{{STAFF_HTML_REPLACEMENT}}

If you want the StaffCode your users provide to always be preceded by certain staff code (such as a particular clef and/or the Auto Stave code), you can put any StaffCode you like just before the {TEXT} token.

- Fill in the "Help line" field with:

{{STAFF_HELP_LINE}}

- In Admin Control Panel -> Posting -> BBCodes click "Add a new BBCode". This one is for the inline mode.
- Fill in the BBCode usage field with:

{{SC_BBCODE_USAGE}}

- Fill in the "HTML Replacement" field with:

Again, if you want the StaffCode your users provide to always be preceded by certain staff code (such as a particular clef and/or the Auto Stave code), you can put any StaffCode you like just before the {TEXT} token.

{{SC_HTML_REPLACEMENT}}

- Fill in the "Help line" field with:

{{SC_HELP_LINE}}
