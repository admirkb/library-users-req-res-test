import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ReqresModule } from '../../dist/reqres';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReqresModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
