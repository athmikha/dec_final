const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '12Athmikha@', 
    database: 'del_prac'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.post('/login', (req, res) => {
    db.query('INSERT INTO login (name,password) VALUES (?, ?)',
    [req.body.name,req.body.password ],
    (err, result) => {
        if (err) {
            console.error('Error saving calculation:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        console.log(result,"result")
        res.json({ result:"logged in " });
    }
);
});