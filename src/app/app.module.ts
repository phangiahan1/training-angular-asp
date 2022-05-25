import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CinodeComponent } from './cinode/cinode.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CinodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
