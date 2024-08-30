import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebworksComponent } from './webworks.component';

describe('WebworksComponent', () => {
  let component: WebworksComponent;
  let fixture: ComponentFixture<WebworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebworksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
