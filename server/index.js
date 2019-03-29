require("dotenv").config()
const express = require("express")
const massive = require("massive")

const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env
const controller = require("./controller")

app.use(express.json())

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db)
    console.log("db is coming to kill us!")
    console.log(db.listTables())
  })
  .catch(err => console.log("There is an error", err))

app.get(`/api/inventory`, controller.get)
app.post(`/api/product`, controller.create)
app.put(`/api/inventory/:id`, controller.update)
app.delete(`/api/inventory/:id`, controller.delete)

app.listen(SERVER_PORT, () =>
  console.log(`The Red Coats are Coming on ${SERVER_PORT}`)
)
