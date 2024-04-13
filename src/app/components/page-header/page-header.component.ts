import { Component, Inject, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';

import * as LikeActions from '../../store/like/like.actions';
import * as LikeSelectors from '../../store/like/like.selector';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatBadgeModule
  ],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {

  @Output() openDialog = new EventEmitter();

	isActive: boolean;

  toggleSearch = false;
  searchText = '';

  @ViewChild('searchbar') searchbar: ElementRef;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private store: Store<AppState>) {
      this.store.select(LikeSelectors.selectIsLiked).subscribe(state => {
        this.isActive = state;
      });
    }

  likeRegistered() {
		if (this.isActive) {
      this.store.dispatch(LikeActions.unlike());
    } else {
      this.store.dispatch(LikeActions.like());
    }
  }

  navigateToGithub(): void {
    this.document.location.href = 'https://github.com/abhinavgo1000';
  }

  navigateToLinkedin(): void {
    this.document.location.href = 'https://www.linkedin.com/in/abhinav-goel-41a87a20b/';
  }

  goToWelcome() {
    this.openDialog.emit(0);
  }

  goToCheck() {
    this.openDialog.emit(1);
  }

  navigateToProfile() {
    this.openDialog.emit(2);
  }

  navigateToAccount() {
    this.openDialog.emit(3);
  }

  openSearchBar() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }

  closeSearchBar() {
    this.searchText = '';
    this.toggleSearch = false;
  }
}
