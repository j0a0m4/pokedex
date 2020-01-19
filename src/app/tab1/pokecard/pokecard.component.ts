import { Component, OnInit, Input } from '@angular/core'
import { PokestoreService } from 'src/app/pokestore.service'

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {
  @Input() pokemon: any
  types: Array<String>
  moves: Array<String>
  image: string
  saved: boolean

  constructor(private pokestore: PokestoreService) {}

  getTypes() {
    this.types = this.pokemon.types.map(e => e.type.name)
  }
  getMoves() {
    this.moves = this.pokemon.moves.map(e => e.move.name)
  }

  getImage() {
    const URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png`
    this.image = URL
  }

  onClick() {
    this.pokestore.addToPokedex({ ...this.pokemon, image: this.image })
    this.checkSaved()
  }

  checkSaved() {
    if (this.pokestore.getPokedex().find(o => o.id === this.pokemon.id)) {
      this.saved = true
    } else {
      this.saved = false
    }
  }

  ngOnChanges() {
    this.getImage()
    this.getTypes()
    this.getMoves()
    this.checkSaved()
  }

  ngOnInit() {}
}
