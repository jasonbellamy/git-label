"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createSuccessHandler(response) {
    return `Successfully created ${response.length} labels`;
}
exports.createSuccessHandler = createSuccessHandler;
function deleteSuccessHandler(response) {
    return `Successfully deleted ${response.length} labels`;
}
exports.deleteSuccessHandler = deleteSuccessHandler;
function errorHandler(response) {
    console.log(response);
    return response;
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=handlers.js.map