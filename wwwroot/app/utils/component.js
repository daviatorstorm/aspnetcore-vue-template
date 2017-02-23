"use strict";
function Component(config) {
    return function (target) {
        var instance = new target();
        return {
            template: config.template,
            methods: instance,
            name: config.name
        };
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
//# sourceMappingURL=component.js.map