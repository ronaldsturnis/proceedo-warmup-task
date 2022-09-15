import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { paths } from './paths.const';
import { PopularMoviesComponent } from './src/components/popular-movies/popular-movies.component';
import { SearchPageComponent } from './src/components/search-page/search-page.component';
import { TopRatedMoviesComponent } from './src/components/top-rated/top-rated-movies.component';

const routes: Routes = [
  {
    path: paths.landingPagePath,
    redirectTo: paths.topRatedMoviesPath,
    pathMatch: 'full',
  },
  { path: paths.topRatedMoviesPath, component: TopRatedMoviesComponent },
  { path: paths.popularMoviesPath, component: PopularMoviesComponent },
  { path: paths.searchResultsPath, component: SearchPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
