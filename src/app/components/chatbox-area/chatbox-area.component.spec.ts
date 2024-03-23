import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatboxAreaComponent } from './chatbox-area.component';

describe('ChatboxAreaComponent', () => {
  let component: ChatboxAreaComponent;
  let fixture: ComponentFixture<ChatboxAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatboxAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatboxAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
