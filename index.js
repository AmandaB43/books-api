const router = require("express").Router();

//GET INDEX
router.get('/', (req,res) => {
    res.send('Hello World')
})
