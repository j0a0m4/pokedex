import { Component } from '@angular/core'
import { PokestoreService } from '../pokestore.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pokedex: Array<any>

  constructor(private pokestore: PokestoreService) {}

  getPokedex() {
    this.pokedex = this.pokestore.getPokedex()
  }

  ngOnInit() {
    this.getPokedex()
  }

  ionViewWillEnter() {
    this.getPokedex()
  }

  checkEmpty() {
    if (this.pokedex.length === 0) {
      return true
    } else {
      return false
    }
  }

  onRemove(id) {
    this.pokestore.removeFromPokedex(id)
    this.getPokedex()
  }

  onReset() {
    this.pokestore.clearStorage()
    this.getPokedex()
  }

  ngOnChanges() {
    this.getPokedex()
  }
}
