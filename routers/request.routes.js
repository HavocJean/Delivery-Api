import express, { request } from 'express';
import requestController from '../controllers/request.controller.js';

const router = express.Router();

router.post('/', requestController.createRequest);
router.put('/', requestController.updateRequest);
router.patch('/', requestController.updateStatusRequest);

router.delete('/:id', requestController.deleteRequest);
router.get('/:id(\\d+)', requestController.getRequest);

router.get('/client', requestController.getClientRequestValue);
router.get('/order', requestController.getOrderRequestValue);
router.get('/valuableOrder', requestController.getValueableRequest);

router.use((err, req, res, next) => {
    res.status(400).send({ error: err.message });
});

export default router;