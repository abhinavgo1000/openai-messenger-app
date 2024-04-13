import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, DOCUMENT, ViewportScroller } from '@angular/common';
import { 
  Router, 
  RouterOutlet,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEvent, filter, of, map } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';

import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { ScrollUpComponent } from './components/scroll-up/scroll-up.component';
import { DataDialogComponent } from './components/data-dialog/data-dialog.component';

import { DialogRenderData } from './shared/dialog-data/dialog-data';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, '../assets/i18n/', '.json');
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    TranslateModule,
    MatProgressSpinnerModule,
    PageHeaderComponent,
    PageFooterComponent,
    ScrollUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'openai-messenger-app';

  loading$: Observable<boolean> = of(false);

  private readonly document = inject(DOCUMENT);
  private readonly viewport = inject(ViewportScroller);

  readonly showScroll$: Observable<boolean> = fromEvent(
    this.document, 'scroll'
    ).pipe(
      map(() => this.viewport.getScrollPosition()?.[1] > 0)
  );

  constructor(
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loading$ = this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationStart ||
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      ),
      map((e) => e instanceof NavigationStart)
    );
  }

  openDialog(i: number): void {
    const dialogRef = this.dialog.open(DataDialogComponent, {
      data: DialogRenderData[i],
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onScrollToTop(): void {
    this.viewport.scrollToPosition([0, 0]);
  }

}
