<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://github.com/Rocketseat/bootcamp-gostack-desafio-02/blob/master/.github/logo.png" width="300px" />
</h1>

<h3 align="center">
  :rocket: [Bootcamp GoStack#10] FastFeet
</h3>

### Desafio
FastFeet é um desafio proposto pelo Bootcamp GoStack#10 da RocketSeat. Tem como objetivo a criação de uma aplicação para a gestão de uma transportadora fictícia.

[Link 1 do desafio](https://github.com/Rocketseat/bootcamp-gostack-desafio-02)<br>
[Link 2 do desafio](https://github.com/Rocketseat/bootcamp-gostack-desafio-03)

### _Features_ até o momento
* Admin consegue se autenticar via Token JWT
* Admin consegue cadastrar Cadastrar e Editar destinatários.

### Instalando Dependências
```sh
git clone ...
cd FastFeet
yarn
```

### Subindo o banco
```sh
mkdir db
docker run -it -p 5432:5432 postgres
```

### Rodando migração e criando usuário Admin
```sh
yarn sequelize db:migrate
yarn sequelize db:seed:all
```

### Subindo a aplicação
```sh
yarn dev
```

### Rotas
| Resource | Method | Params (JSON) | Headers |
| :---     | :---:  |    :---:      |    ---: |
| /session       | POST | {email, password} | |
| /recipient     | POST | {nome, rua, numero, complemento, estado, cep} | JWT |
| /recipient/:id | PUT  | {nome, rua, numero, complemento, estado, cep} | JWT |
