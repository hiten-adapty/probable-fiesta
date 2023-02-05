import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddContactComponent } from './dashboard/add-contact/add-contact.component';
import { ShowAllContactsComponent } from './dashboard/show-all-contacts/show-all-contacts.component';
import { SearchContactsComponent } from './dashboard/search-contacts/search-contacts.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './services/user.services';

@NgModule({
  declarations: [
    AppComponent,
    ContactItemComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddContactComponent,
    ShowAllContactsComponent,
    SearchContactsComponent,
    SettingsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
