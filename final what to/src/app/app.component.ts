import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input #sat (keyup.enter)="onEnter(sat.value);  sat.value=''"  placeholder="What's up on Sat?"class="city"/>
    <p class="list">{{value}}</p>
    <input #sun (keyup.enter)="onPress(sun.value); sun.value=''" placeholder="What's up on Sun?" class="city">
    <p class="list">{{value1}}</p>
    <input #mon (keyup.enter)="onPre(mon.value); mon.value=''" placeholder="What's up on Mon?" class="city">
    <p class="list">{{value2}}</p>
    <input #tue (keyup.enter)="onPr(tue.value); tue.value=''" placeholder="What's up on Tue?" class="city">
    <p class="list">{{value3}}</p>
    <input #wed (keyup.enter)="onP(wed.value); wed.value=''" placeholder="What's up on Wed?" class="city">
    <p class="list">{{value4}}</p>
    <input #thu (keyup.enter)="on(thu.value); thu.value=''" placeholder="What's up on Thu?" class="city">
    <p class="list">{{value5}}</p>
    <input #fri (keyup.enter)="o(fri.value); fri.value=''" placeholder="What's up on Fri?" class="city">
    <p class="list">{{value6}}</p>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  value = '' ;
  onEnter(value: string) { this.value = value + " OR take the fisrt flight to Madeira"; }
  value1 = '';
  onPress(value: string) { this.value1 = value + " OR buy tickets for \"Romeo et Juliette\" in The Metropolitan Opera, New York "; }
  value2 = '';
  onPre(value: string) { this.value2 = value + " OR have have a cup of coffee in \"Cafe Tortoni\", Buenos Aires"; }
  value3 = '';
  onPr(value: string) { this.value3 = value + " OR have a flight from Westray to Papa Westray, one of the shortest flights on the planet (2min)"; }
  value4 = '';
  onP(value: string) { this.value4 = value + " OR book a great dinner in \"Osteria Francescana\" in Modena, Italy"; }
  value5 = '';
  on(value: string) { this.value5 = value + " OR go for a lovely run at the Isle of Lewis while seeing Calanais Standing Stones"; }
  value6 = '';
  o(value: string) { this.value6 = value + " OR take a 22 day cruise from San Juan, through Barbados and back to San Juan" ; }
}
