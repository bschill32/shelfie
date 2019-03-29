import React, { Component } from "react"
import "./App.css"
import Dashboard from "./components/Dashboard/Dashboard"
import Form from "./components/Form/Form"
import Header from "./components/Header/Header"
import axios from "axios"

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventoryList: [],
      selected: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios
      .get(`/api/inventory`)
      .then(res => {
        this.setState({
          inventoryList: res.data
        })
      })
      .catch(err => {
        console.log(`there is a ${err}`)
      })
  }

  render() {
    let { inventoryList, selected } = this.state
    return (
      <div className="App">
        <Header />
        <Form selected={selected} getProduct={this.componentDidMount} />
        <Dashboard
          deleteProduct={this.componentDidMount}
          inventoryList={inventoryList}
        />
      </div>
    )
  }
}

export default App
