import {Component, EventEmitter, Input, Output, output} from '@angular/core';
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
export class Message{
  @Input() date: string = '2 décembre 2093 à 12h58';
  @Input() user: string = 'Anonymous';
  @Input() messageID: string = '0';
  @Input() topicID: string = '0';
  @Input() subject: string = '';
  @Output() ready = new EventEmitter<null>();

  loaded() {
    const a = document.querySelector('markdown a')
    if(a && a.id !== "doc") {
      a.id = "doc";
      a.setAttribute('target', '_blank');
      const icon = document.createElement("span")
      icon.textContent = 'docs'
      icon.className = "material-symbols-outlined"
      icon.style.fontSize = "3em"
      a.insertBefore(icon, a.firstChild)
    }
    this.ready.emit()
  }
}
