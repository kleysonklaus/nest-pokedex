import { Module } from '@nestjs/common';

import { join } from 'path';

import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    // MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    MongooseModule.forRoot(process.env.MONGODB),

    PokemonModule,

    CommonModule,

    SeedModule
  ],
  controllers: []

})
export class AppModule {

  constructor() {
    /// aqui se muestra todas las variables de entorno
    // console.log(process.env);
  }
}
