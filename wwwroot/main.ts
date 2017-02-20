/// <reference path="app/main.component.ts" />
var components = App.Components;
new Vue({
    el: "#main",
    template: "<app></app>",
    'app': components.App
});
console.log('finish');