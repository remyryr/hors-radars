import {Component, Input} from '@angular/core';
import {MarkdownComponent} from 'ngx-markdown';

@Component({
  selector: 'app-message',
  imports: [
    MarkdownComponent
  ],
  templateUrl: './message.html',
  styleUrl: './message.css',
  standalone: true
})
export class Message {
  @Input() date: string = '2 décembre 2093 à 12h58';
  @Input() user: string = 'Anonymous';
  @Input() messageID: string = '0';
  @Input() topicID: string = '0';
  @Input() subject: string = '';

  onError($event: string | Error) {
    console.log($event)
  }
}
