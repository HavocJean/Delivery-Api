import express from 'express';
import requestController from '../controllers/request.controller.js';

const router = express.Router();

router.post('/', requestController.createRequest);
router.put('/', requestController.updateRequest);
router.patch('/', requestController.updateStatusRequest);
router.delete('/:id', requestController.deleteRequest);

router.use((err, req, res, next) => {
    res.status(400).send({ error: err.message });
});

export default router;