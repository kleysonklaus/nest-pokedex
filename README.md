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

5.- reconstruir la base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```


## stack usado

* MongoDB
* Nest