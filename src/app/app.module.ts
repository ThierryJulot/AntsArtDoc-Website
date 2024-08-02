import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountdownModule } from 'ngx-countdown';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NouvelleComponent } from './nouvelle/nouvelle.component';
import { AproposComponent } from './apropos/apropos.component';
import { AutreActiviteComponent } from './autre-activite/autre-activite.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { FondateurComponent } from './fondateur/fondateur.component';
import { ProgrammeCardComponent } from './programme-card/programme-card.component';
import { BlogLayoutComponent } from './blog-layout/blog-layout.component';
import { FormComponent } from './form/form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    CatalogueComponent,
    AccueilComponent,
    PresentationComponent,
    NouvelleComponent,
    AproposComponent,
    AutreActiviteComponent,
    PartenaireComponent,
    FondateurComponent,
    ProgrammeCardComponent,
    BlogLayoutComponent,
    FormComponent
  ],
  imports: [


































































































































    
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CountdownModule,
    RouterOutlet,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
