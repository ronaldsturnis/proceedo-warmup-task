import { Component, OnInit } from '@angular/core';
import { paths } from './paths.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'proceedo-warmup-task';
  routingPaths?: any;

  ngOnInit(): void {
    this.routingPaths = paths;
  }
}
