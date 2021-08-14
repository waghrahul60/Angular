import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { ProductsPipe } from './CustonPipe/products.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponentComponent,
    ProductsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
