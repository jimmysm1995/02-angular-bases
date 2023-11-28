import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  cambiarNombre(): void {
    this.name = 'Jota';
  }
  cambiarEdad(): void {
    this.age = 47;
  }
  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  public get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public resetear  (): void {
    this.name = 'ironman';
    this.age = 45;
  }
  
}
