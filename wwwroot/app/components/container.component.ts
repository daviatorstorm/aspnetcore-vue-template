import * as Vue from 'vue';
import Component from '../utils/component';

@Component({
    template: `<div>
        <h2>Hello from container component</h2>
        <button @click="click()">Click me</button>
        <render-view><render-view>
    </div>`,
    name: 'container'
})
export default class Container {
    http: any

    click() {
        alert('button clicked');
        console.log(this.http);
    }
}
