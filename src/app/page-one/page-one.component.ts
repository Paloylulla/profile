import { Component, OnInit } from "@angular/core";
import { Works } from "../profile.models";

@Component({
  selector: "app-page-one",
  templateUrl: "./page-one.component.html",
  styleUrls: ["./page-one.component.scss"],
})
export class PageOneComponent implements OnInit {
  constructor() {}

  works: Works[] = [
    {
      companyName: "CDG System Ltd.",
      position: "Programer",
      date: "1 Jan, 2019 - present",
      frontEnd: [
        'Create new companent to use in project',
        'Develop programs using angular framework',
        'Creating a theme for website using scss, follow adobe xd from designer',
        'Create login page or reset password from angular framwork and implememt to keycloak server',
        'Research solution for web design'
      ],
      backEnd: [
        'Using java for coding REST api (company framework) and block chain (hyperledger fabric)'
      ],
    },    
    {
      companyName: "Laconic Technology Co ., Ltd",
      position: "R&D [RESEARCH AND DEVELOPMENT]",
      date: "15 Dec, 2017 - 31 Dec, 2018",
      frontEnd: [
        'Developed, maintain, debug source code and support web-base ERP application for administrative',
        'Using javascript, HTML, JSP, Object-Oriented Programing (JAVA), Oracle (PL/SQL), framework base on MVC pattern'
      ]
    },
    {
      companyName: "True Corparation Khonkaen [6 months]",
      position: "Call center IT",
      date: "12 Sep, 2016 - 31 March, 2017",
      frontEnd: [
        'Developed, maintain, debug source code and support web-base ERP application for administrative',
        'Using javascript, HTML, JSP, Object-Oriented Programing (JAVA), Oracle (PL/SQL), framework base on MVC pattern'
      ]
    },
  ];
  ngOnInit() {}
}
