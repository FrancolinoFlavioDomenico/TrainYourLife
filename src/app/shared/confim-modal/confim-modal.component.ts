import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confim-modal',
  templateUrl: './confim-modal.component.html',
  styleUrls: ['./confim-modal.component.scss'],
})
export class ConfimModalComponent implements OnInit {
  constructor(private _dialogRef: MatDialogRef<ConfimModalComponent>) {}

  ngOnInit(): void {}

  public onCancel(): void {
    this._dialogRef.close(false);
  }

  public onConfirm(): void {
    this._dialogRef.close(true);
  }
}
