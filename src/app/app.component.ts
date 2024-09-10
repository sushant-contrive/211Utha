import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Talk to a 2-1-1 specialist', url: '/folder/inbox', icon: 'mail', imgUrl: 'https://utah211.org/assets/icons/menu_talk@2x.png' },
    { title: 'Text to a 2-1-1 specialist', url: '/folder/outbox', icon: 'paper-plane', imgUrl: 'https://utah211.org/assets/icons/menu_text@2x.png'},
    { title: 'Search volunteer opportunities', url: '/folder/favorites', icon: 'heart', imgUrl: 'https://utah211.org/assets/icons/menu_volunteer@2x.png'},
    { title: 'Set location', url: '/folder/archived', icon: 'archive', imgUrl: 'https://utah211.org/assets/icons/menu_set_location@2x.png' },
    { title: 'Resource PDFs', url: '/folder/trash', icon: 'trash', imgUrl: 'https://utah211.org/assets/icons/qweqw.png' },
    { title: 'Help', url: '/folder/spam', icon: 'warning', imgUrl: 'https://utah211.org/assets/icons/menu_help@2x.png' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
