const cors = require('cors');
let express = require('express');
//setup express app 
const request = require('request');
const session = require('express-session');
let app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

let http = require('https');
const productRouter = require('./router.product');


var whitelist = ['http://localhost:4200', 'http://localhost'];
var corsOptions = {
    origin: function (origin, callback) {
        // if (!origin || whitelist.indexOf(origin) !== -1) {
        //     callback(null, true)
        // } else {
        //     callback(new Error('Not allowed by CORS'))
        // }
        callback(null, true)
    }
}

app.use(cors(corsOptions));
//basic route for homepage
app.get('/', (req, res) => {
    res.json('welcome to express app');
});

app.use('/api/product', productRouter);

// mongoose.Promise = global.Promise;
// mongoose.connect(config.DB, { useNewUrlParser: true }).then(
//     () => { console.log('Database is connected'); },
//     err => { console.log('Cannot connect to the database' + err) }
// );

const server = app.listen(3000, (err) => {
    if (err)
        throw err;
    console.log('listening on port 3000');
});

