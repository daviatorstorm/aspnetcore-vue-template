"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var component_1 = require("../utils/component");
var Container = (function () {
    function Container() {
    }
    Container.prototype.click = function () {
        alert('button clicked');
        console.log(this.http);
    };
    return Container;
}());
Container = __decorate([
    component_1.default({
        template: "<div>\n        <h2>Hello from container component</h2>\n        <button @click=\"click()\">Click me</button>\n        <render-view><render-view>\n    </div>",
        name: 'container'
    })
], Container);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Container;
//# sourceMappingURL=container.component.js.map