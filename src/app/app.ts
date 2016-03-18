/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home/home';
import {Dashboard} from './dashboard/dashboard';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ ],
  styles: [`
    nav ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    nav li {
      display: inline;
    }
    nav li.active {
      background-color: lightgray;
    }
  `],
  template: `
    <header>
      <nav>
        <h1>Hello {{ name }}</h1>
        <ul>
          <li router-active>
            <a [routerLink]=" ['Dashboard'] ">Dashboard</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['About'] ">About</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      ng2-dashboard by <a [href]="url">@alexnoox</a>
      <div>
        <img [src]="angularLogo" width="10%">
        <img [src]="maestranoLogo" width="10%">
      </div>
    </footer>
  `
})
@RouteConfig([
  { path: '/',      name: 'Dashboard', component: Dashboard, useAsDefault: true },
  { path: '/dashboard',  name: 'Dashboard',  component: Dashboard },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about/about')('About') },
])
export class App {
  name = 'Angular 2 Webpack Starter';
  angularLogo = 'assets/img/angular-logo.png';
  maestranoLogo = 'assets/img/maestrano-logo.png';
  url = 'https://twitter.com/alexnoox';
  constructor() {
    console.log('Started angular2 app');
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
