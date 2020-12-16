"use strict";
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === undefined ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Rule = void 0;
var Lint = require("tslint");
var ts = require("typescript");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== undefined && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        if (sourceFile.fileName.includes('types.ts') ||
            sourceFile.fileName.includes('type/') ||
            sourceFile.fileName.includes('nominals.ts')) {
            return [];
        }
        return this.applyWithFunction(sourceFile, walk, this.ruleArguments);
    };
    /* tslint:disable object-literal-sort-keys */
    Rule.metadata = {
        ruleName: 'no-type-definitions-outside-types-modules',
        description: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            Disallows defining types outside of dedicated modules named 'types.ts'."], ["\n            Disallows defining types outside of dedicated modules named 'types.ts'."]))),
        rationale: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            This should make it easier to discover existing types and keep them healthy."], ["\n            This should make it easier to discover existing types and keep them healthy."]))),
        optionsDescription: 'None.',
        options: {},
        optionExamples: [true],
        type: 'functionality',
        typescriptOnly: false,
        hasFix: false
    };
    Rule.FAILURE_STRING = 'Do not declare types here. Please move them to the nearest "types.ts" module.';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    ts.forEachChild(ctx.sourceFile, function (node) {
        var text = node.getText(ctx.sourceFile);
        var trimmedText = text.replace(/^\s+|\s+$/gm, '');
        var lines = trimmedText.split('\n');
        lines.forEach(function (line) {
            if (line.startsWith('type ') || line.startsWith('interface ') || line.startsWith('enum ')) {
                ctx.addFailureAtNode(node, Rule.FAILURE_STRING);
            }
        });
    });
}
var templateObject_1, templateObject_2;
