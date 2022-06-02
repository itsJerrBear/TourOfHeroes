import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
//we want getHeroes to return an observable
//Angular httpclient.get() function which we want to use returns an observable
//necessary to use this to utilize asynch return, instead of unreliable synch return
import { Observable, of } from 'rxjs'; 

//bring in the new message service
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

/* THIS IS A SYNCHRONOUS OPERATION
  getHeroes(): Hero[] {
    return HEROES;
  }
*/

//Better Asynch operation
getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  this.messageService.add('HeroService: fetched heroes');
  return heroes;
}

getHero(id: number): Observable<Hero> {
  // For now, assume that a hero with the specified `id` always exists.
  // Error handling will be added in the next step of the tutorial.
  const hero = HEROES.find(h => h.id === id)!;
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(hero);
}

//adding a message service to the hero service
constructor(private messageService: MessageService) { }}
