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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./SmartRating.css";
var SmartRating = function (props) {
    var stars = Array.from({ length: 5 }, function (_, i) { return i + 1; });
    var _a = useState(0), rating = _a[0], setRating = _a[1];
    return (_jsxs("div", __assign({ className: "star-rating rating-".concat(props.theme) }, { children: [_jsx("h1", { children: props.title }), stars.map(function (star, index) {
                var starCss = star <= rating ? "starActive" : "starInactive";
                return (_jsx("button", __assign({ disabled: props.disabled, "data-testid": "".concat(props.testIdPrefix, "-").concat(index), className: "".concat(starCss), onClick: function () { return setRating(star); } }, { children: _jsx("span", __assign({ className: "star" }, { children: "\u2605" })) }), star));
            })] })));
};
export default SmartRating;
