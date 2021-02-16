import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
export default class Pocetna extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    setujAktivniLink(param) {
        return this.props.clicked == param ? "active" : "";
    }

    render() {
        return (
            <ul className="nav justify-content-end shadow p-3 mb-5  rounded navColor">
                <li className="nav-item">
                    <a
                        className={
                            "nav-link btn btn-info " +
                            this.setujAktivniLink("home")
                        }
                        href="http://127.0.0.1:8000/"
                    >
                        Pocetna
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={
                            "nav-link btn btn-info " +
                            this.setujAktivniLink("korisnici")
                        }
                        href="http://127.0.0.1:8000/korisnici"
                    >
                        Korisnici
                    </a>
                </li>
            </ul>
        );
    }
}

if (document.getElementById("pocetna")) {
    ReactDOM.render(<Pocetna />, document.getElementById("pocetna"));
}
