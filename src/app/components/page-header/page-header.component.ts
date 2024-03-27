import { Component, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {

  @Input() likesCount: number;
	@Input() isActive: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  likeRegistered() {
    this.likesCount += (this.isActive) ? -1 : 1;
		this.isActive = !this.isActive;
  }

  navigateToGithub(): void {
    this.document.location.href = 'https://github.com/abhinavgo1000';
  }

  navigateToLinkedin(): void {
    this.document.location.href = 'https://www.linkedin.com/in/abhinav-goel-41a87a20b/';
  }

  shareOnFacebook(): void {
    var url = 'http://www.facebook.com/sharer.php';
    url += '?u=' + encodeURIComponent(window.location.href);
    this.popup(url);
  }

  shareOnTwitter(): void {
    var url = 'http://twitter.com/share?';
    url += 'text=' + encodeURIComponent(document.title);
    url += '&url=' + encodeURIComponent(window.location.href);
    url += '&counturl=' + encodeURIComponent(window.location.href);
    this.popup(url);
  }

  shareOnLinkedin(): void {
    var url = 'https://www.linkedin.com/sharing/share-offsite/';
    url += '?u=' + encodeURIComponent(window.location.href);
    this.popup(url);
  }

  popup(url: string) {
    window.open(url, '', 'toolbar=0,status=0,width=626, height=436');
  }
}
