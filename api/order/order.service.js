const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
    try {
        const criteria = _buildCriteria()
        const collection = await dbService.getCollection('order')
        const orders = await collection.find(criteria).toArray()
        return orders

    } catch (err) {
        logger.error('cannot find reviews', err)
        throw err
    }
}

async function getById(orderId) {
    try {
        const collection = await dbService.getCollection('order')
        const order = await collection.findOne({ '_id': ObjectId(orderId) })
        return order
    } catch (err) {
        // logger.error(`while finding order ${order._id}`, err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    return criteria
}



async function remove(orderId) {
    try {
        const collection = await dbService.getCollection('order')
        const query = { _id: ObjectId(orderId) }
        await collection.deleteOne(query)
    } catch (err) {
        logger.error(`cannot remove order ${orderId}`, err)
        throw err
    }
}
async function add(order) {
    try {
        const collection = await dbService.getCollection('order')
        // const query = { _id: ObjectId(orderId) }
        await collection.insertOne(order)
    } catch (err) {
        logger.error(`cannot add order ${order}`, err)
        throw err
    }
}





module.exports = {
    query,
    getById,
    remove,
    add
}


