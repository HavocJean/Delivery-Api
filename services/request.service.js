import requestRepository from '../repositories/request.service.js'

async function executeCreate(request) {
    return await requestRepository.insertRequest(request);
}

async function executeUpdate(request) {
    return await requestRepository.updateRequest(request);
}

async function executeStatusUpdate(request) {
    const pedido = await requestRepository.getRequest(request.id);
    pedido.entregue = request.entregue;

    return await requestRepository.updateRequest(pedido);
}

async function executeDelete(id) {
    return await requestRepository.deleteRequest(id);
}

async function executeGet(id) {
    return await requestRepository.getRequest(id);
}

async function executeGetClientValue(client) {
    return await requestRepository.getClientRequestValue(client);
}

async function executeGetOrderValue(order) {
    return await requestRepository.getOrderRequestValue(order);
}

async function executeGetValueableRequest() {
    return await requestRepository.getValueableRequest();
}

export default {
    executeCreate,
    executeUpdate,
    executeStatusUpdate,
    executeDelete,
    executeGet,
    executeGetClientValue,
    executeGetOrderValue,
    executeGetValueableRequest,
}