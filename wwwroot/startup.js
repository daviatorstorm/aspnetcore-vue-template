define('startup', ['vue', 'vue-resource', 'vue-router', './app/test'], function (vue, http, VueRouter, main) {
    'use strict';

    vue.use(http);
    vue.use(VueRouter);

    new vue({
        el: '#main',
        template: '<div><h1>Hello from Vue.js</h1><main-component></main-component><router-view></router-view></div>',
        components: {
            'main-component': main.default
        },
        router: new VueRouter({
            routes: [
                { path: '/', component: { template: '<div>Hello from router</div>' } }
            ]
        })
    });
});