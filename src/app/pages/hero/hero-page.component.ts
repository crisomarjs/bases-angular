import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  imports: [ UpperCasePipe ]
})
export class HeroPageComponent {

  name = signal('Ironman')
  age = signal(45)

  heroDescription = computed(() => {
    const desciption = `${this.name()} - ${this.age()}`

    return desciption
  })

  capitalizeName = computed(() => this.name().toUpperCase())

  /*getHeroDescription(){
    return `${this.name()} - ${this.age()}`
  }*/

  changeHero(){
    this.name.set( 'Spiderman' )
    this.age.set(  22 )
  }

  resetForm(){
    this.name.set('Ironman')
    this.age.set(45)
  }

  chageAge(){
    this.age.set( 60 )
  }

}
