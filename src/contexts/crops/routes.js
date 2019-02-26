const router = require('express').Router();

const cropsController = require('./controllers/cropsController');


router.get('/status', (req, res) => { res.json({message:"Crop module is working fine."})});

router.get('/', cropsController.all );
router.get('/:id', cropsController.find );
router.post('/', cropsController.create );
router.patch('/:id', cropsController.update );
router.delete('/:id', cropsController.remove );

module.exports = router;