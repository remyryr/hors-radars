import {Component, inject, Input, NgZone} from '@angular/core';
import {Message} from '../message/message';
import {messages} from './messages.json'
import {ActivatedRoute} from "@angular/router";
import {NgStyle} from '@angular/common';
import {topics} from '../topics/topics.json'

@Component({
  selector: 'app-topic',
  imports: [
    Message,
    NgStyle
  ],
  templateUrl: './topic.html',
  styleUrl: './topic.css',
  standalone: true
})
export class Topic {
  zone = inject(NgZone)
  @Input() id: number;
  title: string = '';
  private route = inject(ActivatedRoute);
  messages: { user: string, date: string, subject: string }[];
  ready: number = 0;
  messagesCount: number = 0;

  constructor() {
    const snapshot = this.route.snapshot;
    this.id = snapshot.params['id'];
    this.title = topics[this.id].title;
    this.messages = messages[this.id];
  }

  newReady() {
    this.ready++
  }

  testCondition(user: string) {
    if (user === 'event') {
      this.newReady()
      return true;
    }
    return false;
  }

  addMessage() {
    this.messagesCount++;
    return this.messagesCount-1;
  }
}
