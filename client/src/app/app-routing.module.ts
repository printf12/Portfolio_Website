import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { CreateBlogFormComponent } from './blog/create-blog-form/create-blog-form.component';
import { BlogViewDetailsComponent } from './blog/blog-view-details/blog-view-details.component';
import{PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreatePortfolioFormComponent } from './portfolio/create-portfolio-form/create-portfolio-form.component';
import { ViewPortfolioDetailsComponent } from './portfolio/view-portfolio-details/view-portfolio-details.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'createBlog', component: CreateBlogFormComponent},
  { path: 'blogView/:id', component: BlogViewDetailsComponent},
  { path: 'portfolioView/:id', component: ViewPortfolioDetailsComponent},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'createPortfolio', component: CreatePortfolioFormComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
