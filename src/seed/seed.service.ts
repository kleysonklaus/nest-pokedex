import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;

  constructor() { }

  async executeSeed() {
    // console.log(fetch)
    const _url: string = 'https://pokeapi.co/api/v2/pokemon?limit=650';
    const { data } = await this.axios.get<PokeResponse>(_url);

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');

      const no = +segments[segments.length - 2];



      console.log({ name, no });
    });

    return data.results;
  }
}
