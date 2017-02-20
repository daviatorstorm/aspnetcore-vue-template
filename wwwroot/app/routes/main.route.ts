/// <reference path="../utils/utils.ts" />
namespace App.Routes {
    @Route({
        path:'/',
        name: 'main-route',
        template: `
        <div>
            <h1>First vue app!!!</h1>
            <p>{{message}}</p>
            <button @click="click">Click me</button>
            <button @click="someMethod">Request</button>
            <ul v-if="arr.length > 0">
                <li v-for="item in arr">{{item}}</li>
            </ul>
        </div>
        `
    })
    export class MainRoute {
        message = 'Some message';;
        arr = [];
        $http: any;

        click() {
            this.arr.push('value 1');
            this.arr.push('value 2');
            this.arr.push('value 3');
            this.arr.push('value 4');

            setTimeout(() => {
                this.arr.push('value 5');
                this.arr.push('value 6');
                this.arr.push('value 7');
                this.arr.push('value 8');
            }, 2000);
        }

        someMethod() {
            this.$http.post('/flats').then(res => {
                console.log('responce');
            }, err => console.log(err));
        }
    }
}