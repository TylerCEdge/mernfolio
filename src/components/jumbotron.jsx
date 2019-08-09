import React, { Component } from 'react'
import './style.css'

export default class jumbotron extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h5 className="title">"Success is not final; failure is not fatal: It is the courage to continue that counts."</h5>
                        <h4 className="title">- Winston S. Churchill</h4>

                    </div>
                </div>
            </div>
        )
    }
}
