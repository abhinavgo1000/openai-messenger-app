import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateToolbarComponent } from './translate-toolbar.component';

describe('TranslateToolbarComponent', () => {
  let component: TranslateToolbarComponent;
  let fixture: ComponentFixture<TranslateToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranslateToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
