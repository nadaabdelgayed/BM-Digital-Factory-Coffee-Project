import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';


import {GalleriaModule} from 'primeng/galleria';

import { SwiperModule } from 'swiper/angular';
import {DataViewModule} from 'primeng/dataview';

import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {CarouselModule} from 'primeng/carousel';
import {  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    ReactiveFormsModule,
    PanelModule,
    DialogModule,
    RatingModule,
    RippleModule,
    CarouselModule,
    GalleriaModule,
    SwiperModule,
    DataViewModule
    

  ],
  declarations: [ RegisterComponent, LoginComponent, ProfileComponent],
})
export class UserModule { }
