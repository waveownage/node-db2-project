const express = require("express")
const knex = require("knex")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		const cars = await db("cars")
		
		res.json(cars)
	} catch(err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params
		const car = await db("cars").where({ id }).first()
		
		res.json(car)
	} catch(err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const fruitData = req.body
		const [id] = await db("fruits").insert(fruitData)
		const newFruit = await db("fruits").where({ id })

		res.status(201).json(newFruit)
	} catch(err) {
		next(err)
	}
})

module.exports = router