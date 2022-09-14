import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularMoviesComponent } from './src/components/popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './src/components/top-rated/top-rated-movies.component';

const routes: Routes = [
  { path: 'top-rated', component: TopRatedMoviesComponent },
  { path: 'popular', component: PopularMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
