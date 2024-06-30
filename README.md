
# Project English

**Project English** é uma aplicação web desenvolvida para auxiliar usuários no aprendizado do inglês. Utilizando React para o frontend e Node.js com Nest.js para o backend, a aplicação oferece uma interface interativa onde os usuários podem engajar em conversas em inglês. Através de integrações com a API da OpenAI, a aplicação não só mantém conversas fluídas em inglês, mas também oferece correções e explicações detalhadas em português, ajudando os usuários a melhorar seu domínio do idioma. Com armazenamento de histórico de conversas no MongoDB, o sistema proporciona um ambiente contínuo de aprendizado, permitindo que os usuários revisem interações passadas para reforçar seu conhecimento.

## Pré-requisitos

- Node.js
- npm ou yarn
- MongoDB
- Conta na OpenAI

## Iniciando o Projeto

### 1. Clonar o repositório existente

Primeiro, clone o repositório existente do GitHub para o seu sistema local.

```sh
git clone https://github.com/kaicmurilo/Project-English.git
cd Project-English
```

### 2. Adicionar os arquivos do seu projeto

Copie todos os arquivos e diretórios do seu projeto atual para o diretório clonado do repositório. Se você está no diretório raiz do projeto atual, pode usar os seguintes comandos para copiar os arquivos:

```sh
cp -r /caminho/para/seu/projeto/* .
```

Certifique-se de substituir `/caminho/para/seu/projeto/` pelo caminho real onde seu projeto está localizado.

### 3. Adicionar, Comitar e Push das Mudanças

Adicione todos os novos arquivos ao Git, faça um commit e envie as mudanças para o repositório remoto.

```sh
git add .
git commit -m "Adicionando projeto atual"
git push origin main
```

Certifique-se de substituir "main" pelo nome da sua branch principal se for diferente.

### 4. Instalar dependências

#### Backend

```sh
cd backend
npm install
```

#### Frontend

```sh
cd ../frontend
npm install
```

## Configuração

### 1. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz dos diretórios `backend` e `frontend` com as seguintes variáveis:

#### Backend (.env)

```
MONGO_URI=mongodb://localhost:27017/project-english
OPENAI_API_KEY=your-openai-api-key
```

#### Frontend (.env)

```
PORT=3001
REACT_APP_API_URL=http://localhost:3000
```

### 2. Configurar a API do OpenAI

- Crie uma conta na [OpenAI](https://platform.openai.com/signup).
- Gere uma chave API e adicione-a ao arquivo `.env` do backend em `OPENAI_API_KEY`.

## Executar a aplicação

### 1. Iniciar o MongoDB

#### No Linux

```sh
sudo systemctl start mongod
```

#### No Windows

- Baixe e instale o MongoDB do [site oficial](https://www.mongodb.com/try/download/community).
- Inicie o serviço MongoDB pelo MongoDB Compass ou pelo Prompt de Comando:

```sh
"C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe"
```

#### Na Cloud

- Crie uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Configure um novo cluster e obtenha a string de conexão. Atualize a variável `MONGO_URI` no arquivo `.env` do backend com essa string.

### 2. Iniciar o backend

```sh
cd backend
npm start
```

### 3. Iniciar o frontend

```sh
cd frontend
npm start
```

## Uso

- Acesse `http://localhost:3001` no seu navegador para utilizar a aplicação.

## Instalação do MongoDB

### Linux

```sh
sudo apt-get install -y mongodb
sudo systemctl start mongod
sudo systemctl enable mongod
```

### Windows

- Baixe e instale o MongoDB do [site oficial](https://www.mongodb.com/try/download/community).
- Siga as instruções do instalador.

### Cloud (MongoDB Atlas)

- Crie uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Configure um novo cluster.
- Obtenha a string de conexão e substitua `MONGO_URI` no arquivo `.env` do backend.

## Contribuição

Se você deseja contribuir com este projeto, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para detalhes.
