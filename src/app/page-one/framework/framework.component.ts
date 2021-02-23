import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.scss']
})
export class FrameworkComponent implements OnInit {
  images = [
    {src: 'assets/images/bootstrap.png', label: 'bootstrap', color: '#553a7d', width: '50', height: '50'},
    {src: 'assets/images/angular.png', label: 'angular', color: '#de140e', width: '50', height: '50'},
    {src: 'assets/images/primeng.png', label: 'primeng', color: '#de140e', width: '50', height: '50'},
    {src: 'assets/images/rxjs.png', label: 'rxjs', color: '#c6008f', width: '50', height: '50'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
