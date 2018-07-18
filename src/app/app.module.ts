import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // for input handling
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

// Services
import { AuthService } from './services/auth.service';
import { BackendService } from './services/backend.service';
import { SessionService } from './services/session.service';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CommunicationComponent } from './pages/communication/communication.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    CommunicationComponent,
    LoginComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    BackendService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
