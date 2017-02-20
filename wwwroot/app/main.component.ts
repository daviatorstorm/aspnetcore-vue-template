/// <reference path="utils/utils.ts" />
namespace App.Components {
    @Component({
        name: 'app',
        template: `
        <div>
            <h1>First vue app!!!</h1>
            <p>{{message}}</p>
            <button v-on:click="click">Click me</button>
            <ul v-if="arr.length > 0">
                <li v-for="item in arr">{{item}}</li>
            </ul>
        </div>
        `
    })
    export class App {
        message = 'Some message';;
        arr = [];

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
    }
}