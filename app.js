import express from 'express';
const app = express();

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