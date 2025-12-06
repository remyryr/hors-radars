import { Component } from '@angular/core';
import {TopicFolderCard} from '../topic-folder-card/topic-folder-card';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    TopicFolderCard,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {

}
