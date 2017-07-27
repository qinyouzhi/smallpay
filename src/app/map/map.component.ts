import { Component, OnInit, ViewChild, ElementRef, Renderer, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterContentInit  {
  @ViewChild('iframe') iframe: ElementRef;
  constructor(private renderer: Renderer) { }

  ngOnInit() {
    this.renderer.setElementAttribute(this.iframe.nativeElement,'src','http://182.48.115.38:28088/park/map.html')
  }
  ngAfterContentInit(){
  }
}
