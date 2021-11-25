const express = require('express')
const cors = require("cors");
const app = express()

app.use(cors());
app.use(express.json())

let notes = [
    {
      id: 1,
      title: "Hello world",
      content: "Your mom is easy",
      date: "2019-05-30T17:30:31.098Z",
    },
    {
      id: 2,
      title: "Hello papa ",
      content: "I like your wife",
      date: "2019-05-30T17:30:31.098Z",
    },
    {
      id: 3,
      title: "Naruto",
      content: "I like anime waifus",
      date: "2019-05-30T17:30:31.098Z",
    }
  ]

app.get('/', (req, res) => {
    res.send('<h1>hello</h1>')
})

app.get('/api/notes', (req, res) => {
  res.send(notes);
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
