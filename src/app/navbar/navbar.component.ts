import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isMobile: boolean;
  isScrolled = false;

  constructor() {
    this.isMobile = window.innerWidth <= 600;
  }

  // Adapter la classe définie en fonction de la taille de la fenêtre
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth <= 600;
  }

  // Changer la couleur de la barre de soulignement lors du défilement
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const contentElement = document.getElementById('content');
    if (contentElement) {
      this.isScrolled = window.scrollY > contentElement.offsetTop;

      // Modifier la couleur du lien de navigation
      const navbarLink = document.querySelector('.hvr-underline-from-center');
      if (navbarLink) {
        if (this.isScrolled) {
          (navbarLink as HTMLElement).style.setProperty(
            '--underline-color',
            '#ffffff'
          ); // Change en blanc
        } else {
          (navbarLink as HTMLElement).style.setProperty(
            '--underline-color',
            '#A94438'
          ); // Rétablir la couleur d'origine
        }
      }
    }
  }

  ngOnInit(): void {}
}
