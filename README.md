# NLW Agents

Projeto desenvolvido durante o evento NLW da Rocketseat.

## Tecnologias e Bibliotecas Utilizadas

### Backend (`server/`)
- **Node.js** + **TypeScript**
- **Fastify**: Framework web para APIs rápidas
- **Drizzle ORM**: ORM para PostgreSQL
- **Zod**: Validação de esquemas
- **dotenv**: Variáveis de ambiente
- **drizzle-kit**: Migrações e seed do banco
- **PostgreSQL** (com extensão `vector`)
- **Biome**: Lint e formatação de código

### Frontend (`web/`)
- **React** + **TypeScript**
- **Vite**: Bundler e dev server
- **Tailwind CSS**: Utilitários de estilo
- **@tanstack/react-query**: Gerenciamento de dados assíncronos
- **React Router DOM**: Rotas SPA
- **Radix UI** e **lucide-react**: Componentes e ícones
- **Biome**: Lint e formatação de código

## Padrões de Projeto
- **Backend**: Organização por responsabilidade (rotas, db, schema), validação com Zod, uso de Fastify plugins.
- **Frontend**: Componentização, hooks, atomic design para UI, consumo de API via React Query.

## Setup e Execução

### Pré-requisitos
- Node.js 18+
- Docker (para o banco de dados)

### Banco de Dados
1. Suba o banco com Docker:
   ```sh
   cd server
   docker-compose up -d
   ```
2. O banco estará disponível em `postgresql://docker:docker@localhost:5432/agents`.
3. Crie as tabelas e rode o seed:
   ```sh
   npm install
   npm run db:seed
   ```

### Backend
1. Instale as dependências:
   ```sh
   cd server
   npm install
   ```
2. Inicie o servidor em modo dev:
   ```sh
   npm run dev
   ```
   O backend roda por padrão em `http://localhost:3333`.

### Frontend
1. Instale as dependências:
   ```sh
   cd web
   npm install
   ```
2. Inicie o frontend:
   ```sh
   npm run dev
   ```
   O frontend roda por padrão em `http://localhost:5173`.

---

> Projeto criado para fins educacionais durante o NLW da Rocketseat.
