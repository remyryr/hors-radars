import { Component } from '@angular/core';
import {TopicFolderCard} from '../topic-folder-card/topic-folder-card';
import {topics} from './topics.json'
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-topics',
  imports: [
    TopicFolderCard,
    RouterLink
  ],
  templateUrl: './topics.html',
  styleUrl: './topics.css',
  standalone: true
})
export class Topics {
  topics: {title : string, description : string}[];
  constructor() {
    this.topics = topics;
  }
}
