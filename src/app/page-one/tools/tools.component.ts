import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  images = [
    {src: 'assets/images/oracle.png', label: 'oracle', color: '#ed1b24'},
    {src: 'assets/images/sourcetree.png', label: 'sourcetree', color: '#2684ff'},
    {src: 'assets/images/eclipse.png', label: 'eclipse', color: '#403081'},
    {src: 'assets/images/tomcat.png', label: 'tomcat', color: '#000000'},
    {src: 'assets/images/vscode.png', label: 'vscode', color: '#0081cf'},
    {src: 'assets/images/postman.png', label: 'postman', color: '#fd6c35'},
    {src: 'assets/images/toad-white.png', label: 'toad', color: '#3c673b'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
