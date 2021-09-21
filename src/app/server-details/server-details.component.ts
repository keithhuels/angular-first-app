import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.css']
})
export class ServerDetailsComponent implements OnInit {

  showSecret = false;
  buttonClicks: Date[] = []
  click = 0

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowSecret(){
    this.showSecret = !this.showSecret;
    this.buttonClicks.push(new Date())

  }


}
