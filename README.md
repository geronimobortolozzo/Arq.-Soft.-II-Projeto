Cadastrar novo usuário
Método: POST
URL: http://localhost:8082/usuarios/cadastro
Body (JSON):

json
Copiar
Editar
{
  "nome": "Murilo",
  "email": "murilo@email.com",
  "senha": "123456"
}

---------------------------------------

Fazer login do usuário
Método: POST
URL: http://localhost:8082/usuarios/login
Body (JSON):

json
Copiar
Editar
{
  "email": "murilo@email.com",
  "senha": "123456"
}

---------------------------------------

Cadastrar novo produto
Método: POST e GET
URL: http://localhost:8081/produtos
Body (JSON):

json
Copiar
Editar
{
  "nome": "Ração Super Premium",
  "tipo": "Cachorro",
  "descricao": "Ração sabor frango para cães adultos",
  "peso": 20,
  "preco": 204.0,
  "disponivel": true
}

(Get para ver todos os produtos)
---------------------------------------

Fazer um pedido
Método: POST 
URL: http://localhost:8083/pedidos
Body (JSON):

json
Copiar
Editar
{
  "usuarioId": 1,         
  "produtos": [1, 2],     
  "quantidades": [1, 1] 
}

---------------------------------------

Simular pagamento
Método: POST
URL: http://localhost:8084/pagamento
Body (JSON):

json
Copiar
Editar
{
  "pedidoId": 1,          // pegue da resposta do pedido
  "": 2
}
