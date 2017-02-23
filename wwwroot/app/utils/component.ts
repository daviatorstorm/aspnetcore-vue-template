export default function Component(config) {
    return function (target) {
        var instance = new target();
        return {
            template: config.template,
            methods: instance,
            name: config.name
        } as any;
    }
}