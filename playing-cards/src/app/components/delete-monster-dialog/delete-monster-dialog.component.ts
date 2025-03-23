import { Component } from '@angular/core';
import { MatDialogActions,MatDialogClose, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-monster-dialog',
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle, 
    MatDialogContent,
    MatButtonModule
  ],
  templateUrl: './delete-monster-dialog.component.html',
  styleUrl: './delete-monster-dialog.component.css'
})
export class DeleteMonsterDialogComponent {

}
