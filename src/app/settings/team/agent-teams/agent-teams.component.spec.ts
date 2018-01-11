import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentTeamsComponent } from './agent-teams.component';

describe('AgentTeamsComponent', () => {
  let component: AgentTeamsComponent;
  let fixture: ComponentFixture<AgentTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
