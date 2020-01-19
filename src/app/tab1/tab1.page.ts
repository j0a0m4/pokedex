import { Component } from '@angular/core'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pokemonVal = ''
  pokemon: Object

  constructor() {}

  onKeydown(evt) {
    if (evt.key === 'Enter') {
      this.fetchPokemon()
    }
  }

  onClick() {
    this.fetchPokemon()
  }

  clearInput() {
    this.pokemonVal = ''
    this.pokemon = null
  }

  async fetchPokemon() {
    const query = this.pokemonVal.toLowerCase()
    const API_URL = `https://pokeapi.co/api/v2/pokemon/${query}`

    try {
      const res = await fetch(API_URL)
      const data = await res.json()
      this.pokemon = data
    } catch (err) {
      this.pokemon = null
      console.error(err)
    }
  }
}
