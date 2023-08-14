import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Pokemon } from 'src/_model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  public pokemons: Pokemon[] = [];

  constructor(
    private httpClient: HttpClient,
  ) {
    const allPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

    this.httpClient.get<any>(allPokemonsUrl).pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this.httpClient.get(v.url)),
        );
      }),
      mergeMap(value => value),
    ).subscribe((result: any) => this.pokemons[result.id] = {
      image: result.sprites.front_default,
      number: result.id,
      name: result.name,
      types: result.types.map((t: any) => t.type.name),
    });
  }
}
