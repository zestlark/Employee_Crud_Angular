import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTitleComponent } from './management-title.component';

describe('ManagementTitleComponent', () => {
  let component: ManagementTitleComponent;
  let fixture: ComponentFixture<ManagementTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagementTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
