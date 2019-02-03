import React, { Component } from 'react'
import { Link } from "react-router-dom"

import logo from '../logo.svg'
import '../App.css'

export class Home extends Component {
    render() {
        return (
            <div>
               <header className="Home-header">
                <img src={logo} className="Home-logo" alt="logo" />
                <p>
                    <Link to="/play" className="Home-link">
                        Play Happy Numbers!
                    </Link>
                </p>
                </header>
            </div>
        )
    }
}