import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramingSkillsComponent } from './programing-skills.component';

describe('ProgramingSkillsComponent', () => {
  let component: ProgramingSkillsComponent;
  let fixture: ComponentFixture<ProgramingSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramingSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramingSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
