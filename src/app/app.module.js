"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header/header.component');
var main_nav_component_1 = require('./main-nav/main-nav.component');
var main_content_component_1 = require('./main-content/main-content.component');
var content_ready_component_1 = require('./content-ready/content-ready.component');
var content_dispatch_component_1 = require('./content-dispatch/content-dispatch.component');
var content_notice_component_1 = require('./content-notice/content-notice.component');
var licence_change_component_1 = require('./licence-change/licence-change.component');
var licence_style_component_1 = require('./licence-style/licence-style.component');
var licence_administration_component_1 = require('./licence-administration/licence-administration.component');
var licence_design_component_1 = require('./licence-design/licence-design.component');
var content_note_component_1 = require('./content-note/content-note.component');
var calendar_component_1 = require('./calendar/calendar.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                main_nav_component_1.MainNavComponent,
                main_content_component_1.MainContentComponent,
                content_ready_component_1.ContentReadyComponent,
                content_dispatch_component_1.ContentDispatchComponent,
                content_notice_component_1.ContentNoticeComponent,
                licence_change_component_1.LicenceChangeComponent,
                licence_style_component_1.LicenceStyleComponent,
                licence_administration_component_1.LicenceAdministrationComponent,
                licence_design_component_1.LicenceDesignComponent,
                content_note_component_1.ContentNoteComponent,
                calendar_component_1.CalendarComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: 'ready',
                        pathMatch: 'full'
                    },
                    {
                        path: 'licence_style',
                        component: licence_style_component_1.LicenceStyleComponent
                    },
                    {
                        path: 'many',
                        component: licence_administration_component_1.LicenceAdministrationComponent
                    },
                    {
                        path: 'dispatch',
                        component: content_dispatch_component_1.ContentDispatchComponent
                    },
                    {
                        path: 'licence_change',
                        component: licence_change_component_1.LicenceChangeComponent
                    },
                    {
                        path: 'ready',
                        component: content_ready_component_1.ContentReadyComponent
                    },
                    {
                        path: 'licence_design',
                        component: licence_design_component_1.LicenceDesignComponent
                    },
                    {
                        path: 'note',
                        component: content_note_component_1.ContentNoteComponent
                    },
                    {
                        path: 'calendar',
                        component: calendar_component_1.CalendarComponent
                    }
                ], { useHash: true })
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
