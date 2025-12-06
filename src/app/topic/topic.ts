import {Component, inject, Input} from '@angular/core';
import {Header} from '../header/header';
import {Message} from '../message/message';
import {messages} from './messages.json'
import {ActivatedRoute} from "@angular/router";
import {MarkdownComponent} from 'ngx-markdown';
import {NgStyle} from '@angular/common';
@Component({
  selector: 'app-topic',
  imports: [
    Header,
    Message,
    MarkdownComponent,
    NgStyle
  ],
  templateUrl: './topic.html',
  styleUrl: './topic.css',
  standalone: true
})
export class Topic {
  @Input() id: number;

  private route = inject(ActivatedRoute);
  messages: {user : string, date : string, subject : string}[];
  constructor() {
    const snapshot = this.route.snapshot;
    this.id = snapshot.params['id'];
    this.messages = messages[this.id];
  }
}
