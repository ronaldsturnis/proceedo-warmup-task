import { Component } from '@angular/core';
import { paths } from './paths.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'proceedo-warmup-task';
  readonly routingPaths = paths;
}
