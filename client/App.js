/* Creating a react component is simpler than it sounds like */
import React, { Component } from 'react';
/*First and the for most thing we do is to get the react library,
  we use a keyword called import to import React library and put it in a variable called
  React, we also import Component(notice the component is is flower braces because it is a not a main
  module but a submodule)

  form is another keyword we use. it's simple as english statement

  get eggs from grocery store, instead of get we use import and instead of grocery store we use npm registry
  )

 */
class App extends Component {
/*
    Now we have a react library, which does not do anything until unless we add some more fancy thing to it, like
    I have a baked cake but no cream and decoration on it.

    I get the baked cake and decorate with extra stuff. which in sense I extend the cake to make it more beautiful

    bakedcake is the component, We need to add somthing on top of it to make it in a way we wanted.

    we do this by keyword extend.
    class App(This is the component name we are about to create, and this can be anything but with one condtion.
    should start with capital letter
  )

*/
    constructor(){
      /*
          constructor is the first and fore most life cycle method when we create a react component.
          we use this method to create a state of the component.
          Well what is a State ?
          To put it simple state is nothing but a piece of data that is actively observed by lifecycle methods

      */
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

      /*

          Everything that is inside the this.state becomes part of state.

      */
    }

    componentWillMount(){ //second LCM
      /*

          This is the second life cycle method that is called when initialization

      */
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
