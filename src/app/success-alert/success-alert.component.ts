import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<p>Successful!</p><app-warning-alert></app-warning-alert>',
  styles: ['p {color: blue; font-weight: bold}']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
