import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Search from "./search"
import Section from "./section"
import Category from "./category"
import Mostvisited from "./mostvisited"
import Navbar from "../navbar/index"
import Footer from "../footer/index"
class Hompage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Search />
                {/* <Category /> */}
                {/* <Mostvisited /> */}
                <Section />
                <Footer />
            </div>
        )
    }
}

export default Hompage;