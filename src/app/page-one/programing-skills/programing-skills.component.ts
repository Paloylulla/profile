import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-programing-skills',
  templateUrl: './programing-skills.component.html',
  styleUrls: ['./programing-skills.component.scss']
})
export class ProgramingSkillsComponent implements OnInit {
 skillList = [
    {lang: 'Html', point: '80%'},
    {lang: 'JSP' , point: '33%'},
    {lang: 'Javascript' , point: '68%'},
    {lang: 'TypeScript' , point: '70%'},
    {lang: 'Java' , point: '50%'},
    {lang: 'PL/SQL' , point: '30%'},
    {lang: 'Css & Scss' , point: '85%'},

  ];
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if (window.scrollY > 350 &&  window.scrollY < 1400) {
      document.getElementById('skillPoint').classList.add('animation-barmove');
    } else {
      document.getElementById('skillPoint').classList.remove('animation-barmove');
    }
  }
}
