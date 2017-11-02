import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHdComponent } from './content-hd.component';

describe('ContentHdComponent', () => {
  let component: ContentHdComponent;
  let fixture: ComponentFixture<ContentHdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentHdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
