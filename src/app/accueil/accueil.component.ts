import {
  Component,
  OnInit,
  HostListener,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import moment from 'moment';
import * as AOS from 'aos';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  title = 'FrontDocumentaire';
  heureActuelle: moment.Moment;
  tempsFinal: moment.Moment;
  tempsRestant: moment.Duration;
  isMobile: boolean;
  swiperConfig: any;

  constructor() {
    this.isMobile = window.innerWidth <= 600;
    this.heureActuelle = moment(); // Heure actuelle
    const tempsFinalStr = localStorage.getItem('tempsFinal');

    if (tempsFinalStr) {
      this.tempsFinal = moment(tempsFinalStr); // Récupérer `tempsFinal` à partir du stockage local
    } else {
      this.tempsFinal = moment().add(1460, 'hours'); // Exemple: heure finale est dans 1460 heures
      localStorage.setItem('tempsFinal', this.tempsFinal.toISOString()); // Sauvegarder `tempsFinal` dans le stockage local
    }

    this.tempsRestant = moment.duration();
    this.calculerTempsRestant();
  }

  ngOnInit(): void {
    AOS.init();
    setInterval(() => {
      this.calculerTempsRestant();
    }, 1000);
  }

  calculerTempsRestant() {
    // Calculer la différence entre l'heure actuelle et l'heure finale
    this.tempsRestant = moment.duration(this.tempsFinal.diff(moment()));
  }
}
