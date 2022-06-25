const List = require("../models/list");
var express = require('express');
var router = express.Router();


router.get("/list", async (req, res, next) => {
    try {
        const weatherInfo = await List.findAll();
        return res.send(weatherInfo);
    } catch (err) {
        next({ status: 400, message: "failed to get todos" });
    }
});

router.post("/list", async (req, res, next) => {

    try {

        const post = new List({
            location: req.body.location,
            weather: req.body.weather,
            date: req.body.date,

        })
        await post.save();
        return res.send(post);

    } catch (err) {
        next({ status: 400, message: "failed to create todo" });
    }
});

router.put("/list/:id", async (req, res, next) => {
    try {
        const post = await List.findByPk(
            req.params.id,
            req.body,{
                new: true
        }

        )

        return res.send(post);
    } catch (err) {
        next({ status: 400, message: "failed to update todo" });
    }
});
router.delete("/list/:id", async (req, res, next) => {
    try {
        await List.destroy({
            where: {
                id:req.params.id
               }
        });
        return success(res, "todo deleted!");
    } catch (err) {
        next({ status: 400, message: "failed to delete todo" });
    }
});
function success(res, payload) {
    return res.status(200).json(payload);
}


module.exports = router