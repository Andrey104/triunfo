import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {NgModule} from '@angular/core';
import {HelperComponent} from './helper/helper.component';
import {BasketComponent} from './basket/basket.component';
import {AboutComponent} from './about/about.component';
import {CategoriesComponent} from './categories/categories.component';


const mainRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'assistant', component: HelperComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: CategoriesComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
