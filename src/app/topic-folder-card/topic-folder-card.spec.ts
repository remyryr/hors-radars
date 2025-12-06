import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicFolderCard } from './topic-folder-card';

describe('TopicFolder', () => {
  let component: TopicFolderCard;
  let fixture: ComponentFixture<TopicFolderCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicFolderCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicFolderCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
