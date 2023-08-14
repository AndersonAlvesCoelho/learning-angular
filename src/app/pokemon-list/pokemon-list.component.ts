import { Component } from '@angular/core';
import { PokemonService } from 'src/_serverces/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {

  constructor(
    public PokemonService: PokemonService
  ){}
}
