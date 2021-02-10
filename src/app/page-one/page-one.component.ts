import { Component, HostListener, OnInit } from '@angular/core';
import { Works } from '../profile.models';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
})
export class PageOneComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    console.log(window.scrollY);
    if (window.scrollY > 250) {
      document.getElementById('mainContainer').classList.add('collapse');
    } else if (window.scrollY > 350 && window.scrollY < 500) {
      document.getElementById('mainContainer').classList.add('bar-move');
    } else {
      document.getElementById('mainContainer').classList.remove('collapse');
      document.getElementById('mainContainer').classList.remove('bar-move');
    }
  }

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(e) {
  //   //  document.getElementById("#image").css({left:e.pageX, top:e.pageY});

  //   document.getElementById('image').style.left = e.pageX + 'px';
  //   document.getElementById('image').style.top = e.pageY + 'px';
  //   console.log(e.pageY);
  // }
}
