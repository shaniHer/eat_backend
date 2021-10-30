const logger = require('../../services/logger.service')
const userService = require('../user/user.service')
const socketService = require('../../services/socket.service')
const mealService = require('./meal.service')



async function getMeals(req, res) {
    try {
        const meals = await mealService.query(req.query)
        res.send(meals)
    } catch (err) {
        logger.error('Cannot get meals', err)
        res.status(500).send({ err: 'Failed to get mealsaw' })
    }
}

async function getById(req, res) {
    try {
        const meal = await mealService.getById(req.params.id)
        res.send(meal)
    } catch (err) {
        logger.error('getById meal', err)
        res.status(500).send({ err: 'Failed to get mealsaw' })
    }
}

async function deleteMeal(req, res) {
    try {
        await mealService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete review', err)
        res.status(500).send({ err: 'Failed to delete review' })
    }
}

async function addMeal(req, res) {
    const meal = req.body
    try {
        await mealService.add(meal)
        res.send(meal)
    } catch (err) {
        logger.error('Failed to addMeal function', err)
        res.status(401).send({ err: 'in addMeal function' })
    }
}
async function updateGuests(req, res) {
    const meal = req.body
    try {
        const updateMeal = await mealService.update(meal)
        res.send(updateMeal)
    } catch (err) {
        // logger.error('Failed to addMeal function', err)
        res.status(401).send({ err: 'in addMeal function' })
    }
}


module.exports = {
    getMeals,
    getById,
    deleteMeal,
    addMeal,
    updateGuests
    // addReview
}