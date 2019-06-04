"use strict";
const express = require("express");
const cartitems = require("./cart-items");
const router = express.Router();


router.get("/cartitems", (req,res) => {
    res.json(cartitems);
})

router.delete("/cartitems/:index", (req, res) => {
    cartitems.splice(req.params.index, 1); 
    res.json(cartitems);
});

router.post("/cartitems", (req, res) => {
    console.log(req.body);
    cartitems.push(req.body);
    res.json(cartitems);
})

router.put("/cartitems/:index", (req, res) => {
    cartitems.splice(req.params.index, 1, req.body);
    res.json(cartitems);
})

module.exports = router;
