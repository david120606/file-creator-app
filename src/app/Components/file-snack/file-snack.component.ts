import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-file-snack',
  templateUrl: './file-snack.component.html',
  styleUrls: ['./file-snack.component.scss']
})
export class FileSnackComponent{

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  updateMessage(message: string): void {
    this.data.message = message;
  }
}
