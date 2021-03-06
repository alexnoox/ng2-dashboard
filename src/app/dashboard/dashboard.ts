import {Component} from 'angular2/core';
import { WidgetSocket } from '../services/widget-socket';

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'dashboard'
    selector: 'dashboard',  // <dashboard></dashboard>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [WidgetSocket],
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styles: [require('./dashboard.css')],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: require('./dashboard.html')
})
export class Dashboard {
    widget = { name: '' };
    widgets: Array<any> = [];

    constructor(public socket: WidgetSocket) {

    }

    ngOnInit() {
        console.log('hello `Dashboard` component');

        this.socket.connect();
        this.socket.registerAddWidget().subscribe(widget => {
            console.log('Dashboard: Received a new widget in the view', widget);
            this.widgets.push(widget);
            console.log('Dashboard: Widgets array', this.widgets);
        });
    }

    ngOnDestroy() {
        this.socket.disconnect();
    }

    addWidget() {
        this.socket.addWidget(this.widget);
    }

}
