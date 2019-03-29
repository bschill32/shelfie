import React, { Component } from "react"
import axios from "axios"

class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      price: 0,
      img: "",
      id: ""
    }
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    })
  }
  handlePriceChange = e => {
    this.setState({
      price: e.target.value
    })
  }
  handleImgChange = e => {
    this.setState({
      img: e.target.value
    })
  }

  clearInput = () => {
    this.setState({
      name: "",
      price: 0,
      img: ""
    })
  }

  addProduct = () => {
    const { name, price, img } = this.state
    axios
      .post(`/api/product`, { name, price, img })
      .then(res => {
        this.setState({
          name: "",
          price: 0,
          img: ""
        })
      })
      .catch(err => {
        console.log(`There is an ${err}`)
      })
    this.props.getProduct()
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <h1>Form</h1>
        <input
          value={this.state.name}
          type="text"
          onChange={this.handleNameChange}
          placeholder="Name"
        />
        <input
          value={this.state.price}
          type="text"
          onChange={this.handlePriceChange}
          placeholder="Price"
        />
        <input
          value={this.state.img}
          type="text"
          onChange={this.handleImgChange}
          placeholder="Photo"
        />
        <button onClick={this.clearInput}>Cancel</button>
        <button onClick={() => this.addProduct()}>Add to Inventory</button>
      </div>
    )
  }
}

export default Form
