# Node Express Prisma MVC API

Este projeto é uma API RESTful construída com Node.js, Express e Prisma ORM, usando MySQL como banco de dados. Segue o padrão MVC (Model-View-Controller) e inclui recursos básicos de CRUD para Usuários e Posts, além de um frontend estático minimalista.

### Funcionalidades

- **Users** (CRUD completo)
- **Posts** (CRUD completo, com relação ao autor)
- Conexão e migrações via Prisma
- Estrutura organizada em Models, Controllers e Routes
- Frontend básico para criação e listagem de Usuários (HTML/JS)

### Pré-requisitos

- Node.js >= 14
- MySQL (acesso e privilégios para criar banco)

### Instalação

1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   npm install
   node src/server.js
