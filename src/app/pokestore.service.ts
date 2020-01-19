import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class PokestoreService {
  pokedex = []
  storage = window.localStorage

  constructor() {
    this.setupStorage()
  }

  getPokedex() {
    return [...this.pokedex]
  }

  addToPokedex(newData) {
    if (!this.pokedex.includes(newData)) {
      this.pokedex = [...this.pokedex, newData]
      this.syncStorage()
    }
  }

  removeFromPokedex(id) {
    this.pokedex = this.pokedex.filter(o => o.id !== id)
    this.syncStorage()
  }

  setupStorage() {
    if (this.storage.getItem('pokedex') === null) {
      this.syncStorage()
    } else {
      const savedPokedex = this.storage.getItem('pokedex')
      this.pokedex = JSON.parse(savedPokedex)
    }
  }

  syncStorage() {
    const data = JSON.stringify(this.getPokedex())
    this.storage.setItem('pokedex', data)
  }

  clearStorage() {
    this.pokedex = []
    this.storage.removeItem('pokedex')
  }
}
