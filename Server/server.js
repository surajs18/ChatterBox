const express = require('express')
const app = express()
const port = 5000 || process.env.PORT;
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ChatterBox', { useNewUrlParser: true, useUnifiedTopology: true });

let Data = [];
let Texts = {};

app.use(cors({ origin: '*', }));
app.use(express.json());

//DB 

//Models{
const Datadb = mongoose.model("Datadb", mongoose.Schema({ 'data': { "chatheader": String, "chattext": String, "id": { type: String, unique: true } } }), 'Data');

const Textdb = mongoose.model("Textdb", mongoose.Schema({
    'ChatID': { type: Number, unique: true },
    'Texts': []
}), 'Texts');
//}

//Fetching data for Data {
var d = Datadb.find({}, { 'data': 1, '_id': 0 }).exec((err, res) => {
    if (err) {} else {
        var x = res;
        InsertData(x)
    }
});

function InsertData(x) {
    for (i in x) {
        Data[i] = x[i].data
    }
    // console.log(Data)
};
//}

//Fetching data for Data {
var d = Textdb.find({}, { 'ChatID': 1, '_id': 0, 'Texts': 1 }).exec((err, res) => {
    if (err) {} else {
        var x = res;
        InsertText(x)
            // console.log(x)
    }
})

// let collectedText = {}

function InsertText(x) {
    for (i in x) {
        Texts[Number(x[i].ChatID)] = x[i].Texts
            // console.log(x[i].ChatID, ':', x[i].Texts)
    }
    // console.log(Texts)
}
//}

//Updating Data {

function datawriter() {
    try {
        Data.map((i) => {
            iDat = new Datadb({ 'data': i });
            iDat.save((err) => {})
                // console.warn('Data')
        })
    } catch (e) {
        console.log(e);
    }
}

setInterval(() => { datawriter() }, 2500);
//}

//Updating Texts {

function textwriter() {
    try {
        {
            for (var i = 1; i < Data.length + 1; i++) {
                // console.log(i, ':', Texts[i], '\n')
                Textdb.updateOne({ 'ChatID': i }, { $set: { 'Texts': Texts[i] } }, { multi: true }, (err, res) => {})
                iText = new Textdb({ 'ChatID': i, 'Texts': Texts[i] });
                iText.save((err) => {})
            }
            // console.warn('Text')

        }
    } catch (e) { console.log(e) }
}

setInterval(() => { textwriter() }, 2500);
//}       


//Server
app.get('/', (req, res) => {
    res.status(200).json(Data);
    res.end();
})

app.get('/Chat=:id', (req, res) => {
    const chatId = Number(req.params.id)

    if (chatId in Texts) {
        res.status(200).json(Texts[chatId])
    } else {
        res.writeHead(300, { 'Content-type': 'text/html' })
        res.end('<h1> Chat Not Found </h1>')
    }
    res.end()
})

app.post('/', (req, res) => {
    const newData = req.body
    newData['id'] = Data.length + 1;
    Data = [...Data, newData]
    Texts[newData['id']] = []
    res.status(200).json([{ 'ChatCreated': true }])
    res.end()
})

app.post('/Chat=:id', (req, res) => {
    const newText = req.body
    const chatId = Number(req.params.id)
    if (chatId in Texts) {
        let existingText = Texts[chatId]
        var texti = String(existingText.length + 1)
        texti = String(chatId) + '.' + texti
        newText['textId'] = texti;
        Texts[chatId] = [...existingText, newText];
    } else {
        res.writeHead(300, { 'Content-type': 'text/html' })
        res.end('<h1> Chat Not Found </h1>')
    }
    res.status(200).json([{ 'TextSent': true }])
    res.end()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))