const getCropsByUserService = require('../services/getCropsByUserService');


const getCropsByUserController = (req, res) => {

    const crops = getCropsByUserService(req.body.id);

    res.json({
            data: crops
        });
};

module.exports = getCropsByUserController;