import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webworks3Component } from './webworks3.component';

describe('Webworks3Component', () => {
  let component: Webworks3Component;
  let fixture: ComponentFixture<Webworks3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Webworks3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Webworks3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
