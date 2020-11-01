import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {MainLayoutComponent} from './shared/layouts/main-layout/main-layout.component'
import {CalendarComponent} from './shared/components/calendar/calendar.component'
import {SelectorComponent} from './shared/components/selector/selector.component'
import {OrganizerComponent} from './shared/components/organizer/organizer.component'
import {MomentPipe} from './shared/pipes/moment.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
