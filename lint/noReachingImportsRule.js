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
        ruleName: 'no-reaching-imports',
        description: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            Disallows importing any submodule."], ["\n            Disallows importing any submodule."]))),
        rationale: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            I hope this will help prevent circular dependencies."], ["\n            I hope this will help prevent circular dependencies."]))),
        optionsDescription: 'None.',
        options: {},
        optionExamples: [true],
        type: 'functionality',
        typescriptOnly: false,
        hasFix: true
    };
    Rule.FAILURE_STRING = 'Do not reach into a module to import its submodules; maybe this module needs to expose this submodule?';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    for (var _i = 0, _a = tsutils_1.findImports(ctx.sourceFile, 63 /* All */); _i < _a.length; _i++) {
        var name_1 = _a[_i];
        if (isSubmodulePath(name_1.text)) {
            var fix = new Lint.Replacement(name_1.getStart(), name_1.getWidth(), fixedSubmodulePath(name_1.text));
            ctx.addFailureAtNode(name_1, Rule.FAILURE_STRING, fix);
        }
    }
}
function isSubmodulePath(path) {
    var steps = path.split('/');
    if (steps[0][0] === '@') {
        return false;
    }
    var badSteps = 0;
    steps.forEach(function (step) {
        if (step !== '..' && step !== '.') {
            badSteps += 1;
        }
    });
    return badSteps > 1;
}
function fixedSubmodulePath(path) {
    var steps = path.split('/');
    var output = '\"';
    var finished = false;
    steps.forEach(function (step, index) {
        if (finished) {
            return;
        }
        if (index > 0) {
            output += '/';
        }
        output += step;
        if (step !== '..' && step !== '.') {
            finished = true;
        }
    });
    return output + '\"';
}
var templateObject_1, templateObject_2;
