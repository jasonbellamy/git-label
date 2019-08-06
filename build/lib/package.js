"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const glob_1 = require("glob");
function findPackages(path) {
    return new Promise((resolve, reject) => {
        glob_1.glob(path, function (err, res) {
            if (err) {
                reject(err);
            }
            resolve(res.filter(file => file.endsWith('.json')));
        });
    });
}
exports.findPackages = findPackages;
;
function readPackages(packages = []) {
    return Promise
        .all(packages.map(readPackage))
        .then(labels => labels.reduce((prev, curr) => prev.concat(curr)));
}
exports.readPackages = readPackages;
function readPackage(path) {
    return new Promise((resolve, reject) => {
        fs_1.readFile(path, 'utf8', (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(JSON.parse(res));
        });
    });
}
exports.readPackage = readPackage;
//# sourceMappingURL=package.js.map