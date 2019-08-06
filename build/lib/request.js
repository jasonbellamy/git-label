"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("request");
function requestPromisfied(options) {
    return new Promise((resolve, reject) => {
        request_1.default(options, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res.body);
        });
    });
}
exports.default = requestPromisfied;
//# sourceMappingURL=request.js.map