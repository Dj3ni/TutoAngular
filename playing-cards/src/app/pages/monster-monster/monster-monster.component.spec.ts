import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterMonsterComponent } from './monster-monster.component';

describe('MonsterMonsterComponent', () => {
  let component: MonsterMonsterComponent;
  let fixture: ComponentFixture<MonsterMonsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterMonsterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
