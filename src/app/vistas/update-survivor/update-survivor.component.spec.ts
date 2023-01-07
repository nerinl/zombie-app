import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSurvivorComponent } from './update-survivor.component';

describe('UpdateSurvivorComponent', () => {
  let component: UpdateSurvivorComponent;
  let fixture: ComponentFixture<UpdateSurvivorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSurvivorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSurvivorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
