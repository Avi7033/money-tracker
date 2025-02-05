const express = require('express');
const cors = require('cors');
const Transaction = require('./models/Transaction.js');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/test', (req,res) => {
    res.json({body : 'test ok3'});
});

app.post('/api/transaction', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);

    const {name, description, datetime} = res.body;
    const transaction = await Transaction.create({name,description,datetime});

    res.json(transaction);
})

app.listen(4040);