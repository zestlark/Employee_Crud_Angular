import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webworks2Component } from './webworks2.component';

describe('Webworks2Component', () => {
  let component: Webworks2Component;
  let fixture: ComponentFixture<Webworks2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Webworks2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Webworks2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
