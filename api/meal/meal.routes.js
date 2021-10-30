const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getMeals, deleteMeal, getById, addMeal, updateGuests } = require('./meal.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

// router.post('/',  requireAuth, addReview)

router.get('/', getMeals)

router.get('/:id', getById)

router.delete('/:id', deleteMeal)

router.post('/', addMeal)

router.put('/', updateGuests)


module.exports = router