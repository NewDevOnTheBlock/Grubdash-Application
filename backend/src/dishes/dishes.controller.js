const path = require("path");
// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));
// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

// validation middleware

// validate existence of current dish
function dishExists(req, res, next) {
    const { dishId } = req.params
    const foundDish = dishes.find(dish => dish.id === dishId)

    if (foundDish) {
        res.locals.dishId = dishId
        res.locals.dish = foundDish
        return next();
    }
    next({
        status: 404,
        message: `Dish does not exist: ${dishId}`
    })
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

// validate dish id matches the current dish
function idMatches(req, res, next) {
    const { data = {} } = req.body;
    if (!data.id || res.locals.dishId === data.id) {
        return next()
    }
    next({
        status: 400,
        message: `Dish id does not match route id. Dish: ${data.id}, Route: ${res.locals.dishId}`,
    })
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

// validate price values 
function priceIsValid(req, res, next) {
    const { data: { price } = {} } = req.body
    if (price > 0 && typeof(price) === "number") {
        return next()
    }
    next({
        status: 400,
        message: `Dish must have a price that is an integer greater than 0`,
    })
}


// validate properties of data object
function dataHasProperty(propertyName) {
    return function (req, res, next) {
        const { data = {} } = req.body
        if (data[propertyName]) {
            return next()
        }
        next({
            status: 400,
            message: `Dish must include ${propertyName}`
        })
    }
}

// TODO: Implement the /dishes handlers needed to make the tests pass

// list of all dishes
function list(req, res, next) {
    res.json({ data: dishes })
}

// read a single dish
function read(req, res, next) {
    res.json({ data: res.locals.dish })
}

// create a new dish and add it to the index
function create(req, res, next) {
    const { data: { name, description, price, image_url } = {} } = req.body

    const newDish = {
        id: nextId(),
        name,
        description,
        price,
        image_url,
    }

    dishes.push(newDish)
    res.status(201).json({ data: newDish })
}

// update an existing dish with new info
function update(req, res, next) {
    const { data: { name, description, price, image_url, id } } = req.body;

    res.locals.dish.id = id
    res.locals.dish.name = name
    res.locals.dish.description = description
    res.locals.dish.price = price
    res.locals.dish.image_url = image_url

    res.json({ data: res.locals.dish })
}

module.exports = {
    list,
    read: [dishExists, read],
    create: [
        dataHasProperty("name"),
        dataHasProperty("description"),
        dataHasProperty("price"),
        dataHasProperty("image_url"),
        priceIsValid,
        create
    ],
    update: [
        dishExists,
        dataHasProperty("name"),
        dataHasProperty("description"),
        dataHasProperty("price"),
        dataHasProperty("image_url"),
        priceIsValid,
        idMatches,
        update
    ],
    dishExists,
}