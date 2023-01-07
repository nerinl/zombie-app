import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurvivorComponent } from './add-survivor.component';

describe('AddSurvivorComponent', () => {
  let component: AddSurvivorComponent;
  let fixture: ComponentFixture<AddSurvivorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSurvivorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSurvivorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
