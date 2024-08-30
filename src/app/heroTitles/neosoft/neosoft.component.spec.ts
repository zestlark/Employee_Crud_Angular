import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeosoftComponent } from './neosoft.component';

describe('NeosoftComponent', () => {
  let component: NeosoftComponent;
  let fixture: ComponentFixture<NeosoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeosoftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
