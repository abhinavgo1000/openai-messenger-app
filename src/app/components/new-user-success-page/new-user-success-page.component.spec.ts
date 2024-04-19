import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserSuccessPageComponent } from './new-user-success-page.component';

describe('NewUserSuccessPageComponent', () => {
  let component: NewUserSuccessPageComponent;
  let fixture: ComponentFixture<NewUserSuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewUserSuccessPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewUserSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
