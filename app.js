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
    const product = products.find(p => p.id === productId); // Sök efter produkten
    if (product) {
        res.send(product); // Om produkten hittas, returnera den
    } else {
        res.status(404).send({ message: "Product not found" }); // Om inte, returnera 404
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
    {
        id: "1",
        name: "swaggy t-shirt"
    },
    {
        id: "2",
        name: "swag cap 2000"
    },
    {
        id: "3",
        name: "swaggy pants"
    }
]

app.listen(3000)