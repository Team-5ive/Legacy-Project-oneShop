import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatFormComponent } from './updat-form.component';

describe('UpdatFormComponent', () => {
  let component: UpdatFormComponent;
  let fixture: ComponentFixture<UpdatFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
