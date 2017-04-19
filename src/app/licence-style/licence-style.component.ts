import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licence-style',
  templateUrl: './licence-style.component.html',
  styleUrls: ['./licence-style.component.css']
})
export class LicenceStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onArrowDown (_arrowDown: any, _arrowDownParent: any) {
    alert(9)
  }
}
