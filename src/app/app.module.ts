import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InterfacePageComponent } from './pages/interface-page/interface-page.component';
import { InputNameComponent } from './components/input-name/input-name.component';
import { HeaderComponent } from './components/header/header.component';
import { GrilleComponent } from './components/grille/grille.component';
import { ClavierComponent } from './components/clavier/clavier.component';
import { RulesComponent } from './components/rules/rules.component';
import { FinalModaleComponent } from './components/final-modale/final-modale.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InterfacePageComponent,
    InputNameComponent,
    HeaderComponent,
    GrilleComponent,
    ClavierComponent,
    RulesComponent,
    FinalModaleComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
