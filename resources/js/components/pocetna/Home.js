import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "../Navbar";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            knjige: []
        };
        this.getSveKnjige();
    }
    getSveKnjige() {
        axios.get("http://127.0.0.1:8000/knjiga/ucitaj-sve").then(res => {
            this.setState({ knjige: res.data.knjige });
        });
    }
    render() {
        return [
            <Navbar clicked="home" />,
            <main role="main" class="container">
                <h1>Dobrodosli, spremite se za laku kupovinu knjiga!</h1>
                <h4>Knjige koje trenutno imamo u ponudi:</h4>

                <div className="row">
                    <div className="col-5">
                        <div className="table-wrapper">
                            <table className="table table-info ">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Naziv</th>
                                        <th>Autor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.knjige.map(k => {
                                        return (
                                            <tr>
                                                <td>{k.naslov}</td>
                                                <td>{k.autor}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <p className="lead">
                                Pocnite kupovinu knjiga klikom na{" "}
                                <a href="http://127.0.0.1:8000/korisnici">
                                    linku
                                </a>{" "}
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <img
                            className="m-2 img img-thumbnail"
                            src="./img/bg1.jpg"
                        ></img>
                    </div>
                </div>
            </main>
        ];
    }
}

if (document.getElementById("home")) {
    ReactDOM.render(<Home />, document.getElementById("home"));
}
