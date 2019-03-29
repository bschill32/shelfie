module.exports = {
  get: (req, res) => {
    req.app
      .get("db")
      .get_inventory()
      .then(allproducts => {
        res.status(200).send(allproducts)
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went terribly wrong." })
        console.log(err)
      })
  },

  create: (req, res) => {
    const { name, price, img } = req.body
    // console.log(name, price, img)
    req.app
      .get("db")
      .create_product(name, price, img)
      .then(() => {
        res.sendStatus(200)
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went terribly wrong." })
        console.log(err)
      })
  },

  update: (req, res) => {
    const { id } = req.params
    const { name, price, img } = req.body
    req.app
      .get("db")
      .update_product(id, name, price, img)
      .then(() => {
        res.sendStatus(200)
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went terribly wrong." })
        console.log(err)
      })
  },

  delete: (req, res) => {
    const { id } = req.params
    req.app
      .get("db")
      .delete_product(id)
      .then(() => {
        res.sendStatus(200)
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went terribly wrong." })
        console.log(err)
      })
  }
}
