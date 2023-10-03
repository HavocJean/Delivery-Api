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

export default {
    executeCreate,
    executeUpdate,
    executeStatusUpdate,
    executeDelete,
}