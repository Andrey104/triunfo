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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HelperComponent,
    HelperResultComponent,
    HelperResultElementComponent,
    HelperResultElementTypePipe
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
