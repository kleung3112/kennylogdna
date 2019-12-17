import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { VnavComponent } from './vnav/vnav.component';
import { ArticlesComponent } from './articles/articles.component';
import { HeaderComponent } from './header/header.component';

import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    MainareaComponent,
    VnavComponent,
    ArticlesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
