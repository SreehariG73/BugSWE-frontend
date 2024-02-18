import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntaryDisclosureComponent } from './voluntary-disclosure.component';

describe('VoluntaryDisclosureComponent', () => {
  let component: VoluntaryDisclosureComponent;
  let fixture: ComponentFixture<VoluntaryDisclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoluntaryDisclosureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoluntaryDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
