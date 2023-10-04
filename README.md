# Delivery-Api

Desafio
API para controlar os pedidos de clientes de um delivery
Utilizando Express, JavaScript, NodeJS.


Funcionalidades da API

- Endpoint para criar o pedido.
- Endpoint para atualizar o pedido.
- Endpoint para atualizar o status da entrega.
- Endpoint para excluir o pedido.
- Endpoint para consultar o pedido em especifico.
- Endpoint para consultar o total do cliente que ele já gastou.
- Endpoint para consultar o valor total de determinado produto.
- Endpoint retorna os produtos mais vendido e a quantidade.


Utilizando um JSON para armazenamento com o seguinte formato (Necessário criar um pedidos.json na raiz do projeto):

{
  "nextId": 2,
  "pedidos": [
    {
      "id": 1,
      "cliente": "Jean",
      "produto": "Pizza de Calabresa",
      "valor": 29,
      "entregue": false,
      "timestamp": "2023-10-02T22:37:04.938Z"
    }
  ]
}


Exemplos de uso

POST   -> localhost/request -> Irá registrar o pedido
{
  "cliente": "Jean",
  "produto": "Pizza de Pizza",
  "valor": 17
}

PUT    -> localhost/request -> Irá atualizar o pedido
{
  "id": "1",
  "cliente": "Jean Torcato",
  "produto": "Pizza de Pizza",
  "valor": 39,
  "entregue": false
}

PATCH  -> localhost/request -> Irá atualizar apenas o status do pedido
{
  "id": "1",
  "entregue": true
}

GET    -> localhost/request/client -> Irá calcular o gasto do cliente

{ 
  cliente: "Jean" 
}

GET    -> localhost/request/order -> Irá calcular o quanto esse produto teve de lucro
{ 
  produto: "Pizza de pizza"
}

DELETE -> localhost/request/:id -> Irá deletar o pedido daquele id

GET    -> localhost/request/:id -> Irá exibir as informações do pedido

GET    -> localhost/request/valuableOrder -> Irá trazer a lista dos produtos, com a quantidade e por ordem decrescente