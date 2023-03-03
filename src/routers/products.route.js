const { Router } = require("express")
const productsController = require("../controllers/product.controlles")
const productsRouter = Router()

productsRouter.get("/", productsController.getProducts)

module.exports = productsRouter