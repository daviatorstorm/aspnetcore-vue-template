"use strict";
var Vue = require("vue");
var http = require("vue-resource");
var VueRouter = require("vue-router");
var container_component_1 = require("./components/container.component");
Vue.use(http);
var router = Vue.use(VueRouter);
// for (var key in router) {
//     console.log(key, ": ", typeof router);
// }
console.log(router.options);
console.log(router);
new VueRouter();
var app = new Vue({
    render: function (h) {
        return h('container');
    },
    components: {
        container: container_component_1.default
    }
});
module.exports = app;
//# sourceMappingURL=app.js.map