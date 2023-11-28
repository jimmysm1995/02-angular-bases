import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Spiderwoman',
    'Hulk',
    'She Hulk',
    'Thor',
    'Wonderwoman'
    ];

  public deleteHeroName?: string;

  removeLastHero(): void {
    this.deleteHeroName =this.heroNames.pop();
  }

  resetList(): void {
    this.heroNames = [
      'Spiderman',
      'Spiderwoman',
      'Hulk',
      'She Hulk',
      'Thor',
      'Wonderwoman'
    ];
  }

}
