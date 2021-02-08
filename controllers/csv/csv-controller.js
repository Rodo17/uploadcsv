const express = require('express');
const router = express.Router();

const { csvService } = require('../../services');

router.post('/upload', async (req, res) => {
    const file = req.files.document.data.toString();

    res.send(await csvService.upload(file));
});

exports.router = router;