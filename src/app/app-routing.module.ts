import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularMoviesComponent } from './src/components/popular-movies/popular-movies.component';
import { SearchPageComponent } from './src/components/search-page/search-page.component';
import { TopRatedMoviesComponent } from './src/components/top-rated/top-rated-movies.component';

const routes: Routes = [
  { path: 'top-rated', component: TopRatedMoviesComponent },
  { path: 'popular', component: PopularMoviesComponent },
  { path: 'search-results', component: SearchPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
