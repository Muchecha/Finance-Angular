import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HTTPStatus, LoaderInterceptor } from './interceptor/loader.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthGuard } from './pages/guards/auth-guard.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatDividerModule} from '@angular/material/divider';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const RxJS = [LoaderInterceptor, HTTPStatus];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CommonModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,  

    BrowserAnimationsModule,
    NgxSpinnerModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [
    AuthGuard,
    RxJS,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  exports:
  [
    CommonModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }