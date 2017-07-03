import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddleComponent } from './paddle.component';

describe('PaddleComponent', () => {
  let component: PaddleComponent;
  let fixture: ComponentFixture<PaddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
