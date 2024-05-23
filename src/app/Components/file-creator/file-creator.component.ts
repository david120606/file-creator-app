import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/Services/file/file.service';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { FileSnackComponent } from '../file-snack/file-snack.component';
import { FileStateService } from 'src/app/Services/file-state/file-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'file-creator',
  templateUrl: './file-creator.component.html',
  styleUrls: ['./file-creator.component.scss']
})
export class FileCreatorComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  numberCallFunction = 0;
  snackBarRef!: MatSnackBarRef<any> | undefined;
  snackText = '';
  subscription!: Subscription;
  constructor(private fileService: FileService, private _snackBar: MatSnackBar, private fileStateService: FileStateService) { }
  ngOnInit() {
    this.subscription = this.fileStateService.numberCallFunction$.subscribe(value => {
      this.numberCallFunction = value;
      this.updateSnack(value)
    });
  }


  async createFile() {
    this.fileStateService.incrementNumberCallFunction();
    const content = 'Este es el contenido del archivo. ' + 'a'.repeat(1000000); // Simulando un archivo grande
    const fileName = 'mi-archivo-grande.txt';
    await this.fileService.createFile(content, fileName)

    this.fileStateService.decrementNumberCallFunction();
    if (this.fileStateService.getNumberCallFunctionValue() === 0) {
      this._snackBar.dismiss();
      this.snackBarRef = undefined;
    }
  }

  updateSnack(value: number) {
    this.numberCallFunction = value;
    this.snackText = `Creando archivo en segundo plano (${this.numberCallFunction})`;

    if (this.snackBarRef) {
      this.snackBarRef.instance.updateMessage(this.snackText);
    } else if (this.numberCallFunction > 0) {
      this.snackBarRef = this._snackBar.openFromComponent(FileSnackComponent, {
        data: { message: this.snackText },
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: undefined  // Esto hace que el snackbar no se cierre automáticamente
      });

      this.snackBarRef.afterDismissed().subscribe(() => {
        this.snackBarRef = undefined;  // Resetea la referencia cuando el snackbar se cierre
      });
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
