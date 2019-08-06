"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../lib/request");
function createLabel({ api, token, repo }, name, color) {
    return request_1.default({
        headers: { 'User-Agent': 'request', 'Authorization': `token ${token}` },
        url: `${api}/${repo}/labels`,
        form: JSON.stringify({ name, color }),
        method: 'POST',
        json: true
    });
}
exports.createLabel = createLabel;
function deleteLabel({ api, token, repo }, name) {
    return request_1.default({
        headers: { 'User-Agent': 'request', 'Authorization': `token ${token}` },
        url: `${api}/${repo}/labels/${name}`,
        method: 'DELETE',
        json: true
    });
}
exports.deleteLabel = deleteLabel;
function getLabels({ api, token, repo }) {
    return request_1.default({
        headers: { 'User-Agent': 'request', 'Authorization': `token ${token}` },
        url: `${api}/${repo}/labels`,
        method: 'GET',
        json: true
    });
}
exports.getLabels = getLabels;
function formatLabel({ name, color }) {
    return { name, color: color.replace('#', '') };
}
exports.formatLabel = formatLabel;
function createLabels(server, labels) {
    return Promise.all(labels
        .map(formatLabel)
        .map(({ name, color }) => createLabel(server, name, color)));
}
exports.createLabels = createLabels;
function deleteLabels(server, labels) {
    return Promise.all(labels
        .map(formatLabel)
        .map(({ name, color }) => deleteLabel(server, name)));
}
exports.deleteLabels = deleteLabels;
//# sourceMappingURL=label.js.map