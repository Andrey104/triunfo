import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { HelperComponent } from './helper/helper.component';
import { HelperResultComponent } from './helper-result/helper-result.component';
import { HelperResultElementComponent } from './helper-result-element/helper-result-element.component';
import {HelperResultElementTypePipe} from './pipes/HelperResultElementType.pipe';
import { BasketComponent } from './basket/basket.component';
import { AboutComponent } from './about/about.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { BasketItemComponent } from './basket-item/basket-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HelperComponent,
    HelperResultComponent,
    HelperResultElementComponent,
    HelperResultElementTypePipe,
    BasketComponent,
    AboutComponent,
    ServiceListComponent,
    BasketItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
