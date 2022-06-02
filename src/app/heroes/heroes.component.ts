import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//no longer need direct reference because we are moving mock data to the hero.service
//import { HEROES } from '../mock-heroes';
//Now importing from HeroService
import { HeroService } from '../hero.service';

//want to be able to use the message service here
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'] //using default app css instead
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  //no longer need direct reference
  //heroes = HEROES;
  //new version
  heroes: Hero[] = [];
  
/*
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero
    id=${hero.id}`);
  }
  */

  //retrieve hero data from the service
  //This was a synchronous operation
  /*
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  */

  //Asynch version of getHeroes()
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((response) => this.heroes = response);
  }
  
  constructor(private heroService: HeroService,
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

}
