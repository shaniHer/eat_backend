const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
    try {
        const criteria = _buildCriteria()
        const collection = await dbService.getCollection('meal')
        const meals = await collection.find(criteria).toArray()
        return meals

    } catch (err) {
        logger.error('cannot find reviews', err)
        throw err
    }
}

async function getById(mealId) {
    try {
        const collection = await dbService.getCollection('meal')
        const meal = await collection.findOne({ '_id': ObjectId(mealId) })
        return meal
    } catch (err) {
        // logger.error(`while finding meal ${meal._id}`, err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    return criteria
}



async function remove(mealId) {
    try {
        const collection = await dbService.getCollection('meal')
        const query = { _id: ObjectId(mealId) }
        await collection.deleteOne(query)
    } catch (err) {
        logger.error(`cannot remove meal ${mealId}`, err)
        throw err
    }
}

async function add(meal) {
    try {
        const collection = await dbService.getCollection('meal')
        // const query = { _id: ObjectId(mealId) }
        await collection.insertOne(meal)
        // const savedMeal = await collection.insertOne(meal)
        // console.log('savedMeal',savedMeal);
        // return savedMeal
    } catch (err) {
        logger.error(`cannot add meal ${meal}`, err)
        throw err
    }
}


async function update(meal) {
    try {
        const collection = await dbService.getCollection('meal')
        const updateMeal = await collection.findOne({ '_id': ObjectId(meal.mealId) })

        
        meal.guests += +updateMeal.guests
        updateMeal.guests = meal.guests
        await collection.updateOne({ _id: ObjectId(meal.mealId)}, { $set: updateMeal })
    //    console.log('updateMealupdateMeal',updateMeal);
        return updateMeal;
    } catch (err) {
        // logger.error(`cannot update toy ${toy._id}`, err)
        throw err
    }
}





module.exports = {
    query,
    getById,
    remove,
    add,
    update
}


