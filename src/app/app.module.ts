import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularMoviesComponent } from './src/components/popular-movies/popular-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './src/components/movie/movie.component';
import { TopRatedMoviesComponent } from './src/components/top-rated/top-rated-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    MovieComponent,
    TopRatedMoviesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
