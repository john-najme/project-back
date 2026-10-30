import {Router} from "express";
const router =Router();

router.get('/',(req,res) => {
    res.send('Budget routes successfully loaded.');
})

export default router;