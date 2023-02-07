/* @TODO Cette page n'est qu'un test, elle n'est pas prête encore. Je dois faire des recherche pour me souvenir
     comment mettre en place adéquatement la connexion à la db et le print ensuite.*/

var express = require('express');
var router = express.Router();
var dbClient = require('mongodb');

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */
async function connect() {
    const agg = [
        {
            '$sample': {
                'size': 8
            }
        }
    ];
    const client = await dbClient.MongoClient.connect(
        'mongodb+srv://ghastnier:268ab5J0EmXsbPHx@cluster0.glgdodb.mongodb.net/test',
        {useNewUrlParser: true, useUnifiedTopology: true}
    );
    try {
        const coll = client.db('pokemon').collection('cards');
        const cursor = coll.aggregate(agg);
        const result = await cursor.toArray();
        return result
    } catch (e) {
        console.log(e);
    }
    await client.close();
}

/* GET users listing. */
router.get('/', function (req, res, next) {
    let jsonResponse = {
        "handsetCards": [
            {title: connect().at(0).name, cols: 1, rows: 1},
            {title: connect().at(1).name, cols: 1, rows: 1},
            {title: connect().at(2).name, cols: 1, rows: 1},
            {title: connect().at(3).name, cols: 1, rows: 1},
            {title: connect().at(4).name, cols: 1, rows: 1},
            {title: connect().at(5).name, cols: 1, rows: 1},
            {title: connect().at(6).name, cols: 1, rows: 1},
            {title: connect().at(7).name, cols: 1, rows: 1},
        ],
        "webCards": [
            {title: connect().at(0).name, cols: 2, rows: 1},
            {title: connect().at(1).name, cols: 2, rows: 1},
            {title: connect().at(2).name, cols: 2, rows: 1},
            {title: connect().at(3).name, cols: 2, rows: 1},
            {title: connect().at(4).name, cols: 2, rows: 1},
            {title: connect().at(5).name, cols: 2, rows: 1},
            {title: connect().at(6).name, cols: 2, rows: 1},
            {title: connect().at(7).name, cols: 2, rows: 1},
        ]
    }
    res.json(jsonResponse)
});

module.exports = router;
