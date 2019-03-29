import React, { Component } from "react"
import Product from "../Product/Product"
import axios from "axios"

class Dashboard extends Component {
  deleteProduct = id => {
    axios
      .delete(`/api/inventory/${id}`)
      .then(res => {
        this.setState({
          inventoryList: res.data
        })
      })
      .catch(err => {
        console.log(`There is an ${err}`)
      })
    this.props.deleteProduct()
  }

  render() {
    let eachProduct = this.props.inventoryList.map((item, i, arr) => {
      return <Product key={i} delete={this.deleteProduct} product={item} />
    })

    return (
      <div>
        <h1>Dashboard</h1>
        {eachProduct}
      </div>
    )
  }
}

export default Dashboard
