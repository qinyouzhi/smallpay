"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onSideNav = function (sideNav) {
        var body = document.getElementsByTagName('body')[0];
        var windowW = window.innerWidth;
        if (body.className == 'notice-show') {
            body.className = 'hide-sidebar';
        }
        else if (body.className != 'hide-sidebar') {
            body.className = 'hide-sidebar';
        }
        else {
            body.className = '';
        }
        if (windowW < 769) {
            if (body.className == 'notice-show') {
                body.className = '';
            }
        }
    };
    HeaderComponent.prototype.onNotice = function (notice) {
        event.preventDefault();
        var body = document.getElementsByTagName('body')[0];
        var windowW = window.innerWidth;
        if (body.className == 'notice-show') {
            body.className = '';
        }
        else if (body.className == '') {
            body.className = 'notice-show';
        }
        else if (body.className != 'hide-sidebar notice-show') {
            body.className = 'hide-sidebar notice-show';
        }
        else {
            body.className = 'hide-sidebar';
        }
    };
    HeaderComponent.prototype.onCalendar = function (calender, grid) {
        if (grid.className == 'jiugongge animated flipInX row hide box-shadow-dark') {
            grid.className = 'jiugongge animated flipInX row box-shadow-dark';
        }
        else {
            grid.className = 'jiugongge animated flipInX row hide box-shadow-dark';
        }
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
