import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChatComponent implements OnInit {
  public msgToPrint: { received: boolean; value: string }[] = [
    { received: true, value: 'ciao' },
  ];
  public currentMsg: string = '';

  constructor() {}

  public ngOnInit(): void {}

  public onMsgInput(e: Event): void {
    e as InputEvent;
    if (e instanceof InputEvent) this.currentMsg += e.data;
  }

  public onSendClick(): void {
    if (!!this.currentMsg) {
      this.msgToPrint.push({ received: false, value: this.currentMsg });
      this.currentMsg = '';
    }
  }
}
