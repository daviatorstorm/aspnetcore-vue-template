import * as vue from 'vue';
import * as template from 'text!app/temp.html'

console.log(template);

export default {
    template,
    name: 'main-component',
    methods: {
        click: function () {
            this.$http.get('/flats')
                .then(console.log)
                .catch(console.log);
        }
    },
    mounted: function () {
        this.$http.get('/flats')
            .then(console.log)
            .catch(console.log);
    }
};