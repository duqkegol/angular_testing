import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-josue',
  templateUrl: './josue.component.html',
  styleUrls: ['./josue.component.css']
})
export class JosueComponent implements OnInit {
  mipr: string = '';
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.mipr = 'Otro Algo';
    }, 5000)
  }

}
