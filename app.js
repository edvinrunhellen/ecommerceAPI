import express from 'express';
const app = express();

//middlewares
app.use(express.json())


app.post('/products', function (req, res) {
    res.send("product added to inventory")
})

app.put('/products/:productId', function (req, res) {
    const productId = req.params.productId
    res.send("product updated in inventory")
})

app.get('/products/:productId', function (req, res) {
    const productId = req.params.productId
    const product = products.find(p => p.id === productId);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: "Product not found" });
    }
})

app.delete('/products/:productId', function (req, res) {
    const productId = req.params.productId
    res.send("product deleted in inventory")
})

app.get('/products', function (req, res) {
    const limit = parseInt(req.query.limit) || products.length;
    const limitedProducts = products.slice(0, limit);
    res.send(limitedProducts);
});



const products = [
    { id: "1", name: "swaggy t-shirt" },
    { id: "2", name: "swag cap 2000" },
    { id: "3", name: "swaggy pants" },
    { id: "4", name: "chill hoodie" },
    { id: "5", name: "cozy socks" },
    { id: "6", name: "ultimate sneakers" },
    { id: "7", name: "retro jacket" },
    { id: "8", name: "fashion shades" },
    { id: "9", name: "sporty leggings" },
    { id: "10", name: "vintage belt" },
    { id: "11", name: "classic beanie" },
    { id: "12", name: "luxury watch" },
    { id: "13", name: "premium scarf" },
    { id: "14", name: "stylish backpack" },
    { id: "15", name: "leather wallet" },
];
app.listen(3000)