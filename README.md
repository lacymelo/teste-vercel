## 💻 Projeto Teste Vercel


## 🚀 Tecnologias e Comandos de Execução

---

```cl
  💻 Comando para criar o projeto
  - ✨ yarn init -y


  🛠️ Comando para instalar o typescript
  - ✨ yarn add typescript -D


  🛠️ Comando para criar o arquivo de configuração do typescript
  - ✨ yarn tsc --init


  🛠️ Biblioteca para o node entender código typescript e executar como javascript
  - ✨ yarn add ts-node -D


  🛠️ Biblioteca para executar o servidor
  - ✨ yarn add ts-node-dev -D


  🛠️ Biblioteca para requisições, rotas e URLs, entre outras funcionalidades
  - ✨ yarn add express
  - ✨ yarn add @types/express -D


  🛠️ Biblioteca para validação de um usuário
  - ✨ yarn add jsonwebtoken
  - ✨ yarn add @types/jsonwebtoken -D


  🛠️ Biblioteca para criptografar senha
  - ✨ yarn add bcryptjs
  - ✨ yarn add @types/bcryptjs -D


  🛠️ Biblioteca para adicionar o prisma no projeto
  - ✨ yarn add prisma
  - ✨ yarn add prisma -D


  🛠️ Instalar prisma client
  - ✨ yarn add @prisma/client


  🛠️ Inicializar o prisma
  - ✨ yarn prisma init


  🛠️ Biblioteca para o prisma formatar o schema
  - ✨ yarn prisma format


  🛠️ Comando para criar a migration
  - ✨ yarn prisma migrate dev


  🛠️ Biblioteca para tratar errors
  - ✨ yarn add express-async-errors

  🛠️ Biblioteca para upload de imagem
  - ✨ yarn add multer

  🛠️ Biblioteca para recuperação de senha
  - ✨ yarn add nodemailer

  🛠️ Biblioteca para criar um template para email
  - ✨ yarn add handlebars
```

## 🛠️ Configurações Para Executar o servidor
```cl
  Para criar um script de execução do servidor no package.json, é necessário passar três comandos.
  
  ## impede que o prisma pare o servidor sempre que houver uma modificação, portanto será responsável por reiniciar o servidor, sempre que algo novo for salvo
  ✨ --exit-child

  ## permite que o servidor execute com agilidade, pois ignora validações desnecessárias
  ✨ --transpile-only

  ## ignora a pasta node_modules
  ✨ --ignore-watch

  Exemplo de script
  "scripts": {
    "dev": "ts-node-dev --exit-child --transpile-only --ignore-watch node_modules src/server.ts"
  },
```

<br />

<div align="center">
  <small>Desenvolvido por Laciene Melo - Junho/2022</small>
</div>
