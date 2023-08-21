import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokemonModule } from 'src/pokemon/pokemon.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService, PokemonService],
  imports: [PokemonModule],
})
export class SeedModule { }