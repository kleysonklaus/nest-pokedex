import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';

@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>
  ) { }

  async executeSeed() {
    // console.log(fetch)
    const _url: string = 'https://pokeapi.co/api/v2/pokemon?limit=10';
    const { data } = await this.axios.get<PokeResponse>(_url);

    const pokemons = data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');

      const no = +segments[segments.length - 2];

      // console.log({ name, no });
      const newPokemon: CreatePokemonDto = {
        no,
        name
      };

      await this.pokemonModel.create(newPokemon);
      // return newPokemon;
    });

    console.log(data.results);

    // await this.pokemonModel.createCollection(pokemons);

    return data.results;
  }
}
