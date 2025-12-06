import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-topic-folder-card',
  imports: [],
  templateUrl: './topic-folder-card.html',
  styleUrl: './topic-folder-card.css',
  standalone: true
})
export class TopicFolderCard {
  @Input() folderTitle: string = "Titre";
  @Input() description: string = "Description";
  @Input() icon: string = 'Abc';

}
