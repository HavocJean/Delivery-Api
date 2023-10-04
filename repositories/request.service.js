import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

async function insertRequest(request) {
    const data = JSON.parse(await readFile(global.fileName));
    const date_now = new Date();

    request = {
        id: data.nextId++,
        cliente: request.cliente,
        produto: request.produto,
        valor: request.valor,
        entregue: false,
        timestamp: date_now
    }

    data.pedidos.push(request);

    await writeFile(global.fileName, JSON.stringify(data, null, 2));

    return request;
}

async function getRequests() {
    const data = JSON.parse(await readFile(global.fileName));

    if(data) {
        return data.pedidos;
    }

    throw new Error('Registros não encontrados');
}

async function getRequest(id) {
    const requests = await getRequests();
    const request = requests.find(req => req.id === parseInt(id));

    return request;
}

async function updateRequest(request) {
    const data = JSON.parse(await readFile(global.fileName));
    const index = data.pedidos.findIndex(pedido => pedido.id === parseInt(request.id));

    if(index === -1) {
        throw new Error('Registro não encontrado..');
    }

    data.pedidos[index].cliente = request.cliente;
    data.pedidos[index].produto = request.produto;
    data.pedidos[index].valor = request.valor;
    data.pedidos[index].entregue = request.entregue;

    await writeFile(global.fileName, JSON.stringify(data, null, 2));
      
    return data.pedidos[index];
}

async function deleteRequest(id) {
    const data = JSON.parse(await readFile(global.fileName));
    data.pedidos = data.pedidos.filter(pedido => pedido.id !== parseInt(id));

    await writeFile(global.fileName, JSON.stringify(data, null, 2));
}

async function getClientRequestValue(client) {
    const requests = await getRequests();
    const request = requests.filter(req => req.cliente === client && req.entregue === true);
    let total = 0;

    if(Object.keys(request).length === 0) {
        throw new Error('Cliente não encontrado..');
    }

    Object.keys(request).forEach(key => {
        total += request[key].valor;
    });

    return `Total: R$ ${total}`;
}

async function getOrderRequestValue(order) {
    const requests = await getRequests();
    const request = requests.filter(req => req.produto === order && req.entregue === true);
    let total = 0;

    if(Object.keys(request).length === 0) {
        throw new Error('Cliente não encontrado..');
    }

    Object.keys(request).forEach(key => {
        total += request[key].valor;
    });

    return `Total de ${order}: R$ ${total}`;
}

async function getValueableRequest() {
    const requests = await getRequests();
    const request = requests.filter(req => req.entregue !== false);
    let result = {};

    for(let i = 0; i < request.length; i++) {
        let produto = request[i].produto;

        if(produto in result) {
            result[produto] += 1;
        } else {
            result[produto] = 1;
        }
    }

    const list_product = Object.fromEntries(
        Object.entries(result).sort(([,a],[,b]) => b-a)
    );

    return list_product;
}

export default {
    insertRequest,
    updateRequest,
    getRequest,
    deleteRequest,
    getClientRequestValue,
    getOrderRequestValue,
    getValueableRequest
}