import React, { Component } from 'react';

class App extends Component {
    constructor(){ //First LCM
      super()
      this.state = {
        products: [],//initial empty,
        sampleProduct: [
          {
            productName: 'Soup',
            productPrice: '5',
            productId: 1234
          },
          {
            productName: 'Biscuit',
            productPrice: '10',
            productId: 4321
          },
          {
            productName: 'Water Bottles',
            productPrice: '100',
            productId: 5468
          }
        ]
      }
    }

    componentWillMount(){ //second LCM

    }

    render() {// Render must be pure function, no state Changes
      return (
          <div onClick={()=>this.setState({name:'vikram'})}>
            {
              this.state.products.map((eachProduct,index)=>{
                return(
                  <div>
                    Product Name: {eachProduct.productName} -
                    Product Price: {eachProduct.productPrice} -
                    Product Id: {eachProduct.productId}
                    <br/>
                  </div>
                )
              })
            }
            {/*// Product Name: {this.state.sampleProduct[0].productName} -
            // Product Price: {this.state.sampleProduct[0].productPrice} -
            // Product Id: {this.state.sampleProduct[0].productId}
            // <br/>
            // Product Name: {this.state.sampleProduct[1].productName} -
            // Product Price: {this.state.sampleProduct[1].productPrice} -
            // Product Id: {this.state.sampleProduct[1].productId}
            // <br/>
            // Product Name: {this.state.sampleProduct[2].productName} -
            // Product Price: {this.state.sampleProduct[2].productPrice} -
            // Product Id: {this.state.sampleProduct[2].productId} */}
          </div>
      );
    }

    componentDidMount(){
      fetch('https://api.myjson.com/bins/14p92f')// 500 Asychnour
      .then(htmlResponse=>{
        return htmlResponse.json()
      })
      .then(jsonResponse=>{
        this.setState({
          products: jsonResponse
        })
      })
    }

}

/*

constructor - Mahesh
componentWillMount - Narayana API call pending
render Narayana -
componentDidMount Aditya
render Aditya


API call pending - Tejas setState
Render - Tejas


*/

module.exports = App
