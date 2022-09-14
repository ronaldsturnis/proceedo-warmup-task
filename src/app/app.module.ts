import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularMoviesComponent } from './src/components/popular-movies/popular-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './src/components/movie/movie.component';
import { TopRatedMoviesComponent } from './src/components/top-rated/top-rated-movies.component';
import { SearchFieldComponent } from './src/components/search-field/search-field.component';
import { SearchPageComponent } from './src/components/search-page/search-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    MovieComponent,
    TopRatedMoviesComponent,
    SearchFieldComponent,
    SearchPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
