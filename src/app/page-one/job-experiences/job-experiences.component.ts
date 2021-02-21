import { Component, OnInit } from '@angular/core';
import { Works } from 'src/app/profile.models';

@Component({
  selector: 'app-job-experiences',
  templateUrl: './job-experiences.component.html',
  styleUrls: ['./job-experiences.component.scss']
})
export class JobExperiencesComponent implements OnInit {
  panelOpenState = false;
  works: Works[] = [
    {
      companyName: 'CDG System Ltd.',
      position: 'Programer',
      date: '1 Jan, 2019 - present',
      jobDescription: [
        'Developed and maintain website follow document from SA',
        'Develop programs using angular framework and creeated component framework for project',
        'Creating a theme for website using scss, follow adobe xd from designer',
        'Create login page or reset password from angular framwork and implememt to keycloak server',
        'Research solution for web design',
        'Using java for coding REST api (company framework) and block chain (hyperledger fabric)'
      ]
    },
    {
      companyName: 'Laconic Technology Co ., Ltd',
      position: 'R&D [Research and development]',
      date: '15 Dec, 2017 - 31 Dec, 2018',
      jobDescription: [
        'Developed, maintain, debug source code and support web-base ERP application for administrative',
        'Using javascript, HTML, JSP, Object-Oriented Programing (JAVA), Oracle (PL/SQL), framework base on MVC pattern'
      ]
    },
    {
      companyName: 'True Corparation Khonkaen [6 months]',
      position: 'Call center IT',
      date: '12 Sep, 2016 - 31 March, 2017',
      jobDescription: ['Support customer about internet problems']
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
