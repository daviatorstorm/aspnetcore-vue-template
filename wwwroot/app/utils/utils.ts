let Vue;
function Component(config) {
    let f = function (target, bla, bka) {
        let instance = new target;
        let data = {};
        config.methods = instance;

        for(var key in instance) {
            if (typeof instance[key] != 'function') {
                data[key] = instance[key];
            }
        }
        config.data = function () {
            return data;
        }

        Vue.component(config.name, config);
    }

    return f as any;
}
