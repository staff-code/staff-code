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
var tsutils_1 = require("tsutils");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== undefined && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this.ruleArguments);
    };
    /* tslint:disable object-literal-sort-keys */
    Rule.metadata = {
        ruleName: 'no-import-paths-without-names',
        description: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            Disallows importing from paths like '../', '../../', and './'."], ["\n            Disallows importing from paths like '../', '../../', and './'."]))),
        rationale: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            This should encourage awareness of module boundaries."], ["\n            This should encourage awareness of module boundaries."]))),
        optionsDescription: 'None.',
        options: {},
        optionExamples: [true],
        type: 'functionality',
        typescriptOnly: false,
        hasFix: false
    };
    Rule.FAILURE_STRING = 'Do not import from a parent index. Import directly from modules by their name.';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    for (var _i = 0, _a = tsutils_1.findImports(ctx.sourceFile, 63 /* All */); _i < _a.length; _i++) {
        var name_1 = _a[_i];
        if (importPathLacksName(name_1.text)) {
            ctx.addFailureAtNode(name_1, Rule.FAILURE_STRING);
        }
    }
}
function importPathLacksName(path) {
    return path.split('/').every(function (step) {
        return step === '..' || step === '.' || step === '';
    });
}
var templateObject_1, templateObject_2;
