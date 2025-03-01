import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterNotFoundComponent } from './monster-not-found.component';

describe('MonsterNotFoundComponent', () => {
  let component: MonsterNotFoundComponent;
  let fixture: ComponentFixture<MonsterNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterNotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
