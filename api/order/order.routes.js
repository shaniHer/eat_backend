const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getOrders, deleteOrder, getById, addOrder } = require('./order.controller.js')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

// router.post('/',  requireAuth, addReview)

router.get('/', getOrders)

router.get('/:id', getById)

router.delete('/:id', deleteOrder)

router.post('/', addOrder)




module.exports = router