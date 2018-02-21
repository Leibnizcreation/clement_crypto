import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Search from "./search"
import Navbar from "../navbar/index"
import Category from "./category"
import Mostvisited from "./mostvisited"
class Hompage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Search />
                <Category />
                <Mostvisited />
            </div>
        )
    }
}

export default Hompage;