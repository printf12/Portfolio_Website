import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule}   from '@angular/forms';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CreateBlogFormComponent } from './blog/create-blog-form/create-blog-form.component';
import { BlogViewDetailsComponent } from './blog/blog-view-details/blog-view-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { CreatePortfolioFormComponent } from './portfolio/create-portfolio-form/create-portfolio-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent,
    CreateBlogFormComponent,
    BlogViewDetailsComponent,
    PageNotFoundComponent,
    CreatePortfolioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DpDatePickerModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
