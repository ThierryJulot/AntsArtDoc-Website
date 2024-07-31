import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit{
  isMobile: boolean;
  isScrolled = false;

  constructor() {
    this.isMobile = window.innerWidth <= 600;
  }

  // manova anle class defini à une taille donné
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth <= 600;
  }

  // changer la couleur du navbar lorsqu'on scrolle
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const contentElement = document.getElementById('content');
    if (contentElement) {
      this.isScrolled = window.scrollY > contentElement.offsetTop;
    }
  }

  ngOnInit(): void {}
}
