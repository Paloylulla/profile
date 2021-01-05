import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/profile.models';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss'],
})
export class EducationsComponent implements OnInit {
  educationList: Education[] = [
    { name: 'KHONKAEN WITTAYAYON SCHOOL', details: ['Science – mathematics'] },
    {
      name: 'KHONKAEN UNIVERSITY ',
      details: [
        'Bachelor of Science (Information and Communication Technology)',
        'GPA : 2.83',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
