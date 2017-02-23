import * as Vue from 'vue';
import * as http from 'vue-resource';
import * as VueRouter from 'vue-router';
import Component from './components/container.component';

Vue.use(http);
var router = Vue.use(VueRouter);

// for (var key in router) {
//     console.log(key, ": ", typeof router);
// }

console.log(router.options);

console.log(router);

new VueRouter()

var app = new Vue({
    render: function (h) {
        return h('container');
    },
    components: {
        container: Component
    }
});

// app.

export = app;

