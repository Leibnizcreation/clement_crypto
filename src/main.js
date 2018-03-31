// import React, { Component } from 'react';
// import { Route, Redirect } from "react-router-dom"
// import { connect } from "react-redux";
// function mapStateToProps(state) {
//     return { auth: state.auth }
// }
// class Privateroute extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <Route exact={true} path={this.props.path} render={
//                     (props) => {
//                         if (this.props.auth.isAuthenticated === true && this.props.auth.user.verified === true && this.props.auth.user.industry && this.props.auth.user.paid === true)
//                             return <this.props.component {...props} />

//                         else if (this.props.auth.isAuthenticated && this.props.auth.user.paid === true)
//                             return <Register {...props} />

//                         else
//                             return <Redirect
//                                 to={{
//                                     pathname: "/login",
//                                     state: { from: props.location }
//                                 }}
//                             />


//                     }
//                 } />
//             </div>
//         );
//     }
// }

// export default connect(mapStateToProps)(Privateroute);
