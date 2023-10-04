import { request } from 'express';
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

async function getRequest(req, res, next) {
    try {
        res.send(await requestService.executeGet(req.params.id));
    } catch (err) {
        next(err);
    }
}

async function getClientRequestValue(req, res, next) {
    try {
        const request = req.body;

        if(!request.cliente) {
            throw new Error('É obrigatório o envio do nome de um cliente');
        }

        res.send(await requestService.executeGetClientValue(request.cliente));
        // res.sendStatus(await requestService.executeGetClientValue(request.cliente));
    } catch (err) {
        next(err);
    }
}

async function getOrderRequestValue(req, res, next) {
    try {
        const request = req.body;

        if(!request.produto) {
            throw new Error('É obrigatório o envio do nome do produto.');
        }

        res.send(await requestService.executeGetOrderValue(request.produto));
    } catch (err) {
        next(err);
    }
}

async function getValueableRequest(req, res, next) {
    try {
        res.send(await requestService.executeGetValueableRequest());
    } catch (err) {
        next(err);
    }
}

export default {
    createRequest,
    updateRequest,
    updateStatusRequest,
    deleteRequest,
    getRequest,
    getClientRequestValue,
    getOrderRequestValue,
    getValueableRequest
};
