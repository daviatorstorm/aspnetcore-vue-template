let Vue;

function extractData(target) {
    let config: any = {};
    let instance = new target;
    let data = {};
    config.methods = instance;

    for (var key in instance) {
        if (typeof instance[key] != 'function') {
            data[key] = instance[key];
        }
    }
    config.data = function () {
        return data;
    }

    return config;
}

function Component(config: ComponentOptions) {
    let f = function (target) {
        let extracted = extractData(target);

        Vue.component(config.name, extracted);

        extracted.name = config.name;

        return config;
    };

    return f as any;
}

function Route(config: RouterOptions) {
    return (target) => {

        let extracted = extractData(target);

        console.log(extracted, config);

        return {
            path: config.path,
            component: {
                name: config.name,
                methods: extracted.methods,
                data: extracted.data,
                template: config.template
            },
            name: config.name
        } as any;
    };
}

interface ComponentOptions {
    name: string;
    template: string;
}

interface RouterOptions extends ComponentOptions{
    path: string;
    methods?: Object;
    data?: Object;
}