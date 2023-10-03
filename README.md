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
- Endpoint retorna os produtos mais vendido e a quantidade.


Utilizando um JSON para armazenamento com o seguinte formato:
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
