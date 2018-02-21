import React, { Component } from 'react';
// import Header from './component/header.js';
import Main from './main.js';
// import Footer from './component/footer.js';
class App extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         cartItems : []
    //      }
    // }
    // newUpdate(params){
    //     var added = this.state.cartItems.push(params)
    //     this.setState({cartItems: this.state.cartItems})
    // }
    render() {
        return (
            <div>
                {/* <Header itemsInCart={this.state.cartItems}/> */}
                {/* <Header/> */}
                {/* <Main newUpdate={this.newUpdate.bind(this)} state={this.state}/> */}
                <Main />
                {/* <Footer /> */}
            </div>
        );
    }
}

export default App;