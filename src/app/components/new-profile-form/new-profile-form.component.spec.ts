import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfileFormComponent } from './new-profile-form.component';

describe('NewProfileFormComponent', () => {
  let component: NewProfileFormComponent;
  let fixture: ComponentFixture<NewProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewProfileFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
