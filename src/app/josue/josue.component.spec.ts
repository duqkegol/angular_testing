import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JosueComponent } from './josue.component';

describe('JosueComponent', () => {
  let component: JosueComponent;
  let fixture: ComponentFixture<JosueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JosueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JosueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
