import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanAssistComponent } from './human-assist.component';

describe('HumanAssistComponent', () => {
  let component: HumanAssistComponent;
  let fixture: ComponentFixture<HumanAssistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanAssistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
