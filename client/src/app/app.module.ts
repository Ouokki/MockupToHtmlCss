import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NavbarAppComponent } from './Components/navbar-app/navbar-app.component';
import { IndexContentComponent } from './Components/index-content/index-content.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { HelpComponent } from './Pages/help/help.component';
import { AboutComponent } from './Pages/about/about.component';
import { LoginComponent } from './Components/login/login.component';

import { RegistrationComponent } from './Components/registration/registration.component';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-interceptor.service';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { RegistrationPageComponent } from './Pages/registration-page/registration-page.component';
import { AcceuilComponent } from './Pages/acceuil/acceuil.component';
import { ProgressComponent } from './Component/progress/progress.component';
import { DndDirective } from './directives/dnd.directive';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {CardModule} from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { AuthGuardService } from './service/auth-guard.service';
import { ProfileComponent } from './Pages/edit/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarAppComponent,
    IndexContentComponent,
    HomeComponent,
    ProjectsComponent,
    HelpComponent,
    AboutComponent,
    LoginComponent,
    RegistrationComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    AcceuilComponent,
    ProgressComponent,
    DndDirective,
    ProfileComponent,

  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2PageScrollModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    CheckboxModule,
    CardModule,
    BrowserAnimationsModule,
    FileUploadModule,


    
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true
  },AuthGuardService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}
