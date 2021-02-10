import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.scss']
})
export class FrameworkComponent implements OnInit {
  images = [
    {src: 'assets/images/bootstrap.png', label: 'bootstrap'},
    {src: 'assets/images/angular.png', label: 'angular'},
    {src: 'assets/images/primeng.png', label: 'primeng'},
    {src: 'assets/images/rxjs.png', label: 'rxjs'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
