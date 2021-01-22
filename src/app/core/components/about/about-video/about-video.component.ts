import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'dis-about-video',
  templateUrl: './about-video.component.html',
  styleUrls: ['./about-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
