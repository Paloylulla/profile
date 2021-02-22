import { Component, HostListener, OnInit } from '@angular/core';
import { Works } from '../profile.models';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
})
export class PageOneComponent implements OnInit {
  checkedMode = false;
  memoList = [
    {label: 'gitHub', src: '/assets/images/github.png', url: 'https://github.com/Paloylulla'},
    {label: 'codepen', src: '/assets/images/codepen.png', url: 'https://codepen.io/paloylulla/pens/public'}
  ];

  constructor() {}

  ngOnInit() {
    const mode = localStorage.getItem('mode');
    const body = (document.getElementsByTagName('body')[0]) as HTMLElement;
    body.classList.add(mode);

    if (mode === 'darkMode') {
      this.checkedMode = true;
    } else {
      this.checkedMode = false;
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    if (window.scrollY > 250) {
      document.getElementById('mainContainer').classList.add('collapse');
    } else if (window.scrollY > 350 && window.scrollY < 500) {
      document.getElementById('mainContainer').classList.add('bar-move');
    } else {
      document.getElementById('mainContainer').classList.remove('collapse');
      document.getElementById('mainContainer').classList.remove('bar-move');
    }
  }

  changeTheme(event) {
    const body = (document.getElementsByTagName('body')[0]) as HTMLElement;
    if (event.checked) {
      body.classList.add('darkMode');
      localStorage.setItem('mode', 'darkMode');
    } else {
      body.classList.remove('darkMode');
      localStorage.setItem('mode', 'light');
    }
  }

  goPage() {
    window.location.href = 'https://paloylulla.github.io/';
  }
}
