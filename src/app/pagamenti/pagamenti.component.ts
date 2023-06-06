import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ConfimModalComponent } from '../shared/component/confim-modal/confim-modal.component';

@Component({
  selector: 'app-pagamenti',
  templateUrl: './pagamenti.component.html',
  styleUrls: ['./pagamenti.component.scss'],
})
export class PagamentiComponent implements OnInit {
  public isPaypal = false;

  public paymentForm: FormGroup;

  constructor(
    private _modalServie: MatDialog,
    private _dialogRef: MatDialogRef<ConfimModalComponent>
  ) {}

  public ngOnInit(): void {
    this.paymentForm = new FormGroup({
      cardNumber: new FormControl(null),
      cvv: new FormControl(null),
    });
    this.setIsPayPal(false);
  }

  public onConfirmClick(): void {}

  public setIsPayPal(value: boolean) {
    this.isPaypal = value;
    if (this.isPaypal) {
      this.paymentForm.removeControl('cardNumber');
      this.paymentForm.removeControl('cvv');
      this.paymentForm.addControl(
        'mail',
        new FormControl(null, [Validators.required, Validators.email])
      );
    } else {
      this.paymentForm.removeControl('mail');
      this.paymentForm.addControl(
        'cardNumber',
        new FormControl(null, Validators.required)
      );
      this.paymentForm.addControl(
        'cvv',
        new FormControl(null, [Validators.required])
      );
    }
  }
  public onConfirm(): void {
    this._modalServie.open(ConfimModalComponent, {
      width: '300px',
      height: '50px',
      data: {
        msgBody: 'Registrazione avvenuta con successo',
        isSuccessfulModal: true,
      },
    });
    this._dialogRef.close();
  }

  public onCancel(): void {
    this._dialogRef.close();
  }
}
