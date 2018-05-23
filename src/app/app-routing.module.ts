import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {NgModule} from '@angular/core';
import {HelperComponent} from './helper/helper.component';


const mainRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'assistant', component: HelperComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
