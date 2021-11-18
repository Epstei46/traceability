const houses = require('./db.json')
let globalHouseId = 4

module.exports = {
    getAllHouses: (req, res) => {
        // console.log(houses)
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        let housesIndex = houses.findIndex((house) => house.id === Number(req.params.id));
        // console.log(housesIndex);
        houses.splice(housesIndex, 1)
        res.status(200).send(houses)
        globalHouseId--
    },
    createHouse: (req, res) => {
        // console.log(req)
        // console.log(req.body)
        let {address, price, imageURL} = req.body;
        let newHouse = {
            id: globalHouseId,
            address: address,
            price: price,
            imageURL: imageURL
            // imageURL: req.body.imageURL
        };
        houses.push(newHouse);
        res.status(200).send(houses)
        globalHouseId++
    },
    updateHouse: (req, res) => {
        let housesIndex = houses.findIndex((house) => house.id === Number(req.params.id));
        // console.log(req.body.type)
        if (req.body.type === 'plus'){
            houses[housesIndex].price += 10000
        } else if (req.body.type === 'minus'){
            houses[housesIndex].price -= 10000
        }
        res.status(200).send(houses)
    }
}