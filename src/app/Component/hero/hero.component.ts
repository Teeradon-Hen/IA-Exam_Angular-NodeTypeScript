import { Component, OnInit } from '@angular/core';
import { HEROES } from './heroList';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes = HEROES;
  myHero?: string;

  onSelect(heroName: string): void {
    this.myHero = heroName;
  }
  constructor() { }

  ngOnInit(): void {
  }
}