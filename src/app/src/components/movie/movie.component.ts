import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/src/interfaces/IMovie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.less'],
})
export class MovieComponent implements OnInit {
  @Input() movieData!: IMovie;
  movieCardImage!: string;

  constructor() {}

  ngOnInit(): void {}
}
