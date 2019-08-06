"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function configure({ api, token, repo }) {
    return {
        api,
        repo: `repos/${repo}`,
        token
    };
}
exports.configure = configure;
//# sourceMappingURL=config.js.map