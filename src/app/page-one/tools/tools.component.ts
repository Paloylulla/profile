import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  images = [
    {src: 'assets/images/oracle.png', label: 'oracle', color: '#ed1b24', width: '50', height: '50'},
    {src: 'assets/images/sourcetree.png', label: 'sourcetree', color: '#2684ff', width: '50', height: '50'},
    {src: 'assets/images/eclipse.png', label: 'eclipse', color: '#403081', width: '50', height: '50'},
    {src: 'assets/images/tomcat.png', label: 'tomcat', color: '#000000', width: '50', height: '50'},
    {src: 'assets/images/vscode.png', label: 'vscode', color: '#0081cf', width: '50', height: '50'},
    {src: 'assets/images/postman.png', label: 'postman', color: '#fd6c35', width: '50', height: '50'},
    {src: 'assets/images/toad-white.png', label: 'toad', color: '#3c673b', width: '95', height: '50'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
