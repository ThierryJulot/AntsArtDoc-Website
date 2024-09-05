import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit {
  partners = [
    { name: 'Partner 1', logo: 'assets/partner1.png' },
    { name: 'Partner 2', logo: 'assets/partner2.png' },
    { name: 'Partner 3', logo: 'assets/partner3.png' },
    { name: 'Partner 4', logo: 'assets/partner4.png' },
    // Ajoutez d'autres partenaires ici
  ];
  constructor() {}

  ngOnInit() {}
}
