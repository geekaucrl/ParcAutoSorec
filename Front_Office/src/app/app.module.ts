import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { MainReservComponent } from './main-reserv/main-reserv.component';
import { MesReservComponent } from './mes-reserv/mes-reserv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainReservComponent,
    MesReservComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidenavComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
