import requestService from '../services/request.service.js';

async function createRequest(req, res, next) {
    try {
        const request = req.body;

        if(!request.cliente || !request.produto || request.valor == null) {
            throw new Error('Cliente, produto e valor são campos obrigatórios!');
        }

        res.send(await requestService.executeCreate(request));
    } catch (err) {
       next(err);
    }
}

async function updateRequest(req, res, next) {
    try {
        const request = req.body;

        if(!request.produto || !request.id) {
            throw new Error('Id e produto são obrigatórios!');
        }

        res.send(await requestService.executeUpdate(request));
    } catch (err) {
       next(err);
    }
}

async function updateStatusRequest(req, res, next) {
    try {
        const request = req.body;

        if(!request.id || request.entregue == null) {
            throw new Error('Id e situação são obrigatórios');
        }

        res.send(await requestService.executeStatusUpdate(request));
    } catch (err) {
       next(err);
    }
}

async function deleteRequest(req, res, next) {
    try {
        await requestService.executeDelete(req.params.id);

        res.end();
    } catch (err) {
        next(err);
    }
}

export default {
    createRequest,
    updateRequest,
    updateStatusRequest,
    deleteRequest,
};
