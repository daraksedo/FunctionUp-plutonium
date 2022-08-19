const publisherModel = require("../models/publisherModel");

const createPublisher = async function (req, res) {
    const data = req.body;
    const publisher = await publisherModel.create(data);
    res.send({ publisher });
}

module.exports = createPublisher;