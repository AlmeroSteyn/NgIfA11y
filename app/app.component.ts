import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {A11yIndexComponent} from "./a11y-index.component";
import {A11yNgIfPageComponent} from "./a11y-ng-if-page.component";
import {A11yNgIfSectionComponent} from "./a11y-ng-if-section.component";
import {A11yElvisComponent} from "./a11y-elvis.component";

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  directives:[
    ROUTER_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {path:'/', name: 'Index', component: A11yIndexComponent},
  {path:'/ngif-page', name: 'NgIfPage', component: A11yNgIfPageComponent},
  {path: '/ngif-section', name: 'NgIfSection', component: A11yNgIfSectionComponent},
  {path: '/elvis', name: 'Elvis', component: A11yElvisComponent}
])
export class AppComponent {

}
