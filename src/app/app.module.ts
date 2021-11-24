import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouteModule } from './route/route.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouteRoutingModule } from './route/route-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlbumfotosComponent } from './albumfotos/albumfotos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlbumfotosComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    RouteRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
