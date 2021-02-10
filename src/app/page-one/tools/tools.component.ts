import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  images = [
    {src: 'assets/images/oracle.png', label: 'oracle'},
    {src: 'assets/images/sourcetree.png', label: 'sourcetree'},
    {src: 'assets/images/eclipse.png', label: 'eclipse'},
    {src: 'assets/images/tomcat.png', label: 'tomcat'},
    {src: 'assets/images/vscode.png', label: 'vscode'},
    {src: 'assets/images/postman.png', label: 'postman'},
    {src: 'assets/images/toad-white.png', label: 'toad'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
