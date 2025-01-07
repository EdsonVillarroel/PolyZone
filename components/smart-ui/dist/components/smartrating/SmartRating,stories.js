var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import SmartRating from "./SmartRating";
export default {
    title: "ReactComponentLibrary/Rating",
    component: SmartRating,
};
var Template = function (args) { return (_jsx(SmartRating, __assign({}, args))); };
export var RatingTest = Template.bind({});
RatingTest.args = {
    title: "Default theme",
    theme: "primary",
    testIdPrefix: "rating",
};
export var RatingSecondary = Template.bind({});
RatingSecondary.args = {
    title: "Secondary theme",
    theme: "secondary",
    testIdPrefix: "rating",
};
