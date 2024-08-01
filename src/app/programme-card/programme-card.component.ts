import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { Mousewheel } from 'swiper/modules';

@Component({
  selector: 'app-programme-card',
  templateUrl: './programme-card.component.html',
  styleUrls: ['./programme-card.component.scss'],
})
export class ProgrammeCardComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      },
      modules: [Pagination, Mousewheel],
    });
  }
  ngOnInit() {}
}
