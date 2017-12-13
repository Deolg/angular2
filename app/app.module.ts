import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import { FormsModule } from '@angular/forms';

import { MyTableComponent } from "./myTable/myTable";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        MyTableComponent
        
    ],
    bootstrap:[
        AppComponent,
        MyTableComponent
    ]
})

export class AppModule{

}