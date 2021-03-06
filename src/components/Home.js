import React, { Component } from 'react'
import { Link } from "react-router-dom"

import logo from '../smile.png'
import '../App.css'

export class Home extends Component {
    render() {
        return (
            <div>
               <header className="Home-header">
                <img src={logo} className="Home-logo" alt="logo" />
                <br />
                <p>
                    <Link to="/play" className="Home-link">
                        Play the Happy Number Game!
                    </Link>
                </p>
                </header>
            </div>
        )
    }
}