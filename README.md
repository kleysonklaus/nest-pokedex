<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# ejecutar el desarrollo

1.- clonar el repositorio

2.- ejecutar
```
yarn install
```

3 .- tener nest CLI instalado

```
npm i -g @nestjs/cli
```

4.- levantar la base de datos

```
docker-compose up -d
```

5.- Clonar el archivo __.env.template__ y renombrar la copia a __.env__

6.- llenar las variables de entorno definidas en el ```.env```

7.- Ejecutar la aplicación en Dev:

```
yarn start:dev
```

8.- reconstruir la base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```


## stack usado

* MongoDB
* Nest

# notas

Heroku - redeploy sin cambios:

```
git commit --allow-empty -m "tigger Heroku deploy"
git push heroku <master|main>
```

Mi despliegue:
fue en: railway.app
```
https://nest-pokedex-production-255b.up.railway.app/

/api/v2/seed
```
