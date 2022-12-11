
## Como rodar o projeto

#### O que você precisa ter instalado em sua máquina:
 🍃[ Node.js ]<br/>
 💻[ Git ]<br/>
 💿[ MySql ]<br/>
 ⌨[ yarn (opcional) ]
 

<br/>

- Clone o projeto: 

```bash
git clone https://github.com/kauan777/backend-curseduca-ps.git
````

<br/>

- Crie o banco de dados no seu MySql

```mysql
  CREATE DATABASE db_curseduca_test;
 ```

<br/>

- Na pasta <b>uploads</b> adicione a pasta <b>posts</b>

```bash
 #Exemplo
 📁uploads
   📁users
   ➕posts
 ```
 
 <br/>
 
- Adicione um arquivo .env na raiz do seu projeto com as informações abaixo

```.env
DATABASE_URL="mysql://USER:PASSWORD@localhost:PORT/db_curseduca_test"
JWT_KEY="CURSEDUCACURSEDUCACURSEDUCACURSEDUCACURSEDUCA"
````

 <br/>

- Troque as informações no arquivo .env pelas suas:
```js
// USER = Nome do usuário (normalmente é root)

// PASSWORD = Sua senha 
// Se sua senha tiver caractere especial, substitua conforme o site: https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding

// PORT = Porta que está rodando seu MySql (por padrão é 3306)
```

<br/>

- Instale as dependências

```bash
npm install
# ou
yarn 
```

<br/>

- Faça a migração

```bash
npm run migrate
# ou
yarn migrate
```


<br/>

- Comece a usar

```bash
npm run dev
# ou
yarn 
```





