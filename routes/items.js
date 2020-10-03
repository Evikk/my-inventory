const express = require('express')
const router = express.Router();

const items = [
    {id: 1, name: 'Dell Latitude', description: 'i5 Intel Core', amount: 3},
    {id: 2, name: 'Xiaomi Redmi 8', description: '64GB Memory', amount: 5},
    {id: 3, name: 'Apple iPad', description: '10.2 inch, 32GB Memory', amount: 8}
];


router.get('/items', (req ,res) => {
    res.send(items);
});

router.get('/items/:id', (req ,res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) res.status(404).send('item not found!');
    res.send(item);
});

router.post('/items/', (req, res) => {
    const item = {
        id: items.length + 1,
        name: req.body.name,
        description: req.body.description,
        count: req.body.count
    };

    if(!item.name) {
        res.status(400).send('Name is required!');
        return;
    } else {
        items.push(item);
        res.send(item);
    }
})

router.delete('/items/:id', (req ,res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) res.status(404).send('item not found!');
    res.send(item);
});

router.put('/items/:id', (req ,res) => {
    let itemUpdate = {};
    let item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) res.status(404).send('item not found!');
    if (item.name) itemUpdate.name = req.body.name;
    if (item.description) itemUpdate.description = req.body.description;
    if (item.count) itemUpdate.count = req.body.count;
    
    if (!itemUpdate){
        res.status(400).send('No data was updated!');
    } else {
        item = itemUpdate;
        res.send(item);
    }
});


module.exports = router;