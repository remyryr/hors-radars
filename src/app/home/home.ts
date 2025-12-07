import { Component } from '@angular/core';
import {TopicFolderCard} from '../topic-folder-card/topic-folder-card';
import {RouterLink} from '@angular/router';
import {RightBar} from '../right-bar/right-bar';

@Component({
  selector: 'app-home',
  imports: [
    TopicFolderCard,
    RouterLink,
    RightBar
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {

  protected readonly window = window;
}
