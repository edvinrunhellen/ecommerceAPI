import express from 'express';
const app = express();

//middlewares
app.use(express.json())


app.get('/products', function (req, res) {
    res.send(products)
})

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