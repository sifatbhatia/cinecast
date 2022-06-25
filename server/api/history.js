const express = require('express');
const History = require('../models/history');

const router = express.Router();

router.get('/history', async (req, res, next) => {
  try {
    const weatherInfo = await History.findAll();
    return res.send(weatherInfo);
  } catch (err) {
    next({ status: 400, message: 'failed to get todos' });
  }
});
router.post('/history', async (req, res, next) => {
  try {
    const post = new History({
      location: req.body.location,

    });
    await post.save();
    return res.send(post);
  } catch (err) {
    next({ status: 400, message: 'failed to create todo' });
  }
});
router.delete('/history', async (req, res, next) => {
  try {
    await History.destroy({
      where: {},
      truncate: true,
    });
    return success(res, 'todo deleted!');
  } catch (err) {
    next({ status: 400, message: 'failed to delete todo' });
  }
});

module.exports = router;
