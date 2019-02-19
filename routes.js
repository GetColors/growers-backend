const express = require('express');
const router = express.Router();

const getCropsByUserController = require("./src/controllers/getCropsByUserController");



router.get('/', (req, res) => {
    res.json({
        status:'working fine, yoi!'
    });
});

router.get('/crops', (req, res) => {
    getCropsByUserController(req, res);
});

module.exports = router;