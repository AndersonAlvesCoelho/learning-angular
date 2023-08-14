import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PokemonService } from 'src/_serverces/pokemon.service';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [ PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
