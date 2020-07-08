import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accordin',
  templateUrl: './accordin.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./accordin.component.css']
})
export class AccordinComponent implements OnInit {
  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
