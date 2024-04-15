import { Component } from '@angular/core';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import {VgApiService} from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent {

  preload: string = 'auto';
    api: VgApiService;

    constructor() {}

    onPlayerReady(api: VgApiService) {
        this.api = api;
        this.api.getDefaultMedia().subscriptions.ended.subscribe(
          () => {
              // Set the video to the beginning
              this.api.getDefaultMedia().currentTime = 0;
          }
      );
    }
}
