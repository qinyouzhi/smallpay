import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
  }

  onSideNav (sideNav: any) {
    const body = document.getElementsByTagName('body')[0]
    let windowW = window.innerWidth
    if (body.className != 'hide-sidebar') {
      body.className = 'hide-sidebar'
    } else {
      body.className = ''
    }
    if(windowW < 769){
      if(body.className == 'notice-show'){
        body.className = ''
      }
    }
  }

  onNotice (notice: any) {
    event.preventDefault()
    const body = document.getElementsByTagName('body')[0]
    let windowW = window.innerWidth
    if (body.className != 'notice-show') {
      body.className = 'notice-show'
    } else {
      body.className = ''
    }
  }
  onCalendar (calender: any, grid: any){
    if(grid.className == 'jiugongge animated flipInX row hide box-shadow-dark'){
      grid.className = 'jiugongge animated flipInX row box-shadow-dark'
    }else{
      grid.className = 'jiugongge animated flipInX row hide box-shadow-dark'
    }
  }
}
