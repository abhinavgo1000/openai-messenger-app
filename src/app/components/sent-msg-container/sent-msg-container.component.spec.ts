import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentMsgContainerComponent } from './sent-msg-container.component';

describe('SentMsgContainerComponent', () => {
  let component: SentMsgContainerComponent;
  let fixture: ComponentFixture<SentMsgContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SentMsgContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SentMsgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
