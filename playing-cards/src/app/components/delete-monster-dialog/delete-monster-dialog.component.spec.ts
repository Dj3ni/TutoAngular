import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMonsterDialogComponent } from './delete-monster-dialog.component';

describe('DeleteMonsterDialogComponent', () => {
  let component: DeleteMonsterDialogComponent;
  let fixture: ComponentFixture<DeleteMonsterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteMonsterDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMonsterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
