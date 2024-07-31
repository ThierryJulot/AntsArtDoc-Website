import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NouvelleComponent } from './nouvelle/nouvelle.component';
import { AproposComponent } from './apropos/apropos.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { AutreActiviteComponent } from './autre-activite/autre-activite.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'Accueil', component: AccueilComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'nouvelle', component: NouvelleComponent },
  { path: 'a-propos', component: AproposComponent },
  { path: 'partenaire', component: PartenaireComponent },
  { path: 'autre-activite', component: AutreActiviteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
