const logger = require('../../services/logger.service')
const userService = require('../user/user.service')
const socketService = require('../../services/socket.service')
const orderService = require('./order.service')



async function getOrders(req, res) {
    try {
        const orders = await orderService.query(req.query)
        res.send(orders)
    } catch (err) {
        logger.error('Cannot get orders', err)
        res.status(500).send({ err: 'Failed to get ordersaw' })
    }
}

async function getById(req, res) {
    try {
        const order = await orderService.getById(req.params.id)
        res.send(order)
    } catch (err) {
        logger.error('getById order', err)
        res.status(500).send({ err: 'Failed to get ordersaw' })
    }
}

async function deleteOrder(req, res) {
    try {
        await orderService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete review', err)
        res.status(500).send({ err: 'Failed to delete review' })
    }
}

async function addOrder(req, res) {
    const order = req.body
    try {
        await orderService.add(order)
        res.send(order)
    } catch (err) {
        logger.error('Failed to addOrder function', err)
        res.status(401).send({ err: 'in addOrder function' })
    }
}


module.exports = {
    getOrders,
    getById,
    deleteOrder,
    addOrder
    // addReview
}