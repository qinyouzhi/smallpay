import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ContentReadyComponent } from './content-ready/content-ready.component';
import { ContentDispatchComponent } from './content-dispatch/content-dispatch.component';
import { ContentNoticeComponent } from './content-notice/content-notice.component';
import { LicenceChangeComponent } from './licence-change/licence-change.component';
import { LicenceStyleComponent } from './licence-style/licence-style.component';
import { LicenceAdministrationComponent } from './licence-administration/licence-administration.component'
import { routing } from './app.routings';
import { LicenceDesignComponent } from './licence-design/licence-design.component';
import { ContentNoteComponent } from './content-note/content-note.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    MainContentComponent,
    ContentReadyComponent,
    ContentDispatchComponent,
    ContentNoticeComponent,
    LicenceChangeComponent,
    LicenceStyleComponent,
    LicenceAdministrationComponent,
    LicenceDesignComponent,
    ContentNoteComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'ready',
        pathMatch: 'full'
      },
      {
        path: 'licence_style',
        component: LicenceStyleComponent
      },
      {
        path:'licence_change',
        component:LicenceChangeComponent
      },
      {
        path:'ready',
        component:ContentReadyComponent
      },
      {
        path: 'licence_design',
        component: LicenceStyleComponent
      },
      {
        path: 'note',
        component: ContentNoteComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      }
    ],{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
