### Instalação do Repositório
git clone https://github.com/VitorArgeri/NoteHub
cd NoteHub

### Instruções Pós-Clone
npm install
Criar um arquivo .env com DATABASE_URL="file:./dev.db"
Rodar "npx prisma migrate dev --name [NOME DO PROJETO]" 

### Descrição das Rotas
GET = Listar
POST = Criar
PUT = Atualizar
DELETE = Deletar

### Como chamar as rotas pelo Postman
GET /: Lista todas as notas.
GET /:id: Retorna uma nota pelo ID.
POST /: Cria uma nova nota.
PUT /:id: Atualiza uma nota pelo ID.
PUT /favorita/:id: Marca ou desmarca uma nota como favorita.
DELETE /:id: Deleta uma nota pelo ID.

PORT = 3000