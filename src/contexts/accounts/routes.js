const router = require('express').Router();

const accountsController = require('./controllers/accountsController');


router.get('/status', (req, res) => { res.json({message:"Accounts module is working fine."})});

router.get('/', accountsController.all );
router.get('/{id}', accountsController.find );
router.post('/', accountsController.create );
router.patch('/{id}', accountsController.update );
router.delete('/{id}', accountsController.remove );

module.exports = router;